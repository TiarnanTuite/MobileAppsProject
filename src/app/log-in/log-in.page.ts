import { Component, OnInit } from '@angular/core';
import {MembersService} from '../Services/members.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
})
export class LogInPage implements OnInit {

  Members:any = [];
  password:any = [];

  constructor(private service: MembersService){

  }

  ngOnInit() { 
     this.service.GetMemberData().subscribe( (data)=>{
        this.Members = data.Members;
        console.log(this.Members);
     } );
  }

  verifyJson(){
  }
}