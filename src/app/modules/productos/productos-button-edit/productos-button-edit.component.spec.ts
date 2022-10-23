import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosButtonEditComponent } from './productos-button-edit.component';

describe('ProductosButtonEditComponent', () => {
  let component: ProductosButtonEditComponent;
  let fixture: ComponentFixture<ProductosButtonEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosButtonEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductosButtonEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
