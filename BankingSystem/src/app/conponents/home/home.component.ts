import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],animations: [
    trigger('slide', [
      transition(':increment', [
        style({ transform: 'translateX(-100%)' }),
        animate('500ms ease-out', style({ transform: 'translateX(0%)' })),
      ]),
      transition(':decrement', [
        style({ transform: 'translateX(100%)' }),
        animate('500ms ease-out', style({ transform: 'translateX(0%)' })),
      ]),
    ]),
  ],
})
export class HomeComponent {
  images: string[] = ['../assets/img/img3.png', '../assets/img/img2.png', '../assets/img/img1.jpg'];
 currentImageIndex=0;
  advantages = [
    { title: 'Advantage 1', description: 'Lorem ipsum dolor sit amet.' },
    { title: 'Advantage 2', description: 'Consectetur adipiscing elit.' },
    { title: 'Advantage 3', description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' }
  ];

  newsList = [
    'News 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'News 2: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    'News 3: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'
  ];

  nextSlide(){
    this.currentImageIndex=(this.currentImageIndex +1)  % this.images.length;
  }
  Slide(){
    this.currentImageIndex=(this.currentImageIndex -1+ this.images.length)  % this.images.length;
  }
}
