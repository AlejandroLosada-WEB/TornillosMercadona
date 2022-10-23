import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatPaginatorModule} from '@angular/material/paginator';
import { NgModule } from '@angular/core';



@NgModule({
  imports: [MatTableModule,MatCardModule,MatProgressSpinnerModule,MatTabsModule,MatPaginatorModule],
  exports: [MatTableModule,MatCardModule,MatProgressSpinnerModule,MatTabsModule,MatPaginatorModule],
})
export class MaterialModule { }