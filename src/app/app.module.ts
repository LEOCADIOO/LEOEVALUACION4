import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {TareasComponent} from './tareas/tareas.component';
import { NotaComponent } from './nota/nota.component';
import { AppRutasModule } from './app-rutas.module';
import {TareasRegComponent} from './tareasreg/tareasreg.component';
import { NotasRegComponent } from './notasreg/notasreg.component';
import {ReactiveFormsModule} from '@angular/forms';
import { NavComponent } from './nav/nav.component'

@NgModule({
  declarations: [
    AppComponent,
    TareasComponent,
    NotaComponent,
    TareasRegComponent,
    NotasRegComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRutasModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
