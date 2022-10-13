import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAlumnosComponent } from './form-alumnos.component';

describe('FormAlumnosComponent', () => {
  let component: FormAlumnosComponent;
  let fixture: ComponentFixture<FormAlumnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAlumnosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
