import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MembersPageRoutingModule } from './members-routing.module';

//to allow use of plugin
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { MembersPage } from './members.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MembersPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [MembersPage]
})
export class MembersPageModule {}
