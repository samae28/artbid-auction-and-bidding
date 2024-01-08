import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuctionPage } from './auction.page';
import { AuctionCurrentComponent } from 'src/app/components/auction-current/auction-current.component';
import { AuctionUpcomingComponent } from 'src/app/components/auction-upcoming/auction-upcoming.component';
import { AuctionPastComponent } from 'src/app/components/auction-past/auction-past.component';

const routes: Routes = [
  {
    path: '',
    component: AuctionPage,
        children: [
          { path: 'current', component: AuctionCurrentComponent },
          { path: 'upcoming', component: AuctionUpcomingComponent },
          { path: 'past', component: AuctionPastComponent },
        ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuctionPageRoutingModule {}
