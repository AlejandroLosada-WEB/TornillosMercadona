import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosTable2Component } from './productos-table2.component';

describe('ProductosTable2Component', () => {
  let component: ProductosTable2Component;
  let fixture: ComponentFixture<ProductosTable2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosTable2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductosTable2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
