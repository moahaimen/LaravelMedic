(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"8ar1":function(t,e,n){"use strict";n.r(e),n.d(e,"CategoriesModule",(function(){return P}));var o=n("ofXK"),i=n("tyNb"),c=n("fXoL"),r=n("Ubi2");const s=["table"];let a=(()=>{class t{constructor(t){this.context={urls:{createUrl:"/categories/create",detailsUrl:"/:id"},data:this.data,properties:[{key:"en_name",title:"En Name",type:"string"},{key:"en_description",title:"En Description",type:"string"},{key:"created_at",title:"Created At",type:"datetime"},{key:"updated_at",title:"Updated At",type:"datetime"}],title:"Categories"},t.data.subscribe(t=>{this.data=t.resources,this.context.data=this.data})}}return t.\u0275fac=function(e){return new(e||t)(c.Lb(i.a))},t.\u0275cmp=c.Fb({type:t,selectors:[["app-index"]],viewQuery:function(t,e){var n;1&t&&c.Ic(s,!0),2&t&&c.sc(n=c.dc())&&(e.table=n.first)},decls:2,vars:1,consts:[[3,"context"],["table",""]],template:function(t,e){1&t&&c.Mb(0,"app-table-view",0,1),2&t&&c.lc("context",e.context)},directives:[r.a],styles:[""]}),t})();var l=n("AytR"),d=n("9xMI");class b extends d.a{constructor(t,e,n,o,i,c,r,s){super(t),this.id=t,this.en_name=e,this.ar_name=n,this.en_description=o,this.ar_description=i,this.icon=c,this.created_at=r,this.updated_at=s}}var u=n("lJxs"),p=n("tk/3");let m=(()=>{class t{constructor(t){this.http=t}static Json2Category(t){return t?new b(t.id,t.en_name,t.ar_name,t.en_description,t.ar_description,t.icon,t.created_at,t.updated_at):null}resolve(e,n){return this.http.get(`${l.a.apiUrl}/${l.a.categoriesFetchUrl}`).pipe(Object(u.a)(e=>e.map(e=>t.Json2Category(e))))}}return t.\u0275fac=function(e){return new(e||t)(c.Zb(p.b))},t.\u0275prov=c.Hb({token:t,factory:t.\u0275fac}),t})();var f=n("w+MF");let g=(()=>{class t{constructor(t){t.parent.data.subscribe(e=>{t.params.subscribe(t=>{const n=Number.parseInt(t.id,10),o=e.resources.find(t=>t.id===n);this.context={deleteUrl:"categoriesDeleteUrl",data:o,title:"Delete Category Resource!",description:"Are you sure to delete this category?"}})})}}return t.\u0275fac=function(e){return new(e||t)(c.Lb(i.a))},t.\u0275cmp=c.Fb({type:t,selectors:[["app-category-delete"]],decls:1,vars:1,consts:[[3,"context"]],template:function(t,e){1&t&&c.Mb(0,"app-resource-delete",0),2&t&&c.lc("context",e.context)},directives:[f.a],styles:[""]}),t})();class h{constructor(t){this.name=t}get url(){return`/assets/img/icons/icon${this.name}.png`}}const v=[];for(let N=1;N<=28;N++)v.push(new h(N));const y=v;var R=n("AMeL");let x=(()=>{class t{constructor(t){t.parent.data.subscribe(e=>{t.params.subscribe(t=>{const n=Number.parseInt(t.id,10),o=e.resources.find(t=>t.id===n);o&&(o.icon=new h(o.icon)),this.context={urls:{tableUrl:"/categories"},data:o,properties:[{key:"en_name",title:"English Name",type:"string"},{key:"en_description",title:"English Description",type:"string"},{key:"ar_name",title:"Arabic Name",type:"string"},{key:"ar_description",title:"Arabic Description",type:"string"},{key:"created_at",title:"Created At",type:"datetime"},{key:"updated_at",title:"Updated At",type:"datetime"},{key:"icon",title:"Icon",type:"component",component:".icon"}],title:"Details of category "+(null==o?void 0:o.en_name)}})})}}return t.\u0275fac=function(e){return new(e||t)(c.Lb(i.a))},t.\u0275cmp=c.Fb({type:t,selectors:[["app-category-details"]],decls:3,vars:3,consts:[[3,"context"],[1,".icon"],[3,"src","alt"]],template:function(t,e){1&t&&(c.Rb(0,"app-resource-details",0),c.Rb(1,"div",1),c.Mb(2,"img",2),c.Qb(),c.Qb()),2&t&&(c.lc("context",e.context),c.yb(2),c.lc("src",null==e.context||null==e.context.data||null==e.context.data.icon?null:e.context.data.icon.url,c.wc)("alt",null==e.context||null==e.context.data||null==e.context.data.icon?null:e.context.data.icon.name))},directives:[R.a],styles:[""]}),t})();var w=n("0PJQ"),Q=n("3Pt+"),_=n("1kSV");const k=["content"];function D(t,e){if(1&t&&c.Mb(0,"img",24),2&t){const t=c.ec(2);c.lc("src",t.active.url,c.wc)("alt",t.active.name)}}function C(t,e){if(1&t){const t=c.Sb();c.Rb(0,"div",25),c.cc("click",(function(){c.uc(t);const n=e.$implicit;return c.ec(2).onSelectItem(n)})),c.Mb(1,"img",24),c.Dc(2),c.Qb()}if(2&t){const t=e.$implicit;c.yb(1),c.lc("src",t.url,c.wc)("alt",t.name),c.yb(1),c.Fc(" ",t.name," ")}}function M(t,e){if(1&t){const t=c.Sb();c.Rb(0,"div",2),c.Rb(1,"h6",3),c.Dc(2),c.Qb(),c.Rb(3,"button",4),c.cc("click",(function(){return c.uc(t),c.ec().ok()})),c.Rb(4,"span",5),c.Dc(5,"\xd7"),c.Qb(),c.Qb(),c.Qb(),c.Rb(6,"div",6),c.Rb(7,"form",7),c.Rb(8,"div",8),c.Rb(9,"div",9),c.Rb(10,"div",10),c.Rb(11,"label"),c.Dc(12,"English Name"),c.Qb(),c.Mb(13,"input",11),c.Qb(),c.Qb(),c.Qb(),c.Rb(14,"div",12),c.Rb(15,"div",9),c.Rb(16,"div",10),c.Rb(17,"label"),c.Dc(18,"\u0627\u0644\u0627\u0633\u0645 \u0628\u0627\u0644\u0644\u063a\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629"),c.Qb(),c.Mb(19,"input",13),c.Qb(),c.Qb(),c.Qb(),c.Rb(20,"div",8),c.Rb(21,"div",9),c.Rb(22,"div",10),c.Rb(23,"label"),c.Dc(24,"English Description"),c.Qb(),c.Mb(25,"input",14),c.Qb(),c.Qb(),c.Qb(),c.Rb(26,"div",12),c.Rb(27,"div",9),c.Rb(28,"div",10),c.Rb(29,"label"),c.Dc(30,"\u0627\u0644\u0648\u0635\u0641 \u0628\u0627\u0644\u0644\u063a\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629"),c.Qb(),c.Mb(31,"input",15),c.Qb(),c.Qb(),c.Qb(),c.Rb(32,"div",8),c.Rb(33,"div",9),c.Rb(34,"div",10),c.Rb(35,"label"),c.Dc(36,"Icon"),c.Qb(),c.Mb(37,"input",16),c.Rb(38,"div",17),c.Rb(39,"button",18),c.Bc(40,D,1,2,"img",19),c.Dc(41),c.Qb(),c.Rb(42,"div",20),c.Bc(43,C,3,3,"div",21),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Rb(44,"div",8),c.Rb(45,"div",22),c.Rb(46,"button",23),c.cc("click",(function(){return c.uc(t),c.ec().submit()})),c.Dc(47," Submit "),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Qb()}if(2&t){const t=c.ec();c.yb(2),c.Ec(t.title),c.yb(5),c.lc("formGroup",t.formGroup),c.yb(33),c.lc("ngIf",t.active),c.yb(1),c.Fc(" ",t.active?t.active.name:"Not selected"," "),c.yb(2),c.lc("ngForOf",t.icons),c.yb(3),c.lc("disabled",t.uploading||!t.formGroup.dirty||!t.formGroup.valid)}}let I=(()=>{class t extends w.b{constructor(t,e,n,o){super(t,e,n,o),this.formGroup=new Q.e({en_name:new Q.c(null,Q.r.required),ar_name:new Q.c(null,Q.r.required),en_description:new Q.c(null,Q.r.required),ar_description:new Q.c(null,Q.r.required),icon:new Q.c(null,Q.r.required)}),this.icons=y,e.parent.data.subscribe(t=>{e.params.subscribe(e=>{const n=t.resources[e.id];n&&(this.active=this.icons.find(t=>t.name===n.icon))})})}openModal(){return this.service.open(this.content,{backdrop:"static"})}get postUrl(){return"categoriesCreateUrl"}get putUrl(){return"categoriesUpdateUrl"}get parentUrl(){return"/categories"}onSelectItem(t){this.active=t,this.formGroup.controls.icon.setValue(t.name),this.formGroup.controls.icon.markAsTouched(),this.formGroup.controls.icon.markAsDirty()}}return t.\u0275fac=function(e){return new(e||t)(c.Lb(p.b),c.Lb(i.a),c.Lb(i.f),c.Lb(_.h))},t.\u0275cmp=c.Fb({type:t,selectors:[["app-category-form"]],viewQuery:function(t,e){var n;1&t&&c.Ic(k,!0),2&t&&c.sc(n=c.dc())&&(e.content=n.first)},features:[c.vb],decls:4,vars:1,consts:[["type","info",3,"close"],["content",""],[1,"modal-header"],[1,"modal-title","pt-1","mt-1"],["type","button",1,"close",2,"border","none","outline","none",3,"click"],["aria-hidden","true"],[1,"modal-body"],[3,"formGroup"],[1,"row"],[1,"col-12","px-3"],[1,"form-group"],["type","text","placeholder","English Name","formControlName","en_name","autocomplete","off",1,"form-control"],["dir","rtl",1,"row"],["type","text","placeholder","\u0627\u0644\u0627\u0633\u0645 \u0628\u0627\u0644\u0644\u063a\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629","formControlName","ar_name","autocomplete","off",1,"form-control"],["type","text","placeholder","English Description","formControlName","en_description","autocomplete","off",1,"form-control"],["type","text","placeholder","\u0627\u0644\u0648\u0635\u0641 \u0628\u0627\u0644\u0644\u063a\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629","formControlName","ar_description","autocomplete","off",1,"form-control"],["type","hidden","formControlName","icon","id","icon-field"],["ngbDropdown","",1,"d-block"],["id","icons-select","ngbDropdownToggle","",1,"btn","btn-outline-primary","btn-round","btn-sm"],["width","32","height","32",3,"src","alt",4,"ngIf"],["ngbDropdownMenu","","aria-labelledby","icons-select",1,"list-group","icons-list-container"],["ngbDropdownItem","","class","list-group-item list-group-item-action",3,"click",4,"ngFor","ngForOf"],[1,"update","ml-auto","mr-auto"],["type","submit",1,"btn","btn-primary","btn-round",3,"disabled","click"],["width","32","height","32",3,"src","alt"],["ngbDropdownItem","",1,"list-group-item","list-group-item-action",3,"click"]],template:function(t,e){1&t&&(c.Rb(0,"ngb-alert",0),c.cc("close",(function(){return e.ok()})),c.Dc(1),c.Qb(),c.Bc(2,M,48,6,"ng-template",null,1,c.Cc)),2&t&&(c.yb(1),c.Ec(e.message))},directives:[_.b,Q.t,Q.l,Q.f,Q.b,Q.k,Q.d,_.d,_.g,o.n,_.f,o.m,_.e],styles:[".icons-list-container[_ngcontent-%COMP%]{width:150px!important;max-height:350px!important;overflow-y:auto!important;overflow-x:hidden!important}.icons-list-container[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:focus, .icons-list-container[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:focus   *[_ngcontent-%COMP%], .icons-list-container[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover, .icons-list-container[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover   *[_ngcontent-%COMP%]{background-color:var(--light);color:var(--info)}"]}),t})();const S=[{path:"",component:a,runGuardsAndResolvers:(t,e)=>{var n;return null!==(n=history.state.runResolvers)&&void 0!==n&&n},resolve:{resources:m},children:[{path:"create",component:I},{path:":id/edit",component:I},{path:":id/details",pathMatch:"full",component:x},{path:":id/delete",pathMatch:"full",component:g}]}];let O=(()=>{class t{}return t.\u0275mod=c.Jb({type:t}),t.\u0275inj=c.Ib({factory:function(e){return new(e||t)},imports:[[i.i.forChild(S)],i.i]}),t})();var U=n("uP1v"),E=n("RDNO");let P=(()=>{class t{}return t.\u0275mod=c.Jb({type:t}),t.\u0275inj=c.Ib({factory:function(e){return new(e||t)},providers:[m,{provide:p.a,useClass:E.a,multi:!0}],imports:[[o.c,O,_.i,i.i,Q.p,U.a]]}),t})()},AMeL:function(t,e,n){"use strict";n.d(e,"a",(function(){return g}));var o=n("fXoL"),i=n("tyNb"),c=n("OC8m"),r=n("1kSV"),s=n("ofXK"),a=n("m1XX");const l=["content"];function d(t,e){1&t&&(o.Rb(0,"div"),o.jc(1,0,["[select]","prop.component","[property]","prop","[value]","context.data[prop.key]"]),o.Qb())}function b(t,e){if(1&t&&(o.Rb(0,"div"),o.Rb(1,"h6"),o.Dc(2),o.Qb(),o.Rb(3,"small"),o.Dc(4),o.fc(5,"uppercase"),o.Qb(),o.Qb()),2&t){const t=o.ec().$implicit,e=o.ec(2);o.yb(2),o.Ec(e.context.data.toTitle(t)),o.yb(2),o.Ec(o.gc(5,2,t.title))}}function u(t,e){if(1&t&&(o.Rb(0,"div",14),o.Pb(1,15),o.Bc(2,d,2,0,"div",16),o.Bc(3,b,6,4,"div",17),o.Ob(),o.Qb()),2&t){const t=e.$implicit;o.yb(1),o.lc("ngSwitch",t.type),o.yb(1),o.lc("ngSwitchCase","component")}}function p(t,e){1&t&&(o.Rb(0,"button",18),o.Dc(1," Print "),o.Qb()),2&t&&o.lc("useExistingCss",!0)}function m(t,e){if(1&t){const t=o.Sb();o.Rb(0,"div",2),o.Rb(1,"h6",3),o.Dc(2),o.Qb(),o.Rb(3,"button",4),o.cc("click",(function(){return o.uc(t),o.ec().done()})),o.Rb(4,"span",5),o.Dc(5,"\xd7"),o.Qb(),o.Qb(),o.Qb(),o.Rb(6,"div",6),o.Rb(7,"div",7),o.Bc(8,u,4,2,"div",8),o.Qb(),o.Rb(9,"div",9),o.Rb(10,"div",10),o.Bc(11,p,2,1,"button",11),o.Rb(12,"button",12),o.cc("click",(function(){return o.uc(t),o.ec().done()})),o.Mb(13,"i",13),o.Dc(14," Done "),o.Qb(),o.Qb(),o.Qb(),o.Qb()}if(2&t){const t=o.ec();o.yb(2),o.Ec(t.context.title),o.yb(6),o.lc("ngForOf",t.context.properties),o.yb(3),o.lc("ngIf",t.context.printable)}}const f=["*"];let g=(()=>{class t{constructor(t,e,n){this.router=t,this.notifier=e,this.modalService=n}ngAfterViewInit(){if(!this.context||!this.context.data||!this.context.properties)return this.notifier.warning("Something went wrong, Undefined context","Resource Details"),void this.done();this.modal=this.modalService.open(this.content,{size:"md",backdrop:"static"}),history.state.print&&setTimeout(()=>{document.getElementById("printer").click()},250)}done(){var t,e;const n=(null===(e=null===(t=this.context)||void 0===t?void 0:t.urls)||void 0===e?void 0:e.tableUrl)||"/users";console.log(n),this.router.navigateByUrl(n).then(t=>{var e;t&&(null===(e=this.modal)||void 0===e||e.dismiss(),this.modalService.dismissAll())})}}return t.\u0275fac=function(e){return new(e||t)(o.Lb(i.f),o.Lb(c.a),o.Lb(r.h))},t.\u0275cmp=o.Fb({type:t,selectors:[["app-resource-details"]],viewQuery:function(t,e){var n;1&t&&o.Ic(l,!0),2&t&&o.sc(n=o.dc())&&(e.content=n.first)},inputs:{context:"context"},ngContentSelectors:f,decls:4,vars:1,consts:[["type","info",3,"close"],["content",""],[1,"modal-header"],[1,"modal-title","pt-1","mt-1"],["type","button",1,"close",2,"border","none","outline","none",3,"click"],["aria-hidden","true"],[1,"modal-body"],["id","resource-details",1,"list-group"],["class","list-group-item list-group-item-action",4,"ngFor","ngForOf"],[1,"row"],[1,"col-12","text-right"],["id","printer","class","btn btn-md btn-rounded btn-secondary px-3","printTitle","Resource Details","printSectionId","resource-details","ngxPrint","",3,"useExistingCss",4,"ngIf"],["type","button",1,"btn","btn-md","btn-rounded","btn-primary","px-3",3,"click"],[1,"nc-icon","nc-check-2"],[1,"list-group-item","list-group-item-action"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],["id","printer","printTitle","Resource Details","printSectionId","resource-details","ngxPrint","",1,"btn","btn-md","btn-rounded","btn-secondary","px-3",3,"useExistingCss"]],template:function(t,e){1&t&&(o.kc(),o.Rb(0,"ngb-alert",0),o.cc("close",(function(){return e.done()})),o.Dc(1),o.Qb(),o.Bc(2,m,15,3,"ng-template",null,1,o.Cc)),2&t&&(o.yb(1),o.Ec(e.context.title))},directives:[r.b,s.m,s.n,s.p,s.q,s.r,a.a],pipes:[s.x],styles:[""]}),t})()}}]);