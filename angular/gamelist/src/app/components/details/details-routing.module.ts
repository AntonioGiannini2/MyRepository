import { NgModule } from '@angular/core';
import { DetailsComponent } from './details.component';
import { RouterModule } from '@angular/router'
import { AddComponent } from './add/add.component';


const routes = [
  {
    path: 'add',
    component: AddComponent,
  },
  {
    path: ':id',
    component: DetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsRoutingModule { }
