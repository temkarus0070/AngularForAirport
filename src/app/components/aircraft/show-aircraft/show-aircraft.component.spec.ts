import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAircraftComponent } from './show-aircraft.component';

describe('ShowAircraftComponent', () => {
  let component: ShowAircraftComponent;
  let fixture: ComponentFixture<ShowAircraftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAircraftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAircraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
