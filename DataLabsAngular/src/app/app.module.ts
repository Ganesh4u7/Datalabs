import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule} from './app-routing.module';

import {APP_INITIALIZER} from '@angular/core';

import { AppComponent } from './app.component';
import { CustomerDataComponent } from './customer-data/customer-data.component';
import { CustomerDataEditComponent } from './customer-data-edit/customer-data-edit.component';
import {CustomerService} from './customer.service';


export function initializeApp1(appInitService: CustomerService) {
  return (): Promise<any> => {
    return appInitService.Init();
  }
}


@NgModule({
  declarations: [
    AppComponent,
    CustomerDataComponent,
    CustomerDataEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CustomerService,
    { provide: APP_INITIALIZER,useFactory: initializeApp1, deps: [CustomerService], multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
