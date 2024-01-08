import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auction-past',
  templateUrl: './auction-past.component.html',
  styleUrls: ['./auction-past.component.scss'],
})
export class AuctionPastComponent  implements OnInit {

  selectedSegment: string = 'past';

  constructor() { }

  ngOnInit() {}

}
