import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-notasreg',
  templateUrl: './notasreg.component.html',
  styleUrls: ['./notasreg.component.css']
})
export class NotasRegComponent implements OnInit {
  ngOnInit(): void {
  } 
  @Input() notas :any={};
  constructor() { }
}
