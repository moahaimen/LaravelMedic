(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"0AOE":function(t,e,r){"use strict";r.r(e),r.d(e,"OrdersModule",(function(){return V}));var i=r("ofXK"),o=r("m1XX"),n=r("tyNb"),c=r("fXoL"),s=r("Ubi2"),a=r("3Pt+");const l=["table"];let d=(()=>{class t{constructor(t,e){this.route=t,this.router=e,this.status=t.snapshot.params.status,this.context={urls:{createUrl:"/orders/create",detailsUrl:"/:id"},data:this.data,properties:[{key:"status.title",title:"Status",type:"string"},{key:"client.name",title:"Name",type:"string"},{key:"client.phone",title:"Phone",type:"string"}],title:"Orders",actions:[{icon:"nc-icon nc-bell-55",type:"url",url:":id/status",name:"change status"},{icon:"nc-icon nc-single-copy-04",name:"print",type:"callback",callback:t=>{this.print(t)}}]},t.data.subscribe(t=>{this.data=t.resources,this.context.data=this.data}),t.queryParams.subscribe(t=>{this.status=(null==t?void 0:t.status)||-1})}print(t){this.router.navigate(["orders",t.id,"details"],{state:{resource:t,print:!0}})}filter(){this.router.navigate(["."],{relativeTo:this.route,queryParams:{status:this.status}})}}return t.\u0275fac=function(e){return new(e||t)(c.Lb(n.a),c.Lb(n.f))},t.\u0275cmp=c.Fb({type:t,selectors:[["app-index"]],viewQuery:function(t,e){var r;1&t&&c.Ic(l,!0),2&t&&c.sc(r=c.dc())&&(e.table=r.first)},decls:17,vars:2,consts:[[3,"context"],["table",""],[1,"option","btn","btn-secondary","btn-rounded","pull-right",3,"ngModel","ngModelChange","change"],["value","-1"],["value","0"],["value","1"],["value","2"],["value","3"],["value","4"],["value","5"]],template:function(t,e){1&t&&(c.Rb(0,"app-table-view",0,1),c.Rb(2,"select",2),c.cc("ngModelChange",(function(t){return e.status=t}))("change",(function(){return e.filter()})),c.Rb(3,"option",3),c.Dc(4,"All"),c.Qb(),c.Rb(5,"option",4),c.Dc(6,"Pending"),c.Qb(),c.Rb(7,"option",5),c.Dc(8,"Accepted"),c.Qb(),c.Rb(9,"option",6),c.Dc(10,"Shipping"),c.Qb(),c.Rb(11,"option",7),c.Dc(12,"Deliveried"),c.Qb(),c.Rb(13,"option",8),c.Dc(14,"Rejected"),c.Qb(),c.Rb(15,"option",9),c.Dc(16,"Canceled"),c.Qb(),c.Qb(),c.Qb()),2&t&&(c.lc("context",e.context),c.yb(2),c.lc("ngModel",e.status))},directives:[s.a,a.q,a.k,a.m,a.n,a.s],styles:[""]}),t})();var u=r("AytR"),b=r("9xMI");class p extends b.a{constructor(t,e,r,i){super(t),this.id=t,this.status=e,this.client=r,this.products=i}}class m{constructor(t,e,r,i){this.product=t,this.order=e,this.quantity=r,this.price=i}}var h=r("lJxs"),f=r("3hzH"),v=r("tk/3"),y=r("5dVO");let g=(()=>{class t{constructor(t,e){this.http=t,this.loader=e}static Json2Order(t){if(!t)return null;const e=((null==t?void 0:t.order_products)||(null==t?void 0:t.products)).map(e=>new m(new f.b(e.product.id,e.product.en_name,e.product.ar_name,e.product.en_description,e.product.ar_description,e.product.price_id,null,e.product.brand_id,null,e.product.category_id,null,e.product.created_at,e.product.updated_at,null),new p(null==t?void 0:t.id,null==t?void 0:t.status,null,null),e.quantity,new f.a(e.price.id,e.price.value,e.price.updated_at)));return new p(null==t?void 0:t.id,null==t?void 0:t.status,null==t?void 0:t.client,e)}resolve(e,r){return this.http.get(`${u.a.apiUrl}/${u.a.ordersFetchUrl}?status=${e.queryParams.status||-1}`).pipe(Object(h.a)(e=>e.map(e=>t.Json2Order(e))))}}return t.\u0275fac=function(e){return new(e||t)(c.Zb(v.b),c.Zb(y.a))},t.\u0275prov=c.Hb({token:t,factory:t.\u0275fac}),t})();var R=r("0PJQ"),Q=r("1kSV");function x(t,e){1&t&&(c.Rb(0,"th",7),c.Dc(1,"Actions"),c.Qb())}function w(t,e){if(1&t){const t=c.Sb();c.Rb(0,"td",9),c.Rb(1,"i",10),c.cc("click",(function(){c.uc(t);const e=c.ec().$implicit;return c.ec().context.edit(e)})),c.Qb(),c.Rb(2,"i",11),c.cc("click",(function(){c.uc(t);const e=c.ec().$implicit;return c.ec().context.remove(e)})),c.Qb(),c.Qb()}}function k(t,e){if(1&t&&(c.Rb(0,"tr"),c.Rb(1,"td"),c.Dc(2),c.Qb(),c.Rb(3,"td"),c.Dc(4),c.Qb(),c.Rb(5,"td"),c.Dc(6),c.Qb(),c.Rb(7,"td"),c.Dc(8),c.Qb(),c.Bc(9,w,3,0,"td",8),c.Qb()),2&t){const t=e.$implicit,r=c.ec();c.yb(2),c.Ec(t.product.en_name),c.yb(2),c.Ec(t.quantity),c.yb(2),c.Ec(t.price.value),c.yb(2),c.Ec(t.quantity*t.price.value),c.yb(1),c.lc("ngIf",r.context.editable)}}let D=(()=>{class t{set value(t){this.context.items=t}get value(){return this.context.items}ngOnInit(){}setItems(t){this.context.items=t}get total(){return this.context.items&&0!==this.context.items.length?this.context.items.reduce(this.reduceItem,0):0}reduceItem(t,e){return t+e.quantity*e.price.value}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Fb({type:t,selectors:[["app-order-products-details"]],inputs:{value:"value",property:"property",context:"context"},decls:22,vars:3,consts:[[1,"table-responsive","overflow-hidden"],[1,"table"],[1,"text-primary"],["class","text-right",4,"ngIf"],[4,"ngFor","ngForOf"],["colspan","3"],[1,"text-danger"],[1,"text-right"],["class","text-right actions",4,"ngIf"],[1,"text-right","actions"],["title","Edit",1,"fa","fa-edit","m-1","p-1",3,"click"],["title","Cancel",1,"fa","fa-times","m-1","p-1",3,"click"]],template:function(t,e){1&t&&(c.Rb(0,"div",0),c.Rb(1,"table",1),c.Rb(2,"thead",2),c.Rb(3,"th"),c.Dc(4,"Product"),c.Qb(),c.Rb(5,"th"),c.Dc(6,"Quantity"),c.Qb(),c.Rb(7,"th"),c.Dc(8,"Price"),c.Qb(),c.Rb(9,"th"),c.Dc(10,"Total"),c.Qb(),c.Bc(11,x,2,0,"th",3),c.Qb(),c.Rb(12,"tbody"),c.Bc(13,k,10,5,"tr",4),c.Qb(),c.Rb(14,"tfoot"),c.Rb(15,"tr"),c.Rb(16,"th",5),c.Dc(17,"\xa0"),c.Qb(),c.Rb(18,"th",6),c.Dc(19),c.Qb(),c.Rb(20,"th"),c.Dc(21,"\xa0"),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Qb()),2&t&&(c.yb(11),c.lc("ngIf",e.context.editable),c.yb(2),c.lc("ngForOf",e.context.items),c.yb(6),c.Ec(e.total))},directives:[i.n,i.m],styles:[""]}),t})();function C(t,e){if(1&t&&(c.Rb(0,"option",10),c.Dc(1),c.Qb()),2&t){const t=e.$implicit;c.lc("value",t.id),c.yb(1),c.Fc(" ",t.en_name," ")}}let O=(()=>{class t{constructor(t){this.http=t,this.onChange=()=>{},this.onTouch=()=>{},this.data=[],this.http.get(u.a.prepareUrl("productsFetchUrl")).subscribe(t=>this.products=t),this.itemForm=new a.e({product_id:new a.c(null,a.r.required),quantity:new a.c(1,[a.r.required,a.r.min(1)])}),this.context={editable:!0,edit:t=>{this.editItem(t)},remove:t=>{this.removeItem(t)},items:this.data}}set value(t){this.data=t,this.onChange(t),this.onTouch(t),this.context.items=t}writeValue(t){t||(t=[]),this.value=t}registerOnChange(t){this.onChange=t}registerOnTouched(t){this.onTouch=t}ngOnInit(){}get freeProducts(){return this.products?Array.isArray(this.data)&&0!==this.data.length?this.products.filter(t=>!this.data.some(e=>e.product.id.toString()===t.id.toString())):this.products:[]}addItem(){const t=this.products.find(t=>t.id.toString()===this.itemForm.value.product_id.toString()),e=Object.assign({product:t,price:t.price},this.itemForm.value);this.data.push(e),this.itemForm.reset(),this.writeValue(this.data)}removeItem(t){this.data.splice(this.data.indexOf(t),1),this.writeValue(this.data)}editItem(t){this.removeItem(t),this.itemForm.reset({product_id:t.product.id,quantity:t.quantity})}}return t.\u0275fac=function(e){return new(e||t)(c.Lb(v.b))},t.\u0275cmp=c.Fb({type:t,selectors:[["app-order-products-form"]],inputs:{data:"data"},features:[c.xb([{provide:a.j,useExisting:Object(c.T)(()=>t),multi:!0}])],decls:17,vars:4,consts:[[3,"context"],[1,"form",3,"formGroup"],[1,"row"],[1,"col","md-5"],[1,"form-group"],["formControlName","product_id",1,"form-control","form-control-sm"],[3,"value",4,"ngFor","ngForOf"],["type","text","formControlName","quantity",1,"form-control","form-control-sm"],[1,"col","md-2","d-flex","align-items-end"],[1,"btn","btn-md","btn-success",3,"disabled","click"],[3,"value"]],template:function(t,e){1&t&&(c.Mb(0,"app-order-products-details",0),c.Rb(1,"form",1),c.Rb(2,"div",2),c.Rb(3,"div",3),c.Rb(4,"div",4),c.Rb(5,"label"),c.Dc(6,"Product"),c.Qb(),c.Rb(7,"select",5),c.Bc(8,C,2,2,"option",6),c.Qb(),c.Qb(),c.Qb(),c.Rb(9,"div",3),c.Rb(10,"div",4),c.Rb(11,"label"),c.Dc(12,"Quantity"),c.Qb(),c.Mb(13,"input",7),c.Qb(),c.Qb(),c.Rb(14,"div",8),c.Rb(15,"button",9),c.cc("click",(function(){return e.addItem()})),c.Dc(16," OK "),c.Qb(),c.Qb(),c.Qb(),c.Qb()),2&t&&(c.lc("context",e.context),c.yb(1),c.lc("formGroup",e.itemForm),c.yb(7),c.lc("ngForOf",e.freeProducts),c.yb(7),c.lc("disabled",!e.itemForm.valid))},directives:[D,a.t,a.l,a.f,a.q,a.k,a.d,i.m,a.b,a.n,a.s],styles:[""]}),t})();function S(t,e){if(1&t&&(c.Rb(0,"option",13),c.Dc(1),c.Qb()),2&t){const t=e.$implicit;c.lc("value",t.id),c.yb(1),c.Ec(t.user_name)}}let F=(()=>{class t{constructor(t){this.http=t,this.onChange=()=>{},this.onTouch=()=>{},this.http.get(u.a.prepareUrl("usersFetchUrl")).subscribe(t=>this.users=t)}set value(t){this.data=t,this.onChange(t),this.onTouch(t)}writeValue(t){this.value=t}registerOnChange(t){this.onChange=t}registerOnTouched(t){this.onTouch=t}ngOnInit(){this.form.valueChanges.subscribe(t=>{this.writeValue(this.form.value)})}}return t.\u0275fac=function(e){return new(e||t)(c.Lb(v.b))},t.\u0275cmp=c.Fb({type:t,selectors:[["app-order-client-form"]],inputs:{form:"form"},features:[c.xb([{provide:a.j,useExisting:Object(c.T)(()=>t),multi:!0}])],decls:44,vars:2,consts:[["autocomplete","off",3,"formGroup"],[1,"row"],[1,"col-12","px-3"],[1,"form-group"],["type","text","placeholder","Name","formControlName","name","autocomplete","off",1,"form-control"],["type","email","placeholder","Email","formControlName","email","autocomplete","off",1,"form-control"],["type","text","placeholder","Phone","formControlName","phone","autocomplete","off",1,"form-control"],["type","text","placeholder","Province","formControlName","province","autocomplete","off",1,"form-control"],[1,"col-md-12","px-3"],["type","text","placeholder","Address","formControlName","address","autocomplete","off",1,"form-control"],["type","text","placeholder","Notes","formControlName","notes","autocomplete","off",1,"form-control"],["formControlName","user_id",1,"form-control"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(t,e){1&t&&(c.Rb(0,"form",0),c.Rb(1,"div",1),c.Rb(2,"div",2),c.Rb(3,"div",3),c.Rb(4,"label"),c.Dc(5,"Name"),c.Qb(),c.Mb(6,"input",4),c.Qb(),c.Qb(),c.Qb(),c.Rb(7,"div",1),c.Rb(8,"div",2),c.Rb(9,"div",3),c.Rb(10,"label"),c.Dc(11,"Email address"),c.Qb(),c.Mb(12,"input",5),c.Qb(),c.Qb(),c.Qb(),c.Rb(13,"div",1),c.Rb(14,"div",2),c.Rb(15,"div",3),c.Rb(16,"label"),c.Dc(17,"Phone"),c.Qb(),c.Mb(18,"input",6),c.Qb(),c.Qb(),c.Qb(),c.Rb(19,"div",1),c.Rb(20,"div",2),c.Rb(21,"div",3),c.Rb(22,"label"),c.Dc(23,"Province"),c.Qb(),c.Mb(24,"input",7),c.Qb(),c.Qb(),c.Qb(),c.Rb(25,"div",1),c.Rb(26,"div",8),c.Rb(27,"div",3),c.Rb(28,"label"),c.Dc(29,"Address"),c.Qb(),c.Mb(30,"input",9),c.Qb(),c.Qb(),c.Qb(),c.Rb(31,"div",1),c.Rb(32,"div",8),c.Rb(33,"div",3),c.Rb(34,"label"),c.Dc(35,"Notes"),c.Qb(),c.Mb(36,"input",10),c.Qb(),c.Qb(),c.Qb(),c.Rb(37,"div",1),c.Rb(38,"div",8),c.Rb(39,"div",3),c.Rb(40,"label"),c.Dc(41,"User (Optional)"),c.Qb(),c.Rb(42,"select",11),c.Bc(43,S,2,2,"option",12),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Qb()),2&t&&(c.lc("formGroup",e.form),c.yb(43),c.lc("ngForOf",e.users))},directives:[a.t,a.l,a.f,a.b,a.k,a.d,a.q,i.m,a.n,a.s],styles:[""]}),t})();const I=["content"];function M(t,e){if(1&t){const t=c.Sb();c.Rb(0,"div",2),c.Rb(1,"h6",3),c.Dc(2),c.Qb(),c.Rb(3,"button",4),c.cc("click",(function(){return c.uc(t),c.ec().ok()})),c.Rb(4,"span",5),c.Dc(5,"\xd7"),c.Qb(),c.Qb(),c.Qb(),c.Rb(6,"div",6),c.Rb(7,"form",7),c.Rb(8,"div",8),c.Rb(9,"div",9),c.Rb(10,"div",10),c.Rb(11,"label"),c.Dc(12,"Products"),c.Qb(),c.Rb(13,"div",11),c.Mb(14,"app-order-products-form",12),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Rb(15,"div",8),c.Rb(16,"div",9),c.Rb(17,"div",10),c.Rb(18,"label"),c.Dc(19,"Promo Code"),c.Qb(),c.Mb(20,"input",13),c.Qb(),c.Qb(),c.Qb(),c.Rb(21,"div",8),c.Rb(22,"div",9),c.Mb(23,"app-order-client-form",14),c.Qb(),c.Qb(),c.Rb(24,"div",8),c.Rb(25,"div",15),c.Rb(26,"button",16),c.cc("click",(function(){return c.uc(t),c.ec().submit()})),c.Dc(27," Submit "),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Qb()}if(2&t){const t=c.ec();c.yb(2),c.Ec(t.title),c.yb(5),c.lc("formGroup",t.formGroup),c.yb(16),c.lc("form",t.formGroup.controls.client),c.yb(3),c.lc("disabled",t.uploading||!t.formGroup.dirty||!t.formGroup.valid)}}let E=(()=>{class t extends R.b{constructor(t,e,r,i){super(t,e,r,i),this.formGroup=new a.e({promo_code:new a.c(null,[a.r.minLength(8),a.r.maxLength(8)]),products:new a.c(null,a.r.required),client:new a.e({name:new a.c(null,[a.r.required,a.r.minLength(3)]),email:new a.c(null,[a.r.required,a.r.email]),phone:new a.c(null,[a.r.required]),province:new a.c(null,[a.r.required]),address:new a.c(null,[a.r.required]),notes:new a.c(null,[a.r.minLength(10)]),user_id:new a.c(null)})})}openModal(){var t,e;return this.products=null===(e=g.Json2Order(null===(t=null===history||void 0===history?void 0:history.state)||void 0===t?void 0:t.resource))||void 0===e?void 0:e.products,this.service.open(this.content,{backdrop:"static",keyboard:!1})}get postUrl(){return"ordersCreateUrl"}get putUrl(){return"ordersUpdateUrl"}get parentUrl(){return"/orders"}}return t.\u0275fac=function(e){return new(e||t)(c.Lb(v.b),c.Lb(n.a),c.Lb(n.f),c.Lb(Q.h))},t.\u0275cmp=c.Fb({type:t,selectors:[["app-order-form"]],viewQuery:function(t,e){var r;1&t&&c.Ic(I,!0),2&t&&c.sc(r=c.dc())&&(e.content=r.first)},features:[c.vb],decls:4,vars:1,consts:[["type","info",3,"close"],["content",""],[1,"modal-header"],[1,"modal-title","pt-1","mt-1"],["type","button",1,"close",2,"border","none","outline","none",3,"click"],["aria-hidden","true"],[1,"modal-body"],[3,"formGroup"],[1,"row"],[1,"col-12","px-3"],[1,"form-group"],[1,"form-control"],["formControlName","products"],["type","text","placeholder","Ex. BX6GHIK8","formControlName","promo_code","autocomplete","off",1,"form-control"],[3,"form"],[1,"update","ml-auto","mr-auto"],["type","submit",1,"btn","btn-primary","btn-round",3,"disabled","click"]],template:function(t,e){1&t&&(c.Rb(0,"ngb-alert",0),c.cc("close",(function(){return e.ok()})),c.Dc(1),c.Qb(),c.Bc(2,M,28,4,"ng-template",null,1,c.Cc)),2&t&&(c.yb(1),c.Ec(e.message))},directives:[Q.b,a.t,a.l,a.f,O,a.k,a.d,a.b,F],styles:[""]}),t})();var P=r("AMeL");let q=(()=>{class t{constructor(t){t.parent.data.subscribe(e=>{t.params.subscribe(t=>{const r=Number.parseInt(t.id,10),i=e.resources.find(t=>t.id===r);this.productsContext={editable:!1,items:null==i?void 0:i.products},this.context={urls:{tableUrl:"/orders"},data:i,properties:[{key:"id",title:"Id",type:"string"},{key:"status.title",title:"Status",type:"string"},{key:"client.name",title:"Name",type:"string"},{key:"client.phone",title:"Phone",type:"string"},{key:"client.address",title:"Address",type:"string"},{key:"client.notes",title:"Notes",type:"string"},{key:"products",title:"Products",type:"component",component:"app-order-products-details"}],title:"Details of order "+(null==i?void 0:i.id),printable:!0}})})}}return t.\u0275fac=function(e){return new(e||t)(c.Lb(n.a))},t.\u0275cmp=c.Fb({type:t,selectors:[["app-order-details"]],decls:2,vars:2,consts:[[3,"context"]],template:function(t,e){1&t&&(c.Rb(0,"app-resource-details",0),c.Mb(1,"app-order-products-details",0),c.Qb()),2&t&&(c.lc("context",e.context),c.yb(1),c.lc("context",e.productsContext))},directives:[P.a,D],styles:[""]}),t})();var L=r("w+MF");let N=(()=>{class t{constructor(t){t.parent.data.subscribe(e=>{t.params.subscribe(t=>{const r=Number.parseInt(t.id,10),i=e.resources.find(t=>t.id===r);this.context={deleteUrl:"ordersDeleteUrl",data:i,title:"Delete Order Resource!",description:"Are you sure to delete this order?"}})})}}return t.\u0275fac=function(e){return new(e||t)(c.Lb(n.a))},t.\u0275cmp=c.Fb({type:t,selectors:[["app-order-delete"]],decls:1,vars:1,consts:[[3,"context"]],template:function(t,e){1&t&&c.Mb(0,"app-resource-delete",0),2&t&&c.lc("context",e.context)},directives:[L.a],styles:[""]}),t})();var U=r("OC8m");const _=["content"];function A(t,e){if(1&t&&(c.Rb(0,"option",12),c.Rb(1,"h3"),c.Dc(2),c.Qb(),c.Qb()),2&t){const t=e.$implicit;c.lc("value",t.value),c.yb(2),c.Ec(t.title)}}function B(t,e){if(1&t){const t=c.Sb();c.Rb(0,"div",2),c.Rb(1,"h6",3),c.Dc(2),c.Qb(),c.Rb(3,"p"),c.Dc(4),c.Qb(),c.Rb(5,"div",4),c.Rb(6,"div",5),c.Rb(7,"label",6),c.Dc(8,"Status"),c.Qb(),c.Rb(9,"select",7),c.cc("ngModelChange",(function(e){return c.uc(t),c.ec().selectedStatus=e})),c.Bc(10,A,3,2,"option",8),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Rb(11,"div",9),c.Rb(12,"button",10),c.cc("click",(function(){return c.uc(t),c.ec().change()})),c.Dc(13," Change "),c.Qb(),c.Rb(14,"button",11),c.cc("click",(function(){return c.uc(t),c.ec().ok()})),c.Dc(15," Cancel "),c.Qb(),c.Qb()}if(2&t){const t=c.ec();c.yb(2),c.Ec(t.title),c.yb(2),c.Ec(t.description),c.yb(5),c.lc("ngModel",t.selectedStatus),c.yb(1),c.lc("ngForOf",t.statuses),c.yb(2),c.lc("disabled",!t.selectedStatus)}}const T=[{path:"",component:d,runGuardsAndResolvers:(t,e)=>{var r;return null!==(r=history.state.runResolvers)&&void 0!==r&&r},resolve:{resources:g},children:[{path:"create",component:E},{path:":id/edit",component:E},{path:":id/details",pathMatch:"full",component:q},{path:":id/delete",pathMatch:"full",component:N},{path:":id/status",pathMatch:"full",component:(()=>{class t{constructor(t,e,r,i){this.http=t,this.route=e,this.modalService=r,this.notifier=i,this.statuses=[{title:"pending",value:0},{title:"accepted",value:1},{title:"shipping",value:2},{title:"deliveried",value:3},{title:"rejected",value:4},{title:"canceled",value:5}]}ngAfterViewInit(){this.route.parent.data.subscribe(t=>{this.route.params.subscribe(e=>{const r=Number.parseInt(e.id,10),i=t.resources.find(t=>t.id===r);if(this.data=i,this.modal=this.modalService.open(this.content,{backdrop:"static",keyboard:!1,size:"md"}),this.modal&&this.data)switch(this.title=`Change order ${this.data.id} status`,this.description="Please be aware that this very important action to take sometimes it is not able to take it back",console.log(this.data.status.title),Number.parseInt(this.data.status.title.toString(),10)){case 0:this.statuses=[{title:"accepted",value:1},{title:"rejected",value:4},{title:"canceled",value:5}];break;case 1:this.statuses=[{title:"shipping",value:2},{title:"deliveried",value:3}];break;case 2:this.statuses=[{title:"deliveried",value:3}];break;case 3:case 4:case 5:this.statuses=[]}else this.ok()})})}change(){const t={status:this.selectedStatus};this.http.put(u.a.prepareUrl("ordersStatusUrl",{id:this.data.id}),t).subscribe(t=>{if(t)return this.notifier.success("Order status updated successfully"),void this.ok();this.notifier.error("Somthing went wrong, Failed to delete the resource")})}ok(){this.modal?this.modal.dismiss():this.modalService.dismissAll(),history.back()}}return t.\u0275fac=function(e){return new(e||t)(c.Lb(v.b),c.Lb(n.a),c.Lb(Q.h),c.Lb(U.a))},t.\u0275cmp=c.Fb({type:t,selectors:[["app-order-status-form"]],viewQuery:function(t,e){var r;1&t&&c.Ic(_,!0),2&t&&c.sc(r=c.dc())&&(e.content=r.first)},decls:4,vars:0,consts:[["type","info",3,"close"],["content",""],[1,"modal-body"],[1,"modal-title","mt-1","pt-2"],[1,"form"],[1,"form-group"],[1,"form-group-label"],[1,"form-control",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[1,"modal-footer"],[1,"btn","btn-sm","btn-rounded","btn-danger",3,"disabled","click"],[1,"btn","btn-sm","btn-rounded","btn-secondary",3,"click"],[3,"value"]],template:function(t,e){1&t&&(c.Rb(0,"ngb-alert",0),c.cc("close",(function(){return e.ok()})),c.Dc(1,"Change Order Status"),c.Qb(),c.Bc(2,B,16,5,"ng-template",null,1,c.Cc))},directives:[Q.b,a.q,a.k,a.m,i.m,a.n,a.s],styles:[""]}),t})()}]}];let G=(()=>{class t{}return t.\u0275mod=c.Jb({type:t}),t.\u0275inj=c.Ib({factory:function(e){return new(e||t)},imports:[[n.i.forChild(T)],n.i]}),t})();var j=r("uP1v"),$=r("RDNO");let V=(()=>{class t{}return t.\u0275mod=c.Jb({type:t}),t.\u0275inj=c.Ib({factory:function(e){return new(e||t)},providers:[g,{provide:v.a,useClass:$.a,multi:!0}],imports:[[i.c,G,Q.i,n.i,a.g,a.p,j.a,o.b]]}),t})()},AMeL:function(t,e,r){"use strict";r.d(e,"a",(function(){return f}));var i=r("fXoL"),o=r("tyNb"),n=r("OC8m"),c=r("1kSV"),s=r("ofXK"),a=r("m1XX");const l=["content"];function d(t,e){1&t&&(i.Rb(0,"div"),i.jc(1,0,["[select]","prop.component","[property]","prop","[value]","context.data[prop.key]"]),i.Qb())}function u(t,e){if(1&t&&(i.Rb(0,"div"),i.Rb(1,"h6"),i.Dc(2),i.Qb(),i.Rb(3,"small"),i.Dc(4),i.fc(5,"uppercase"),i.Qb(),i.Qb()),2&t){const t=i.ec().$implicit,e=i.ec(2);i.yb(2),i.Ec(e.context.data.toTitle(t)),i.yb(2),i.Ec(i.gc(5,2,t.title))}}function b(t,e){if(1&t&&(i.Rb(0,"div",14),i.Pb(1,15),i.Bc(2,d,2,0,"div",16),i.Bc(3,u,6,4,"div",17),i.Ob(),i.Qb()),2&t){const t=e.$implicit;i.yb(1),i.lc("ngSwitch",t.type),i.yb(1),i.lc("ngSwitchCase","component")}}function p(t,e){1&t&&(i.Rb(0,"button",18),i.Dc(1," Print "),i.Qb()),2&t&&i.lc("useExistingCss",!0)}function m(t,e){if(1&t){const t=i.Sb();i.Rb(0,"div",2),i.Rb(1,"h6",3),i.Dc(2),i.Qb(),i.Rb(3,"button",4),i.cc("click",(function(){return i.uc(t),i.ec().done()})),i.Rb(4,"span",5),i.Dc(5,"\xd7"),i.Qb(),i.Qb(),i.Qb(),i.Rb(6,"div",6),i.Rb(7,"div",7),i.Bc(8,b,4,2,"div",8),i.Qb(),i.Rb(9,"div",9),i.Rb(10,"div",10),i.Bc(11,p,2,1,"button",11),i.Rb(12,"button",12),i.cc("click",(function(){return i.uc(t),i.ec().done()})),i.Mb(13,"i",13),i.Dc(14," Done "),i.Qb(),i.Qb(),i.Qb(),i.Qb()}if(2&t){const t=i.ec();i.yb(2),i.Ec(t.context.title),i.yb(6),i.lc("ngForOf",t.context.properties),i.yb(3),i.lc("ngIf",t.context.printable)}}const h=["*"];let f=(()=>{class t{constructor(t,e,r){this.router=t,this.notifier=e,this.modalService=r}ngAfterViewInit(){if(!this.context||!this.context.data||!this.context.properties)return this.notifier.warning("Something went wrong, Undefined context","Resource Details"),void this.done();this.modal=this.modalService.open(this.content,{size:"md",backdrop:"static",keyboard:!1}),history.state.print&&setTimeout(()=>{document.getElementById("printer").click()},250)}done(){var t,e;const r=(null===(e=null===(t=this.context)||void 0===t?void 0:t.urls)||void 0===e?void 0:e.tableUrl)||"/users";console.log(r),this.router.navigateByUrl(r).then(t=>{var e;t&&(null===(e=this.modal)||void 0===e||e.dismiss(),this.modalService.dismissAll())})}}return t.\u0275fac=function(e){return new(e||t)(i.Lb(o.f),i.Lb(n.a),i.Lb(c.h))},t.\u0275cmp=i.Fb({type:t,selectors:[["app-resource-details"]],viewQuery:function(t,e){var r;1&t&&i.Ic(l,!0),2&t&&i.sc(r=i.dc())&&(e.content=r.first)},inputs:{context:"context"},ngContentSelectors:h,decls:4,vars:1,consts:[["type","info",3,"close"],["content",""],[1,"modal-header"],[1,"modal-title","pt-1","mt-1"],["type","button",1,"close",2,"border","none","outline","none",3,"click"],["aria-hidden","true"],[1,"modal-body"],["id","resource-details",1,"list-group"],["class","list-group-item list-group-item-action",4,"ngFor","ngForOf"],[1,"row"],[1,"col-12","text-right"],["id","printer","class","btn btn-md btn-rounded btn-secondary px-3","printTitle","Resource Details","printSectionId","resource-details","ngxPrint","",3,"useExistingCss",4,"ngIf"],["type","button",1,"btn","btn-md","btn-rounded","btn-primary","px-3",3,"click"],[1,"nc-icon","nc-check-2"],[1,"list-group-item","list-group-item-action"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],["id","printer","printTitle","Resource Details","printSectionId","resource-details","ngxPrint","",1,"btn","btn-md","btn-rounded","btn-secondary","px-3",3,"useExistingCss"]],template:function(t,e){1&t&&(i.kc(),i.Rb(0,"ngb-alert",0),i.cc("close",(function(){return e.done()})),i.Dc(1),i.Qb(),i.Bc(2,m,15,3,"ng-template",null,1,i.Cc)),2&t&&(i.yb(1),i.Ec(e.context.title))},directives:[c.b,s.m,s.n,s.p,s.q,s.r,a.a],pipes:[s.x],styles:[""]}),t})()}}]);