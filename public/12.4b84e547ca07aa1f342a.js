(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{AMeL:function(t,e,i){"use strict";i.d(e,"a",(function(){return g}));var n=i("fXoL"),s=i("tyNb"),o=i("OC8m"),c=i("1kSV"),r=i("ofXK");const l=["component"];function a(t,e){}function b(t,e){1&t&&(n.Rb(0,"div"),n.Bc(1,a,0,0,"ng-template",null,3,n.Cc),n.Qb())}function p(t,e){if(1&t&&(n.Rb(0,"div"),n.Rb(1,"h6"),n.Dc(2),n.Qb(),n.Rb(3,"small"),n.Dc(4),n.fc(5,"uppercase"),n.Qb(),n.Qb()),2&t){const t=n.ec();n.yb(2),n.Ec(t.resource.toTitle(t.prop,t.route)),n.yb(2),n.Ec(n.gc(5,2,t.prop.title))}}function u(t,e){if(1&t&&(n.Rb(0,"div"),n.Rb(1,"h6"),n.Dc(2),n.Qb(),n.Rb(3,"small"),n.Dc(4),n.fc(5,"uppercase"),n.Qb(),n.Qb()),2&t){const t=n.ec();n.yb(2),n.Ec(t.resource.toTitle(t.prop)),n.yb(2),n.Ec(n.gc(5,2,t.prop.title))}}let d=(()=>{class t{constructor(t,e){this.resolver=t,this.route=e}ngAfterViewInit(){if("component"===this.prop.type){const t=this.resolver.resolveComponentFactory(this.prop.component.type);this.instance=this.component.createComponent(t),this.prop.component.configureInstance(this.instance,this.resource,this.prop),this.instance.changeDetectorRef.detectChanges()}}ngOnDestroy(){this.instance&&this.instance.destroy()}}return t.\u0275fac=function(e){return new(e||t)(n.Lb(n.j),n.Lb(s.a))},t.\u0275cmp=n.Fb({type:t,selectors:[["app-resource-property-details"]],viewQuery:function(t,e){var i;1&t&&n.Ic(l,!0,n.P),2&t&&n.sc(i=n.dc())&&(e.component=i.first)},inputs:{resource:"resource",prop:"prop"},decls:4,vars:3,consts:[[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],["component",""]],template:function(t,e){1&t&&(n.Pb(0,0),n.Bc(1,b,3,0,"div",1),n.Bc(2,p,6,4,"div",1),n.Bc(3,u,6,4,"div",2),n.Ob()),2&t&&(n.lc("ngSwitch",e.prop.type),n.yb(1),n.lc("ngSwitchCase","component"),n.yb(1),n.lc("ngSwitchCase","data"))},directives:[r.p,r.q,r.r],pipes:[r.x],styles:[""]}),t})();var m=i("m1XX");const f=["content"];function h(t,e){if(1&t&&n.Mb(0,"app-resource-property-details",14),2&t){const t=e.$implicit,i=n.ec(2);n.lc("resource",i.context.data)("prop",t)}}function y(t,e){if(1&t&&(n.Rb(0,"button",15),n.Dc(1," Print "),n.Qb()),2&t){const t=n.ec(2);n.lc("useExistingCss",!0)("printTitle",t.context.title)}}function v(t,e){if(1&t){const t=n.Sb();n.Rb(0,"div",2),n.Rb(1,"h6",3),n.Dc(2),n.Qb(),n.Rb(3,"button",4),n.cc("click",(function(){return n.uc(t),n.ec().done()})),n.Rb(4,"span",5),n.Dc(5,"\xd7"),n.Qb(),n.Qb(),n.Qb(),n.Rb(6,"div",6),n.Rb(7,"div",7),n.Bc(8,h,1,2,"app-resource-property-details",8),n.Qb(),n.Rb(9,"div",9),n.Rb(10,"div",10),n.Bc(11,y,2,2,"button",11),n.Rb(12,"button",12),n.cc("click",(function(){return n.uc(t),n.ec().done()})),n.Mb(13,"i",13),n.Dc(14," Done "),n.Qb(),n.Qb(),n.Qb(),n.Qb()}if(2&t){const t=n.ec();n.yb(2),n.Ec(t.context.title),n.yb(6),n.lc("ngForOf",t.context.properties),n.yb(3),n.lc("ngIf",t.context.printable)}}let g=(()=>{class t{constructor(t,e,i,n){this.router=t,this.notifier=e,this.modalService=i,this.route=n}ngAfterViewInit(){if(!this.context||!this.context.data||!this.context.properties)return this.notifier.warning("Something went wrong, Undefined context","Resource Details"),void this.done();this.modal=this.modalService.open(this.content,{size:"md",backdrop:"static",keyboard:!1}),history.state.print&&setTimeout(()=>{document.getElementById("printer").click()},2e3)}done(){var t,e;const i=(null===(e=null===(t=this.context)||void 0===t?void 0:t.urls)||void 0===e?void 0:e.tableUrl)||"/users";console.log(i),this.router.navigateByUrl(i).then(t=>{var e;t&&(null===(e=this.modal)||void 0===e||e.dismiss(),this.modalService.dismissAll())})}}return t.\u0275fac=function(e){return new(e||t)(n.Lb(s.f),n.Lb(o.a),n.Lb(c.d),n.Lb(s.a))},t.\u0275cmp=n.Fb({type:t,selectors:[["app-resource-details"]],viewQuery:function(t,e){var i;1&t&&n.Ic(f,!0),2&t&&n.sc(i=n.dc())&&(e.content=i.first)},inputs:{context:"context"},decls:4,vars:1,consts:[["type","info",3,"close"],["content",""],[1,"modal-header"],[1,"modal-title","pt-1","mt-1"],["type","button",1,"close",2,"border","none","outline","none",3,"click"],["aria-hidden","true"],[1,"modal-body"],["id","resource-details",1,"list-group"],["class","list-group-item list-group-item-action",3,"resource","prop",4,"ngFor","ngForOf"],[1,"row"],[1,"col-12","text-right"],["id","printer","class","btn btn-md btn-rounded btn-secondary px-3","printSectionId","resource-details","ngxPrint","",3,"useExistingCss","printTitle",4,"ngIf"],["type","button",1,"btn","btn-md","btn-rounded","btn-primary","px-3",3,"click"],[1,"nc-icon","nc-check-2"],[1,"list-group-item","list-group-item-action",3,"resource","prop"],["id","printer","printSectionId","resource-details","ngxPrint","",1,"btn","btn-md","btn-rounded","btn-secondary","px-3",3,"useExistingCss","printTitle"]],template:function(t,e){1&t&&(n.Rb(0,"ngb-alert",0),n.cc("close",(function(){return e.done()})),n.Dc(1),n.Qb(),n.Bc(2,v,15,3,"ng-template",null,1,n.Cc)),2&t&&(n.yb(1),n.Ec(e.context.title))},directives:[c.b,r.m,r.n,d,m.a],styles:[""]}),t})()},PHiJ:function(t,e,i){"use strict";i.r(e),i.d(e,"RolesModule",(function(){return N}));var n=i("ofXK"),s=i("tyNb"),o=i("Ubi2"),c=i("fXoL");const r=["table"];let l=(()=>{class t{constructor(t){this.context={urls:{createUrl:"/roles/create",detailsUrl:"/:id"},pagination:void 0,properties:[{key:"name",title:"Name",type:"string"},{key:"description",title:"Description",type:"string"},{key:"created_at",title:"Created At",type:"datetime"},{key:"updated_at",title:"Updated At",type:"datetime"}],title:"Roles",actions:[{type:"url",name:"permissions",icon:"nc-icon nc-bullet-list-67",url:"/roles/:id/permissions"}]},o.a.initializePaginationContext(t,this.context)}}return t.\u0275fac=function(e){return new(e||t)(c.Lb(s.a))},t.\u0275cmp=c.Fb({type:t,selectors:[["app-index"]],viewQuery:function(t,e){var i;1&t&&c.Ic(r,!0),2&t&&c.sc(i=c.dc())&&(e.table=i.first)},decls:2,vars:1,consts:[[3,"context"],["table",""]],template:function(t,e){1&t&&c.Mb(0,"app-table-view",0,1),2&t&&c.lc("context",e.context)},directives:[o.a],styles:[""]}),t})();var a=i("pMMm"),b=i("0PJQ"),p=i("3Pt+"),u=i("tk/3"),d=i("1kSV");const m=["content"];function f(t,e){if(1&t){const t=c.Sb();c.Rb(0,"div",2),c.Rb(1,"h6",3),c.Dc(2),c.Qb(),c.Rb(3,"button",4),c.cc("click",(function(){return c.uc(t),c.ec().ok()})),c.Rb(4,"span",5),c.Dc(5,"\xd7"),c.Qb(),c.Qb(),c.Qb(),c.Rb(6,"div",6),c.Rb(7,"form",7),c.Rb(8,"div",8),c.Rb(9,"div",9),c.Rb(10,"div",10),c.Rb(11,"label"),c.Dc(12,"Name"),c.Qb(),c.Mb(13,"input",11),c.Qb(),c.Qb(),c.Qb(),c.Rb(14,"div",8),c.Rb(15,"div",9),c.Rb(16,"div",10),c.Rb(17,"label"),c.Dc(18,"Description"),c.Qb(),c.Mb(19,"input",12),c.Qb(),c.Qb(),c.Qb(),c.Rb(20,"div",8),c.Rb(21,"div",13),c.Rb(22,"button",14),c.cc("click",(function(){return c.uc(t),c.ec().submit()})),c.Dc(23," Submit "),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Qb()}if(2&t){const t=c.ec();c.yb(2),c.Fc(" ",t.title," "),c.yb(5),c.lc("formGroup",t.formGroup),c.yb(15),c.lc("disabled",t.uploading||!t.formGroup.dirty||!t.formGroup.valid)}}let h=(()=>{class t extends b.b{constructor(t,e,i,n){super(t,e,i,n),this.formGroup=new p.e({name:new p.c(null,p.r.required),description:new p.c(null,p.r.required)})}openModal(){return this.service.open(this.content,{backdrop:"static",keyboard:!1})}get postUrl(){return"rolesCreateUrl"}get putUrl(){return"rolesUpdateUrl"}get parentUrl(){return"/roles"}}return t.\u0275fac=function(e){return new(e||t)(c.Lb(u.b),c.Lb(s.a),c.Lb(s.f),c.Lb(d.d))},t.\u0275cmp=c.Fb({type:t,selectors:[["app-role-form"]],viewQuery:function(t,e){var i;1&t&&c.Ic(m,!0),2&t&&c.sc(i=c.dc())&&(e.content=i.first)},features:[c.vb],decls:4,vars:1,consts:[["type","info",3,"close"],["content",""],[1,"modal-header"],[1,"modal-title","pt-1","mt-1"],["type","button",1,"close",2,"border","none","outline","none",3,"click"],["aria-hidden","true"],[1,"modal-body"],["autocomplete","off",3,"formGroup"],[1,"row"],[1,"col-12","px-3"],[1,"form-group"],["type","text","placeholder","Name","formControlName","name","autocomplete","off",1,"form-control"],["type","text","placeholder","Description","formControlName","description","autocomplete","off",1,"form-control"],[1,"update","ml-auto","mr-auto"],["type","submit",1,"btn","btn-primary","btn-round",3,"disabled","click"]],template:function(t,e){1&t&&(c.Rb(0,"ngb-alert",0),c.cc("close",(function(){return e.ok()})),c.Dc(1),c.Qb(),c.Bc(2,f,24,3,"ng-template",null,1,c.Cc)),2&t&&(c.yb(1),c.Ec(e.message))},directives:[d.b,p.t,p.l,p.f,p.b,p.k,p.d],styles:[""]}),t})();var y=i("AMeL");let v=(()=>{class t{constructor(t){t.parent.data.subscribe(e=>{t.params.subscribe(t=>{const i=Number.parseInt(t.id,10),n=e.resources.data.find(t=>t.id===i);this.context={urls:{tableUrl:"/roles"},data:n,properties:[{key:"name",title:"Name",type:"string"},{key:"description",title:"Description",type:"string"},{key:"created_at",title:"Created At",type:"datetime"},{key:"updated_at",title:"Updated At",type:"datetime"}],title:"Details of role "+(null==n?void 0:n.name)}})})}}return t.\u0275fac=function(e){return new(e||t)(c.Lb(s.a))},t.\u0275cmp=c.Fb({type:t,selectors:[["app-role-details"]],decls:1,vars:1,consts:[[3,"context"]],template:function(t,e){1&t&&c.Mb(0,"app-resource-details",0),2&t&&c.lc("context",e.context)},directives:[y.a],styles:[""]}),t})();var g=i("w+MF");let R=(()=>{class t{constructor(t){t.parent.data.subscribe(e=>{t.params.subscribe(t=>{const i=Number.parseInt(t.id,10),n=e.resources.data.find(t=>t.id===i);this.context={deleteUrl:"rolesDeleteUrl",data:n,title:"Delete Role Resource!",description:"Are you sure to delete this role?"}})})}}return t.\u0275fac=function(e){return new(e||t)(c.Lb(s.a))},t.\u0275cmp=c.Fb({type:t,selectors:[["app-role-delete"]],decls:1,vars:1,consts:[[3,"context"]],template:function(t,e){1&t&&c.Mb(0,"app-resource-delete",0),2&t&&c.lc("context",e.context)},directives:[g.a],styles:[""]}),t})();var Q=i("AytR"),x=i("lJxs"),k=i("W5xj");const w=["content"];function D(t,e){1&t&&(c.Pb(0),c.Rb(1,"div",9),c.Rb(2,"div",10),c.Rb(3,"h6"),c.Dc(4,"Loading"),c.Qb(),c.Qb(),c.Qb(),c.Ob())}function P(t,e){1&t&&(c.Rb(0,"div"),c.Rb(1,"small"),c.Dc(2,"Permissions List is Empty"),c.Qb(),c.Qb())}function F(t,e){if(1&t){const t=c.Sb();c.Rb(0,"div",26),c.cc("click",(function(){c.uc(t);const i=e.$implicit;return c.ec(4).add(i)})),c.Rb(1,"h6"),c.Dc(2),c.Qb(),c.Rb(3,"small"),c.Dc(4),c.Qb(),c.Qb()}if(2&t){const t=e.$implicit;c.yb(2),c.Ec(t.name),c.yb(2),c.Ec(t.description)}}function I(t,e){if(1&t&&c.Bc(0,F,5,2,"div",25),2&t){const t=c.ec(3);c.lc("ngForOf",t.permissions)}}function C(t,e){1&t&&(c.Rb(0,"div"),c.Rb(1,"small"),c.Dc(2,"Role's Permissions List is Empty"),c.Qb(),c.Qb())}function L(t,e){if(1&t){const t=c.Sb();c.Rb(0,"div",26),c.cc("click",(function(){c.uc(t);const i=e.$implicit;return c.ec(4).remove(i)})),c.Rb(1,"h6"),c.Dc(2),c.Qb(),c.Rb(3,"small"),c.Dc(4),c.Qb(),c.Qb()}if(2&t){const t=e.$implicit;c.yb(2),c.Ec(t.name),c.yb(2),c.Ec(t.description)}}function E(t,e){if(1&t&&c.Bc(0,L,5,2,"div",25),2&t){const t=c.ec(3);c.lc("ngForOf",t.rolePermissions)}}function S(t,e){if(1&t){const t=c.Sb();c.Rb(0,"form",11),c.Mb(1,"input",12),c.Rb(2,"div",9),c.Rb(3,"div",13),c.Bc(4,P,3,0,"div",7),c.Bc(5,I,1,1,"ng-template",14,15,c.Cc),c.Qb(),c.Rb(7,"div",16),c.Rb(8,"div",17),c.Rb(9,"button",18),c.cc("click",(function(){return c.uc(t),c.ec(2).addAll()})),c.Mb(10,"i",19),c.Qb(),c.Rb(11,"button",20),c.cc("click",(function(){return c.uc(t),c.ec(2).removeAll()})),c.Mb(12,"i",21),c.Qb(),c.Qb(),c.Qb(),c.Rb(13,"div",13),c.Bc(14,C,3,0,"div",7),c.Bc(15,E,1,1,"ng-template",14,22,c.Cc),c.Qb(),c.Qb(),c.Rb(17,"div",9),c.Rb(18,"div",23),c.Rb(19,"button",24),c.cc("click",(function(){return c.uc(t),c.ec(2).submit()})),c.Dc(20," Save "),c.Qb(),c.Qb(),c.Qb(),c.Qb()}if(2&t){const t=c.tc(6),e=c.tc(16),i=c.ec(2);c.lc("formGroup",i.formGroup),c.yb(4),c.lc("ngIf",!i.permissions||0==(null==i.permissions?null:i.permissions.length))("ngIfElse",t),c.yb(10),c.lc("ngIf",!i.rolePermissions||0==(null==i.rolePermissions?null:i.rolePermissions.length))("ngIfElse",e),c.yb(5),c.lc("disabled",!i.formGroup.valid)}}function A(t,e){if(1&t){const t=c.Sb();c.Rb(0,"div",2),c.Rb(1,"h6",3),c.Dc(2),c.Qb(),c.Rb(3,"button",4),c.cc("click",(function(){return c.uc(t),c.ec().dismiss()})),c.Rb(4,"span",5),c.Dc(5,"\xd7"),c.Qb(),c.Qb(),c.Qb(),c.Rb(6,"div",6),c.Bc(7,D,5,0,"ng-container",7),c.Bc(8,S,21,6,"ng-template",null,8,c.Cc),c.Qb()}if(2&t){const t=c.tc(9),e=c.ec();c.yb(2),c.Fc(" ",e.title," "),c.yb(5),c.lc("ngIf",e.loading)("ngIfElse",t)}}const U=[{path:"",component:l,runGuardsAndResolvers:(t,e)=>{var i;return null!==(i=history.state.runResolvers)&&void 0!==i&&i},resolve:{resources:a.a},children:[{path:"create",component:h},{path:":id/edit",component:h},{path:":id/details",pathMatch:"full",component:v},{path:":id/delete",pathMatch:"full",component:R},{path:":id/permissions",pathMatch:"full",component:(()=>{class t{constructor(t,e,i,n){this.http=t,this.route=e,this.router=i,this.service=n,this.loading=!0,this.formGroup=new p.e({permissions:new p.c(null,p.r.required)}),this.message='Please select the permissions then click "Save" button',e.parent.data.subscribe(t=>{e.params.subscribe(e=>{const i=Number.parseInt(e.id,10),n=t.resources.data.find(t=>t.id===i);n?(this.role=n,this.fetchPermissions()):this.dismiss()})})}ngAfterViewInit(){this.role&&(this.title=`Assign role "${this.role.name}" permissions`,this.service.open(this.content,{backdrop:"static",keyboard:!1,size:"lg"}))}fetchPermissions(){this.loading=!0,this.route.data.subscribe(t=>{this.permissions=t.permissions.data,this.http.get(Q.a.prepareUrl("rolesFetchPermissionsUrl",{id:this.role.id})).pipe(Object(x.a)(t=>t.map(t=>k.a.json2Permission(t)))).subscribe(t=>{this.rolePermissions=[],t.forEach(t=>this.add(t)),this.loading=!1})})}dismiss(){this.service.dismissAll(),this.router.navigateByUrl("/roles")}submit(){this.http.put(Q.a.prepareUrl("rolesAssignPermissionsUrl",this.role),this.formGroup.value).subscribe(t=>{Array.isArray(t)&&this.dismiss()})}addAll(){this.rolePermissions.push(...this.permissions.splice(0)),this.syncFormFieldValue()}removeAll(){this.permissions.push(...this.rolePermissions.splice(0)),this.syncFormFieldValue()}add(t){const e=this.permissions.findIndex(e=>e.name===t.name);this.rolePermissions.push(this.permissions.splice(e,1)[0]),this.syncFormFieldValue()}remove(t){const e=this.rolePermissions.findIndex(e=>e.name===t.name);this.permissions.push(this.rolePermissions.splice(e,1)[0]),this.syncFormFieldValue()}syncFormFieldValue(){const t=this.rolePermissions.map(t=>t.id);this.formGroup.controls.permissions.patchValue(t)}}return t.\u0275fac=function(e){return new(e||t)(c.Lb(u.b),c.Lb(s.a),c.Lb(s.f),c.Lb(d.d))},t.\u0275cmp=c.Fb({type:t,selectors:[["app-assign-role-permissions"]],viewQuery:function(t,e){var i;1&t&&c.Ic(w,!0),2&t&&c.sc(i=c.dc())&&(e.content=i.first)},decls:4,vars:1,consts:[["type","info",3,"close"],["content",""],[1,"modal-header"],[1,"modal-title","pt-1","mt-1"],["type","button",1,"close",2,"border","none","outline","none",3,"click"],["aria-hidden","true"],[1,"modal-body","multi-select"],[4,"ngIf","ngIfElse"],["multiselect",""],[1,"row"],[1,"col-12","d-flex","align-items-center","justify-content-center"],["autocomplete","off",3,"formGroup"],["type","hidden","formControlName","permissions"],[1,"col-5","select-container"],["class","list-group"],["unselected",""],[1,"col-2","d-flex","align-items-center","justify-content-center"],[1,"d-flex","flex-column"],[1,"btn","btn-secondary","btn-rounded","btn-sm",3,"click"],[1,"fa","fa-angle-double-right"],[1,"btn","btn-danger","btn-rounded","btn-sm",3,"click"],[1,"fa","fa-angle-double-left"],["selected",""],[1,"update","ml-auto","mr-auto"],["type","submit",1,"btn","btn-primary","btn-round",3,"disabled","click"],["class","list-group-item list-group-item-action",3,"click",4,"ngFor","ngForOf"],[1,"list-group-item","list-group-item-action",3,"click"]],template:function(t,e){1&t&&(c.Rb(0,"ngb-alert",0),c.cc("close",(function(){return e.dismiss()})),c.Dc(1),c.Qb(),c.Bc(2,A,10,3,"ng-template",null,1,c.Cc)),2&t&&(c.yb(1),c.Ec(e.message))},directives:[d.b,n.n,p.t,p.l,p.f,p.b,p.k,p.d,n.m],styles:[""]}),t})(),resolve:{permissions:k.a}}]}];let B=(()=>{class t{}return t.\u0275mod=c.Jb({type:t}),t.\u0275inj=c.Ib({factory:function(e){return new(e||t)},imports:[[s.i.forChild(U)],s.i]}),t})();var M=i("uP1v"),G=i("RDNO");let N=(()=>{class t{}return t.\u0275mod=c.Jb({type:t}),t.\u0275inj=c.Ib({factory:function(e){return new(e||t)},providers:[a.a,k.a,{provide:u.a,useClass:G.a,multi:!0}],imports:[[n.c,B,d.e,s.i,p.p,M.a]]}),t})()}}]);