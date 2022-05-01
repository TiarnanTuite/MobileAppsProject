import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

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
