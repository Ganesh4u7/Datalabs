import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) { }

saveData(data){
return this.http.post('http://localhost:8000/saveData',data,{ responseType: 'text' });

}
onSaveEdit(data){
  return  this.http.post('http://localhost:8000/onSaveEdit',data,{ responseType: 'text' });
}

getData(){

   return  this.http.get('http://localhost:8000/getData',{ responseType: 'json' });

}
onDelete(data){
  return  this.http.post('http://localhost:8000/onDelete',data,{ responseType: 'text' });
}


}

