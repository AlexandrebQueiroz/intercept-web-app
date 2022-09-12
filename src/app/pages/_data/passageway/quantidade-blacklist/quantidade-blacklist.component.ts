import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import moment from 'moment';
import { PassagemwayService } from '../passageway.service';

@Component({
  selector: 'quantidade-blacklist',
  styleUrls: ['./quantidade-blacklist.component.scss'],
  templateUrl: './quantidade-blacklist.component.html',
})
export class QuantidadeBlacklistComponent implements OnInit {

  private lastMonth =  moment(new Date()).add(-1, 'months').toDate() 
  
  public data: any;
  public filtro: any;
  public loaded: boolean = false;

  public form: FormGroup;

  constructor(
    public service: PassagemwayService,
    public fb: FormBuilder,
    ){
    this.createForm();
    this.loadData();
  }

  ngOnInit(): void {
  }

  public createForm() {
    this.form = this.fb.group({
      inicio: new FormControl(this.lastMonth),
      final: new FormControl(new Date()),
    });
  }

  onSubmit(): void {
    this.loadData();
  }
  
  public loadData(){
    this.loaded = false;
    this.service.getQuantidadeBlacklist({inicio: this.inicio.value, final: this.final.value}).subscribe(
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
