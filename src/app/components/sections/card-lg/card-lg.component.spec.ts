import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLgComponent } from './card-lg.component';

describe('CardLgComponent', () => {
  let component: CardLgComponent;
  let fixture: ComponentFixture<CardLgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardLgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardLgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
