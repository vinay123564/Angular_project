import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BussinessListingComponent } from './bussiness-listing.component';

describe('BussinessListingComponent', () => {
  let component: BussinessListingComponent;
  let fixture: ComponentFixture<BussinessListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BussinessListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BussinessListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
