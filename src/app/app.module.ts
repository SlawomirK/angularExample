import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { MenuComponent } from './shared-module/menu/menu.component';
import { SidebarComponent } from './core-module/sidebar/sidebar.component';
import { FooterComponent } from './shared-module/footer/footer.component';
import { PreparatyService } from './preparaty.service';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { PreparatListComponent } from './home/preparat-list/preparat-list.component';
import { PreparatListRoutingModule } from './home/preparat-list/preparat-list-routing';
import { KontaktComponent } from './core-module/kontakt-component/kontakt-component';
import { CoreModule } from './core-module/core-module';
import { ReactiveFormsModule } from '@angular/forms';
import { SidebarFiltrowaneComponent } from './corModue/sidebar-filtrowane/sidebar-filtrowane.component';



@NgModule({
  declarations: [
    AppComponent,
    SidebarFiltrowaneComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    HttpModule,
    PreparatListRoutingModule  ,
    CoreModule,
    ReactiveFormsModule 
  ],
  providers: [PreparatyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
