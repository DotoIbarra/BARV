import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecuperacontraPageRoutingModule } from './recuperacontra-routing.module';

import { RecuperacontraPage } from './recuperacontra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecuperacontraPageRoutingModule
  ],
  declarations: [RecuperacontraPage]
})
export class RecuperacontraPageModule {}
