import { Component, OnInit, ViewChild  } from '@angular/core';
import * as $ from 'jquery';
import * as slick from 'slick-carousel';

//declare const $: any;
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  constructor(){}
  ngOnInit(){}
 
  itemsPerSlide = 5;

  singleSlideOffset = true;
  noWrap = true;
 
  slides = [
    {image: 'assets/image/a.jpg', name :'Steve Rogers'},
    {image: 'assets/image/b.jpg', name :'John Wick'},
    {image: 'assets/image/g.jpg', name :'Alex Prat'},
    {image: 'assets/image/j.jpg', name :'Tony Stark'},
    {image: 'assets/image/k.jpg', name :'Phil Carter'},
    {image: 'assets/image/l.jpg', name :'Clerk Jade'},
    {image: 'assets/image/m.jpg', name :'James Brennan'},
    {image: 'assets/image/a1.jpg', name :'Cindy Corn'},
    {image: 'assets/image/a2.jpg', name :'Susan Johnson'}  
  ];
}
