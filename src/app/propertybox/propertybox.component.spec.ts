import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyBoxComponent } from './propertybox.component';

describe('PropertyboxComponent', () => {
  let component: PropertyBoxComponent;
  let fixture: ComponentFixture<PropertyBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
