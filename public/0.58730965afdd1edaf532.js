(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"0PJQ":function(t,e,n){"use strict";n.d(e,"b",(function(){return p})),n.d(e,"a",(function(){return h}));var i=n("mrSG"),o=n("fXoL"),r=n("AytR"),c=n("tk/3"),s=n("tyNb"),l=n("1kSV");const a=["container"];function u(t,e){}let p=(()=>{class t{constructor(t,e,n,i){this.http=t,this.route=e,this.router=n,this.service=i,this.message="Please fill the following form then click submit button",this.uploading=!1}ngAfterViewInit(){this.modal=this.openModal(),this.initData()}ngAfterContentInit(){}initData(){this.isEdit=this.route.snapshot.routeConfig.path.includes("edit"),this.title=this.isEdit?"Edit Resource":"Create Resource",this.isEdit&&this.route.parent.data.subscribe(t=>{this.route.params.subscribe(e=>{const n=Number.parseInt(e.id,10),i=t.resources.data.find(t=>t.id===n);if(i){const t={};for(const e in this.formGroup.controls)Object.prototype.hasOwnProperty.call(this.formGroup.controls,e)&&(t[e]=i[e]);this.formGroup.patchValue(t)}else if(this.isEdit)return this.ok()})})}submit(){this.tryCreateResource(),this.tryUpdateResource()}ok(){this.modal?this.modal.dismiss():this.service.dismissAll(),setTimeout(()=>{this.router.navigateByUrl(this.parentUrl)},125)}tryCreateResource(){return Object(i.a)(this,void 0,void 0,(function*(){if(this.isEdit)return;this.uploading=!0;const t=r.a.prepareUrl(this.postUrl,this.route.snapshot.params);return this.http.post(t,this.formGroup.value).toPromise().then(t=>{t&&(this.formGroup.reset(),history.state.runResolvers=!0,this.ok())}).finally(()=>this.uploading=!1)}))}tryUpdateResource(){return Object(i.a)(this,void 0,void 0,(function*(){if(!this.isEdit)return;this.uploading=!0;const t=r.a.prepareUrl(this.putUrl,this.route.snapshot.params),e={};return Object.keys(this.formGroup.controls).forEach(t=>{const n=this.formGroup.controls[t];n.dirty&&n.valid&&(e[t]=n.value)}),this.http.put(t,e).toPromise().then(t=>{t&&(this.formGroup.reset(),history.state.runResolvers=!0,this.ok())}).finally(()=>this.uploading=!1)}))}}return t.\u0275fac=function(e){return new(e||t)(o.Lb(c.b),o.Lb(s.a),o.Lb(s.f),o.Lb(l.d))},t.\u0275cmp=o.Fb({type:t,selectors:[["app-resource-form-content"]],decls:2,vars:0,template:function(t,e){1&t&&(o.Rb(0,"h1"),o.Dc(1,"Hello"),o.Qb())},encapsulation:2}),t})(),h=(()=>{class t{constructor(t,e,n){this.route=t,this.modalService=e,this.resolver=n}ngAfterViewInit(){const e=t.TYPES.get(this.route.snapshot.data.component);console.log(e);const n=this.resolver.resolveComponentFactory(e),i=this.container.createComponent(n);this.content=i.instance,this.modal=this.modalService.open(i.instance,{size:"md",backdrop:"static",keyboard:!1})}ngOnDestroy(){null==this.modal?this.modalService.dismissAll():this.modal.dismiss()}ok(){}}return t.TYPES=new Map,t.\u0275fac=function(e){return new(e||t)(o.Lb(s.a),o.Lb(l.d),o.Lb(o.j))},t.\u0275cmp=o.Fb({type:t,selectors:[["app-resource-form"]],viewQuery:function(t,e){var n;1&t&&o.Ic(a,!0,o.P),2&t&&o.sc(n=o.dc())&&(e.container=n.first)},decls:4,vars:1,consts:[["type","info",3,"close"],["container",""]],template:function(t,e){1&t&&(o.Rb(0,"ngb-alert",0),o.cc("close",(function(){return e.ok()})),o.Dc(1),o.Qb(),o.Bc(2,u,0,0,"ng-template",null,1,o.Cc)),2&t&&(o.yb(1),o.Ec(null==e.content?null:e.content.message))},directives:[l.b],styles:[""]}),t})()},Ubi2:function(t,e,n){"use strict";function i(t,e,n,i,o,r){t.actions||(t.actions=[]),t.actions.push({icon:e,name:n,type:i,url:o,callback:r})}n.d(e,"a",(function(){return C}));var o=n("fXoL"),r=n("OC8m"),c=n("tyNb"),s=n("gren"),l=n("ofXK"),a=n("1kSV"),u=n("3Pt+");function p(t,e){if(1&t&&(o.Rb(0,"a",19),o.Dc(1," Create "),o.Qb()),2&t){const t=o.ec();o.lc("routerLink",null==t.context||null==t.context.urls?null:t.context.urls.createUrl)}}const h=function(t){return{width:t}};function g(t,e){if(1&t&&(o.Rb(0,"th",20),o.Dc(1),o.fc(2,"uppercase"),o.Qb()),2&t){const t=e.$implicit,n=o.ec();o.lc("ngStyle",o.pc(4,h,80/(null==n.context?null:n.context.properties.length)+"%")),o.yb(1),o.Fc(" ",o.gc(2,2,t.title)," ")}}function b(t,e){if(1&t&&(o.Rb(0,"option",27),o.Dc(1),o.Qb()),2&t){const t=e.$implicit;o.lc("value",t),o.yb(1),o.Fc(" ",t," ")}}function d(t,e){if(1&t){const t=o.Sb();o.Rb(0,"div"),o.Rb(1,"select",25),o.cc("change",(function(e){o.uc(t);const n=o.ec().$implicit;return o.ec().filter(e,n)})),o.fc(2,"uppercase"),o.Bc(3,b,2,2,"option",26),o.Qb(),o.Qb()}if(2&t){const t=o.ec().$implicit,e=o.ec();o.yb(1),o.mc("placeholder",o.gc(2,3,t.title)),o.lc("value",(null==e.context||null==e.context.pagination?null:e.context.pagination.filter.get(t.key))||""),o.yb(2),o.lc("ngForOf",e.enumToArray(t.enum))}}function f(t,e){if(1&t){const t=o.Sb();o.Rb(0,"div"),o.Rb(1,"input",28),o.cc("keyup",(function(e){o.uc(t);const n=o.ec().$implicit;return o.ec().filter(e,n)})),o.fc(2,"uppercase"),o.Qb(),o.Qb()}if(2&t){const t=o.ec().$implicit,e=o.ec();o.yb(1),o.mc("placeholder",o.gc(2,3,t.title)),o.lc("value",(null==e.context||null==e.context.pagination?null:e.context.pagination.filter.get(t.key))||"")("disabled",e.loading)}}function m(t,e){if(1&t&&(o.Rb(0,"th",21),o.Pb(1,22),o.Bc(2,d,4,5,"div",23),o.Bc(3,f,3,5,"div",24),o.Ob(),o.Qb()),2&t){const t=e.$implicit,n=o.ec();o.lc("ngStyle",o.pc(3,h,80/(null==n.context?null:n.context.properties.length)+"%")),o.yb(1),o.lc("ngSwitch",t.type),o.yb(1),o.lc("ngSwitchCase","enum")}}function y(t,e){if(1&t&&(o.Rb(0,"td",32),o.Dc(1),o.fc(2,"lowercase"),o.fc(3,"slice"),o.Qb()),2&t){const t=e.$implicit,n=o.ec().$implicit;o.yb(1),o.Fc(" ",o.gc(2,1,o.ic(3,3,n.toTitle(t),0,25))," ")}}function v(t,e){if(1&t){const t=o.Sb();o.Rb(0,"span",33),o.cc("click",(function(){o.uc(t);const n=e.$implicit,i=o.ec().$implicit,r=o.ec();return i.do(n,r.router,r.route)})),o.Mb(1,"i"),o.Qb()}if(2&t){const t=e.$implicit;o.lc("ngbTooltip",t.name),o.yb(1),o.Ab(t.icon)}}function x(t,e){if(1&t&&(o.Rb(0,"tr"),o.Bc(1,y,4,7,"td",29),o.Rb(2,"td",30),o.Bc(3,v,2,4,"span",31),o.Qb(),o.Qb()),2&t){const t=e.$implicit,n=o.ec();o.Ab(t.highlight),o.yb(1),o.lc("ngForOf",null==n.context?null:n.context.properties),o.yb(2),o.lc("ngForOf",null==n.context?null:n.context.actions)}}const S=[[["",8,"option"]]],w=[".option"];let C=(()=>{class t{constructor(t,e,n){this.notifier=t,this.router=e,this.route=n}static initializePaginationContext(t,e){t.data.subscribe(t=>{if(e&&e.pagination&&e.pagination.filter.size>0){const n=e.pagination.filter;e.pagination=t.resources,e.pagination.filter=n}else e.pagination=t.resources}),t.queryParams.subscribe(t=>{const n=new Map;Object.keys(t).filter(e=>"page"!==e&&t[e]&&t[e].length>0).forEach(e=>n.set(e,t[e])),e.pagination.filter=n})}ngOnInit(){this.context||this.notifier.error("Table context is null"),function(t){if(!t)throw new Error("contextIsNull");t.behaviour&&t.behaviour.noDetails||i(t,"nc-icon nc-alert-circle-i","Details","url",t.urls.editUrl||":id/details"),t.behaviour&&t.behaviour.noEdit||i(t,"nc-icon nc-tag-content","Edit","url",t.urls.editUrl||":id/edit"),t.behaviour&&t.behaviour.noDelete||i(t,"nc-icon nc-simple-remove","Delete","url",t.urls.deleteUrl||":id/delete")}(this.context)}filter(t,e){const n=t.target.value,i=this.context.pagination.filter;n&&0!==n.length?i.set(e.key,n):i.delete(e.key),"Enter"!==t.key?this.context.pagination.filter=new Map(i.entries()):this.pageChange(this.context.pagination.current_page)}enumToArray(t){const e=[""];for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)){const i=t[n];"number"!=typeof i&&e.push(i)}return e}pageChange(t){this.loading=!0,history.state.runResolvers=!0;const e={page:t};this.context.pagination.filter.forEach((t,n)=>e[n]=t),this.router.navigate(["."],{relativeTo:this.route,queryParams:e}).then(t=>{this.loading=!1})}}return t.\u0275fac=function(e){return new(e||t)(o.Lb(r.a),o.Lb(c.f),o.Lb(c.a))},t.\u0275cmp=o.Fb({type:t,selectors:[["app-table-view"]],inputs:{context:"context"},ngContentSelectors:w,decls:29,vars:11,consts:[[1,"row"],[1,"col-md-12"],["loaderId","loader-01"],[1,"card"],[1,"card-header"],[1,"pull-right","controls"],["class","btn btn-primary btn-rounded",3,"routerLink",4,"ngIf"],[1,"card-title"],[1,"card-body"],[1,"table-responsive","overflow-hidden"],[1,"table"],[1,"text-primary"],["style","text-align: center",3,"ngStyle",4,"ngFor","ngForOf"],[1,"text-right"],["class","px-md-4",3,"ngStyle",4,"ngFor","ngForOf"],[3,"class",4,"ngFor","ngForOf"],[1,"row",2,"pointer-events","none"],[1,"col-12","d-flex","align-items-center","justify-content-center"],[3,"page","pageSize","collectionSize","pageChange"],[1,"btn","btn-primary","btn-rounded",3,"routerLink"],[2,"text-align","center",3,"ngStyle"],[1,"px-md-4",3,"ngStyle"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],[1,"form-control",3,"placeholder","value","change"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],["type","text",1,"form-control",3,"placeholder","value","disabled","keyup"],["colspan","1","class","text-center",4,"ngFor","ngForOf"],[1,"text-right","actions"],["class","badge badge-pill","placement","bottom",3,"ngbTooltip","click",4,"ngFor","ngForOf"],["colspan","1",1,"text-center"],["placement","bottom",1,"badge","badge-pill",3,"ngbTooltip","click"]],template:function(t,e){1&t&&(o.kc(S),o.Rb(0,"div",0),o.Rb(1,"div",1),o.Mb(2,"ngx-ui-loader",2),o.Mb(3,"router-outlet"),o.Rb(4,"div",3),o.Rb(5,"div",4),o.Rb(6,"div",5),o.jc(7),o.Bc(8,p,2,1,"a",6),o.Qb(),o.Rb(9,"h6",7),o.Dc(10),o.Qb(),o.Qb(),o.Rb(11,"div",8),o.Rb(12,"div",9),o.Rb(13,"table",10),o.Rb(14,"thead",11),o.Rb(15,"tr"),o.Bc(16,g,3,6,"th",12),o.Rb(17,"th",13),o.Dc(18),o.fc(19,"uppercase"),o.Qb(),o.Qb(),o.Rb(20,"tr"),o.Bc(21,m,4,5,"th",14),o.Rb(22,"th",13),o.Dc(23,"\xa0"),o.Qb(),o.Qb(),o.Qb(),o.Rb(24,"tbody"),o.Bc(25,x,4,4,"tr",15),o.Qb(),o.Qb(),o.Rb(26,"div",16),o.Rb(27,"div",17),o.Rb(28,"ngb-pagination",18),o.cc("pageChange",(function(t){return e.pageChange(t)}))("pageChange",(function(t){return e.context.pagination.current_page=t})),o.Qb(),o.Qb(),o.Qb(),o.Qb(),o.Qb(),o.Qb(),o.Qb(),o.Qb()),2&t&&(o.yb(8),o.lc("ngIf",!(null!=e.context&&null!=e.context.behaviour&&e.context.behaviour.noCreate)),o.yb(2),o.Ec(null==e.context?null:e.context.title),o.yb(6),o.lc("ngForOf",null==e.context?null:e.context.properties),o.yb(2),o.Ec(o.gc(19,9,"actions")),o.yb(3),o.lc("ngForOf",null==e.context?null:e.context.properties),o.yb(4),o.lc("ngForOf",null==e.context||null==e.context.pagination?null:e.context.pagination.data),o.yb(3),o.lc("page",e.context.pagination.current_page)("pageSize",null==e.context||null==e.context.pagination?null:e.context.pagination.per_page)("collectionSize",null==e.context||null==e.context.pagination?null:e.context.pagination.total))},directives:[s.g,c.j,l.n,l.m,a.g,c.h,l.o,l.p,l.q,l.r,u.n,u.s,a.j],pipes:[l.x,l.k,l.v],styles:["[_nghost-%COMP%]   .controls[_ngcontent-%COMP%]{height:35px;display:flex;align-items:center;justify-content:center}[_nghost-%COMP%]   .controls[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{height:35px;margin-left:5px;margin-right:5px}[_nghost-%COMP%]   .actions[_ngcontent-%COMP%]{width:400px;transition:width .5s ease-in-out}[_nghost-%COMP%]   .actions[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:1pt!important;margin-right:1pt!important;padding:1.5pt 3pt!important;cursor:pointer;opacity:.8;transition:width .5s ease-in-out;display:inline-flex;align-items:center;justify-content:center}[_nghost-%COMP%]   .actions[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:14px}[_nghost-%COMP%]   .actions[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   span.name[_ngcontent-%COMP%]{display:none}[_nghost-%COMP%]   .actions[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover{opacity:1;color:#212529!important;background-color:#f8f9fa!important}[_nghost-%COMP%]   .actions[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover   span.name[_ngcontent-%COMP%]{display:inline-block}[_nghost-%COMP%]   ngb-pagination[_ngcontent-%COMP%]{max-width:90%!important;overflow-x:auto!important;margin:0 auto!important;display:block!important;pointer-events:all!important}[_nghost-%COMP%]   ngb-pagination[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]{margin-bottom:0!important}"]}),t})()},m1XX:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return r}));var i=n("fXoL");let o=(()=>{class t{constructor(){this._printStyle=[],this.useExistingCss=!1,this.printDelay=0,this._styleSheetFile=""}set printStyle(t){for(let e in t)t.hasOwnProperty(e)&&this._printStyle.push((e+JSON.stringify(t[e])).replace(/['"]+/g,""));this.returnStyleValues()}returnStyleValues(){return`<style> ${this._printStyle.join(" ").replace(/,/g,";")} </style>`}set styleSheetFile(t){let e=function(t){return`<link rel="stylesheet" type="text/css" href="${t}">`};if(-1!==t.indexOf(",")){const n=t.split(",");for(let t of n)this._styleSheetFile=this._styleSheetFile+e(t)}else this._styleSheetFile=e(t)}returnStyleSheetLinkTags(){return this._styleSheetFile}getElementTag(t){const e=[],n=document.getElementsByTagName(t);for(let i=0;i<n.length;i++)e.push(n[i].outerHTML);return e.join("\r\n")}getHtmlContents(){let t=document.getElementById(this.printSectionId),e=t.getElementsByTagName("input");for(var n=0;n<e.length;n++)e[n].defaultValue=e[n].value;return t.innerHTML}print(){let t,e,n="",i="";this.useExistingCss&&(n=this.getElementTag("style"),i=this.getElementTag("link")),t=this.getHtmlContents(),e=window.open("","_blank","top=0,left=0,height=auto,width=auto"),e.document.open(),e.document.write(`\n      <html>\n        <head>\n          <title>${this.printTitle?this.printTitle:""}</title>\n          ${this.returnStyleValues()}\n          ${this.returnStyleSheetLinkTags()}\n          ${n}\n          ${i}\n        </head>\n        <body>\n          ${t}\n          <script defer>\n            function triggerPrint(event) {\n              window.removeEventListener('load', triggerPrint, false);\n              setTimeout(function() {\n                window.print();\n                setTimeout(function() { window.close(); }, 0);\n              }, ${this.printDelay});\n            }\n            window.addEventListener('load', triggerPrint, false);\n          <\/script>\n        </body>\n      </html>`),e.document.close()}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=i.Gb({type:t,selectors:[["button","ngxPrint",""]],hostBindings:function(t,e){1&t&&i.cc("click",(function(){return e.print()}))},inputs:{useExistingCss:"useExistingCss",printDelay:"printDelay",printStyle:"printStyle",styleSheetFile:"styleSheetFile",printSectionId:"printSectionId",printTitle:"printTitle"}}),t})(),r=(()=>{class t{}return t.\u0275mod=i.Jb({type:t}),t.\u0275inj=i.Ib({factory:function(e){return new(e||t)},imports:[[]]}),t})()},uP1v:function(t,e,n){"use strict";n.d(e,"a",(function(){return h}));var i=n("ofXK"),o=n("tk/3"),r=n("3Pt+"),c=n("tyNb"),s=n("1kSV"),l=n("gren"),a=n("m1XX"),u=n("fXoL");let p=(()=>{class t{constructor(t,e){this.route=t,this.router=e}transform(t,e,n){return t&&0!==t.length?e&&0!==e.length&&n?(e.forEach(e=>{const i=n[e.key];t=t.filter(t=>this.isObjectMatchProperty(t,i,e))}),history.state.runResolvers=!0,this.router.navigate([],{relativeTo:this.route,queryParams:n}),t):t:[]}isObjectMatchProperty(t,e,n){if("component"===n.type)return!1;const i=(""+e).toLocaleLowerCase(),o=n.key.split(".");try{switch(o.forEach(e=>t=t[e]),n.type){case"string":return(""+t).toLocaleLowerCase().includes(i);case"int":return Number.parseInt(t.toString(),10).toString().includes(i);case"float":return Number.parseFloat(t.toString()).toString().includes(i);case"date":case"time":case"datetime":return new Date(e.toString()).toLocaleString().includes(i);case"enum":return(""+n.enum[t]).toLocaleLowerCase().includes(i)}}catch(r){return console.log(r),!1}}}return t.\u0275fac=function(e){return new(e||t)(u.Lb(c.a),u.Lb(c.f))},t.\u0275pipe=u.Kb({name:"search",type:t,pure:!0}),t})(),h=(()=>{class t{}return t.\u0275mod=u.Jb({type:t}),t.\u0275inj=u.Ib({factory:function(e){return new(e||t)},providers:[p,i.v],imports:[[i.c,o.c,r.g,r.p,c.i,s.e,l.a,l.b,a.b]]}),t})()},"w+MF":function(t,e,n){"use strict";n.d(e,"a",(function(){return p}));var i=n("AytR"),o=n("fXoL"),r=n("tk/3"),c=n("tyNb"),s=n("1kSV"),l=n("OC8m");const a=["content"];function u(t,e){if(1&t){const t=o.Sb();o.Rb(0,"div",2),o.Rb(1,"h6",3),o.Dc(2),o.Qb(),o.Rb(3,"p"),o.Dc(4),o.Qb(),o.Qb(),o.Rb(5,"div",4),o.Rb(6,"button",5),o.cc("click",(function(){return o.uc(t),o.ec().delete()})),o.Dc(7,"Delete"),o.Qb(),o.Rb(8,"button",6),o.cc("click",(function(){return o.uc(t),o.ec().ok()})),o.Dc(9,"Cancel"),o.Qb(),o.Qb()}if(2&t){const t=o.ec();o.yb(2),o.Ec(null==t.context?null:t.context.title),o.yb(2),o.Ec(null==t.context?null:t.context.description),o.yb(2),o.lc("disabled",t.uploading)}}let p=(()=>{class t{constructor(t,e,n,i,o){this.http=t,this.router=e,this.route=n,this.modalService=i,this.notifier=o,this.uploading=!1}ngAfterViewInit(){this.modal=this.modalService.open(this.content,{backdrop:"static",keyboard:!1,size:"sm"}),this.modal&&this.context&&this.context.data||this.ok()}delete(){this.uploading=!0,this.http.delete(i.a.prepareUrl(this.context.deleteUrl,this.context.data)).subscribe(t=>{if(t)return history.state.runResolvers=!0,this.notifier.success("Resource deleted successfully"),this.ok(),void(this.uploading=!1);this.uploading=!1,this.notifier.error("Somthing went wrong, Failed to delete the resource")},t=>this.uploading=!1)}ok(){this.modal?this.modal.dismiss():this.modalService.dismissAll(),this.router.navigate(["../../"],{relativeTo:this.route})}}return t.\u0275fac=function(e){return new(e||t)(o.Lb(r.b),o.Lb(c.f),o.Lb(c.a),o.Lb(s.d),o.Lb(l.a))},t.\u0275cmp=o.Fb({type:t,selectors:[["app-resource-delete"]],viewQuery:function(t,e){var n;1&t&&o.Ic(a,!0),2&t&&o.sc(n=o.dc())&&(e.content=n.first)},inputs:{context:"context"},decls:4,vars:0,consts:[["type","info",3,"close"],["content",""],[1,"modal-body"],[1,"modal-title","mt-1","pt-2"],[1,"modal-footer"],[1,"btn","btn-sm","btn-rounded","btn-danger",3,"disabled","click"],[1,"btn","btn-sm","btn-rounded","btn-secondary",3,"click"]],template:function(t,e){1&t&&(o.Rb(0,"ngb-alert",0),o.cc("close",(function(){return e.ok()})),o.Dc(1,"Delete resource"),o.Qb(),o.Bc(2,u,10,3,"ng-template",null,1,o.Cc))},directives:[s.b],styles:[""]}),t})()}}]);