import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZaregistrujSeComponent } from './zaregistruj-se.component';

describe('ZaregistrujSeComponent', () => {
  let component: ZaregistrujSeComponent;
  let fixture: ComponentFixture<ZaregistrujSeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZaregistrujSeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZaregistrujSeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
