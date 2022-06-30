import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroNovoClienteComponent } from './cadastro-novo-cliente.component';

describe('CadastroNovoClienteComponent', () => {
  let component: CadastroNovoClienteComponent;
  let fixture: ComponentFixture<CadastroNovoClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroNovoClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroNovoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
