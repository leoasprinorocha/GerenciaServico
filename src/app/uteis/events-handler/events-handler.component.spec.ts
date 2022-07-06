import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsHandlerComponent } from './events-handler.component';

describe('EventsHandlerComponent', () => {
  let component: EventsHandlerComponent;
  let fixture: ComponentFixture<EventsHandlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventsHandlerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
