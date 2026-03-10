import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Start } from './components/start/start';
import { Anim1 } from './components/anim1/anim1';
import { Anim2 } from './components/anim2/anim2';
import { Anim3 } from './components/anim3/anim3';
import { Anim4 } from './components/anim4/anim4';
import { Anim5 } from './components/anim5/anim5';
import { Anim6 } from './components/anim6/anim6';
import { Anim7 } from './components/anim7/anim7';
import { Anim8 } from './components/anim8/anim8';
import { Anim9 } from './components/anim9/anim9';
import { Anim10 } from './components/anim10/anim10';
import { Anim11 } from './components/anim11/anim11';
import { Anim12 } from './components/anim12/anim12';
import { Anim13 } from './components/anim13/anim13';
const routes: Routes = [
  {path:"",component:Start},
  {path:"anim1",component:Anim1},
  {path:"anim2",component:Anim2},
  {path:"anim3",component:Anim3},
  {path:"anim4",component:Anim4},
  {path:"anim5",component:Anim5},
  {path:"anim6",component:Anim6},
  {path:"anim7",component:Anim7},
  {path:"anim8",component:Anim8},
  {path:"anim9",component:Anim9},
  {path:"anim10",component:Anim10},
  {path:"anim11",component:Anim11},
  {path:"anim12",component:Anim12},
  {path:"anim13",component:Anim13}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
