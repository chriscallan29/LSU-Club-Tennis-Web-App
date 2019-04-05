import { Component, OnInit } from '@angular/core';
import  AOS  from 'aos';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // AOS is the animation on scroll library. 
    // This variable just dictates the speed of the animation.
    AOS.init({
      duration: 1200,
    })
  }

}
