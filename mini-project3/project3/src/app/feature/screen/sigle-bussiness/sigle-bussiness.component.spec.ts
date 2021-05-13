import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigleBussinessComponent } from './sigle-bussiness.component';

describe('SigleBussinessComponent', () => {
  let component: SigleBussinessComponent;
  let fixture: ComponentFixture<SigleBussinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigleBussinessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigleBussinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
