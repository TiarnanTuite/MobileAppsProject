import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from "@angular/forms"
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
})
export class LogInPage implements OnInit {

  //initialize the formgroup and create constructor 
  public loginForm !: FormGroup
  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router : Router){

  }

  // hold the data submitted by ngSubmit
  ngOnInit(): void { 
    this.loginForm = this.formBuilder.group({
      username:[''],
      password:['']
    })

  }

  //ERROR TypeError: res.find is not a function 
  //getting this error for login in the console as when I create the JSON URL I use put not post so it replaces the whole JSON code
  //.find() command needs to be used on a Array to work but since I cannot use post command it does not create a valid array in the JSON URL
  logIn(){
    //get the members from the url
    this.http.get<any>("https://www.jsonblob.com/api/jsonBlob/970716047883911168")
    .subscribe(res=>{
      const member = res.find((a : any)=>{
        //check if the username and password from the response matches and return
        return a.username === this.loginForm.value.username && a.password === this.loginForm.value.password
      });
      //if member existss
      if(member){
        alert("You have logged in!");
        // this.loginForm.reset();
        // this.router.navigate(['/home']);
      }
      else{
        alert("Your details do not match any of our members!");
      } 
    },err=>{
      alert("Log in unavailable");
    })
  }
}