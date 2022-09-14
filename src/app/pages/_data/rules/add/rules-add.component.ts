import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import moment from 'moment';
import { RulesService } from '../rules.service';

@Component({
  selector: 'rules-add',
  templateUrl: './rules-add.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RulesAddComponent {

  public data: any[];
  public sqlOperations = [];

  public form: FormGroup;
  public submitted = false;

  constructor(
    private toastrService: NbToastrService,
    public service: RulesService,
    public fb: FormBuilder,
    private activeRoute: ActivatedRoute,
    private router: Router,
    ) {

    this.service.get().subscribe(
      data => {
        this.data = data;
      }) 

      this.prepareOperations();
      this.createForm();
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

  compareById(v1: any, v2: any): boolean {
    return v1.id === v2.id;
  }

  public createForm() {

    this.form = this.fb.group({

      nome: new FormControl(
        null, [
        Validators.required,
      ]),

      descricao: new FormControl(
        null, [
        Validators.required,
      ]),
      
      tipo: new FormControl(
        null, [
        Validators.required,
      ]),
      
      importancia: new FormControl(
        null, [
        Validators.required,
      ]),
    
      menorEsforco: new FormControl(
        null, [
        Validators.required,
      ]),

      dataInicio: new FormControl(
        new Date(), [
        Validators.required,
      ]),

      dataFinal: new FormControl(
        null, [
        Validators.required,
      ]),
      
      operador: new FormControl(
        null, [
        Validators.required,
      ]),

      valor: new FormControl(
        null, [
        Validators.required,
      ]),

      ncm: new FormControl(
        null, [
      ]),

      percurso: new FormControl(
        null, [
        Validators.required,
      ]),

      produtos: new FormArray([])
    });
  }

  public adicionarProduto(){
    this.produtos.push(new FormControl(null, Validators.required));
  }

  public removerProduto(i: number){
    this.produtos.removeAt(i);
  }

  public onSubmit(): void {
    this.submitted = true;

    const inicio = moment(this.dataInicio.value);
    const final = moment(this.dataFinal.value);

    if(inicio.isAfter(final.add('1','d'))){
      this.toastrService.default(`Aviso`, `O período incial não pode ser posterior ao período final` );
      return;
    }

    if (this.form.invalid) {
      return;
    }


    this.service.save(this.form.value).subscribe(
      (data)=>{
        this.toastrService.success(`Sucesso`, `O registro foi gravado Número :${data?.id} Nome:${data?.nome}`);
        this.router.navigate(['../'],  {relativeTo: this.activeRoute});
      }
    );

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

  public get operador() {
    return this.form.get('operador');
  } 

  public get valor() {
    return this.form.get('valor');
  }
  
  public get ncm() {
    return this.form.get('ncm');
  } 

  public get percurso() {
    return this.form.get('percurso');
  }

  public get produtos() {
    return this.form.get('produtos') as FormArray;
  }
  
}
