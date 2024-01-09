import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.page.html',
  styleUrls: ['./address.page.scss'],
})
export class AddressPage implements OnInit {

  isLoading: boolean;
  addresses: any[] = [];

  constructor() { }

  ngOnInit() {
    this.getAddresses();
  }

  getAddresses() {    
    this.isLoading = true;
    setTimeout(() => {
      this.addresses = [      
        {address: "Sta. Cruz, Zambales, Philippines", house: "2nd Floor", id: "7Kox63KlggTvV7ebRKar", landmark: "Plaza", lat: 26.1830738, lng: 91.74049769999999, title: "Fancy", user_id: "1"},
        {address: "Olongapo City, Philippines", house: "Ground Floor", id: "8Kox63KlggTvV7ebRKar", landmark: "Ulo ng Apo", lat: 26.1830738, lng: 91.74049769999999, title: "Work", user_id: "1"}
      ];
      this.isLoading = false;
    }, 3000);
  }

  getIcon(title) {
    const name = title.toLowerCase();
    switch(name) {
      case 'home': return 'home-outline';
      case 'work': return 'briefcase-outline';
      default: return 'location-outline';
    }
  }

  editAddress(address) {}

  deleteAddress(address) {}

}
