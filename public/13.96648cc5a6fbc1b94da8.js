(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{PHiJ:function(t,e,o){"use strict";o.r(e),o.d(e,"RolesModule",(function(){return F}));var r=o("ofXK"),c=o("tyNb"),n=o("fXoL"),i=o("Ubi2");const s=["table"];let a=(()=>{class t{constructor(t){this.context={urls:{createUrl:"/roles/create",detailsUrl:"/:id"},data:this.data,properties:[{key:"name",title:"Name",type:"string"},{key:"description",title:"Description",type:"string"},{key:"created_at",title:"Created At",type:"datetime"},{key:"updated_at",title:"Updated At",type:"datetime"}],title:"Roles"},t.data.subscribe(t=>{this.data=t.roles,this.context.data=this.data})}}return t.\u0275fac=function(e){return new(e||t)(n.Kb(c.a))},t.\u0275cmp=n.Eb({type:t,selectors:[["app-index"]],viewQuery:function(t,e){var o;1&t&&n.Fc(s,!0),2&t&&n.pc(o=n.bc())&&(e.table=o.first)},decls:2,vars:1,consts:[[3,"context"],["table",""]],template:function(t,e){1&t&&n.Lb(0,"app-table-view",0,1),2&t&&n.ic("context",e.context)},directives:[i.a],styles:[""]}),t})();var l=o("AytR"),b=o("tk/3");let u=(()=>{class t{constructor(t){this.http=t}resolve(t,e){return this.http.get(`${l.a.apiUrl}/${l.a.rolesFetchUrl}`)}}return t.\u0275fac=function(e){return new(e||t)(n.Xb(b.b))},t.\u0275prov=n.Gb({token:t,factory:t.\u0275fac}),t})();var p=o("0PJQ"),d=o("3Pt+"),m=o("1kSV");const f=["content"];function h(t,e){if(1&t){const t=n.Qb();n.Pb(0,"div",2),n.Pb(1,"h6",3),n.Ac(2),n.Ob(),n.Pb(3,"button",4),n.ac("click",(function(){return n.rc(t),n.cc().ok()})),n.Pb(4,"span",5),n.Ac(5,"\xd7"),n.Ob(),n.Ob(),n.Ob(),n.Pb(6,"div",6),n.Pb(7,"form",7),n.Pb(8,"div",8),n.Pb(9,"div",9),n.Pb(10,"div",10),n.Pb(11,"label"),n.Ac(12,"Name"),n.Ob(),n.Lb(13,"input",11),n.Ob(),n.Ob(),n.Ob(),n.Pb(14,"div",8),n.Pb(15,"div",9),n.Pb(16,"div",10),n.Pb(17,"label"),n.Ac(18,"Description"),n.Ob(),n.Lb(19,"input",12),n.Ob(),n.Ob(),n.Ob(),n.Pb(20,"div",8),n.Pb(21,"div",13),n.Pb(22,"button",14),n.ac("click",(function(){return n.rc(t),n.cc().submit()})),n.Ac(23," Submit "),n.Ob(),n.Ob(),n.Ob(),n.Ob(),n.Ob()}if(2&t){const t=n.cc();n.xb(2),n.Cc(" ",t.title," "),n.xb(5),n.ic("formGroup",t.formGroup),n.xb(15),n.ic("disabled",!t.formGroup.valid)}}let v=(()=>{class t extends p.b{constructor(t,e,o,r){super(t,e,o,r),this.formGroup=new d.e({name:new d.c(null,d.q.required),description:new d.c(null,d.q.required)})}openModal(){return this.service.open(this.content,{backdrop:"static",keyboard:!1})}postUrl(){return"rolesCreateUrl"}putUrl(){return"rolesUpdateUrl"}}return t.\u0275fac=function(e){return new(e||t)(n.Kb(b.b),n.Kb(c.a),n.Kb(c.b),n.Kb(m.d))},t.\u0275cmp=n.Eb({type:t,selectors:[["app-role-form"]],viewQuery:function(t,e){var o;1&t&&n.Fc(f,!0),2&t&&n.pc(o=n.bc())&&(e.content=o.first)},features:[n.ub],decls:4,vars:1,consts:[["type","info",3,"close"],["content",""],[1,"modal-header"],[1,"modal-title","pt-1","mt-1"],["type","button",1,"close",2,"border","none","outline","none",3,"click"],["aria-hidden","true"],[1,"modal-body"],["autocomplete","off",3,"formGroup"],[1,"row"],[1,"col-12","px-3"],[1,"form-group"],["type","text","placeholder","Name","formControlName","name","autocomplete","off",1,"form-control"],["type","text","placeholder","Description","formControlName","description","autocomplete","off",1,"form-control"],[1,"update","ml-auto","mr-auto"],["type","submit",1,"btn","btn-primary","btn-round",3,"disabled","click"]],template:function(t,e){1&t&&(n.Pb(0,"ngb-alert",0),n.ac("close",(function(){return e.ok()})),n.Ac(1),n.Ob(),n.yc(2,h,24,3,"ng-template",null,1,n.zc)),2&t&&(n.xb(1),n.Bc(e.message))},directives:[m.b,d.s,d.k,d.f,d.b,d.j,d.d],styles:[""]}),t})();const y=["content"];function O(t,e){if(1&t&&(n.Pb(0,"div",10),n.Pb(1,"h6"),n.Ac(2),n.Ob(),n.Pb(3,"small"),n.Ac(4),n.dc(5,"uppercase"),n.Ob(),n.Ob()),2&t){const t=e.$implicit,o=n.cc(2);n.xb(2),n.Bc(o.role[t]),n.xb(2),n.Bc(n.ec(5,2,t))}}function P(t,e){if(1&t){const t=n.Qb();n.Pb(0,"div",2),n.Pb(1,"h6",3),n.Ac(2),n.Ob(),n.Ob(),n.Pb(3,"div",4),n.Pb(4,"div",5),n.yc(5,O,6,4,"div",6),n.Ob(),n.Pb(6,"div",7),n.Pb(7,"div",8),n.Pb(8,"button",9),n.ac("click",(function(){return n.rc(t),n.cc().ok()})),n.Ac(9,"Ok"),n.Ob(),n.Ob(),n.Ob(),n.Ob()}if(2&t){const t=n.cc();n.xb(2),n.Bc(t.message),n.xb(3),n.ic("ngForOf",t.attributes)}}let k=(()=>{class t{constructor(t,e){this.modalService=t,this.router=e}ngOnInit(){this.role=history.state.resource,this.role?(this.attributes=Object.keys(this.role),this.message="Details of role: "+this.role.name):this.ok()}ngAfterViewInit(){this.modal=this.modalService.open(this.content,{size:"md",backdrop:"static"})}ok(){this.router.navigateByUrl("/roles"),this.modal&&this.modal.dismiss()}}return t.\u0275fac=function(e){return new(e||t)(n.Kb(m.d),n.Kb(c.b))},t.\u0275cmp=n.Eb({type:t,selectors:[["app-role-details"]],viewQuery:function(t,e){var o;1&t&&n.Fc(y,!0),2&t&&n.pc(o=n.bc())&&(e.content=o.first)},decls:4,vars:1,consts:[["type","info",3,"close"],["content",""],[1,"modal-header"],[1,"modal-title","pt-1","mt-1"],[1,"modal-body"],[1,"list-group"],["class","list-group-item list-group-item-action",4,"ngFor","ngForOf"],[1,"row"],[1,"col-12","text-align"],[1,"btn","btn-primary","btn-rounded",3,"click"],[1,"list-group-item","list-group-item-action"]],template:function(t,e){1&t&&(n.Pb(0,"ngb-alert",0),n.ac("close",(function(){return e.ok()})),n.Ac(1),n.Ob(),n.yc(2,P,10,2,"ng-template",null,1,n.zc)),2&t&&(n.xb(1),n.Bc(e.message))},directives:[m.b,r.j],pipes:[r.p],styles:[""]}),t})();var g=o("w+MF");const w=[{path:"",component:a,resolve:{roles:u},children:[{path:"create",component:v},{path:":id/edit",component:v},{path:":id/details",pathMatch:"full",component:k},{path:":id/delete",pathMatch:"full",component:(()=>{class t{constructor(){}ngOnInit(){this.context={deleteUrl:"rolesDeleteUrl",data:history.state.resource,title:"Delete Role Resource!",description:"Are you sure to delete this role?"}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Eb({type:t,selectors:[["app-role-delete"]],decls:1,vars:1,consts:[[3,"context"]],template:function(t,e){1&t&&n.Lb(0,"app-resource-delete",0),2&t&&n.ic("context",e.context)},directives:[g.a],styles:[""]}),t})()}]}];let x=(()=>{class t{}return t.\u0275mod=n.Ib({type:t}),t.\u0275inj=n.Hb({factory:function(e){return new(e||t)},imports:[[c.e.forChild(w)],c.e]}),t})();var A=o("uP1v"),U=o("RDNO");let F=(()=>{class t{}return t.\u0275mod=n.Ib({type:t}),t.\u0275inj=n.Hb({factory:function(e){return new(e||t)},providers:[u,{provide:b.a,useClass:U.a,multi:!0}],imports:[[r.b,x,m.e,c.e,d.o,A.a]]}),t})()}}]);