import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { contadorModule } from './contador/contador.module';
import { heroecomponent } from './heroes/heroe/heroe.component';
import { heroesModule } from './heroes/heroes.module';
import { listadoComponent } from './heroes/listado/listado.component';




@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    heroesModule,
    contadorModule
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
