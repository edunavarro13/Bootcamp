import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-card-tarea',
  templateUrl: './card-tarea.component.html',
  styleUrls: ['./card-tarea.component.css']
})
export class CardTareaComponent implements OnInit {
  @Input() nombreTarea;
  @Output() borrarNombre = new EventEmitter < object > ();

  colorBoton: string = 'primary';
  descripcion: string = '';
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
      this.descripcion = ev.target.value;
      this.colorBoton = 'primary'
    }
  }

  desactivar() {
    if(this.cabeceraActiva === '') {
      this.cabeceraActiva = 'cabecera-activa';
      this.tarjetaActiva = 'tarjeta-activa';
    } else {
      this.cabeceraActiva = '';
      this.tarjetaActiva = '';
    }
  }

  ngOnInit() {}

}
