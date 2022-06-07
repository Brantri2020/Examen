import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Province } from 'src/app/models/province';
import { Task } from 'src/app/models/task';
import { CityService } from 'src/app/services/city.service';
import { ProvinceService } from 'src/app/services/province.service';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  taskForm: FormGroup;
  tittle = "Crear Tarea";
  id: string | null;
  listProvinces: Province[]=[];
  listCities=[];

  constructor(private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _taskService: TaskService,
    private _porvinceService: ProvinceService,
    private _cityService: CityService,
    private aRouter: ActivatedRoute) {
    this.taskForm = this.fb.group({
      name: ['', Validators.required],
      endDate: ['', Validators.required],
      province: ['', Validators.required],
      city: ['', Validators.required],
      responsible: ['', Validators.required],
      status: ['', Validators.required],
    })
    this.id = aRouter.snapshot.paramMap.get('id');
  }


  ngOnInit(): void {
    this.getProvinces();
    const selectElement = document.querySelector('.province');

    selectElement?.addEventListener('change', (event) => {
      this.listCities=[];
        this.getCitiesProvince(this.taskForm.get("province")?.value);
    });

  }

  addTask(){

    const TASK:Task = {
      name:this.taskForm.get("name")?.value,
      endDate:this.taskForm.get("endDate")?.value,
      province:this.taskForm.get("province")?.value,
      city:this.taskForm.get("city")?.value,
      responsible:this.taskForm.get("responsible")?.value,
      status:this.taskForm.get("status")?.value,
    }
    console.log(TASK);
  
  }

  getProvinces(){
    this._porvinceService.getProvinces().subscribe(data=>{
      this.listProvinces=data;
    },error=>{
      console.log(error);
  })
  }
  getCitiesProvince(name:string){
    this._cityService.getCity(name).subscribe(data=>{
      this.listCities=data;
    },error=>{
      console.log(error);
  })
  }

/*
  agregarProducto() {

    const PRODUCTO: Producto = {
      nombre: this.productoForm.get("producto")?.value,
      categoria: this.productoForm.get("categoria")?.value,
      ubicacion: this.productoForm.get("ubicacion")?.value,
      precio: this.productoForm.get("precio")?.value,
    }

    if(this.id!==null){
      //editamos
      this._productoService.editarProducto(this.id,PRODUCTO).subscribe(data => {
        this.toastr.info('El producto fue actualizado con éxito', 'Producto actualizado!');
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.productoForm.reset();
      })
    }else{
      //agregamos producto
      this._productoService.guardarProducto(PRODUCTO).subscribe(data => {

        this.toastr.success('El producto fue registrado con éxito', 'Producto registrado!');
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.productoForm.reset();
      })
    }

    
  }

  isEdit() {
    if (this.id !== null) {
      this.titulo = 'Editar producto';
      this._productoService.obtenerProducto(this.id).subscribe(data => {
        this.productoForm.setValue({
          producto: data.nombre,
          categoria: data.categoria,
          ubicacion: data.ubicacion,
          precio: data.precio
        })
      })
    }
  }*/

}
