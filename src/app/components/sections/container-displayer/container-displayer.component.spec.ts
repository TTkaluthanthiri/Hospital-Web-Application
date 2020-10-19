import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerDisplayerComponent } from './container-displayer.component';

describe('ContainerDisplayerComponent', () => {
  let component: ContainerDisplayerComponent;
  let fixture: ComponentFixture<ContainerDisplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerDisplayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
