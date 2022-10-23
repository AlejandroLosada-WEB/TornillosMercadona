import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosPaginacionComponent } from './productos-paginacion.component';

describe('ProductosPaginacionComponent', () => {
  let component: ProductosPaginacionComponent;
  let fixture: ComponentFixture<ProductosPaginacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosPaginacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductosPaginacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
