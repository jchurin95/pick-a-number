import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PickANumber } from '../../../../models/pick-a-number.models';
import { MessagesService } from '../../../../services/messages.service';
import { JSON_MESSAGES } from '../../../../constants/message.constants';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { GamePick } from '../../../../models/game-pick-interface.models';

@Component({
  selector: 'app-user-pick',
  templateUrl: './user-pick.component.html',
  styleUrls: ['./user-pick.component.css']
})
export class UserPickComponent implements OnInit, GamePick {

  @Output() changeMessage = new EventEmitter();
  @Output() wonTheGame = new EventEmitter();
  pickANumber: PickANumber = new PickANumber();
  guessedNumber: number;

  constructor(
    private _messagesService: MessagesService
  ) { }

  ngOnInit() {
    this.pickANumber.initSecondGame();
  }

  guessNumber() {
    this.pickANumber.currentNumber = this.guessedNumber;
    if (this.guessedNumber < this.pickANumber.correctNumber) {
      this.isHigher();
    } else if (this.guessedNumber > this.pickANumber.correctNumber) {
      this.isLower();
    } else {
      this.isCorrect();
    }
    this.getProcessingOrFinishedMessage();
  }

  isLower(): void {
    this.pickANumber.isLower();
  }
  isCorrect(): void {
    this.pickANumber.attempts++;
    this.pickANumber.isCorrect();
    this.wonTheGame.next();
  }
  isHigher(): void {
    this.pickANumber.isHigher();
  }
  restartGame(): void {
    this.getStartMessage();
    this.pickANumber = new PickANumber();
    this.pickANumber.initSecondGame();
    this.guessedNumber = null;
  }

  private getProcessingOrFinishedMessage() {
    const pathToJson = (this.pickANumber.finished) ? JSON_MESSAGES.FINISHED_SECOND_GAME : JSON_MESSAGES.PROCESSING_SECOND_GAME;
    this._messagesService.getMessageByPath(pathToJson)
      .subscribe((response: Message) => {
        this.changeMessage.next(response);
      });
  }

  private getStartMessage() {
    this._messagesService.getMessageByPath(JSON_MESSAGES.SELECT_SECOND_GAME)
      .subscribe((response: Message) => {
        this.changeMessage.next(response);
      });
  }

  validateInput($event) {
    if (this.guessedNumber < this.pickANumber.start) {
      this.guessedNumber = this.pickANumber.start;
    } else if (this.guessedNumber > this.pickANumber.end) {
      this.guessedNumber = this.pickANumber.end
    }
  }

}
