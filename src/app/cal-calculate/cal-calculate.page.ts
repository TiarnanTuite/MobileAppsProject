import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-cal-calculate',
  templateUrl: './cal-calculate.page.html',
  styleUrls: ['./cal-calculate.page.scss'],
})
export class CalCalculatePage implements OnInit{

  //variables using ngModel
  gender: string; 
  age : number;
  height : number;
  weight : number;
  activity : number;

  //local variables
  BMR : any;

  genderMath : any;
  ageMath : any;
  heightMath : any;
  weightMath : any;

  maintenanceCals : any;
  gainWeight : number;
  loseWeight : number;

  constructor() { }

  //method to calculate calories
  calculateCals(){

    // different calculations for men and women
    if(this.gender == 'Male' || this.gender == 'male'){
      //math to get mens basic metabolic rate(BMR)
      this.genderMath = 66;
      this.weightMath = (6.23 * this.weight);
      this.heightMath = (12.7 * this.height);
      this.ageMath = (6.8 * this.age);

      this.BMR = (this.genderMath + this.weightMath + this.heightMath - this.ageMath);
     
    }
    else if(this.gender == 'Female' || this.gender == 'female'){
       //math to get womens basic metabolic rate(BMR)
      this.genderMath = 655;
      this.weightMath = (4.35 * this.weight);
      this.heightMath = (4.7 * this.height);
      this.ageMath = (4.7 * this.age);

      this.BMR = (this.genderMath + this.weightMath + this.heightMath - this.ageMath);
    }
    else{
      alert("please enter 'Male' or'Female'")
    }

    //including activity level to give calorie intake from bmr
    if(this.activity == 1)
    {
      this.maintenanceCals = (this.BMR * 1.2);
    }
    else if(this.activity == 2)
    {
      this.maintenanceCals = (this.BMR * 1.375);
    }
    else if(this.activity == 3)
    {
      this.maintenanceCals = (this.BMR * 1.55);
    }
    else if(this.activity == 4)
    {
      this.maintenanceCals = (this.BMR * 1.725);
    }
    else if(this.activity == 5)
    {
      this.maintenanceCals = (this.BMR * 1.9);
    }
    else 
    {
      alert("Please enter 1- 5.");
    }

    alert(this.maintenanceCals);
  }

  ngOnInit(){
  
  }


}
