(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{AMeL:function(t,e,n){"use strict";n.d(e,"a",(function(){return y}));var i=n("fXoL"),o=n("tyNb"),c=n("OC8m"),r=n("1kSV"),s=n("ofXK"),a=n("m1XX");const l=["content"];function p(t,e){1&t&&(i.Rb(0,"div"),i.jc(1,0,["[select]","prop.component","[property]","prop","[value]","context.data[prop.key]"]),i.Qb())}function d(t,e){if(1&t&&(i.Rb(0,"div"),i.Rb(1,"h6"),i.Dc(2),i.Qb(),i.Rb(3,"small"),i.Dc(4),i.fc(5,"uppercase"),i.Qb(),i.Qb()),2&t){const t=i.ec().$implicit,e=i.ec(2);i.yb(2),i.Ec(e.context.data.toTitle(t)),i.yb(2),i.Ec(i.gc(5,2,t.title))}}function b(t,e){if(1&t&&(i.Rb(0,"div",14),i.Pb(1,15),i.Bc(2,p,2,0,"div",16),i.Bc(3,d,6,4,"div",17),i.Ob(),i.Qb()),2&t){const t=e.$implicit;i.yb(1),i.lc("ngSwitch",t.type),i.yb(1),i.lc("ngSwitchCase","component")}}function u(t,e){1&t&&(i.Rb(0,"button",18),i.Dc(1," Print "),i.Qb()),2&t&&i.lc("useExistingCss",!0)}function m(t,e){if(1&t){const t=i.Sb();i.Rb(0,"div",2),i.Rb(1,"h6",3),i.Dc(2),i.Qb(),i.Rb(3,"button",4),i.cc("click",(function(){return i.uc(t),i.ec().done()})),i.Rb(4,"span",5),i.Dc(5,"\xd7"),i.Qb(),i.Qb(),i.Qb(),i.Rb(6,"div",6),i.Rb(7,"div",7),i.Bc(8,b,4,2,"div",8),i.Qb(),i.Rb(9,"div",9),i.Rb(10,"div",10),i.Bc(11,u,2,1,"button",11),i.Rb(12,"button",12),i.cc("click",(function(){return i.uc(t),i.ec().done()})),i.Mb(13,"i",13),i.Dc(14," Done "),i.Qb(),i.Qb(),i.Qb(),i.Qb()}if(2&t){const t=i.ec();i.yb(2),i.Ec(t.context.title),i.yb(6),i.lc("ngForOf",t.context.properties),i.yb(3),i.lc("ngIf",t.context.printable)}}const f=["*"];let y=(()=>{class t{constructor(t,e,n){this.router=t,this.notifier=e,this.modalService=n}ngAfterViewInit(){if(!this.context||!this.context.data||!this.context.properties)return this.notifier.warning("Something went wrong, Undefined context","Resource Details"),void this.done();this.modal=this.modalService.open(this.content,{size:"md",backdrop:"static"}),history.state.print&&setTimeout(()=>{document.getElementById("printer").click()},250)}done(){var t,e;const n=(null===(e=null===(t=this.context)||void 0===t?void 0:t.urls)||void 0===e?void 0:e.tableUrl)||"/users";console.log(n),this.router.navigateByUrl(n).then(t=>{var e;t&&(null===(e=this.modal)||void 0===e||e.dismiss(),this.modalService.dismissAll())})}}return t.\u0275fac=function(e){return new(e||t)(i.Lb(o.f),i.Lb(c.a),i.Lb(r.h))},t.\u0275cmp=i.Fb({type:t,selectors:[["app-resource-details"]],viewQuery:function(t,e){var n;1&t&&i.Ic(l,!0),2&t&&i.sc(n=i.dc())&&(e.content=n.first)},inputs:{context:"context"},ngContentSelectors:f,decls:4,vars:1,consts:[["type","info",3,"close"],["content",""],[1,"modal-header"],[1,"modal-title","pt-1","mt-1"],["type","button",1,"close",2,"border","none","outline","none",3,"click"],["aria-hidden","true"],[1,"modal-body"],["id","resource-details",1,"list-group"],["class","list-group-item list-group-item-action",4,"ngFor","ngForOf"],[1,"row"],[1,"col-12","text-right"],["id","printer","class","btn btn-md btn-rounded btn-secondary px-3","printTitle","Resource Details","printSectionId","resource-details","ngxPrint","",3,"useExistingCss",4,"ngIf"],["type","button",1,"btn","btn-md","btn-rounded","btn-primary","px-3",3,"click"],[1,"nc-icon","nc-check-2"],[1,"list-group-item","list-group-item-action"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],["id","printer","printTitle","Resource Details","printSectionId","resource-details","ngxPrint","",1,"btn","btn-md","btn-rounded","btn-secondary","px-3",3,"useExistingCss"]],template:function(t,e){1&t&&(i.kc(),i.Rb(0,"ngb-alert",0),i.cc("close",(function(){return e.done()})),i.Dc(1),i.Qb(),i.Bc(2,m,15,3,"ng-template",null,1,i.Cc)),2&t&&(i.yb(1),i.Ec(e.context.title))},directives:[r.b,s.m,s.n,s.p,s.q,s.r,a.a],pipes:[s.x],styles:[""]}),t})()},qc73:function(t,e,n){"use strict";n.r(e),n.d(e,"PermissionsModule",(function(){return k}));var i=n("ofXK"),o=n("tyNb"),c=n("fXoL"),r=n("Ubi2");const s=["table"];let a=(()=>{class t{constructor(t){this.context={urls:{createUrl:"/permissions/create",detailsUrl:"/:id"},data:this.data,properties:[{key:"name",title:"Name",type:"string"},{key:"description",title:"Description",type:"string"},{key:"created_at",title:"Created At",type:"datetime"},{key:"updated_at",title:"Updated At",type:"datetime"}],title:"Permissions"},t.data.subscribe(t=>{this.data=t.permissions,this.context.data=this.data})}}return t.\u0275fac=function(e){return new(e||t)(c.Lb(o.a))},t.\u0275cmp=c.Fb({type:t,selectors:[["app-index"]],viewQuery:function(t,e){var n;1&t&&c.Ic(s,!0),2&t&&c.sc(n=c.dc())&&(e.table=n.first)},decls:2,vars:1,consts:[[3,"context"],["table",""]],template:function(t,e){1&t&&c.Mb(0,"app-table-view",0,1),2&t&&c.lc("context",e.context)},directives:[r.a],styles:[""]}),t})();var l=n("W5xj"),p=n("0PJQ"),d=n("3Pt+"),b=n("tk/3"),u=n("1kSV");const m=["content"];function f(t,e){if(1&t){const t=c.Sb();c.Rb(0,"div",2),c.Rb(1,"h6",3),c.Dc(2),c.Qb(),c.Rb(3,"button",4),c.cc("click",(function(){return c.uc(t),c.ec().ok()})),c.Rb(4,"span",5),c.Dc(5,"\xd7"),c.Qb(),c.Qb(),c.Qb(),c.Rb(6,"div",6),c.Rb(7,"form",7),c.Rb(8,"div",8),c.Rb(9,"div",9),c.Rb(10,"div",10),c.Rb(11,"label"),c.Dc(12,"Name"),c.Qb(),c.Mb(13,"input",11),c.Qb(),c.Qb(),c.Qb(),c.Rb(14,"div",8),c.Rb(15,"div",9),c.Rb(16,"div",10),c.Rb(17,"label"),c.Dc(18,"Description"),c.Qb(),c.Mb(19,"input",12),c.Qb(),c.Qb(),c.Qb(),c.Rb(20,"div",8),c.Rb(21,"div",13),c.Rb(22,"button",14),c.cc("click",(function(){return c.uc(t),c.ec().submit()})),c.Dc(23," Submit "),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Qb()}if(2&t){const t=c.ec();c.yb(2),c.Fc(" ",t.title," "),c.yb(5),c.lc("formGroup",t.formGroup),c.yb(15),c.lc("disabled",t.uploading||!t.formGroup.dirty||!t.formGroup.valid)}}let y=(()=>{class t extends p.b{constructor(t,e,n,i){super(t,e,n,i),this.formGroup=new d.e({name:new d.c(null,d.r.required),description:new d.c(null,d.r.required)})}openModal(){return this.service.open(this.content,{backdrop:"static",keyboard:!1})}get postUrl(){return"permissionsCreateUrl"}get putUrl(){return"permissionsUpdateUrl"}get parentUrl(){return"/permissions"}}return t.\u0275fac=function(e){return new(e||t)(c.Lb(b.b),c.Lb(o.a),c.Lb(o.f),c.Lb(u.h))},t.\u0275cmp=c.Fb({type:t,selectors:[["app-permission-form"]],viewQuery:function(t,e){var n;1&t&&c.Ic(m,!0),2&t&&c.sc(n=c.dc())&&(e.content=n.first)},features:[c.vb],decls:4,vars:1,consts:[["type","info",3,"close"],["content",""],[1,"modal-header"],[1,"modal-title","pt-1","mt-1"],["type","button",1,"close",2,"border","none","outline","none",3,"click"],["aria-hidden","true"],[1,"modal-body"],["autocomplete","off",3,"formGroup"],[1,"row"],[1,"col-12","px-3"],[1,"form-group"],["type","text","placeholder","Name","formControlName","name","autocomplete","off",1,"form-control"],["type","text","placeholder","Description","formControlName","description","autocomplete","off",1,"form-control"],[1,"update","ml-auto","mr-auto"],["type","submit",1,"btn","btn-primary","btn-round",3,"disabled","click"]],template:function(t,e){1&t&&(c.Rb(0,"ngb-alert",0),c.cc("close",(function(){return e.ok()})),c.Dc(1),c.Qb(),c.Bc(2,f,24,3,"ng-template",null,1,c.Cc)),2&t&&(c.yb(1),c.Ec(e.message))},directives:[u.b,d.t,d.l,d.f,d.b,d.k,d.d],styles:[""]}),t})();var v=n("AMeL");let h=(()=>{class t{ngOnInit(){const t=l.a.Json2Permission(history.state.resource);this.context={urls:{tableUrl:"/permissions"},data:t,properties:[{key:"name",title:"Name",type:"string"},{key:"description",title:"Description",type:"string"},{key:"created_at",title:"Created At",type:"datetime"},{key:"updated_at",title:"Updated At",type:"datetime"}],title:"Details of permission "+(null==t?void 0:t.name)}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Fb({type:t,selectors:[["app-permission-details"]],decls:1,vars:1,consts:[[3,"context"]],template:function(t,e){1&t&&c.Mb(0,"app-resource-details",0),2&t&&c.lc("context",e.context)},directives:[v.a],styles:[""]}),t})();var g=n("w+MF");const x=[{path:"",component:a,runGuardsAndResolvers:"always",resolve:{permissions:l.a},children:[{path:"create",component:y},{path:":id/edit",component:y},{path:":id/details",pathMatch:"full",component:h},{path:":id/delete",pathMatch:"full",component:(()=>{class t{constructor(){}ngOnInit(){this.context={deleteUrl:"permissionsDeleteUrl",data:history.state.resource,title:"Delete Permission Resource!",description:"Are you sure to delete this permission?"}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Fb({type:t,selectors:[["app-permission-delete"]],decls:1,vars:1,consts:[[3,"context"]],template:function(t,e){1&t&&c.Mb(0,"app-resource-delete",0),2&t&&c.lc("context",e.context)},directives:[g.a],styles:[""]}),t})()}]}];let R=(()=>{class t{}return t.\u0275mod=c.Jb({type:t}),t.\u0275inj=c.Ib({factory:function(e){return new(e||t)},imports:[[o.i.forChild(x)],o.i]}),t})();var Q=n("uP1v"),w=n("RDNO");let k=(()=>{class t{}return t.\u0275mod=c.Jb({type:t}),t.\u0275inj=c.Ib({factory:function(e){return new(e||t)},providers:[l.a,{provide:b.a,useClass:w.a,multi:!0}],imports:[[i.c,R,u.i,o.i,d.p,Q.a]]}),t})()}}]);