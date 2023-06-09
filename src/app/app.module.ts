import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, //funciones en el navegador 
    CoreModule,
    //importar
    SharedModule,
    AppRoutingModule
  ],
  providers: [{
    provide: LocationStrategy,//ayuda a quitar el # a las rutas
    useClass: PathLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
