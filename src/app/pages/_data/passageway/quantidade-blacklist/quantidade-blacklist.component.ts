import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PassagemwayService } from '../passageway.service';

@Component({
  selector: 'quantidade-blacklist',
  styleUrls: ['./quantidade-blacklist.component.scss'],
  templateUrl: './quantidade-blacklist.component.html',
})
export class QuantidadeBlacklistComponent implements OnInit {

  public data: any;
  public filtro: any;
  public loading: boolean = false;
  public submitted: boolean = false;

  public form: FormGroup;

  constructor(
    public service: PassagemwayService,
    public fb: FormBuilder,
    ){
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
    this.service.getQuantidadeBlacklist(this.filtro).subscribe(
      data => {
        this.data = data;
        this.loading = false;
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
