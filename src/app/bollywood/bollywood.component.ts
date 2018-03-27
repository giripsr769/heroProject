import { Component, OnInit } from '@angular/core';
import { CarType } from './car-type';
@Component({
  selector: 'app-bollywood',
  templateUrl: './bollywood.component.html',
  styleUrls: ['./bollywood.component.css']
})
export class BollywoodComponent implements OnInit {
ngOnInit(){}
  rows: any[] = [{ name: 'Austin', gender: 'Male', company: 'Swimlane' },
  { name: 'Dany', gender: 'Male', company: 'KFC' },
  { name: 'Molly', gender: 'Female', company: 'Burger King' },
  { name: 'Brity', gender: 'Female', company: 'Burger Queen' },
  { name: 'Jack', gender: 'Male', company: 'Dominos' },];

  selected = [];

  columns: any[] = [
    { prop: 'name'} , 
    { name: 'Company' }, 
    { name: 'Gender' }
  ];

  constructor() {
    this.fetch((data) => {
      this.rows = data;
    });
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/company.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  onSelect({ selected }) {
    console.log('Select Event', selected, this.selected);

    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }

  onActivate(event) {
    console.log('Activate Event', event);
  }

}
