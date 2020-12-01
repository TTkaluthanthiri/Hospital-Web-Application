import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { User } from '../models/user';
import { Observable } from 'rxjs';

// Optional
import { Router } from '@angular/router';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  UserCollection:AngularFirestoreCollection<User>;
  User:Observable<User[]>;

  constructor(public afs: AngularFirestore, public router:Router, public session:SessionService) { 
    // this.User = this.afs.collection('sample').valueChanges();

    this.UserCollection = this.afs.collection('user');

    // this.User = this.afs.collection('user').snapshotChanges().map(changes=>{
    //   return changes.map(a=>{
    //     const data = a.payload.doc.data() as User;
    //     data.id = a.payload.doc.id;
    //     return data;
    //   });
    // });
  }

  getUsers(){
    return this.UserCollection.valueChanges();
  }

  addUser(user:User){
    this.UserCollection.add(user);
  }

  getSingleUser(userVal:string, userPass:string){
    const collection = this.afs.collection<User>('user', ref => ref.where('uname', '==', userVal))
    const user$ = collection.valueChanges().subscribe(users=>{
      if(users[0].password===userPass){
        alert("Login Completed!");
        this.session.makeSession(userVal);
        alert("Session Name " + this.session.user);
        this.router.navigate(['/home']);
      } else {
        alert("Login Failed!");
      }
    })
    // .valueChanges().pipe(
    //   (users=>{
    //     const user = users[0];
    //     console.log(user);
    //     return user;
    //   })
    // );
    // return user$;
    // return 0;
  }
}
