import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PickANumber } from '../../../../models/pick-a-number.models';
import { MessagesService } from '../../../../services/messages.service';
import { JSON_MESSAGES } from '../../../../constants/message.constants';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-pc-pick',
  templateUrl: './pc-pick.component.html',
  styleUrls: ['./pc-pick.component.css']
})
export class PcPickComponent implements OnInit {

  @Output() changeMessage = new EventEmitter();
  @Output() wonTheGame = new EventEmitter();
  pickANumber: PickANumber = new PickANumber();

  constructor(
    private _messagesService: MessagesService
  ) { }

  ngOnInit() {
    this.pickANumber.initFirstGame();
    this.getProcessingOrFinishedMessage();
  }

  isLower(){
    this.pickANumber.isLower();
    if (this.pickANumber.finished) {
      this.finished();
      return;
    }
    this.getProcessingOrFinishedMessage();
  }
  isCorrect(){
    this.pickANumber.isCorrect()
    if (this.pickANumber.finished) {
      this.finished();
      return;
    }
    this.getProcessingOrFinishedMessage();
  }
  isHigher(){
    this.pickANumber.isHigher();
    if (this.pickANumber.finished) {
      this.finished();
      return;
    }
    this.getProcessingOrFinishedMessage();
  }
  
  private getProcessingOrFinishedMessage() {
    const pathToJson = (this.pickANumber.finished) ? JSON_MESSAGES.FINISHED_FIRST_GAME : JSON_MESSAGES.PROCESSING_FIRST_GAME;
    this._messagesService.getMessageByPath(pathToJson)
    .subscribe((response: Message) => {
      this.changeMessage.next(response);
    });
  }

  private finished() {
    this.wonTheGame.next();
    this.getProcessingOrFinishedMessage();
  }
  
  restartGame() {
    this.getProcessingOrFinishedMessage();
    this.pickANumber = new PickANumber();
    this.pickANumber.initFirstGame();
  }

}
