import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.page.html',
  styleUrls: ['./browse.page.scss'],
})
export class BrowsePage implements OnInit {

  selectedSegment: 'medium' | 'artist' = 'medium';

  constructor(private route: ActivatedRoute, private router: Router ) { }

  ngOnInit() {
    this.route.queryParams.subscribe((queryParams) => {
      this.selectedSegment = queryParams['segment'] || 'medium';
    });
  }

  changeSegment(event: CustomEvent) {
    const selectedSegment = event.detail.value as 'medium' | 'artist';
    this.selectedSegment = selectedSegment;
    console.log(this.selectedSegment);

    // Update the URL based on the selected segment
    this.router.navigate(['/tabs/browse'], { queryParams: { segment: selectedSegment } });
  }

  artists = [
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
  mediums = [
    {
      uid: '1',
      subtitle: 'Charcoal',
      imageSrc: 'assets/images/charcoal.jpg',
      description: 'A beautiful artwork created using charcoal.',
    },
    {
      uid: '2',
      subtitle: 'Oil Painting',
      imageSrc: 'assets/images/oil-paint.jpg',
      description: 'An amazing oil painting capturing the essence of nature.',
    },
    // Add more medium items as needed
  ];
}
