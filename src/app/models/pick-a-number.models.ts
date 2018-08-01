export class PickANumber {

    start: number;
    end: number;
    attempts: number;
    currentNumber: number;
    lastNumber: number;
    
    correctNumber: number;

    finished: boolean;
    isFirstGame: boolean;

    constructor(){
        this.start = 1;
        this.end = 100;
        this.attempts = 0;
        this.finished = false;
    };

    initFirstGame() {
        this.isFirstGame = true;
        this.process();
    }
    
    initSecondGame() {
        this.isFirstGame = false;
        this.setRandomNumber();
    }

    process() {
        this.lastNumber = this.currentNumber;
        this.currentNumber = Math.trunc(this.start + ((this.end - this.start) / 2));
        this.attempts++;
        if (this.attempts === 7 && this.isFirstGame) { // Max numbers of attempts
            this.finished = true;
            return;
        }
    }
    isLower() {
        this.end = (this.currentNumber === 1) ? this.currentNumber : this.currentNumber - 1;
        this.process();
    };
    isHigher() {
        this.start = (this.currentNumber === 100) ? this.currentNumber : this.currentNumber + 1;
        this.process();
    };
    isCorrect() {
        this.correctNumber = this.currentNumber;
        this.finished = true;
    };

    setRandomNumber() {
        this.correctNumber = Math.floor((Math.random() * this.end) + this.start);
    }

}