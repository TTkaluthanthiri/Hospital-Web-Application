import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-lg',
  templateUrl: './card-lg.component.html',
  styleUrls: ['./card-lg.component.css']
})
export class CardLgComponent implements OnInit {

  @Input() code:Number;
  @Input() name:String;
  @Input() cat:String;
  @Input() url:String;
  @Input() info:String;
  @Input() quali:String;
  @Input() spe:String;

  constructor() { }

  ngOnInit(): void {
  }

}
