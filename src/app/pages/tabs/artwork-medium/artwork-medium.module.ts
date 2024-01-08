import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArtworkMediumPageRoutingModule } from './artwork-medium-routing.module';

import { ArtworkMediumPage } from './artwork-medium.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArtworkMediumPageRoutingModule
  ],
  declarations: [ArtworkMediumPage]
})
export class ArtworkMediumPageModule {}
