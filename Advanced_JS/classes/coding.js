// DON'T CHANGE THESE LINES
const TOOLS = ['rock', 'paper', 'scissors']
function getRandomTool() {
    return TOOLS[parseInt(Math.random() * TOOLS.length)]
}

// YOUR SOLUTION GOES HERE

function printLine() {
    console.log('---------------------------------------------')
}

////////////
// PLAYER //
////////////
class Player {
    constructor(name) {
        this.name = name                // the player's name
        this.currScore = 0              // wins for the current game
        this.choices = []               // history of choices
        this.frequencies = {            // number of occurrences of each tool
            rock: 0,
            paper: 0,
            scissors: 0
        }
        this.tool = null                // the current chosen tool
    }

    chooseTool() {
        const tool = getRandomTool()
        this.choices.push(tool)
        this.tool = tool
        this.updateFrequencies()
    }

    updateFrequencies() {
        this.frequencies = this.choices.reduce((acc, tool) => {
            if (acc[tool]) {
                acc[tool]++
            }
            else {
                acc[tool] = 1
            }
            return acc
        }, {})
    }

    frequenciesAsString() {
        const { rock, paper, scissors } = this.frequencies
        return `rock: ${rock}, paper: ${paper}, scissors: ${scissors}`
    }
}

function getToolThatBeats(tool) {
    switch (tool) {
        case 'rock': return 'paper'
        case 'paper': return 'scissors'
        case 'scissors': return 'rock'
    }
}

/////////
// BOT //
/////////
class Bot extends Player {
    constructor() {
        super('Bot')
        this._opponentPreviousTool = null
    }

    get opponentPreviousTool() {
        return this._opponentPreviousTool
    }
    set opponentPreviousTool(opt) {
        this._opponentPreviousTool = opt
    }

    chooseTool() {
        const tool = this._opponentPreviousTool ? getToolThatBeats(this._opponentPreviousTool) : 'rock'
        this.choices.push(tool)
        this.tool = tool
        this.updateFrequencies()
    }
}

//////////
// GAME //
//////////
class Game {
    constructor(p1, p2) {
        this.p1 = p1
        this.p2 = p2
        this.roundNum = 0
    }

    findWinner() {
        switch (this.p1.tool) {
            case 'rock':
                if (this.p2.tool === 'rock') return null
                if (this.p2.tool === 'paper') return this.p2
                if (this.p2.tool === 'scissors') return this.p1
            case 'paper':
                if (this.p2.tool === 'rock') return this.p1
                if (this.p2.tool === 'paper') return null
                if (this.p2.tool === 'scissors') return this.p2
            case 'scissors':
                if (this.p2.tool === 'rock') return this.p2
                if (this.p2.tool === 'paper') return this.p1
                if (this.p2.tool === 'scissors') return null
        }
    }

    playRound() {
        this.roundNum++
        const { p1, p2 } = this
        p1.chooseTool()
        p2.chooseTool()
        const winner = this.findWinner()
        if (winner) {
            winner.currScore++
        }
        const result = winner ? `${winner.name} wins round ${this.roundNum}` : `Round ${this.roundNum} was a draw!`
        console.log(`${p1.name} chose ${p1.tool}`)
        console.log(`${p2.name} chose ${p2.tool}`)

        console.log(`${result}`)
        console.log(`  ${p1.name}'s score: ${p1.currScore}`)
        console.log(`  ${p2.name}'s score: ${p2.currScore}`)

        // Set the Bot's opponentPreviousTool
        if (p1 instanceof Bot) {
            p1.opponentPreviousTool = p2.tool
        }
        if (p2 instanceof Bot) {
            p2.opponentPreviousTool = p1.tool
        }
    }

    playGame() {
        const { p1, p2 } = this
        printLine()
        console.log(`Game started for ${p1.name} & ${p2.name}`)
        printLine()
        while (p1.currScore < 3 && p2.currScore < 3) {
            this.playRound()
        }

        const gameWinner = p1.currScore === 3 ? p1 : p2
        printLine()
        console.log(`The Game Winner is ${gameWinner.name}!`)
        console.log(`${p1.name} used the following tools:`, p1.frequenciesAsString())
        console.log(`${p2.name} used the following tools:`, p2.frequenciesAsString())
        printLine()
    }
}

function start() {
    // Let's Play
    const player1 = new Player('Erin')
    const player2 = new Bot()

    const game = new Game(player1, player2)
    game.playGame()
}

// start()


// DON'T CHANGE ANYTHING BELOW THIS LINE

module.exports = {
    Player,
    Bot,
    Game
}
