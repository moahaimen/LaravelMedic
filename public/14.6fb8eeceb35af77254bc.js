(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{n0rM:function(e,t,r){"use strict";r.r(t),r.d(t,"UsersModule",(function(){return C}));var o=r("ofXK"),n=r("tyNb"),s=r("fXoL"),c=r("Ubi2");const i=["table"];let a=(()=>{class e{constructor(e){this.context={urls:{createUrl:"/users/create",detailsUrl:"/:id"},data:this.data,properties:[{key:"user_name",title:"User Name",type:"string"},{key:"email",title:"Email",type:"string"},{key:"role.name",title:"Role",type:"string"},{key:"status.title",title:"Status",type:"string"}],title:"Users"},e.data.subscribe(e=>{this.data=e.users,this.context.data=this.data})}}return e.\u0275fac=function(t){return new(t||e)(s.Kb(n.a))},e.\u0275cmp=s.Eb({type:e,selectors:[["app-index"]],viewQuery:function(e,t){var r;1&e&&s.Fc(i,!0),2&e&&s.pc(r=s.bc())&&(t.table=r.first)},decls:2,vars:1,consts:[[3,"context"],["table",""]],template:function(e,t){1&e&&s.Lb(0,"app-table-view",0,1),2&e&&s.ic("context",t.context)},directives:[c.a],styles:[""]}),e})();var l=r("AytR"),b=r("tk/3");let u=(()=>{class e{constructor(e){this.http=e}resolve(e,t){return this.http.get(`${l.a.apiUrl}/${l.a.usersFetchUrl}`)}}return e.\u0275fac=function(t){return new(t||e)(s.Xb(b.b))},e.\u0275prov=s.Gb({token:e,factory:e.\u0275fac}),e})();var p=r("1kSV");const d=["content"];function m(e,t){if(1&e&&(s.Pb(0,"div",10),s.Pb(1,"h6"),s.Ac(2),s.Ob(),s.Pb(3,"small"),s.Ac(4),s.dc(5,"uppercase"),s.Ob(),s.Ob()),2&e){const e=t.$implicit,r=s.cc(2);s.xb(2),s.Bc(r.user[e]),s.xb(2),s.Bc(s.ec(5,2,e))}}function f(e,t){if(1&e){const e=s.Qb();s.Pb(0,"div",2),s.Pb(1,"h6",3),s.Ac(2),s.Ob(),s.Ob(),s.Pb(3,"div",4),s.Pb(4,"div",5),s.yc(5,m,6,4,"div",6),s.Ob(),s.Pb(6,"div",7),s.Pb(7,"div",8),s.Pb(8,"button",9),s.ac("click",(function(){return s.rc(e),s.cc().ok()})),s.Ac(9,"Ok"),s.Ob(),s.Ob(),s.Ob(),s.Ob()}if(2&e){const e=s.cc();s.xb(2),s.Bc(e.message),s.xb(3),s.ic("ngForOf",e.attributes)}}let v=(()=>{class e{constructor(e,t){this.modalService=e,this.router=t}ngOnInit(){this.user=history.state.resource,this.user?(this.attributes=Object.keys(this.user),this.message="Details of user: "+this.user.user_name):this.ok()}ngAfterViewInit(){this.modal=this.modalService.open(this.content,{size:"md",backdrop:"static"})}ok(){this.router.navigateByUrl("/users"),this.modal&&this.modal.dismiss()}}return e.\u0275fac=function(t){return new(t||e)(s.Kb(p.d),s.Kb(n.b))},e.\u0275cmp=s.Eb({type:e,selectors:[["app-user-details"]],viewQuery:function(e,t){var r;1&e&&s.Fc(d,!0),2&e&&s.pc(r=s.bc())&&(t.content=r.first)},decls:4,vars:1,consts:[["type","info",3,"close"],["content",""],[1,"modal-header"],[1,"modal-title","pt-1","mt-1"],[1,"modal-body"],[1,"list-group"],["class","list-group-item list-group-item-action",4,"ngFor","ngForOf"],[1,"row"],[1,"col-12","text-align"],[1,"btn","btn-primary","btn-rounded",3,"click"],[1,"list-group-item","list-group-item-action"]],template:function(e,t){1&e&&(s.Pb(0,"ngb-alert",0),s.ac("close",(function(){return t.ok()})),s.Ac(1),s.Ob(),s.yc(2,f,10,2,"ng-template",null,1,s.zc)),2&e&&(s.xb(1),s.Bc(t.message))},directives:[p.b,o.j],pipes:[o.p],styles:[""]}),e})();var h=r("3Pt+"),O=r("0PJQ");const P=["content"];function y(e,t){if(1&e&&(s.Pb(0,"option",25),s.Ac(1),s.Ob()),2&e){const e=t.$implicit;s.ic("value",e.id),s.xb(1),s.Bc(e.name)}}function w(e,t){if(1&e){const e=s.Qb();s.Pb(0,"div",2),s.Pb(1,"h6",3),s.Ac(2),s.Ob(),s.Pb(3,"button",4),s.ac("click",(function(){return s.rc(e),s.cc().ok()})),s.Pb(4,"span",5),s.Ac(5,"\xd7"),s.Ob(),s.Ob(),s.Ob(),s.Pb(6,"div",6),s.Pb(7,"form",7),s.Pb(8,"div",8),s.Pb(9,"div",9),s.Pb(10,"div",10),s.Pb(11,"label"),s.Ac(12,"Username"),s.Ob(),s.Lb(13,"input",11),s.Ob(),s.Ob(),s.Ob(),s.Pb(14,"div",8),s.Pb(15,"div",9),s.Pb(16,"div",10),s.Pb(17,"label"),s.Ac(18,"Email address"),s.Ob(),s.Lb(19,"input",12),s.Ob(),s.Ob(),s.Ob(),s.Pb(20,"div",8),s.Pb(21,"div",13),s.Pb(22,"div",10),s.Pb(23,"label"),s.Ac(24,"First Name"),s.Ob(),s.Lb(25,"input",14),s.Ob(),s.Ob(),s.Pb(26,"div",15),s.Pb(27,"div",10),s.Pb(28,"label"),s.Ac(29,"Last Name"),s.Ob(),s.Lb(30,"input",16),s.Ob(),s.Ob(),s.Ob(),s.Pb(31,"div",8),s.Pb(32,"div",17),s.Pb(33,"div",10),s.Pb(34,"label"),s.Ac(35,"Password"),s.Ob(),s.Lb(36,"input",18),s.Ob(),s.Ob(),s.Ob(),s.Pb(37,"div",8),s.Pb(38,"div",17),s.Pb(39,"div",10),s.Pb(40,"label"),s.Ac(41,"Password Confirmation"),s.Ob(),s.Lb(42,"input",19),s.Ob(),s.Ob(),s.Ob(),s.Pb(43,"div",8),s.Pb(44,"div",20),s.Pb(45,"div",10),s.Pb(46,"label"),s.Ac(47,"Role"),s.Ob(),s.Pb(48,"select",21),s.yc(49,y,2,2,"option",22),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Pb(50,"div",8),s.Pb(51,"div",23),s.Pb(52,"button",24),s.ac("click",(function(){return s.rc(e),s.cc().submit()})),s.Ac(53," Submit "),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Ob()}if(2&e){const e=s.cc();s.xb(2),s.Bc(e.title),s.xb(5),s.ic("formGroup",e.formGroup),s.xb(42),s.ic("ngForOf",e.roles),s.xb(3),s.ic("disabled",!e.formGroup.valid)}}let g=(()=>{class e extends O.b{constructor(e,t,r,o){super(e,t,r,o),e.get(l.a.prepareUrl("rolesFetchUrl")).toPromise().then(e=>this.roles=e),this.formGroup=new h.e({user_name:new h.c(null,h.q.required),email:new h.c(null,h.q.required),first_name:new h.c(null,h.q.required),last_name:new h.c(null,h.q.required),password:new h.c(null,h.q.minLength(8)),password_confirmation:new h.c(null,h.q.minLength(8)),role_id:new h.c(null,h.q.required)})}openModal(){return this.service.open(this.content,{backdrop:"static"})}postUrl(){return"usersCreateUrl"}putUrl(){return"usersCreateUrl"}}return e.\u0275fac=function(t){return new(t||e)(s.Kb(b.b),s.Kb(n.a),s.Kb(n.b),s.Kb(p.d))},e.\u0275cmp=s.Eb({type:e,selectors:[["app-user-form"]],viewQuery:function(e,t){var r;1&e&&s.Fc(P,!0),2&e&&s.pc(r=s.bc())&&(t.content=r.first)},features:[s.ub],decls:4,vars:1,consts:[["type","info",3,"close"],["content",""],[1,"modal-header"],[1,"modal-title","pt-1","mt-1"],["type","button",1,"close",2,"border","none","outline","none",3,"click"],["aria-hidden","true"],[1,"modal-body"],[3,"formGroup"],[1,"row"],[1,"col-12","px-3"],[1,"form-group"],["type","text","placeholder","Username","formControlName","user_name","autocomplete","name",1,"form-control"],["type","email","placeholder","Email","formControlName","email","autocomplete","email",1,"form-control"],[1,"col-md-6","pr-1"],["type","text","placeholder","First Name","formControlName","first_name","autocomplete","given-name",1,"form-control"],[1,"col-md-6","pl-1"],["type","text","placeholder","Last Name","formControlName","last_name","autocomplete","family-name",1,"form-control"],[1,"col-md-12"],["type","password","placeholder","Password","formControlName","password","autocomplete","new-password",1,"form-control"],["type","password","placeholder","Re-type password","formControlName","password_confirmation","autocomplete","new-password",1,"form-control"],[1,"col-md-12","px-3"],["placeholder","Role","formControlName","role_id",1,"form-control"],[3,"value",4,"ngFor","ngForOf"],[1,"update","ml-auto","mr-auto"],["type","submit",1,"btn","btn-primary","btn-round",3,"disabled","click"],[3,"value"]],template:function(e,t){1&e&&(s.Pb(0,"ngb-alert",0),s.ac("close",(function(){return t.ok()})),s.Ac(1),s.Ob(),s.yc(2,w,54,4,"ng-template",null,1,s.zc)),2&e&&(s.xb(1),s.Bc(t.message))},directives:[p.b,h.s,h.k,h.f,h.b,h.j,h.d,h.p,o.j,h.m,h.r],styles:[""]}),e})();var x=r("w+MF");const k=[{path:"",component:a,resolve:{users:u},children:[{path:"create",component:g},{path:":id/edit",component:g},{path:":id/details",pathMatch:"full",component:v},{path:":id/delete",pathMatch:"full",component:(()=>{class e{constructor(){}ngOnInit(){this.context={deleteUrl:"usersDeleteUrl",data:history.state.resource,title:"Delete User Resource!",description:"Are you sure to delete this user?"}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Eb({type:e,selectors:[["app-user-delete"]],decls:1,vars:1,consts:[[3,"context"]],template:function(e,t){1&e&&s.Lb(0,"app-resource-delete",0),2&e&&s.ic("context",t.context)},directives:[x.a],styles:[""]}),e})()}]}];let A=(()=>{class e{constructor(){this.registerResourceComponents()}registerResourceComponents(){O.a.TYPES.set("userForm",g)}}return e.\u0275mod=s.Ib({type:e}),e.\u0275inj=s.Hb({factory:function(t){return new(t||e)},imports:[[n.e.forChild(k)],n.e]}),e})();var U=r("uP1v"),F=r("RDNO");let C=(()=>{class e{}return e.\u0275mod=s.Ib({type:e}),e.\u0275inj=s.Hb({factory:function(t){return new(t||e)},providers:[u,{provide:b.a,useClass:F.a,multi:!0}],imports:[[o.b,A,p.e,n.e,h.o,U.a]]}),e})()}}]);