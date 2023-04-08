import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],//evita los # en url 
  exports: [RouterModule]
})
export class AppRoutingModule { }
