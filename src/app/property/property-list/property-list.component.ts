import { Component, OnInit } from '@angular/core';
import { HousingService } from 'src/app/services/housing.service';
import { IProperty } from '../Iproperty.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  Properties : Array<IProperty>;
  SellRent =1;
  constructor( private service : HousingService,private route : ActivatedRoute) {
    
  }
  ngOnInit(): void {
if(this.route.snapshot.url.toString()) {
  this.SellRent =2;
}
this.service.getAllProperties(this.SellRent).subscribe(data => {
  this.Properties=data;
  console.log(this.Properties);
  console.log(this.route.snapshot.url.toString());
  
},error => 
{
  console.log(error);
});
}   
}