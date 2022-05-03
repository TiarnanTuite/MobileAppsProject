import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalCalculatePageRoutingModule } from './cal-calculate-routing.module';

import { CalCalculatePage } from './cal-calculate.page';
import { InputModule } from '../input/input.module';

//needed imports
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InputModule,
    CalCalculatePageRoutingModule
  ],
  declarations: [CalCalculatePage]
})
export class CalCalculatePageModule {}
