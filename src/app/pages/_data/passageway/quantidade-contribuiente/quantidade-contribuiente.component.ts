import { Component } from '@angular/core';
import { PassagemwayService } from '../passageway.service';

@Component({
  selector: 'quantidade-contribuiente',
  styleUrls: ['./quantidade-contribuiente.component.scss'],
  templateUrl: './quantidade-contribuiente.component.html',
})
export class QuantidadeContribuientesComponent  {

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
