import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Practica todo-angular';
  tareas: Array<object> = [];
  tareasAux: Array<object> = [];
  nuevaTarea = '';
  filtrarTarea = '';
  verError: boolean = false;
  handleKeyup(ev) {
    // Le ha dado enter
    if(ev.keyCode === 13) {
      this.agregarTarea();
    }
  }
  agregarTarea() {
    if(this.nuevaTarea !== '') {
      let tamano = this.tareas.length;
      if(tamano === 0) {
        this.tareas.push({
          id: 1,
          nombre: this.nuevaTarea
        });
      } else {
        this.tareas.push({
          id: this.tareas[tamano-1]["id"] + 1,
          nombre: this.nuevaTarea
        });
      }
      
      this.nuevaTarea = '';
      this.verError = false;
      this.tareasAux = this.tareas;
    }
    else {
      this.verError = true;
    }
  }
  borrarElemento(ev: object) {
    let pos = this.tareas.indexOf(ev);
    this.tareas.splice(pos, 1);
    this.filtrar(undefined);
  }
  filtrar(ev) {
    // Le ha dado enter
    if(ev !== undefined && ev.keyCode === 13) {
      this.filtrarTarea = '';
      this.tareasAux = this.tareas;
      console.log(this.tareas);
      console.log(this.tareasAux);
    } else {
      this.tareasAux = this.tareas.filter( (elem) => {
        return elem["nombre"].match(this.filtrarTarea) !== null;
      });
    }
  }
}
