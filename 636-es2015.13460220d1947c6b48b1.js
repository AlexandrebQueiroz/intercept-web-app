"use strict";(self.webpackChunkngx_admin=self.webpackChunkngx_admin||[]).push([[636],{80636:function(e,t,n){n.r(t),n.d(t,{AntennaModule:function(){return h}});var l=n(38583),r=n(3679),a=n(53302),o=n(54655),i=n(37716),d=n(92340),u=n(91841);let s=(()=>{class e{constructor(e){this.http=e}save(e){return this.http.post(`${d.N.antena.salvar}`,e)}}return e.\u0275fac=function(t){return new(t||e)(i.\u0275\u0275inject(u.eN))},e.\u0275prov=i.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac}),e})();function m(e,t){if(1&e&&(i.\u0275\u0275elementStart(0,"tr"),i.\u0275\u0275elementStart(1,"td"),i.\u0275\u0275text(2),i.\u0275\u0275elementEnd(),i.\u0275\u0275elementStart(3,"td"),i.\u0275\u0275text(4),i.\u0275\u0275elementEnd(),i.\u0275\u0275elementStart(5,"td"),i.\u0275\u0275text(6),i.\u0275\u0275elementEnd(),i.\u0275\u0275elementStart(7,"td"),i.\u0275\u0275text(8),i.\u0275\u0275elementEnd(),i.\u0275\u0275elementEnd()),2&e){const e=t.$implicit;i.\u0275\u0275advance(2),i.\u0275\u0275textInterpolate(null==e?null:e.latitude),i.\u0275\u0275advance(2),i.\u0275\u0275textInterpolate(null==e?null:e.longuitude),i.\u0275\u0275advance(2),i.\u0275\u0275textInterpolate(null==e?null:e.sentido),i.\u0275\u0275advance(2),i.\u0275\u0275textInterpolate(null==e?null:e.codigoLocal)}}function c(e,t){if(1&e){const e=i.\u0275\u0275getCurrentView();i.\u0275\u0275elementStart(0,"nb-card"),i.\u0275\u0275elementStart(1,"nb-card-body",10),i.\u0275\u0275elementStart(2,"table",11),i.\u0275\u0275elementStart(3,"thead",12),i.\u0275\u0275elementStart(4,"tr"),i.\u0275\u0275elementStart(5,"th",2),i.\u0275\u0275text(6,"Latitude"),i.\u0275\u0275elementEnd(),i.\u0275\u0275elementStart(7,"th",2),i.\u0275\u0275text(8,"Longuitude"),i.\u0275\u0275elementEnd(),i.\u0275\u0275elementStart(9,"th",2),i.\u0275\u0275text(10,"Sentido"),i.\u0275\u0275elementEnd(),i.\u0275\u0275elementStart(11,"th",2),i.\u0275\u0275text(12,"Codigo Local"),i.\u0275\u0275elementEnd(),i.\u0275\u0275elementEnd(),i.\u0275\u0275elementEnd(),i.\u0275\u0275elementStart(13,"tbody"),i.\u0275\u0275template(14,m,9,4,"tr",13),i.\u0275\u0275elementEnd(),i.\u0275\u0275elementEnd(),i.\u0275\u0275elementEnd(),i.\u0275\u0275elementStart(15,"nb-card-body"),i.\u0275\u0275elementStart(16,"div",14),i.\u0275\u0275elementStart(17,"label",3),i.\u0275\u0275text(18,"Gravar:"),i.\u0275\u0275elementEnd(),i.\u0275\u0275elementStart(19,"button",15),i.\u0275\u0275listener("click",function(){return i.\u0275\u0275restoreView(e),i.\u0275\u0275nextContext().enviar()}),i.\u0275\u0275text(20,"Gravar"),i.\u0275\u0275elementEnd(),i.\u0275\u0275elementEnd(),i.\u0275\u0275elementEnd(),i.\u0275\u0275elementEnd()}if(2&e){const e=i.\u0275\u0275nextContext();i.\u0275\u0275advance(1),i.\u0275\u0275property("nbSpinner",e.loading),i.\u0275\u0275advance(13),i.\u0275\u0275property("ngForOf",e.data)}}const p=[{path:"",component:(()=>{class e{constructor(e,t,n){this.toastrService=e,this.service=t,this.fb=n,this.data=[],this.submitted=!1,this.loading=!1,this.createForm()}createForm(){this.form=this.fb.group({latitude:new r.NI(null,[r.kI.required]),longuitude:new r.NI(null,[r.kI.required]),sentido:new r.NI(null,[r.kI.required]),codigoLocal:new r.NI(null,[r.kI.required])})}enviar(){this.loading=!0,this.service.save(this.data).subscribe(()=>{this.form.reset(),this.data=[],this.loading=!1,this.toastrService.success("Sucesso","O registro foi gravado")})}onSubmit(){this.submitted=!0,!this.form.invalid&&(this.data.push(this.form.value),this.form.reset(),this.submitted=!1)}getStatus(e){return this.submitted?e.valid?"success":"danger":"basic"}get latitude(){return this.form.get("latitude")}get longuitude(){return this.form.get("longuitude")}get sentido(){return this.form.get("sentido")}get codigoLocal(){return this.form.get("codigoLocal")}}return e.\u0275fac=function(t){return new(t||e)(i.\u0275\u0275directiveInject(a.quB),i.\u0275\u0275directiveInject(s),i.\u0275\u0275directiveInject(r.qu))},e.\u0275cmp=i.\u0275\u0275defineComponent({type:e,selectors:[["ngx-antenna"]],decls:30,vars:11,consts:[["novalidate","",1,"needs-validation",3,"formGroup","nbSpinner","ngSubmit"],[1,"row"],[1,"col-4"],[1,"label"],["type","text","nbInput","","fullWidth","","placeholder","Latitude",3,"formControl","status"],["type","text","nbInput","","fullWidth","","placeholder","Longuitude",3,"formControl","status"],["type","text","nbInput","","fullWidth","","placeholder","Sentido",3,"formControl","status"],["type","text","nbInput","","fullWidth","","placeholder","Codigo Local",3,"formControl","status"],["nbButton","","outline","","type","submit","fullWidth","","status","basic"],[4,"ngIf"],[3,"nbSpinner"],[1,"table","table-hover","table-striped","table-bordered"],[1,"thead-light"],[4,"ngFor","ngForOf"],[1,"offset-8","col-4"],["nbButton","","outline","","type","submit","fullWidth","","status","success",3,"click"]],template:function(e,t){1&e&&(i.\u0275\u0275elementStart(0,"nb-card"),i.\u0275\u0275elementStart(1,"nb-card-header"),i.\u0275\u0275text(2," Antena "),i.\u0275\u0275elementEnd(),i.\u0275\u0275elementEnd(),i.\u0275\u0275elementStart(3,"nb-card"),i.\u0275\u0275elementStart(4,"nb-card-body"),i.\u0275\u0275elementStart(5,"form",0),i.\u0275\u0275listener("ngSubmit",function(){return t.onSubmit()}),i.\u0275\u0275elementStart(6,"div",1),i.\u0275\u0275elementStart(7,"div",2),i.\u0275\u0275elementStart(8,"label",3),i.\u0275\u0275text(9,"Latitude:*"),i.\u0275\u0275elementEnd(),i.\u0275\u0275element(10,"input",4),i.\u0275\u0275elementEnd(),i.\u0275\u0275elementStart(11,"div",2),i.\u0275\u0275elementStart(12,"label",3),i.\u0275\u0275text(13,"Longuitude:*"),i.\u0275\u0275elementEnd(),i.\u0275\u0275element(14,"input",5),i.\u0275\u0275elementEnd(),i.\u0275\u0275elementEnd(),i.\u0275\u0275elementStart(15,"div",1),i.\u0275\u0275elementStart(16,"div",2),i.\u0275\u0275elementStart(17,"label",3),i.\u0275\u0275text(18,"Sentido:*"),i.\u0275\u0275elementEnd(),i.\u0275\u0275element(19,"input",6),i.\u0275\u0275elementEnd(),i.\u0275\u0275elementStart(20,"div",2),i.\u0275\u0275elementStart(21,"label",3),i.\u0275\u0275text(22,"Codigo Local:*"),i.\u0275\u0275elementEnd(),i.\u0275\u0275element(23,"input",7),i.\u0275\u0275elementEnd(),i.\u0275\u0275elementStart(24,"div",2),i.\u0275\u0275elementStart(25,"label",3),i.\u0275\u0275text(26,"Validar:"),i.\u0275\u0275elementEnd(),i.\u0275\u0275elementStart(27,"button",8),i.\u0275\u0275text(28,"Validar"),i.\u0275\u0275elementEnd(),i.\u0275\u0275elementEnd(),i.\u0275\u0275elementEnd(),i.\u0275\u0275elementEnd(),i.\u0275\u0275elementEnd(),i.\u0275\u0275elementEnd(),i.\u0275\u0275template(29,c,21,2,"nb-card",9)),2&e&&(i.\u0275\u0275advance(5),i.\u0275\u0275property("formGroup",t.form)("nbSpinner",t.loading),i.\u0275\u0275advance(5),i.\u0275\u0275property("formControl",t.latitude)("status",t.getStatus(t.latitude)),i.\u0275\u0275advance(4),i.\u0275\u0275property("formControl",t.longuitude)("status",t.getStatus(t.longuitude)),i.\u0275\u0275advance(5),i.\u0275\u0275property("formControl",t.sentido)("status",t.getStatus(t.sentido)),i.\u0275\u0275advance(4),i.\u0275\u0275property("formControl",t.codigoLocal)("status",t.getStatus(t.codigoLocal)),i.\u0275\u0275advance(6),i.\u0275\u0275property("ngIf",t.data.length))},directives:[a.Asz,a.ndF,a.yKW,r._Y,r.JL,r.sg,a.Q7R,a.h8i,r.Fj,r.JJ,r.oH,a.DPz,l.O5,l.sg],encapsulation:2}),e})()}];let f=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=i.\u0275\u0275defineInjector({imports:[[o.Bz.forChild(p)],o.Bz]}),e})(),h=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=i.\u0275\u0275defineInjector({providers:[s],imports:[[r.u5,a.zyh,r.UX,f,a.nKr,a.T2N,l.ez,a.uuI]]}),e})()}}]);