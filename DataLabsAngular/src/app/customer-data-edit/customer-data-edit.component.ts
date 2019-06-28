import {NgForm} from '@angular/forms';
import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {CustomerService} from '../customer.service';
import {HttpService} from '../http.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customer-data-edit',
  templateUrl: './customer-data-edit.component.html',
  styleUrls: ['./customer-data-edit.component.css']
})
export class CustomerDataEditComponent implements OnInit {

  constructor( public  customerService: CustomerService,
               public httpService: HttpService,
               public router:Router) { }

  @ViewChild('f') cdform :NgForm;
  index = this.customerService.dataEditIndex;
  editMode = this.customerService.editMode;
  ngOnInit() {

      setTimeout(() => {
        if(this.editMode == true) {
          this.cdform.setValue({
            name: this.customerService.customers[this.index].name,
            phoneno: this.customerService.customers[this.index].phoneno,
            address: this.customerService.customers[this.index].address,
            email: this.customerService.customers[this.index].email
          });
          this.customerService.dataEditIndex = 0;
        }
      },);

  }
  onSubmit(form:NgForm) {
    const value = form.value;
    var name1 = value.name;
    var phoneno = value.phoneno;
    var address = value.address;
    var email = value.email;
    const value1 = form.value;
    if(this.editMode == true){

      var data = {
        name: name1,
        phoneno : phoneno,
        address: address,
        email : email,
        index: this.index
      };

      this.httpService.onSaveEdit(data)
        .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );

        this.customerService.customers[this.index].name = name1;
        this.customerService.customers[this.index].phoneno = phoneno;
        this.customerService.customers[this.index].address = address;
        this.customerService.customers[this.index].email = email;


    }
    else{
      const data = {
        name: name1,
        phoneno : phoneno,
        address: address,
        email : email
      };
      this.httpService.saveData(data)
        .subscribe(
          (response) => console.log(response),
          (error) => console.log(error)
        );

       this.customerService.customers.push({
         name: name1,
         phoneno : phoneno,
         address: address,
         email : email
       });
    //  console.log(this.customerService.customers);

    }
    event.preventDefault();
  this.router.navigate(['/customerdata'])
  }
  customersPage(){
    this.router.navigate(['/customerdata']);
  }

}
