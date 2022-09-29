import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesareaComponent } from './detalhesarea.component';

describe('DetalhesareaComponent', () => {
  let component: DetalhesareaComponent;
  let fixture: ComponentFixture<DetalhesareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhesareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
