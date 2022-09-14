"use strict";(self.webpackChunkngx_admin=self.webpackChunkngx_admin||[]).push([[6],{89006:function(e,t,n){n.r(t),n.d(t,{AlertModule:function(){return M}});var a=n(38583),r=n(3679),i=n(68242),d=n(53302),o=n(35834),s=n(12224),l=n(54655),c=n(37716),h=n(16738),m=n.n(h),u=n(92340),b=n(91841);let g=(()=>{class e{constructor(e){this.http=e}get(e){const t=this.prepareFiltro(e);return this.http.get(`${u.N.alerta.listar}/${t.inicio}/${t.final}`)}prepareFiltro(e){return e||((e={}).inicioFormatado=m()(new Date),e.finalFormatado=m()(new Date).add(-3,"months")),{inicio:m()(null==e?void 0:e.inicio).format(u.N.format.data),final:m()(null==e?void 0:e.finalFormatado).format(u.N.format.data)}}}return e.\u0275fac=function(t){return new(t||e)(c.\u0275\u0275inject(b.eN))},e.\u0275prov=c.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac}),e})();var p=n(45574),f=n(72191);let x=(()=>{class e{constructor(e){this.theme=e,this.results=[],this.showLegend=!0,this.showXAxis=!0,this.showYAxis=!0,this.xAxisLabel="Produtos",this.yAxisLabel="Quantidade"}ngOnInit(){var e;null===(e=this.data)||void 0===e||e.forEach(e=>{this.results.push({name:e.titulo,value:e.valor})}),this.themeSubscription=this.theme.getJsTheme().subscribe(e=>{const t=e.variables;this.colorScheme={domain:[t.primaryLight,t.infoLight,t.successLight,t.warningLight,t.dangerLight]}})}ngOnDestroy(){this.themeSubscription.unsubscribe()}}return e.\u0275fac=function(t){return new(t||e)(c.\u0275\u0275directiveInject(d.WMF))},e.\u0275cmp=c.\u0275\u0275defineComponent({type:e,selectors:[["d3-bar-chart"]],inputs:{data:"data"},decls:1,vars:8,consts:[[3,"scheme","results","xAxis","yAxis","legend","legendTitle","xAxisLabel","yAxisLabel"]],template:function(e,t){1&e&&c.\u0275\u0275element(0,"ngx-charts-bar-vertical",0),2&e&&c.\u0275\u0275property("scheme",t.colorScheme)("results",t.results)("xAxis",t.showXAxis)("yAxis",t.showYAxis)("legend",t.showLegend)("legendTitle","Legenda")("xAxisLabel",t.xAxisLabel)("yAxisLabel",t.yAxisLabel)},directives:[f.K$],encapsulation:2}),e})();function y(e,t){if(1&e&&c.\u0275\u0275element(0,"d3-bar-chart",4),2&e){const e=c.\u0275\u0275nextContext();c.\u0275\u0275property("data",e.data.quantidadeAlertasGerados)}}function v(e,t){if(1&e&&c.\u0275\u0275element(0,"d3-bar-chart",4),2&e){const e=c.\u0275\u0275nextContext();c.\u0275\u0275property("data",e.data.quantidadePrimeiraPassagem)}}function C(e,t){if(1&e&&c.\u0275\u0275element(0,"d3-bar-chart",4),2&e){const e=c.\u0275\u0275nextContext();c.\u0275\u0275property("data",e.data.quantidadeEnviados)}}const O=[{path:"",component:(()=>{class e{constructor(e){this.service=e,this.loaded=!1}ngOnInit(){this.filtrar({})}filtrar(e){this.loaded=!1,this.service.get(e).subscribe(e=>{this.data=e,this.loaded=!0})}onTap(e){console.log("meu teste")}}return e.\u0275fac=function(t){return new(t||e)(c.\u0275\u0275directiveInject(g))},e.\u0275cmp=c.\u0275\u0275defineComponent({type:e,selectors:[["alert"]],decls:24,vars:4,consts:[[1,"row"],[1,"col-12"],[3,"loaded","filtrar"],[3,"data",4,"ngIf"],[3,"data"]],template:function(e,t){1&e&&(c.\u0275\u0275elementStart(0,"div",0),c.\u0275\u0275elementStart(1,"div",1),c.\u0275\u0275elementStart(2,"nb-card"),c.\u0275\u0275elementStart(3,"filtro",2),c.\u0275\u0275listener("filtrar",function(e){return t.filtrar(e)}),c.\u0275\u0275elementEnd(),c.\u0275\u0275elementEnd(),c.\u0275\u0275elementEnd(),c.\u0275\u0275elementStart(4,"div",1),c.\u0275\u0275elementStart(5,"nb-card"),c.\u0275\u0275elementStart(6,"nb-card-header"),c.\u0275\u0275text(7,"Quantidade Alertas Gerados"),c.\u0275\u0275elementEnd(),c.\u0275\u0275elementStart(8,"nb-card-body"),c.\u0275\u0275template(9,y,1,1,"d3-bar-chart",3),c.\u0275\u0275elementEnd(),c.\u0275\u0275elementEnd(),c.\u0275\u0275elementEnd(),c.\u0275\u0275elementEnd(),c.\u0275\u0275elementStart(10,"div",0),c.\u0275\u0275elementStart(11,"div",1),c.\u0275\u0275elementStart(12,"nb-card"),c.\u0275\u0275elementStart(13,"nb-card-header"),c.\u0275\u0275text(14,"Quantidade Alertas Primeira Passagem"),c.\u0275\u0275elementEnd(),c.\u0275\u0275elementStart(15,"nb-card-body"),c.\u0275\u0275template(16,v,1,1,"d3-bar-chart",3),c.\u0275\u0275elementEnd(),c.\u0275\u0275elementEnd(),c.\u0275\u0275elementEnd(),c.\u0275\u0275elementEnd(),c.\u0275\u0275elementStart(17,"div",0),c.\u0275\u0275elementStart(18,"div",1),c.\u0275\u0275elementStart(19,"nb-card"),c.\u0275\u0275elementStart(20,"nb-card-header"),c.\u0275\u0275text(21,"Quantidade enviados"),c.\u0275\u0275elementEnd(),c.\u0275\u0275elementStart(22,"nb-card-body"),c.\u0275\u0275template(23,C,1,1,"d3-bar-chart",3),c.\u0275\u0275elementEnd(),c.\u0275\u0275elementEnd(),c.\u0275\u0275elementEnd(),c.\u0275\u0275elementEnd()),2&e&&(c.\u0275\u0275advance(3),c.\u0275\u0275property("loaded",t.loaded),c.\u0275\u0275advance(6),c.\u0275\u0275property("ngIf",t.loaded),c.\u0275\u0275advance(7),c.\u0275\u0275property("ngIf",t.loaded),c.\u0275\u0275advance(7),c.\u0275\u0275property("ngIf",t.loaded))},directives:[d.Asz,p.S,d.ndF,d.yKW,a.O5,x],styles:[".nb-theme-default   [_nghost-%COMP%]   d3-bar-chart[_ngcontent-%COMP%]{display:block;height:28.875rem;width:100%}.nb-theme-default   [_nghost-%COMP%]   d3-bar-chart[_ngcontent-%COMP%]     chart{display:block;height:100%;width:100%}.nb-theme-dark   [_nghost-%COMP%]   d3-bar-chart[_ngcontent-%COMP%]{display:block;height:28.875rem;width:100%}.nb-theme-dark   [_nghost-%COMP%]   d3-bar-chart[_ngcontent-%COMP%]     chart{display:block;height:100%;width:100%}.nb-theme-cosmic   [_nghost-%COMP%]   d3-bar-chart[_ngcontent-%COMP%]{display:block;height:28.875rem;width:100%}.nb-theme-cosmic   [_nghost-%COMP%]   d3-bar-chart[_ngcontent-%COMP%]     chart{display:block;height:100%;width:100%}.nb-theme-corporate   [_nghost-%COMP%]   d3-bar-chart[_ngcontent-%COMP%]{display:block;height:28.875rem;width:100%}.nb-theme-corporate   [_nghost-%COMP%]   d3-bar-chart[_ngcontent-%COMP%]     chart{display:block;height:100%;width:100%}.full-name-inputs[_ngcontent-%COMP%], .validation-checkboxes[_ngcontent-%COMP%]{display:flex;margin:0 -.5rem}.full-name-inputs[_ngcontent-%COMP%] > *[_ngcontent-%COMP%], .validation-checkboxes[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin:0 .5rem}"]}),e})()}];let P=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=c.\u0275\u0275defineInjector({imports:[[l.Bz.forChild(O)],l.Bz]}),e})(),M=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=c.\u0275\u0275defineInjector({providers:[g],imports:[[r.u5,d.zyh,r.UX,P,o.H,d.oGl,d.OA,i.i,d.uuI,d.nKr,d.T2N,a.ez,s.f]]}),e})()}}]);