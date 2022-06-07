import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCityComponent } from './components/create-city/create-city.component';
import { CreateProvinceComponent } from './components/create-province/create-province.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { ListTasksComponent } from './components/list-tasks/list-tasks.component';

const routes: Routes = [
  { path: '',component:ListTasksComponent},
  { path: 'create-task', component: CreateTaskComponent},
  { path: 'edit-task/:id', component: CreateTaskComponent},
  { path: 'create-province', component: CreateProvinceComponent},
  { path: 'create-city', component: CreateCityComponent},
  { path: '**', redirectTo:'', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
