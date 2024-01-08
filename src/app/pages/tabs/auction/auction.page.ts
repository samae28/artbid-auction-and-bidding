import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-auction',
  templateUrl: './auction.page.html',
  styleUrls: ['./auction.page.scss'],
})
export class AuctionPage implements OnInit {

  @Input() artwork: any;
  selectedSegment: 'current' | 'upcoming' | 'past';

  constructor(private route: ActivatedRoute, private router: Router ) { }

  ngOnInit() {
    this.route.queryParams.subscribe((queryParams) => {
      this.selectedSegment = queryParams['segment'] || 'current';
    });
  }

  changeSegment(event: CustomEvent) {
    const selectedSegment = event.detail.value as 'current' | 'upcoming' | 'past';
    this.selectedSegment = selectedSegment;
    console.log(this.selectedSegment);

    // Update the URL based on the selected segment
    this.router.navigate(['/tabs/auction'], { queryParams: { segment: selectedSegment } });
  }
}
