import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDataEditComponent } from './customer-data-edit.component';

describe('CustomerDataEditComponent', () => {
  let component: CustomerDataEditComponent;
  let fixture: ComponentFixture<CustomerDataEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerDataEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDataEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
