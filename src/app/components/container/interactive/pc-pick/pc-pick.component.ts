import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pc-pick',
  templateUrl: './pc-pick.component.html',
  styleUrls: ['./pc-pick.component.css']
})
export class PcPickComponent implements OnInit {

  @Input() enabled: boolean;
  enableSpinner: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
