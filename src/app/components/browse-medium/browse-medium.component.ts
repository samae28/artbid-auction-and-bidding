import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-browse-medium',
  templateUrl: './browse-medium.component.html',
  styleUrls: ['./browse-medium.component.scss'],
})
export class BrowseMediumComponent  implements OnInit {

  selectedSegment: string = 'medium';
  @Input() medium: any;

  constructor() { }

  ngOnInit() {}
  mediums = [
    {
      uid: '1',
      artMediumName: 'Charcoal',
      image: 'assets/images/charcoal.jpg',
      description: 'A beautiful artwork created using charcoal.',
    },
    {
      uid: '2',
      artMediumName: 'Oil Painting',
      image: 'assets/images/oil-paint.jpg',
      description: 'An amazing oil painting capturing the essence of nature.',
    },
    // Add more medium items as needed
  ];
}
