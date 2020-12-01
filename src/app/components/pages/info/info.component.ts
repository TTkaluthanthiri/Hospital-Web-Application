import { Component, OnInit } from '@angular/core';
import { CrewService } from 'src/app/services/crew.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  members = [];

  constructor(private crew_serve: CrewService) { }

  ngOnInit(): void {
    this.members = this.crew_serve.crewProessor();
  }
  description:String = "This section is all about Information that you neeed to know prior to a propper closure";

}
