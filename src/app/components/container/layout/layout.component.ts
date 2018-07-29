import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MessagesService } from '../../../services/messages.service';
import { Message } from '../../../models/message.models';
import { JSON_MESSAGES } from '../../../constants/message.constants';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styles: []
})
export class LayoutComponent implements OnInit {

  message: string = "";
  playing: boolean = false;
  firstGame: boolean = false;
  secondGame: boolean = false;

  constructor(
    private _messagesService: MessagesService
  ) { }

  ngOnInit() {
    this.getWelcomeMessage();
  }

  initGame() {
    this.playing = true;
  }

  gameSelected(gameSelected: number) {
    this.firstGame = (gameSelected === 1);
    this.secondGame = !this.firstGame;
    let pathToJson = (gameSelected === 1) ? JSON_MESSAGES.SELECT_FIRST_GAME : JSON_MESSAGES.SELECT_SECOND_GAME;
    this.getSelectedGameMessage(pathToJson);
  }

  private getWelcomeMessage() {
    this._messagesService.getMessageByPath(JSON_MESSAGES.WELCOME)
    .subscribe((response: Message) => {
      this.message = response.description;
    });
  }

  private getSelectedGameMessage(pathToJson: string) {
    this._messagesService.getMessageByPath(pathToJson)
    .subscribe((response: Message) => {
      this.message = response.description;
    })
  }

  changeMessage($event) {
    this.message = $event.description;
  }

}
