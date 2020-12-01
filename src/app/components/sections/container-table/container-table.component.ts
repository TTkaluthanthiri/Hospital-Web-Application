import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/services/appointment.service';
import { Appointment } from '../../../models/appointment';

@Component({
  selector: 'app-container-table',
  templateUrl: './container-table.component.html',
  styleUrls: ['./container-table.component.css']
})
export class ContainerTableComponent implements OnInit {

  appointment: Appointment = {
    user:'',
    issue: '',
    desc:'',
    date: '',
    doctor: '',
    contact: ''
  };

  appointments = [];

  constructor(public appoint_serve:AppointmentService) { }

  ngOnInit(): void {
    this.appoint_serve.getAll().subscribe(values=>{
      this.appointments.push(values);
    })
  }

}
