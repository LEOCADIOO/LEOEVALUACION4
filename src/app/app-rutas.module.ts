import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {NotaComponent} from './nota/nota.component';
import {TareasComponent} from './tareas/tareas.component';


const routes: Routes =[
  {path: 'tarea', component: TareasComponent},
  {path: 'nota',component: NotaComponent},
  {path: '**', pathMatch:'full', redirectTo:'tarea'},
];  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRutasModule { }
