import { NgModule } from '@angular/core';
import { DetailsComponent } from './details.component';
import { RouterModule } from '@angular/router'


const routes = [
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
