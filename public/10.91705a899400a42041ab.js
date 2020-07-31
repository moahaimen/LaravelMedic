(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"0AOE":function(t,e,i){"use strict";i.r(e),i.d(e,"OrdersModule",(function(){return V}));var o=i("ofXK"),r=i("m1XX"),n=i("tyNb"),c=i("fXoL"),s=i("Ubi2"),a=i("3Pt+");const l=["table"];let d=(()=>{class t{constructor(t,e){this.route=t,this.router=e,this.status=t.snapshot.params.status,this.context={urls:{createUrl:"/orders/create",detailsUrl:"/:id"},data:this.data,properties:[{key:"status.title",title:"Status",type:"string"},{key:"client.name",title:"Name",type:"string"},{key:"client.phone",title:"Phone",type:"string"}],title:"Orders",actions:[{icon:"nc-icon nc-bell-55",type:"url",url:":id/status",name:"change status"},{icon:"nc-icon nc-single-copy-04",name:"print",type:"callback",callback:t=>{this.print(t)}}]},t.data.subscribe(t=>{this.data=t.orders,this.context.data=this.data}),t.queryParams.subscribe(t=>{this.status=(null==t?void 0:t.status)||-1})}print(t){this.router.navigate(["orders",t.id,"details"],{state:{resource:t,print:!0}})}filter(){this.router.navigate(["."],{relativeTo:this.route,queryParams:{status:this.status}})}}return t.\u0275fac=function(e){return new(e||t)(c.Kb(n.a),c.Kb(n.f))},t.\u0275cmp=c.Eb({type:t,selectors:[["app-index"]],viewQuery:function(t,e){var i;1&t&&c.Hc(l,!0),2&t&&c.rc(i=c.cc())&&(e.table=i.first)},decls:17,vars:2,consts:[[3,"context"],["table",""],[1,"option","btn","btn-secondary","btn-rounded","pull-right",3,"ngModel","ngModelChange","change"],["value","-1"],["value","0"],["value","1"],["value","2"],["value","3"],["value","4"],["value","5"]],template:function(t,e){1&t&&(c.Qb(0,"app-table-view",0,1),c.Qb(2,"select",2),c.bc("ngModelChange",(function(t){return e.status=t}))("change",(function(){return e.filter()})),c.Qb(3,"option",3),c.Cc(4,"All"),c.Pb(),c.Qb(5,"option",4),c.Cc(6,"Pending"),c.Pb(),c.Qb(7,"option",5),c.Cc(8,"Accepted"),c.Pb(),c.Qb(9,"option",6),c.Cc(10,"Shipping"),c.Pb(),c.Qb(11,"option",7),c.Cc(12,"Deliveried"),c.Pb(),c.Qb(13,"option",8),c.Cc(14,"Rejected"),c.Pb(),c.Qb(15,"option",9),c.Cc(16,"Canceled"),c.Pb(),c.Pb(),c.Pb()),2&t&&(c.kc("context",e.context),c.xb(2),c.kc("ngModel",e.status))},directives:[s.a,a.q,a.k,a.m,a.n,a.s],styles:[""]}),t})();var b=i("AytR"),u=i("9xMI");class p extends u.a{constructor(t,e,i,o){super(t),this.id=t,this.status=e,this.client=i,this.products=o}}class m{constructor(t,e,i,o){this.product=t,this.order=e,this.quantity=i,this.price=o}}var h=i("lJxs"),f=i("3hzH"),v=i("tk/3"),g=i("5dVO");let P=(()=>{class t{constructor(t,e){this.http=t,this.loader=e}static Json2Order(t){if(!t)return null;const e=((null==t?void 0:t.order_products)||(null==t?void 0:t.products)).map(e=>new m(new f.b(e.product.id,e.product.en_name,e.product.ar_name,e.product.en_description,e.product.ar_description,e.product.price_id,null,e.product.brand_id,null,e.product.category_id,null,e.product.created_at,e.product.updated_at,null),new p(null==t?void 0:t.id,null==t?void 0:t.status,null,null),e.quantity,new f.a(e.price.id,e.price.value,e.price.updated_at)));return new p(null==t?void 0:t.id,null==t?void 0:t.status,null==t?void 0:t.client,e)}resolve(e,i){return this.http.get(`${b.a.apiUrl}/${b.a.ordersFetchUrl}?status=${e.queryParams.status||-1}`).pipe(Object(h.a)(e=>e.map(e=>t.Json2Order(e))))}}return t.\u0275fac=function(e){return new(e||t)(c.Yb(v.b),c.Yb(g.a))},t.\u0275prov=c.Gb({token:t,factory:t.\u0275fac}),t})();var Q=i("0PJQ"),x=i("1kSV");function y(t,e){1&t&&(c.Qb(0,"th",7),c.Cc(1,"Actions"),c.Pb())}function C(t,e){if(1&t){const t=c.Rb();c.Qb(0,"td",9),c.Qb(1,"i",10),c.bc("click",(function(){c.tc(t);const e=c.dc().$implicit;return c.dc().context.edit(e)})),c.Pb(),c.Qb(2,"i",11),c.bc("click",(function(){c.tc(t);const e=c.dc().$implicit;return c.dc().context.remove(e)})),c.Pb(),c.Pb()}}function k(t,e){if(1&t&&(c.Qb(0,"tr"),c.Qb(1,"td"),c.Cc(2),c.Pb(),c.Qb(3,"td"),c.Cc(4),c.Pb(),c.Qb(5,"td"),c.Cc(6),c.Pb(),c.Qb(7,"td"),c.Cc(8),c.Pb(),c.Ac(9,C,3,0,"td",8),c.Pb()),2&t){const t=e.$implicit,i=c.dc();c.xb(2),c.Dc(t.product.name),c.xb(2),c.Dc(t.quantity),c.xb(2),c.Dc(t.price.value),c.xb(2),c.Dc(t.quantity*t.price.value),c.xb(1),c.kc("ngIf",i.context.editable)}}let w=(()=>{class t{set value(t){this.context.items=t}get value(){return this.context.items}ngOnInit(){}setItems(t){this.context.items=t}get total(){return this.context.items&&0!==this.context.items.length?this.context.items.reduce(this.reduceItem,0):0}reduceItem(t,e){return t+e.quantity*e.price.value}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Eb({type:t,selectors:[["app-order-products-details"]],inputs:{value:"value",property:"property",context:"context"},decls:22,vars:3,consts:[[1,"table-responsive","overflow-hidden"],[1,"table"],[1,"text-primary"],["class","text-right",4,"ngIf"],[4,"ngFor","ngForOf"],["colspan","3"],[1,"text-danger"],[1,"text-right"],["class","text-right actions",4,"ngIf"],[1,"text-right","actions"],["title","Edit",1,"fa","fa-edit","m-1","p-1",3,"click"],["title","Cancel",1,"fa","fa-times","m-1","p-1",3,"click"]],template:function(t,e){1&t&&(c.Qb(0,"div",0),c.Qb(1,"table",1),c.Qb(2,"thead",2),c.Qb(3,"th"),c.Cc(4,"Product"),c.Pb(),c.Qb(5,"th"),c.Cc(6,"Quantity"),c.Pb(),c.Qb(7,"th"),c.Cc(8,"Price"),c.Pb(),c.Qb(9,"th"),c.Cc(10,"Total"),c.Pb(),c.Ac(11,y,2,0,"th",3),c.Pb(),c.Qb(12,"tbody"),c.Ac(13,k,10,5,"tr",4),c.Pb(),c.Qb(14,"tfoot"),c.Qb(15,"tr"),c.Qb(16,"th",5),c.Cc(17,"\xa0"),c.Pb(),c.Qb(18,"th",6),c.Cc(19),c.Pb(),c.Qb(20,"th"),c.Cc(21,"\xa0"),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Pb()),2&t&&(c.xb(11),c.kc("ngIf",e.context.editable),c.xb(2),c.kc("ngForOf",e.context.items),c.xb(6),c.Dc(e.total))},directives:[o.n,o.m],styles:[""]}),t})();function O(t,e){if(1&t&&(c.Qb(0,"option",10),c.Cc(1),c.Pb()),2&t){const t=e.$implicit;c.kc("value",t.id),c.xb(1),c.Ec(" ",t.name," ")}}let S=(()=>{class t{constructor(t){this.http=t,this.onChange=()=>{},this.onTouch=()=>{},this.data=[],this.http.get(b.a.prepareUrl("productsFetchUrl")).subscribe(t=>this.products=t),this.itemForm=new a.e({product_id:new a.c(null,a.r.required),quantity:new a.c(1,[a.r.required,a.r.min(1)])}),this.context={editable:!0,edit:t=>{this.editItem(t)},remove:t=>{this.removeItem(t)},items:this.data}}set value(t){this.data=t,this.onChange(t),this.onTouch(t),this.context.items=t}writeValue(t){t||(t=[]),this.value=t}registerOnChange(t){this.onChange=t}registerOnTouched(t){this.onTouch=t}ngOnInit(){}get freeProducts(){return this.products?Array.isArray(this.data)&&0!==this.data.length?this.products.filter(t=>!this.data.some(e=>e.product.id.toString()===t.id.toString())):this.products:[]}addItem(){const t=this.products.find(t=>t.id.toString()===this.itemForm.value.product_id.toString()),e=Object.assign({product:t,price:t.price},this.itemForm.value);this.data.push(e),this.itemForm.reset(),this.writeValue(this.data)}removeItem(t){this.data.splice(this.data.indexOf(t),1),this.writeValue(this.data)}editItem(t){this.removeItem(t),this.itemForm.reset({product_id:t.product.id,quantity:t.quantity})}}return t.\u0275fac=function(e){return new(e||t)(c.Kb(v.b))},t.\u0275cmp=c.Eb({type:t,selectors:[["app-order-products-form"]],inputs:{data:"data"},features:[c.wb([{provide:a.j,useExisting:Object(c.S)(()=>t),multi:!0}])],decls:17,vars:4,consts:[[3,"context"],[1,"form",3,"formGroup"],[1,"row"],[1,"col","md-5"],[1,"form-group"],["formControlName","product_id",1,"form-control","form-control-sm"],[3,"value",4,"ngFor","ngForOf"],["type","text","formControlName","quantity",1,"form-control","form-control-sm"],[1,"col","md-2","d-flex","align-items-end"],[1,"btn","btn-md","btn-success",3,"disabled","click"],[3,"value"]],template:function(t,e){1&t&&(c.Lb(0,"app-order-products-details",0),c.Qb(1,"form",1),c.Qb(2,"div",2),c.Qb(3,"div",3),c.Qb(4,"div",4),c.Qb(5,"label"),c.Cc(6,"Product"),c.Pb(),c.Qb(7,"select",5),c.Ac(8,O,2,2,"option",6),c.Pb(),c.Pb(),c.Pb(),c.Qb(9,"div",3),c.Qb(10,"div",4),c.Qb(11,"label"),c.Cc(12,"Quantity"),c.Pb(),c.Lb(13,"input",7),c.Pb(),c.Pb(),c.Qb(14,"div",8),c.Qb(15,"button",9),c.bc("click",(function(){return e.addItem()})),c.Cc(16," OK "),c.Pb(),c.Pb(),c.Pb(),c.Pb()),2&t&&(c.kc("context",e.context),c.xb(1),c.kc("formGroup",e.itemForm),c.xb(7),c.kc("ngForOf",e.freeProducts),c.xb(7),c.kc("disabled",!e.itemForm.valid))},directives:[w,a.t,a.l,a.f,a.q,a.k,a.d,o.m,a.b,a.n,a.s],styles:[""]}),t})();function I(t,e){if(1&t&&(c.Qb(0,"option",13),c.Cc(1),c.Pb()),2&t){const t=e.$implicit;c.kc("value",t.id),c.xb(1),c.Dc(t.user_name)}}let A=(()=>{class t{constructor(t){this.http=t,this.onChange=()=>{},this.onTouch=()=>{},this.http.get(b.a.prepareUrl("usersFetchUrl")).subscribe(t=>this.users=t)}set value(t){this.data=t,this.onChange(t),this.onTouch(t)}writeValue(t){this.value=t}registerOnChange(t){this.onChange=t}registerOnTouched(t){this.onTouch=t}ngOnInit(){this.form.valueChanges.subscribe(t=>{this.writeValue(this.form.value)})}}return t.\u0275fac=function(e){return new(e||t)(c.Kb(v.b))},t.\u0275cmp=c.Eb({type:t,selectors:[["app-order-client-form"]],inputs:{form:"form"},features:[c.wb([{provide:a.j,useExisting:Object(c.S)(()=>t),multi:!0}])],decls:44,vars:2,consts:[["autocomplete","off",3,"formGroup"],[1,"row"],[1,"col-12","px-3"],[1,"form-group"],["type","text","placeholder","Name","formControlName","name","autocomplete","off",1,"form-control"],["type","email","placeholder","Email","formControlName","email","autocomplete","off",1,"form-control"],["type","text","placeholder","Phone","formControlName","phone","autocomplete","off",1,"form-control"],["type","text","placeholder","Province","formControlName","province","autocomplete","off",1,"form-control"],[1,"col-md-12","px-3"],["type","text","placeholder","Address","formControlName","address","autocomplete","off",1,"form-control"],["type","text","placeholder","Notes","formControlName","notes","autocomplete","off",1,"form-control"],["formControlName","user_id",1,"form-control"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(t,e){1&t&&(c.Qb(0,"form",0),c.Qb(1,"div",1),c.Qb(2,"div",2),c.Qb(3,"div",3),c.Qb(4,"label"),c.Cc(5,"Name"),c.Pb(),c.Lb(6,"input",4),c.Pb(),c.Pb(),c.Pb(),c.Qb(7,"div",1),c.Qb(8,"div",2),c.Qb(9,"div",3),c.Qb(10,"label"),c.Cc(11,"Email address"),c.Pb(),c.Lb(12,"input",5),c.Pb(),c.Pb(),c.Pb(),c.Qb(13,"div",1),c.Qb(14,"div",2),c.Qb(15,"div",3),c.Qb(16,"label"),c.Cc(17,"Phone"),c.Pb(),c.Lb(18,"input",6),c.Pb(),c.Pb(),c.Pb(),c.Qb(19,"div",1),c.Qb(20,"div",2),c.Qb(21,"div",3),c.Qb(22,"label"),c.Cc(23,"Province"),c.Pb(),c.Lb(24,"input",7),c.Pb(),c.Pb(),c.Pb(),c.Qb(25,"div",1),c.Qb(26,"div",8),c.Qb(27,"div",3),c.Qb(28,"label"),c.Cc(29,"Address"),c.Pb(),c.Lb(30,"input",9),c.Pb(),c.Pb(),c.Pb(),c.Qb(31,"div",1),c.Qb(32,"div",8),c.Qb(33,"div",3),c.Qb(34,"label"),c.Cc(35,"Notes"),c.Pb(),c.Lb(36,"input",10),c.Pb(),c.Pb(),c.Pb(),c.Qb(37,"div",1),c.Qb(38,"div",8),c.Qb(39,"div",3),c.Qb(40,"label"),c.Cc(41,"User (Optional)"),c.Pb(),c.Qb(42,"select",11),c.Ac(43,I,2,2,"option",12),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Pb()),2&t&&(c.kc("formGroup",e.form),c.xb(43),c.kc("ngForOf",e.users))},directives:[a.t,a.l,a.f,a.b,a.k,a.d,a.q,o.m,a.n,a.s],styles:[""]}),t})();const F=["content"];function q(t,e){if(1&t){const t=c.Rb();c.Qb(0,"div",2),c.Qb(1,"h6",3),c.Cc(2),c.Pb(),c.Qb(3,"button",4),c.bc("click",(function(){return c.tc(t),c.dc().ok()})),c.Qb(4,"span",5),c.Cc(5,"\xd7"),c.Pb(),c.Pb(),c.Pb(),c.Qb(6,"div",6),c.Qb(7,"form",7),c.Qb(8,"div",8),c.Qb(9,"div",9),c.Qb(10,"div",10),c.Qb(11,"label"),c.Cc(12,"Products"),c.Pb(),c.Qb(13,"div",11),c.Lb(14,"app-order-products-form",12),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Qb(15,"div",8),c.Qb(16,"div",9),c.Qb(17,"div",10),c.Qb(18,"label"),c.Cc(19,"Promo Code"),c.Pb(),c.Lb(20,"input",13),c.Pb(),c.Pb(),c.Pb(),c.Qb(21,"div",8),c.Qb(22,"div",9),c.Lb(23,"app-order-client-form",14),c.Pb(),c.Pb(),c.Qb(24,"div",8),c.Qb(25,"div",15),c.Qb(26,"button",16),c.bc("click",(function(){return c.tc(t),c.dc().submit()})),c.Cc(27," Submit "),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Pb()}if(2&t){const t=c.dc();c.xb(2),c.Dc(t.title),c.xb(5),c.kc("formGroup",t.formGroup),c.xb(16),c.kc("form",t.formGroup.controls.client),c.xb(3),c.kc("disabled",t.uploading||!t.formGroup.dirty||!t.formGroup.valid)}}let D=(()=>{class t extends Q.b{constructor(t,e,i,o){super(t,e,i,o),this.formGroup=new a.e({promo_code:new a.c(null,[a.r.minLength(8),a.r.maxLength(8)]),products:new a.c(null,a.r.required),client:new a.e({name:new a.c(null,[a.r.required,a.r.minLength(3)]),email:new a.c(null,[a.r.required,a.r.email]),phone:new a.c(null,[a.r.required]),province:new a.c(null,[a.r.required]),address:new a.c(null,[a.r.required]),notes:new a.c(null,[a.r.minLength(10)]),user_id:new a.c(null)})})}openModal(){var t,e;return this.products=null===(e=P.Json2Order(null===(t=null===history||void 0===history?void 0:history.state)||void 0===t?void 0:t.resource))||void 0===e?void 0:e.products,this.service.open(this.content,{backdrop:"static"})}get postUrl(){return"ordersCreateUrl"}get putUrl(){return"ordersUpdateUrl"}get parentUrl(){return"/orders"}}return t.\u0275fac=function(e){return new(e||t)(c.Kb(v.b),c.Kb(n.a),c.Kb(n.f),c.Kb(x.h))},t.\u0275cmp=c.Eb({type:t,selectors:[["app-order-form"]],viewQuery:function(t,e){var i;1&t&&c.Hc(F,!0),2&t&&c.rc(i=c.cc())&&(e.content=i.first)},features:[c.ub],decls:4,vars:1,consts:[["type","info",3,"close"],["content",""],[1,"modal-header"],[1,"modal-title","pt-1","mt-1"],["type","button",1,"close",2,"border","none","outline","none",3,"click"],["aria-hidden","true"],[1,"modal-body"],[3,"formGroup"],[1,"row"],[1,"col-12","px-3"],[1,"form-group"],[1,"form-control"],["formControlName","products"],["type","text","placeholder","Ex. BX6GHIK8","formControlName","promo_code","autocomplete","off",1,"form-control"],[3,"form"],[1,"update","ml-auto","mr-auto"],["type","submit",1,"btn","btn-primary","btn-round",3,"disabled","click"]],template:function(t,e){1&t&&(c.Qb(0,"ngb-alert",0),c.bc("close",(function(){return e.ok()})),c.Cc(1),c.Pb(),c.Ac(2,q,28,4,"ng-template",null,1,c.Bc)),2&t&&(c.xb(1),c.Dc(e.message))},directives:[x.b,a.t,a.l,a.f,S,a.k,a.d,a.b,A],styles:[""]}),t})();var U=i("AMeL");let E=(()=>{class t{ngOnInit(){const t=P.Json2Order(history.state.resource);this.productsContext={editable:!1,items:null==t?void 0:t.products},this.context={urls:{tableUrl:"/orders"},data:t,properties:[{key:"id",title:"Id",type:"string"},{key:"status.title",title:"Status",type:"string"},{key:"client.name",title:"Client Name",type:"string"},{key:"client.email",title:"Client Email",type:"string"},{key:"client.address",title:"Client Address",type:"string"},{key:"products",title:"Products",type:"component",component:"app-order-products-details"}],title:"Details of order "+(null==t?void 0:t.id),printable:!0}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Eb({type:t,selectors:[["app-order-details"]],decls:2,vars:2,consts:[[3,"context"]],template:function(t,e){1&t&&(c.Qb(0,"app-resource-details",0),c.Lb(1,"app-order-products-details",0),c.Pb()),2&t&&(c.kc("context",e.context),c.xb(1),c.kc("context",e.productsContext))},directives:[U.a,w],styles:[""]}),t})();var L=i("w+MF");let N=(()=>{class t{constructor(){}ngOnInit(){this.context={deleteUrl:"ordersDeleteUrl",data:history.state.resource,title:"Delete Order Resource!",description:"Are you sure to delete this order?"}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Eb({type:t,selectors:[["app-order-delete"]],decls:1,vars:1,consts:[[3,"context"]],template:function(t,e){1&t&&c.Lb(0,"app-resource-delete",0),2&t&&c.kc("context",e.context)},directives:[L.a],styles:[""]}),t})();var _=i("OC8m");const K=["content"];function M(t,e){if(1&t&&(c.Qb(0,"option",12),c.Qb(1,"h3"),c.Cc(2),c.Pb(),c.Pb()),2&t){const t=e.$implicit;c.kc("value",t.value),c.xb(2),c.Dc(t.title)}}function G(t,e){if(1&t){const t=c.Rb();c.Qb(0,"div",2),c.Qb(1,"h6",3),c.Cc(2),c.Pb(),c.Qb(3,"p"),c.Cc(4),c.Pb(),c.Qb(5,"div",4),c.Qb(6,"div",5),c.Qb(7,"label",6),c.Cc(8,"Status"),c.Pb(),c.Qb(9,"select",7),c.bc("ngModelChange",(function(e){return c.tc(t),c.dc().selectedStatus=e})),c.Ac(10,M,3,2,"option",8),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Qb(11,"div",9),c.Qb(12,"button",10),c.bc("click",(function(){return c.tc(t),c.dc().change()})),c.Cc(13," Change "),c.Pb(),c.Qb(14,"button",11),c.bc("click",(function(){return c.tc(t),c.dc().ok()})),c.Cc(15," Cancel "),c.Pb(),c.Pb()}if(2&t){const t=c.dc();c.xb(2),c.Dc(t.title),c.xb(2),c.Dc(t.description),c.xb(5),c.kc("ngModel",t.selectedStatus),c.xb(1),c.kc("ngForOf",t.statuses),c.xb(2),c.kc("disabled",!t.selectedStatus)}}const T=[{path:"",component:d,runGuardsAndResolvers:"always",resolve:{orders:P},children:[{path:"create",component:D},{path:":id/edit",component:D},{path:":id/details",pathMatch:"full",component:E},{path:":id/delete",pathMatch:"full",component:N},{path:":id/status",pathMatch:"full",component:(()=>{class t{constructor(t,e,i){this.http=t,this.modalService=e,this.notifier=i,this.statuses=[{title:"pending",value:0},{title:"accepted",value:1},{title:"shipping",value:2},{title:"deliveried",value:3},{title:"rejected",value:4},{title:"canceled",value:5}]}ngAfterViewInit(){if(this.data=history.state.resource,this.modal=this.modalService.open(this.content,{backdrop:"static",size:"md"}),this.modal&&this.data)switch(this.title=`Change order ${this.data.id} status`,this.description="Please be aware that this very important action to take sometimes it is not able to take it back",console.log(this.data.status.title),Number.parseInt(this.data.status.title.toString(),10)){case 0:this.statuses=[{title:"accepted",value:1},{title:"rejected",value:4},{title:"canceled",value:5}];break;case 1:this.statuses=[{title:"shipping",value:2},{title:"deliveried",value:3}];break;case 2:this.statuses=[{title:"deliveried",value:3}];break;case 3:case 4:case 5:this.statuses=[]}else this.ok()}change(){const t={status:this.selectedStatus};this.http.put(b.a.prepareUrl("ordersStatusUrl",{id:this.data.id}),t).subscribe(t=>{if(t)return this.notifier.success("Order status updated successfully"),void this.ok();this.notifier.error("Somthing went wrong, Failed to delete the resource")})}ok(){this.modal?this.modal.dismiss():this.modalService.dismissAll(),history.back()}}return t.\u0275fac=function(e){return new(e||t)(c.Kb(v.b),c.Kb(x.h),c.Kb(_.a))},t.\u0275cmp=c.Eb({type:t,selectors:[["app-order-status-form"]],viewQuery:function(t,e){var i;1&t&&c.Hc(K,!0),2&t&&c.rc(i=c.cc())&&(e.content=i.first)},decls:4,vars:0,consts:[["type","info",3,"close"],["content",""],[1,"modal-body"],[1,"modal-title","mt-1","pt-2"],[1,"form"],[1,"form-group"],[1,"form-group-label"],[1,"form-control",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[1,"modal-footer"],[1,"btn","btn-sm","btn-rounded","btn-danger",3,"disabled","click"],[1,"btn","btn-sm","btn-rounded","btn-secondary",3,"click"],[3,"value"]],template:function(t,e){1&t&&(c.Qb(0,"ngb-alert",0),c.bc("close",(function(){return e.ok()})),c.Cc(1,"Change Order Status"),c.Pb(),c.Ac(2,G,16,5,"ng-template",null,1,c.Bc))},directives:[x.b,a.q,a.k,a.m,o.m,a.n,a.s],styles:[""]}),t})()}]}];let j=(()=>{class t{}return t.\u0275mod=c.Ib({type:t}),t.\u0275inj=c.Hb({factory:function(e){return new(e||t)},imports:[[n.i.forChild(T)],n.i]}),t})();var R=i("uP1v"),$=i("RDNO");let V=(()=>{class t{}return t.\u0275mod=c.Ib({type:t}),t.\u0275inj=c.Hb({factory:function(e){return new(e||t)},providers:[P,{provide:v.a,useClass:$.a,multi:!0}],imports:[[o.c,j,x.i,n.i,a.g,a.p,R.a,r.b]]}),t})()},AMeL:function(t,e,i){"use strict";i.d(e,"a",(function(){return f}));var o=i("fXoL"),r=i("tyNb"),n=i("OC8m"),c=i("1kSV"),s=i("ofXK"),a=i("m1XX");const l=["content"];function d(t,e){1&t&&(o.Qb(0,"div"),o.ic(1,0,["[select]","prop.component","[property]","prop","[value]","context.data[prop.key]"]),o.Pb())}function b(t,e){if(1&t&&(o.Qb(0,"div"),o.Qb(1,"h6"),o.Cc(2),o.Pb(),o.Qb(3,"small"),o.Cc(4),o.ec(5,"uppercase"),o.Pb(),o.Pb()),2&t){const t=o.dc().$implicit,e=o.dc(2);o.xb(2),o.Dc(e.context.data.toTitle(t)),o.xb(2),o.Dc(o.fc(5,2,t.title))}}function u(t,e){if(1&t&&(o.Qb(0,"div",14),o.Ob(1,15),o.Ac(2,d,2,0,"div",16),o.Ac(3,b,6,4,"div",17),o.Nb(),o.Pb()),2&t){const t=e.$implicit;o.xb(1),o.kc("ngSwitch",t.type),o.xb(1),o.kc("ngSwitchCase","component")}}function p(t,e){1&t&&(o.Qb(0,"button",18),o.Cc(1," Print "),o.Pb()),2&t&&o.kc("useExistingCss",!0)}function m(t,e){if(1&t){const t=o.Rb();o.Qb(0,"div",2),o.Qb(1,"h6",3),o.Cc(2),o.Pb(),o.Qb(3,"button",4),o.bc("click",(function(){return o.tc(t),o.dc().done()})),o.Qb(4,"span",5),o.Cc(5,"\xd7"),o.Pb(),o.Pb(),o.Pb(),o.Qb(6,"div",6),o.Qb(7,"div",7),o.Ac(8,u,4,2,"div",8),o.Pb(),o.Qb(9,"div",9),o.Qb(10,"div",10),o.Ac(11,p,2,1,"button",11),o.Qb(12,"button",12),o.bc("click",(function(){return o.tc(t),o.dc().done()})),o.Lb(13,"i",13),o.Cc(14," Done "),o.Pb(),o.Pb(),o.Pb(),o.Pb()}if(2&t){const t=o.dc();o.xb(2),o.Dc(t.context.title),o.xb(6),o.kc("ngForOf",t.context.properties),o.xb(3),o.kc("ngIf",t.context.printable)}}const h=["*"];let f=(()=>{class t{constructor(t,e,i){this.router=t,this.notifier=e,this.modalService=i}ngAfterViewInit(){if(!this.context||!this.context.data||!this.context.properties)return this.notifier.warning("Something went wrong, Undefined context","Resource Details"),void this.done();this.modal=this.modalService.open(this.content,{size:"md",backdrop:"static"}),history.state.print&&setTimeout(()=>{document.getElementById("printer").click()},250)}done(){var t,e;const i=(null===(e=null===(t=this.context)||void 0===t?void 0:t.urls)||void 0===e?void 0:e.tableUrl)||"/users";console.log(i),this.router.navigateByUrl(i).then(t=>{var e;t&&(null===(e=this.modal)||void 0===e||e.dismiss(),this.modalService.dismissAll())})}}return t.\u0275fac=function(e){return new(e||t)(o.Kb(r.f),o.Kb(n.a),o.Kb(c.h))},t.\u0275cmp=o.Eb({type:t,selectors:[["app-resource-details"]],viewQuery:function(t,e){var i;1&t&&o.Hc(l,!0),2&t&&o.rc(i=o.cc())&&(e.content=i.first)},inputs:{context:"context"},ngContentSelectors:h,decls:4,vars:1,consts:[["type","info",3,"close"],["content",""],[1,"modal-header"],[1,"modal-title","pt-1","mt-1"],["type","button",1,"close",2,"border","none","outline","none",3,"click"],["aria-hidden","true"],[1,"modal-body"],["id","resource-details",1,"list-group"],["class","list-group-item list-group-item-action",4,"ngFor","ngForOf"],[1,"row"],[1,"col-12","text-right"],["id","printer","class","btn btn-md btn-rounded btn-secondary px-3","printTitle","Resource Details","printSectionId","resource-details","ngxPrint","",3,"useExistingCss",4,"ngIf"],["type","button",1,"btn","btn-md","btn-rounded","btn-primary","px-3",3,"click"],[1,"nc-icon","nc-check-2"],[1,"list-group-item","list-group-item-action"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],["id","printer","printTitle","Resource Details","printSectionId","resource-details","ngxPrint","",1,"btn","btn-md","btn-rounded","btn-secondary","px-3",3,"useExistingCss"]],template:function(t,e){1&t&&(o.jc(),o.Qb(0,"ngb-alert",0),o.bc("close",(function(){return e.done()})),o.Cc(1),o.Pb(),o.Ac(2,m,15,3,"ng-template",null,1,o.Bc)),2&t&&(o.xb(1),o.Dc(e.context.title))},directives:[c.b,s.m,s.n,s.p,s.q,s.r,a.a],pipes:[s.x],styles:[""]}),t})()}}]);