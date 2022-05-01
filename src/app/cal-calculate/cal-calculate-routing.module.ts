import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalCalculatePage } from './cal-calculate.page';

const routes: Routes = [
  {
    path: '',
    component: CalCalculatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalCalculatePageRoutingModule {}
