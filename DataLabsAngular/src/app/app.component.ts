import {Component, OnInit} from '@angular/core';
import {HttpService} from './http.service';
import {CustomerService} from './customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  constructor(
    public httpService: HttpService,
    public customerService:CustomerService
  ){
  }

ngOnInit(){

}

}
