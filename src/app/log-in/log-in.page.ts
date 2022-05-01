import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
})
export class LogInPage implements OnInit {

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