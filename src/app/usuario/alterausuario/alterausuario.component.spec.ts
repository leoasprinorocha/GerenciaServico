import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterausuarioComponent } from './alterausuario.component';

describe('AlterausuarioComponent', () => {
  let component: AlterausuarioComponent;
  let fixture: ComponentFixture<AlterausuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlterausuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterausuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
