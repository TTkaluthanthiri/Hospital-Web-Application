import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-container-title',
  templateUrl: './container-title.component.html',
  styleUrls: ['./container-title.component.css']
})
export class ContainerTitleComponent implements OnInit {

  @Input() title:String;
  @Input() desc:String;

  constructor() { }

  ngOnInit(): void {
  }

}
