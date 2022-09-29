import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarareaComponent } from './adicionararea.component';

describe('AdicionarareaComponent', () => {
  let component: AdicionarareaComponent;
  let fixture: ComponentFixture<AdicionarareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdicionarareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
