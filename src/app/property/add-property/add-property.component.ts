import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {

  @ViewChild ('Form')  AddPropertyForm: NgForm
  constructor(private route : Router) { }

  ngOnInit() {
  }
  OnNavigateBack() {
    this.route.navigate(['/']);
  }
  OnSubmit() {
    console.log('succeeded');
    console.log(this.AddPropertyForm);

  }
}
