import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.scss']
})
export class ContactformComponent implements OnInit {
data;
updateclose:any;
sendclose:any;
  constructor(private commonService:CommonService) { }
add(){
  this.sendclose=true;
}
close(){
  this.sendclose=false;
}
  ngOnInit() {
    this.get();
    this.sendclose=false
  }
submit(myForm){
  console.log(myForm)
  this.commonService.adduser(myForm).subscribe((res)=>{
    console.log(res);
    this.get()
    this.sendclose=false;
  })
}
get(){
  this.commonService.getdata().subscribe((res)=>{
    this.data=res;
    console.log(this.data)
  })
}
edit(obj){
console.log(obj)
this.commonService.sendData(obj);
this.commonService.info.subscribe((res)=>{
  this.updateclose=res;
  console.log(this.updateclose)
})
}
delete(obj,i){
this.commonService.deleteuser(obj).subscribe((res)=>{
  this.get()
})
}
}
