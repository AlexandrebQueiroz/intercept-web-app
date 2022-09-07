import { Component } from '@angular/core';
import { RulesService } from '../rules.service';

@Component({
  selector: 'rules-delete',
  templateUrl: './rules-delete.component.html',
})
export class RulesDeleteComponent {

  public data: any[];

  constructor(private service: RulesService) {
    this.service.get().subscribe(
      data => {
        this.data = data;
      }) 
  }

}
