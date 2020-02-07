import { Component, OnInit, NgModule } from '@angular/core';
import { Preparat } from '../models/Preparat';
import { SidebarComponent } from 'src/app/core-module/sidebar/sidebar.component';
import { PreparatyService } from 'src/app/preparaty.service';
import {FormBuilder, FormGroup} from '@angular/forms';



@Component({
  selector: 'app-preparat-list',
  templateUrl: './preparat-list.component.html',
  styleUrls: ['./preparat-list.component.less']
})
export class PreparatListComponent implements OnInit {
 
  srodki: Preparat[] = [
    /*
    { nazwa: "chwastox", cena: 123, naUprawy: "jednoliścienne",przeciwPatogenom: "chwasty dwuliścienne",zdjecie:"assets/pictures/chwastox.jpg"},
    { nazwa: "decis", cena: 89, naUprawy: "sadownicze",przeciwPatogenom: "owady",zdjecie:"assets/pictures/decis.jpg"},
    { nazwa: "glean",cena: 122, naUprawy: "jednoliścienne",przeciwPatogenom: "chwasty dwuliścienne",zdjecie:"assets/pictures/glean.jpg"},
    { nazwa: "mospilan",cena: 140, naUprawy: "wszystkie",przeciwPatogenom: "owady",zdjecie:"assets/pictures/mospilan.jpg"},
    { nazwa: "roundup",cena: 233, naUprawy: "ugory",przeciwPatogenom: "herbicyd totalny",zdjecie:"assets/pictures/roundup.jpg"},
    { nazwa: "topsin",cena: 123, naUprawy: "wszystkie",przeciwPatogenom: "fungicyd",zdjecie:"assets/pictures/topsin.jpg"}
  */]


  constructor(private prepService: PreparatyService, private  formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loadPrepList();
   
  }
 

  loadPrepList() {
    this.prepService.getPreparations().subscribe((c) => this.srodki = c);
  
  }

  

}
