(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{yKC2:function(t,e,r){"use strict";r.r(e),r.d(e,"ProductsModule",(function(){return N}));var o=r("ofXK"),n=r("tyNb"),c=r("fXoL"),a=r("Ubi2");const i=["table"];let l=(()=>{class t{constructor(t){this.context={urls:{createUrl:"/products/create",detailsUrl:"/:id"},data:this.data,properties:[{key:"name",title:"Name",type:"string"},{key:"price.value",title:"Price",type:"float"},{key:"created_at",title:"Created At",type:"datetime"},{key:"updated_at",title:"Updated At",type:"datetime"}],title:"Products"},t.data.subscribe(t=>{this.data=t.products,this.context.data=this.data})}}return t.\u0275fac=function(e){return new(e||t)(c.Kb(n.a))},t.\u0275cmp=c.Eb({type:t,selectors:[["app-index"]],viewQuery:function(t,e){var r;1&t&&c.Gc(i,!0),2&t&&c.qc(r=c.cc())&&(e.table=r.first)},decls:2,vars:1,consts:[[3,"context"],["table",""]],template:function(t,e){1&t&&c.Lb(0,"app-table-view",0,1),2&t&&c.jc("context",e.context)},directives:[a.a],styles:[""]}),t})();var s=r("AytR"),d=r("3hzH"),u=r("lJxs"),p=r("PS3Z"),b=r("tk/3");let m=(()=>{class t{constructor(t){this.http=t}static Json2Product(t){var e;if(!t)return null;const r=null===(e=null==t?void 0:t.attachments)||void 0===e?void 0:e.map(t=>new p.a(t.id,t.type,t.url,t.name));return new d.b(null==t?void 0:t.id,null==t?void 0:t.name,null==t?void 0:t.description,null==t?void 0:t.price_id,null==t?void 0:t.price,null==t?void 0:t.brand_id,null==t?void 0:t.brand,null==t?void 0:t.category_id,null==t?void 0:t.category,null==t?void 0:t.created_at,null==t?void 0:t.updated_at,r)}resolve(e,r){return this.http.get(`${s.a.apiUrl}/${s.a.productsFetchUrl}`).pipe(Object(u.a)(e=>e.map(e=>t.Json2Product(e))))}}return t.\u0275fac=function(e){return new(e||t)(c.Yb(b.b))},t.\u0275prov=c.Gb({token:t,factory:t.\u0275fac}),t})();var h=r("0PJQ"),f=r("3Pt+"),v=r("1kSV"),y=r("QGA0");const P=["content"];function Q(t,e){if(1&t&&(c.Qb(0,"option",25),c.Bc(1),c.Pb()),2&t){const t=e.$implicit;c.jc("value",t.id),c.xb(1),c.Cc(t.name)}}function g(t,e){if(1&t&&(c.Qb(0,"option",25),c.Bc(1),c.Pb()),2&t){const t=e.$implicit;c.jc("value",t.id),c.xb(1),c.Cc(t.name)}}function x(t,e){if(1&t){const t=c.Rb();c.Qb(0,"div",2),c.Qb(1,"h6",3),c.Bc(2),c.Pb(),c.Qb(3,"button",4),c.bc("click",(function(){return c.sc(t),c.dc().ok()})),c.Qb(4,"span",5),c.Bc(5,"\xd7"),c.Pb(),c.Pb(),c.Pb(),c.Qb(6,"div",6),c.Qb(7,"form",7),c.Qb(8,"div",8),c.Qb(9,"div",9),c.Qb(10,"div",10),c.Qb(11,"label"),c.Bc(12,"Name"),c.Pb(),c.Lb(13,"input",11),c.Pb(),c.Pb(),c.Pb(),c.Qb(14,"div",8),c.Qb(15,"div",9),c.Qb(16,"div",10),c.Qb(17,"label"),c.Bc(18,"Description"),c.Pb(),c.Lb(19,"input",12),c.Pb(),c.Pb(),c.Pb(),c.Qb(20,"div",8),c.Qb(21,"div",13),c.Qb(22,"div",10),c.Qb(23,"label"),c.Bc(24,"Category"),c.Pb(),c.Qb(25,"select",14),c.zc(26,Q,2,2,"option",15),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Qb(27,"div",8),c.Qb(28,"div",13),c.Qb(29,"div",10),c.Qb(30,"label"),c.Bc(31,"Brand"),c.Pb(),c.Qb(32,"select",16),c.zc(33,g,2,2,"option",15),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Qb(34,"div",8),c.Qb(35,"div",9),c.Qb(36,"div",10),c.Qb(37,"label"),c.Bc(38,"Price"),c.Pb(),c.Lb(39,"input",17),c.Pb(),c.Pb(),c.Pb(),c.Qb(40,"div",8),c.Qb(41,"div",13),c.Qb(42,"div",10),c.Lb(43,"input",18),c.Qb(44,"label",19),c.Bc(45,"Is Main?"),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Qb(46,"div",8),c.Qb(47,"div",13),c.Qb(48,"div",10),c.Qb(49,"label"),c.Bc(50,"Attachments"),c.Pb(),c.Lb(51,"input",20),c.Lb(52,"input",21),c.Qb(53,"app-attachments-uploader",22),c.bc("valueChange",(function(e){return c.sc(t),c.dc().setSelectedAttachment(e)})),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Qb(54,"div",8),c.Qb(55,"div",23),c.Qb(56,"button",24),c.bc("click",(function(){return c.sc(t),c.dc().submit()})),c.Bc(57," Submit "),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Pb()}if(2&t){const t=c.dc();c.xb(2),c.Cc(t.title),c.xb(5),c.jc("formGroup",t.formGroup),c.xb(19),c.jc("ngForOf",t.categories),c.xb(7),c.jc("ngForOf",t.brands),c.xb(18),c.yb("value",(null==t.formGroup||null==t.formGroup.value||null==t.formGroup.value.attachments?null:t.formGroup.value.attachments.length)||"Not selected"),c.xb(2),c.jc("limit",4)("attachments",t.attachments),c.xb(3),c.jc("disabled",!t.formGroup.dirty||!t.formGroup.valid)}}let w=(()=>{class t extends h.b{constructor(t,e,r,o){super(t,e,r,o),t.get(s.a.prepareUrl("brandsFetchUrl")).toPromise().then(t=>this.brands=t),t.get(s.a.prepareUrl("categoriesFetchUrl")).toPromise().then(t=>this.categories=t),this.formGroup=new f.e({name:new f.c(null,f.q.required),description:new f.c(null,f.q.required),brand_id:new f.c(null,f.q.required),category_id:new f.c(null,f.q.required),price:new f.c(null,f.q.required),is_main:new f.c(!1,f.q.required),attachments:new f.c(!1,f.q.required)})}ngOnInit(){history.state.resource&&(console.log(history.state.resource),this.attachments=m.Json2Product(history.state.resource).attachments,console.log(this.attachments))}openModal(){return this.service.open(this.content,{backdrop:"static"})}postUrl(){return"productsCreateUrl"}putUrl(){return"productsUpdateUrl"}initData(){super.initData(),history.state.resource&&this.formGroup.patchValue({price:history.state.resource.price.value})}setSelectedAttachment(t){if(!t||!t.ids||!t.entities||t.ids.length!==t.entities.length||t.ids.length>4)return console.log(t),console.log(t.ids.length),this.attachments=null,void this.formGroup.patchValue({attachments:null});this.attachments=t.entities,this.formGroup.patchValue({attachments:t.ids})}}return t.\u0275fac=function(e){return new(e||t)(c.Kb(b.b),c.Kb(n.a),c.Kb(n.f),c.Kb(v.d))},t.\u0275cmp=c.Eb({type:t,selectors:[["app-product-form"]],viewQuery:function(t,e){var r;1&t&&c.Gc(P,!0),2&t&&c.qc(r=c.cc())&&(e.content=r.first)},features:[c.ub],decls:4,vars:1,consts:[["type","info",3,"close"],["content",""],[1,"modal-header"],[1,"modal-title","pt-1","mt-1"],["type","button",1,"close",2,"border","none","outline","none",3,"click"],["aria-hidden","true"],[1,"modal-body"],[3,"formGroup"],[1,"row"],[1,"col-12","px-3"],[1,"form-group"],["type","text","placeholder","Name","formControlName","name","autocomplete","off",1,"form-control"],["type","text","placeholder","Description","formControlName","description","autocomplete","off",1,"form-control"],[1,"col-md-12","px-3"],["placeholder","Category","formControlName","category_id",1,"form-control"],[3,"value",4,"ngFor","ngForOf"],["placeholder","Brand","formControlName","brand_id",1,"form-control"],["type","number","placeholder","Price","formControlName","price","autocomplete","off",1,"form-control"],["type","checkbox","placeholder","Is Main?","formControlName","is_main",1,""],[1,"mx-1","mb-1"],["type","text","disabled","",1,"form-control"],["type","hidden","formControlName","attachments"],[1,"form-control","mt-2",3,"limit","attachments","valueChange"],[1,"update","ml-auto","mr-auto"],["type","submit",1,"btn","btn-primary","btn-round",3,"disabled","click"],[3,"value"]],template:function(t,e){1&t&&(c.Qb(0,"ngb-alert",0),c.bc("close",(function(){return e.ok()})),c.Bc(1),c.Pb(),c.zc(2,x,58,8,"ng-template",null,1,c.Ac)),2&t&&(c.xb(1),c.Cc(e.message))},directives:[v.b,f.s,f.k,f.f,f.b,f.j,f.d,f.p,o.k,f.n,f.a,y.a,f.m,f.r],styles:[""]}),t})();var k=r("AMeL");let C=(()=>{class t{ngOnInit(){const t=m.Json2Product(history.state.resource);this.context={urls:{tableUrl:"/products"},data:t,properties:[{key:"name",title:"Name",type:"string"},{key:"description",title:"Description",type:"string"},{key:"brand.name",title:"Brand",type:"string"},{key:"category.name",title:"Cateogry",type:"string"},{key:"price.value",title:"Price",type:"float"},{key:"created_at",title:"Created At",type:"datetime"},{key:"updated_at",title:"Updated At",type:"datetime"},{key:"attachments",title:"Attachments",type:"component",component:"app-attachments-viewer"}],title:"Details of product "+(null==t?void 0:t.id)}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Eb({type:t,selectors:[["app-product-details"]],decls:1,vars:1,consts:[[3,"context"]],template:function(t,e){1&t&&c.Lb(0,"app-resource-details",0),2&t&&c.jc("context",e.context)},directives:[k.a],styles:[""]}),t})();var U=r("w+MF");const G=[{path:"",component:l,resolve:{products:m},children:[{path:"create",component:w},{path:":id/edit",component:w},{path:":id/details",pathMatch:"full",component:C},{path:":id/delete",pathMatch:"full",component:(()=>{class t{constructor(){}ngOnInit(){this.context={deleteUrl:"productsDeleteUrl",data:history.state.resource,title:"Delete Product Resource!",description:"Are you sure to delete this product?"}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Eb({type:t,selectors:[["app-product-delete"]],decls:1,vars:1,consts:[[3,"context"]],template:function(t,e){1&t&&c.Lb(0,"app-resource-delete",0),2&t&&c.jc("context",e.context)},directives:[U.a],styles:[""]}),t})()}]}];let q=(()=>{class t{}return t.\u0275mod=c.Ib({type:t}),t.\u0275inj=c.Hb({factory:function(e){return new(e||t)},imports:[[n.i.forChild(G)],n.i]}),t})();var B=r("uP1v"),_=r("RDNO"),j=r("nHkx");let N=(()=>{class t{}return t.\u0275mod=c.Ib({type:t}),t.\u0275inj=c.Hb({factory:function(e){return new(e||t)},providers:[m,{provide:b.a,useClass:_.a,multi:!0}],imports:[[o.b,q,v.e,n.i,f.o,B.a,j.a]]}),t})()}}]);