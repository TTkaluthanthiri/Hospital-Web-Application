import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() item:String;
  @Input() price:Number;
  @Input() info:String;
  @Input() pic:String;

  constructor() { }

  ngOnInit(): void {
  }

}
