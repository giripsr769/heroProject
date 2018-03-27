import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-kollywood',
  templateUrl: './kollywood.component.html',
  styleUrls: ['./kollywood.component.css']
})
export class KollywoodComponent implements OnInit {
  private friuts: Array<any>;
  public text ;
  @Input() dynamicInput="' '";
  constructor() { 
  }

  ngOnInit() {

  }

  fruits = [
    'apple', 'orange',
    'goa', 'pineapple',
    'dates', 'tender coconut',
    'Watermillon', 'mango',
    'banana', 'jackfruits'
  ];
 
 
}
