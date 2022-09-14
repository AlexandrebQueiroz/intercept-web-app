import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import moment from 'moment';
import { RulesService } from '../rules.service';

@Component({
  selector: 'rules-edit',
  templateUrl: './rules-edit.component.html',
})
export class RulesEditComponent {
  
  public sqlOperations = [];
  public form: FormGroup;
  public data: any;
  public submitted = false;
  public action = '';

  constructor(
    private toastrService: NbToastrService,
    public service: RulesService,
    public fb: FormBuilder,
    private activeRoute: ActivatedRoute,
    private router: Router,
  ) {
    this.data = JSON.parse(this.activeRoute.snapshot.paramMap.get('data'));
    this.action = this.activeRoute.snapshot.paramMap.get('action');
    
    this.createForm(this.data);
    this.prepareOperations();

  }

  
  public createForm(data: any) {

    const dataInicio = moment(data?.dataInicio, "DD/MM/YYYY").toDate();
    const dataFinal = moment(data?.dataFinal, "DD/MM/YYYY").toDate();

    this.form = this.fb.group({

      nome: new FormControl(
        data?.nome, [
          Validators.required,
      ]),

      descricao: new FormControl(
        data?.descricao, [
          Validators.required,
      ]),
      
      tipo: new FormControl(
        data?.tipo, [
          Validators.required,
      ]),
      
      importancia: new FormControl(
        data?.importancia, [
          Validators.required,
      ]),
    
      menorEsforco: new FormControl(
        data?.menorEsforco , [
          Validators.required,
      ]),

      dataInicio: new FormControl(
        dataInicio, [
          Validators.required,
      ]),

      dataFinal: new FormControl(
        dataFinal, [
          Validators.required,
      ]),
      
      operador: new FormControl(
        data?.operador, [
          Validators.required,
      ]),

      valor: new FormControl(
        data?.valor, [
          Validators.required,
      ]),

      ncm: new FormControl(
        data?.ncm, [
      ]),

      percurso: new FormControl(
        data?.percurso, [
        Validators.required,
      ]),

      produtos: new FormArray([])
    });

    data.produtos?.forEach(p => {
      this.produtos.push(new FormControl(p.descricao, Validators.required));
    });
  }

  public adicionarProduto(){
    this.produtos.push(new FormControl(null, Validators.required));
  }

  public removerProduto(i: number){
    this.produtos.removeAt(i);
  }

  compareById(v1: any, v2: any): boolean {
    return v1.id === v2.id;
  }

  public onSubmit(): void {
    this.submitted = true;

    const inicio = moment(this.dataInicio.value);
    const final = moment(this.dataFinal.value);
    if(inicio.isAfter(final)){
      this.toastrService.default(`Aviso`, `O período incial não pode ser posterior ao período final` );
      return;
    }

    if (this.form.invalid) {
      return;
    }

    this.service.save(this.form.value).subscribe(
      ()=>{
        this.toastrService.success(`Sucesso`, `O registro foi Editado`);
        this.router.navigate(['../'],  {relativeTo: this.activeRoute});
      }
    );

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
  
  public voltar(): void {
    this.router.navigate(['../'],  {relativeTo: this.activeRoute});
  }

  public getStatus(field: any): string {

    if (!this.submitted ) {
      return 'basic';
     }

     if (field.valid) {
       return 'success';
     }

     return 'danger';
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

  public get produtos() {
    return this.form.get('produtos') as FormArray;
  }

  public get operador() {
    return this.form.get('operador');
  } 

  public get valor() {
    return this.form.get('valor');
  }

  public get percurso() {
    return this.form.get('percurso');
  } 

  public get ncm() {
    return this.form.get('ncm');
  }

}
