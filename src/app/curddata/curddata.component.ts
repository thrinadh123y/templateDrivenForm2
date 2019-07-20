import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-curddata',
  templateUrl: './curddata.component.html',
  styleUrls: ['./curddata.component.scss']
})
export class CurddataComponent implements OnInit {
edituser;
close:any;
  constructor(private commonService:CommonService) { }

  ngOnInit() {
    this.commonService.communicate.subscribe((res)=>{
      this.edituser=res;
      console.log(this.edituser)
    })
  }
  updateUser(edituser){
console.log(edituser)
this.commonService.update(edituser).subscribe((res)=>{
  console.log(res)
  this.close=false;
})
this.commonService.completed(false)
  }

}
