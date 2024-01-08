import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArtmediumPage } from './artmedium.page';

const routes: Routes = [
  {
    path: '',
    component: ArtmediumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArtmediumPageRoutingModule {}
