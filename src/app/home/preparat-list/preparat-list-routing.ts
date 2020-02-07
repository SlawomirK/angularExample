import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidebarFiltrowaneComponent } from 'src/app/corModue/sidebar-filtrowane/sidebar-filtrowane.component';


const PreparatRouts: Routes = [ 
  {path: 'preparaty/:filtr',component: SidebarFiltrowaneComponent}

];

@NgModule({
  imports: [RouterModule.forChild(PreparatRouts)],
  exports: [RouterModule]
})
export class PreparatListRoutingModule { }
