(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{yKC2:function(t,e,r){"use strict";r.r(e),r.d(e,"ProductsModule",(function(){return F}));var n=r("ofXK"),o=r("tyNb"),a=r("fXoL"),c=r("Ubi2");const i=["table"];let l=(()=>{class t{constructor(t){this.context={urls:{createUrl:"/products/create",detailsUrl:"/:id"},data:this.data,properties:[{key:"name",title:"Name",type:"string"},{key:"price.value",title:"Price",type:"float"},{key:"created_at",title:"Created At",type:"datetime"},{key:"updated_at",title:"Updated At",type:"datetime"}],title:"Products"},t.data.subscribe(t=>{this.data=t.products,this.context.data=this.data})}}return t.\u0275fac=function(e){return new(e||t)(a.Kb(o.a))},t.\u0275cmp=a.Eb({type:t,selectors:[["app-index"]],viewQuery:function(t,e){var r;1&t&&a.Hc(i,!0),2&t&&a.rc(r=a.cc())&&(e.table=r.first)},decls:2,vars:1,consts:[[3,"context"],["table",""]],template:function(t,e){1&t&&a.Lb(0,"app-table-view",0,1),2&t&&a.kc("context",e.context)},directives:[c.a],styles:[""]}),t})();var s=r("AytR"),d=r("3hzH"),u=r("lJxs"),p=r("PS3Z"),b=r("tk/3");let m=(()=>{class t{constructor(t){this.http=t}static Json2Product(t){var e;if(!t)return null;const r=null===(e=null==t?void 0:t.attachments)||void 0===e?void 0:e.map(t=>new p.a(t.id,t.type,t.url,t.name));return new d.b(null==t?void 0:t.id,null==t?void 0:t.name,null==t?void 0:t.description,null==t?void 0:t.price_id,null==t?void 0:t.price,null==t?void 0:t.brand_id,null==t?void 0:t.brand,null==t?void 0:t.category_id,null==t?void 0:t.category,null==t?void 0:t.created_at,null==t?void 0:t.updated_at,r)}resolve(e,r){return this.http.get(`${s.a.apiUrl}/${s.a.productsFetchUrl}`).pipe(Object(u.a)(e=>e.map(e=>t.Json2Product(e))))}}return t.\u0275fac=function(e){return new(e||t)(a.Yb(b.b))},t.\u0275prov=a.Gb({token:t,factory:t.\u0275fac}),t})();var h=r("0PJQ"),f=r("3Pt+"),v=r("1kSV"),y=r("QGA0");const P=["content"];function Q(t,e){if(1&t&&(a.Qb(0,"option",26),a.Cc(1),a.Pb()),2&t){const t=e.$implicit;a.kc("value",t.id),a.xb(1),a.Dc(t.name)}}function g(t,e){if(1&t&&(a.Qb(0,"option",26),a.Cc(1),a.Pb()),2&t){const t=e.$implicit;a.kc("value",t.id),a.xb(1),a.Dc(t.name)}}function x(t,e){if(1&t){const t=a.Rb();a.Qb(0,"div",2),a.Qb(1,"h6",3),a.Cc(2),a.Pb(),a.Qb(3,"button",4),a.bc("click",(function(){return a.tc(t),a.dc().ok()})),a.Qb(4,"span",5),a.Cc(5,"\xd7"),a.Pb(),a.Pb(),a.Pb(),a.Qb(6,"div",6),a.Qb(7,"form",7),a.Qb(8,"div",8),a.Qb(9,"div",9),a.Qb(10,"div",10),a.Qb(11,"label"),a.Cc(12,"Name"),a.Pb(),a.Lb(13,"input",11),a.Pb(),a.Pb(),a.Pb(),a.Qb(14,"div",8),a.Qb(15,"div",9),a.Qb(16,"div",10),a.Qb(17,"label"),a.Cc(18,"Description"),a.Pb(),a.Qb(19,"div",12),a.Lb(20,"textarea",13),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Qb(21,"div",8),a.Qb(22,"div",14),a.Qb(23,"div",10),a.Qb(24,"label"),a.Cc(25,"Category"),a.Pb(),a.Qb(26,"select",15),a.Ac(27,Q,2,2,"option",16),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Qb(28,"div",8),a.Qb(29,"div",14),a.Qb(30,"div",10),a.Qb(31,"label"),a.Cc(32,"Brand"),a.Pb(),a.Qb(33,"select",17),a.Ac(34,g,2,2,"option",16),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Qb(35,"div",8),a.Qb(36,"div",9),a.Qb(37,"div",10),a.Qb(38,"label"),a.Cc(39,"Price"),a.Pb(),a.Lb(40,"input",18),a.Pb(),a.Pb(),a.Pb(),a.Qb(41,"div",8),a.Qb(42,"div",14),a.Qb(43,"div",10),a.Lb(44,"input",19),a.Qb(45,"label",20),a.Cc(46,"Is Main?"),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Qb(47,"div",8),a.Qb(48,"div",14),a.Qb(49,"div",10),a.Qb(50,"label"),a.Cc(51,"Attachments"),a.Pb(),a.Lb(52,"input",21),a.Lb(53,"input",22),a.Qb(54,"app-attachments-uploader",23),a.bc("valueChange",(function(e){return a.tc(t),a.dc().setSelectedAttachment(e)})),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Qb(55,"div",8),a.Qb(56,"div",24),a.Qb(57,"button",25),a.bc("click",(function(){return a.tc(t),a.dc().submit()})),a.Cc(58," Submit "),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Pb()}if(2&t){const t=a.dc();a.xb(2),a.Dc(t.title),a.xb(5),a.kc("formGroup",t.formGroup),a.xb(20),a.kc("ngForOf",t.categories),a.xb(7),a.kc("ngForOf",t.brands),a.xb(18),a.yb("value",(null==t.formGroup||null==t.formGroup.value||null==t.formGroup.value.attachments?null:t.formGroup.value.attachments.length)||"Not selected"),a.xb(2),a.kc("limit",4)("attachments",t.attachments),a.xb(3),a.kc("disabled",t.uploading||!t.formGroup.dirty||!t.formGroup.valid)}}function k(t){return!Array.isArray(t.value)||t.value.length<1||t.value.length>4?{validateAttachments:{valid:!1}}:null}let w=(()=>{class t extends h.b{constructor(t,e,r,n){super(t,e,r,n),t.get(s.a.prepareUrl("brandsFetchUrl")).toPromise().then(t=>this.brands=t),t.get(s.a.prepareUrl("categoriesFetchUrl")).toPromise().then(t=>this.categories=t),this.formGroup=new f.e({name:new f.c(null,f.q.required),description:new f.c(null,f.q.required),brand_id:new f.c(null,f.q.required),category_id:new f.c(null,f.q.required),price:new f.c(null,f.q.required),is_main:new f.c(!1,f.q.required),attachments:new f.c(null,[f.q.required,k])})}ngAfterContentInit(){history.state.resource&&(this.attachments=m.Json2Product(history.state.resource).attachments,setTimeout(()=>{this.formGroup.controls.attachments.setValue(this.attachments.map(t=>t.id))},500))}openModal(){return this.service.open(this.content,{backdrop:"static"})}get postUrl(){return"productsCreateUrl"}get putUrl(){return"productsUpdateUrl"}get parentUrl(){return"/products"}initData(){super.initData(),history.state.resource&&this.formGroup.patchValue({price:history.state.resource.price.value})}setSelectedAttachment(t){if(!t||!t.ids||!t.entities||t.ids.length!==t.entities.length||t.ids.length>4)return console.log(t),console.log(t.ids.length),this.attachments=null,void this.formGroup.patchValue({attachments:null});this.attachments=t.entities,this.formGroup.patchValue({attachments:t.ids})}}return t.\u0275fac=function(e){return new(e||t)(a.Kb(b.b),a.Kb(o.a),a.Kb(o.f),a.Kb(v.h))},t.\u0275cmp=a.Eb({type:t,selectors:[["app-product-form"]],viewQuery:function(t,e){var r;1&t&&a.Hc(P,!0),2&t&&a.rc(r=a.cc())&&(e.content=r.first)},features:[a.ub],decls:4,vars:1,consts:[["type","info",3,"close"],["content",""],[1,"modal-header"],[1,"modal-title","pt-1","mt-1"],["type","button",1,"close",2,"border","none","outline","none",3,"click"],["aria-hidden","true"],[1,"modal-body"],[3,"formGroup"],[1,"row"],[1,"col-12","px-3"],[1,"form-group"],["type","text","placeholder","Name","formControlName","name","autocomplete","off",1,"form-control"],[1,"form-control","px-0","py-0"],["rows","5","placeholder","Description (Maximum allowed length 750 character)","formControlName","description",2,"width","100%","border","none","outline","none !important","padding","10px !important"],[1,"col-md-12","px-3"],["placeholder","Category","formControlName","category_id",1,"form-control"],[3,"value",4,"ngFor","ngForOf"],["placeholder","Brand","formControlName","brand_id",1,"form-control"],["type","number","placeholder","Price","formControlName","price","autocomplete","off",1,"form-control"],["type","checkbox","placeholder","Is Main?","formControlName","is_main",1,""],[1,"mx-1","mb-1"],["type","text","disabled","",1,"form-control"],["type","hidden","formControlName","attachments"],[1,"form-control","mt-2",3,"limit","attachments","valueChange"],[1,"update","ml-auto","mr-auto"],["type","submit",1,"btn","btn-primary","btn-round",3,"disabled","click"],[3,"value"]],template:function(t,e){1&t&&(a.Qb(0,"ngb-alert",0),a.bc("close",(function(){return e.ok()})),a.Cc(1),a.Pb(),a.Ac(2,x,59,8,"ng-template",null,1,a.Bc)),2&t&&(a.xb(1),a.Dc(e.message))},directives:[v.b,f.s,f.k,f.f,f.b,f.j,f.d,f.p,n.l,f.n,f.a,y.a,f.m,f.r],styles:[""]}),t})();var C=r("AMeL"),A=r("bz7F");let U=(()=>{class t{ngOnInit(){const t=m.Json2Product(history.state.resource);this.context={urls:{tableUrl:"/products"},data:t,properties:[{key:"name",title:"Name",type:"string"},{key:"description",title:"Description",type:"string"},{key:"brand.name",title:"Brand",type:"string"},{key:"category.name",title:"Cateogry",type:"string"},{key:"price.value",title:"Price",type:"float"},{key:"created_at",title:"Created At",type:"datetime"},{key:"updated_at",title:"Updated At",type:"datetime"},{key:"attachments",title:"Attachments",type:"component",component:"app-attachments-viewer"}],title:"Details of product "+(null==t?void 0:t.id)}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.Eb({type:t,selectors:[["app-product-details"]],decls:2,vars:2,consts:[[3,"context"],[3,"attachments"]],template:function(t,e){1&t&&(a.Qb(0,"app-resource-details",0),a.Lb(1,"app-attachments-viewer",1),a.Pb()),2&t&&(a.kc("context",e.context),a.xb(1),a.kc("attachments",null==e.context||null==e.context.data?null:e.context.data.attachments))},directives:[C.a,A.a],styles:[""]}),t})();var G=r("w+MF");const _=[{path:"",component:l,runGuardsAndResolvers:"always",resolve:{products:m},children:[{path:"create",component:w},{path:":id/edit",component:w},{path:":id/details",pathMatch:"full",component:U},{path:":id/delete",pathMatch:"full",component:(()=>{class t{constructor(){}ngOnInit(){this.context={deleteUrl:"productsDeleteUrl",data:history.state.resource,title:"Delete Product Resource!",description:"Are you sure to delete this product?"}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.Eb({type:t,selectors:[["app-product-delete"]],decls:1,vars:1,consts:[[3,"context"]],template:function(t,e){1&t&&a.Lb(0,"app-resource-delete",0),2&t&&a.kc("context",e.context)},directives:[G.a],styles:[""]}),t})()}]}];let q=(()=>{class t{}return t.\u0275mod=a.Ib({type:t}),t.\u0275inj=a.Hb({factory:function(e){return new(e||t)},imports:[[o.i.forChild(_)],o.i]}),t})();var N=r("uP1v"),D=r("RDNO"),L=r("nHkx");let F=(()=>{class t{}return t.\u0275mod=a.Ib({type:t}),t.\u0275inj=a.Hb({factory:function(e){return new(e||t)},providers:[m,{provide:b.a,useClass:D.a,multi:!0}],imports:[[n.c,q,v.i,o.i,f.o,N.a,L.a]]}),t})()}}]);
//# sourceMappingURL=14.7f787322b08cc5e4956d.js.map