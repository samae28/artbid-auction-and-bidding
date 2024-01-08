import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  @ViewChild('searchInput') sInput;
  model: any = {
    icon: 'search-outline',
    title: 'No Artists Record Found'
  };
  isLoading: boolean;
  query: any;
  allArtworks: any[] = [
    {
      id: '1',
      title: 'Mystical Forest',
      short_name: 'mystical forest',
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
      id: '2',
      title: 'Celestial Sculpture',
      short_name: 'celestial sculpture',
      artist: 'Robert Davis',
      artistImage: 'assets/images/artist2.jpg', // Add artist profile image
      artMedium: 'Acrylic',
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

  artworks: any[] = [];

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.sInput.setFocus();
    }, 500);
  }

  async onSearchChange(event) {
    console.log(event.detail.value);
    this.query = event.detail.value.toLowerCase();
    this.artworks = [];
    if(this.query.length > 0) {
      this.isLoading = true;
      setTimeout(async() => {
        this.artworks = this.allArtworks.filter((element: any) => {
          return element.short_name.includes(this.query);
        });
        console.log(this.artworks);
        this.isLoading = false;
      }, 3000);
    }
  }

}
