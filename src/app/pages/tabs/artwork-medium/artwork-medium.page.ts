import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-artwork-medium',
  templateUrl: './artwork-medium.page.html',
  styleUrls: ['./artwork-medium.page.scss'],
})
export class ArtworkMediumPage implements OnInit {

  id: any;
  data: any = {};
  artMedium: any[] = [];
  artworks = [
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

  mediums = [
    {
      uid: '1',
      artMediumName: 'Charcoal',
      image: 'assets/images/charcoal.jpg',
      description: 'A beautiful artwork created using charcoal painting.',
    },
    {
      uid: '2',
      artMediumName: 'Oil Painting',
      image: 'assets/images/oil-paint.jpg',
      description: 'An amazing oil painting capturing the essence of nature.',
    },
  ];

  constructor(
    private navCtrl: NavController,
    private route:ActivatedRoute
  ) { }



  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => { 
      console.log('data: ', paramMap);
      if(!paramMap.has('artWorkMediumId')){
        this.navCtrl.back();
        return;
      }
      this.id = paramMap.get('artWorkMediumId');
      console.log('id: ', this.id);
      this.getArtWorkMedium();
  })}

  // getArtWorkMedium(){
  //   this.data = {};
  //   let data: any = this.artMedium.filter(x => x.uid === this.id);
  //   this.data = data[0];
  //   console.log('artMedium: ', this.data)
  // }

  getArtWorkMedium() {
    this.data = this.mediums.find(x => x.uid === this.id);
    console.log('artMediumName: ', this.data);
  }
  
  // getArtWorkMedium() {
  //   // Use find instead of filter, and assign the result to this.data
  //   this.data = this.artworks.find(x => x.uid === this.id);
  
  //   // Log the result to check if it's working
  //   console.log('artWorkMedium: ', this.data);
  // }
  

}