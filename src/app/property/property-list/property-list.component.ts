import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HousingService } from 'src/app/services/housing.service';
import { IProperty } from '../Iproperty.interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  Properties : Array<IProperty>;
  constructor( private service : HousingService) {
    
  }
  ngOnInit(): void {
this.service.getAllProperties().subscribe(data => {
  this.Properties=data;
  console.log(this.Properties);
},error => 
{
  console.log(error);
});
}   
}