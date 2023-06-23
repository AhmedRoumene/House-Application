import { Component } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent {
 constructor() {
  }
  Property : any= {
    "id" :1 ,
    "Name" : 'House' ,
    "Price" :26000 ,
    "City" :'San Francisco'
  }
}
