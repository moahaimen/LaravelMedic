(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"0PJQ":function(t,e,n){"use strict";n.d(e,"b",(function(){return p})),n.d(e,"a",(function(){return h}));var i=n("mrSG"),o=n("fXoL"),r=n("AytR"),c=n("tk/3"),s=n("tyNb"),l=n("1kSV");const a=["container"];function u(t,e){}let p=(()=>{class t{constructor(t,e,n,i){this.http=t,this.route=e,this.router=n,this.service=i,this.message="Please fill the following form then click submit button",this.uploading=!1}ngAfterViewInit(){this.modal=this.openModal(),this.initData()}ngAfterContentInit(){}initData(){this.isEdit=this.route.snapshot.routeConfig.path.includes("edit"),this.title=this.isEdit?"Edit Resource":"Create Resource",this.isEdit&&this.route.parent.data.subscribe(t=>{this.route.params.subscribe(e=>{const n=Number.parseInt(e.id,10),i=t.resources.find(t=>t.id===n);if(i){const t={};for(const e in this.formGroup.controls)Object.prototype.hasOwnProperty.call(this.formGroup.controls,e)&&(t[e]=i[e]);this.formGroup.patchValue(t)}if(this.isEdit&&!i)return console.log("OOOOOOOOOOOOOOOOOkay"),this.ok()})})}submit(){this.tryCreateResource(),this.tryUpdateResource()}ok(){this.modal?this.modal.dismiss():this.service.dismissAll(),setTimeout(()=>{this.router.navigateByUrl(this.parentUrl)},125)}tryCreateResource(){return Object(i.a)(this,void 0,void 0,(function*(){if(this.isEdit)return;this.uploading=!0;const t=r.a.prepareUrl(this.postUrl,this.route.snapshot.params);return this.http.post(t,this.formGroup.value).toPromise().then(t=>{t&&(this.formGroup.reset(),history.state.runResolvers=!0,this.ok())}).finally(()=>this.uploading=!1)}))}tryUpdateResource(){return Object(i.a)(this,void 0,void 0,(function*(){if(!this.isEdit)return;this.uploading=!0;const t=r.a.prepareUrl(this.putUrl,this.route.snapshot.params);return this.http.put(t,this.formGroup.value).toPromise().then(t=>{t&&(this.formGroup.reset(),history.state.runResolvers=!0,this.ok())}).finally(()=>this.uploading=!1)}))}}return t.\u0275fac=function(e){return new(e||t)(o.Lb(c.b),o.Lb(s.a),o.Lb(s.f),o.Lb(l.d))},t.\u0275cmp=o.Fb({type:t,selectors:[["app-resource-form-content"]],decls:2,vars:0,template:function(t,e){1&t&&(o.Rb(0,"h1"),o.Dc(1,"Hello"),o.Qb())},encapsulation:2}),t})(),h=(()=>{class t{constructor(t,e,n){this.route=t,this.modalService=e,this.resolver=n}ngAfterViewInit(){const e=t.TYPES.get(this.route.snapshot.data.component);console.log(e);const n=this.resolver.resolveComponentFactory(e),i=this.container.createComponent(n);this.content=i.instance,this.modal=this.modalService.open(i.instance,{size:"md",backdrop:"static",keyboard:!1})}ngOnDestroy(){null==this.modal?this.modalService.dismissAll():this.modal.dismiss()}ok(){}}return t.TYPES=new Map,t.\u0275fac=function(e){return new(e||t)(o.Lb(s.a),o.Lb(l.d),o.Lb(o.j))},t.\u0275cmp=o.Fb({type:t,selectors:[["app-resource-form"]],viewQuery:function(t,e){var n;1&t&&o.Ic(a,!0,o.P),2&t&&o.sc(n=o.dc())&&(e.container=n.first)},decls:4,vars:1,consts:[["type","info",3,"close"],["container",""]],template:function(t,e){1&t&&(o.Rb(0,"ngb-alert",0),o.cc("close",(function(){return e.ok()})),o.Dc(1),o.Qb(),o.Bc(2,u,0,0,"ng-template",null,1,o.Cc)),2&t&&(o.yb(1),o.Ec(null==e.content?null:e.content.message))},directives:[l.b],styles:[""]}),t})()},DzUq:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n("fXoL");let o=(()=>{class t{transform(t,e){return t&&0!==t.length?e&&0!==e.size?(e.forEach((e,n)=>t=t.filter(t=>this.isObjectMatchProperty(t,e,n))),t):t:[]}isObjectMatchProperty(t,e,n){if("component"===n.type)return!1;const i=(""+e).toLocaleLowerCase(),o=n.key.split(".");try{switch(o.forEach(e=>t=t[e]),n.type){case"string":return(""+t).toLocaleLowerCase().includes(i);case"int":return Number.parseInt(t.toString(),10).toString().includes(i);case"float":return Number.parseFloat(t.toString()).toString().includes(i);case"date":case"time":case"datetime":return new Date(e.toString()).toLocaleString().includes(i);case"enum":return(""+n.enum[t]).toLocaleLowerCase().includes(i)}}catch(r){return console.log(r),!1}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=i.Kb({name:"search",type:t,pure:!0}),t})()},Ubi2:function(t,e,n){"use strict";n.d(e,"a",(function(){return w}));var i=n("fXoL"),o=n("OC8m"),r=n("tyNb"),c=n("gren"),s=n("ofXK"),l=n("1kSV"),a=n("3Pt+"),u=n("DzUq");function p(t,e){if(1&t&&(i.Rb(0,"a",18),i.Dc(1," Create "),i.Qb()),2&t){const t=i.ec();i.lc("routerLink",null==t.context||null==t.context.urls?null:t.context.urls.createUrl)}}const h=function(t){return{width:t}};function b(t,e){if(1&t&&(i.Rb(0,"th",19),i.Dc(1),i.fc(2,"uppercase"),i.Qb()),2&t){const t=e.$implicit,n=i.ec();i.lc("ngStyle",i.pc(4,h,80/(null==n.context?null:n.context.properties.length)+"%")),i.yb(1),i.Fc(" ",i.gc(2,2,t.title)," ")}}function d(t,e){if(1&t&&(i.Rb(0,"option",26),i.Dc(1),i.Qb()),2&t){const t=e.$implicit;i.lc("value",t),i.yb(1),i.Ec(t)}}function g(t,e){if(1&t){const t=i.Sb();i.Rb(0,"div"),i.Rb(1,"select",24),i.cc("change",(function(e){i.uc(t);const n=i.ec().$implicit;return i.ec().filterByProp(e,n)})),i.fc(2,"uppercase"),i.Bc(3,d,2,2,"option",25),i.Qb(),i.Qb()}if(2&t){const t=i.ec().$implicit,e=i.ec();i.yb(1),i.mc("placeholder",i.gc(2,3,t.title)),i.lc("value",e.filter[t.key]?e.filter[t.key]:""),i.yb(2),i.lc("ngForOf",e.enumToArray(t.enum))}}function f(t,e){if(1&t){const t=i.Sb();i.Rb(0,"div"),i.Rb(1,"input",27),i.cc("keyup",(function(e){i.uc(t);const n=i.ec().$implicit;return i.ec().filterByProp(e,n)})),i.fc(2,"uppercase"),i.Qb(),i.Qb()}if(2&t){const t=i.ec().$implicit,e=i.ec();i.yb(1),i.mc("placeholder",i.gc(2,2,t.title)),i.lc("value",e.filter[t.key]?e.filter[t.key]:"")}}function m(t,e){if(1&t&&(i.Rb(0,"th",20),i.Pb(1,21),i.Bc(2,g,4,5,"div",22),i.Bc(3,f,3,4,"div",23),i.Ob(),i.Qb()),2&t){const t=e.$implicit,n=i.ec();i.lc("ngStyle",i.pc(3,h,80/(null==n.context?null:n.context.properties.length)+"%")),i.yb(1),i.lc("ngSwitch",t.type),i.yb(1),i.lc("ngSwitchCase","enum")}}function y(t,e){if(1&t&&(i.Rb(0,"td",31),i.Dc(1),i.fc(2,"lowercase"),i.fc(3,"slice"),i.Qb()),2&t){const t=e.$implicit,n=i.ec().$implicit;i.yb(1),i.Fc(" ",i.gc(2,1,i.ic(3,3,n.toTitle(t),0,25))," ")}}function v(t,e){if(1&t){const t=i.Sb();i.Rb(0,"span",32),i.cc("click",(function(){i.uc(t);const n=e.$implicit,o=i.ec().$implicit,r=i.ec();return o.do(n,r.router,r.route)})),i.Mb(1,"i"),i.Qb()}if(2&t){const t=e.$implicit;i.lc("ngbTooltip",t.name),i.yb(1),i.Ab(t.icon)}}function x(t,e){if(1&t&&(i.Rb(0,"tr"),i.Bc(1,y,4,7,"td",28),i.Rb(2,"td",29),i.Bc(3,v,2,4,"span",30),i.Qb(),i.Qb()),2&t){const t=e.$implicit,n=i.ec();i.Ab(t.highlight),i.yb(1),i.lc("ngForOf",null==n.context?null:n.context.properties),i.yb(2),i.lc("ngForOf",null==n.context?null:n.context.actions)}}const O=[[["",8,"option"]]],S=[".option"];let w=(()=>{class t{constructor(t,e,n){this.notifier=t,this.router=e,this.route=n}ngOnInit(){this.pagination={page:1,pageSize:10},this.filter=new Map,this.context||this.notifier.error("Something went wrong, Table context is null"),this.context.actions||(this.context.actions=[]),this.context.behaviour&&this.context.behaviour.noDetails||this.context.actions.push({icon:"nc-icon nc-alert-circle-i",name:"Details",type:"url",url:this.context.urls.editUrl||":id/details"}),this.context.behaviour&&this.context.behaviour.noEdit||this.context.actions.push({icon:"nc-icon nc-tag-content",name:"Edit",type:"url",url:this.context.urls.editUrl||":id/edit"}),this.context.behaviour&&this.context.behaviour.noDelete||this.context.actions.push({icon:"nc-icon nc-simple-remove",name:"Delete",type:"url",url:this.context.urls.deleteUrl||":id/delete"})}filterByProp(t,e){const n=t.target.value;!n||""===n&&this.filter.has(e)?this.filter.delete(e):this.filter.set(e,n),this.filter=new Map(this.filter.entries()),this.pagination.page=1}enumToArray(t){const e=[""];for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)){const i=t[n];"number"!=typeof i&&e.push(i)}return e}get pageOffset(){var t,e;return((null===(t=this.pagination)||void 0===t?void 0:t.page)-1)*(null===(e=this.pagination)||void 0===e?void 0:e.pageSize)}}return t.\u0275fac=function(e){return new(e||t)(i.Lb(o.a),i.Lb(r.f),i.Lb(r.a))},t.\u0275cmp=i.Fb({type:t,selectors:[["app-table-view"]],inputs:{context:"context"},ngContentSelectors:S,decls:31,vars:18,consts:[[1,"row"],[1,"col-md-12"],["loaderId","loader-01"],[1,"card"],[1,"card-header"],[1,"pull-right","controls"],["class","btn btn-primary btn-rounded",3,"routerLink",4,"ngIf"],[1,"card-title"],[1,"card-body"],[1,"table-responsive","overflow-hidden"],[1,"table"],[1,"text-primary"],["style","text-align: center;",3,"ngStyle",4,"ngFor","ngForOf"],[1,"text-right"],["class","px-md-4",3,"ngStyle",4,"ngFor","ngForOf"],[3,"class",4,"ngFor","ngForOf"],[1,"col-12","d-flex","align-items-center","justify-content-center"],[3,"page","pageSize","collectionSize","pageChange"],[1,"btn","btn-primary","btn-rounded",3,"routerLink"],[2,"text-align","center",3,"ngStyle"],[1,"px-md-4",3,"ngStyle"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],[1,"form-control",3,"placeholder","value","change"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],["type","text",1,"form-control",3,"placeholder","value","keyup"],["colspan","1","class","text-center",4,"ngFor","ngForOf"],[1,"text-right","actions"],["class","badge badge-pill","placement","bottom",3,"ngbTooltip","click",4,"ngFor","ngForOf"],["colspan","1",1,"text-center"],["placement","bottom",1,"badge","badge-pill",3,"ngbTooltip","click"]],template:function(t,e){1&t&&(i.kc(O),i.Rb(0,"div",0),i.Rb(1,"div",1),i.Mb(2,"ngx-ui-loader",2),i.Mb(3,"router-outlet"),i.Rb(4,"div",3),i.Rb(5,"div",4),i.Rb(6,"div",5),i.jc(7),i.Bc(8,p,2,1,"a",6),i.Qb(),i.Rb(9,"h6",7),i.Dc(10),i.Qb(),i.Qb(),i.Rb(11,"div",8),i.Rb(12,"div",9),i.Rb(13,"table",10),i.Rb(14,"thead",11),i.Rb(15,"tr"),i.Bc(16,b,3,6,"th",12),i.Rb(17,"th",13),i.Dc(18),i.fc(19,"uppercase"),i.Qb(),i.Qb(),i.Rb(20,"tr"),i.Bc(21,m,4,5,"th",14),i.Rb(22,"th",13),i.Dc(23,"\xa0"),i.Qb(),i.Qb(),i.Qb(),i.Rb(24,"tbody"),i.Bc(25,x,4,4,"tr",15),i.fc(26,"slice"),i.fc(27,"search"),i.Qb(),i.Qb(),i.Rb(28,"div",0),i.Rb(29,"div",16),i.Rb(30,"ngb-pagination",17),i.cc("pageChange",(function(t){return e.pagination.page=t})),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Qb()),2&t&&(i.yb(8),i.lc("ngIf",!(null!=e.context&&null!=e.context.behaviour&&e.context.behaviour.noCreate)),i.yb(2),i.Ec(null==e.context?null:e.context.title),i.yb(6),i.lc("ngForOf",null==e.context?null:e.context.properties),i.yb(2),i.Ec(i.gc(19,9,"actions")),i.yb(3),i.lc("ngForOf",null==e.context?null:e.context.properties),i.yb(4),i.lc("ngForOf",i.ic(26,11,i.hc(27,15,null==e.context?null:e.context.data,e.filter),e.pageOffset,e.pageOffset+(null==e.pagination?null:e.pagination.pageSize))),i.yb(5),i.lc("page",e.pagination.page)("pageSize",e.pagination.pageSize)("collectionSize",null==e.context?null:e.context.data.length))},directives:[c.g,r.j,s.n,s.m,l.g,r.h,s.o,s.p,s.q,s.r,a.n,a.s,l.j],pipes:[s.x,s.v,u.a,s.k],styles:["[_nghost-%COMP%]   .controls[_ngcontent-%COMP%]{height:35px;display:flex;align-items:center;justify-content:center}[_nghost-%COMP%]   .controls[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{height:35px;margin-left:5px;margin-right:5px}[_nghost-%COMP%]   .actions[_ngcontent-%COMP%]{width:400px;transition:width .5s ease-in-out}[_nghost-%COMP%]   .actions[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:1pt!important;margin-right:1pt!important;padding:1.5pt 3pt!important;cursor:pointer;opacity:.8;transition:width .5s ease-in-out;display:inline-flex;align-items:center;justify-content:center}[_nghost-%COMP%]   .actions[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:14px}[_nghost-%COMP%]   .actions[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   span.name[_ngcontent-%COMP%]{display:none}[_nghost-%COMP%]   .actions[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover{opacity:1;color:#212529!important;background-color:#f8f9fa!important}[_nghost-%COMP%]   .actions[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover   span.name[_ngcontent-%COMP%]{display:inline-block}"]}),t})()},m1XX:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return r}));var i=n("fXoL");let o=(()=>{class t{constructor(){this._printStyle=[],this.useExistingCss=!1,this.printDelay=0,this._styleSheetFile=""}set printStyle(t){for(let e in t)t.hasOwnProperty(e)&&this._printStyle.push((e+JSON.stringify(t[e])).replace(/['"]+/g,""));this.returnStyleValues()}returnStyleValues(){return`<style> ${this._printStyle.join(" ").replace(/,/g,";")} </style>`}set styleSheetFile(t){let e=function(t){return`<link rel="stylesheet" type="text/css" href="${t}">`};if(-1!==t.indexOf(",")){const n=t.split(",");for(let t of n)this._styleSheetFile=this._styleSheetFile+e(t)}else this._styleSheetFile=e(t)}returnStyleSheetLinkTags(){return this._styleSheetFile}getElementTag(t){const e=[],n=document.getElementsByTagName(t);for(let i=0;i<n.length;i++)e.push(n[i].outerHTML);return e.join("\r\n")}getHtmlContents(){let t=document.getElementById(this.printSectionId),e=t.getElementsByTagName("input");for(var n=0;n<e.length;n++)e[n].defaultValue=e[n].value;return t.innerHTML}print(){let t,e,n="",i="";this.useExistingCss&&(n=this.getElementTag("style"),i=this.getElementTag("link")),t=this.getHtmlContents(),e=window.open("","_blank","top=0,left=0,height=auto,width=auto"),e.document.open(),e.document.write(`\n      <html>\n        <head>\n          <title>${this.printTitle?this.printTitle:""}</title>\n          ${this.returnStyleValues()}\n          ${this.returnStyleSheetLinkTags()}\n          ${n}\n          ${i}\n        </head>\n        <body>\n          ${t}\n          <script defer>\n            function triggerPrint(event) {\n              window.removeEventListener('load', triggerPrint, false);\n              setTimeout(function() {\n                window.print();\n                setTimeout(function() { window.close(); }, 0);\n              }, ${this.printDelay});\n            }\n            window.addEventListener('load', triggerPrint, false);\n          <\/script>\n        </body>\n      </html>`),e.document.close()}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=i.Gb({type:t,selectors:[["button","ngxPrint",""]],hostBindings:function(t,e){1&t&&i.cc("click",(function(){return e.print()}))},inputs:{useExistingCss:"useExistingCss",printDelay:"printDelay",printStyle:"printStyle",styleSheetFile:"styleSheetFile",printSectionId:"printSectionId",printTitle:"printTitle"}}),t})(),r=(()=>{class t{}return t.\u0275mod=i.Jb({type:t}),t.\u0275inj=i.Ib({factory:function(e){return new(e||t)},imports:[[]]}),t})()},uP1v:function(t,e,n){"use strict";n.d(e,"a",(function(){return h}));var i=n("ofXK"),o=n("tk/3"),r=n("3Pt+"),c=n("tyNb"),s=n("1kSV"),l=n("gren"),a=n("m1XX"),u=n("DzUq"),p=n("fXoL");let h=(()=>{class t{}return t.\u0275mod=p.Jb({type:t}),t.\u0275inj=p.Ib({factory:function(e){return new(e||t)},providers:[u.a,i.v],imports:[[i.c,o.c,r.g,r.p,c.i,s.e,l.a,l.b,a.b]]}),t})()},"w+MF":function(t,e,n){"use strict";n.d(e,"a",(function(){return p}));var i=n("AytR"),o=n("fXoL"),r=n("tk/3"),c=n("tyNb"),s=n("1kSV"),l=n("OC8m");const a=["content"];function u(t,e){if(1&t){const t=o.Sb();o.Rb(0,"div",2),o.Rb(1,"h6",3),o.Dc(2),o.Qb(),o.Rb(3,"p"),o.Dc(4),o.Qb(),o.Qb(),o.Rb(5,"div",4),o.Rb(6,"button",5),o.cc("click",(function(){return o.uc(t),o.ec().delete()})),o.Dc(7,"Delete"),o.Qb(),o.Rb(8,"button",6),o.cc("click",(function(){return o.uc(t),o.ec().ok()})),o.Dc(9,"Cancel"),o.Qb(),o.Qb()}if(2&t){const t=o.ec();o.yb(2),o.Ec(null==t.context?null:t.context.title),o.yb(2),o.Ec(null==t.context?null:t.context.description),o.yb(2),o.lc("disabled",t.uploading)}}let p=(()=>{class t{constructor(t,e,n,i,o){this.http=t,this.router=e,this.route=n,this.modalService=i,this.notifier=o,this.uploading=!1}ngAfterViewInit(){this.modal=this.modalService.open(this.content,{backdrop:"static",keyboard:!1,size:"sm"}),this.modal&&this.context.data||this.ok()}delete(){this.uploading=!0,this.http.delete(i.a.prepareUrl(this.context.deleteUrl,this.context.data)).subscribe(t=>{if(t)return history.state.runResolvers=!0,this.notifier.success("Resource deleted successfully"),this.ok(),void(this.uploading=!1);this.uploading=!1,this.notifier.error("Somthing went wrong, Failed to delete the resource")},t=>this.uploading=!1)}ok(){this.modal?this.modal.dismiss():this.modalService.dismissAll(),this.router.navigate(["../../"],{relativeTo:this.route})}}return t.\u0275fac=function(e){return new(e||t)(o.Lb(r.b),o.Lb(c.f),o.Lb(c.a),o.Lb(s.d),o.Lb(l.a))},t.\u0275cmp=o.Fb({type:t,selectors:[["app-resource-delete"]],viewQuery:function(t,e){var n;1&t&&o.Ic(a,!0),2&t&&o.sc(n=o.dc())&&(e.content=n.first)},inputs:{context:"context"},decls:4,vars:0,consts:[["type","info",3,"close"],["content",""],[1,"modal-body"],[1,"modal-title","mt-1","pt-2"],[1,"modal-footer"],[1,"btn","btn-sm","btn-rounded","btn-danger",3,"disabled","click"],[1,"btn","btn-sm","btn-rounded","btn-secondary",3,"click"]],template:function(t,e){1&t&&(o.Rb(0,"ngb-alert",0),o.cc("close",(function(){return e.ok()})),o.Dc(1,"Delete resource"),o.Qb(),o.Bc(2,u,10,3,"ng-template",null,1,o.Cc))},directives:[s.b],styles:[""]}),t})()}}]);