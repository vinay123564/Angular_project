import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerVesComponent } from './ser-ves.component';

describe('SerVesComponent', () => {
  let component: SerVesComponent;
  let fixture: ComponentFixture<SerVesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerVesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SerVesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
