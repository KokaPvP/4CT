import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Menu } from './components/menu/menu';
import { Rower1 } from './components/rower1/rower1';
import { Rower2 } from './components/rower2/rower2';
import { Rower3 } from './components/rower3/rower3';

const routes: Routes = [
  {path:"", component: Menu},
  {path:"rower1", component: Rower1},
  {path:"rower2", component: Rower2},
  {path:"rower3", component: Rower3},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
