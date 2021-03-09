
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
function Player(name) {
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

Player.prototype.chooseTool = function () {
    const tool = getRandomTool()
    this.choices.push(tool)
    this.tool = tool
    this.updateFrequencies()
}

Player.prototype.updateFrequencies = function () {
    this.frequencies = this.choices.reduce((acc, tool) => {
        if (acc[tool]) {
            acc[tool]++
        }
        else {
            acc[tool] = 1
        }
        return acc
    }, { rock: 0, paper: 0, scissors: 0 })
}

Player.prototype.frequenciesAsString = function () {
    return Object.entries(this.frequencies).map(([tool, freq]) => `${tool}: ${freq}`).join(', ')
}

//////////
// GAME //
//////////
function Game(p1, p2) {
    this.p1 = p1
    this.p2 = p2
    this.roundNum = 0
}

Game.prototype.findWinner = function () {
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

Game.prototype.playRound = function () {
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
}

Game.prototype.playGame = function () {
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

function start() {
    // Let's Play
    const player1 = new Player('Susan')
    const player2 = new Player('Joe')

    const game = new Game(player1, player2)
    game.playGame()
}

// start()

// DON'T CHANGE ANYTHING BELOW THIS LINE

module.exports = {
    Player,
    Game
}
