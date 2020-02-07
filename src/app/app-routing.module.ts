import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreparatListComponent } from './home/preparat-list/preparat-list.component';
import { KontaktComponent } from './core-module/kontakt-component/kontakt-component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'preparaty' },
  { path: 'preparaty', component: PreparatListComponent },
  {path:'kontakt', component: KontaktComponent},
  {path:'filtr', component: PreparatListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[KontaktComponent,PreparatListComponent];
