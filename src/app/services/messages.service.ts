import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Message } from '../models/message.models';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  messages: Message[];

  constructor(
    private _http: HttpClient
  ) { }

  // getWelcomeMessage() {
  //   return this._http.get('assets/messages/welcome.json')
  //   .pipe(
  //     map((response: Message[]) => {
  //       return this.mappingResponseMessages(response);
  //     }) 
  //   );
  // }

  getMessageByPath(pathToJson: string) {
    return this._http.get('assets/messages/' + pathToJson + '.json')
    .pipe(
      map((response: Message[]) => {
        return this.mappingResponseMessages(response);
      }) 
    );
  }

  private mappingResponseMessages(response: Message[]) {
    this.messages = response;
    return this.getRandomMessage();
  }

  private getRandomMessage() {
    return this.messages[Math.floor(Math.random()*this.messages.length)];
  }

}
