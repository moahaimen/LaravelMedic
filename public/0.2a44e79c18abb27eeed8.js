(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"0PJQ":function(t,e,n){"use strict";n.d(e,"b",(function(){return p})),n.d(e,"a",(function(){return h}));var i=n("mrSG"),o=n("fXoL"),r=n("AytR"),s=n("tk/3"),c=n("tyNb"),l=n("1kSV");const a=["container"];function u(t,e){}let p=(()=>{class t{constructor(t,e,n,i){this.http=t,this.route=e,this.router=n,this.service=i,this.message="Please fill the following form then click submit button",this.uploading=!1}ngAfterViewInit(){this.modal=this.openModal(),this.initData()}ngAfterContentInit(){}initData(){const t=history.state.resource;if(t&&this.formGroup.patchValue(t),this.isEdit=this.route.snapshot.routeConfig.path.includes("edit"),this.title=this.isEdit?"Edit Resource":"Create Resource",this.isEdit&&!t)return this.ok()}submit(){this.tryCreateResource(),this.tryUpdateResource()}ok(){this.modal?this.modal.dismiss():this.service.dismissAll(),setTimeout(()=>{this.router.navigateByUrl(this.parentUrl)},250)}tryCreateResource(){return Object(i.a)(this,void 0,void 0,(function*(){if(this.isEdit)return;this.uploading=!0;const t=r.a.prepareUrl(this.postUrl,this.route.snapshot.params);return this.http.post(t,this.formGroup.value).toPromise().then(t=>{console.log(t),t&&(this.formGroup.reset(),this.ok())}).finally(()=>this.uploading=!1)}))}tryUpdateResource(){return Object(i.a)(this,void 0,void 0,(function*(){if(!this.isEdit)return;this.uploading=!0;const t=r.a.prepareUrl(this.putUrl,this.route.snapshot.params);return this.http.put(t,this.formGroup.value).toPromise().then(t=>{console.log(t),t&&(this.formGroup.reset(),this.ok())}).finally(()=>this.uploading=!1)}))}}return t.\u0275fac=function(e){return new(e||t)(o.Kb(s.b),o.Kb(c.a),o.Kb(c.f),o.Kb(l.h))},t.\u0275cmp=o.Eb({type:t,selectors:[["app-resource-form-content"]],decls:2,vars:0,template:function(t,e){1&t&&(o.Qb(0,"h1"),o.Cc(1,"Hello"),o.Pb())},encapsulation:2}),t})(),h=(()=>{class t{constructor(t,e,n){this.route=t,this.modalService=e,this.resolver=n}ngAfterViewInit(){const e=t.TYPES.get(this.route.snapshot.data.component);console.log(e);const n=this.resolver.resolveComponentFactory(e),i=this.container.createComponent(n);this.content=i.instance,this.modal=this.modalService.open(i.instance,{size:"md",backdrop:"static"})}ngOnDestroy(){null==this.modal?this.modalService.dismissAll():this.modal.dismiss()}ok(){}}return t.TYPES=new Map,t.\u0275fac=function(e){return new(e||t)(o.Kb(c.a),o.Kb(l.h),o.Kb(o.j))},t.\u0275cmp=o.Eb({type:t,selectors:[["app-resource-form"]],viewQuery:function(t,e){var n;1&t&&o.Hc(a,!0,o.O),2&t&&o.rc(n=o.cc())&&(e.container=n.first)},decls:4,vars:1,consts:[["type","info",3,"close"],["container",""]],template:function(t,e){1&t&&(o.Qb(0,"ngb-alert",0),o.bc("close",(function(){return e.ok()})),o.Cc(1),o.Pb(),o.Ac(2,u,0,0,"ng-template",null,1,o.Bc)),2&t&&(o.xb(1),o.Dc(null==e.content?null:e.content.message))},directives:[l.b],styles:[""]}),t})()},DzUq:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n("fXoL");let o=(()=>{class t{transform(t,e){return t&&0!==t.length?e&&0!==e.size?(e.forEach((e,n)=>t=t.filter(t=>this.isObjectMatchProperty(t,e,n))),t):t:[]}isObjectMatchProperty(t,e,n){if("component"===n.type)return!1;const i=(""+e).toLocaleLowerCase(),o=n.key.split(".");try{if(o.forEach(e=>t=t[e]),!t)return!1;switch(n.type){case"string":return(""+t).toLocaleLowerCase().includes(i);case"int":return Number.parseInt(t.toString(),10).toString().includes(i);case"float":return Number.parseFloat(t.toString()).toString().includes(i);case"date":case"time":case"datetime":return new Date(e.toString()).toLocaleString().includes(i)}}catch(r){return!1}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=i.Jb({name:"search",type:t,pure:!0}),t})()},Ubi2:function(t,e,n){"use strict";n.d(e,"a",(function(){return y}));var i=n("fXoL"),o=n("OC8m"),r=n("tyNb"),s=n("gren"),c=n("ofXK"),l=n("1kSV"),a=n("DzUq");const u=function(t){return{width:t}};function p(t,e){if(1&t&&(i.Qb(0,"th",18),i.Cc(1),i.ec(2,"uppercase"),i.Pb()),2&t){const t=e.$implicit,n=i.dc();i.kc("ngStyle",i.oc(4,u,80/(null==n.context?null:n.context.properties.length)+"%")),i.xb(1),i.Ec(" ",i.fc(2,2,t.title)," ")}}function h(t,e){if(1&t){const t=i.Rb();i.Qb(0,"th",19),i.Qb(1,"input",20),i.bc("keyup",(function(n){i.tc(t);const o=e.$implicit;return i.dc().filterByProp(n,o)})),i.ec(2,"uppercase"),i.Pb(),i.Pb()}if(2&t){const t=e.$implicit,n=i.dc();i.kc("ngStyle",i.oc(5,u,80/(null==n.context?null:n.context.properties.length)+"%")),i.xb(1),i.lc("placeholder",i.fc(2,3,t.title)),i.kc("value",n.filter[t.key]?n.filter[t.key]:"")}}function d(t,e){if(1&t&&(i.Qb(0,"td",24),i.Cc(1),i.ec(2,"lowercase"),i.ec(3,"slice"),i.Pb()),2&t){const t=e.$implicit,n=i.dc().$implicit;i.xb(1),i.Ec(" ",i.fc(2,1,i.hc(3,3,n.toTitle(t),0,25))," ")}}function b(t,e){if(1&t){const t=i.Rb();i.Qb(0,"span",25),i.bc("click",(function(){i.tc(t);const n=e.$implicit,o=i.dc().$implicit,r=i.dc();return o.do(n,r.router,r.route)})),i.Lb(1,"i"),i.Pb()}if(2&t){const t=e.$implicit;i.kc("ngbTooltip",t.name),i.xb(1),i.zb(t.icon)}}function g(t,e){if(1&t&&(i.Qb(0,"tr"),i.Ac(1,d,4,7,"td",21),i.Qb(2,"td",22),i.Ac(3,b,2,4,"span",23),i.Pb(),i.Pb()),2&t){const t=i.dc();i.xb(1),i.kc("ngForOf",null==t.context?null:t.context.properties),i.xb(2),i.kc("ngForOf",null==t.context?null:t.context.actions)}}const f=[[["",8,"option"]]],m=[".option"];let y=(()=>{class t{constructor(t,e,n){this.notifier=t,this.router=e,this.route=n}ngOnInit(){this.pagination={page:1,pageSize:10},this.filter=new Map,this.context||this.notifier.error("Something went wrong, Table context is null"),this.context.actions||(this.context.actions=[]),this.context.behaviour&&this.context.behaviour.noDetails||this.context.actions.push({icon:"nc-icon nc-alert-circle-i",name:"Details",type:"url",url:this.context.urls.editUrl||":id/details"}),this.context.behaviour&&this.context.behaviour.noEdit||this.context.actions.push({icon:"nc-icon nc-tag-content",name:"Edit",type:"url",url:this.context.urls.editUrl||":id/edit"}),this.context.behaviour&&this.context.behaviour.noDelete||this.context.actions.push({icon:"nc-icon nc-simple-remove",name:"Delete",type:"url",url:this.context.urls.deleteUrl||":id/delete"})}filterByProp(t,e){const n=t.target.value;!n||""===n&&this.filter.has(e)?this.filter.delete(e):this.filter.set(e,n),this.filter=new Map(this.filter.entries()),this.pagination.page=1}}return t.\u0275fac=function(e){return new(e||t)(i.Kb(o.a),i.Kb(r.f),i.Kb(r.a))},t.\u0275cmp=i.Eb({type:t,selectors:[["app-table-view"]],inputs:{context:"context"},ngContentSelectors:m,decls:32,vars:18,consts:[[1,"row"],[1,"col-md-12"],["loaderId","loader-01"],[1,"card"],[1,"card-header"],[1,"pull-right","controls"],[1,"btn","btn-primary","btn-rounded",3,"routerLink"],[1,"card-title"],[1,"card-body"],[1,"table-responsive","overflow-hidden"],[1,"table"],[1,"text-primary"],["style","text-align: center;",3,"ngStyle",4,"ngFor","ngForOf"],[1,"text-right"],["class","px-md-4",3,"ngStyle",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],[1,"col-12","d-flex","align-items-center","justify-content-center"],[3,"page","pageSize","collectionSize","pageChange"],[2,"text-align","center",3,"ngStyle"],[1,"px-md-4",3,"ngStyle"],["type","text",1,"form-control",3,"placeholder","value","keyup"],["colspan","1","class","text-center",4,"ngFor","ngForOf"],[1,"text-right","actions"],["class","badge badge-pill","placement","bottom",3,"ngbTooltip","click",4,"ngFor","ngForOf"],["colspan","1",1,"text-center"],["placement","bottom",1,"badge","badge-pill",3,"ngbTooltip","click"]],template:function(t,e){1&t&&(i.jc(f),i.Qb(0,"div",0),i.Qb(1,"div",1),i.Lb(2,"ngx-ui-loader",2),i.Lb(3,"router-outlet"),i.Qb(4,"div",3),i.Qb(5,"div",4),i.Qb(6,"div",5),i.ic(7),i.Qb(8,"a",6),i.Cc(9," Create "),i.Pb(),i.Pb(),i.Qb(10,"h6",7),i.Cc(11),i.Pb(),i.Pb(),i.Qb(12,"div",8),i.Qb(13,"div",9),i.Qb(14,"table",10),i.Qb(15,"thead",11),i.Qb(16,"tr"),i.Ac(17,p,3,6,"th",12),i.Qb(18,"th",13),i.Cc(19),i.ec(20,"uppercase"),i.Pb(),i.Pb(),i.Qb(21,"tr"),i.Ac(22,h,3,7,"th",14),i.Qb(23,"th",13),i.Cc(24,"\xa0"),i.Pb(),i.Pb(),i.Pb(),i.Qb(25,"tbody"),i.Ac(26,g,4,2,"tr",15),i.ec(27,"slice"),i.ec(28,"search"),i.Pb(),i.Pb(),i.Qb(29,"div",0),i.Qb(30,"div",16),i.Qb(31,"ngb-pagination",17),i.bc("pageChange",(function(t){return e.pagination.page=t})),i.Pb(),i.Pb(),i.Pb(),i.Pb(),i.Pb(),i.Pb(),i.Pb(),i.Pb()),2&t&&(i.xb(8),i.kc("routerLink",null==e.context||null==e.context.urls?null:e.context.urls.createUrl),i.xb(3),i.Dc(null==e.context?null:e.context.title),i.xb(6),i.kc("ngForOf",null==e.context?null:e.context.properties),i.xb(2),i.Dc(i.fc(20,9,"actions")),i.xb(3),i.kc("ngForOf",null==e.context?null:e.context.properties),i.xb(4),i.kc("ngForOf",i.hc(27,11,i.gc(28,15,null==e.context?null:e.context.data,e.filter),((null==e.pagination?null:e.pagination.page)-1)*(null==e.pagination?null:e.pagination.pageSize),((null==e.pagination?null:e.pagination.page)-1)*(null==e.pagination?null:e.pagination.pageSize)+(null==e.pagination?null:e.pagination.pageSize))),i.xb(5),i.kc("page",e.pagination.page)("pageSize",e.pagination.pageSize)("collectionSize",null==e.context?null:e.context.data.length))},directives:[s.g,r.j,r.h,c.m,l.k,c.o,l.n],pipes:[c.x,c.v,a.a,c.k],styles:["[_nghost-%COMP%]   .controls[_ngcontent-%COMP%]{height:35px;display:flex;align-items:center;justify-content:center}[_nghost-%COMP%]   .controls[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{height:35px;margin-left:5px;margin-right:5px}[_nghost-%COMP%]   .actions[_ngcontent-%COMP%]{width:400px;transition:width .5s ease-in-out}[_nghost-%COMP%]   .actions[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:1pt!important;margin-right:1pt!important;padding:1.5pt 3pt!important;cursor:pointer;opacity:.8;transition:width .5s ease-in-out;display:inline-flex;align-items:center;justify-content:center}[_nghost-%COMP%]   .actions[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:14px}[_nghost-%COMP%]   .actions[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   span.name[_ngcontent-%COMP%]{display:none}[_nghost-%COMP%]   .actions[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover{opacity:1;color:#212529!important;background-color:#f8f9fa!important}[_nghost-%COMP%]   .actions[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover   span.name[_ngcontent-%COMP%]{display:inline-block}"]}),t})()},m1XX:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return r}));var i=n("fXoL");let o=(()=>{class t{constructor(){this._printStyle=[],this.useExistingCss=!1,this.printDelay=0,this._styleSheetFile=""}set printStyle(t){for(let e in t)t.hasOwnProperty(e)&&this._printStyle.push((e+JSON.stringify(t[e])).replace(/['"]+/g,""));this.returnStyleValues()}returnStyleValues(){return`<style> ${this._printStyle.join(" ").replace(/,/g,";")} </style>`}set styleSheetFile(t){let e=function(t){return`<link rel="stylesheet" type="text/css" href="${t}">`};if(-1!==t.indexOf(",")){const n=t.split(",");for(let t of n)this._styleSheetFile=this._styleSheetFile+e(t)}else this._styleSheetFile=e(t)}returnStyleSheetLinkTags(){return this._styleSheetFile}getElementTag(t){const e=[],n=document.getElementsByTagName(t);for(let i=0;i<n.length;i++)e.push(n[i].outerHTML);return e.join("\r\n")}getHtmlContents(){let t=document.getElementById(this.printSectionId),e=t.getElementsByTagName("input");for(var n=0;n<e.length;n++)e[n].defaultValue=e[n].value;return t.innerHTML}print(){let t,e,n="",i="";this.useExistingCss&&(n=this.getElementTag("style"),i=this.getElementTag("link")),t=this.getHtmlContents(),e=window.open("","_blank","top=0,left=0,height=auto,width=auto"),e.document.open(),e.document.write(`\n      <html>\n        <head>\n          <title>${this.printTitle?this.printTitle:""}</title>\n          ${this.returnStyleValues()}\n          ${this.returnStyleSheetLinkTags()}\n          ${n}\n          ${i}\n        </head>\n        <body>\n          ${t}\n          <script defer>\n            function triggerPrint(event) {\n              window.removeEventListener('load', triggerPrint, false);\n              setTimeout(function() {\n                window.print();\n                setTimeout(function() { window.close(); }, 0);\n              }, ${this.printDelay});\n            }\n            window.addEventListener('load', triggerPrint, false);\n          <\/script>\n        </body>\n      </html>`),e.document.close()}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=i.Fb({type:t,selectors:[["button","ngxPrint",""]],hostBindings:function(t,e){1&t&&i.bc("click",(function(){return e.print()}))},inputs:{useExistingCss:"useExistingCss",printDelay:"printDelay",printStyle:"printStyle",styleSheetFile:"styleSheetFile",printSectionId:"printSectionId",printTitle:"printTitle"}}),t})(),r=(()=>{class t{}return t.\u0275mod=i.Ib({type:t}),t.\u0275inj=i.Hb({factory:function(e){return new(e||t)},imports:[[]]}),t})()},uP1v:function(t,e,n){"use strict";n.d(e,"a",(function(){return h}));var i=n("ofXK"),o=n("tk/3"),r=n("3Pt+"),s=n("tyNb"),c=n("1kSV"),l=n("gren"),a=n("m1XX"),u=n("DzUq"),p=n("fXoL");let h=(()=>{class t{}return t.\u0275mod=p.Ib({type:t}),t.\u0275inj=p.Hb({factory:function(e){return new(e||t)},providers:[u.a,i.v],imports:[[i.c,o.c,r.g,r.p,s.i,c.i,l.a,l.b,a.b]]}),t})()},"w+MF":function(t,e,n){"use strict";n.d(e,"a",(function(){return p}));var i=n("AytR"),o=n("fXoL"),r=n("tk/3"),s=n("tyNb"),c=n("1kSV"),l=n("OC8m");const a=["content"];function u(t,e){if(1&t){const t=o.Rb();o.Qb(0,"div",2),o.Qb(1,"h6",3),o.Cc(2),o.Pb(),o.Qb(3,"p"),o.Cc(4),o.Pb(),o.Pb(),o.Qb(5,"div",4),o.Qb(6,"button",5),o.bc("click",(function(){return o.tc(t),o.dc().delete()})),o.Cc(7,"Delete"),o.Pb(),o.Qb(8,"button",6),o.bc("click",(function(){return o.tc(t),o.dc().ok()})),o.Cc(9,"Cancel"),o.Pb(),o.Pb()}if(2&t){const t=o.dc();o.xb(2),o.Dc(null==t.context?null:t.context.title),o.xb(2),o.Dc(null==t.context?null:t.context.description),o.xb(2),o.kc("disabled",t.uploading)}}let p=(()=>{class t{constructor(t,e,n,i,o){this.http=t,this.router=e,this.route=n,this.modalService=i,this.notifier=o,this.uploading=!1}ngAfterViewInit(){this.modal=this.modalService.open(this.content,{backdrop:"static",size:"sm"}),this.modal&&history.state.resource||this.ok()}delete(){this.uploading=!0,this.http.delete(i.a.prepareUrl(this.context.deleteUrl,this.context.data)).subscribe(t=>{if(t)return this.notifier.success("Resource deleted successfully"),this.ok(),void(this.uploading=!1);this.uploading=!1,this.notifier.error("Somthing went wrong, Failed to delete the resource")},t=>this.uploading=!1)}ok(){this.modal?this.modal.dismiss():this.modalService.dismissAll(),this.router.navigate(["../../"],{relativeTo:this.route})}}return t.\u0275fac=function(e){return new(e||t)(o.Kb(r.b),o.Kb(s.f),o.Kb(s.a),o.Kb(c.h),o.Kb(l.a))},t.\u0275cmp=o.Eb({type:t,selectors:[["app-resource-delete"]],viewQuery:function(t,e){var n;1&t&&o.Hc(a,!0),2&t&&o.rc(n=o.cc())&&(e.content=n.first)},inputs:{context:"context"},decls:4,vars:0,consts:[["type","info",3,"close"],["content",""],[1,"modal-body"],[1,"modal-title","mt-1","pt-2"],[1,"modal-footer"],[1,"btn","btn-sm","btn-rounded","btn-danger",3,"disabled","click"],[1,"btn","btn-sm","btn-rounded","btn-secondary",3,"click"]],template:function(t,e){1&t&&(o.Qb(0,"ngb-alert",0),o.bc("close",(function(){return e.ok()})),o.Cc(1,"Delete resource"),o.Pb(),o.Ac(2,u,10,3,"ng-template",null,1,o.Bc))},directives:[c.b],styles:[""]}),t})()}}]);