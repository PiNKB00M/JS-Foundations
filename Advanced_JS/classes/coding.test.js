const {
    Player,
    Bot,
    Game
} = require('./coding');

// Spy on the `console.log` calls
let consoleSpy = null
beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => { })
})
afterEach(() => {
    consoleSpy.mockRestore()
})

// Helpers to mock out Math.random to control the game
const mockMath = Object.create(global.Math)
global.Math = mockMath

function setMathRandomToRock() {
    mockMath.random = () => 0.1
}
function setMathRandomToPaper() {
    mockMath.random = () => 0.5
}
function setMathRandomToScissors() {
    mockMath.random = () => 0.9
}
// pass in an array of expected tools to be chosen in a specific order
function setMathRandomTo(expectedTools) {
    const expectedValues = expectedTools.map(tool => {
        switch (tool) {
            case 'rock': return 0.1
            case 'paper': return 0.5
            case 'scissors': return 0.9
        }
    })
    let index = 0
    mockMath.random = function () {
        const v = expectedValues[index]
        index = (index + 1) % expectedValues.length
        return v
    }
}

describe('Player', () => {
    it('creates a player with a name, currScore, choices array, and frequencies object', () => {
        const player = new Player('Homer')
        expect(player.name).toBe('Homer')
        expect(player.currScore).toBe(0)
        expect(player.choices).toStrictEqual([])
        expect(player.frequencies).toStrictEqual({
            rock: 0,
            paper: 0,
            scissors: 0
        })
    })
    it('has a chooseTool method that sets the player\'s current tool', () => {
        const player = new Player('Homer')

        setMathRandomToRock()
        player.chooseTool()
        expect(player.tool).toBe('rock')

        setMathRandomToPaper()
        player.chooseTool()
        expect(player.tool).toBe('paper')

        setMathRandomToScissors()
        player.chooseTool()
        expect(player.tool).toBe('scissors')
    })
    it('has a updateFrequencies method that set\'s the player\'s tool frequency', () => {
        const player = new Player('Homer')

        expect(player.frequencies).toStrictEqual({
            rock: 0,
            paper: 0,
            scissors: 0
        })

        setMathRandomToRock()
        player.chooseTool()

        setMathRandomToPaper()
        player.chooseTool()
        player.chooseTool()

        setMathRandomToScissors()
        player.chooseTool()
        player.chooseTool()
        player.chooseTool()

        player.updateFrequencies()
        expect(player.frequencies).toStrictEqual({
            rock: 1,
            paper: 2,
            scissors: 3
        })
    })
})

describe('Bot', () => {
    it('creates a player with a name that is always "Bot"', () => {
        const bot = new Bot()
        expect(bot.name).toBe('Bot')
    })
    it('chooses "rock" as its first tool', () => {
        const bot = new Bot()
        bot.chooseTool()
        expect(bot.tool).toBe('rock')
    })
    it('chooses a tool that will beat the previousOpponentTool', () => {
        const bot = new Bot()
        bot.opponentPreviousTool = 'rock'
        bot.chooseTool()
        expect(bot.tool).toBe('paper')

        bot.opponentPreviousTool = 'paper'
        bot.chooseTool()
        expect(bot.tool).toBe('scissors')

        bot.opponentPreviousTool = 'scissors'
        bot.chooseTool()
        expect(bot.tool).toBe('rock')
    })
})

describe('Game', () => {
    it('has two players, p1 and p2, and a roundNum initialized to 0', () => {
        const p1 = new Player('Homer')
        const p2 = new Bot()
        const game = new Game(p1, p2)
        expect(game.p1).toBe(p1)
        expect(game.p2).toBe(p2)
        expect(game.roundNum).toBe(0)
    })
    it('has a findWinner method that returns the winner or null for a draw', () => {
        const p1 = new Player('Homer')
        const p2 = new Bot()
        const game = new Game(p1, p2)

        const scenarios = [
            ['rock', 'rock', null],
            ['rock', 'paper', p2],
            ['rock', 'scissors', p1],
            ['paper', 'rock', p1],
            ['paper', 'paper', null],
            ['paper', 'scissors', p2],
            ['scissors', 'rock', p2],
            ['scissors', 'paper', p1],
            ['scissors', 'scissors', null],
        ]

        scenarios.forEach(sc => {
            p1.tool = sc[0]
            p2.tool = sc[1]
            expect(game.findWinner()).toBe(sc[2])
        })
    })

    describe('playRound', () => {
        it('plays a single round that ends in a DRAW', () => {
            const p1 = new Player('Homer')
            const p2 = new Bot()
            const game = new Game(p1, p2)

            setMathRandomToRock()

            game.playRound()
            expect(consoleSpy.mock.calls).toEqual(expect.arrayContaining([
                ['Homer chose rock'],
                ['Bot chose rock'],
                ['Round 1 was a draw!'],
            ]))
        })

        it('plays a single round that ends with a winner', () => {
            const p1 = new Player('Homer')
            const p2 = new Bot()
            const game = new Game(p1, p2)

            setMathRandomTo(['paper'])

            game.playRound()
            expect(consoleSpy.mock.calls).toEqual(expect.arrayContaining([
                ['Homer chose paper'],
                ['Bot chose rock'],
                ['Homer wins round 1'],
            ]))
        })
    })

    describe('playGame', () => {
        it('plays rounds until a player reaches 3 wins, setting the Bot\'s previousOpponentTool along the way', () => {
            const p1 = new Player('Homer')
            const p2 = new Bot()
            const game = new Game(p1, p2)

            setMathRandomTo([
                'rock',                     // DRAW as the Bot will also choose 'rock' - 0 to 0
                'rock',                     // Bot wins as it will choose 'paper'      - 0 to 1
                'scissors',                 // Homer wins as Bot will choose 'paper'   - 1 to 1
                'scissors',                 // Bot wins as it will choose 'rock'       - 1 to 2
                "paper",                    // Homer wins as Bot will choose 'rock'    - 2 to 2
                "scissors",                 // DRAW as Bot will choose 'scissors'      - 2 to 2
                "scissors",                 // Bot wins as it will choose 'rock'       - 2 to 3
            ])

            game.playGame()

            expect(p1.currScore).toBe(2)
            expect(p2.currScore).toBe(3)
        })
        it('prints out the winner', () => {
            const p1 = new Player('Homer')
            const p2 = new Bot()
            const game = new Game(p1, p2)

            setMathRandomTo([
                'rock',                     // DRAW as the Bot will also choose 'rock'     - 0 to 0
                'rock',                     // Bot wins as it will choose 'paper'          - 0 to 1
                'scissors',                 // Homer wins as Bot will choose 'paper'       - 1 to 1
                'paper',                    // Homer wins as Bot will choose 'rock'        - 2 to 1
                "scissors",                 // DRAW as the Bot will also choose 'scissors' - 2 to 1
                'paper',                    // Homer wins as Bot will choose 'rock'        - 3 to 1
            ])

            game.playGame()

            expect(consoleSpy.mock.calls.map(r => Array.isArray(r) ? r.join(' ') : r)).toEqual(expect.arrayContaining([
                'The Game Winner is Homer!',
                'Homer used the following tools: rock: 2, paper: 2, scissors: 2',
                'Bot used the following tools: rock: 3, paper: 2, scissors: 1'
            ]))
        })
    })
})
