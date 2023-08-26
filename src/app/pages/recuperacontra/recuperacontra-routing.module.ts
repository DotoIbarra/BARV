import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecuperacontraPage } from './recuperacontra.page';

const routes: Routes = [
  {
    path: '',
    component: RecuperacontraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecuperacontraPageRoutingModule {}
