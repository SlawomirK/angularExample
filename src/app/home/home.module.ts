import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreparatListComponent } from './preparat-list/preparat-list.component';
import { SharedModule } from '../shared-module/shared-module';
import { SidebarComponent } from '../core-module/sidebar/sidebar.component';
import { CoreModule } from '../core-module/core-module';
import { PreparatListRoutingModule } from './preparat-list/preparat-list-routing';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [PreparatListComponent],
  exports: [PreparatListComponent],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    AppRoutingModule   
  ],
})
export class HomeModule { }
