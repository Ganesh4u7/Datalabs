import { Injectable } from '@angular/core';
import {Subject} from "rxjs/Subject";
import {HttpService} from './http.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  dataEditIndex;
  editMode;
  customers;


  constructor(public httpService: HttpService) {
  }

  // customers : [] =
  //   this.httpService.getData()
  //   .subscribe(
  //     (data: any[])=>{
  //       return data;
  //     }
  // );

  Init() {

    return new Promise<void>((resolve, reject) => {
      console.log("AppInitService.init() called");
      ////do your initialisation stuff here
      this.httpService.getData().subscribe(
        (response) => this.customers = response,
        (error) => console.log(error)
      );
      setTimeout(() => {
        console.log('AppInitService Finished');
        resolve();
      }, 2000);

    });

  }

}
