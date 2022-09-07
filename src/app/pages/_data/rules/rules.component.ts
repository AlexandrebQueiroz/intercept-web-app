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

  edit(data: any){

  }
  
  delete(data: any){

  }

  duplicate(data: any){

  }

}
