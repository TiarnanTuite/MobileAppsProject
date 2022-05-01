import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cal-calculate',
  templateUrl: './cal-calculate.page.html',
  styleUrls: ['./cal-calculate.page.scss'],
})
export class CalCalculatePage implements OnInit {

  constructor(private navCtrl:NavController) { }

  ngOnInit() {
  }

  openHome(){
    this.navCtrl.navigateBack('/home');
  }
  openLogIn(){
    this.navCtrl.navigateForward('/log-in');
  }
  openSignUp(){
    this.navCtrl.navigateForward('/sign-up');
  }
  openCalorie(){
    this.navCtrl.navigateForward('/cal-calculate');
  }
  openMacro(){
    this.navCtrl.navigateForward('/mac-calculate');
  }
}
