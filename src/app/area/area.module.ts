import { DetalhesAreaComponent } from './detalhesarea/detalhesarea.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreaComponent } from './area/area.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { HomeRoutingModule } from '../home/home-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatPaginatorModule} from '@angular/material/paginator';



@NgModule({
  declarations: [
    AreaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatSelectModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    MatDialogModule,
    MatPaginatorModule
  ],
  exports:[
    AreaComponent,

  ]
})
export class AreaModule { }
