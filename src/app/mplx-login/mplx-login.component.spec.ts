import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MplxLoginComponent } from './mplx-login.component';

describe('MplxLoginComponent', () => {
  let component: MplxLoginComponent;
  let fixture: ComponentFixture<MplxLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MplxLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MplxLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
