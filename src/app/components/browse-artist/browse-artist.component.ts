import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-browse-artist',
  templateUrl: './browse-artist.component.html',
  styleUrls: ['./browse-artist.component.scss'],
})
export class BrowseArtistComponent  implements OnInit {

  @Input() artist: any; 
  
  selectedSegment: string = 'artist';

  constructor() { }

  ngOnInit() {}

  artists = [
    {
      uid: '1',
      title: 'Mystical Forest',
      artist: 'Sophie Walker',
      artistImage: 'assets/images/user1.jpg', // Add artist profile image
      artistBio: 'beautiful',
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
      artistImage: 'assets/images/user2.jpg', // Add artist profile image
      artistBio: 'handsome',
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
