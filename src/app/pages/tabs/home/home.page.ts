import { Component, OnInit, ChangeDetectorRef} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  banners: any[] = [];
  artworks: any[] = [];
  isLoading: boolean = false;

  constructor(private cdr: ChangeDetectorRef, private router: Router) { }

  navigateToAuctionSegment(segment: string): void {
    this.router.navigate(['/tabs/auction'], { queryParams: { segment } });
  }  

  ngOnInit() {
    this.isLoading = true;

    setTimeout(() => {
      this.banners = [
        {banner: 'assets/images/image1.png'},
        {banner: 'assets/images/image2.png'},
        {banner: 'assets/images/image3.png'}
      ];
      this.artworks = [
        {
          uid: 'shdksha',
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
          uid: 'dsjahkjsh',
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
      this.isLoading = false;
      this.cdr.detectChanges();
    }, 2000);
  }

}
