import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { RulesService } from './rules.service';

@Component({
  selector: 'rules',
  styleUrls: ['./rules.component.scss'],
  templateUrl: './rules.component.html',
})
export class RulesComponent {

  public data: any[];
  public filter: any;

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private service: RulesService) {
    
    this.buscar();
    this.filter = {};
  }

  buscar(filter?: any){
    this.service.get().subscribe(
      data => {
        this.data = data;
        if(filter){
          this.aplicarFiltro(filter);
        }
      });
  }

  aplicarFiltro(filter: any){
    var filtered = this.data;
    
    if(filter.status !== null){
      filtered = this.data.filter((data) => data.status === filter.status)
    }
    
    if(filter.id !== null){
      filtered = this.data.filter((data) => data.id === filter.id)
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
