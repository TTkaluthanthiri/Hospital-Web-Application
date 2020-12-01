import { Injectable } from '@angular/core';
import { Appointment } from '../models/appointment';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  AppointCollection: AngularFirestoreCollection<Appointment>;
  Appointment:Observable<Appointment[]>;

  constructor(public afs:AngularFirestore) { 
    this.AppointCollection = this.afs.collection('appointment');
  }

  getAppointment(id:string){

  }
  
  addAppoint(appoint:Appointment){
    this.AppointCollection.add(appoint);
    alert("Your Appointment is added!");
  }

  getAll(){
    return this.AppointCollection.valueChanges();
  }

  updateAppointment(){

  }
}
