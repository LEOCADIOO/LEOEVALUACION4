
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html'
})
export class TareasComponent {
  
  tareas: Tareas[] = [];
  tareasadd: string;
  objetoTareas: any;
  newtarea: any;
  ngOnInit(){
    this.mostrarTareas();
  }
  constructor(
    ) {
      this.tareasadd = '';
      this.newtarea = [];
}
tareasreg=new FormGroup({
    aceptado: new FormControl('',[Validators.required])
  });
  mostrarTareas(){
  if(localStorage.getItem('tareas')===null){
    this.newtarea=[];
  }else{
    this.newtarea=JSON.parse(localStorage.getItem('tareas'))

  }
}
agregarTareas(event) {

  if (this.tareasreg.valid){
  this.objetoTareas = {
    tareasadd: this.tareasadd
  }
  this.newtarea.push(this.objetoTareas);  
  this.tareasadd = '';
  event.preventDefault();
    
  //console.log();

  localStorage.setItem('tareas', JSON.stringify(this.newtarea));
    }else{

  
  }
}

eliminarTareas(event){
  this.newtarea.splice(this.newtarea);
}


}
export interface Tareas{
  tareasadd: string;
}
