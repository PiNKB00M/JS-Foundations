# Advacnced JS Labs

This repository contains the Labs for Advanced JS topics:

- Object Orientation
- Classes
- Closures
- Async Exec & Callbacks
- Promises
- Async Await

## Instructions

### Pull this Repository

* Use `git clone ` to clone this repository on your machine.
* Create a branch called `solution`.
* Checkout your `solution` branch.

You should see the following directories:

```shell
object-orientation
classes
closures
async-exec-and-callbacks
promises
async-await
```

Each directory has a `coding.js` file that you will edit to implement the solution to a set of coding challenges. You will **not** need to edit any other files. Detailed instructions for each challenge are provided as *comments* in each `coding.js` file.

You can check your work by either running the provided unit tests or by uncommenting the `console.log` statements near the end of each `coding.js` file.

### Running the Unit Tests

To run the unit tests, you will need to first install `jest`:

```shell
npm install -g jest-cli
```

Then simply do the following:

```shell
cd <one-of-the-directories-listed above>
npm run test   # run jest to execute the tests in "watch" mode.
               # Hit `q` to quit the test runner
```

The above command will run the tests *interactively* which means that it will watch your files for changes and when you save your changes the tests will re-execute to track your progress.

If you want to run the tests non-interactively, you can run `npm run test:ci` and a report will be printed to your console.

Once all of your code is complete and working, you should see all tests passing in the report.

REMEMBER: You will need to edit the `coding.js` file in each of the directories listed above and run the tests in each of these directories as well.

## Submitting Your Work

* Create a commit with a descriptive message and push your commit to repository.
* Submit a pull request (PR) from your `solution` branch to your `master` branch.
* Tag instructors and request a review of your PR.
* Copy and paste repo url in BlackBoard and submit

