import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  //initialize and create nessacary constructor 
  public signupForm !: FormGroup;
  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router : Router) { }

  //stores the data to be send to jsonurl
  ngOnInit(){
    this.signupForm = this.formBuilder.group({
      name:[''], 
      email:[''], 
      username:[''], 
      password:[''],
      confirmPass:['']
    })
  }

   signUp(){
     //putting the value from signUpForm onto the jsonurl
     //should be post instead of put as put replaces existing JSON code
     //not able to find response from JSON Blob when using post command
    this.http.put<any>("https://www.jsonblob.com/api/jsonBlob/970716047883911168", this.signupForm.value)
    .subscribe(res=>{
      // if response is valid it resets the form and navigates tologin page
      alert("you have signed up!");
      this.signupForm.reset();
      this.router.navigate(['/log-in']);
      //error
    },err=>{
      alert("sign up unavailable");
    })
  }

}
