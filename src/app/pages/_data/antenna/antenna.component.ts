import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AntennaService } from './antenna.service';

@Component({
  selector: 'ngx-antenna',
  templateUrl: './antenna.component.html',
})
export class AntennaComponent {

  public form: FormGroup;
  public data = [];
  public submitted = false;

  constructor( 
    public service: AntennaService,
    public fb: FormBuilder,
    ){
    this.createForm();
  }

  public createForm() {

    this.form = this.fb.group({

      latitude: new FormControl(
        null, [
        Validators.required,
      ]),

      longuitude: new FormControl(
        null, [
        Validators.required,
      ]),
      
      sentido: new FormControl(
        null, [
        Validators.required,
      ]),
      
      codigoLocal: new FormControl(
        null, [
        Validators.required,
      ]),

    });
  }

  public enviar(): void {
    this.service.save(this.data).subscribe(
      ()=>{
        this.form.reset();
        this.data = [];
      }
    );
  }
  
  public onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

    this.data.push(this.form.value);
    this.form.reset();
    this.submitted = false;
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

  public get latitude() {
    return this.form.get('latitude');
  }

  public get longuitude() {
    return this.form.get('longuitude');
  }

  public get sentido() {
    return this.form.get('sentido');
  }

  public get codigoLocal() {
    return this.form.get('codigoLocal');
  }

}
