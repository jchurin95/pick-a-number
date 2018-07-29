export class PickANumber {

    start: number;
    end: number;
    attempts: number;
    currentNumber: number;
    lastNumber: number;
    
    correctNumber: number;

    finished: boolean;
    
    constructor(){
        this.start = 1;
        this.end = 100;
        this.attempts = 0;
        this.finished = false;
        this.process();
    };

    process() {
        this.lastNumber = this.currentNumber;
        if (Math.trunc((this.end - this.start) / 2) === 0) {
            this.finished = true;
            return;
        }
        this.currentNumber = Math.trunc(this.start + ((this.end - this.start) / 2));
        this.attempts++;
    }
    isLower() {
        this.end = this.currentNumber;
        this.process();
    };
    isHigher() {
        this.start = this.currentNumber;
        this.process();
    };
    isCorrect() {
        this.correctNumber = this.currentNumber;
        this.finished = true;
    };

}