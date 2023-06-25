import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { IProperty } from '../property/Iproperty.interface';

@Injectable({
  providedIn: 'root' 
})
export class HousingService {
  constructor(private http : HttpClient) { }
  getAllProperties() : Observable<IProperty[]> {
    return this.http.get('data/Properties.json').pipe(map((data: any) => {
      const propertiesArray : Array<IProperty> = [];
      for (const property in data) {
        if (data.hasOwnProperty(property)) {
          propertiesArray.push(data[property]);
      }
}
  return propertiesArray;
  }));
  }
  }
