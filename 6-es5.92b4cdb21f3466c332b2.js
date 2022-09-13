!function(){"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function n(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),Object.defineProperty(e,"prototype",{writable:!1}),e}(self.webpackChunkngx_admin=self.webpackChunkngx_admin||[]).push([[6],{89006:function(t,a,r){r.r(a),r.d(a,{AlertModule:function(){return _}});var i,o=r(38583),d=r(3679),c=r(68242),l=r(53302),s=r(35834),h=r(12224),u=r(54655),m=r(37716),f=r(16738),b=r.n(f),p=r(92340),g=r(91841),v=((i=function(){function t(n){e(this,t),this.http=n}return n(t,[{key:"get",value:function(e){var t=this.prepareFiltro(e);return this.http.get("".concat(p.N.alerta.listar,"/").concat(t.inicio,"/").concat(t.final))}},{key:"prepareFiltro",value:function(e){return e||((e={}).inicioFormatado=b()(new Date),e.finalFormatado=b()(new Date).add(-3,"months")),{inicio:b()(null==e?void 0:e.inicio).format(p.N.format.data),final:b()(null==e?void 0:e.finalFormatado).format(p.N.format.data)}}}]),t}()).\u0275fac=function(e){return new(e||i)(m.\u0275\u0275inject(g.eN))},i.\u0275prov=m.\u0275\u0275defineInjectable({token:i,factory:i.\u0275fac}),i),y=r(45574),x=r(72191),C=function(){var t=function(){function t(n){e(this,t),this.theme=n,this.results=[],this.showLegend=!0,this.showXAxis=!0,this.showYAxis=!0,this.xAxisLabel="Produtos",this.yAxisLabel="Quantidade"}return n(t,[{key:"ngOnInit",value:function(){var e,t=this;null===(e=this.data)||void 0===e||e.forEach(function(e){t.results.push({name:e.titulo,value:e.valor})}),this.themeSubscription=this.theme.getJsTheme().subscribe(function(e){var n=e.variables;t.colorScheme={domain:[n.primaryLight,n.infoLight,n.successLight,n.warningLight,n.dangerLight]}})}},{key:"ngOnDestroy",value:function(){this.themeSubscription.unsubscribe()}}]),t}();return t.\u0275fac=function(e){return new(e||t)(m.\u0275\u0275directiveInject(l.WMF))},t.\u0275cmp=m.\u0275\u0275defineComponent({type:t,selectors:[["d3-bar-chart"]],inputs:{data:"data"},decls:1,vars:8,consts:[[3,"scheme","results","xAxis","yAxis","legend","legendTitle","xAxisLabel","yAxisLabel"]],template:function(e,t){1&e&&m.\u0275\u0275element(0,"ngx-charts-bar-vertical",0),2&e&&m.\u0275\u0275property("scheme",t.colorScheme)("results",t.results)("xAxis",t.showXAxis)("yAxis",t.showYAxis)("legend",t.showLegend)("legendTitle","Legenda")("xAxisLabel",t.xAxisLabel)("yAxisLabel",t.yAxisLabel)},directives:[x.K$],encapsulation:2}),t}();function w(e,t){if(1&e&&m.\u0275\u0275element(0,"d3-bar-chart",4),2&e){var n=m.\u0275\u0275nextContext();m.\u0275\u0275property("data",n.data.quantidadeAlertasGerados)}}function O(e,t){if(1&e&&m.\u0275\u0275element(0,"d3-bar-chart",4),2&e){var n=m.\u0275\u0275nextContext();m.\u0275\u0275property("data",n.data.quantidadePrimeiraPassagem)}}function P(e,t){if(1&e&&m.\u0275\u0275element(0,"d3-bar-chart",4),2&e){var n=m.\u0275\u0275nextContext();m.\u0275\u0275property("data",n.data.quantidadeEnviados)}}var M=[{path:"",component:function(){var t=function(){function t(n){e(this,t),this.service=n,this.loaded=!1}return n(t,[{key:"ngOnInit",value:function(){this.filtrar({})}},{key:"filtrar",value:function(e){var t=this;this.loaded=!1,this.service.get(e).subscribe(function(e){t.data=e,t.loaded=!0})}}]),t}();return t.\u0275fac=function(e){return new(e||t)(m.\u0275\u0275directiveInject(v))},t.\u0275cmp=m.\u0275\u0275defineComponent({type:t,selectors:[["alert"]],decls:24,vars:4,consts:[[1,"row"],[1,"col-12"],[3,"loaded","filtrar"],[3,"data",4,"ngIf"],[3,"data"]],template:function(e,t){1&e&&(m.\u0275\u0275elementStart(0,"div",0),m.\u0275\u0275elementStart(1,"div",1),m.\u0275\u0275elementStart(2,"nb-card"),m.\u0275\u0275elementStart(3,"filtro",2),m.\u0275\u0275listener("filtrar",function(e){return t.filtrar(e)}),m.\u0275\u0275elementEnd(),m.\u0275\u0275elementEnd(),m.\u0275\u0275elementEnd(),m.\u0275\u0275elementStart(4,"div",1),m.\u0275\u0275elementStart(5,"nb-card"),m.\u0275\u0275elementStart(6,"nb-card-header"),m.\u0275\u0275text(7,"Quantidade Alertas Gerados"),m.\u0275\u0275elementEnd(),m.\u0275\u0275elementStart(8,"nb-card-body"),m.\u0275\u0275template(9,w,1,1,"d3-bar-chart",3),m.\u0275\u0275elementEnd(),m.\u0275\u0275elementEnd(),m.\u0275\u0275elementEnd(),m.\u0275\u0275elementEnd(),m.\u0275\u0275elementStart(10,"div",0),m.\u0275\u0275elementStart(11,"div",1),m.\u0275\u0275elementStart(12,"nb-card"),m.\u0275\u0275elementStart(13,"nb-card-header"),m.\u0275\u0275text(14,"Quantidade Alertas Primeira Passagem"),m.\u0275\u0275elementEnd(),m.\u0275\u0275elementStart(15,"nb-card-body"),m.\u0275\u0275template(16,O,1,1,"d3-bar-chart",3),m.\u0275\u0275elementEnd(),m.\u0275\u0275elementEnd(),m.\u0275\u0275elementEnd(),m.\u0275\u0275elementEnd(),m.\u0275\u0275elementStart(17,"div",0),m.\u0275\u0275elementStart(18,"div",1),m.\u0275\u0275elementStart(19,"nb-card"),m.\u0275\u0275elementStart(20,"nb-card-header"),m.\u0275\u0275text(21,"Quantidade enviados"),m.\u0275\u0275elementEnd(),m.\u0275\u0275elementStart(22,"nb-card-body"),m.\u0275\u0275template(23,P,1,1,"d3-bar-chart",3),m.\u0275\u0275elementEnd(),m.\u0275\u0275elementEnd(),m.\u0275\u0275elementEnd(),m.\u0275\u0275elementEnd()),2&e&&(m.\u0275\u0275advance(3),m.\u0275\u0275property("loaded",t.loaded),m.\u0275\u0275advance(6),m.\u0275\u0275property("ngIf",t.loaded),m.\u0275\u0275advance(7),m.\u0275\u0275property("ngIf",t.loaded),m.\u0275\u0275advance(7),m.\u0275\u0275property("ngIf",t.loaded))},directives:[l.Asz,y.S,l.ndF,l.yKW,o.O5,C],styles:[".nb-theme-default   [_nghost-%COMP%]   d3-bar-chart[_ngcontent-%COMP%]{display:block;height:28.875rem;width:100%}.nb-theme-default   [_nghost-%COMP%]   d3-bar-chart[_ngcontent-%COMP%]     chart{display:block;height:100%;width:100%}.nb-theme-dark   [_nghost-%COMP%]   d3-bar-chart[_ngcontent-%COMP%]{display:block;height:28.875rem;width:100%}.nb-theme-dark   [_nghost-%COMP%]   d3-bar-chart[_ngcontent-%COMP%]     chart{display:block;height:100%;width:100%}.nb-theme-cosmic   [_nghost-%COMP%]   d3-bar-chart[_ngcontent-%COMP%]{display:block;height:28.875rem;width:100%}.nb-theme-cosmic   [_nghost-%COMP%]   d3-bar-chart[_ngcontent-%COMP%]     chart{display:block;height:100%;width:100%}.nb-theme-corporate   [_nghost-%COMP%]   d3-bar-chart[_ngcontent-%COMP%]{display:block;height:28.875rem;width:100%}.nb-theme-corporate   [_nghost-%COMP%]   d3-bar-chart[_ngcontent-%COMP%]     chart{display:block;height:100%;width:100%}.full-name-inputs[_ngcontent-%COMP%], .validation-checkboxes[_ngcontent-%COMP%]{display:flex;margin:0 -.5rem}.full-name-inputs[_ngcontent-%COMP%] > *[_ngcontent-%COMP%], .validation-checkboxes[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin:0 .5rem}"]}),t}()}],k=function(){var t=n(function t(){e(this,t)});return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=m.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=m.\u0275\u0275defineInjector({imports:[[u.Bz.forChild(M)],u.Bz]}),t}(),_=function(){var t=n(function t(){e(this,t)});return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=m.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=m.\u0275\u0275defineInjector({providers:[v],imports:[[d.u5,l.zyh,d.UX,k,s.H,l.oGl,l.OA,c.i,l.uuI,l.nKr,l.T2N,o.ez,h.f]]}),t}()}}])}();