import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { CoreModule } from '../core-module/core-module';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [FooterComponent,MenuComponent],
  exports:[FooterComponent,MenuComponent],
  imports: [
    CommonModule ,
    RouterModule
  ]
})
export class SharedModule { }
