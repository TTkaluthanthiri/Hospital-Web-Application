import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:User = {
    name: '',
    uname: '',
    contact: '',
    address: '',
    email: '',
    info: '',
    password: ''
  };

  cpassword:string;

  constructor(private user_serve:UserService, private router:Router) { }

  ngOnInit(): void {
  }


  onSubmit(){
    if(this.user.uname != '' && this.user.name!= ''){
      this.user_serve.addUser(this.user);
      alert("User Registered!");
      this.router.navigate(['/login']);
    }
  }

}
