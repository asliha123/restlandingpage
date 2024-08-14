import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestListComponent } from './rest-list/rest-list.component';
import { SingleViewComponent } from './single-view/single-view.component';

const routes: Routes = [
  {path:'',component:RestListComponent},
  {path:'single/:id',component:SingleViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
