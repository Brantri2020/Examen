import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Province } from 'src/app/models/province';
import { ProvinceService } from 'src/app/services/province.service';

@Component({
  selector: 'app-create-province',
  templateUrl: './create-province.component.html',
  styleUrls: ['./create-province.component.css']
})
export class CreateProvinceComponent implements OnInit {
  provinceForm: FormGroup;
  tittle = "Crear Provincia";
  constructor(private fb: FormBuilder,
    private router:Router,
    private _provinceService:ProvinceService,
    private toastr:ToastrService) {
    this.provinceForm = this.fb.group({
      nameProvince: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  addProvince() {
    const PROVINCE: Province = {
      name: this.provinceForm.get("nameProvince")?.value
    }
    console.log(PROVINCE);

    this._provinceService.addProvince(PROVINCE).subscribe(data=>{
      this.toastr.info("Provincia guardada con éxito","Provincia guardada");
      this.router.navigate(['/']);
    },error=>{
      console.log(error);
    })

    
  }
}
