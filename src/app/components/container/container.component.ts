import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: []
})
export class ContainerComponent implements OnInit {

  initializedGame: boolean = false;
  firstPanelEnabled: boolean = false;
  secondPanelEnabled: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  initOrFinishGame($event) {
    this.initializedGame = $event;
    if (this.initializedGame) {
      this.firstPanelEnabled = true;
      this.secondPanelEnabled = false;
    } else {
      this.firstPanelEnabled = false;
      this.secondPanelEnabled = false;      
    }
  }

}
