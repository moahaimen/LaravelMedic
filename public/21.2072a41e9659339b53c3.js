(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"2ZEY":function(e,t,r){"use strict";r.r(t),r.d(t,"ProvincesModule",(function(){return x}));var n=r("ofXK"),o=r("tyNb"),c=r("Ubi2"),i=r("fXoL");const s=["table"];let a=(()=>{class e{constructor(e){this.context={urls:{createUrl:"/provinces/create",deleteUrl:"/provinces/:id/delete",editUrl:"/provinces/:id/edit"},behaviour:{noDetails:!0},pagination:void 0,properties:[{key:"en_name",title:"En Name",type:"string"},{key:"ar_name",title:"Ar Name",type:"string"},{key:"fees",title:"Fees",type:"int"}],title:"Provinces"},c.a.initializePaginationContext(e,this.context)}}return e.\u0275fac=function(t){return new(t||e)(i.Lb(o.a))},e.\u0275cmp=i.Fb({type:e,selectors:[["app-index"]],viewQuery:function(e,t){var r;1&e&&i.Ic(s,!0),2&e&&i.sc(r=i.dc())&&(t.table=r.first)},decls:2,vars:1,consts:[[3,"context"],["table",""]],template:function(e,t){1&e&&i.Mb(0,"app-table-view",0,1),2&e&&i.lc("context",t.context)},directives:[c.a],styles:[""]}),e})();var l=r("0PJQ"),b=r("3Pt+"),u=r("tk/3"),p=r("1kSV");const d=["content"];function m(e,t){if(1&e){const e=i.Sb();i.Rb(0,"div",2),i.Rb(1,"h6",3),i.Dc(2),i.Qb(),i.Rb(3,"button",4),i.cc("click",(function(){return i.uc(e),i.ec().ok()})),i.Rb(4,"span",5),i.Dc(5,"\xd7"),i.Qb(),i.Qb(),i.Qb(),i.Rb(6,"div",6),i.Rb(7,"form",7),i.cc("submit",(function(){return i.uc(e),i.ec().submit()})),i.Rb(8,"div",8),i.Rb(9,"div",9),i.Rb(10,"div",10),i.Rb(11,"label"),i.Dc(12,"English Name"),i.Qb(),i.Mb(13,"input",11),i.Qb(),i.Qb(),i.Qb(),i.Rb(14,"div",12),i.Rb(15,"div",9),i.Rb(16,"div",10),i.Rb(17,"label"),i.Dc(18,"\u0627\u0644\u0627\u0633\u0645 \u0628\u0627\u0644\u0644\u063a\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629"),i.Qb(),i.Mb(19,"input",13),i.Qb(),i.Qb(),i.Qb(),i.Rb(20,"div",8),i.Rb(21,"div",9),i.Rb(22,"div",10),i.Rb(23,"label"),i.Dc(24,"Fees"),i.Qb(),i.Mb(25,"input",14),i.Qb(),i.Qb(),i.Qb(),i.Rb(26,"div",8),i.Rb(27,"div",15),i.Rb(28,"button",16),i.Dc(29," Submit "),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Qb()}if(2&e){const e=i.ec();i.yb(2),i.Ec(e.title),i.yb(5),i.lc("formGroup",e.formGroup),i.yb(21),i.lc("disabled",e.uploading||!e.formGroup.dirty||!e.formGroup.valid)}}let f=(()=>{class e extends l.b{constructor(e,t,r,n){super(e,t,r,n),this.formGroup=new b.e({en_name:new b.c(null,b.r.required),ar_name:new b.c(null,b.r.required),fees:new b.c(null,[b.r.required,b.r.min(0)])})}openModal(){return this.service.open(this.content,{backdrop:"static",keyboard:!1})}get postUrl(){return"provincesCreateUrl"}get putUrl(){return"provincesUpdateUrl"}get parentUrl(){return"/provinces"}}return e.\u0275fac=function(t){return new(t||e)(i.Lb(u.b),i.Lb(o.a),i.Lb(o.f),i.Lb(p.d))},e.\u0275cmp=i.Fb({type:e,selectors:[["app-province-form"]],viewQuery:function(e,t){var r;1&e&&i.Ic(d,!0),2&e&&i.sc(r=i.dc())&&(t.content=r.first)},features:[i.vb],decls:4,vars:1,consts:[["type","info",3,"close"],["content",""],[1,"modal-header"],[1,"modal-title","pt-1","mt-1"],["type","button",1,"close",2,"border","none","outline","none",3,"click"],["aria-hidden","true"],[1,"modal-body"],[3,"formGroup","submit"],[1,"row"],[1,"col-12","px-3"],[1,"form-group"],["type","text","placeholder","English Name","formControlName","en_name","autocomplete","off",1,"form-control"],["dir","rtl",1,"row"],["type","text","placeholder","\u0627\u0644\u0627\u0633\u0645 \u0628\u0627\u0644\u0644\u063a\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629","formControlName","ar_name","autocomplete","off",1,"form-control"],["type","number","min","0","placeholder","Fees","formControlName","fees","autocomplete","off",1,"form-control"],[1,"update","ml-auto","mr-auto"],["type","submit",1,"btn","btn-primary","btn-round",3,"disabled"]],template:function(e,t){1&e&&(i.Rb(0,"ngb-alert",0),i.cc("close",(function(){return t.ok()})),i.Dc(1),i.Qb(),i.Bc(2,m,30,3,"ng-template",null,1,i.Cc)),2&e&&(i.yb(1),i.Ec(t.message))},directives:[p.b,b.t,b.l,b.f,b.b,b.k,b.d,b.o],styles:[""]}),e})();var v=r("w+MF");let y=(()=>{class e{constructor(e){e.parent.data.subscribe(t=>{e.params.subscribe(e=>{const r=Number.parseInt(e.id,10),n=t.resources.data.find(e=>e.id===r);this.context={deleteUrl:"provincesDeleteUrl",data:n,title:"Delete Province Resource!",description:"Are you sure to delete this province?"}})})}}return e.\u0275fac=function(t){return new(t||e)(i.Lb(o.a))},e.\u0275cmp=i.Fb({type:e,selectors:[["app-province-delete"]],decls:1,vars:1,consts:[[3,"context"]],template:function(e,t){1&e&&i.Mb(0,"app-resource-delete",0),2&e&&i.lc("context",t.context)},directives:[v.a],styles:[""]}),e})();var h=r("mFXk");const R=[{path:"",component:a,runGuardsAndResolvers:(e,t)=>{var r;return null!==(r=history.state.runResolvers)&&void 0!==r&&r},resolve:{resources:h.a},children:[{path:"create",component:f},{path:":id/edit",component:f},{path:":id/delete",pathMatch:"full",component:y}]}];let Q=(()=>{class e{}return e.\u0275mod=i.Jb({type:e}),e.\u0275inj=i.Ib({factory:function(t){return new(t||e)},imports:[[o.i.forChild(R)],o.i]}),e})();var w=r("uP1v"),k=r("RDNO");let x=(()=>{class e{}return e.\u0275mod=i.Jb({type:e}),e.\u0275inj=i.Ib({factory:function(t){return new(t||e)},providers:[h.a,{provide:u.a,useClass:k.a,multi:!0}],imports:[[Q,n.c,p.e,o.i,b.p,w.a]]}),e})()}}]);