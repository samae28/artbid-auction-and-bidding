import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-artmedium',
  templateUrl: './artmedium.page.html',
  styleUrls: ['./artmedium.page.scss'],
})
export class ArtmediumPage implements OnInit {

  artmedium: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // Assume you have a route parameter named 'artistId'
    const artMediumId = this.route.snapshot.paramMap.get('artMediumId');

    // Fetch artist data based on the artistId
    this.artmedium = this.getArtMediumData(artMediumId);
  }
  getArtMediumData(artMediumId:  string): any {
    return  [
      {
        uid: '1',
        title: 'Mystical Forest',
        artist: 'Sophie Walker',
        artistImage: 'assets/images/artist1.jpg', // Add artist profile image
        artMedium: 'Oil on Canvas',
        description: 'A mesmerizing painting capturing the essence of a mystical forest.',
        image: 'assets/images/art1.jpg',
        isAuction: true,
        startingBid: 700,
        fixedPrice: 1100, // Set to null if not applicable
        bids: [
          { bidder: 'Bidder5', amount: 750 },
          { bidder: 'Bidder6', amount: 820 },
        ],
        currentBid: 820, // Current highest bid amount
        endDate: new Date('2025-03-15T18:00:00'),
        isActive: true,
      },
      {
        uid: '2',
        title: 'Celestial Sculpture',
        artist: 'Robert Davis',
        artistImage: 'assets/images/artist2.jpg', // Add artist profile image
        artMedium: 'Bronze',
        description: 'A celestial-inspired sculpture that captivates the imagination.',
        image: 'assets/images/art2.jpg',
        isAuction: true,
        startingBid: 800,
        fixedPrice: null, // Set to null if not applicable
        bids: [
          { bidder: 'Bidder7', amount: 850 },
          { bidder: 'Bidder8', amount: 920 },
        ],
        currentBid: 920, // Current highest bid amount
        endDate: new Date('2025-04-01T18:00:00'),
        isActive: true,
      }
    ];
  }

  getBackHref(): string {
    const currentUrl = this.router.url;
    return currentUrl.includes('segment=artist') ? '/tabs/browse?segment=medium' : '/tabs/browse?segment=medium';
  }

}
