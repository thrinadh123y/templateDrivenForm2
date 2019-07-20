import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
communicate=new Subject()
info=new Subject()
  constructor(private _http:HttpClient) { }
  sendData(details){
    console.log(details)
    this.communicate.next(details)
      }
      completed(details){
        this.info.next(details)
      }
  adduser(obj){
    return this._http.post('http://localhost:3000/contact',obj)
  }
  getdata(){
    return this._http.get('http://localhost:3000/contact');
  }
  update(obj){
    return this._http.put('http://localhost:3000/contact/'+obj.id,obj)
  }
  deleteuser(obj2){
    let headers={
      "Content-Type":"application/json"
    }
    return this._http.delete('http://localhost:3000/contact/'+obj2.id,{headers:headers})
  }
}
