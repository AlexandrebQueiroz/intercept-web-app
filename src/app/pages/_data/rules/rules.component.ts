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

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private service: RulesService) {
    this.service.get().subscribe(
      data => {
        this.data = data;
      }) 
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
