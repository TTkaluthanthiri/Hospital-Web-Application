import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/session.service';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  logged:Boolean = false;
  shrink:Boolean = false;

  logged_user:string;

  constructor(public session:SessionService, public router:Router) { 
    this.logged=true; 
    this.logged_user = session.user; 


  }

  onLoad(link:string){
    this.router.navigate(['/profile', link]);
  }

  onLogout(){
    this.session.clearSession();
  }

  ngOnInit(): void {
  }

  

}
