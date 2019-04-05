import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper'    
import 'swiper/dist/css/swiper.css'
import { templateSourceUrl } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    // This is instantiating the swiper carousel
    var swiper = new Swiper('.swiper-container', {
      // This is the element for navigation arrows on the carousel
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      // This is the element for pagination at the bottom of the carousel.
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      // This is the element for making the carousel move on its own. 
      // Measured in milliseconds I believe
      autoplay: {
        delay: 5500,
      },
      // Single element that will continuosly loop the carousel images.
      loop: true,

    });
  }
  
  
  

}
