(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{AMeL:function(t,e,n){"use strict";n.d(e,"a",(function(){return v}));var i=n("fXoL"),o=n("tyNb"),r=n("OC8m"),c=n("1kSV"),s=n("ofXK"),a=n("m1XX");const l=["content"];function d(t,e){1&t&&(i.Qb(0,"div"),i.ic(1,0,["[select]","prop.component","[property]","prop","[value]","context.data[prop.key]"]),i.Pb())}function p(t,e){if(1&t&&(i.Qb(0,"div"),i.Qb(1,"h6"),i.Cc(2),i.Pb(),i.Qb(3,"small"),i.Cc(4),i.ec(5,"uppercase"),i.Pb(),i.Pb()),2&t){const t=i.dc().$implicit,e=i.dc(2);i.xb(2),i.Dc(e.context.data.toTitle(t)),i.xb(2),i.Dc(i.fc(5,2,t.title))}}function b(t,e){if(1&t&&(i.Qb(0,"div",14),i.Ob(1,15),i.Ac(2,d,2,0,"div",16),i.Ac(3,p,6,4,"div",17),i.Nb(),i.Pb()),2&t){const t=e.$implicit;i.xb(1),i.kc("ngSwitch",t.type),i.xb(1),i.kc("ngSwitchCase","component")}}function u(t,e){1&t&&(i.Qb(0,"button",18),i.Cc(1," Print "),i.Pb()),2&t&&i.kc("useExistingCss",!0)}function m(t,e){if(1&t){const t=i.Rb();i.Qb(0,"div",2),i.Qb(1,"h6",3),i.Cc(2),i.Pb(),i.Qb(3,"button",4),i.bc("click",(function(){return i.tc(t),i.dc().done()})),i.Qb(4,"span",5),i.Cc(5,"\xd7"),i.Pb(),i.Pb(),i.Pb(),i.Qb(6,"div",6),i.Qb(7,"div",7),i.Ac(8,b,4,2,"div",8),i.Pb(),i.Qb(9,"div",9),i.Qb(10,"div",10),i.Ac(11,u,2,1,"button",11),i.Qb(12,"button",12),i.bc("click",(function(){return i.tc(t),i.dc().done()})),i.Lb(13,"i",13),i.Cc(14," Done "),i.Pb(),i.Pb(),i.Pb(),i.Pb()}if(2&t){const t=i.dc();i.xb(2),i.Dc(t.context.title),i.xb(6),i.kc("ngForOf",t.context.properties),i.xb(3),i.kc("ngIf",t.context.printable)}}const f=["*"];let v=(()=>{class t{constructor(t,e,n){this.router=t,this.notifier=e,this.modalService=n}ngAfterViewInit(){if(!this.context||!this.context.data||!this.context.properties)return this.notifier.warning("Something went wrong, Undefined context","Resource Details"),void this.done();this.modal=this.modalService.open(this.content,{size:"md",backdrop:"static"}),history.state.print&&setTimeout(()=>{document.getElementById("printer").click()},250)}done(){var t,e;const n=(null===(e=null===(t=this.context)||void 0===t?void 0:t.urls)||void 0===e?void 0:e.tableUrl)||"/users";console.log(n),this.router.navigateByUrl(n).then(t=>{var e;t&&(null===(e=this.modal)||void 0===e||e.dismiss(),this.modalService.dismissAll())})}}return t.\u0275fac=function(e){return new(e||t)(i.Kb(o.f),i.Kb(r.a),i.Kb(c.h))},t.\u0275cmp=i.Eb({type:t,selectors:[["app-resource-details"]],viewQuery:function(t,e){var n;1&t&&i.Hc(l,!0),2&t&&i.rc(n=i.cc())&&(e.content=n.first)},inputs:{context:"context"},ngContentSelectors:f,decls:4,vars:1,consts:[["type","info",3,"close"],["content",""],[1,"modal-header"],[1,"modal-title","pt-1","mt-1"],["type","button",1,"close",2,"border","none","outline","none",3,"click"],["aria-hidden","true"],[1,"modal-body"],["id","resource-details",1,"list-group"],["class","list-group-item list-group-item-action",4,"ngFor","ngForOf"],[1,"row"],[1,"col-12","text-right"],["id","printer","class","btn btn-md btn-rounded btn-secondary px-3","printTitle","Resource Details","printSectionId","resource-details","ngxPrint","",3,"useExistingCss",4,"ngIf"],["type","button",1,"btn","btn-md","btn-rounded","btn-primary","px-3",3,"click"],[1,"nc-icon","nc-check-2"],[1,"list-group-item","list-group-item-action"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],["id","printer","printTitle","Resource Details","printSectionId","resource-details","ngxPrint","",1,"btn","btn-md","btn-rounded","btn-secondary","px-3",3,"useExistingCss"]],template:function(t,e){1&t&&(i.jc(),i.Qb(0,"ngb-alert",0),i.bc("close",(function(){return e.done()})),i.Cc(1),i.Pb(),i.Ac(2,m,15,3,"ng-template",null,1,i.Bc)),2&t&&(i.xb(1),i.Dc(e.context.title))},directives:[c.b,s.l,s.m,s.o,s.p,s.q,a.a],pipes:[s.w],styles:[""]}),t})()},qc73:function(t,e,n){"use strict";n.r(e),n.d(e,"PermissionsModule",(function(){return w}));var i=n("ofXK"),o=n("tyNb"),r=n("fXoL"),c=n("Ubi2");const s=["table"];let a=(()=>{class t{constructor(t){this.context={urls:{createUrl:"/permissions/create",detailsUrl:"/:id"},data:this.data,properties:[{key:"name",title:"Name",type:"string"},{key:"description",title:"Description",type:"string"},{key:"created_at",title:"Created At",type:"datetime"},{key:"updated_at",title:"Updated At",type:"datetime"}],title:"Permissions"},t.data.subscribe(t=>{this.data=t.permissions,this.context.data=this.data})}}return t.\u0275fac=function(e){return new(e||t)(r.Kb(o.a))},t.\u0275cmp=r.Eb({type:t,selectors:[["app-index"]],viewQuery:function(t,e){var n;1&t&&r.Hc(s,!0),2&t&&r.rc(n=r.cc())&&(e.table=n.first)},decls:2,vars:1,consts:[[3,"context"],["table",""]],template:function(t,e){1&t&&r.Lb(0,"app-table-view",0,1),2&t&&r.kc("context",e.context)},directives:[c.a],styles:[""]}),t})();var l=n("W5xj"),d=n("0PJQ"),p=n("3Pt+"),b=n("tk/3"),u=n("1kSV");const m=["content"];function f(t,e){if(1&t){const t=r.Rb();r.Qb(0,"div",2),r.Qb(1,"h6",3),r.Cc(2),r.Pb(),r.Qb(3,"button",4),r.bc("click",(function(){return r.tc(t),r.dc().ok()})),r.Qb(4,"span",5),r.Cc(5,"\xd7"),r.Pb(),r.Pb(),r.Pb(),r.Qb(6,"div",6),r.Qb(7,"form",7),r.Qb(8,"div",8),r.Qb(9,"div",9),r.Qb(10,"div",10),r.Qb(11,"label"),r.Cc(12,"Name"),r.Pb(),r.Lb(13,"input",11),r.Pb(),r.Pb(),r.Pb(),r.Qb(14,"div",8),r.Qb(15,"div",9),r.Qb(16,"div",10),r.Qb(17,"label"),r.Cc(18,"Description"),r.Pb(),r.Lb(19,"input",12),r.Pb(),r.Pb(),r.Pb(),r.Qb(20,"div",8),r.Qb(21,"div",13),r.Qb(22,"button",14),r.bc("click",(function(){return r.tc(t),r.dc().submit()})),r.Cc(23," Submit "),r.Pb(),r.Pb(),r.Pb(),r.Pb(),r.Pb()}if(2&t){const t=r.dc();r.xb(2),r.Ec(" ",t.title," "),r.xb(5),r.kc("formGroup",t.formGroup),r.xb(15),r.kc("disabled",t.uploading||!t.formGroup.dirty||!t.formGroup.valid)}}let v=(()=>{class t extends d.b{constructor(t,e,n,i){super(t,e,n,i),this.formGroup=new p.e({name:new p.c(null,p.r.required),description:new p.c(null,p.r.required)})}openModal(){return this.service.open(this.content,{backdrop:"static",keyboard:!1})}get postUrl(){return"permissionsCreateUrl"}get putUrl(){return"permissionsUpdateUrl"}get parentUrl(){return"/permissions"}}return t.\u0275fac=function(e){return new(e||t)(r.Kb(b.b),r.Kb(o.a),r.Kb(o.f),r.Kb(u.h))},t.\u0275cmp=r.Eb({type:t,selectors:[["app-permission-form"]],viewQuery:function(t,e){var n;1&t&&r.Hc(m,!0),2&t&&r.rc(n=r.cc())&&(e.content=n.first)},features:[r.ub],decls:4,vars:1,consts:[["type","info",3,"close"],["content",""],[1,"modal-header"],[1,"modal-title","pt-1","mt-1"],["type","button",1,"close",2,"border","none","outline","none",3,"click"],["aria-hidden","true"],[1,"modal-body"],["autocomplete","off",3,"formGroup"],[1,"row"],[1,"col-12","px-3"],[1,"form-group"],["type","text","placeholder","Name","formControlName","name","autocomplete","off",1,"form-control"],["type","text","placeholder","Description","formControlName","description","autocomplete","off",1,"form-control"],[1,"update","ml-auto","mr-auto"],["type","submit",1,"btn","btn-primary","btn-round",3,"disabled","click"]],template:function(t,e){1&t&&(r.Qb(0,"ngb-alert",0),r.bc("close",(function(){return e.ok()})),r.Cc(1),r.Pb(),r.Ac(2,f,24,3,"ng-template",null,1,r.Bc)),2&t&&(r.xb(1),r.Dc(e.message))},directives:[u.b,p.t,p.l,p.f,p.b,p.k,p.d],styles:[""]}),t})();var h=n("AMeL");let y=(()=>{class t{ngOnInit(){const t=l.a.Json2Permission(history.state.resource);this.context={urls:{tableUrl:"/permissions"},data:t,properties:[{key:"name",title:"Name",type:"string"},{key:"description",title:"Description",type:"string"},{key:"created_at",title:"Created At",type:"datetime"},{key:"updated_at",title:"Updated At",type:"datetime"}],title:"Details of permission "+(null==t?void 0:t.name)}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Eb({type:t,selectors:[["app-permission-details"]],decls:1,vars:1,consts:[[3,"context"]],template:function(t,e){1&t&&r.Lb(0,"app-resource-details",0),2&t&&r.kc("context",e.context)},directives:[h.a],styles:[""]}),t})();var x=n("w+MF");const g=[{path:"",component:a,runGuardsAndResolvers:"always",resolve:{permissions:l.a},children:[{path:"create",component:v},{path:":id/edit",component:v},{path:":id/details",pathMatch:"full",component:y},{path:":id/delete",pathMatch:"full",component:(()=>{class t{constructor(){}ngOnInit(){this.context={deleteUrl:"permissionsDeleteUrl",data:history.state.resource,title:"Delete Permission Resource!",description:"Are you sure to delete this permission?"}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Eb({type:t,selectors:[["app-permission-delete"]],decls:1,vars:1,consts:[[3,"context"]],template:function(t,e){1&t&&r.Lb(0,"app-resource-delete",0),2&t&&r.kc("context",e.context)},directives:[x.a],styles:[""]}),t})()}]}];let P=(()=>{class t{}return t.\u0275mod=r.Ib({type:t}),t.\u0275inj=r.Hb({factory:function(e){return new(e||t)},imports:[[o.i.forChild(g)],o.i]}),t})();var k=n("uP1v"),Q=n("RDNO");let w=(()=>{class t{}return t.\u0275mod=r.Ib({type:t}),t.\u0275inj=r.Hb({factory:function(e){return new(e||t)},providers:[l.a,{provide:b.a,useClass:Q.a,multi:!0}],imports:[[i.c,P,u.i,o.i,p.p,k.a]]}),t})()}}]);