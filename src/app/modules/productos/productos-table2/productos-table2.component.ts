import { Component, OnInit,AfterViewInit,ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Producto } from 'src/app/core/producto.model';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-productos-table2',
  templateUrl: './productos-table2.component.html',
  styleUrls: ['./productos-table2.component.css']
})

export class ProductosTable2Component implements OnInit {
  @ViewChild(MatPaginator) paginator?: MatPaginator;
  
  productoIdModal="";

  productos:Producto[]=[];
  dataSource:any;
  columnas:any[]=[];
  p=1;
  pageOfItems:any[]=[];

  constructor(private store: Store<AppState>,private serviceProductos:ProductosService) { }

  ngOnInit(): void {
    this.columnas=this.serviceProductos.getcolumnas();
    this.store.subscribe(state =>{
      this.productos=state.productos;
      this.dataSource= new MatTableDataSource(state.productos);
    })

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    
    console.log(this.dataSource.paginator)
    console.log(this.dataSource.paginator._pagesize)
  }

  

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
    
  }

  productoAModal(id:string): void{
    this.productoIdModal=id;
  }
}
