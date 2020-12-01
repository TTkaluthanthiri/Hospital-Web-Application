import { Component, ComponentRef, OnInit } from '@angular/core';

import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user';
import { Observable } from 'rxjs';

// import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  reg_user:User = {
    uname: '',
    password: ''
  };

  pass:String;

  constructor(public user_service:UserService) { }

  ngOnInit(): void {
    
    // this.user_service.getUsers().subscribe(users=>{
    //   console.log(users);
    // });
  }

  onLogin(){
    this.user_service.getSingleUser(this.reg_user.uname, this.reg_user.password);
  }

}
