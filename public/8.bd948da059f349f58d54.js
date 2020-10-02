(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"0AOE":function(t,e,r){"use strict";r.r(e),r.d(e,"OrdersModule",(function(){return H}));var i=r("ofXK"),n=r("m1XX"),o=r("tyNb"),c=r("9xMI");class s extends c.a{constructor(t,e,r,i){super(t),this.id=t,this.status=e,this.client=r,this.products=i}get highlight(){return this.status.title===l.Pending?"bg-highlighted":""}}class a{constructor(t,e,r,i){this.product=t,this.order=e,this.quantity=r,this.price=i}}let l=(()=>{class t{constructor(t){this.title=t}}return t.Pending=0,t.Accepted=1,t.Shipping=2,t.Deliveried=3,t.Rejected=4,t.Canceled=5,t})();var d=function(t){return t[t.Pending=0]="Pending",t[t.Accepted=1]="Accepted",t[t.Shipping=2]="Shipping",t[t.Deliveried=3]="Deliveried",t[t.Rejected=4]="Rejected",t[t.Canceled=5]="Canceled",t}({}),u=r("Ubi2"),b=r("fXoL");const p=["table"];let m=(()=>{class t{constructor(t,e){this.route=t,this.router=e,this.context={urls:{createUrl:"/orders/create",detailsUrl:"/:id"},pagination:void 0,properties:[{key:"status.title",title:"Status",type:"enum",enum:d},{key:"client.name",title:"Name",type:"string"},{key:"client.phone",title:"Phone",type:"string"}],title:"Orders",actions:[{icon:"nc-icon nc-bell-55",type:"url",url:":id/status",name:"change status"},{icon:"nc-icon nc-single-copy-04",name:"print",type:"callback",callback:t=>{this.print(t)}}]},u.a.initializePaginationContext(t,this.context)}print(t){this.router.navigate(["orders",t.id,"details"],{state:{resource:t,print:!0}})}}return t.\u0275fac=function(e){return new(e||t)(b.Lb(o.a),b.Lb(o.f))},t.\u0275cmp=b.Fb({type:t,selectors:[["app-index"]],viewQuery:function(t,e){var r;1&t&&b.Ic(p,!0),2&t&&b.sc(r=b.dc())&&(e.table=r.first)},decls:2,vars:1,consts:[[3,"context"],["table",""]],template:function(t,e){1&t&&b.Mb(0,"app-table-view",0,1),2&t&&b.lc("context",e.context)},directives:[u.a],styles:[""]}),t})();var h=r("tk/3"),f=r("AytR"),v=r("lJxs"),g=r("3hzH"),y=r("5dVO");let R=(()=>{class t{constructor(t,e){this.http=t,this.loader=e}static json2Order(t){if(!t)return null;const e=((null==t?void 0:t.order_products)||(null==t?void 0:t.products)).map(e=>new a(new g.b(e.product.id,e.product.en_name,e.product.ar_name,e.product.en_description,e.product.ar_description,e.product.available,e.product.is_main,e.product.price_id,null,e.product.brand_id,null,e.product.category_id,null,e.product.created_at,e.product.updated_at,null),new s(null==t?void 0:t.id,null==t?void 0:t.status,null,null),e.quantity,new g.a(e.price.id,e.price.value,e.price.updated_at,e.price.is_discount)));return new s(null==t?void 0:t.id,null==t?void 0:t.status,null==t?void 0:t.client,e)}resolve(e,r){let i=new h.f;return Object.keys(e.queryParams).forEach(t=>{e.queryParams[t]&&(i=i.set(t,e.queryParams[t]))}),this.http.get(f.a.prepareUrl("ordersFetchUrl"),{params:i}).pipe(Object(v.a)(e=>({data:e.data.map(e=>t.json2Order(e)),total:e.total,per_page:e.per_page,current_page:e.current_page,from:e.from,to:e.to,path:e.path,first_page_url:e.first_page_url,prev_page_url:e.prev_page_url,next_page_url:e.next_page_url,last_page_url:e.last_page_url,last_page:e.last_page,filter:new Map})))}}return t.\u0275fac=function(e){return new(e||t)(b.Zb(h.b),b.Zb(y.a))},t.\u0275prov=b.Hb({token:t,factory:t.\u0275fac}),t})();var Q=r("0PJQ"),x=r("3Pt+"),w=r("1kSV");function k(t,e){1&t&&(b.Rb(0,"th",7),b.Dc(1,"Actions"),b.Qb())}function D(t,e){if(1&t){const t=b.Sb();b.Rb(0,"td",9),b.Rb(1,"i",10),b.cc("click",(function(){b.uc(t);const e=b.ec().$implicit;return b.ec().context.edit(e)})),b.Qb(),b.Rb(2,"i",11),b.cc("click",(function(){b.uc(t);const e=b.ec().$implicit;return b.ec().context.remove(e)})),b.Qb(),b.Qb()}}function _(t,e){if(1&t&&(b.Rb(0,"tr"),b.Rb(1,"td"),b.Dc(2),b.Qb(),b.Rb(3,"td"),b.Dc(4),b.Qb(),b.Rb(5,"td"),b.Dc(6),b.Qb(),b.Rb(7,"td"),b.Dc(8),b.Qb(),b.Bc(9,D,3,0,"td",8),b.Qb()),2&t){const t=e.$implicit,r=b.ec();b.yb(2),b.Ec(t.product.en_name),b.yb(2),b.Ec(t.quantity),b.yb(2),b.Ec(t.price.value),b.yb(2),b.Ec(t.quantity*t.price.value),b.yb(1),b.lc("ngIf",r.context.editable)}}let C=(()=>{class t{set value(t){this.context.items=t}get value(){return this.context.items}ngOnInit(){}setItems(t){this.context.items=t}get fees(){var t;return(null===(t=this.context.province)||void 0===t?void 0:t.fees)||0}get total(){return this.context.items&&0!==this.context.items.length?this.context.items.reduce(this.reduceItem,0):0}get totalWithFees(){return this.total+this.fees}reduceItem(t,e){return t+e.quantity*e.price.value}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=b.Fb({type:t,selectors:[["app-order-products-details"]],inputs:{value:"value",property:"property",context:"context"},decls:29,vars:4,consts:[[1,"table-responsive","overflow-hidden"],[1,"table"],[1,"text-primary"],["class","text-right",4,"ngIf"],[4,"ngFor","ngForOf"],["colspan","3"],[1,"text-danger"],[1,"text-right"],["class","text-right actions",4,"ngIf"],[1,"text-right","actions"],["title","Edit",1,"fa","fa-edit","m-1","p-1",3,"click"],["title","Cancel",1,"fa","fa-times","m-1","p-1",3,"click"]],template:function(t,e){1&t&&(b.Rb(0,"div",0),b.Rb(1,"table",1),b.Rb(2,"thead",2),b.Rb(3,"th"),b.Dc(4,"Product"),b.Qb(),b.Rb(5,"th"),b.Dc(6,"Quantity"),b.Qb(),b.Rb(7,"th"),b.Dc(8,"Price"),b.Qb(),b.Rb(9,"th"),b.Dc(10,"Total"),b.Qb(),b.Bc(11,k,2,0,"th",3),b.Qb(),b.Rb(12,"tbody"),b.Bc(13,_,10,5,"tr",4),b.Qb(),b.Rb(14,"tfoot"),b.Rb(15,"tr"),b.Rb(16,"th",5),b.Dc(17," Shipping Fees "),b.Qb(),b.Rb(18,"th",6),b.Dc(19),b.Qb(),b.Rb(20,"th"),b.Dc(21,"\xa0"),b.Qb(),b.Qb(),b.Rb(22,"tr"),b.Rb(23,"th",5),b.Dc(24,"\xa0"),b.Qb(),b.Rb(25,"th",6),b.Dc(26),b.Qb(),b.Rb(27,"th"),b.Dc(28,"\xa0"),b.Qb(),b.Qb(),b.Qb(),b.Qb(),b.Qb()),2&t&&(b.yb(11),b.lc("ngIf",e.context.editable),b.yb(2),b.lc("ngForOf",e.context.items),b.yb(6),b.Ec(e.fees),b.yb(7),b.Ec(e.totalWithFees))},directives:[i.n,i.m],styles:[""]}),t})();function F(t,e){if(1&t&&(b.Rb(0,"option",10),b.Dc(1),b.Qb()),2&t){const t=e.$implicit;b.lc("value",t.id),b.yb(1),b.Fc(" ",t.en_name," ")}}let S=(()=>{class t{constructor(t,e){this.http=t,this.onChange=()=>{},this.onTouch=()=>{},this.data=[],this.itemForm=new x.e({product_id:new x.c(null,x.r.required),quantity:new x.c(1,[x.r.required,x.r.min(1)])}),this.context={editable:!0,edit:t=>{this.editItem(t)},remove:t=>{this.removeItem(t)},items:this.data,province:void 0},e.parent.data.subscribe(t=>{this.products=t.products.data,e.params.subscribe(e=>{const r=Number.parseInt(e.id,10),i=t.resources.data.find(t=>t.id===r);if(!i)return;const n=i.client.province,o=t.provinces.data.find(t=>t.ar_name===n||t.en_name===n);this.context.province=o})})}set value(t){this.data=t,this.onChange(t),this.onTouch(t),this.context.items=t}writeValue(t){t||(t=[]),this.value=t}registerOnChange(t){this.onChange=t}registerOnTouched(t){this.onTouch=t}ngOnInit(){}get freeProducts(){return this.products?Array.isArray(this.data)&&0!==this.data.length?this.products.filter(t=>!this.data.some(e=>e.product.id.toString()===t.id.toString())):this.products:[]}addItem(){const t=this.products.find(t=>t.id.toString()===this.itemForm.value.product_id.toString()),e=Object.assign({product:t,price:t.price},this.itemForm.value);this.data.push(e),this.itemForm.reset(),this.writeValue(this.data)}removeItem(t){this.data.splice(this.data.indexOf(t),1),this.writeValue(this.data)}editItem(t){this.removeItem(t),this.itemForm.reset({product_id:t.product.id,quantity:t.quantity})}}return t.\u0275fac=function(e){return new(e||t)(b.Lb(h.b),b.Lb(o.a))},t.\u0275cmp=b.Fb({type:t,selectors:[["app-order-products-form"]],inputs:{data:"data"},features:[b.xb([{provide:x.j,useExisting:Object(b.T)(()=>t),multi:!0}])],decls:17,vars:4,consts:[[3,"context"],[1,"form",3,"formGroup"],[1,"row"],[1,"col","md-5"],[1,"form-group"],["formControlName","product_id",1,"form-control","form-control-sm"],[3,"value",4,"ngFor","ngForOf"],["type","text","formControlName","quantity",1,"form-control","form-control-sm"],[1,"col","md-2","d-flex","align-items-end"],[1,"btn","btn-md","btn-success",3,"disabled","click"],[3,"value"]],template:function(t,e){1&t&&(b.Mb(0,"app-order-products-details",0),b.Rb(1,"form",1),b.Rb(2,"div",2),b.Rb(3,"div",3),b.Rb(4,"div",4),b.Rb(5,"label"),b.Dc(6,"Product"),b.Qb(),b.Rb(7,"select",5),b.Bc(8,F,2,2,"option",6),b.Qb(),b.Qb(),b.Qb(),b.Rb(9,"div",3),b.Rb(10,"div",4),b.Rb(11,"label"),b.Dc(12,"Quantity"),b.Qb(),b.Mb(13,"input",7),b.Qb(),b.Qb(),b.Rb(14,"div",8),b.Rb(15,"button",9),b.cc("click",(function(){return e.addItem()})),b.Dc(16," OK "),b.Qb(),b.Qb(),b.Qb(),b.Qb()),2&t&&(b.lc("context",e.context),b.yb(1),b.lc("formGroup",e.itemForm),b.yb(7),b.lc("ngForOf",e.freeProducts),b.yb(7),b.lc("disabled",!e.itemForm.valid))},directives:[C,x.t,x.l,x.f,x.q,x.k,x.d,i.m,x.b,x.n,x.s],styles:[""]}),t})();function I(t,e){if(1&t&&(b.Rb(0,"option",12),b.Dc(1),b.Qb()),2&t){const t=e.$implicit;b.lc("value",t.id),b.yb(1),b.Ec(t.user_name)}}let O=(()=>{class t{constructor(t){this.http=t,this.onChange=()=>{},this.onTouch=()=>{},this.http.get(f.a.prepareUrl("usersFetchUrl")).subscribe(t=>this.users=t)}set value(t){this.data=t,this.onChange(t),this.onTouch(t)}writeValue(t){this.value=t}registerOnChange(t){this.onChange=t}registerOnTouched(t){this.onTouch=t}ngOnInit(){this.form.valueChanges.subscribe(t=>{this.writeValue(this.form.value)})}}return t.\u0275fac=function(e){return new(e||t)(b.Lb(h.b))},t.\u0275cmp=b.Fb({type:t,selectors:[["app-order-client-form"]],inputs:{form:"form"},features:[b.xb([{provide:x.j,useExisting:Object(b.T)(()=>t),multi:!0}])],decls:38,vars:2,consts:[["autocomplete","off",3,"formGroup"],[1,"row"],[1,"col-12","px-3"],[1,"form-group"],["type","text","placeholder","Name","formControlName","name","autocomplete","off",1,"form-control"],["type","text","placeholder","Phone","formControlName","phone","autocomplete","off",1,"form-control"],["type","text","placeholder","Province","formControlName","province","autocomplete","off",1,"form-control"],[1,"col-md-12","px-3"],["type","text","placeholder","Address","formControlName","address","autocomplete","off",1,"form-control"],["type","text","placeholder","Notes","formControlName","notes","autocomplete","off",1,"form-control"],["formControlName","user_id",1,"form-control"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(t,e){1&t&&(b.Rb(0,"form",0),b.Rb(1,"div",1),b.Rb(2,"div",2),b.Rb(3,"div",3),b.Rb(4,"label"),b.Dc(5,"Name"),b.Qb(),b.Mb(6,"input",4),b.Qb(),b.Qb(),b.Qb(),b.Rb(7,"div",1),b.Rb(8,"div",2),b.Rb(9,"div",3),b.Rb(10,"label"),b.Dc(11,"Phone"),b.Qb(),b.Mb(12,"input",5),b.Qb(),b.Qb(),b.Qb(),b.Rb(13,"div",1),b.Rb(14,"div",2),b.Rb(15,"div",3),b.Rb(16,"label"),b.Dc(17,"Province"),b.Qb(),b.Mb(18,"input",6),b.Qb(),b.Qb(),b.Qb(),b.Rb(19,"div",1),b.Rb(20,"div",7),b.Rb(21,"div",3),b.Rb(22,"label"),b.Dc(23,"Address"),b.Qb(),b.Mb(24,"input",8),b.Qb(),b.Qb(),b.Qb(),b.Rb(25,"div",1),b.Rb(26,"div",7),b.Rb(27,"div",3),b.Rb(28,"label"),b.Dc(29,"Notes"),b.Qb(),b.Mb(30,"input",9),b.Qb(),b.Qb(),b.Qb(),b.Rb(31,"div",1),b.Rb(32,"div",7),b.Rb(33,"div",3),b.Rb(34,"label"),b.Dc(35,"User (Optional)"),b.Qb(),b.Rb(36,"select",10),b.Bc(37,I,2,2,"option",11),b.Qb(),b.Qb(),b.Qb(),b.Qb(),b.Qb()),2&t&&(b.lc("formGroup",e.form),b.yb(37),b.lc("ngForOf",e.users))},directives:[x.t,x.l,x.f,x.b,x.k,x.d,x.q,i.m,x.n,x.s],styles:[""]}),t})();const P=["content"];function L(t,e){if(1&t){const t=b.Sb();b.Rb(0,"div",2),b.Rb(1,"h6",3),b.Dc(2),b.Qb(),b.Rb(3,"button",4),b.cc("click",(function(){return b.uc(t),b.ec().ok()})),b.Rb(4,"span",5),b.Dc(5,"\xd7"),b.Qb(),b.Qb(),b.Qb(),b.Rb(6,"div",6),b.Rb(7,"form",7),b.Rb(8,"div",8),b.Rb(9,"div",9),b.Rb(10,"div",10),b.Rb(11,"label"),b.Dc(12,"Products"),b.Qb(),b.Rb(13,"div",11),b.Mb(14,"app-order-products-form",12),b.Qb(),b.Qb(),b.Qb(),b.Qb(),b.Rb(15,"div",8),b.Rb(16,"div",9),b.Rb(17,"div",10),b.Rb(18,"label"),b.Dc(19,"Promo Code"),b.Qb(),b.Mb(20,"input",13),b.Qb(),b.Qb(),b.Qb(),b.Rb(21,"div",8),b.Rb(22,"div",9),b.Mb(23,"app-order-client-form",14),b.Qb(),b.Qb(),b.Rb(24,"div",8),b.Rb(25,"div",15),b.Rb(26,"button",16),b.cc("click",(function(){return b.uc(t),b.ec().submit()})),b.Dc(27," Submit "),b.Qb(),b.Qb(),b.Qb(),b.Qb(),b.Qb()}if(2&t){const t=b.ec();b.yb(2),b.Ec(t.title),b.yb(5),b.lc("formGroup",t.formGroup),b.yb(16),b.lc("form",t.formGroup.controls.client),b.yb(3),b.lc("disabled",t.uploading||!t.formGroup.dirty||!t.formGroup.valid)}}let M=(()=>{class t extends Q.b{constructor(t,e,r,i){super(t,e,r,i),this.formGroup=new x.e({promo_code:new x.c(null,[x.r.minLength(8),x.r.maxLength(8)]),products:new x.c(null,x.r.required),client:new x.e({name:new x.c(null,[x.r.required,x.r.minLength(3)]),phone:new x.c(null,[x.r.required]),province:new x.c(null,[x.r.required]),address:new x.c(null,[x.r.required]),notes:new x.c(null),user_id:new x.c(null)})})}openModal(){var t,e;return this.products=null===(e=R.json2Order(null===(t=null===history||void 0===history?void 0:history.state)||void 0===t?void 0:t.resource))||void 0===e?void 0:e.products,this.service.open(this.content,{backdrop:"static",keyboard:!1})}get postUrl(){return"ordersCreateUrl"}get putUrl(){return"ordersUpdateUrl"}get parentUrl(){return"/orders"}}return t.\u0275fac=function(e){return new(e||t)(b.Lb(h.b),b.Lb(o.a),b.Lb(o.f),b.Lb(w.d))},t.\u0275cmp=b.Fb({type:t,selectors:[["app-order-form"]],viewQuery:function(t,e){var r;1&t&&b.Ic(P,!0),2&t&&b.sc(r=b.dc())&&(e.content=r.first)},features:[b.vb],decls:4,vars:1,consts:[["type","info",3,"close"],["content",""],[1,"modal-header"],[1,"modal-title","pt-1","mt-1"],["type","button",1,"close",2,"border","none","outline","none",3,"click"],["aria-hidden","true"],[1,"modal-body"],[3,"formGroup"],[1,"row"],[1,"col-12","px-3"],[1,"form-group"],[1,"form-control"],["formControlName","products"],["type","text","placeholder","Ex. BX6GHIK8","formControlName","promo_code","autocomplete","off",1,"form-control"],[3,"form"],[1,"update","ml-auto","mr-auto"],["type","submit",1,"btn","btn-primary","btn-round",3,"disabled","click"]],template:function(t,e){1&t&&(b.Rb(0,"ngb-alert",0),b.cc("close",(function(){return e.ok()})),b.Dc(1),b.Qb(),b.Bc(2,L,28,4,"ng-template",null,1,b.Cc)),2&t&&(b.yb(1),b.Ec(e.message))},directives:[w.b,x.t,x.l,x.f,S,x.k,x.d,x.b,O],styles:[""]}),t})();var E=r("OC8m"),N=r("AMeL");let q=(()=>{class t{constructor(t,e){t.parent.data.subscribe(r=>{t.params.subscribe(t=>{const i=Number.parseInt(t.id,10),n=r.resources.data.find(t=>t.id===i);console.log(n);const o=n.client.province,c=r.provinces.data.find(t=>t.ar_name===o||t.en_name===o);o&&c||e.error("Failed to detect order's province, Fees will not calculated."),this.productsContext={editable:!1,items:null==n?void 0:n.products,province:c},this.context={urls:{tableUrl:"/orders"},data:n,properties:[{key:"id",title:"Id",type:"string"},{key:"status.title",title:"Status",type:"enum",enum:d},{key:"client.name",title:"Name",type:"string"},{key:"client.phone",title:"Phone",type:"string"},{key:"client.province",title:"Province",type:"string"},{key:"client.address",title:"Address",type:"string"},{key:"client.notes",title:"Notes",type:"string"},{key:"products",title:"Products",type:"component",component:"app-order-products-details"}],title:"Details of order "+(null==n?void 0:n.id),printable:!0}})})}}return t.\u0275fac=function(e){return new(e||t)(b.Lb(o.a),b.Lb(E.a))},t.\u0275cmp=b.Fb({type:t,selectors:[["app-order-details"]],decls:2,vars:2,consts:[[3,"context"]],template:function(t,e){1&t&&(b.Rb(0,"app-resource-details",0),b.Mb(1,"app-order-products-details",0),b.Qb()),2&t&&(b.lc("context",e.context),b.yb(1),b.lc("context",e.productsContext))},directives:[N.a,C],styles:[""]}),t})();var U=r("w+MF");let A=(()=>{class t{constructor(t){t.parent.data.subscribe(e=>{t.params.subscribe(t=>{const r=Number.parseInt(t.id,10),i=e.resources.data.find(t=>t.id===r);this.context={deleteUrl:"ordersDeleteUrl",data:i,title:"Delete Order Resource!",description:"Are you sure to delete this order?"}})})}}return t.\u0275fac=function(e){return new(e||t)(b.Lb(o.a))},t.\u0275cmp=b.Fb({type:t,selectors:[["app-order-delete"]],decls:1,vars:1,consts:[[3,"context"]],template:function(t,e){1&t&&b.Mb(0,"app-resource-delete",0),2&t&&b.lc("context",e.context)},directives:[U.a],styles:[""]}),t})();const j=["content"];function B(t,e){if(1&t&&(b.Rb(0,"option",12),b.Rb(1,"h3"),b.Dc(2),b.Qb(),b.Qb()),2&t){const t=e.$implicit;b.lc("value",t.value),b.yb(2),b.Ec(t.title)}}function T(t,e){if(1&t){const t=b.Sb();b.Rb(0,"div",2),b.Rb(1,"h6",3),b.Dc(2),b.Qb(),b.Rb(3,"p"),b.Dc(4),b.Qb(),b.Rb(5,"div",4),b.Rb(6,"div",5),b.Rb(7,"label",6),b.Dc(8,"Status"),b.Qb(),b.Rb(9,"select",7),b.cc("ngModelChange",(function(e){return b.uc(t),b.ec().selectedStatus=e})),b.Bc(10,B,3,2,"option",8),b.Qb(),b.Qb(),b.Qb(),b.Qb(),b.Rb(11,"div",9),b.Rb(12,"button",10),b.cc("click",(function(){return b.uc(t),b.ec().change()})),b.Dc(13," Change "),b.Qb(),b.Rb(14,"button",11),b.cc("click",(function(){return b.uc(t),b.ec().ok()})),b.Dc(15," Cancel "),b.Qb(),b.Qb()}if(2&t){const t=b.ec();b.yb(2),b.Ec(t.title),b.yb(2),b.Ec(t.description),b.yb(5),b.lc("ngModel",t.selectedStatus),b.yb(1),b.lc("ngForOf",t.statuses),b.yb(2),b.lc("disabled",!t.selectedStatus)}}let G=(()=>{class t{constructor(t,e,r,i,n){this.http=t,this.router=e,this.route=r,this.modalService=i,this.notifier=n,this.statuses=[{title:"pending",value:0},{title:"accepted",value:1},{title:"shipping",value:2},{title:"deliveried",value:3},{title:"rejected",value:4},{title:"canceled",value:5}]}ngAfterViewInit(){const t=this.route.parent.snapshot.data,e=Number.parseInt(this.route.snapshot.params.id,10),r=t.resources.data.find(t=>t.id===e);if(this.data=r,this.modal=this.modalService.open(this.content,{backdrop:"static",keyboard:!1,size:"md"}),this.modal&&this.data)switch(this.title=`Change order ${this.data.id} status`,this.description="Please be aware that this very important action to take sometimes it is not able to take it back",console.log(this.data.status.title),Number.parseInt(this.data.status.title.toString(),10)){case 0:this.statuses=[{title:"accepted",value:1},{title:"rejected",value:4},{title:"canceled",value:5}];break;case 1:this.statuses=[{title:"shipping",value:2},{title:"deliveried",value:3}];break;case 2:this.statuses=[{title:"deliveried",value:3}];break;case 3:case 4:case 5:this.statuses=[]}else this.ok()}change(){const t={status:this.selectedStatus};this.http.put(f.a.prepareUrl("ordersStatusUrl",{id:this.data.id}),t).subscribe(t=>{if(t)return this.notifier.success("Order status updated successfully"),history.state.runResolvers=!0,void this.ok();this.notifier.error("Somthing went wrong, Failed to delete the resource")})}ok(){this.modal.dismiss(),this.modalService.dismissAll(),setTimeout(()=>{this.router.navigateByUrl("/orders")},125)}}return t.\u0275fac=function(e){return new(e||t)(b.Lb(h.b),b.Lb(o.f),b.Lb(o.a),b.Lb(w.d),b.Lb(E.a))},t.\u0275cmp=b.Fb({type:t,selectors:[["app-order-status-form"]],viewQuery:function(t,e){var r;1&t&&b.Ic(j,!0),2&t&&b.sc(r=b.dc())&&(e.content=r.first)},decls:4,vars:0,consts:[["type","info",3,"close"],["content",""],[1,"modal-body"],[1,"modal-title","mt-1","pt-2"],[1,"form"],[1,"form-group"],[1,"form-group-label"],[1,"form-control",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[1,"modal-footer"],[1,"btn","btn-sm","btn-rounded","btn-danger",3,"disabled","click"],[1,"btn","btn-sm","btn-rounded","btn-secondary",3,"click"],[3,"value"]],template:function(t,e){1&t&&(b.Rb(0,"ngb-alert",0),b.cc("close",(function(){return e.ok()})),b.Dc(1,"Change Order Status"),b.Qb(),b.Bc(2,T,16,5,"ng-template",null,1,b.Cc))},directives:[w.b,x.q,x.k,x.m,i.m,x.n,x.s],styles:[""]}),t})();var V=r("mFXk"),X=r("I3rL");const $=[{path:"",component:m,runGuardsAndResolvers:(t,e)=>{var r;return null!==(r=history.state.runResolvers)&&void 0!==r&&r},resolve:{resources:R,provinces:V.a,products:X.a},children:[{path:"create",component:M},{path:":id/edit",component:M},{path:":id/details",pathMatch:"full",component:q},{path:":id/delete",pathMatch:"full",component:A},{path:":id/status",pathMatch:"full",component:G}]}];let J=(()=>{class t{}return t.\u0275mod=b.Jb({type:t}),t.\u0275inj=b.Ib({factory:function(e){return new(e||t)},imports:[[o.i.forChild($)],o.i]}),t})();var z=r("uP1v"),K=r("RDNO");let H=(()=>{class t{}return t.\u0275mod=b.Jb({type:t}),t.\u0275inj=b.Ib({factory:function(e){return new(e||t)},providers:[R,V.a,X.a,{provide:h.a,useClass:K.a,multi:!0}],imports:[[i.c,J,w.e,o.i,x.g,x.p,z.a,n.b]]}),t})()},AMeL:function(t,e,r){"use strict";r.d(e,"a",(function(){return f}));var i=r("fXoL"),n=r("tyNb"),o=r("OC8m"),c=r("1kSV"),s=r("ofXK"),a=r("m1XX");const l=["content"];function d(t,e){1&t&&(i.Rb(0,"div"),i.jc(1,0,["[select]","prop.component","[property]","prop","[value]","context.data[prop.key]"]),i.Qb())}function u(t,e){if(1&t&&(i.Rb(0,"div"),i.Rb(1,"h6"),i.Dc(2),i.Qb(),i.Rb(3,"small"),i.Dc(4),i.fc(5,"uppercase"),i.Qb(),i.Qb()),2&t){const t=i.ec().$implicit,e=i.ec(2);i.yb(2),i.Ec(e.context.data.toTitle(t)),i.yb(2),i.Ec(i.gc(5,2,t.title))}}function b(t,e){if(1&t&&(i.Rb(0,"div",14),i.Pb(1,15),i.Bc(2,d,2,0,"div",16),i.Bc(3,u,6,4,"div",17),i.Ob(),i.Qb()),2&t){const t=e.$implicit;i.yb(1),i.lc("ngSwitch",t.type),i.yb(1),i.lc("ngSwitchCase","component")}}function p(t,e){if(1&t&&(i.Rb(0,"button",18),i.Dc(1," Print "),i.Qb()),2&t){const t=i.ec(2);i.lc("useExistingCss",!0)("printTitle",t.context.title)}}function m(t,e){if(1&t){const t=i.Sb();i.Rb(0,"div",2),i.Rb(1,"h6",3),i.Dc(2),i.Qb(),i.Rb(3,"button",4),i.cc("click",(function(){return i.uc(t),i.ec().done()})),i.Rb(4,"span",5),i.Dc(5,"\xd7"),i.Qb(),i.Qb(),i.Qb(),i.Rb(6,"div",6),i.Rb(7,"div",7),i.Bc(8,b,4,2,"div",8),i.Qb(),i.Rb(9,"div",9),i.Rb(10,"div",10),i.Bc(11,p,2,2,"button",11),i.Rb(12,"button",12),i.cc("click",(function(){return i.uc(t),i.ec().done()})),i.Mb(13,"i",13),i.Dc(14," Done "),i.Qb(),i.Qb(),i.Qb(),i.Qb()}if(2&t){const t=i.ec();i.yb(2),i.Ec(t.context.title),i.yb(6),i.lc("ngForOf",t.context.properties),i.yb(3),i.lc("ngIf",t.context.printable)}}const h=["*"];let f=(()=>{class t{constructor(t,e,r){this.router=t,this.notifier=e,this.modalService=r}ngAfterViewInit(){if(!this.context||!this.context.data||!this.context.properties)return this.notifier.warning("Something went wrong, Undefined context","Resource Details"),void this.done();this.modal=this.modalService.open(this.content,{size:"md",backdrop:"static",keyboard:!1}),history.state.print&&setTimeout(()=>{document.getElementById("printer").click()},2e3)}done(){var t,e;const r=(null===(e=null===(t=this.context)||void 0===t?void 0:t.urls)||void 0===e?void 0:e.tableUrl)||"/users";console.log(r),this.router.navigateByUrl(r).then(t=>{var e;t&&(null===(e=this.modal)||void 0===e||e.dismiss(),this.modalService.dismissAll())})}}return t.\u0275fac=function(e){return new(e||t)(i.Lb(n.f),i.Lb(o.a),i.Lb(c.d))},t.\u0275cmp=i.Fb({type:t,selectors:[["app-resource-details"]],viewQuery:function(t,e){var r;1&t&&i.Ic(l,!0),2&t&&i.sc(r=i.dc())&&(e.content=r.first)},inputs:{context:"context"},ngContentSelectors:h,decls:4,vars:1,consts:[["type","info",3,"close"],["content",""],[1,"modal-header"],[1,"modal-title","pt-1","mt-1"],["type","button",1,"close",2,"border","none","outline","none",3,"click"],["aria-hidden","true"],[1,"modal-body"],["id","resource-details",1,"list-group"],["class","list-group-item list-group-item-action",4,"ngFor","ngForOf"],[1,"row"],[1,"col-12","text-right"],["id","printer","class","btn btn-md btn-rounded btn-secondary px-3","printSectionId","resource-details","ngxPrint","",3,"useExistingCss","printTitle",4,"ngIf"],["type","button",1,"btn","btn-md","btn-rounded","btn-primary","px-3",3,"click"],[1,"nc-icon","nc-check-2"],[1,"list-group-item","list-group-item-action"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],["id","printer","printSectionId","resource-details","ngxPrint","",1,"btn","btn-md","btn-rounded","btn-secondary","px-3",3,"useExistingCss","printTitle"]],template:function(t,e){1&t&&(i.kc(),i.Rb(0,"ngb-alert",0),i.cc("close",(function(){return e.done()})),i.Dc(1),i.Qb(),i.Bc(2,m,15,3,"ng-template",null,1,i.Cc)),2&t&&(i.yb(1),i.Ec(e.context.title))},directives:[c.b,s.m,s.n,s.p,s.q,s.r,a.a],pipes:[s.x],styles:[""]}),t})()},PS3Z:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));class i{constructor(t,e,r,i,n){this.id=t,this.type=e,this.url=r,this.name=i}}}}]);