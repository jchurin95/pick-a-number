import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-interactive',
  templateUrl: './interactive.component.html',
  styles: []
})
export class InteractiveComponent implements OnInit {

  @Input() initializedGame: boolean;
  @Input() firstPanelEnabled: boolean;
  @Input() secondPanelEnabled: boolean;

  constructor() { }

  ngOnInit() {
  }

}
