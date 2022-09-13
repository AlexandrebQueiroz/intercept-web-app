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

  public loaded: boolean = false;
  public data: any;

  constructor(
    public service: PassagemwayService,
    public fb: FormBuilder,
    ){
  }

  ngOnInit(): void {
    this.filtrar({});
  }
  
  public filtrar(filtro){
    this.loaded = false;
    this.service.getQuantidadeBlacklist(filtro).subscribe(
      data => {
        this.data = data;
        this.loaded = true;
      }
    );
  }

}
