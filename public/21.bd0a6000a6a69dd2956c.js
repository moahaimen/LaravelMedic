(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{yKC2:function(t,e,r){"use strict";r.r(e),r.d(e,"ProductsModule",(function(){return U}));var n=r("ofXK"),o=r("tyNb"),i=r("Ubi2"),a=r("fXoL");const c=["table"];let l=(()=>{class t{constructor(t){this.context={urls:{createUrl:"/products/create",detailsUrl:"/:id"},pagination:void 0,properties:[{key:"en_name",title:"En Name",type:"string"},{key:"price.value",title:"Price (USD)",type:"float"},{key:"created_at",title:"Created At",type:"datetime"},{key:"updated_at",title:"Updated At",type:"datetime"}],title:"Products"},i.a.initializePaginationContext(t,this.context)}}return t.\u0275fac=function(e){return new(e||t)(a.Lb(o.a))},t.\u0275cmp=a.Fb({type:t,selectors:[["app-index"]],viewQuery:function(t,e){var r;1&t&&a.Jc(c,!0),2&t&&a.sc(r=a.dc())&&(e.table=r.first)},decls:2,vars:1,consts:[[3,"context"],["table",""]],template:function(t,e){1&t&&a.Mb(0,"app-table-view",0,1),2&t&&a.lc("context",e.context)},directives:[i.a],styles:[""]}),t})();var s=r("I3rL"),b=r("0PJQ"),d=r("3Pt+"),u=r("tk/3"),p=r("1kSV"),m=r("QGA0");const f=["content"];function h(t,e){if(1&t&&(a.Rb(0,"option",31),a.Ec(1),a.Qb()),2&t){const t=e.$implicit;a.lc("value",t.id),a.yb(1),a.Gc(" ",t.en_name," ")}}function v(t,e){if(1&t&&(a.Rb(0,"option",31),a.Ec(1),a.Qb()),2&t){const t=e.$implicit;a.lc("value",t.id),a.yb(1),a.Gc(" ",t.en_name," ")}}function y(t,e){1&t&&(a.Rb(0,"div",8),a.Rb(1,"div",9),a.Rb(2,"div",10),a.Rb(3,"label",32),a.Ec(4,"Price Editing Mode"),a.Qb(),a.Rb(5,"select",33),a.Rb(6,"option",34),a.Ec(7,"Discount"),a.Qb(),a.Rb(8,"option",34),a.Ec(9,"Edit only"),a.Qb(),a.Qb(),a.Qb(),a.Qb(),a.Qb()),2&t&&(a.yb(6),a.lc("ngValue",!0),a.yb(2),a.lc("ngValue",!1))}function Q(t,e){if(1&t){const t=a.Sb();a.Rb(0,"div",2),a.Rb(1,"h6",3),a.Ec(2),a.Qb(),a.Rb(3,"button",4),a.cc("click",(function(){return a.uc(t),a.ec().ok()})),a.Rb(4,"span",5),a.Ec(5,"\xd7"),a.Qb(),a.Qb(),a.Qb(),a.Rb(6,"div",6),a.Rb(7,"form",7),a.Rb(8,"div",8),a.Rb(9,"div",9),a.Rb(10,"div",10),a.Rb(11,"label"),a.Ec(12,"English Name"),a.Qb(),a.Mb(13,"input",11),a.Qb(),a.Qb(),a.Qb(),a.Rb(14,"div",12),a.Rb(15,"div",9),a.Rb(16,"div",10),a.Rb(17,"label"),a.Ec(18,"\u0627\u0644\u0627\u0633\u0645 \u0628\u0627\u0644\u0644\u063a\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629"),a.Qb(),a.Mb(19,"input",13),a.Qb(),a.Qb(),a.Qb(),a.Rb(20,"div",8),a.Rb(21,"div",9),a.Rb(22,"div",10),a.Rb(23,"label"),a.Ec(24,"English Description"),a.Qb(),a.Rb(25,"div",14),a.Mb(26,"textarea",15),a.Qb(),a.Qb(),a.Qb(),a.Qb(),a.Rb(27,"div",12),a.Rb(28,"div",9),a.Rb(29,"div",10),a.Rb(30,"label"),a.Ec(31,"\u0627\u0644\u0648\u0635\u0641 \u0628\u0627\u0644\u0644\u063a\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629"),a.Qb(),a.Rb(32,"div",14),a.Mb(33,"textarea",16),a.Qb(),a.Qb(),a.Qb(),a.Qb(),a.Rb(34,"div",8),a.Rb(35,"div",17),a.Rb(36,"div",10),a.Rb(37,"label"),a.Ec(38,"Category"),a.Qb(),a.Rb(39,"select",18),a.Cc(40,h,2,2,"option",19),a.Qb(),a.Qb(),a.Qb(),a.Qb(),a.Rb(41,"div",8),a.Rb(42,"div",17),a.Rb(43,"div",10),a.Rb(44,"label"),a.Ec(45,"Brand"),a.Qb(),a.Rb(46,"select",20),a.Cc(47,v,2,2,"option",19),a.Qb(),a.Qb(),a.Qb(),a.Qb(),a.Rb(48,"div",8),a.Rb(49,"div",9),a.Rb(50,"div",10),a.Rb(51,"label"),a.Ec(52,"Price"),a.Qb(),a.Mb(53,"input",21),a.Qb(),a.Qb(),a.Qb(),a.Cc(54,y,10,2,"div",22),a.Mb(55,"hr"),a.Rb(56,"div",8),a.Rb(57,"div",17),a.Rb(58,"div",10),a.Mb(59,"input",23),a.Rb(60,"label",24),a.Ec(61,"Is Main?"),a.Qb(),a.Qb(),a.Qb(),a.Qb(),a.Rb(62,"div",8),a.Rb(63,"div",17),a.Rb(64,"div",10),a.Mb(65,"input",25),a.Rb(66,"label",24),a.Ec(67,"Is Available?"),a.Qb(),a.Qb(),a.Qb(),a.Qb(),a.Mb(68,"hr"),a.Rb(69,"div",8),a.Rb(70,"div",17),a.Rb(71,"div",10),a.Rb(72,"label"),a.Ec(73,"Attachments"),a.Qb(),a.Mb(74,"input",26),a.Mb(75,"input",27),a.Rb(76,"app-attachments-uploader",28),a.cc("valueChange",(function(e){return a.uc(t),a.ec().setSelectedAttachment(e)})),a.Qb(),a.Qb(),a.Qb(),a.Qb(),a.Rb(77,"div",8),a.Rb(78,"div",29),a.Rb(79,"button",30),a.cc("click",(function(){return a.uc(t),a.ec().submit()})),a.Ec(80," Submit "),a.Qb(),a.Qb(),a.Qb(),a.Qb(),a.Qb()}if(2&t){const t=a.ec();a.yb(2),a.Fc(t.title),a.yb(5),a.lc("formGroup",t.formGroup),a.yb(33),a.lc("ngForOf",t.categories),a.yb(7),a.lc("ngForOf",t.brands),a.yb(7),a.lc("ngIf",t.isEdit&&t.formGroup.controls.price.touched),a.yb(20),a.zb("value",(null==t.formGroup||null==t.formGroup.value||null==t.formGroup.value.attachments?null:t.formGroup.value.attachments.length)||"Not selected"),a.yb(2),a.lc("limit",4)("attachments",t.attachments),a.yb(3),a.lc("disabled",t.uploading||!t.formGroup.dirty||!t.formGroup.valid)}}function R(t){return!Array.isArray(t.value)||t.value.length<1||t.value.length>4?{validateAttachments:{valid:!1}}:null}let g=(()=>{class t extends b.b{constructor(t,e,r,n){super(t,e,r,n),e.data.subscribe(t=>{this.brands=t.brands.data,this.categories=t.categories.data}),this.formGroup=new d.i({en_name:new d.f(null,d.C.required),ar_name:new d.f(null,d.C.required),en_description:new d.f(null,d.C.required),ar_description:new d.f(null,d.C.required),brand_id:new d.f(null,d.C.required),category_id:new d.f(null,d.C.required),price:new d.f(null,d.C.required),available:new d.f(!0,d.C.required),is_main:new d.f(!0,d.C.required),attachments:new d.f(null,[d.C.required,R])}),this.formGroup.controls.price.valueChanges.subscribe(t=>{const e=Number.parseFloat(t);this.isEdit&&null!=e&&(this.formGroup.controls.price.touched||this.formGroup.controls.price.dirty)&&this.formGroup.addControl("price_is_discount",new d.f(null,d.C.required))})}openModal(){return this.service.open(this.content,{backdrop:"static",keyboard:!1})}get postUrl(){return"productsCreateUrl"}get putUrl(){return"productsUpdateUrl"}get parentUrl(){return"/products"}initData(){super.initData(),this.isEdit&&this.route.parent.data.subscribe(t=>{this.route.params.subscribe(e=>{const r=Number.parseInt(e.id,10),n=t.resources.data.find(t=>t.id===r);n&&(this.attachments=n.attachments,this.formGroup.patchValue({price:n.price.value,attachments:this.attachments.map(t=>t.id)}))})})}setSelectedAttachment(t){if(!t||!t.ids||!t.entities||t.ids.length!==t.entities.length||t.ids.length>4)return console.log(t),console.log(t.ids.length),this.attachments=null,this.formGroup.controls.attachments.setValue(null),this.formGroup.controls.attachments.markAsTouched(),void this.formGroup.controls.attachments.markAsDirty();this.attachments=t.entities,this.formGroup.controls.attachments.setValue(t.ids),this.formGroup.controls.attachments.markAsTouched(),this.formGroup.controls.attachments.markAsDirty()}}return t.\u0275fac=function(e){return new(e||t)(a.Lb(u.b),a.Lb(o.a),a.Lb(o.f),a.Lb(p.r))},t.\u0275cmp=a.Fb({type:t,selectors:[["app-product-form"]],viewQuery:function(t,e){var r;1&t&&a.Jc(f,!0),2&t&&a.sc(r=a.dc())&&(e.content=r.first)},features:[a.vb],decls:4,vars:1,consts:[["type","info",3,"close"],["content",""],[1,"modal-header"],[1,"modal-title","pt-1","mt-1"],["type","button",1,"close",2,"border","none","outline","none",3,"click"],["aria-hidden","true"],[1,"modal-body"],[3,"formGroup"],[1,"row"],[1,"col-12","px-3"],[1,"form-group"],["type","text","placeholder","English Name","formControlName","en_name","autocomplete","off",1,"form-control"],["dir","rtl",1,"row"],["type","text","placeholder","\u0627\u0644\u0627\u0633\u0645 \u0628\u0627\u0644\u0644\u063a\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629","formControlName","ar_name","autocomplete","off",1,"form-control"],[1,"form-control","px-0","py-0"],["rows","5","placeholder","Description (Maximum allowed length 750 character)","maxlength","750","formControlName","en_description",2,"width","100%","border","none","outline","none !important","padding","10px !important"],["rows","5","placeholder","\u0627\u0644\u0648\u0635\u0641 \u0628\u0627\u0644\u0644\u063a\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629 (\u0627\u0644\u062d\u062f \u0627\u0644\u0623\u0642\u0635\u0649 \u0627\u0644\u0645\u0633\u0645\u0648\u062d \u0628\u0647 \u0644\u0637\u0648\u0644 \u0627\u0644\u0648\u0635\u0641 \u0647\u0648 750 \u062d\u0631\u0641)","maxlength","750","formControlName","ar_description",2,"width","100%","border","none","outline","none !important","padding","10px !important"],[1,"col-md-12","px-3"],["placeholder","Category","formControlName","category_id",1,"form-control"],[3,"value",4,"ngFor","ngForOf"],["placeholder","Brand","formControlName","brand_id",1,"form-control"],["type","number","placeholder","Price","formControlName","price","autocomplete","off",1,"form-control"],["class","row",4,"ngIf"],["type","checkbox","placeholder","Is Main?","formControlName","is_main",1,""],[1,"mx-1","mb-1"],["type","checkbox","placeholder","Is Available?","formControlName","available",1,""],["type","text","disabled","",1,"form-control"],["type","hidden","formControlName","attachments"],[1,"form-control","mt-2",3,"limit","attachments","valueChange"],[1,"update","ml-auto","mr-auto"],["type","submit",1,"btn","btn-primary","btn-round",3,"disabled","click"],[3,"value"],["for","price_is_discount"],["formControlName","price_is_discount","id","price_is_discount",1,"form-control"],[3,"ngValue"]],template:function(t,e){1&t&&(a.Rb(0,"ngb-alert",0),a.cc("close",(function(){return e.ok()})),a.Ec(1),a.Qb(),a.Cc(2,Q,81,9,"ng-template",null,1,a.Dc)),2&t&&(a.yb(1),a.Fc(e.message))},directives:[p.c,d.E,d.r,d.j,d.c,d.q,d.h,d.m,d.A,n.t,d.u,n.u,d.a,m.a,d.t,d.D],styles:[""]}),t})();var C=r("bz7F"),w=r("AMeL");let _=(()=>{class t{constructor(t){t.parent.data.subscribe(e=>{t.params.subscribe(t=>{const r=Number.parseInt(t.id,10),n=e.resources.data.find(t=>t.id===r);this.context={urls:{tableUrl:"/products"},data:n,properties:[{key:"en_name",title:"English Name",type:"string"},{key:"en_description",title:"English Description",type:"string"},{key:"ar_name",title:"Arabic Name",type:"string"},{key:"ar_description",title:"Arabic Description",type:"string"},{key:"brand.en_name",title:"Brand",type:"string"},{key:"category.en_name",title:"Cateogry",type:"string"},{key:"available",title:"Available?",type:"string"},{key:"price.value",title:"Price",type:"float"},{key:"price.is_discount",title:"Is Discount",type:"string"},{key:"created_at",title:"Created At",type:"datetime"},{key:"updated_at",title:"Updated At",type:"datetime"},{key:"attachments",title:"Attachments",type:"component",component:{type:C.a,configureInstance:(t,e)=>{var r,n;t.instance.attachments=null===(n=null===(r=this.context)||void 0===r?void 0:r.data)||void 0===n?void 0:n.attachments}}}],title:"Details of product "+(null==n?void 0:n.id)}})})}}return t.\u0275fac=function(e){return new(e||t)(a.Lb(o.a))},t.\u0275cmp=a.Fb({type:t,selectors:[["app-product-details"]],decls:1,vars:1,consts:[[3,"context"]],template:function(t,e){1&t&&a.Mb(0,"app-resource-details",0),2&t&&a.lc("context",e.context)},directives:[w.a],styles:[""]}),t})();var k=r("w+MF");let x=(()=>{class t{constructor(t){t.parent.data.subscribe(e=>{t.params.subscribe(t=>{const r=Number.parseInt(t.id,10),n=e.resources.data.find(t=>t.id===r);this.context={deleteUrl:"productsDeleteUrl",data:n,title:"Delete Product Resource!",description:"Are you sure to delete this product?"}})})}}return t.\u0275fac=function(e){return new(e||t)(a.Lb(o.a))},t.\u0275cmp=a.Fb({type:t,selectors:[["app-product-delete"]],decls:1,vars:1,consts:[[3,"context"]],template:function(t,e){1&t&&a.Mb(0,"app-resource-delete",0),2&t&&a.lc("context",e.context)},directives:[k.a],styles:[""]}),t})();var E=r("WWF+"),G=r("/7FJ");const A=[{path:"",component:l,runGuardsAndResolvers:(t,e)=>{var r;return null!==(r=history.state.runResolvers)&&void 0!==r&&r},resolve:{resources:s.a},children:[{path:"create",component:g,resolve:{categories:E.a,brands:G.a}},{path:":id/edit",component:g,resolve:{categories:E.a,brands:G.a}},{path:":id/details",pathMatch:"full",component:_},{path:":id/delete",pathMatch:"full",component:x}]}];let M=(()=>{class t{}return t.\u0275mod=a.Jb({type:t}),t.\u0275inj=a.Ib({factory:function(e){return new(e||t)},imports:[[o.j.forChild(A)],o.j]}),t})();var N=r("uP1v"),D=r("RDNO"),F=r("nHkx");let U=(()=>{class t{}return t.\u0275mod=a.Jb({type:t}),t.\u0275inj=a.Ib({factory:function(e){return new(e||t)},providers:[s.a,E.a,G.a,{provide:u.a,useClass:D.a,multi:!0}],imports:[[n.c,M,p.s,o.j,d.y,N.a,F.a]]}),t})()}}]);