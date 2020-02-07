import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const PreparatRouts: Routes = [ 
 // {path: 'preparaty/:id',component: PreparatSzczegol}
];

@NgModule({
  imports: [RouterModule.forChild(PreparatRouts)],
  exports: [RouterModule]
})
export class PreparatListRoutingModule { }
