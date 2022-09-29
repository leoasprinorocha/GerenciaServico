import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionaplanoComponent } from './adicionaplano.component';

describe('AdicionaplanoComponent', () => {
  let component: AdicionaplanoComponent;
  let fixture: ComponentFixture<AdicionaplanoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdicionaplanoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionaplanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
