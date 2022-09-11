import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import moment from 'moment';
import { RulesService } from './rules.service';

@Component({
  selector: 'rules',
  styleUrls: ['./rules.component.scss'],
  templateUrl: './rules.component.html',
})
export class RulesComponent {

  public data: any[];
  public format = 'DD/MM/yyyy';
  public inicio = moment().add(-3, 'M').format(this.format); 
  public final = moment().format(this.format);

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private service: RulesService) {
    
    this.buscar({
      data : {
        inicio: this.inicio,
        final: this.final
      }});
  }

  buscar(filter?: any){
    this.service.get(filter).subscribe(
      data => {
        this.data = data;
        if(filter){
          this.aplicarFiltro(filter);
        }
      });
  }

  aplicarFiltro(filter: any){
    var filtered = this.data;
    
    if(filter.status){
      filtered = this.data.filter((data) => data.status === filter.status)
    }
    
    if(filter.id){
      filtered = this.data.filter((data) => data.id === filter.id)
    }
    
    if(filter.nome){
      filtered = this.data.filter((data) => data.nome?.toLowerCase().includes(filter.nome?.toLowerCase()))
    }
    
    if(filter.tipo){
      filtered = this.data.filter((data) => data.tipo?.toLowerCase().includes(filter.tipo?.toLowerCase()))
    }
    
    if(filter.status){
      filtered = this.data.filter((data) => data.status === filter.status)
    }

    this.data = filtered;
  }

  add(){
    this.router.navigate(['./add'],  {relativeTo: this.activeRoute});
  }

  edit(data: any){
    this.router.navigate(['./edit' , {data: JSON.stringify(data)} ],  {relativeTo: this.activeRoute});
  }
  
  duplicate(data: any){
    this.router.navigate(['./duplicate', {data: JSON.stringify(data)} ],  {relativeTo: this.activeRoute});
  }

  delete(data: any){
    this.router.navigate(['./delete' , {data: JSON.stringify(data)}],  {relativeTo: this.activeRoute});
  }
}
