import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hollywood',
  templateUrl: './hollywood.component.html',
  styleUrls: ['./hollywood.component.css']
})
export class HollywoodComponent implements OnInit {
 public veg:string;
 public items:Array<any>=[
   'tomato','brinjal',
   'carrot','beetroot',
   'ladiesfingure','drumstick',
   'onion','springonion','apple','orange'
 ] 
  constructor() { }

  ngOnInit() {
  }
  
}
