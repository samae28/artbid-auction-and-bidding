import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-auction-upcoming',
  templateUrl: './auction-upcoming.component.html',
  styleUrls: ['./auction-upcoming.component.scss'],
})
export class AuctionUpcomingComponent  implements OnInit {

  selectedSegment: string = 'upcoming';

  constructor() { }

  ngOnInit() {
    
  }

}
