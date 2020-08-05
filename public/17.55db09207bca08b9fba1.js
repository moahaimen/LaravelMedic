(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{p2q8:function(t,e,n){"use strict";n.r(e),n.d(e,"BrandsModule",(function(){return F}));var r=n("ofXK"),a=n("tyNb"),c=n("fXoL"),i=n("Ubi2");const o=["table"];let s=(()=>{class t{constructor(t){this.context={urls:{createUrl:"create",detailsUrl:":id"},data:this.data,properties:[{key:"en_name",title:"En Name",type:"string"},{key:"en_description",title:"En Description",type:"string"},{key:"created_at",title:"Created At",type:"datetime"},{key:"updated_at",title:"Updated At",type:"datetime"}],title:"Brands"},t.data.subscribe(t=>{this.data=t.resources,this.context.data=this.data})}}return t.\u0275fac=function(e){return new(e||t)(c.Lb(a.a))},t.\u0275cmp=c.Fb({type:t,selectors:[["app-index"]],viewQuery:function(t,e){var n;1&t&&c.Ic(o,!0),2&t&&c.sc(n=c.dc())&&(e.table=n.first)},decls:2,vars:1,consts:[[3,"context"],["table",""]],template:function(t,e){1&t&&c.Mb(0,"app-table-view",0,1),2&t&&c.lc("context",e.context)},directives:[i.a],styles:[""]}),t})();var l=n("AytR"),d=n("9xMI");class u extends d.a{constructor(t,e,n,r,a,c,i,o,s){super(t),this.id=t,this.en_name=e,this.ar_name=n,this.en_description=r,this.ar_description=a,this.created_at=c,this.updated_at=i,this.attachment_id=o,this.attachment=s}}var p=n("lJxs"),b=n("PS3Z"),m=n("tk/3");let h=(()=>{class t{constructor(t){this.http=t}static Json2Brand(t){var e,n;if(!t)return null;let r=null;return t.attachment&&(r=new b.a(null===(e=t.attachment)||void 0===e?void 0:e.id,null===(n=t.attachment)||void 0===n?void 0:n.type,null==t?void 0:t.attachment.url,null==t?void 0:t.attachment.name)),new u(t.id,t.en_name,t.ar_name,t.en_description,t.ar_description,t.created_at,t.updated_at,t.attachment_id,r)}resolve(e,n){return this.http.get(`${l.a.apiUrl}/${l.a.brandsFetchUrl}`).pipe(Object(p.a)(e=>e.map(e=>t.Json2Brand(e))))}}return t.\u0275fac=function(e){return new(e||t)(c.Zb(m.b))},t.\u0275prov=c.Hb({token:t,factory:t.\u0275fac}),t})();var f=n("w+MF");let v=(()=>{class t{constructor(t){t.parent.data.subscribe(e=>{t.params.subscribe(t=>{const n=Number.parseInt(t.id,10),r=e.resources.find(t=>t.id===n);this.context={deleteUrl:"brandsDeleteUrl",data:r,title:"Delete Brand Resource!",description:"Are you sure to delete this brand?"}})})}}return t.\u0275fac=function(e){return new(e||t)(c.Lb(a.a))},t.\u0275cmp=c.Fb({type:t,selectors:[["app-brand-delete"]],decls:1,vars:1,consts:[[3,"context"]],template:function(t,e){1&t&&c.Mb(0,"app-resource-delete",0),2&t&&c.lc("context",e.context)},directives:[f.a],styles:[""]}),t})();var y=n("AMeL"),_=n("bz7F");const R=function(t){return[t]};let Q=(()=>{class t{constructor(t){t.parent.data.subscribe(e=>{t.params.subscribe(t=>{const n=Number.parseInt(t.id,10),r=e.resources.find(t=>t.id===n);this.context={urls:{tableUrl:"/brands"},data:r,properties:[{key:"en_name",title:"English Name",type:"string"},{key:"en_description",title:"English Description",type:"string"},{key:"ar_name",title:"Arabic Name",type:"string"},{key:"ar_description",title:"Arabic Description",type:"string"},{key:"created_at",title:"Created At",type:"datetime"},{key:"updated_at",title:"Updated At",type:"datetime"},{key:"attachment",title:"Attachment",type:"component",component:"app-attachments-viewer"}],title:"Details of brand "+(null==r?void 0:r.en_name)}})})}}return t.\u0275fac=function(e){return new(e||t)(c.Lb(a.a))},t.\u0275cmp=c.Fb({type:t,selectors:[["app-brand-details"]],decls:2,vars:4,consts:[[3,"context"],[3,"attachments"]],template:function(t,e){1&t&&(c.Rb(0,"app-resource-details",0),c.Mb(1,"app-attachments-viewer",1),c.Qb()),2&t&&(c.lc("context",e.context),c.yb(1),c.lc("attachments",c.pc(2,R,null==e.context||null==e.context.data?null:e.context.data.attachment)))},directives:[y.a,_.a],styles:[""]}),t})();var w=n("0PJQ"),g=n("3Pt+"),k=n("1kSV"),x=n("QGA0");const D=["content"],A=function(t){return[t]},M=function(){return[]};function U(t,e){if(1&t){const t=c.Sb();c.Rb(0,"div",2),c.Rb(1,"h6",3),c.Dc(2),c.Qb(),c.Rb(3,"button",4),c.cc("click",(function(){return c.uc(t),c.ec().ok()})),c.Rb(4,"span",5),c.Dc(5,"\xd7"),c.Qb(),c.Qb(),c.Qb(),c.Rb(6,"div",6),c.Rb(7,"form",7),c.Rb(8,"div",8),c.Rb(9,"div",9),c.Rb(10,"div",10),c.Rb(11,"label"),c.Dc(12,"English Name"),c.Qb(),c.Mb(13,"input",11),c.Qb(),c.Qb(),c.Qb(),c.Rb(14,"div",12),c.Rb(15,"div",9),c.Rb(16,"div",10),c.Rb(17,"label"),c.Dc(18,"\u0627\u0644\u0627\u0633\u0645 \u0628\u0627\u0644\u0644\u063a\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629"),c.Qb(),c.Mb(19,"input",13),c.Qb(),c.Qb(),c.Qb(),c.Rb(20,"div",12),c.Rb(21,"div",9),c.Rb(22,"div",10),c.Rb(23,"label"),c.Dc(24,"English Description"),c.Qb(),c.Mb(25,"input",14),c.Qb(),c.Qb(),c.Qb(),c.Rb(26,"div",12),c.Rb(27,"div",9),c.Rb(28,"div",10),c.Rb(29,"label"),c.Dc(30,"\u0627\u0644\u0648\u0635\u0641 \u0628\u0627\u0644\u0644\u063a\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629"),c.Qb(),c.Mb(31,"input",15),c.Qb(),c.Qb(),c.Qb(),c.Rb(32,"div",8),c.Rb(33,"div",16),c.Rb(34,"div",10),c.Rb(35,"label"),c.Dc(36,"Attachment"),c.Qb(),c.Mb(37,"input",17),c.Mb(38,"input",18),c.Rb(39,"app-attachments-uploader",19),c.cc("valueChange",(function(e){return c.uc(t),c.ec().setSelectedAttachment(e)})),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Rb(40,"div",8),c.Rb(41,"div",20),c.Rb(42,"button",21),c.cc("click",(function(){return c.uc(t),c.ec().submit()})),c.Dc(43," Submit "),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Qb()}if(2&t){const t=c.ec();c.yb(2),c.Ec(t.title),c.yb(5),c.lc("formGroup",t.formGroup),c.yb(30),c.zb("value",(null==t.attachment?null:t.attachment.name)||"Not selected"),c.yb(2),c.lc("limit",1)("attachments",t.attachment?c.pc(6,A,t.attachment):c.oc(8,M)),c.yb(3),c.lc("disabled",t.uploading||!t.formGroup.dirty||!t.formGroup.valid)}}let N=(()=>{class t extends w.b{constructor(t,e,n,r){super(t,e,n,r),this.formGroup=new g.e({en_name:new g.c(null,g.r.required),ar_name:new g.c(null,g.r.required),en_description:new g.c(null,g.r.required),ar_description:new g.c(null,g.r.required),attachment_id:new g.c(null,g.r.required)}),e.parent.data.subscribe(t=>{e.params.subscribe(e=>{var n,r;const a=t.resources[e.id];a&&(this.attachment=new b.a(null===(n=a.attachment)||void 0===n?void 0:n.id,null===(r=a.attachment)||void 0===r?void 0:r.type,null==a?void 0:a.attachment.url,null==a?void 0:a.attachment.name))})})}openModal(){return this.service.open(this.content,{backdrop:"static"})}get postUrl(){return"brandsCreateUrl"}get putUrl(){return"brandsUpdateUrl"}get parentUrl(){return"/brands"}setSelectedAttachment(t){if(!t||!t.ids||!t.entities||t.ids.length!==t.entities.length||1!==t.ids.length)return console.log(t),console.log(t.ids.length),this.attachment=null,this.formGroup.controls.attachment_id.setValue(null),this.formGroup.controls.attachment_id.markAsTouched(),void this.formGroup.controls.attachment_id.markAsDirty();this.attachment=t.entities[0],this.formGroup.controls.attachment_id.setValue(t.ids[0]),this.formGroup.controls.attachment_id.markAsTouched(),this.formGroup.controls.attachment_id.markAsDirty()}}return t.\u0275fac=function(e){return new(e||t)(c.Lb(m.b),c.Lb(a.a),c.Lb(a.f),c.Lb(k.h))},t.\u0275cmp=c.Fb({type:t,selectors:[["app-brand-form"]],viewQuery:function(t,e){var n;1&t&&c.Ic(D,!0),2&t&&c.sc(n=c.dc())&&(e.content=n.first)},features:[c.vb],decls:4,vars:1,consts:[["type","info",3,"close"],["content",""],[1,"modal-header"],[1,"modal-title","pt-1","mt-1"],["type","button",1,"close",2,"border","none","outline","none",3,"click"],["aria-hidden","true"],[1,"modal-body"],[3,"formGroup"],[1,"row"],[1,"col-12","px-3"],[1,"form-group"],["type","text","placeholder","English Name","formControlName","en_name","autocomplete","off",1,"form-control"],["dir","rtl",1,"row"],["type","text","placeholder","\u0627\u0644\u0627\u0633\u0645 \u0628\u0627\u0644\u0644\u063a\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629","formControlName","ar_name","autocomplete","off",1,"form-control"],["type","text","placeholder","English Description","formControlName","en_description","autocomplete","off",1,"form-control"],["type","text","placeholder","\u0627\u0644\u0648\u0635\u0641 \u0628\u0627\u0644\u0644\u063a\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629","formControlName","ar_description","autocomplete","off",1,"form-control"],[1,"col-md-12","px-3"],["type","text","disabled","",1,"form-control"],["type","hidden","formControlName","attachment_id"],[1,"form-control","mt-2",3,"limit","attachments","valueChange"],[1,"update","ml-auto","mr-auto"],["type","submit",1,"btn","btn-primary","btn-round",3,"disabled","click"]],template:function(t,e){1&t&&(c.Rb(0,"ngb-alert",0),c.cc("close",(function(){return e.ok()})),c.Dc(1),c.Qb(),c.Bc(2,U,44,9,"ng-template",null,1,c.Cc)),2&t&&(c.yb(1),c.Ec(e.message))},directives:[k.b,g.t,g.l,g.f,g.b,g.k,g.d,x.a],styles:[""]}),t})();const G=[{path:"",component:s,runGuardsAndResolvers:(t,e)=>{var n;return null!==(n=history.state.runResolvers)&&void 0!==n&&n},resolve:{resources:h},children:[{path:"create",component:N},{path:":id/edit",component:N},{path:":id/details",pathMatch:"full",component:Q},{path:":id/delete",pathMatch:"full",component:v}]}];let C=(()=>{class t{}return t.\u0275mod=c.Jb({type:t}),t.\u0275inj=c.Ib({factory:function(e){return new(e||t)},imports:[[a.i.forChild(G)],a.i]}),t})();var E=n("uP1v"),L=n("RDNO"),J=n("nHkx");let F=(()=>{class t{}return t.\u0275mod=c.Jb({type:t}),t.\u0275inj=c.Ib({factory:function(e){return new(e||t)},providers:[h,{provide:m.a,useClass:L.a,multi:!0}],imports:[[r.c,C,k.i,a.i,g.p,E.a,J.a]]}),t})()}}]);