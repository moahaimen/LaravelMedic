(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"2ZEY":function(e,t,r){"use strict";r.r(t),r.d(t,"ProvincesModule",(function(){return g}));var n=r("ofXK"),o=r("tyNb"),c=r("fXoL"),i=r("Ubi2");const s=["table"];let a=(()=>{class e{constructor(e){this.context={urls:{createUrl:"/provinces/create",deleteUrl:"/provinces/:id/delete",editUrl:"/provinces/:id/edit"},behaviour:{noDetails:!0},pagination:void 0,properties:[{key:"en_name",title:"En Name",type:"string"},{key:"ar_name",title:"Ar Name",type:"string"},{key:"fees",title:"Fees",type:"int"}],title:"Provinces"},e.data.subscribe(e=>this.context.pagination=e.resources)}}return e.\u0275fac=function(t){return new(t||e)(c.Lb(o.a))},e.\u0275cmp=c.Fb({type:e,selectors:[["app-index"]],viewQuery:function(e,t){var r;1&e&&c.Ic(s,!0),2&e&&c.sc(r=c.dc())&&(t.table=r.first)},decls:2,vars:1,consts:[[3,"context"],["table",""]],template:function(e,t){1&e&&c.Mb(0,"app-table-view",0,1),2&e&&c.lc("context",t.context)},directives:[i.a],styles:[""]}),e})();var l=r("0PJQ"),b=r("3Pt+"),u=r("tk/3"),p=r("1kSV");const d=["content"];function m(e,t){if(1&e){const e=c.Sb();c.Rb(0,"div",2),c.Rb(1,"h6",3),c.Dc(2),c.Qb(),c.Rb(3,"button",4),c.cc("click",(function(){return c.uc(e),c.ec().ok()})),c.Rb(4,"span",5),c.Dc(5,"\xd7"),c.Qb(),c.Qb(),c.Qb(),c.Rb(6,"div",6),c.Rb(7,"form",7),c.cc("submit",(function(){return c.uc(e),c.ec().submit()})),c.Rb(8,"div",8),c.Rb(9,"div",9),c.Rb(10,"div",10),c.Rb(11,"label"),c.Dc(12,"English Name"),c.Qb(),c.Mb(13,"input",11),c.Qb(),c.Qb(),c.Qb(),c.Rb(14,"div",12),c.Rb(15,"div",9),c.Rb(16,"div",10),c.Rb(17,"label"),c.Dc(18,"\u0627\u0644\u0627\u0633\u0645 \u0628\u0627\u0644\u0644\u063a\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629"),c.Qb(),c.Mb(19,"input",13),c.Qb(),c.Qb(),c.Qb(),c.Rb(20,"div",8),c.Rb(21,"div",9),c.Rb(22,"div",10),c.Rb(23,"label"),c.Dc(24,"Fees"),c.Qb(),c.Mb(25,"input",14),c.Qb(),c.Qb(),c.Qb(),c.Rb(26,"div",8),c.Rb(27,"div",15),c.Rb(28,"button",16),c.Dc(29," Submit "),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Qb()}if(2&e){const e=c.ec();c.yb(2),c.Ec(e.title),c.yb(5),c.lc("formGroup",e.formGroup),c.yb(21),c.lc("disabled",e.uploading||!e.formGroup.dirty||!e.formGroup.valid)}}let f=(()=>{class e extends l.b{constructor(e,t,r,n){super(e,t,r,n),this.formGroup=new b.e({en_name:new b.c(null,b.r.required),ar_name:new b.c(null,b.r.required),fees:new b.c(null,[b.r.required,b.r.min(0)])})}openModal(){return this.service.open(this.content,{backdrop:"static",keyboard:!1})}get postUrl(){return"provincesCreateUrl"}get putUrl(){return"provincesUpdateUrl"}get parentUrl(){return"/provinces"}}return e.\u0275fac=function(t){return new(t||e)(c.Lb(u.b),c.Lb(o.a),c.Lb(o.f),c.Lb(p.d))},e.\u0275cmp=c.Fb({type:e,selectors:[["app-province-form"]],viewQuery:function(e,t){var r;1&e&&c.Ic(d,!0),2&e&&c.sc(r=c.dc())&&(t.content=r.first)},features:[c.vb],decls:4,vars:1,consts:[["type","info",3,"close"],["content",""],[1,"modal-header"],[1,"modal-title","pt-1","mt-1"],["type","button",1,"close",2,"border","none","outline","none",3,"click"],["aria-hidden","true"],[1,"modal-body"],[3,"formGroup","submit"],[1,"row"],[1,"col-12","px-3"],[1,"form-group"],["type","text","placeholder","English Name","formControlName","en_name","autocomplete","off",1,"form-control"],["dir","rtl",1,"row"],["type","text","placeholder","\u0627\u0644\u0627\u0633\u0645 \u0628\u0627\u0644\u0644\u063a\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629","formControlName","ar_name","autocomplete","off",1,"form-control"],["type","number","min","0","placeholder","Fees","formControlName","fees","autocomplete","off",1,"form-control"],[1,"update","ml-auto","mr-auto"],["type","submit",1,"btn","btn-primary","btn-round",3,"disabled"]],template:function(e,t){1&e&&(c.Rb(0,"ngb-alert",0),c.cc("close",(function(){return t.ok()})),c.Dc(1),c.Qb(),c.Bc(2,m,30,3,"ng-template",null,1,c.Cc)),2&e&&(c.yb(1),c.Ec(t.message))},directives:[p.b,b.t,b.l,b.f,b.b,b.k,b.d,b.o],styles:[""]}),e})();var v=r("w+MF");let y=(()=>{class e{constructor(e){e.parent.data.subscribe(t=>{e.params.subscribe(e=>{const r=Number.parseInt(e.id,10),n=t.resources.data.find(e=>e.id===r);this.context={deleteUrl:"provincesDeleteUrl",data:n,title:"Delete Province Resource!",description:"Are you sure to delete this province?"}})})}}return e.\u0275fac=function(t){return new(t||e)(c.Lb(o.a))},e.\u0275cmp=c.Fb({type:e,selectors:[["app-province-delete"]],decls:1,vars:1,consts:[[3,"context"]],template:function(e,t){1&e&&c.Mb(0,"app-resource-delete",0),2&e&&c.lc("context",t.context)},directives:[v.a],styles:[""]}),e})();var h=r("mFXk");const R=[{path:"",component:a,runGuardsAndResolvers:(e,t)=>{var r;return null!==(r=history.state.runResolvers)&&void 0!==r&&r},resolve:{resources:h.a},children:[{path:"create",component:f},{path:":id/edit",component:f},{path:":id/delete",pathMatch:"full",component:y}]}];let Q=(()=>{class e{}return e.\u0275mod=c.Jb({type:e}),e.\u0275inj=c.Ib({factory:function(t){return new(t||e)},imports:[[o.i.forChild(R)],o.i]}),e})();var w=r("uP1v"),k=r("RDNO");let g=(()=>{class e{}return e.\u0275mod=c.Jb({type:e}),e.\u0275inj=c.Ib({factory:function(t){return new(t||e)},providers:[h.a,{provide:u.a,useClass:k.a,multi:!0}],imports:[[n.c,Q,p.e,o.i,b.p,w.a]]}),e})()}}]);