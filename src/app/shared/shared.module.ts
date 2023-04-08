import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import * as fromComponents from './components' 

@NgModule({
  imports: [
    FormsModule,//add
    ReactiveFormsModule,//
    CommonModule,
    HttpClientModule    //protocolo http
  ],
  declarations: [...fromComponents.components],//inyeccion
exports:[
  FormsModule,
  ReactiveFormsModule,
  CommonModule,
  HttpClientModule,
  ...fromComponents.components

]//exportamos modules compartidos
})
export class SharedModule { }
