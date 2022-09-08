import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  view(data: any){
    this.router.navigate(['./to-view', {data: JSON.stringify(data), action: 'to-view'}], {relativeTo: this.activeRoute});
  }
  
  delete(data: any){
    this.router.navigate(['./to-view' , {data: JSON.stringify(data), action: 'delete'}],  {relativeTo: this.activeRoute});
  }

  duplicate(data: any){
    this.router.navigate(['./edit', {data: JSON.stringify(data)} ],  {relativeTo: this.activeRoute});
  }

}
