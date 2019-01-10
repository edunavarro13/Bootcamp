import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

import { Tarea } from '../tarea.interface';

@Component({
  selector: 'app-card-tarea',
  templateUrl: './card-tarea.component.html',
  styleUrls: ['./card-tarea.component.css']
})
export class CardTareaComponent implements OnInit {
  @Input() nombreTarea;
  @Output() borrarNombre = new EventEmitter < Tarea > ();
  @Output() modificarDescripcion = new EventEmitter <Tarea> ();
  @Output() modificarCompletada = new EventEmitter <Tarea> ();

  colorBoton: string = 'primary';
  cabeceraActiva: string = 'cabecera-activa';
  tarjetaActiva: string = 'tarjeta-activa';

  constructor() {}

  borrarTarea() {
    this.borrarNombre.emit(this.nombreTarea);
  }

  cambiaColor() {
    if (this.colorBoton === 'primary') {
      this.colorBoton = 'secondary';
    } else {
      this.colorBoton = 'primary';
    }
  }

  cambiarDescripcion(ev) {
    if (ev.keyCode === 13) {
      this.modificarDescripcion.emit(this.nombreTarea);
      this.nombreTarea.descripcion = ev.target.value;
      this.colorBoton = 'primary';
      
    }
  }

  desactivar() {
    if(this.cabeceraActiva === '') {
      this.cabeceraActiva = 'cabecera-activa';
      this.tarjetaActiva = 'tarjeta-activa';
      this.nombreTarea.completada = false;
    } else {
      this.cabeceraActiva = '';
      this.tarjetaActiva = '';
      this.nombreTarea.completada = true;
    }
    this.modificarCompletada.emit(this.nombreTarea);
  }

  ngOnInit() {
    if(this.nombreTarea.completada) {
      this.cabeceraActiva = '';
      this.tarjetaActiva = '';
    }
  }

}
