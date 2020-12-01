import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserroleService {
  user_role:String;
  user_state:Boolean;

  constructor() { this.user_role='none'; this.user_state=false}

  setUser(user:String){
    this.user_role = user;
    this.user_state= true;
  }

  endUser(){
    this.user_role = 'none';
    this.user_state = false;
  }
}
