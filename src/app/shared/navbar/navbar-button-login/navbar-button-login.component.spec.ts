import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarButtonLoginComponent } from './navbar-button-login.component';

describe('NavbarButtonLoginComponent', () => {
  let component: NavbarButtonLoginComponent;
  let fixture: ComponentFixture<NavbarButtonLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarButtonLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarButtonLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
