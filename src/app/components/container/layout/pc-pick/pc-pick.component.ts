import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PickANumber } from '../../../../models/pick-a-number.models';
import { MessagesService } from '../../../../services/messages.service';
import { JSON_MESSAGES } from '../../../../constants/message.constants';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { GamePick } from '../../../../models/game-pick-interface.models';

@Component({
  selector: 'app-pc-pick',
  templateUrl: './pc-pick.component.html',
  styleUrls: ['./pc-pick.component.css']
})
export class PcPickComponent implements OnInit, GamePick {

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

  isLower(): void {
    this.pickANumber.isLower();
    if (!this.finished()) { this.getProcessingOrFinishedMessage(); }
  }
  isCorrect(): void {
    this.pickANumber.isCorrect()
    if (!this.finished()) { this.getProcessingOrFinishedMessage(); }
  }
  isHigher(): void {
    this.pickANumber.isHigher();
    if (!this.finished()) { this.getProcessingOrFinishedMessage(); }
  }
  restartGame(): void {
    this.getProcessingOrFinishedMessage();
    this.pickANumber = new PickANumber();
    this.pickANumber.initFirstGame();
  }

  private getProcessingOrFinishedMessage() {
    const pathToJson = (this.pickANumber.finished) ? JSON_MESSAGES.FINISHED_FIRST_GAME : JSON_MESSAGES.PROCESSING_FIRST_GAME;
    this._messagesService.getMessageByPath(pathToJson)
      .subscribe((response: Message) => {
        this.changeMessage.next(response);
      });
  }

  private finished() {
    if (this.pickANumber.finished) {
      this.wonTheGame.next();
      this.getProcessingOrFinishedMessage();
    }
    return this.pickANumber.finished;
  }

}
