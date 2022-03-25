import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';
import { DetailsRoutingModule } from './details-routing.module';
import { AddComponent } from './add/add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DetailsComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    DetailsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DetailsModule { }
