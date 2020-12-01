import { Injectable } from '@angular/core';
import med_data from '../../assets/resources/datasource/medicines.json';

@Injectable({
  providedIn: 'root'
})
export class MedicinesService {

  constructor() { }

  // medicines = [
  //   ['Med A', 200.00, 'No Side Effects'],
  //   ['Med B', 1200.00, 'No Side Effects'],
  //   ['Med C', 500.00, 'No Side Effects']
  // ];

  medicines = med_data.medicines;
  medicinepocessor(){
    return this.medicines;
  }
}
