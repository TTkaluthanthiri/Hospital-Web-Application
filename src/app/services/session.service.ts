import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  public isActive:Boolean = false;
  public user:string = "";

  constructor() { }

  makeSession(name:string){
     this.user = name;
     this.isActive = true; 
  }

  clearSession(){
    this.isActive = false;
    this.user = "";
  }

}


