import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

///toastr
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { ListTasksComponent } from './components/list-tasks/list-tasks.component';
import { CreateProvinceComponent } from './components/create-province/create-province.component';
import { CreateCityComponent } from './components/create-city/create-city.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearProductoComponent,
    ListarProductosComponent,
    CreateTaskComponent,
    ListTasksComponent,
    CreateProvinceComponent,
    CreateCityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
