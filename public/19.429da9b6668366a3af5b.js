(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{jo0l:function(e,t,r){"use strict";r.r(t),r.d(t,"ExchangeModule",(function(){return U}));var n=r("ofXK"),a=r("tyNb"),o=r("Ubi2"),c=r("fXoL");const s=["table"];let i=(()=>{class e{constructor(e){this.context={urls:{createUrl:"/exchange/create",deleteUrl:"/exchange/:id/delete"},behaviour:{noDetails:!0,noEdit:!0},pagination:void 0,properties:[{key:"id",title:"ID",type:"int"},{key:"value",title:"Value",type:"float"},{key:"changed_at",title:"Changed at",type:"datetime"}],title:"exchange"},o.a.initializePaginationContext(e,this.context)}}return e.\u0275fac=function(t){return new(t||e)(c.Lb(a.a))},e.\u0275cmp=c.Fb({type:e,selectors:[["app-index"]],viewQuery:function(e,t){var r;1&e&&c.Jc(s,!0),2&e&&c.sc(r=c.dc())&&(t.table=r.first)},decls:2,vars:1,consts:[[3,"context"],["table",""]],template:function(e,t){1&e&&c.Mb(0,"app-table-view",0,1),2&e&&c.lc("context",t.context)},directives:[o.a],styles:[""]}),e})();var l=r("w+MF");let u=(()=>{class e{constructor(e){e.parent.data.subscribe(t=>{e.params.subscribe(e=>{const r=Number.parseInt(e.id,10),n=t.resources.data.find(e=>e.id===r);this.context={deleteUrl:"exchangeDeleteUrl",data:n,title:"Delete Exchange Resource!",description:"Are you sure to delete this exchange?"}})})}}return e.\u0275fac=function(t){return new(t||e)(c.Lb(a.a))},e.\u0275cmp=c.Fb({type:e,selectors:[["app-exchange-delete"]],decls:1,vars:1,consts:[[3,"context"]],template:function(e,t){1&e&&c.Mb(0,"app-resource-delete",0),2&e&&c.lc("context",t.context)},directives:[l.a],styles:[""]}),e})();var p=r("3Pt+"),b=r("0PJQ"),d=r("tk/3"),f=r("1kSV");const m=["content"];function h(e,t){if(1&e){const e=c.Sb();c.Rb(0,"div",2),c.Rb(1,"h6",3),c.Ec(2),c.Qb(),c.Rb(3,"button",4),c.cc("click",(function(){return c.uc(e),c.ec().ok()})),c.Rb(4,"span",5),c.Ec(5,"\xd7"),c.Qb(),c.Qb(),c.Qb(),c.Rb(6,"div",6),c.Rb(7,"form",7),c.cc("submit",(function(){return c.uc(e),c.ec().submit()})),c.Rb(8,"div",8),c.Rb(9,"div",9),c.Rb(10,"div",10),c.Rb(11,"label"),c.Ec(12,"1 USD"),c.Qb(),c.Mb(13,"input",11),c.Qb(),c.Qb(),c.Qb(),c.Rb(14,"div",8),c.Rb(15,"div",12),c.Rb(16,"button",13),c.Ec(17," Submit "),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Qb()}if(2&e){const e=c.ec();c.yb(2),c.Fc(e.title),c.yb(5),c.lc("formGroup",e.formGroup),c.yb(9),c.lc("disabled",e.uploading||!e.formGroup.dirty||!e.formGroup.valid)}}let v=(()=>{class e extends b.b{constructor(e,t,r,n){super(e,t,r,n),this.formGroup=new p.i({value:new p.f(null,p.C.required)})}openModal(){return this.service.open(this.content,{backdrop:"static",keyboard:!1})}get postUrl(){return"exchangeCreateUrl"}get putUrl(){throw new Error("Update is not supported for this kind of resources")}get parentUrl(){return"/exchange"}}return e.\u0275fac=function(t){return new(t||e)(c.Lb(d.b),c.Lb(a.a),c.Lb(a.f),c.Lb(f.r))},e.\u0275cmp=c.Fb({type:e,selectors:[["app-exchange-form"]],viewQuery:function(e,t){var r;1&e&&c.Jc(m,!0),2&e&&c.sc(r=c.dc())&&(t.content=r.first)},features:[c.vb],decls:4,vars:1,consts:[["type","info",3,"close"],["content",""],[1,"modal-header"],[1,"modal-title","pt-1","mt-1"],["type","button",1,"close",2,"border","none","outline","none",3,"click"],["aria-hidden","true"],[1,"modal-body"],[3,"formGroup","submit"],[1,"row"],[1,"col-12","px-3"],[1,"form-group"],["type","number","min","0","placeholder","quantity in IQD","formControlName","value","autocomplete","off",1,"form-control"],[1,"update","ml-auto","mr-auto"],["type","submit",1,"btn","btn-primary","btn-round",3,"disabled"]],template:function(e,t){1&e&&(c.Rb(0,"ngb-alert",0),c.cc("close",(function(){return t.ok()})),c.Ec(1),c.Qb(),c.Cc(2,h,18,3,"ng-template",null,1,c.Dc)),2&e&&(c.yb(1),c.Fc(t.message))},directives:[f.c,p.E,p.r,p.j,p.u,p.c,p.q,p.h],styles:[""]}),e})();var g=r("AytR"),y=r("lJxs"),x=r("xt2p");let w=(()=>{class e{constructor(e){this.http=e}parse(e){return e?new x.a(e.id,e.value,new Date(e.changed_at)):null}resolve(e,t){let r=new d.f;return Object.keys(e.queryParams).forEach(t=>r=r.set(t,e.queryParams[t])),this.http.get(g.a.prepareUrl("exchangeFetchUrl"),{params:r}).pipe(Object(y.a)(e=>({data:e.data.map(e=>this.parse(e)),total:e.total,per_page:e.per_page,current_page:e.current_page,from:e.from,to:e.to,path:e.path,first_page_url:e.first_page_url,prev_page_url:e.prev_page_url,next_page_url:e.next_page_url,last_page_url:e.last_page_url,last_page:e.last_page,filter:new Map})))}}return e.\u0275fac=function(t){return new(t||e)(c.Zb(d.b))},e.\u0275prov=c.Hb({token:e,factory:e.\u0275fac}),e})();const _=[{path:"",component:i,runGuardsAndResolvers:(e,t)=>{var r;return null!==(r=history.state.runResolvers)&&void 0!==r&&r},resolve:{resources:w},children:[{path:"create",component:v},{path:":id/delete",component:u}]}];let R=(()=>{class e{}return e.\u0275mod=c.Jb({type:e}),e.\u0275inj=c.Ib({factory:function(t){return new(t||e)},imports:[[a.j.forChild(_)],a.j]}),e})();var Q=r("uP1v"),k=r("RDNO");let U=(()=>{class e{}return e.\u0275mod=c.Jb({type:e}),e.\u0275inj=c.Ib({factory:function(t){return new(t||e)},providers:[w,{provide:d.a,useClass:k.a,multi:!0}],imports:[[n.c,R,f.s,a.j,p.y,Q.a]]}),e})()}}]);