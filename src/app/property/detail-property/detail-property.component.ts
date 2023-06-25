import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-property',
  templateUrl: './detail-property.component.html',
  styleUrls: ['./detail-property.component.css']
})
export class DetailPropertyComponent implements OnInit {
  public propertyID :number;
  constructor(private route : ActivatedRoute,private router : Router) { }
  ngOnInit() {
    this.propertyID= Number(this.route.snapshot.params['id']);
    this.route.params.subscribe(params => {
      this.propertyID= +params['id'];
    })
  }
  OnSelectNext() {
    this.propertyID +=1;
    this.router.navigate(['detail-property', this.propertyID]);
  }
}
