(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"0AOE":function(t,e,r){"use strict";r.r(e),r.d(e,"OrdersModule",(function(){return K}));var o=r("ofXK"),i=r("tyNb"),c=r("fXoL"),n=r("Ubi2");const s=["table"];let a=(()=>{class t{constructor(t){this.context={urls:{createUrl:"/orders/create",detailsUrl:"/:id"},data:this.data,properties:[{key:"status.title",title:"Status",type:"string"},{key:"client.name",title:"Client Name",type:"string"},{key:"client.email",title:"Client Email",type:"string"}],title:"Orders",actions:[{icon:"nc-icon nc-bell-55",type:"url",url:":id/status"}]},t.data.subscribe(t=>{this.data=t.orders,this.context.data=this.data})}}return t.\u0275fac=function(e){return new(e||t)(c.Kb(i.a))},t.\u0275cmp=c.Eb({type:t,selectors:[["app-index"]],viewQuery:function(t,e){var r;1&t&&c.Fc(s,!0),2&t&&c.pc(r=c.bc())&&(e.table=r.first)},decls:2,vars:1,consts:[[3,"context"],["table",""]],template:function(t,e){1&t&&c.Lb(0,"app-table-view",0,1),2&t&&c.ic("context",e.context)},directives:[n.a],styles:[""]}),t})();var l=r("AytR"),b=r("tk/3");let d=(()=>{class t{constructor(t){this.http=t}resolve(t,e){return this.http.get(`${l.a.apiUrl}/${l.a.ordersFetchUrl}`)}}return t.\u0275fac=function(e){return new(e||t)(c.Xb(b.b))},t.\u0275prov=c.Gb({token:t,factory:t.\u0275fac}),t})();var u=r("0PJQ"),p=r("3Pt+"),m=r("1kSV");function h(t,e){if(1&t){const t=c.Qb();c.Pb(0,"tr"),c.Pb(1,"td"),c.Ac(2),c.Ob(),c.Pb(3,"td"),c.Ac(4),c.Ob(),c.Pb(5,"td"),c.Ac(6),c.Ob(),c.Pb(7,"td"),c.Ac(8),c.Ob(),c.Pb(9,"td",16),c.Pb(10,"i",17),c.ac("click",(function(){c.rc(t);const r=e.$implicit;return c.cc().editOrderProduct(r)})),c.Ob(),c.Pb(11,"i",18),c.ac("click",(function(){c.rc(t);const r=e.$implicit;return c.cc().removeOrderProduct(r)})),c.Ob(),c.Ob(),c.Ob()}if(2&t){const t=e.$implicit;c.xb(2),c.Bc(t.product.name),c.xb(2),c.Bc(t.quantity),c.xb(2),c.Bc(t.price.value),c.xb(2),c.Bc(t.quantity*t.price.value)}}function f(t,e){if(1&t&&(c.Pb(0,"option",19),c.Ac(1),c.Ob()),2&t){const t=e.$implicit;c.ic("value",t.id),c.xb(1),c.Bc(t.name)}}let O=(()=>{class t{constructor(t){this.http=t,this.onChange=()=>{},this.onTouch=()=>{},this.http.get(l.a.prepareUrl("productsFetchUrl")).subscribe(t=>this.products=t),this.orderProductItem=new p.e({product_id:new p.c(null,p.q.required),quantity:new p.c(1,[p.q.required,p.q.min(1)])})}set value(t){this.data=t,this.onChange(t),this.onTouch(t)}writeValue(t){t||(t=[]),this.value=t}registerOnChange(t){this.onChange=t}registerOnTouched(t){this.onTouch=t}ngOnInit(){}get activeProductsList(){return this.products?Array.isArray(this.data)&&0!==this.data.length?this.products.filter(t=>!this.data.some(e=>e.product_id.toString()===t.id.toString())):this.products:[]}get total(){if(!this.data)return 0;let t=0;return this.data.forEach(e=>t+=e.quantity*e.price.value),t}addOrderProductItem(){const t=this.products.find(t=>t.id===Number.parseInt(this.orderProductItem.value.product_id,10)),e=Object.assign({product:t,price:t.price},this.orderProductItem.value);this.data.push(e),this.orderProductItem.reset(),this.writeValue(this.data)}removeOrderProduct(t){this.data.splice(this.data.indexOf(t),1),this.writeValue(this.data)}editOrderProduct(t){this.removeOrderProduct(t),this.orderProductItem.reset({product_id:t.product_id,quantity:t.quantity})}}return t.\u0275fac=function(e){return new(e||t)(c.Kb(b.b))},t.\u0275cmp=c.Eb({type:t,selectors:[["app-order-products-form"]],features:[c.wb([{provide:p.i,useExisting:Object(c.S)(()=>t),multi:!0}])],decls:39,vars:5,consts:[[1,"table-responsive","overflow-hidden"],[1,"table"],[1,"text-primary"],[1,"text-right"],[4,"ngFor","ngForOf"],["colspan","3"],[1,"text-danger"],[1,"form",3,"formGroup"],[1,"row"],[1,"col","md-5"],[1,"form-group"],["formControlName","product_id",1,"form-control","form-control-sm"],[3,"value",4,"ngFor","ngForOf"],["type","text","formControlName","quantity",1,"form-control","form-control-sm"],[1,"col","md-2","d-flex","align-items-end"],[1,"btn","btn-md","btn-success",3,"disabled","click"],[1,"text-right","actions"],["title","Edit",1,"fa","fa-edit","m-1","p-1",3,"click"],["title","Cancel",1,"fa","fa-times","m-1","p-1",3,"click"],[3,"value"]],template:function(t,e){1&t&&(c.Pb(0,"div",0),c.Pb(1,"table",1),c.Pb(2,"thead",2),c.Pb(3,"th"),c.Ac(4,"Product"),c.Ob(),c.Pb(5,"th"),c.Ac(6,"Quantity"),c.Ob(),c.Pb(7,"th"),c.Ac(8,"Price"),c.Ob(),c.Pb(9,"th"),c.Ac(10,"Total"),c.Ob(),c.Pb(11,"th",3),c.Ac(12,"Actions"),c.Ob(),c.Ob(),c.Pb(13,"tbody"),c.yc(14,h,12,4,"tr",4),c.Ob(),c.Pb(15,"tfoot"),c.Pb(16,"tr"),c.Pb(17,"th",5),c.Ac(18,"\xa0"),c.Ob(),c.Pb(19,"th",6),c.Ac(20),c.Ob(),c.Pb(21,"th"),c.Ac(22,"\xa0"),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Pb(23,"form",7),c.Pb(24,"div",8),c.Pb(25,"div",9),c.Pb(26,"div",10),c.Pb(27,"label"),c.Ac(28,"Product"),c.Ob(),c.Pb(29,"select",11),c.yc(30,f,2,2,"option",12),c.Ob(),c.Ob(),c.Ob(),c.Pb(31,"div",9),c.Pb(32,"div",10),c.Pb(33,"label"),c.Ac(34,"Quantity"),c.Ob(),c.Lb(35,"input",13),c.Ob(),c.Ob(),c.Pb(36,"div",14),c.Pb(37,"button",15),c.ac("click",(function(){return e.addOrderProductItem()})),c.Ac(38," OK "),c.Ob(),c.Ob(),c.Ob(),c.Ob()),2&t&&(c.xb(14),c.ic("ngForOf",e.data),c.xb(6),c.Bc(e.total),c.xb(3),c.ic("formGroup",e.orderProductItem),c.xb(7),c.ic("ngForOf",e.activeProductsList),c.xb(7),c.ic("disabled",!e.orderProductItem.valid))},directives:[o.j,p.s,p.k,p.f,p.p,p.j,p.d,p.b,p.m,p.r],styles:[""]}),t})();function v(t,e){if(1&t&&(c.Pb(0,"option",13),c.Ac(1),c.Ob()),2&t){const t=e.$implicit;c.ic("value",t.id),c.xb(1),c.Bc(t.user_name)}}let P=(()=>{class t{constructor(t){this.http=t,this.onChange=()=>{},this.onTouch=()=>{},this.http.get(l.a.prepareUrl("usersFetchUrl")).subscribe(t=>this.users=t)}set value(t){this.data=t,this.onChange(t),this.onTouch(t)}writeValue(t){this.value=t}registerOnChange(t){this.onChange=t}registerOnTouched(t){this.onTouch=t}ngOnInit(){console.log(this.form),this.form.valueChanges.subscribe(t=>{console.log("xx"),this.writeValue(this.form.value)})}}return t.\u0275fac=function(e){return new(e||t)(c.Kb(b.b))},t.\u0275cmp=c.Eb({type:t,selectors:[["app-order-client-form"]],inputs:{form:"form"},features:[c.wb([{provide:p.i,useExisting:Object(c.S)(()=>t),multi:!0}])],decls:44,vars:2,consts:[["autocomplete","off",3,"formGroup"],[1,"row"],[1,"col-12","px-3"],[1,"form-group"],["type","text","placeholder","Name","formControlName","name","autocomplete","off",1,"form-control"],["type","email","placeholder","Email","formControlName","email","autocomplete","off",1,"form-control"],["type","text","placeholder","Phone","formControlName","phone","autocomplete","off",1,"form-control"],["type","text","placeholder","Province","formControlName","province","autocomplete","off",1,"form-control"],[1,"col-md-12","px-3"],["type","text","placeholder","Address","formControlName","address","autocomplete","off",1,"form-control"],["type","text","placeholder","Notes","formControlName","notes","autocomplete","off",1,"form-control"],["formControlName","user_id",1,"form-control"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(t,e){1&t&&(c.Pb(0,"form",0),c.Pb(1,"div",1),c.Pb(2,"div",2),c.Pb(3,"div",3),c.Pb(4,"label"),c.Ac(5,"Name"),c.Ob(),c.Lb(6,"input",4),c.Ob(),c.Ob(),c.Ob(),c.Pb(7,"div",1),c.Pb(8,"div",2),c.Pb(9,"div",3),c.Pb(10,"label"),c.Ac(11,"Email address"),c.Ob(),c.Lb(12,"input",5),c.Ob(),c.Ob(),c.Ob(),c.Pb(13,"div",1),c.Pb(14,"div",2),c.Pb(15,"div",3),c.Pb(16,"label"),c.Ac(17,"Phone"),c.Ob(),c.Lb(18,"input",6),c.Ob(),c.Ob(),c.Ob(),c.Pb(19,"div",1),c.Pb(20,"div",2),c.Pb(21,"div",3),c.Pb(22,"label"),c.Ac(23,"Province"),c.Ob(),c.Lb(24,"input",7),c.Ob(),c.Ob(),c.Ob(),c.Pb(25,"div",1),c.Pb(26,"div",8),c.Pb(27,"div",3),c.Pb(28,"label"),c.Ac(29,"Address"),c.Ob(),c.Lb(30,"input",9),c.Ob(),c.Ob(),c.Ob(),c.Pb(31,"div",1),c.Pb(32,"div",8),c.Pb(33,"div",3),c.Pb(34,"label"),c.Ac(35,"Notes"),c.Ob(),c.Lb(36,"input",10),c.Ob(),c.Ob(),c.Ob(),c.Pb(37,"div",1),c.Pb(38,"div",8),c.Pb(39,"div",3),c.Pb(40,"label"),c.Ac(41,"User (Optional)"),c.Ob(),c.Pb(42,"select",11),c.yc(43,v,2,2,"option",12),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Ob()),2&t&&(c.ic("formGroup",e.form),c.xb(43),c.ic("ngForOf",e.users))},directives:[p.s,p.k,p.f,p.b,p.j,p.d,p.p,o.j,p.m,p.r],styles:[""]}),t})();const g=["content"];function y(t,e){if(1&t){const t=c.Qb();c.Pb(0,"div",2),c.Pb(1,"h6",3),c.Ac(2),c.Ob(),c.Pb(3,"button",4),c.ac("click",(function(){return c.rc(t),c.cc().ok()})),c.Pb(4,"span",5),c.Ac(5,"\xd7"),c.Ob(),c.Ob(),c.Ob(),c.Pb(6,"div",6),c.Pb(7,"form",7),c.Pb(8,"div",8),c.Pb(9,"div",9),c.Pb(10,"div",10),c.Pb(11,"label"),c.Ac(12,"Products"),c.Ob(),c.Pb(13,"div",11),c.Lb(14,"app-order-products-form",12),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Pb(15,"div",8),c.Pb(16,"div",9),c.Pb(17,"div",10),c.Pb(18,"label"),c.Ac(19,"Promo Code"),c.Ob(),c.Lb(20,"input",13),c.Ob(),c.Ob(),c.Ob(),c.Pb(21,"div",8),c.Pb(22,"div",9),c.Lb(23,"app-order-client-form",14),c.Ob(),c.Ob(),c.Pb(24,"div",8),c.Pb(25,"div",15),c.Pb(26,"button",16),c.ac("click",(function(){return c.rc(t),c.cc().submit()})),c.Ac(27," Submit "),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Ob()}if(2&t){const t=c.cc();c.xb(2),c.Bc(t.title),c.xb(5),c.ic("formGroup",t.formGroup),c.xb(16),c.ic("form",t.formGroup.controls.client),c.xb(3),c.ic("disabled",!t.formGroup.valid)}}let x=(()=>{class t extends u.b{constructor(t,e,r,o){super(t,e,r,o),this.formGroup=new p.e({promo_code:new p.c(null,[p.q.minLength(8),p.q.maxLength(8)]),products:new p.c(null,p.q.required),client:new p.e({name:new p.c(null,[p.q.required,p.q.minLength(3)]),email:new p.c(null,[p.q.required,p.q.email]),phone:new p.c(null,[p.q.required]),province:new p.c(null,[p.q.required]),address:new p.c(null,[p.q.required]),notes:new p.c(null,[p.q.minLength(10)]),user_id:new p.c(null)})}),console.log(this.formGroup.controls.client)}openModal(){return this.service.open(this.content,{backdrop:"static"})}postUrl(){return"ordersCreateUrl"}putUrl(){return"ordersUpdateUrl"}xx(){console.log(this.formGroup)}}return t.\u0275fac=function(e){return new(e||t)(c.Kb(b.b),c.Kb(i.a),c.Kb(i.b),c.Kb(m.d))},t.\u0275cmp=c.Eb({type:t,selectors:[["app-order-form"]],viewQuery:function(t,e){var r;1&t&&c.Fc(g,!0),2&t&&c.pc(r=c.bc())&&(e.content=r.first)},features:[c.ub],decls:4,vars:1,consts:[["type","info",3,"close"],["content",""],[1,"modal-header"],[1,"modal-title","pt-1","mt-1"],["type","button",1,"close",2,"border","none","outline","none",3,"click"],["aria-hidden","true"],[1,"modal-body"],[3,"formGroup"],[1,"row"],[1,"col-12","px-3"],[1,"form-group"],[1,"form-control"],["formControlName","products"],["type","text","placeholder","Ex. BX6GHIK8","formControlName","promo_code","autocomplete","off",1,"form-control"],[3,"form"],[1,"update","ml-auto","mr-auto"],["type","submit",1,"btn","btn-primary","btn-round",3,"disabled","click"]],template:function(t,e){1&t&&(c.Pb(0,"ngb-alert",0),c.ac("close",(function(){return e.ok()})),c.Ac(1),c.Ob(),c.yc(2,y,28,4,"ng-template",null,1,c.zc)),2&t&&(c.xb(1),c.Bc(e.message))},directives:[m.b,p.s,p.k,p.f,O,p.j,p.d,p.b,P],styles:[""]}),t})();const w=["content"];function A(t,e){if(1&t&&(c.Pb(0,"div",10),c.Pb(1,"h6"),c.Ac(2),c.Ob(),c.Pb(3,"small"),c.Ac(4),c.dc(5,"uppercase"),c.Ob(),c.Ob()),2&t){const t=e.$implicit,r=c.cc(2);c.xb(2),c.Bc(r.order[t]),c.xb(2),c.Bc(c.ec(5,2,t))}}function k(t,e){if(1&t){const t=c.Qb();c.Pb(0,"div",2),c.Pb(1,"h6",3),c.Ac(2),c.Ob(),c.Ob(),c.Pb(3,"div",4),c.Pb(4,"div",5),c.yc(5,A,6,4,"div",6),c.Ob(),c.Pb(6,"div",7),c.Pb(7,"div",8),c.Pb(8,"button",9),c.ac("click",(function(){return c.rc(t),c.cc().ok()})),c.Ac(9,"Ok"),c.Ob(),c.Ob(),c.Ob(),c.Ob()}if(2&t){const t=c.cc();c.xb(2),c.Bc(t.message),c.xb(3),c.ic("ngForOf",t.attributes)}}let C=(()=>{class t{constructor(t,e){this.modalService=t,this.router=e}ngOnInit(){this.order=history.state.resource,this.order?(this.attributes=Object.keys(this.order),this.message="Details of order: "+this.order.id):this.ok()}ngAfterViewInit(){this.modal=this.modalService.open(this.content,{size:"md",backdrop:"static"})}ok(){this.router.navigateByUrl("/orders"),this.modal&&this.modal.dismiss()}}return t.\u0275fac=function(e){return new(e||t)(c.Kb(m.d),c.Kb(i.b))},t.\u0275cmp=c.Eb({type:t,selectors:[["app-order-details"]],viewQuery:function(t,e){var r;1&t&&c.Fc(w,!0),2&t&&c.pc(r=c.bc())&&(e.content=r.first)},decls:4,vars:1,consts:[["type","info",3,"close"],["content",""],[1,"modal-header"],[1,"modal-title","pt-1","mt-1"],[1,"modal-body"],[1,"list-group"],["class","list-group-item list-group-item-action",4,"ngFor","ngForOf"],[1,"row"],[1,"col-12","text-align"],[1,"btn","btn-primary","btn-rounded",3,"click"],[1,"list-group-item","list-group-item-action"]],template:function(t,e){1&t&&(c.Pb(0,"ngb-alert",0),c.ac("close",(function(){return e.ok()})),c.Ac(1),c.Ob(),c.yc(2,k,10,2,"ng-template",null,1,c.zc)),2&t&&(c.xb(1),c.Bc(e.message))},directives:[m.b,o.j],pipes:[o.p],styles:[""]}),t})();var q=r("w+MF");let F=(()=>{class t{constructor(){}ngOnInit(){this.context={deleteUrl:"ordersDeleteUrl",data:history.state.resource,title:"Delete Order Resource!",description:"Are you sure to delete this order?"}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Eb({type:t,selectors:[["app-order-delete"]],decls:1,vars:1,consts:[[3,"context"]],template:function(t,e){1&t&&c.Lb(0,"app-resource-delete",0),2&t&&c.ic("context",e.context)},directives:[q.a],styles:[""]}),t})();var S=r("OC8m");const I=["content"];function N(t,e){if(1&t&&(c.Pb(0,"option",12),c.Pb(1,"h3"),c.Ac(2),c.Ob(),c.Ob()),2&t){const t=e.$implicit;c.ic("value",t.value),c.xb(2),c.Bc(t.title)}}function U(t,e){if(1&t){const t=c.Qb();c.Pb(0,"div",2),c.Pb(1,"h6",3),c.Ac(2),c.Ob(),c.Pb(3,"p"),c.Ac(4),c.Ob(),c.Pb(5,"div",4),c.Pb(6,"div",5),c.Pb(7,"label",6),c.Ac(8,"Status"),c.Ob(),c.Pb(9,"select",7),c.ac("ngModelChange",(function(e){return c.rc(t),c.cc().selectedStatus=e})),c.yc(10,N,3,2,"option",8),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Pb(11,"div",9),c.Pb(12,"button",10),c.ac("click",(function(){return c.rc(t),c.cc().change()})),c.Ac(13," Change "),c.Ob(),c.Pb(14,"button",11),c.ac("click",(function(){return c.rc(t),c.cc().ok()})),c.Ac(15," Cancel "),c.Ob(),c.Ob()}if(2&t){const t=c.cc();c.xb(2),c.Bc(t.title),c.xb(2),c.Bc(t.description),c.xb(5),c.ic("ngModel",t.selectedStatus),c.xb(1),c.ic("ngForOf",t.statuses),c.xb(2),c.ic("disabled",!t.selectedStatus)}}const L=[{path:"",component:a,resolve:{orders:d},children:[{path:"create",component:x},{path:":id/edit",component:x},{path:":id/details",pathMatch:"full",component:C},{path:":id/delete",pathMatch:"full",component:F},{path:":id/status",pathMatch:"full",component:(()=>{class t{constructor(t,e,r){this.http=t,this.modalService=e,this.notifier=r,this.statuses=[{title:"pending",value:0},{title:"accepted",value:1},{title:"shipping",value:2},{title:"deliveried",value:3},{title:"rejected",value:4},{title:"canceled",value:5}]}ngAfterViewInit(){if(this.data=history.state.resource,this.modal=this.modalService.open(this.content,{backdrop:"static",size:"md"}),this.modal&&this.data)switch(this.title=`Change order ${this.data.id} status`,this.description="Please be aware that this very important action to take sometimes it is not able to take it back",console.log(this.data.status.title),Number.parseInt(this.data.status.title.toString(),10)){case 0:this.statuses=[{title:"accepted",value:1},{title:"rejected",value:4},{title:"canceled",value:5}];break;case 1:this.statuses=[{title:"shipping",value:2},{title:"deliveried",value:3}];break;case 2:this.statuses=[{title:"deliveried",value:3}];break;case 3:case 4:case 5:this.statuses=[]}else this.ok()}change(){const t={status:this.selectedStatus};this.http.put(l.a.prepareUrl("ordersStatusUrl",{id:this.data.id}),t).subscribe(t=>{if(t)return this.notifier.success("Order status updated successfully"),void this.ok();this.notifier.error("Somthing went wrong, Failed to delete the resource")})}ok(){this.modal?this.modal.dismiss():this.modalService.dismissAll(),history.back()}}return t.\u0275fac=function(e){return new(e||t)(c.Kb(b.b),c.Kb(m.d),c.Kb(S.a))},t.\u0275cmp=c.Eb({type:t,selectors:[["app-order-status-form"]],viewQuery:function(t,e){var r;1&t&&c.Fc(I,!0),2&t&&c.pc(r=c.bc())&&(e.content=r.first)},decls:4,vars:0,consts:[["type","info",3,"close"],["content",""],[1,"modal-body"],[1,"modal-title","mt-1","pt-2"],[1,"form"],[1,"form-group"],[1,"form-group-label"],[1,"form-control",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[1,"modal-footer"],[1,"btn","btn-sm","btn-rounded","btn-danger",3,"disabled","click"],[1,"btn","btn-sm","btn-rounded","btn-secondary",3,"click"],[3,"value"]],template:function(t,e){1&t&&(c.Pb(0,"ngb-alert",0),c.ac("close",(function(){return e.ok()})),c.Ac(1,"Change Order Status"),c.Ob(),c.yc(2,U,16,5,"ng-template",null,1,c.zc))},directives:[m.b,p.p,p.j,p.l,o.j,p.m,p.r],styles:[""]}),t})()}]}];let B=(()=>{class t{}return t.\u0275mod=c.Ib({type:t}),t.\u0275inj=c.Hb({factory:function(e){return new(e||t)},imports:[[i.e.forChild(L)],i.e]}),t})();var j=r("uP1v"),E=r("RDNO");let K=(()=>{class t{}return t.\u0275mod=c.Ib({type:t}),t.\u0275inj=c.Hb({factory:function(e){return new(e||t)},providers:[d,{provide:b.a,useClass:E.a,multi:!0}],imports:[[o.b,B,m.e,i.e,p.g,p.o,j.a]]}),t})()}}]);