import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { KontaktComponent } from './kontakt-component/kontakt-component';
import { FooterComponent } from '../shared-module/footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SharedModule } from '../shared-module/shared-module';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [KontaktComponent,SidebarComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    AppRoutingModule,
    ReactiveFormsModule 
  ], 
  exports: [KontaktComponent,SidebarComponent]
})
export class CoreModule { }
