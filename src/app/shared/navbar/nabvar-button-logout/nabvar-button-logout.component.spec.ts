import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NabvarButtonLogoutComponent } from './nabvar-button-logout.component';

describe('NabvarButtonLogoutComponent', () => {
  let component: NabvarButtonLogoutComponent;
  let fixture: ComponentFixture<NabvarButtonLogoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NabvarButtonLogoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NabvarButtonLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
