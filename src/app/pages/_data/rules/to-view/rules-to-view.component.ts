import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RulesService } from '../rules.service';
import moment from 'moment';

@Component({
  selector: 'rules-to-view',
  templateUrl: './rules-to-view.component.html',
})
export class RulesToViewComponent {
  
  public form: FormGroup;
  public data: any;
  public action: string;
  public accent = 'basic';

  constructor(
    public service: RulesService,
    public fb: FormBuilder,
    private activeRoute: ActivatedRoute,
    private router: Router,
  ) {

    this.data = JSON.parse(this.activeRoute.snapshot.paramMap.get('data'));
    this.action = this.activeRoute.snapshot.paramMap.get('action');
    
    if( this.action === 'delete'){
      this.accent = 'danger'
    }

    this.createForm(this.data);
  }

  
  public createForm(data: any) {

    const dataInicio = moment(data?.dataInicio, "DD/MM/YYYY").toDate();
    const dataFinal = moment(data?.dataFinal, "DD/MM/YYYY").toDate();

    this.form = this.fb.group({

      id: new FormControl(
        {value: data?.id}, [
      ]),

      nome: new FormControl(
        {value: data?.nome, disabled: true}, [
      ]),

      descricao: new FormControl(
        {value: data?.descricao, disabled: true}, [
      ]),
      
      tipo: new FormControl(
        {value: data?.tipo, disabled: true}, [
      ]),
      
      importancia: new FormControl(
        {value: data?.importancia, disabled: true}, [
      ]),
    
      menorEsforco: new FormControl(
        {value: data?.menorEsforco, disabled: true}, [
      ]),

      dataInicio: new FormControl(
        {value: dataInicio, disabled: true}, [
      ]),

      dataFinal: new FormControl(
        {value: dataFinal, disabled: true}, [
      ]),
      
      produto: new FormControl(
        {value: data?.produto, disabled: true}, [
      ]),
      
      operador: new FormControl(
        {value: data?.operador, disabled: true}, [
      ]),

      valor: new FormControl(
        {value: data?.valor, disabled: true}, [
      ]),

    });
  }
  
  public delete(): void {

    this.service.delete(this.form.value.id).subscribe(
      ()=>{
        this.router.navigate(['../'],  {relativeTo: this.activeRoute});
      }
    );
  }

  public voltar(): void {
    this.router.navigate(['../'],  {relativeTo: this.activeRoute});
  }

  public get nome() {
    return this.form.get('nome');
  }

  public get descricao() {
    return this.form.get('descricao');
  }

  public get tipo() {
    return this.form.get('tipo');
  }

  public get importancia() {
    return this.form.get('importancia');
  }

  public get menorEsforco() {
    return this.form.get('menorEsforco');
  }

  public get dataInicio() {
    return this.form.get('dataInicio');
  }

  public get dataFinal() {
    return this.form.get('dataFinal');
  }

  public get produto() {
    return this.form.get('produto');
  }

  public get operador() {
    return this.form.get('operador');
  } 

  public get valor() {
    return this.form.get('valor');
  }

}
