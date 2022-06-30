import { TestBed } from '@angular/core/testing';

import { CadastroNovoClienteService } from './cadastro-novo-cliente.service';

describe('CadastroNovoClienteService', () => {
  let service: CadastroNovoClienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastroNovoClienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
