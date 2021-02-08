import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrihlaseniComponent } from './prihlaseni.component';

describe('PrihlaseniComponent', () => {
  let component: PrihlaseniComponent;
  let fixture: ComponentFixture<PrihlaseniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrihlaseniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrihlaseniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
