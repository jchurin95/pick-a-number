import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PickANumber } from '../../../../models/pick-a-number.models';
import { MessagesService } from '../../../../services/messages.service';
import { JSON_MESSAGES } from '../../../../constants/message.constants';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-user-pick',
  templateUrl: './user-pick.component.html',
  styleUrls: ['./user-pick.component.css']
})
export class UserPickComponent implements OnInit {

  @Output() changeMessage = new EventEmitter();
  pickANumber: PickANumber = new PickANumber();
  guessedNumber: number;

  constructor(
    private _messagesService: MessagesService
  ) { }

  ngOnInit() {
    this.pickANumber.initSecondGame();
    // this.getProcessingOrFinishedMessage();
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
  
  isLower(){
    this.pickANumber.isLower();
  }
  isCorrect(){
    this.pickANumber.attempts++;
    this.pickANumber.isCorrect();
  }
  isHigher(){
    this.pickANumber.isHigher();
  }
  
  private getProcessingOrFinishedMessage() {
    const pathToJson = (this.pickANumber.finished) ? JSON_MESSAGES.FINISHED_SECOND_GAME : JSON_MESSAGES.PROCESSING_SECOND_GAME;
    this._messagesService.getMessageByPath(pathToJson)
    .subscribe((response: Message) => {
      this.changeMessage.next(response);
    });
  }

  private getStartMessage() {
    // const pathToJson = (this.pickANumber.finished) ? JSON_MESSAGES.FINISHED_SECOND_GAME : JSON_MESSAGES.PROCESSING_SECOND_GAME;
    this._messagesService.getMessageByPath(JSON_MESSAGES.SELECT_SECOND_GAME)
    .subscribe((response: Message) => {
      this.changeMessage.next(response);
    });
  }
  
  restartGame() {
    // this.getProcessingOrFinishedMessage();
    this.getStartMessage();
    this.pickANumber = new PickANumber();
    this.pickANumber.initSecondGame();
    this.guessedNumber = null;
  }

  validateInput($event) {
    if (this.guessedNumber < this.pickANumber.start) {
      this.guessedNumber = this.pickANumber.start;
    } else if (this.guessedNumber > this.pickANumber.end) {
      this.guessedNumber = this.pickANumber.end
    }
  }
  
}
