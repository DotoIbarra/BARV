import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddautoPageRoutingModule } from './addauto-routing.module';

import { AddautoPage } from './addauto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddautoPageRoutingModule
  ],
  declarations: [AddautoPage]
})
export class AddautoPageModule {}
