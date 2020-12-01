import { Injectable } from '@angular/core';
import crew_data from '../../assets/resources/datasource/crew.json';

@Injectable({
  providedIn: 'root'
})
export class CrewService {

  constructor() { }
  crew = crew_data.crew;

  crewProessor(){
    return this.crew;
  }


}
