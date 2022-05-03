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

  public signupForm !: FormGroup;
  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router : Router) { }

  ngOnInit(){
    this.signupForm = this.formBuilder.group({
      name:[''], 
      email:[''], 
      username:[''], 
      password:['']
    })
  }

   signUp(){
    this.http.post<any>("https://www.jsonblob.com/api/jsonBlob", this.signupForm.value)
    .subscribe(res=>{
      alert("you have signed up!");
      this.signupForm.reset();
      this.router.navigate(['/log-in']);
    },err=>{
      alert("sign up unavailable");
    })
  }

}
