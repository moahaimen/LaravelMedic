(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{PF2B:function(e,t,r){"use strict";r.r(t),r.d(t,"VersionModule",(function(){return x}));var o=r("ofXK"),n=r("tyNb"),a=r("3Pt+"),s=r("0PJQ"),i=r("fXoL"),c=r("tk/3"),l=r("1kSV");const u=["content"];function p(e,t){if(1&e){const e=i.Sb();i.Rb(0,"div",2),i.Rb(1,"h6",3),i.Ec(2),i.Qb(),i.Rb(3,"button",4),i.cc("click",(function(){return i.uc(e),i.ec().ok()})),i.Rb(4,"span",5),i.Ec(5,"\xd7"),i.Qb(),i.Qb(),i.Qb(),i.Rb(6,"div",6),i.Rb(7,"form",7),i.cc("submit",(function(){return i.uc(e),i.ec().submit()})),i.Rb(8,"div",8),i.Rb(9,"div",9),i.Rb(10,"div",10),i.Rb(11,"label"),i.Ec(12,"Version number"),i.Qb(),i.Mb(13,"input",11),i.Qb(),i.Rb(14,"div",10),i.Rb(15,"label"),i.Ec(16,"Message"),i.Qb(),i.Mb(17,"input",12),i.Qb(),i.Qb(),i.Qb(),i.Rb(18,"div",8),i.Rb(19,"div",13),i.Rb(20,"button",14),i.Ec(21," Submit "),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Qb()}if(2&e){const e=i.ec();i.yb(2),i.Fc(e.title),i.yb(5),i.lc("formGroup",e.formGroup),i.yb(13),i.lc("disabled",e.uploading||!e.formGroup.dirty||!e.formGroup.valid)}}let b=(()=>{class e extends s.b{constructor(e,t,r,o){super(e,t,r,o),this.formGroup=new a.i({version:new a.f(null,a.C.required),message:new a.f(null,a.C.required)})}openModal(){return this.service.open(this.content,{backdrop:"static",keyboard:!1})}get postUrl(){return"versionCreateUrl"}get putUrl(){throw new Error("Update is not supported for this kind of resources")}get parentUrl(){return"/version"}}return e.\u0275fac=function(t){return new(t||e)(i.Lb(c.b),i.Lb(n.a),i.Lb(n.f),i.Lb(l.r))},e.\u0275cmp=i.Fb({type:e,selectors:[["app-form"]],viewQuery:function(e,t){var r;1&e&&i.Jc(u,!0),2&e&&i.sc(r=i.dc())&&(t.content=r.first)},features:[i.vb],decls:4,vars:1,consts:[["type","info",3,"close"],["content",""],[1,"modal-header"],[1,"modal-title","pt-1","mt-1"],["type","button",1,"close",2,"border","none","outline","none",3,"click"],["aria-hidden","true"],[1,"modal-body"],[3,"formGroup","submit"],[1,"row"],[1,"col-12","px-3"],[1,"form-group"],["type","text","placeholder","Version number e.g. 1.0.0","formControlName","version","autocomplete","off",1,"form-control"],["type","text","placeholder","Message","formControlName","message","autocomplete","off",1,"form-control"],[1,"update","ml-auto","mr-auto"],["type","submit",1,"btn","btn-primary","btn-round",3,"disabled"]],template:function(e,t){1&e&&(i.Rb(0,"ngb-alert",0),i.cc("close",(function(){return t.ok()})),i.Ec(1),i.Qb(),i.Cc(2,p,22,3,"ng-template",null,1,i.Dc)),2&e&&(i.yb(1),i.Fc(t.message))},directives:[l.c,a.E,a.r,a.j,a.c,a.q,a.h],styles:[""]}),e})();var d=r("Ubi2");const f=["table"];let m=(()=>{class e{constructor(e){this.context={urls:{createUrl:"/version/create"},behaviour:{noDetails:!0,noEdit:!0,noDelete:!0},pagination:void 0,properties:[{key:"id",title:"ID",type:"int"},{key:"version",title:"Version",type:"string"},{key:"message",title:"Message",type:"string"},{key:"created_at",title:"Created at",type:"datetime"},{key:"updated_at",title:"Updated at",type:"datetime"}],title:"version"},d.a.initializePaginationContext(e,this.context)}}return e.\u0275fac=function(t){return new(t||e)(i.Lb(n.a))},e.\u0275cmp=i.Fb({type:e,selectors:[["app-index"]],viewQuery:function(e,t){var r;1&e&&i.Jc(f,!0),2&e&&i.sc(r=i.dc())&&(t.table=r.first)},decls:2,vars:1,consts:[[3,"context"],["table",""]],template:function(e,t){1&e&&i.Mb(0,"app-table-view",0,1),2&e&&i.lc("context",t.context)},directives:[d.a],styles:[""]}),e})();var v=r("AytR"),y=r("lJxs"),g=r("9xMI");class h extends g.a{constructor(e,t,r,o,n){super(e),this.version=t,this.message=r,this.created_at=o,this.updated_at=n}}let _=(()=>{class e{constructor(e){this.http=e}parse(e){return e?new h(e.id,e.version,e.message,new Date(e.created_at),new Date(e.updated_at)):null}resolve(e,t){let r=new c.f;return Object.keys(e.queryParams).forEach(t=>r=r.set(t,e.queryParams[t])),this.http.get(v.a.prepareUrl("versionFetchUrl"),{params:r}).pipe(Object(y.a)(e=>({data:e.data.map(e=>this.parse(e)),total:e.total,per_page:e.per_page,current_page:e.current_page,from:e.from,to:e.to,path:e.path,first_page_url:e.first_page_url,prev_page_url:e.prev_page_url,next_page_url:e.next_page_url,last_page_url:e.last_page_url,last_page:e.last_page,filter:new Map})))}}return e.\u0275fac=function(t){return new(t||e)(i.Zb(c.b))},e.\u0275prov=i.Hb({token:e,factory:e.\u0275fac}),e})();const w=[{path:"",component:m,runGuardsAndResolvers:(e,t)=>{var r;return null!==(r=history.state.runResolvers)&&void 0!==r&&r},resolve:{resources:_},children:[{path:"create",component:b}]}];let R=(()=>{class e{}return e.\u0275mod=i.Jb({type:e}),e.\u0275inj=i.Ib({factory:function(t){return new(t||e)},imports:[[n.j.forChild(w)],n.j]}),e})();var Q=r("uP1v"),k=r("RDNO");let x=(()=>{class e{}return e.\u0275mod=i.Jb({type:e}),e.\u0275inj=i.Ib({factory:function(t){return new(t||e)},providers:[_,{provide:c.a,useClass:k.a,multi:!0}],imports:[[o.c,R,l.s,n.j,a.y,Q.a]]}),e})()}}]);