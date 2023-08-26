import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddviajePageRoutingModule } from './addviaje-routing.module';

import { AddviajePage } from './addviaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddviajePageRoutingModule
  ],
  declarations: [AddviajePage]
})
export class AddviajePageModule {}
