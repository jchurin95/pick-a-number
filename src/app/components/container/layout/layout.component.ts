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

  @Output() wonTheGame = new EventEmitter();

  constructor(private _messagesService: MessagesService) { }

  ngOnInit() {
    this.getMessageByPath(JSON_MESSAGES.WELCOME);
  }

  initGame() {
    this.playing = true;
  }

  gameSelected(gameSelected: number) {
    this.firstGame = (gameSelected === 1);
    this.secondGame = !this.firstGame;
    let pathToJson = (gameSelected === 1) ? JSON_MESSAGES.SELECT_FIRST_GAME : JSON_MESSAGES.SELECT_SECOND_GAME;
    this.getMessageByPath(pathToJson);
  }

  private getMessageByPath(pathToJson: string) {
    this._messagesService.getMessageByPath(pathToJson)
    .subscribe((response: Message) => {
      this.message = response.description;
    })
  }

  changeMessage($event) {
    this.message = $event.description;
  }

  restartGames() {
    this.playing = false;
    this.firstGame = false;
    this.secondGame = false;
    this.getMessageByPath(JSON_MESSAGES.WELCOME);
  }

  wonTheGames() {
    this.wonTheGame.next();
  }

}
