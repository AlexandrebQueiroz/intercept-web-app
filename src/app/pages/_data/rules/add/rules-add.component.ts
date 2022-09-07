import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RulesService } from '../rules.service';

@Component({
  selector: 'rules-add',
  templateUrl: './rules-add.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RulesAddComponent {

  public data: any[];
  public sqlOperations = [];
  public operador: any;

  constructor(private service: RulesService) {
    this.service.get().subscribe(
      data => {
        this.data = data;
      }) 

      this.prepareOperations();
  }

  prepareOperations(){
    this.sqlOperations.push({id:1, value: '<', title: 'Menor que (<)', type: 'int'});
    this.sqlOperations.push({id:2, value: '>', title: 'Maior que (>)', type: 'int'});

    this.sqlOperations.push({id:3, value: '=>', title: 'Maior igual que (=>)', type: 'int'});
    this.sqlOperations.push({id:4, value: '<=', title: 'Menor igual que (=<)', type: 'int'});
    this.sqlOperations.push({id:5, value: '=', title: 'Igual (=)', type: 'int'});

    this.sqlOperations.push({id:6, value: '!=', title: 'Diferente (!=)', type: 'string'});
    this.sqlOperations.push({id:7, value: '<', title: 'Começa com (%string)', type: 'string'});
    this.sqlOperations.push({id:8, value: '<', title: 'Termina com (string%)', type: 'string'});
    this.sqlOperations.push({id:9, value: '<', title: 'Contém (%)', type: 'string'});

  }

  compareById(v1, v2): boolean {
    return v1.id === v2.id;
  }
}
