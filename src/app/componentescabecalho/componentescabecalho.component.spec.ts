import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentescabecalhoComponent } from './componentescabecalho.component';

describe('ComponentescabecalhoComponent', () => {
  let component: ComponentescabecalhoComponent;
  let fixture: ComponentFixture<ComponentescabecalhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentescabecalhoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentescabecalhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
