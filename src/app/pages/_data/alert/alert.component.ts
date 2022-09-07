import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertService } from './alert.service';

@Component({
  selector: 'ngx-Alert',
  styleUrls: ['./alert.component.scss'],
  templateUrl: './alert.component.html',
})
export class AlertComponent implements OnInit {

  public dataRegistroPassagem: any[];
  public dataAlertasPrimeiraPassagem: any[];
  public enviados: any[];
  
  public filtro: any;
  public loading: boolean = false;
  public submitted: boolean = false;

  public form: FormGroup;

  constructor(
    public service: AlertService,
    public fb: FormBuilder,
    ){
      this.loadData();
  }

  ngOnInit(): void {
    this.loadData();
    this.createForm();
  }

 
  public createForm() {

    this.form = this.fb.group({

      inicio: new FormControl(
        null, [
        Validators.required,
      ]),

      final: new FormControl(
        null, [
        Validators.required,
      ]),

    });
  }

  onSubmit(): void {
    this.submitted = true;
    
    if (this.form.invalid) {
      return;
    }
    
    this.loading = true;
    this.loadData();
  }

  public loadData(){
    this.service.get().subscribe(
      data => {
        this.dataRegistroPassagem = data;
      }
    );
   
    this.service.getAlertasPrimeiraPassagem().subscribe(
      data => {
        this.dataAlertasPrimeiraPassagem = data;
      }
    );
    
    this.service.getEnviados().subscribe(
      data => {
        this.enviados = data;
      }
    );
  }

  public getStatus(field: any): string {

    if (!this.submitted ) {
      return 'basic';
     }

     if (field.valid) {
       return 'success';
     }

     return 'danger';
  }

  public get inicio() {
    return this.form.get('inicio');
  }

  public get final() {
    return this.form.get('final');
  }

}
