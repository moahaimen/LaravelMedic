(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{yKC2:function(t,e,r){"use strict";r.r(e),r.d(e,"ProductsModule",(function(){return F}));var n=r("ofXK"),a=r("tyNb"),i=r("fXoL"),o=r("Ubi2");const c=["table"];let l=(()=>{class t{constructor(t){this.context={urls:{createUrl:"/products/create",detailsUrl:"/:id"},data:this.data,properties:[{key:"en_name",title:"En Name",type:"string"},{key:"price.value",title:"Price",type:"float"},{key:"created_at",title:"Created At",type:"datetime"},{key:"updated_at",title:"Updated At",type:"datetime"}],title:"Products"},t.data.subscribe(t=>{this.data=t.resources,this.context.data=this.data})}}return t.\u0275fac=function(e){return new(e||t)(i.Lb(a.a))},t.\u0275cmp=i.Fb({type:t,selectors:[["app-index"]],viewQuery:function(t,e){var r;1&t&&i.Ic(c,!0),2&t&&i.sc(r=i.dc())&&(e.table=r.first)},decls:2,vars:1,consts:[[3,"context"],["table",""]],template:function(t,e){1&t&&i.Mb(0,"app-table-view",0,1),2&t&&i.lc("context",e.context)},directives:[o.a],styles:[""]}),t})();var s=r("AytR"),d=r("3hzH"),b=r("lJxs"),u=r("PS3Z"),p=r("tk/3");let m=(()=>{class t{constructor(t){this.http=t}static Json2Product(t){var e;if(!t)return null;const r=null===(e=null==t?void 0:t.attachments)||void 0===e?void 0:e.map(t=>new u.a(t.id,t.type,t.url,t.name));return new d.b(null==t?void 0:t.id,null==t?void 0:t.en_name,null==t?void 0:t.ar_name,null==t?void 0:t.en_description,null==t?void 0:t.ar_description,null==t?void 0:t.available,null==t?void 0:t.is_main,null==t?void 0:t.price_id,null==t?void 0:t.price,null==t?void 0:t.brand_id,null==t?void 0:t.brand,null==t?void 0:t.category_id,null==t?void 0:t.category,null==t?void 0:t.created_at,null==t?void 0:t.updated_at,r)}resolve(e,r){return this.http.get(`${s.a.apiUrl}/${s.a.productsFetchUrl}`).pipe(Object(b.a)(e=>e.map(e=>t.Json2Product(e))))}}return t.\u0275fac=function(e){return new(e||t)(i.Zb(p.b))},t.\u0275prov=i.Hb({token:t,factory:t.\u0275fac}),t})();var v=r("0PJQ"),h=r("3Pt+"),f=r("1kSV"),y=r("QGA0");const R=["content"];function Q(t,e){if(1&t&&(i.Rb(0,"option",31),i.Dc(1),i.Qb()),2&t){const t=e.$implicit;i.lc("value",t.id),i.yb(1),i.Ec(t.en_name)}}function g(t,e){if(1&t&&(i.Rb(0,"option",31),i.Dc(1),i.Qb()),2&t){const t=e.$implicit;i.lc("value",t.id),i.yb(1),i.Ec(t.en_name)}}function _(t,e){if(1&t){const t=i.Sb();i.Rb(0,"div",2),i.Rb(1,"h6",3),i.Dc(2),i.Qb(),i.Rb(3,"button",4),i.cc("click",(function(){return i.uc(t),i.ec().ok()})),i.Rb(4,"span",5),i.Dc(5,"\xd7"),i.Qb(),i.Qb(),i.Qb(),i.Rb(6,"div",6),i.Rb(7,"form",7),i.Rb(8,"div",8),i.Rb(9,"div",9),i.Rb(10,"div",10),i.Rb(11,"label"),i.Dc(12,"English Name"),i.Qb(),i.Mb(13,"input",11),i.Qb(),i.Qb(),i.Qb(),i.Rb(14,"div",12),i.Rb(15,"div",9),i.Rb(16,"div",10),i.Rb(17,"label"),i.Dc(18,"\u0627\u0644\u0627\u0633\u0645 \u0628\u0627\u0644\u0644\u063a\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629"),i.Qb(),i.Mb(19,"input",13),i.Qb(),i.Qb(),i.Qb(),i.Rb(20,"div",8),i.Rb(21,"div",9),i.Rb(22,"div",10),i.Rb(23,"label"),i.Dc(24,"English Description"),i.Qb(),i.Rb(25,"div",14),i.Mb(26,"textarea",15),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Rb(27,"div",12),i.Rb(28,"div",9),i.Rb(29,"div",10),i.Rb(30,"label"),i.Dc(31,"\u0627\u0644\u0648\u0635\u0641 \u0628\u0627\u0644\u0644\u063a\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629"),i.Qb(),i.Rb(32,"div",14),i.Mb(33,"textarea",16),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Rb(34,"div",8),i.Rb(35,"div",17),i.Rb(36,"div",10),i.Rb(37,"label"),i.Dc(38,"Category"),i.Qb(),i.Rb(39,"select",18),i.Bc(40,Q,2,2,"option",19),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Rb(41,"div",8),i.Rb(42,"div",17),i.Rb(43,"div",10),i.Rb(44,"label"),i.Dc(45,"Brand"),i.Qb(),i.Rb(46,"select",20),i.Bc(47,g,2,2,"option",19),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Rb(48,"div",8),i.Rb(49,"div",9),i.Rb(50,"div",10),i.Rb(51,"label"),i.Dc(52,"Price"),i.Qb(),i.Mb(53,"input",21),i.Qb(),i.Qb(),i.Qb(),i.Rb(54,"div",8),i.Rb(55,"div",9),i.Rb(56,"div",10),i.Mb(57,"input",22),i.Rb(58,"label",23),i.Dc(59,"Mark Price as Discount"),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Rb(60,"div",8),i.Rb(61,"div",17),i.Rb(62,"div",10),i.Mb(63,"input",24),i.Rb(64,"label",23),i.Dc(65,"Is Main?"),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Rb(66,"div",8),i.Rb(67,"div",17),i.Rb(68,"div",10),i.Mb(69,"input",25),i.Rb(70,"label",23),i.Dc(71,"Is Available?"),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Rb(72,"div",8),i.Rb(73,"div",17),i.Rb(74,"div",10),i.Rb(75,"label"),i.Dc(76,"Attachments"),i.Qb(),i.Mb(77,"input",26),i.Mb(78,"input",27),i.Rb(79,"app-attachments-uploader",28),i.cc("valueChange",(function(e){return i.uc(t),i.ec().setSelectedAttachment(e)})),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Rb(80,"div",8),i.Rb(81,"div",29),i.Rb(82,"button",30),i.cc("click",(function(){return i.uc(t),i.ec().submit()})),i.Dc(83," Submit "),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Qb()}if(2&t){const t=i.ec();i.yb(2),i.Ec(t.title),i.yb(5),i.lc("formGroup",t.formGroup),i.yb(33),i.lc("ngForOf",t.categories),i.yb(7),i.lc("ngForOf",t.brands),i.yb(10),i.lc("disabled",!t.formGroup.price.value),i.yb(20),i.zb("value",(null==t.formGroup||null==t.formGroup.value||null==t.formGroup.value.attachments?null:t.formGroup.value.attachments.length)||"Not selected"),i.yb(2),i.lc("limit",4)("attachments",t.attachments),i.yb(3),i.lc("disabled",t.uploading||!t.formGroup.dirty||!t.formGroup.valid)}}function w(t){return!Array.isArray(t.value)||t.value.length<1||t.value.length>4?{validateAttachments:{valid:!1}}:null}let x=(()=>{class t extends v.b{constructor(t,e,r,n){super(t,e,r,n),t.get(s.a.prepareUrl("brandsFetchUrl")).toPromise().then(t=>this.brands=t),t.get(s.a.prepareUrl("categoriesFetchUrl")).toPromise().then(t=>this.categories=t),this.formGroup=new h.e({en_name:new h.c(null,h.r.required),ar_name:new h.c(null,h.r.required),en_description:new h.c(null,h.r.required),ar_description:new h.c(null,h.r.required),brand_id:new h.c(null,h.r.required),category_id:new h.c(null,h.r.required),price:new h.c(null,h.r.required),price_is_discount:new h.c(null),available:new h.c(null,h.r.required),is_main:new h.c(null,h.r.required),attachments:new h.c(null,[h.r.required,w])}),e.parent.data.subscribe(t=>{e.params.subscribe(e=>{const r=Number.parseInt(e.id,10),n=t.resources.find(t=>t.id===r);n&&(this.attachments=n.attachments,setTimeout(()=>{this.formGroup.controls.attachments.setValue(this.attachments.map(t=>t.id))},500))})})}openModal(){return this.service.open(this.content,{backdrop:"static",keyboard:!1})}get postUrl(){return"productsCreateUrl"}get putUrl(){return"productsUpdateUrl"}get parentUrl(){return"/products"}initData(){super.initData(),this.route.parent.data.subscribe(t=>{this.route.params.subscribe(e=>{const r=Number.parseInt(e.id,10),n=t.resources.find(t=>t.id===r);this.formGroup.patchValue({price:n.price.value,price_is_discount:n.price.is_discount})})})}setSelectedAttachment(t){if(!t||!t.ids||!t.entities||t.ids.length!==t.entities.length||t.ids.length>4)return console.log(t),console.log(t.ids.length),this.attachments=null,void this.formGroup.patchValue({attachments:null});this.attachments=t.entities,this.formGroup.patchValue({attachments:t.ids})}}return t.\u0275fac=function(e){return new(e||t)(i.Lb(p.b),i.Lb(a.a),i.Lb(a.f),i.Lb(f.d))},t.\u0275cmp=i.Fb({type:t,selectors:[["app-product-form"]],viewQuery:function(t,e){var r;1&t&&i.Ic(R,!0),2&t&&i.sc(r=i.dc())&&(e.content=r.first)},features:[i.vb],decls:4,vars:1,consts:[["type","info",3,"close"],["content",""],[1,"modal-header"],[1,"modal-title","pt-1","mt-1"],["type","button",1,"close",2,"border","none","outline","none",3,"click"],["aria-hidden","true"],[1,"modal-body"],[3,"formGroup"],[1,"row"],[1,"col-12","px-3"],[1,"form-group"],["type","text","placeholder","English Name","formControlName","en_name","autocomplete","off",1,"form-control"],["dir","rtl",1,"row"],["type","text","placeholder","\u0627\u0644\u0627\u0633\u0645 \u0628\u0627\u0644\u0644\u063a\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629","formControlName","ar_name","autocomplete","off",1,"form-control"],[1,"form-control","px-0","py-0"],["rows","5","placeholder","Description (Maximum allowed length 750 character)","maxlength","750","formControlName","en_description",2,"width","100%","border","none","outline","none !important","padding","10px !important"],["rows","5","placeholder","\u0627\u0644\u0648\u0635\u0641 \u0628\u0627\u0644\u0644\u063a\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629 (\u0627\u0644\u062d\u062f \u0627\u0644\u0623\u0642\u0635\u0649 \u0627\u0644\u0645\u0633\u0645\u0648\u062d \u0628\u0647 \u0644\u0637\u0648\u0644 \u0627\u0644\u0648\u0635\u0641 \u0647\u0648 750 \u062d\u0631\u0641)","maxlength","750","formControlName","ar_description",2,"width","100%","border","none","outline","none !important","padding","10px !important"],[1,"col-md-12","px-3"],["placeholder","Category","formControlName","category_id",1,"form-control"],[3,"value",4,"ngFor","ngForOf"],["placeholder","Brand","formControlName","brand_id",1,"form-control"],["type","number","placeholder","Price","formControlName","price","autocomplete","off",1,"form-control"],["type","checkbox","placeholder","Mark price as discount","formControlName","price_is_discount","autocomplete","off",1,"",3,"disabled"],[1,"mx-1","mb-1"],["type","checkbox","placeholder","Is Main?","formControlName","is_main",1,""],["type","checkbox","placeholder","Is Available?","formControlName","available",1,""],["type","text","disabled","",1,"form-control"],["type","hidden","formControlName","attachments"],[1,"form-control","mt-2",3,"limit","attachments","valueChange"],[1,"update","ml-auto","mr-auto"],["type","submit",1,"btn","btn-primary","btn-round",3,"disabled","click"],[3,"value"]],template:function(t,e){1&t&&(i.Rb(0,"ngb-alert",0),i.cc("close",(function(){return e.ok()})),i.Dc(1),i.Qb(),i.Bc(2,_,84,9,"ng-template",null,1,i.Cc)),2&t&&(i.yb(1),i.Ec(e.message))},directives:[f.b,h.t,h.l,h.f,h.b,h.k,h.d,h.h,h.q,n.m,h.o,h.a,y.a,h.n,h.s],styles:[""]}),t})();var k=r("AMeL"),D=r("bz7F");let M=(()=>{class t{constructor(t){t.parent.data.subscribe(e=>{t.params.subscribe(t=>{const r=Number.parseInt(t.id,10),n=e.resources.find(t=>t.id===r);this.context={urls:{tableUrl:"/products"},data:n,properties:[{key:"en_name",title:"English Name",type:"string"},{key:"en_description",title:"English Description",type:"string"},{key:"ar_name",title:"Arabic Name",type:"string"},{key:"ar_description",title:"Arabic Description",type:"string"},{key:"brand.en_name",title:"Brand",type:"string"},{key:"category.en_name",title:"Cateogry",type:"string"},{key:"price.value",title:"Price",type:"float"},{key:"created_at",title:"Created At",type:"datetime"},{key:"updated_at",title:"Updated At",type:"datetime"},{key:"attachments",title:"Attachments",type:"component",component:"app-attachments-viewer"}],title:"Details of product "+(null==n?void 0:n.id)}})})}}return t.\u0275fac=function(e){return new(e||t)(i.Lb(a.a))},t.\u0275cmp=i.Fb({type:t,selectors:[["app-product-details"]],decls:2,vars:2,consts:[[3,"context"],[3,"attachments"]],template:function(t,e){1&t&&(i.Rb(0,"app-resource-details",0),i.Mb(1,"app-attachments-viewer",1),i.Qb()),2&t&&(i.lc("context",e.context),i.yb(1),i.lc("attachments",null==e.context||null==e.context.data?null:e.context.data.attachments))},directives:[k.a,D.a],styles:[""]}),t})();var C=r("w+MF");const N=[{path:"",component:l,runGuardsAndResolvers:(t,e)=>{var r;return null!==(r=history.state.runResolvers)&&void 0!==r&&r},resolve:{resources:m},children:[{path:"create",component:x},{path:":id/edit",component:x},{path:":id/details",pathMatch:"full",component:M},{path:":id/delete",pathMatch:"full",component:(()=>{class t{constructor(t){t.parent.data.subscribe(e=>{t.params.subscribe(t=>{const r=Number.parseInt(t.id,10),n=e.resources.find(t=>t.id===r);this.context={deleteUrl:"productsDeleteUrl",data:n,title:"Delete Product Resource!",description:"Are you sure to delete this product?"}})})}}return t.\u0275fac=function(e){return new(e||t)(i.Lb(a.a))},t.\u0275cmp=i.Fb({type:t,selectors:[["app-product-delete"]],decls:1,vars:1,consts:[[3,"context"]],template:function(t,e){1&t&&i.Mb(0,"app-resource-delete",0),2&t&&i.lc("context",e.context)},directives:[C.a],styles:[""]}),t})()}]}];let A=(()=>{class t{}return t.\u0275mod=i.Jb({type:t}),t.\u0275inj=i.Ib({factory:function(e){return new(e||t)},imports:[[a.i.forChild(N)],a.i]}),t})();var U=r("uP1v"),G=r("RDNO"),P=r("nHkx");let F=(()=>{class t{}return t.\u0275mod=i.Jb({type:t}),t.\u0275inj=i.Ib({factory:function(e){return new(e||t)},providers:[m,{provide:p.a,useClass:G.a,multi:!0}],imports:[[n.c,A,f.e,a.i,h.p,U.a,P.a]]}),t})()}}]);