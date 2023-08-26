import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddviajePage } from './addviaje.page';

const routes: Routes = [
  {
    path: '',
    component: AddviajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddviajePageRoutingModule {}
