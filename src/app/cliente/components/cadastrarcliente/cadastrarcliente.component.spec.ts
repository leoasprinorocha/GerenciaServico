import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarclienteComponent } from './cadastrarcliente.component';

describe('CadastrarclienteComponent', () => {
  let component: CadastrarclienteComponent;
  let fixture: ComponentFixture<CadastrarclienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarclienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
