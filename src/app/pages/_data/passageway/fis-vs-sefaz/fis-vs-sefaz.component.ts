import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import moment from 'moment';
import { PassagemwayService } from '../passageway.service';

@Component({
  selector: 'fis-vs-sefaz',
  styleUrls: ['./fis-vs-sefaz.component.scss'],
  templateUrl: './fis-vs-sefaz.component.html',
})
export class FisVsSefazComponent  {

  public data: any;
  public loaded = false;
  public form: FormGroup;

  private today = new Date();
  private lastMonth =  moment(new Date()).add(-1, 'months').toDate() 

  constructor(
    public service: PassagemwayService,
    public fb: FormBuilder,
    ){
    this.createForm();
  }

  ngOnInit(): void {
    this.service.getFiiVsFazChart().subscribe(
      data => {
        this.data = data;
        this.loaded = true;
      }
    );
  }

  public createForm() {
    this.form = this.fb.group({
      inicio: new FormControl(this.lastMonth),
      final: new FormControl(this.today),
    });
  }
  
  onSubmit(): void {
    this.loadData();
  }
  
  public loadData(){
    this.loaded = false;
    this.service.getFiiVsFazChart({inicio: this.inicio.value, final: this.final.value}).subscribe(
      data => {
        this.data = data;
        this.loaded = true;
      }
    );
  }

  public getStatus(field: any): string {

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
