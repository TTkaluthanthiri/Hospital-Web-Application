import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../../../services/appointment.service';
import { Appointment } from '../../../models/appointment';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  appointment: Appointment = {
    user:'',
    issue: '',
    desc:'',
    date: '',
    doctor: '',
    contact: ''
  };

  date: Date;
  days:Number;
  months:Number;
  years:Number;

  constructor(public appoint_serve:AppointmentService) { }

  ngOnInit(): void {
  }

  onAppoint(){
    this.appoint_serve.addAppoint(this.appointment);
  }

  parseDate(dateString:string){
    if(dateString){
      this.date = new Date(dateString);

      // For Further Use
      this.days = this.date.getDate();
      this.months = this.date.getHours();
      this.years = this.date.getFullYear();
      
      return `${this.years}-${this.months}-${this.days}`;
      
      // console.log("Date -"+this.years+"-"+this.months+"-"+this.days);
      
    }
    return null;
  }

}
