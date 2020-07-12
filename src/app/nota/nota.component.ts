import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-nota',
  templateUrl: './nota.component.html',
  styleUrls: ['./nota.component.css']
})
export class NotaComponent implements OnInit {
  ngOnInit(){
    this.mostrarNotas();
  }
  notasadd: string;
  todoObj: any;
  newNotas: any;
  Dadd: string;
  fecha: Date;

  notas: Notas[] = [];
  resultado: string;
  notasreg=new FormGroup({
    aceptado: new FormControl('',[Validators.required]),
    aceptadoD:new FormControl('',Validators.required)
  });

  constructor() {
    this.notasadd = '';
    this.Dadd='';
      this.newNotas = [];
   }
   mostrarNotas(){
    if(localStorage.getItem('notas')===null){
      this.newNotas=[];
    }else{
      this.newNotas=JSON.parse(localStorage.getItem('notas'))
  
    }
  }
  agregarNotas(event) {
    
    if (this.notasreg.valid){
      this.fecha= new Date();
    this.todoObj = {
      notasadd: this.notasadd,
      Dadd:this.Dadd,
      fecha:this.fecha
    }
    this.newNotas.push(this.todoObj);
    
    this.notasadd = '';
    this.Dadd='';
    event.preventDefault();

    localStorage.setItem('notas', JSON.stringify(this.newNotas));
  }
  }
}

export interface Notas{
 
  notasadd: string;
  Dadd:string;
  fecha:DatePipe;
}