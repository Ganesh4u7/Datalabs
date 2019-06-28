import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm} from "@angular/forms";
import {CustomerService} from '../customer.service';

import {Router} from '@angular/router';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-customer-data',
  templateUrl: './customer-data.component.html',
  styleUrls: ['./customer-data.component.css']
})
export class CustomerDataComponent implements OnInit {






  constructor(
    public customerService: CustomerService,
    public router:Router,
    public httpService:HttpService
               ) { }

  ngOnInit() {




  }
  customers = this.customerService.customers;

edit(index: number){
 this.customerService.dataEditIndex = index;
 this.customerService.editMode = true;
  this.router.navigate(['/customerdataedit'])

}
delete(index:number){
  this.httpService.onDelete({index:index}) .subscribe(
    (response) => console.log(response),
    (error) => console.log(error)
  );
  this.customerService.customers.splice(index,1);
}
create(){
  this.router.navigate(['/customerdataedit']);
  this.customerService.editMode = false;
  //  console.log(this.customers);
}

}
