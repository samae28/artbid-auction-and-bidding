import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-artist-profile',
  templateUrl: './artist-profile.page.html',
  styleUrls: ['./artist-profile.page.scss'],
})
export class ArtistProfilePage implements OnInit {

  artist: any; // Initialize with the artist data

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    // Assume you have a route parameter named 'artistId'
    const artistId = this.route.snapshot.paramMap.get('artistId');

    // Fetch artist data based on the artistId
    this.artist = this.getArtistData(artistId);
  }

  // Replace this with your actual method to fetch artist data
  getArtistData(artistId: string): any {
    // Implement your logic to fetch artist data based on the artistId
    // This might involve querying your backend or accessing a service
    // For now, you can simulate the data retrieval with a hardcoded artist
    return {
      name: 'Sophie Walker',
      artistImage: 'assets/images/user1.jpg',
      artMedium: 'Oil on Canvas',
      bio: 'A talented artist with a passion for capturing the beauty of nature.',
      artworks: [
        {
          uid: '1',
          title: 'Mystical Forest',
          artMedium: 'Oil on Canvas',
          startingBid: 700,
          isAuction: true,
          currentBid: 820,
          image: 'assets/images/art1.jpg',
        },
        // Add more artworks as needed
      ],
    };
  }

  getBackHref(): string {
    const currentUrl = this.router.url;
    return currentUrl.includes('segment=artist') ? '/tabs/browse?segment=artist' : '/tabs/browse?segment=artist';
  }
}
