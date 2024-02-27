import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1, 
    dots: true,
    autoplay: true, 
    autoplaySpeed: 2000   
  };

  images = [
    { img: '../../assets/689x387 (1).jpg' },
    { img: '../../assets/689x387 (2).jpg' },
    { img: '../../assets/689x387 (3).jpg' },
    { img: '../../assets/689x387 (5).jpg' },
    { img: '../../assets/689x387 (6).jpg' },
    { img: '../../assets/689x387 (7).jpg' },
    { img: '../../assets/689x387 (8).jpg' },
    { img: '../../assets/689x387 (9).jpg' }
  ];

  constructor() { }

}
