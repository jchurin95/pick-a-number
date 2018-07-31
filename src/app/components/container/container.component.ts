import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  initializedGame: boolean = false;
  firstPanelEnabled: boolean = false;
  secondPanelEnabled: boolean = false;

  confetti_numbers: number[];

  constructor() { }

  ngOnInit() {
  }

  wonTheGame() {
    this.showConfetti();
    setTimeout(() => {
      this.hideConfetti();
    }, 3000);
  }

  private showConfetti() {
    this.confetti_numbers = Array(150).fill(1).map((x,i)=>i);
  }
  private hideConfetti() {
    this.confetti_numbers = [];
  }

}
