(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{qc73:function(t,e,r){"use strict";r.r(e),r.d(e,"PermissionsModule",(function(){return A}));var n=r("ofXK"),s=r("tyNb"),o=r("fXoL"),i=r("Ubi2");const c=["table"];let a=(()=>{class t{constructor(t){this.context={urls:{createUrl:"/permissions/create",detailsUrl:"/:id"},data:this.data,properties:[{key:"name",title:"Name",type:"string"},{key:"description",title:"Description",type:"string"},{key:"created_at",title:"Created At",type:"datetime"},{key:"updated_at",title:"Updated At",type:"datetime"}],title:"Permissions"},t.data.subscribe(t=>{this.data=t.permissions,this.context.data=this.data})}}return t.\u0275fac=function(e){return new(e||t)(o.Kb(s.a))},t.\u0275cmp=o.Eb({type:t,selectors:[["app-index"]],viewQuery:function(t,e){var r;1&t&&o.Gc(c,!0),2&t&&o.qc(r=o.cc())&&(e.table=r.first)},decls:2,vars:1,consts:[[3,"context"],["table",""]],template:function(t,e){1&t&&o.Lb(0,"app-table-view",0,1),2&t&&o.jc("context",e.context)},directives:[i.a],styles:[""]}),t})();var l=r("AytR"),p=r("9xMI");class d extends p.a{constructor(t,e,r,n,s){super(t),this.id=t,this.name=e,this.description=r,this.created_at=n,this.updated_at=s}}var u=r("lJxs"),b=r("tk/3");let m=(()=>{class t{constructor(t){this.http=t}static Json2Permission(t){return t?new d(t.id,t.name,t.description,t.created_at,t.updated_at):null}resolve(e,r){return this.http.get(`${l.a.apiUrl}/${l.a.permissionsFetchUrl}`).pipe(Object(u.a)(e=>e.map(e=>t.Json2Permission(e))))}}return t.\u0275fac=function(e){return new(e||t)(o.Yb(b.b))},t.\u0275prov=o.Gb({token:t,factory:t.\u0275fac}),t})();var f=r("0PJQ"),y=r("3Pt+"),h=r("1kSV");const v=["content"];function P(t,e){if(1&t){const t=o.Rb();o.Qb(0,"div",2),o.Qb(1,"h6",3),o.Bc(2),o.Pb(),o.Qb(3,"button",4),o.bc("click",(function(){return o.sc(t),o.dc().ok()})),o.Qb(4,"span",5),o.Bc(5,"\xd7"),o.Pb(),o.Pb(),o.Pb(),o.Qb(6,"div",6),o.Qb(7,"form",7),o.Qb(8,"div",8),o.Qb(9,"div",9),o.Qb(10,"div",10),o.Qb(11,"label"),o.Bc(12,"Name"),o.Pb(),o.Lb(13,"input",11),o.Pb(),o.Pb(),o.Pb(),o.Qb(14,"div",8),o.Qb(15,"div",9),o.Qb(16,"div",10),o.Qb(17,"label"),o.Bc(18,"Description"),o.Pb(),o.Lb(19,"input",12),o.Pb(),o.Pb(),o.Pb(),o.Qb(20,"div",8),o.Qb(21,"div",13),o.Qb(22,"button",14),o.bc("click",(function(){return o.sc(t),o.dc().submit()})),o.Bc(23," Submit "),o.Pb(),o.Pb(),o.Pb(),o.Pb(),o.Pb()}if(2&t){const t=o.dc();o.xb(2),o.Dc(" ",t.title," "),o.xb(5),o.jc("formGroup",t.formGroup),o.xb(15),o.jc("disabled",!t.formGroup.dirty||!t.formGroup.valid)}}let x=(()=>{class t extends f.b{constructor(t,e,r,n){super(t,e,r,n),this.formGroup=new y.e({name:new y.c(null,y.q.required),description:new y.c(null,y.q.required)})}openModal(){return this.service.open(this.content,{backdrop:"static",keyboard:!1})}postUrl(){return"permissionsCreateUrl"}putUrl(){return"permissionsUpdateUrl"}}return t.\u0275fac=function(e){return new(e||t)(o.Kb(b.b),o.Kb(s.a),o.Kb(s.f),o.Kb(h.d))},t.\u0275cmp=o.Eb({type:t,selectors:[["app-permission-form"]],viewQuery:function(t,e){var r;1&t&&o.Gc(v,!0),2&t&&o.qc(r=o.cc())&&(e.content=r.first)},features:[o.ub],decls:4,vars:1,consts:[["type","info",3,"close"],["content",""],[1,"modal-header"],[1,"modal-title","pt-1","mt-1"],["type","button",1,"close",2,"border","none","outline","none",3,"click"],["aria-hidden","true"],[1,"modal-body"],["autocomplete","off",3,"formGroup"],[1,"row"],[1,"col-12","px-3"],[1,"form-group"],["type","text","placeholder","Name","formControlName","name","autocomplete","off",1,"form-control"],["type","text","placeholder","Description","formControlName","description","autocomplete","off",1,"form-control"],[1,"update","ml-auto","mr-auto"],["type","submit",1,"btn","btn-primary","btn-round",3,"disabled","click"]],template:function(t,e){1&t&&(o.Qb(0,"ngb-alert",0),o.bc("close",(function(){return e.ok()})),o.Bc(1),o.Pb(),o.zc(2,P,24,3,"ng-template",null,1,o.Ac)),2&t&&(o.xb(1),o.Cc(e.message))},directives:[h.b,y.s,y.k,y.f,y.b,y.j,y.d],styles:[""]}),t})();var w=r("AMeL");let k=(()=>{class t{ngOnInit(){const t=m.Json2Permission(history.state.resource);this.context={urls:{tableUrl:"/permissions"},data:t,properties:[{key:"name",title:"Name",type:"string"},{key:"description",title:"Description",type:"string"},{key:"created_at",title:"Created At",type:"datetime"},{key:"updated_at",title:"Updated At",type:"datetime"}],title:"Details of permission "+(null==t?void 0:t.name)}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Eb({type:t,selectors:[["app-permission-details"]],decls:1,vars:1,consts:[[3,"context"]],template:function(t,e){1&t&&o.Lb(0,"app-resource-details",0),2&t&&o.jc("context",e.context)},directives:[w.a],styles:[""]}),t})();var Q=r("w+MF");const U=[{path:"",component:a,runGuardsAndResolvers:"always",resolve:{permissions:m},children:[{path:"create",component:x},{path:":id/edit",component:x},{path:":id/details",pathMatch:"full",component:k},{path:":id/delete",pathMatch:"full",component:(()=>{class t{constructor(){}ngOnInit(){this.context={deleteUrl:"permissionsDeleteUrl",data:history.state.resource,title:"Delete Permission Resource!",description:"Are you sure to delete this permission?"}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Eb({type:t,selectors:[["app-permission-delete"]],decls:1,vars:1,consts:[[3,"context"]],template:function(t,e){1&t&&o.Lb(0,"app-resource-delete",0),2&t&&o.jc("context",e.context)},directives:[Q.a],styles:[""]}),t})()}]}];let g=(()=>{class t{}return t.\u0275mod=o.Ib({type:t}),t.\u0275inj=o.Hb({factory:function(e){return new(e||t)},imports:[[s.i.forChild(U)],s.i]}),t})();var G=r("uP1v"),j=r("RDNO");let A=(()=>{class t{}return t.\u0275mod=o.Ib({type:t}),t.\u0275inj=o.Hb({factory:function(e){return new(e||t)},providers:[m,{provide:b.a,useClass:j.a,multi:!0}],imports:[[n.b,g,h.e,s.i,y.o,G.a]]}),t})()}}]);