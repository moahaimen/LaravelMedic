(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"8ar1":function(t,e,r){"use strict";r.r(e),r.d(e,"CategoriesModule",(function(){return A}));var o=r("ofXK"),c=r("tyNb"),n=r("fXoL"),a=r("Ubi2");const i=["table"];let s=(()=>{class t{constructor(t){this.context={urls:{createUrl:"/categories/create",detailsUrl:"/:id"},data:this.data,properties:[{key:"name",title:"Name",type:"string"},{key:"description",title:"Description",type:"string"},{key:"created_at",title:"Created At",type:"datetime"},{key:"updated_at",title:"Updated At",type:"datetime"}],title:"Categories"},t.data.subscribe(t=>{this.data=t.categories,this.context.data=this.data})}}return t.\u0275fac=function(e){return new(e||t)(n.Kb(c.a))},t.\u0275cmp=n.Eb({type:t,selectors:[["app-index"]],viewQuery:function(t,e){var r;1&t&&n.Gc(i,!0),2&t&&n.qc(r=n.cc())&&(e.table=r.first)},decls:2,vars:1,consts:[[3,"context"],["table",""]],template:function(t,e){1&t&&n.Lb(0,"app-table-view",0,1),2&t&&n.jc("context",e.context)},directives:[a.a],styles:[""]}),t})();var l=r("AytR"),p=r("9xMI");class d extends p.a{constructor(t,e,r,o,c){super(t),this.id=t,this.name=e,this.description=r,this.created_at=o,this.updated_at=c}}var u=r("lJxs"),b=r("tk/3");let m=(()=>{class t{constructor(t){this.http=t}static Json2Category(t){return t?new d(t.id,t.name,t.description,t.created_at,t.updated_at):null}resolve(e,r){return this.http.get(`${l.a.apiUrl}/${l.a.categoriesFetchUrl}`).pipe(Object(u.a)(e=>e.map(e=>t.Json2Category(e))))}}return t.\u0275fac=function(e){return new(e||t)(n.Yb(b.b))},t.\u0275prov=n.Gb({token:t,factory:t.\u0275fac}),t})();var f=r("w+MF");let y=(()=>{class t{constructor(){}ngOnInit(){this.context={deleteUrl:"categoriesDeleteUrl",data:history.state.resource,title:"Delete Category Resource!",description:"Are you sure to delete this category?"}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Eb({type:t,selectors:[["app-category-delete"]],decls:1,vars:1,consts:[[3,"context"]],template:function(t,e){1&t&&n.Lb(0,"app-resource-delete",0),2&t&&n.jc("context",e.context)},directives:[f.a],styles:[""]}),t})();var h=r("AMeL");let v=(()=>{class t{ngOnInit(){const t=m.Json2Category(history.state.resource);this.context={urls:{tableUrl:"/categories"},data:t,properties:[{key:"name",title:"Name",type:"string"},{key:"description",title:"Description",type:"string"},{key:"created_at",title:"Created At",type:"datetime"},{key:"updated_at",title:"Updated At",type:"datetime"}],title:"Details of category "+(null==t?void 0:t.name)}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Eb({type:t,selectors:[["app-category-details"]],decls:1,vars:1,consts:[[3,"context"]],template:function(t,e){1&t&&n.Lb(0,"app-resource-details",0),2&t&&n.jc("context",e.context)},directives:[h.a],styles:[""]}),t})();var g=r("0PJQ"),x=r("3Pt+"),w=r("1kSV");const k=["content"];function P(t,e){if(1&t){const t=n.Rb();n.Qb(0,"div",2),n.Qb(1,"h6",3),n.Bc(2),n.Pb(),n.Qb(3,"button",4),n.bc("click",(function(){return n.sc(t),n.dc().ok()})),n.Qb(4,"span",5),n.Bc(5,"\xd7"),n.Pb(),n.Pb(),n.Pb(),n.Qb(6,"div",6),n.Qb(7,"form",7),n.Qb(8,"div",8),n.Qb(9,"div",9),n.Qb(10,"div",10),n.Qb(11,"label"),n.Bc(12,"Name"),n.Pb(),n.Lb(13,"input",11),n.Pb(),n.Pb(),n.Pb(),n.Qb(14,"div",8),n.Qb(15,"div",9),n.Qb(16,"div",10),n.Qb(17,"label"),n.Bc(18,"Description"),n.Pb(),n.Lb(19,"input",12),n.Pb(),n.Pb(),n.Pb(),n.Qb(20,"div",8),n.Qb(21,"div",13),n.Qb(22,"button",14),n.bc("click",(function(){return n.sc(t),n.dc().submit()})),n.Bc(23," Submit "),n.Pb(),n.Pb(),n.Pb(),n.Pb(),n.Pb()}if(2&t){const t=n.dc();n.xb(2),n.Cc(t.title),n.xb(5),n.jc("formGroup",t.formGroup),n.xb(15),n.jc("disabled",!t.formGroup.dirty||!t.formGroup.valid)}}let Q=(()=>{class t extends g.b{constructor(t,e,r,o){super(t,e,r,o),this.formGroup=new x.e({name:new x.c(null,x.q.required),description:new x.c(null,x.q.required)})}openModal(){return this.service.open(this.content,{backdrop:"static"})}postUrl(){return"categoriesCreateUrl"}putUrl(){return"categoriesUpdateUrl"}}return t.\u0275fac=function(e){return new(e||t)(n.Kb(b.b),n.Kb(c.a),n.Kb(c.f),n.Kb(w.d))},t.\u0275cmp=n.Eb({type:t,selectors:[["app-category-form"]],viewQuery:function(t,e){var r;1&t&&n.Gc(k,!0),2&t&&n.qc(r=n.cc())&&(e.content=r.first)},features:[n.ub],decls:4,vars:1,consts:[["type","info",3,"close"],["content",""],[1,"modal-header"],[1,"modal-title","pt-1","mt-1"],["type","button",1,"close",2,"border","none","outline","none",3,"click"],["aria-hidden","true"],[1,"modal-body"],[3,"formGroup"],[1,"row"],[1,"col-12","px-3"],[1,"form-group"],["type","text","placeholder","Name","formControlName","name","autocomplete","off",1,"form-control"],["type","text","placeholder","Description","formControlName","description","autocomplete","off",1,"form-control"],[1,"update","ml-auto","mr-auto"],["type","submit",1,"btn","btn-primary","btn-round",3,"disabled","click"]],template:function(t,e){1&t&&(n.Qb(0,"ngb-alert",0),n.bc("close",(function(){return e.ok()})),n.Bc(1),n.Pb(),n.zc(2,P,24,3,"ng-template",null,1,n.Ac)),2&t&&(n.xb(1),n.Cc(e.message))},directives:[w.b,x.s,x.k,x.f,x.b,x.j,x.d],styles:[""]}),t})();const C=[{path:"",component:s,resolve:{categories:m},children:[{path:"create",component:Q},{path:":id/edit",component:Q},{path:":id/details",pathMatch:"full",component:v},{path:":id/delete",pathMatch:"full",component:y}]}];let U=(()=>{class t{}return t.\u0275mod=n.Ib({type:t}),t.\u0275inj=n.Hb({factory:function(e){return new(e||t)},imports:[[c.i.forChild(C)],c.i]}),t})();var j=r("uP1v"),G=r("RDNO");let A=(()=>{class t{}return t.\u0275mod=n.Ib({type:t}),t.\u0275inj=n.Hb({factory:function(e){return new(e||t)},providers:[m,{provide:b.a,useClass:G.a,multi:!0}],imports:[[o.b,U,w.e,c.i,x.o,j.a]]}),t})()}}]);