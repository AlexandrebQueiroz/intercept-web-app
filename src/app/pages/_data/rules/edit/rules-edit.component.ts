import { Component } from '@angular/core';
import { RulesService } from '../rules.service';

@Component({
  selector: 'rules-edit',
  templateUrl: './rules-edit.component.html',
})
export class RulesEditComponent {

  public data: any[];

  constructor(private service: RulesService) {
    this.service.get().subscribe(
      data => {
        this.data = data;
      }) 
  }

}
