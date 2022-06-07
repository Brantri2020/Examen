import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css']
})
export class ListTasksComponent implements OnInit {

  listTasks: Task[]=[];

  constructor(private _taskService:TaskService,
    private toastr:ToastrService) { }

  ngOnInit(): void {
    //this.getTasks();
  }

  getTasks(){
    this._taskService.getTasks().subscribe(data=>{
      console.log(data);
      this.listTasks=data;
    }, error=>{
      console.log(error);
    })
  }

 /* obtenerProductos(){
    this._productoService.getProductos().subscribe(data=>{
      console.log(data);
      this.listProductos=data;
    }, error=>{
      console.log(error);
    })
  }

  eliminarProducto(id:any){
    this._productoService.eliminarProducto(id).subscribe(data=>{
      this.toastr.error("El producto fue eliminado con exito","Producto eliminado");
      this.obtenerProductos();
    }, error=>{
      console.log(error);
    })
  }*/
}

