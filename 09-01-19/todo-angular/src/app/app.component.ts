import {
  Component
} from '@angular/core';

import {
  Tarea
} from './tarea.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Practica todo-angular';
  tareas: Array < Tarea > = [];
  tareasAux: Array < Tarea > = [];
  nuevaTarea = '';
  filtrarTarea = '';
  verError: boolean = false;

  handleKeyup(ev) {
    // Le ha dado enter
    if (ev.keyCode === 13) {
      this.agregarTarea();
    }
  }
  agregarTarea() {
    if (this.nuevaTarea !== '') {
      let tamano = this.tareas.length;
      if (tamano === 0) {
        this.tareas.push({
          id: 1,
          nombre: this.nuevaTarea,
          descripcion: '',
          completada: false
        });
      } else {
        this.tareas.push({
          id: this.tareas[tamano - 1]["id"] + 1,
          nombre: this.nuevaTarea,
          descripcion: '',
          completada: false
        });
      }

      this.nuevaTarea = '';
      this.verError = false;
      this.tareasAux = this.tareas;
    } else {
      this.verError = true;
    }
  }
  borrarElemento(ev: Tarea) {
    let pos = this.tareas.indexOf(ev);
    this.tareas.splice(pos, 1);
    this.filtrar(undefined);
  }

  modificarElemDescripcion(ev: Tarea) {
    this.tareas[this.obtenerPosId(ev["id"])] = ev;
    this.filtrar(undefined);
  }

  modificarElemCompletada(ev: Tarea) {
    this.modificarElemDescripcion(ev);
  }

  obtenerPosId(id: number) {
    let pos = 0;
    for (let tar of this.tareas) {
      if(tar.id === id) {
        return pos;
      }
      pos++;
    }
    return undefined;
  }

  filtrar(ev) {
    // Le ha dado enter
    if (ev !== undefined && ev.keyCode === 13) {
      this.filtrarTarea = '';
      this.tareasAux = this.tareas;
      console.log(this.tareas);
      console.log(this.tareasAux);
    } else {
      this.tareasAux = this.tareas.filter((elem) => {
        return elem["nombre"].match(this.filtrarTarea) !== null;
      });
    }
  }
}
