import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name="LISTA DE TAREFAS";
  public array = [];
  public texto: string;
  constructor() { }

  ngOnInit() {
  }

 CreateTask(){
    this.array.push(this.texto);
    this.texto = '';
  }

}
