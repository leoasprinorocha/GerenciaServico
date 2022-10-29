import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TratamentofaturaComponent } from './tratamentofatura.component';

describe('TratamentofaturaComponent', () => {
  let component: TratamentofaturaComponent;
  let fixture: ComponentFixture<TratamentofaturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TratamentofaturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TratamentofaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
