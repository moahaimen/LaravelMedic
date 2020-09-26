(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{UYbB:function(t,e,r){"use strict";r.r(e),r.d(e,"ContactUsModule",(function(){return k}));var n=r("ofXK"),o=r("tyNb"),a=r("fXoL"),c=r("Ubi2");const l=["table"];let i=(()=>{class t{constructor(t){this.context={urls:{createUrl:"/contactUs/create",deleteUrl:"/contactUs/:id/delete",editUrl:"/contactUs/:id/edit"},behaviour:{noDetails:!0},pagination:void 0,properties:[{key:"section",title:"Section",type:"string"},{key:"key",title:"Key",type:"string"},{key:"en_value",title:"En Value",type:"string"},{key:"ar_value",title:"Ar Value",type:"string"},{key:"url",title:"Url",type:"string"}],title:"Contact Us"},t.data.subscribe(t=>this.context.pagination=t.resources)}}return t.\u0275fac=function(e){return new(e||t)(a.Lb(o.a))},t.\u0275cmp=a.Fb({type:t,selectors:[["app-index"]],viewQuery:function(t,e){var r;1&t&&a.Ic(l,!0),2&t&&a.sc(r=a.dc())&&(e.table=r.first)},decls:2,vars:1,consts:[[3,"context"],["table",""]],template:function(t,e){1&t&&a.Mb(0,"app-table-view",0,1),2&t&&a.lc("context",e.context)},directives:[c.a],styles:[""]}),t})();var s=r("tk/3"),u=r("AytR"),b=r("lJxs"),p=r("9xMI");class d extends p.a{constructor(t,e,r,n,o,a){super(t),this.id=t,this.section=e,this.key=r,this.en_value=n,this.ar_value=o,this.url=a}}let m=(()=>{class t{constructor(t){this.http=t}static json2ContactUs(t){return t?new d(t.id,t.section,t.key,t.en_value,t.ar_value,t.url):null}resolve(e,r){let n=new s.f;return Object.keys(e.queryParams).forEach(t=>n=n.set(t,e.queryParams[t])),this.http.get(u.a.prepareUrl("contactUsFetchUrl"),{params:n}).pipe(Object(b.a)(e=>({data:e.data.map(e=>t.json2ContactUs(e)),total:e.total,per_page:e.per_page,current_page:e.current_page,from:e.from,to:e.to,path:e.path,first_page_url:e.first_page_url,prev_page_url:e.prev_page_url,next_page_url:e.next_page_url,last_page_url:e.last_page_url,last_page:e.last_page,filter:new Map})))}}return t.\u0275fac=function(e){return new(e||t)(a.Zb(s.b))},t.\u0275prov=a.Hb({token:t,factory:t.\u0275fac}),t})();var f=r("0PJQ"),v=r("3Pt+"),y=r("1kSV");const h=["content"];function g(t,e){if(1&t){const t=a.Sb();a.Rb(0,"div",2),a.Rb(1,"h6",3),a.Dc(2),a.Qb(),a.Rb(3,"button",4),a.cc("click",(function(){return a.uc(t),a.ec().ok()})),a.Rb(4,"span",5),a.Dc(5,"\xd7"),a.Qb(),a.Qb(),a.Qb(),a.Rb(6,"div",6),a.Rb(7,"form",7),a.cc("submit",(function(){return a.uc(t),a.ec().submit()})),a.Rb(8,"div",8),a.Rb(9,"div",9),a.Rb(10,"div",10),a.Rb(11,"label"),a.Dc(12,"Section"),a.Qb(),a.Mb(13,"input",11),a.Qb(),a.Qb(),a.Qb(),a.Rb(14,"div",8),a.Rb(15,"div",9),a.Rb(16,"div",10),a.Rb(17,"label"),a.Dc(18,"Key"),a.Qb(),a.Mb(19,"input",12),a.Qb(),a.Qb(),a.Qb(),a.Rb(20,"div",8),a.Rb(21,"div",9),a.Rb(22,"div",10),a.Rb(23,"label"),a.Dc(24,"English Value"),a.Qb(),a.Rb(25,"div",13),a.Mb(26,"textarea",14),a.Qb(),a.Qb(),a.Qb(),a.Qb(),a.Rb(27,"div",15),a.Rb(28,"div",9),a.Rb(29,"div",10),a.Rb(30,"label"),a.Dc(31,"\u0627\u0644\u0642\u064a\u0645\u0629 \u0628\u0627\u0644\u0644\u063a\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629"),a.Qb(),a.Rb(32,"div",13),a.Mb(33,"textarea",16),a.Qb(),a.Qb(),a.Qb(),a.Qb(),a.Rb(34,"div",8),a.Rb(35,"div",9),a.Rb(36,"div",10),a.Rb(37,"label"),a.Dc(38,"Url"),a.Qb(),a.Mb(39,"input",17),a.Qb(),a.Qb(),a.Qb(),a.Rb(40,"div",8),a.Rb(41,"div",18),a.Rb(42,"button",19),a.Dc(43," Submit "),a.Qb(),a.Qb(),a.Qb(),a.Qb(),a.Qb()}if(2&t){const t=a.ec();a.yb(2),a.Ec(t.title),a.yb(5),a.lc("formGroup",t.formGroup),a.yb(35),a.lc("disabled",t.uploading||!t.formGroup.dirty||!t.formGroup.valid)}}let R=(()=>{class t extends f.b{constructor(t,e,r,n){super(t,e,r,n),this.formGroup=new v.e({section:new v.c(null,v.r.required),key:new v.c(null,v.r.required),en_value:new v.c(null,v.r.required),ar_value:new v.c(null,v.r.required),url:new v.c(null)})}openModal(){return this.service.open(this.content,{backdrop:"static",keyboard:!1})}get postUrl(){return"contactUsCreateUrl"}get putUrl(){return"contactUsUpdateUrl"}get parentUrl(){return"/contactUs"}}return t.\u0275fac=function(e){return new(e||t)(a.Lb(s.b),a.Lb(o.a),a.Lb(o.f),a.Lb(y.d))},t.\u0275cmp=a.Fb({type:t,selectors:[["app-contact-us-form"]],viewQuery:function(t,e){var r;1&t&&a.Ic(h,!0),2&t&&a.sc(r=a.dc())&&(e.content=r.first)},features:[a.vb],decls:4,vars:1,consts:[["type","info",3,"close"],["content",""],[1,"modal-header"],[1,"modal-title","pt-1","mt-1"],["type","button",1,"close",2,"border","none","outline","none",3,"click"],["aria-hidden","true"],[1,"modal-body"],[3,"formGroup","submit"],[1,"row"],[1,"col-12","px-3"],[1,"form-group"],["type","text","placeholder","Section","formControlName","section","autocomplete","off",1,"form-control"],["type","text","placeholder","Key","formControlName","key","autocomplete","off",1,"form-control"],[1,"form-control","px-0","py-0"],["rows","5","placeholder","Description (Maximum allowed length 750 character)","maxlength","750","formControlName","en_value",2,"width","100%","border","none","outline","none !important","padding","10px !important"],["dir","rtl",1,"row"],["rows","5","placeholder","Description (Maximum allowed length 750 character)","maxlength","750","formControlName","ar_value",2,"width","100%","border","none","outline","none !important","padding","10px !important"],["type","text","placeholder","Url","formControlName","url","autocomplete","off",1,"form-control"],[1,"update","ml-auto","mr-auto"],["type","submit",1,"btn","btn-primary","btn-round",3,"disabled"]],template:function(t,e){1&t&&(a.Rb(0,"ngb-alert",0),a.cc("close",(function(){return e.ok()})),a.Dc(1),a.Qb(),a.Bc(2,g,44,3,"ng-template",null,1,a.Cc)),2&t&&(a.yb(1),a.Ec(e.message))},directives:[y.b,v.t,v.l,v.f,v.b,v.k,v.d,v.h],styles:[""]}),t})();var Q=r("w+MF");const w=[{path:"",component:i,runGuardsAndResolvers:(t,e)=>{var r;return null!==(r=history.state.runResolvers)&&void 0!==r&&r},resolve:{resources:m},children:[{path:"create",component:R},{path:":id/edit",component:R},{path:":id/delete",pathMatch:"full",component:(()=>{class t{constructor(t){t.parent.data.subscribe(e=>{t.params.subscribe(t=>{const r=Number.parseInt(t.id,10),n=e.resources.data.find(t=>t.id===r);this.context={deleteUrl:"contactUsDeleteUrl",data:n,title:"Delete Contact Us Resource!",description:"Are you sure to delete this contact us item?"}})})}}return t.\u0275fac=function(e){return new(e||t)(a.Lb(o.a))},t.\u0275cmp=a.Fb({type:t,selectors:[["app-contact-us-delete"]],decls:1,vars:1,consts:[[3,"context"]],template:function(t,e){1&t&&a.Mb(0,"app-resource-delete",0),2&t&&a.lc("context",e.context)},directives:[Q.a],styles:[""]}),t})()}]}];let _=(()=>{class t{}return t.\u0275mod=a.Jb({type:t}),t.\u0275inj=a.Ib({factory:function(e){return new(e||t)},imports:[[o.i.forChild(w)],o.i]}),t})();var U=r("uP1v"),x=r("RDNO");let k=(()=>{class t{}return t.\u0275mod=a.Jb({type:t}),t.\u0275inj=a.Ib({factory:function(e){return new(e||t)},providers:[m,{provide:s.a,useClass:x.a,multi:!0}],imports:[[n.c,_,y.e,o.i,v.p,U.a]]}),t})()}}]);