import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private navCtrl:NavController) { }

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