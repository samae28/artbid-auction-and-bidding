import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auction-current',
  templateUrl: './auction-current.component.html',
  styleUrls: ['./auction-current.component.scss'],
})
export class AuctionCurrentComponent  implements OnInit {

  selectedSegment: string = 'current';
  
  constructor() { }

  ngOnInit() {}

}
