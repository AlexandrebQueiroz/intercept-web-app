import { Component } from '@angular/core';
import { PassagemwayService } from '../passageway.service';

@Component({
  selector: 'quantidade-passagem',
  styleUrls: ['./quantidade-passagem.component.scss'],
  templateUrl: './quantidade-passagem.component.html',
})
export class QuantidadePassagemComponent  {

  public data: any;
  public loaded = false;

  constructor(
    public service: PassagemwayService,
    ){
  }

  ngOnInit(): void {
    this.service.getConstribuinteCadastrados().subscribe(
      data => {
        this.data = data;
        this.loaded = true;
      }
    );
  }

}
