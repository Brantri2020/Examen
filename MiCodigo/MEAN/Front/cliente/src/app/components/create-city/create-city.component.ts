import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { City } from 'src/app/models/city';
import { Province } from 'src/app/models/province';
import { CityService } from 'src/app/services/city.service';
import { ProvinceService } from 'src/app/services/province.service';

@Component({
  selector: 'app-create-city',
  templateUrl: './create-city.component.html',
  styleUrls: ['./create-city.component.css']
})
export class CreateCityComponent implements OnInit {

  cityForm: FormGroup;
  tittle = "Crear Ciudad";
  listProvinces: Province[]=[];
  constructor(private fb: FormBuilder,
    private router:Router,
    private _cityService:CityService,
    private toastr:ToastrService,
    private _porvinceService: ProvinceService) {
    this.cityForm = this.fb.group({
      nameProvince: ['', Validators.required],
      nameCity: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.getProvinces();
  }

  getProvinces(){
    this._porvinceService.getProvinces().subscribe(data=>{
      this.listProvinces=data;
    },error=>{
      console.log(error);
  })
  }

  addCity() {
    const CITY: City = {
      nameProvince: this.cityForm.get("nameProvince")?.value,
      nameCity: this.cityForm.get("nameCity")?.value
    }
    console.log(CITY);

    this._cityService.addCity(CITY).subscribe(data=>{
      this.toastr.info("Ciudad guardada con éxito","Ciudad guardada");
      this.router.navigate(['/']);
    },error=>{
      console.log(error);
    })

    
  }
}
