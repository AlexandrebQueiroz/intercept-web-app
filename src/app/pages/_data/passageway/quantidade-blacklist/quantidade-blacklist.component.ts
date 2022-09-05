import { Component } from '@angular/core';
import { PassagemwayService } from '../passageway.service';

@Component({
  selector: 'quantidade-blacklist',
  styleUrls: ['./quantidade-blacklist.component.scss'],
  templateUrl: './quantidade-blacklist.component.html',
})
export class QuantidadeBlacklistComponent  {

  public data: any;
  public loaded = false;

  constructor(
    public service: PassagemwayService,
    ){
  }

  ngOnInit(): void {
    this.service.getQuantidadeBlacklist().subscribe(
      data => {
        this.data = data;
        this.loaded = true;
      }
    );
  }

}
