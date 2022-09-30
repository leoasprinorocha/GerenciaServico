import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionaenderecoComponent } from './adicionaendereco.component';

describe('AdicionaenderecoComponent', () => {
  let component: AdicionaenderecoComponent;
  let fixture: ComponentFixture<AdicionaenderecoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdicionaenderecoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionaenderecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
