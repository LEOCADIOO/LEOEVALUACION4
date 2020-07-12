import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {TareasComponent} from 'src/app/tareas/tareas.component';


@Component({
  selector: 'app-tareasreg',
  templateUrl: './tareasreg.component.html',
  styleUrls: ['./tareasreg.component.css']
})
export class TareasRegComponent{
    @Input() tareas :any={};//recibe datos del otro componente
    constructor() {
    }  
  }
  

