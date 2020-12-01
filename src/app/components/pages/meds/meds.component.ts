import { Component, OnInit } from '@angular/core';
import { MedicinesService } from 'src/app/services/medicines.service';

@Component({
  selector: 'app-meds',
  templateUrl: './meds.component.html',
  styleUrls: ['./meds.component.css']
})
export class MedsComponent implements OnInit {

  medicines = [];

  constructor(private meds: MedicinesService) {}

  ngOnInit(): void {
    this.medicines = this.meds.medicinepocessor();
    console.log(this.medicines);
  }

  description:String = 'This is the short descrption on Medicine Displayer page';
}
