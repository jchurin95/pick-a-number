import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-pick',
  templateUrl: './user-pick.component.html',
  styleUrls: ['./user-pick.component.css']
})
export class UserPickComponent implements OnInit {

  @Input() enabled: boolean;

  constructor() { }

  ngOnInit() {
  }

}
