class GuessingGame {
  constructor() {
    this.min = -Infinity;
    this.max = Infinity;
    this.minWall = this.min;
    this.maxWall = this.max;
    this.currentGuess = 0;
  }

  setRange(min, max) {
    this.min = min;
    this.max = max;
    this.minWall = this.min;
    this.maxWall = this.max;
  }

  guess() {
    this.currentGuess = Math.round((this.minWall + this.maxWall) / 2);
    return this.currentGuess;
  }

  lower() {
    this.maxWall = this.currentGuess;
  }

  greater() {
    this.minWall = this.currentGuess;
  }
}

module.exports = GuessingGame;
