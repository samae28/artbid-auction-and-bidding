import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children:[
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'auction',
        loadChildren: () => import('./auction/auction.module').then( m => m.AuctionPageModule)
      },
      {
        path: 'browse',
        loadChildren: () => import('./browse/browse.module').then( m => m.BrowsePageModule)
      },
      {
        path: 'account',
        loadChildren: () => import('./account/account.module').then( m => m.AccountPageModule)
      },
      {
        path: 'search',
        loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
      },
      {
        path: 'cart',
        loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'artwork-detail/:artworkDetailId',
    loadChildren: () => import('./artwork-detail/artwork-detail.module').then( m => m.ArtworkDetailPageModule)
  },
  {
    path: 'artist-profile/:artistProfileId',
    loadChildren: () => import('./artist-profile/artist-profile.module').then( m => m.ArtistProfilePageModule)
  },
  {
    path: 'artmedium/:artMediumId',
    loadChildren: () => import('./artmedium/artmedium.module').then( m => m.ArtmediumPageModule)
  },
  {
    path: 'artwork-medium/:artWorkMediumId',
    loadChildren: () => import('./artwork-medium/artwork-medium.module').then( m => m.ArtworkMediumPageModule)
  },  {
    path: 'address',
    loadChildren: () => import('./address/address.module').then( m => m.AddressPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
