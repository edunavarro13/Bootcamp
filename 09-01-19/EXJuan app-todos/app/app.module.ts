import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ListadoTareasComponent } from './listado-tareas/listado-tareas.component';
import { CrearTareaComponent } from './crear-tarea/crear-tarea.component';

@NgModule({
  declarations: [AppComponent, ListadoTareasComponent, CrearTareaComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
