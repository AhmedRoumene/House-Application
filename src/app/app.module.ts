import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { HousingService } from './services/housing.service';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { DetailPropertyComponent } from './property/detail-property/detail-property.component';
import { FormsModule } from '@angular/forms';
import { UserLoginComponent } from './User/user-login/user-login.component';
import { UserRegisterComponent } from './User/user-register/user-register.component';


const routes : Routes = [{
  path : 'add-property',
  component :AddPropertyComponent
},
{path : '',
  component :PropertyListComponent
} ,
{path : 'rent-property',
  component :PropertyListComponent
},
{path : 'detail-property/:id',
  component :DetailPropertyComponent
},
{path : 'user/login',
  component :UserLoginComponent
},
{path : 'user/register',
  component :UserRegisterComponent
},
{path : '**',
  component :PropertyListComponent
}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PropertyListComponent,
    PropertyCardComponent,
    AddPropertyComponent,
    DetailPropertyComponent,
    UserLoginComponent,
    UserRegisterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [HousingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
