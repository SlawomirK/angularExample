import { Injectable } from '@angular/core';

import { Preparat } from './home/models/Preparat';
import { Http } from '@angular/http';

import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PreparatyService {
private readonly adress="http://localhost:3000/preparaty";

  constructor(private http: Http) { }

  getPreparations(): Observable<Preparat[]> {
    return this.http.get(this.adress).map((res) => res.json())
  }
  getPreparation(warunek:string):Observable<Preparat[]>{

    return this.http.get(`/${warunek}`).map((res)=>res.json());
  }
}
