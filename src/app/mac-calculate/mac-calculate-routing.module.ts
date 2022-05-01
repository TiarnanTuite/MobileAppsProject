import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MacCalculatePage } from './mac-calculate.page';

const routes: Routes = [
  {
    path: '',
    component: MacCalculatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MacCalculatePageRoutingModule {}
