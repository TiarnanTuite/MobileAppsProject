import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
})
export class LogInPage implements OnInit {

  Members:any = [];
  password:any = [];

  constructor(){

  }

  ngOnInit() { 
  }

  verifyJson(){
  }
}