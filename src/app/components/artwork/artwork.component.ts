import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-artwork',
  templateUrl: './artwork.component.html',
  styleUrls: ['./artwork.component.scss'],
})
export class ArtworkComponent  implements OnInit {

  // @Input() artwork: any[] = [];
  // @Input() artwork: { cover: string }[] = [];
  @Input() artwork: any;
  constructor() { }

  ngOnInit() {
    console.log('Artwork array:', this.artwork);
  }

  getHighestBid(): string {
    if (!this.artwork.bids || this.artwork.bids.length === 0) {
      return 'No bids yet';
    }

    const highestBid = Math.max(...this.artwork.bids.map(bid => bid.amount));

    return `P${highestBid}`;
  }
  
}

