import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedsComponent } from './meds.component';

describe('MedsComponent', () => {
  let component: MedsComponent;
  let fixture: ComponentFixture<MedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
