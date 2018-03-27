import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private showholly = false;
  private showkolly = false;
  private showbolly = false;
  public subtitle: string;

  constructor() {
    this.subtitle='Super Heros';
  }

  ngOnInit() {
  }
  // btnholly() {
  //   this.showholly=!this.showholly;
  // }
  // btnbolly() {
  //   this.showbolly=!this.showbolly;
  // }
  // btnkolly() {
  //   this.showkolly=!this.showkolly;
  // }
  btnholly() {
    this.showholly=!this.showholly;
    this.showkolly = false;
    this.showbolly = false;
  }
  btnbolly() {
    this.showbolly=!this.showbolly;
    this.showholly = false;
    this.showkolly = false;
  }
  btnkolly() {
    this.showkolly=!this.showkolly;
    this.showbolly = false;
    this.showholly = false;
  }
}
