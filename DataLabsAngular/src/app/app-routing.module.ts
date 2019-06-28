import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CustomerDataComponent} from './customer-data/customer-data.component';
import {CustomerDataEditComponent} from './customer-data-edit/customer-data-edit.component';

const appRoutes: Routes = [
  { path: 'customerdata', component:CustomerDataComponent},
  { path:'customerdataedit',component:CustomerDataEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
