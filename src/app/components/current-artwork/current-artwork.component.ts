import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-artwork',
  templateUrl: './current-artwork.component.html',
  styleUrls: ['./current-artwork.component.scss'],
})
export class CurrentArtworkComponent  implements OnInit {

  @Input() currentArtwork: any;
  constructor() { }

  ngOnInit() {}

}
