# Week 5 Tech Check: Object Orientation

### Rock, Paper, Scissors

Improve your rock, paper, scissors game, by making it Object Oriented. You will use two constructors for creating the `Game` and `Player`.
- Add your work to coding.js
- Run this file via node coding.js
- You may reuse your previous Rock Paper Scissors project as a start

#### The Constructors

Create a `Player` constructor function that takes in a `name` argument and has the following properties:

* `name` - a string that is set to the passed in value
* `tool` - the current chosen tool (you can initialize it to `null`)
* `currScore` - and integer that starts off at 0. Keeps track of the `Player's`  wins for the current game
* `choices` - an Array that lists all of the tools that a `Player` has used across all games (starts off empty)
* `frequencies` - an object that holds the number of occurrences of each tool for the `Player` in all rounds played (starts off with all tools set to `0`)

Create a `Game` constructor function that takes in two `Player` instances as arguments and has the following properties:

* `p1` - a `Player` instance that is set to the first passed in value
* `p2` - a `Player` instance that is set to the second passed in value
* `roundNum` - an integer keeps track of the round number in the game

##### Player Methods

Using prototypal inheritance, alter your existing code to use the following functions in the `Player` prototype:

* `chooseTool` function that adds to the end of the current player's `choices` array the latest chosen a tool.
* `updateFrequencies` function that updates the current player's  `frequencies` object based on the choice.

##### Game Methods

Using prototypal inheritance, add the following functions to the `Game` prototype:

* `findWinner` - function that determines who won and returns that player or returns `null` if the round was a DRAW.
* `playRound` - function that will execute the current round for the current game.
    - Each round should end with displaying a winner or a DRAW
    - Each round should end with displaying each player's current score
* `playGame` - function that will start the game and continue to play rounds until a player reaches 3 wins.
    - A game ends when one player wins 3 rounds.
    - At the end of the game, print out the winner of the game and each player's frequencies across all games played.

#### Add a greeting
Add a greeting method to the game constructor that displays the following for each game.

```
Game started for <player1.name> & <player2.name>
```

The following is a possible example of a full game's output:

```
Game started for Erin & Erik
Erik chose scissor!
Erin chose rock!
Erin wins round 1!
Erik's score: 0
Erin's score: 1
Erik chose scissor!
Erin chose rock!
Erin wins round 2!
Erik's score: 0
Erin's score: 2
Erik chose rock!
Erin chose rock!
Round 2 was a draw!
Erik's score: 0
Erin's score: 2
Erik chose paper!
Erin chose paper!
Round 3 was a draw!
Erik's score: 0
Erin's score: 2
Erik chose rock!
Erin chose rock!
Round 4 was a draw!
Erik's score: 0
Erin's score: 2
Erik chose paper!
Erin chose scissor!
Erin wins round 6!
Erik's score: 0
Erin's score: 3
Erin wins!
Erik used the following tools: rock: 2 paper: 2 scissors: 2
Erin used the following tools: rock: 4 paper: 1 scissors: 1
```

### After you are finished

* Create commit with a descriptive message
* Submit a pull request (PR)
* Tag instructors and request review

Place link to PR as a submission in Schoology in the current challenge.
