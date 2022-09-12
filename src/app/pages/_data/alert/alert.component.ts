import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AlertService } from './alert.service';

@Component({
  selector: 'alert',
  styleUrls: ['./alert.component.scss'],
  templateUrl: './alert.component.html',
})
export class AlertComponent implements OnInit {

  public data: any;
  public loaded = false;

  constructor(
    public service: AlertService,
    ){
  }

  ngOnInit(): void {
    this.filtrar({});
  }
  
  public filtrar(filtro){
    this.loaded = false;
    this.service.get(filtro).subscribe(
      data => {
        this.data = data;
        this.loaded = true;
      }
    );
  }

}
