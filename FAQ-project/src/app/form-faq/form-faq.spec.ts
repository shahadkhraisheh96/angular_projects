import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFaq } from './form-faq';

describe('FormFaq', () => {
  let component: FormFaq;
  let fixture: ComponentFixture<FormFaq>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormFaq],
    }).compileComponents();

    fixture = TestBed.createComponent(FormFaq);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
