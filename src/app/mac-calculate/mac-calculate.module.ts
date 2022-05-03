import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MacCalculatePageRoutingModule } from './mac-calculate-routing.module';

import { MacCalculatePage } from './mac-calculate.page';
import { InputModule } from '../input/input.module';

//needed imports
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InputModule,
    MacCalculatePageRoutingModule
  ],
  declarations: [MacCalculatePage]
})
export class MacCalculatePageModule {}
