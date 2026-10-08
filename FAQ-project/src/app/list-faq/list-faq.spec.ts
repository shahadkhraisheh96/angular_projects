import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFaq } from './list-faq';

describe('ListFaq', () => {
  let component: ListFaq;
  let fixture: ComponentFixture<ListFaq>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListFaq],
    }).compileComponents();

    fixture = TestBed.createComponent(ListFaq);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
