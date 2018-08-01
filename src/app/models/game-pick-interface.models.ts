export interface GamePick {
    isLower(): void;
    isCorrect(): void;
    isHigher(): void;
    restartGame(): void;
}