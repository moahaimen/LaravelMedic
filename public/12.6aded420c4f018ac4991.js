(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{yKC2:function(t,e,r){"use strict";r.r(e),r.d(e,"ProductsModule",(function(){return L}));var c=r("ofXK"),a=r("tyNb"),o=r("fXoL"),n=r("Ubi2");const i=["table"];let s=(()=>{class t{constructor(t){this.context={urls:{createUrl:"/products/create",detailsUrl:"/:id"},data:this.data,properties:[{key:"name",title:"Name",type:"string"},{key:"price.value",title:"Price",type:"float"},{key:"created_at",title:"Created At",type:"datetime"},{key:"updated_at",title:"Updated At",type:"datetime"}],title:"Products"},t.data.subscribe(t=>{this.data=t.products,this.context.data=this.data})}}return t.\u0275fac=function(e){return new(e||t)(o.Kb(a.a))},t.\u0275cmp=o.Eb({type:t,selectors:[["app-index"]],viewQuery:function(t,e){var r;1&t&&o.Fc(i,!0),2&t&&o.pc(r=o.bc())&&(e.table=r.first)},decls:2,vars:1,consts:[[3,"context"],["table",""]],template:function(t,e){1&t&&o.Lb(0,"app-table-view",0,1),2&t&&o.ic("context",e.context)},directives:[n.a],styles:[""]}),t})();var l=r("AytR"),b=r("9xMI");class d extends b.a{constructor(t,e,r,c,a,o,n,i){super(t),this.id=t,this.name=e,this.price=r,this.brand=c,this.category=a,this.created_at=o,this.updated_at=n,this.attachments=i}}var p=r("lJxs"),u=r("tk/3");let m=(()=>{class t{constructor(t){this.http=t}static Json2Product(t){return t?new d(t.id,t.name,t.price,t.brand,t.category,t.created_at,t.updated_at,t.attachments):null}resolve(e,r){return this.http.get(`${l.a.apiUrl}/${l.a.productsFetchUrl}`).pipe(Object(p.a)(e=>e.map(e=>t.Json2Product(e))))}}return t.\u0275fac=function(e){return new(e||t)(o.Xb(u.b))},t.\u0275prov=o.Gb({token:t,factory:t.\u0275fac}),t})();var h=r("0PJQ"),f=r("3Pt+"),y=r("1kSV"),v=r("QGA0");const P=["content"];function O(t,e){if(1&t&&(o.Pb(0,"option",23),o.Ac(1),o.Ob()),2&t){const t=e.$implicit;o.ic("value",t.id),o.xb(1),o.Bc(t.name)}}function g(t,e){if(1&t&&(o.Pb(0,"option",23),o.Ac(1),o.Ob()),2&t){const t=e.$implicit;o.ic("value",t.id),o.xb(1),o.Bc(t.name)}}function x(t,e){if(1&t){const t=o.Qb();o.Pb(0,"div",2),o.Pb(1,"h6",3),o.Ac(2),o.Ob(),o.Pb(3,"button",4),o.ac("click",(function(){return o.rc(t),o.cc().ok()})),o.Pb(4,"span",5),o.Ac(5,"\xd7"),o.Ob(),o.Ob(),o.Ob(),o.Pb(6,"div",6),o.Pb(7,"form",7),o.Pb(8,"div",8),o.Pb(9,"div",9),o.Pb(10,"div",10),o.Pb(11,"label"),o.Ac(12,"Name"),o.Ob(),o.Lb(13,"input",11),o.Ob(),o.Ob(),o.Ob(),o.Pb(14,"div",8),o.Pb(15,"div",12),o.Pb(16,"div",10),o.Pb(17,"label"),o.Ac(18,"Category"),o.Ob(),o.Pb(19,"select",13),o.yc(20,O,2,2,"option",14),o.Ob(),o.Ob(),o.Ob(),o.Ob(),o.Pb(21,"div",8),o.Pb(22,"div",12),o.Pb(23,"div",10),o.Pb(24,"label"),o.Ac(25,"Brand"),o.Ob(),o.Pb(26,"select",15),o.yc(27,g,2,2,"option",14),o.Ob(),o.Ob(),o.Ob(),o.Ob(),o.Pb(28,"div",8),o.Pb(29,"div",9),o.Pb(30,"div",10),o.Pb(31,"label"),o.Ac(32,"Price"),o.Ob(),o.Lb(33,"input",16),o.Ob(),o.Ob(),o.Ob(),o.Pb(34,"div",8),o.Pb(35,"div",12),o.Pb(36,"div",10),o.Lb(37,"input",17),o.Pb(38,"label",18),o.Ac(39,"Is Main?"),o.Ob(),o.Ob(),o.Ob(),o.Ob(),o.Pb(40,"div",8),o.Pb(41,"div",12),o.Pb(42,"div",10),o.Pb(43,"label"),o.Ac(44,"Attachments"),o.Ob(),o.Lb(45,"input",19),o.Pb(46,"p"),o.Ac(47),o.Ob(),o.Pb(48,"app-attachments-uploader",20),o.ac("valueChange",(function(e){return o.rc(t),o.cc().onAttachmentsChange(e)})),o.Ob(),o.Ob(),o.Ob(),o.Ob(),o.Pb(49,"div",8),o.Pb(50,"div",21),o.Pb(51,"button",22),o.ac("click",(function(){return o.rc(t),o.cc().submit()})),o.Ac(52," Submit "),o.Ob(),o.Ob(),o.Ob(),o.Ob(),o.Ob()}if(2&t){const t=o.cc();o.xb(2),o.Bc(t.title),o.xb(5),o.ic("formGroup",t.formGroup),o.xb(13),o.ic("ngForOf",t.categories),o.xb(7),o.ic("ngForOf",t.brands),o.xb(20),o.Bc(t.formGroup.value.attachments.length),o.xb(4),o.ic("disabled",!t.formGroup.valid)}}let k=(()=>{class t extends h.b{constructor(t,e,r,c){super(t,e,r,c),t.get(l.a.prepareUrl("brandsFetchUrl")).toPromise().then(t=>this.brands=t),t.get(l.a.prepareUrl("categoriesFetchUrl")).toPromise().then(t=>this.categories=t),this.formGroup=new f.e({name:new f.c(null,f.q.required),brand_id:new f.c(null,f.q.required),category_id:new f.c(null,f.q.required),price:new f.c(null,f.q.required),is_main:new f.c(!1,f.q.required),attachments:new f.c(!1,f.q.required)})}openModal(){return this.service.open(this.content,{backdrop:"static"})}postUrl(){return"productsCreateUrl"}putUrl(){return"productsUpdateUrl"}initData(){super.initData(),history.state.resource&&this.formGroup.patchValue({price:history.state.resource.price.value})}onAttachmentsChange(t){this.formGroup.patchValue({attachments:t})}}return t.\u0275fac=function(e){return new(e||t)(o.Kb(u.b),o.Kb(a.a),o.Kb(a.b),o.Kb(y.d))},t.\u0275cmp=o.Eb({type:t,selectors:[["app-product-form"]],viewQuery:function(t,e){var r;1&t&&o.Fc(P,!0),2&t&&o.pc(r=o.bc())&&(e.content=r.first)},features:[o.ub],decls:4,vars:1,consts:[["type","info",3,"close"],["content",""],[1,"modal-header"],[1,"modal-title","pt-1","mt-1"],["type","button",1,"close",2,"border","none","outline","none",3,"click"],["aria-hidden","true"],[1,"modal-body"],[3,"formGroup"],[1,"row"],[1,"col-12","px-3"],[1,"form-group"],["type","text","placeholder","Name","formControlName","name","autocomplete","off",1,"form-control"],[1,"col-md-12","px-3"],["placeholder","Category","formControlName","category_id",1,"form-control"],[3,"value",4,"ngFor","ngForOf"],["placeholder","Brand","formControlName","brand_id",1,"form-control"],["type","number","placeholder","Price","formControlName","price","autocomplete","off",1,"form-control"],["type","checkbox","placeholder","Is Main?","formControlName","is_main",1,""],[1,"mx-1","mb-1"],["type","hidden","formControlName","attachments"],[3,"valueChange"],[1,"update","ml-auto","mr-auto"],["type","submit",1,"btn","btn-primary","btn-round",3,"disabled","click"],[3,"value"]],template:function(t,e){1&t&&(o.Pb(0,"ngb-alert",0),o.ac("close",(function(){return e.ok()})),o.Ac(1),o.Ob(),o.yc(2,x,53,6,"ng-template",null,1,o.zc)),2&t&&(o.xb(1),o.Bc(e.message))},directives:[y.b,f.s,f.k,f.f,f.b,f.j,f.d,f.p,c.j,f.n,f.a,v.a,f.m,f.r],styles:[""]}),t})();var w=r("bz7F"),A=r("AMeL");let C=(()=>{class t{ngOnInit(){const t=m.Json2Product(history.state.resource);this.context={urls:{tableUrl:"/products"},data:t,properties:[{key:"name",title:"Name",type:"string"},{key:"brand.name",title:"Brand",type:"string"},{key:"category.name",title:"Cateogry",type:"string"},{key:"price.value",title:"Price",type:"float"},{key:"created_at",title:"Created At",type:"datetime"},{key:"updated_at",title:"Updated At",type:"datetime"},{key:"attachments",title:"Attachments",type:"component",component:w.a}],title:"Details of product "+(null==t?void 0:t.id)}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Eb({type:t,selectors:[["app-product-details"]],decls:1,vars:1,consts:[[3,"context"]],template:function(t,e){1&t&&o.Lb(0,"app-resource-details",0),2&t&&o.ic("context",e.context)},directives:[A.a],styles:[""]}),t})();var U=r("w+MF");const _=[{path:"",component:s,resolve:{products:m},children:[{path:"create",component:k},{path:":id/edit",component:k},{path:":id/details",pathMatch:"full",component:C},{path:":id/delete",pathMatch:"full",component:(()=>{class t{constructor(){}ngOnInit(){this.context={deleteUrl:"productsDeleteUrl",data:history.state.resource,title:"Delete Product Resource!",description:"Are you sure to delete this product?"}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Eb({type:t,selectors:[["app-product-delete"]],decls:1,vars:1,consts:[[3,"context"]],template:function(t,e){1&t&&o.Lb(0,"app-resource-delete",0),2&t&&o.ic("context",e.context)},directives:[U.a],styles:[""]}),t})()}]}];let q=(()=>{class t{}return t.\u0275mod=o.Ib({type:t}),t.\u0275inj=o.Hb({factory:function(e){return new(e||t)},imports:[[a.e.forChild(_)],a.e]}),t})();var N=r("uP1v"),F=r("RDNO"),G=r("nHkx");let L=(()=>{class t{}return t.\u0275mod=o.Ib({type:t}),t.\u0275inj=o.Hb({factory:function(e){return new(e||t)},providers:[m,{provide:u.a,useClass:F.a,multi:!0}],imports:[[c.b,q,y.e,a.e,f.o,N.a,G.a]]}),t})()}}]);