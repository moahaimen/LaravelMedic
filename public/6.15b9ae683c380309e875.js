(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{p2q8:function(t,e,r){"use strict";r.r(e),r.d(e,"BrandsModule",(function(){return F}));var n=r("ofXK"),c=r("tyNb"),o=r("fXoL"),i=r("Ubi2");const a=["table"];let s=(()=>{class t{constructor(t){this.context={urls:{createUrl:"create",detailsUrl:":id"},data:this.data,properties:[{key:"name",title:"Name",type:"string"},{key:"description",title:"Description",type:"string"},{key:"created_at",title:"Created At",type:"datetime"},{key:"updated_at",title:"Updated At",type:"datetime"}],title:"Brands"},t.data.subscribe(t=>{this.data=t.brands,this.context.data=this.data})}}return t.\u0275fac=function(e){return new(e||t)(o.Kb(c.a))},t.\u0275cmp=o.Eb({type:t,selectors:[["app-index"]],viewQuery:function(t,e){var r;1&t&&o.Fc(a,!0),2&t&&o.pc(r=o.bc())&&(e.table=r.first)},decls:2,vars:1,consts:[[3,"context"],["table",""]],template:function(t,e){1&t&&o.Lb(0,"app-table-view",0,1),2&t&&o.ic("context",e.context)},directives:[i.a],styles:[""]}),t})();var b=r("AytR"),l=r("tk/3");let d=(()=>{class t{constructor(t){this.http=t}resolve(t,e){return this.http.get(`${b.a.apiUrl}/${b.a.brandsFetchUrl}`)}}return t.\u0275fac=function(e){return new(e||t)(o.Xb(l.b))},t.\u0275prov=o.Gb({token:t,factory:t.\u0275fac}),t})();var p=r("w+MF");let u=(()=>{class t{constructor(){}ngOnInit(){this.context={deleteUrl:"brandsDeleteUrl",data:history.state.resource,title:"Delete Brand Resource!",description:"Are you sure to delete this brand?"}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Eb({type:t,selectors:[["app-brand-delete"]],decls:1,vars:1,consts:[[3,"context"]],template:function(t,e){1&t&&o.Lb(0,"app-resource-delete",0),2&t&&o.ic("context",e.context)},directives:[p.a],styles:[""]}),t})();var m=r("1kSV");const f=["content"];function h(t,e){if(1&t&&(o.Pb(0,"div",10),o.Pb(1,"h6"),o.Ac(2),o.Ob(),o.Pb(3,"small"),o.Ac(4),o.dc(5,"uppercase"),o.Ob(),o.Ob()),2&t){const t=e.$implicit,r=o.cc(2);o.xb(2),o.Bc(r.brand[t]),o.xb(2),o.Bc(o.ec(5,2,t))}}function v(t,e){if(1&t){const t=o.Qb();o.Pb(0,"div",2),o.Pb(1,"h6",3),o.Ac(2),o.Ob(),o.Ob(),o.Pb(3,"div",4),o.Pb(4,"div",5),o.yc(5,h,6,4,"div",6),o.Ob(),o.Pb(6,"div",7),o.Pb(7,"div",8),o.Pb(8,"button",9),o.ac("click",(function(){return o.rc(t),o.cc().ok()})),o.Ac(9,"Ok"),o.Ob(),o.Ob(),o.Ob(),o.Ob()}if(2&t){const t=o.cc();o.xb(2),o.Bc(t.message),o.xb(3),o.ic("ngForOf",t.attributes)}}let y=(()=>{class t{constructor(t,e){this.modalService=t,this.router=e}ngOnInit(){this.brand=history.state.resource,this.brand?(this.attributes=Object.keys(this.brand),this.message="Details of brand: "+this.brand.name):this.ok()}ngAfterViewInit(){this.modal=this.modalService.open(this.content,{size:"md",backdrop:"static"})}ok(){this.router.navigateByUrl("/brands"),this.modal&&this.modal.dismiss()}}return t.\u0275fac=function(e){return new(e||t)(o.Kb(m.d),o.Kb(c.b))},t.\u0275cmp=o.Eb({type:t,selectors:[["app-brand-details"]],viewQuery:function(t,e){var r;1&t&&o.Fc(f,!0),2&t&&o.pc(r=o.bc())&&(e.content=r.first)},decls:4,vars:1,consts:[["type","info",3,"close"],["content",""],[1,"modal-header"],[1,"modal-title","pt-1","mt-1"],[1,"modal-body"],[1,"list-group"],["class","list-group-item list-group-item-action",4,"ngFor","ngForOf"],[1,"row"],[1,"col-12","text-align"],[1,"btn","btn-primary","btn-rounded",3,"click"],[1,"list-group-item","list-group-item-action"]],template:function(t,e){1&t&&(o.Pb(0,"ngb-alert",0),o.ac("close",(function(){return e.ok()})),o.Ac(1),o.Ob(),o.yc(2,v,10,2,"ng-template",null,1,o.zc)),2&t&&(o.xb(1),o.Bc(e.message))},directives:[m.b,n.j],pipes:[n.p],styles:[""]}),t})();var O=r("0PJQ"),P=r("3Pt+");const k=["content"];function g(t,e){if(1&t){const t=o.Qb();o.Pb(0,"div",2),o.Pb(1,"h6",3),o.Ac(2),o.Ob(),o.Pb(3,"button",4),o.ac("click",(function(){return o.rc(t),o.cc().ok()})),o.Pb(4,"span",5),o.Ac(5,"\xd7"),o.Ob(),o.Ob(),o.Ob(),o.Pb(6,"div",6),o.Pb(7,"form",7),o.Pb(8,"div",8),o.Pb(9,"div",9),o.Pb(10,"div",10),o.Pb(11,"label"),o.Ac(12,"Name"),o.Ob(),o.Lb(13,"input",11),o.Ob(),o.Ob(),o.Ob(),o.Pb(14,"div",8),o.Pb(15,"div",9),o.Pb(16,"div",10),o.Pb(17,"label"),o.Ac(18,"Description"),o.Ob(),o.Lb(19,"input",12),o.Ob(),o.Ob(),o.Ob(),o.Pb(20,"div",8),o.Pb(21,"div",13),o.Pb(22,"button",14),o.ac("click",(function(){return o.rc(t),o.cc().submit()})),o.Ac(23," Submit "),o.Ob(),o.Ob(),o.Ob(),o.Ob(),o.Ob()}if(2&t){const t=o.cc();o.xb(2),o.Bc(t.title),o.xb(5),o.ic("formGroup",t.formGroup),o.xb(15),o.ic("disabled",!t.formGroup.valid)}}let w=(()=>{class t extends O.b{constructor(t,e,r,n){super(t,e,r,n),this.formGroup=new P.e({name:new P.c(null,P.q.required),description:new P.c(null,P.q.required)})}openModal(){return this.service.open(this.content,{backdrop:"static"})}postUrl(){return"brandsCreateUrl"}putUrl(){return"brandsUpdateUrl"}}return t.\u0275fac=function(e){return new(e||t)(o.Kb(l.b),o.Kb(c.a),o.Kb(c.b),o.Kb(m.d))},t.\u0275cmp=o.Eb({type:t,selectors:[["app-brand-form"]],viewQuery:function(t,e){var r;1&t&&o.Fc(k,!0),2&t&&o.pc(r=o.bc())&&(e.content=r.first)},features:[o.ub],decls:4,vars:1,consts:[["type","info",3,"close"],["content",""],[1,"modal-header"],[1,"modal-title","pt-1","mt-1"],["type","button",1,"close",2,"border","none","outline","none",3,"click"],["aria-hidden","true"],[1,"modal-body"],[3,"formGroup"],[1,"row"],[1,"col-12","px-3"],[1,"form-group"],["type","text","placeholder","Name","formControlName","name","autocomplete","off",1,"form-control"],["type","text","placeholder","Description","formControlName","description","autocomplete","off",1,"form-control"],[1,"update","ml-auto","mr-auto"],["type","submit",1,"btn","btn-primary","btn-round",3,"disabled","click"]],template:function(t,e){1&t&&(o.Pb(0,"ngb-alert",0),o.ac("close",(function(){return e.ok()})),o.Ac(1),o.Ob(),o.yc(2,g,24,3,"ng-template",null,1,o.zc)),2&t&&(o.xb(1),o.Bc(e.message))},directives:[m.b,P.s,P.k,P.f,P.b,P.j,P.d],styles:[""]}),t})();const x=[{path:"",component:s,resolve:{brands:d},children:[{path:"create",component:w},{path:":id/edit",component:w},{path:":id/details",pathMatch:"full",component:y},{path:":id/delete",pathMatch:"full",component:u}]}];let A=(()=>{class t{}return t.\u0275mod=o.Ib({type:t}),t.\u0275inj=o.Hb({factory:function(e){return new(e||t)},imports:[[c.e.forChild(x)],c.e]}),t})();var U=r("uP1v"),B=r("RDNO");let F=(()=>{class t{}return t.\u0275mod=o.Ib({type:t}),t.\u0275inj=o.Hb({factory:function(e){return new(e||t)},providers:[d,{provide:l.a,useClass:B.a,multi:!0}],imports:[[n.b,A,m.e,c.e,P.o,U.a]]}),t})()}}]);