import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuponesDeliveryComponent } from './cupones-delivery.component';

describe('CuponesDeliveryComponent', () => {
  let component: CuponesDeliveryComponent;
  let fixture: ComponentFixture<CuponesDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuponesDeliveryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuponesDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
