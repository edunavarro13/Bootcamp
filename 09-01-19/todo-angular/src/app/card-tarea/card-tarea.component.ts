import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-tarea',
  templateUrl: './card-tarea.component.html',
  styleUrls: ['./card-tarea.component.css']
})
export class CardTareaComponent implements OnInit {
  @Input() nombreTarea;
  @Output() borrarNombre = new EventEmitter<object>();
  constructor() { }

  borrarTarea() {
    this.borrarNombre.emit(this.nombreTarea);
  }

  ngOnInit() {
  }

}
