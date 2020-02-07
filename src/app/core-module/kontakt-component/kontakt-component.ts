import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-kontakt-component',
  templateUrl: './kontakt-component.html',
  styleUrls: ['./kontakt-component.less']
})
export class KontaktComponent implements OnInit {

  srodkiForm: FormGroup;


  constructor(private formBilder: FormBuilder) { }
  ngOnInit() {
    this.srodkiForm = this.buildKlientForm();
  }
  buildKlientForm() {
    return this.formBilder.group({
      imie: ['', [Validators.required, Validators.minLength(3)]],
      drugieImie: '',
      nazwisko: ['', [Validators.required, Validators.minLength(3)]],
      telefon: ['XXX XXX XXX', Validators.required],
      formaKontaktu: '',
      dataDostawyOd: '',
      dataDostawyDo: ''
    })
  }
  
}
