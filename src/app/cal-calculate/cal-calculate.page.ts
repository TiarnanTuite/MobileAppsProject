import { Component, OnInit} from '@angular/core';
import {AlertController} from '@ionic/angular'

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

  constructor(public alertController: AlertController) { }

  //method to calculate calories
  async calculateCals(){

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
      //creating the alert
      const alertGender = await this.alertController.create({
        header: 'Incorrect Input!',
        message: 'Please enter "Male" or "Female"',
        buttons: ['OK']
      });
      
      //presenting the variable storing the alert
      await alertGender.present();
    }

    //including activity level to give calorie intake from bmr
    if(this.activity == 1)
    {
      this.maintenanceCals = (this.BMR * 1.2);
      this.gainWeight = (this.maintenanceCals + 500);
      this.loseWeight = (this.maintenanceCals - 500);
    }
    else if(this.activity == 2)
    {
      this.maintenanceCals = (this.BMR * 1.375);
      this.gainWeight = (this.maintenanceCals + 500);
      this.loseWeight = (this.maintenanceCals - 500);
    }
    else if(this.activity == 3)
    {
      this.maintenanceCals = (this.BMR * 1.55);
      this.gainWeight = (this.maintenanceCals + 500);
      this.loseWeight = (this.maintenanceCals - 500);
    }
    else if(this.activity == 4)
    {
      this.maintenanceCals = (this.BMR * 1.725);
      this.gainWeight = (this.maintenanceCals + 500);
      this.loseWeight = (this.maintenanceCals - 500);
    }
    else if(this.activity == 5)
    {
      this.maintenanceCals = (this.BMR * 1.9);
      this.gainWeight = (this.maintenanceCals + 500);
      this.loseWeight = (this.maintenanceCals - 500);
    }
    else 
    {
      //creating the alert
      const alertActivity = await this.alertController.create({
        header: 'Incorrect Input!',
        message: 'Please enter (1 - 5)',
        buttons: ['OK']
      });
      
      //presenting the variable storing the alert
      await alertActivity.present();
    }

    //creating the alert
    const alertCalories = await this.alertController.create({
      header: 'Here are your calories',
      message: 'Maintain Weight: ' + this.maintenanceCals.toFixed(0) + '<br>Lose weight: ' + this.loseWeight.toFixed(0)  + '<br>Gain weight: ' + this.gainWeight.toFixed(0),
      buttons: ['OK']
    });

    //presenting the variable storing the alert
    await alertCalories.present();
  
  }

  ngOnInit(){
  
  }


}
