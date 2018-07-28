import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styles: []
})
export class LayoutComponent implements OnInit {

  @Output() initGame = new EventEmitter();
  gaming: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  init() {
    this.changeStatusGame();
    this.initGame.next(this.gaming);
  }
  
  finish() {
    this.changeStatusGame();
    this.initGame.next(this.gaming);
  }
  
  private changeStatusGame() {
    this.gaming = !this.gaming;
  }

}
