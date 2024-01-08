import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArtmediumPageRoutingModule } from './artmedium-routing.module';

import { ArtmediumPage } from './artmedium.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArtmediumPageRoutingModule
  ],
  declarations: [ArtmediumPage]
})
export class ArtmediumPageModule {}
