import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mac-calculate',
  templateUrl: './mac-calculate.page.html',
  styleUrls: ['./mac-calculate.page.scss'],
})

export class MacCalculatePage implements OnInit {

  //variables
  calorieGoals : number;
  weight : number;

  remainingCals1 : any;
  remainingCals2 : any;

  protein : any;
  fat : any;
  carbohydrate : any;

  constructor() { }

  calculateMacro(){

    //1g of protein per pound of body weight
    this.protein = (this.weight * 1);
    //4 cals per g of protein
    this.remainingCals1 = this.calorieGoals - (this.weight * 4)

    //25% of total calories / 9 - 9 cals per gram of fat
    this.fat = (this.calorieGoals / 4) / 9;

    //left over is total - protein and fat calories
    this.remainingCals2 = this.remainingCals1 -(this.fat * 9);

     //fill remainder with carbs
    this.carbohydrate = (this.remainingCals2 / 4);

    //output
    alert(this.fat);
    alert(this.protein);
    alert(this.carbohydrate);
  }

  ngOnInit() {
  }

}