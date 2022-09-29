import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarplanoComponent } from './alterarplano.component';

describe('AlterarplanoComponent', () => {
  let component: AlterarplanoComponent;
  let fixture: ComponentFixture<AlterarplanoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlterarplanoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterarplanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
