import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosButtonDeleteComponent } from './productos-button-delete.component';

describe('ProductosButtonDeleteComponent', () => {
  let component: ProductosButtonDeleteComponent;
  let fixture: ComponentFixture<ProductosButtonDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosButtonDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductosButtonDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
