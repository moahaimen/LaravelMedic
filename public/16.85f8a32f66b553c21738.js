(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{p2q8:function(t,e,n){"use strict";n.r(e),n.d(e,"BrandsModule",(function(){return M}));var a=n("ofXK"),r=n("tyNb"),i=n("fXoL"),c=n("Ubi2");const o=["table"];let l=(()=>{class t{constructor(t){this.context={urls:{createUrl:"create",detailsUrl:":id"},data:this.data,properties:[{key:"en_name",title:"En Name",type:"string"},{key:"en_description",title:"En Description",type:"string"},{key:"created_at",title:"Created At",type:"datetime"},{key:"updated_at",title:"Updated At",type:"datetime"}],title:"Brands"},t.data.subscribe(t=>{this.data=t.brands,this.context.data=this.data})}}return t.\u0275fac=function(e){return new(e||t)(i.Kb(r.a))},t.\u0275cmp=i.Eb({type:t,selectors:[["app-index"]],viewQuery:function(t,e){var n;1&t&&i.Hc(o,!0),2&t&&i.rc(n=i.cc())&&(e.table=n.first)},decls:2,vars:1,consts:[[3,"context"],["table",""]],template:function(t,e){1&t&&i.Lb(0,"app-table-view",0,1),2&t&&i.kc("context",e.context)},directives:[c.a],styles:[""]}),t})();var s=n("AytR"),d=n("9xMI");class u extends d.a{constructor(t,e,n,a,r,i,c,o,l){super(t),this.id=t,this.en_name=e,this.ar_name=n,this.en_description=a,this.ar_description=r,this.created_at=i,this.updated_at=c,this.attachment_id=o,this.attachment=l}}var b=n("lJxs"),p=n("PS3Z"),m=n("tk/3");let h=(()=>{class t{constructor(t){this.http=t}static Json2Brand(t){var e,n;if(!t)return null;let a=null;return t.attachment&&(a=new p.a(null===(e=t.attachment)||void 0===e?void 0:e.id,null===(n=t.attachment)||void 0===n?void 0:n.type,null==t?void 0:t.attachment.url,null==t?void 0:t.attachment.name)),new u(t.id,t.en_name,t.ar_name,t.en_description,t.ar_description,t.created_at,t.updated_at,t.attachment_id,a)}resolve(e,n){return this.http.get(`${s.a.apiUrl}/${s.a.brandsFetchUrl}`).pipe(Object(b.a)(e=>e.map(e=>t.Json2Brand(e))))}}return t.\u0275fac=function(e){return new(e||t)(i.Yb(m.b))},t.\u0275prov=i.Gb({token:t,factory:t.\u0275fac}),t})();var f=n("w+MF");let v=(()=>{class t{constructor(){}ngOnInit(){this.context={deleteUrl:"brandsDeleteUrl",data:history.state.resource,title:"Delete Brand Resource!",description:"Are you sure to delete this brand?"}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Eb({type:t,selectors:[["app-brand-delete"]],decls:1,vars:1,consts:[[3,"context"]],template:function(t,e){1&t&&i.Lb(0,"app-resource-delete",0),2&t&&i.kc("context",e.context)},directives:[f.a],styles:[""]}),t})();var y=n("AMeL"),_=n("bz7F");const x=function(t){return[t]};let P=(()=>{class t{ngOnInit(){const t=h.Json2Brand(history.state.resource);this.context={urls:{tableUrl:"/brands"},data:t,properties:[{key:"en_name",title:"English Name",type:"string"},{key:"en_description",title:"English Description",type:"string"},{key:"ar_name",title:"Arabic Name",type:"string"},{key:"ar_description",title:"Arabic Description",type:"string"},{key:"created_at",title:"Created At",type:"datetime"},{key:"updated_at",title:"Updated At",type:"datetime"},{key:"attachment",title:"Attachment",type:"component",component:"app-attachments-viewer"}],title:"Details of brand "+(null==t?void 0:t.en_name)}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Eb({type:t,selectors:[["app-brand-details"]],decls:2,vars:4,consts:[[3,"context"],[3,"attachments"]],template:function(t,e){1&t&&(i.Qb(0,"app-resource-details",0),i.Lb(1,"app-attachments-viewer",1),i.Pb()),2&t&&(i.kc("context",e.context),i.xb(1),i.kc("attachments",i.oc(2,x,null==e.context||null==e.context.data?null:e.context.data.attachment)))},directives:[y.a,_.a],styles:[""]}),t})();var Q=n("0PJQ"),w=n("3Pt+"),k=n("1kSV"),g=n("QGA0");const C=["content"],A=function(t){return[t]},U=function(){return[]};function N(t,e){if(1&t){const t=i.Rb();i.Qb(0,"div",2),i.Qb(1,"h6",3),i.Cc(2),i.Pb(),i.Qb(3,"button",4),i.bc("click",(function(){return i.tc(t),i.dc().ok()})),i.Qb(4,"span",5),i.Cc(5,"\xd7"),i.Pb(),i.Pb(),i.Pb(),i.Qb(6,"div",6),i.Qb(7,"form",7),i.bc("submit",(function(){return i.tc(t),i.dc().submit()})),i.Qb(8,"div",8),i.Qb(9,"div",9),i.Qb(10,"div",10),i.Qb(11,"label"),i.Cc(12,"English Name"),i.Pb(),i.Lb(13,"input",11),i.Pb(),i.Pb(),i.Pb(),i.Qb(14,"div",12),i.Qb(15,"div",9),i.Qb(16,"div",10),i.Qb(17,"label"),i.Cc(18,"\u0627\u0644\u0627\u0633\u0645 \u0628\u0627\u0644\u0644\u063a\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629"),i.Pb(),i.Lb(19,"input",13),i.Pb(),i.Pb(),i.Pb(),i.Qb(20,"div",12),i.Qb(21,"div",9),i.Qb(22,"div",10),i.Qb(23,"label"),i.Cc(24,"English Description"),i.Pb(),i.Lb(25,"input",14),i.Pb(),i.Pb(),i.Pb(),i.Qb(26,"div",12),i.Qb(27,"div",9),i.Qb(28,"div",10),i.Qb(29,"label"),i.Cc(30,"\u0627\u0644\u0648\u0635\u0641 \u0628\u0627\u0644\u0644\u063a\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629"),i.Pb(),i.Lb(31,"input",15),i.Pb(),i.Pb(),i.Pb(),i.Qb(32,"div",8),i.Qb(33,"div",16),i.Qb(34,"div",10),i.Qb(35,"label"),i.Cc(36,"Attachment"),i.Pb(),i.Lb(37,"input",17),i.Lb(38,"input",18),i.Qb(39,"app-attachments-uploader",19),i.bc("valueChange",(function(e){return i.tc(t),i.dc().setSelectedAttachment(e)})),i.Pb(),i.Pb(),i.Pb(),i.Pb(),i.Qb(40,"div",8),i.Qb(41,"div",20),i.Qb(42,"button",21),i.Cc(43," Submit "),i.Pb(),i.Pb(),i.Pb(),i.Pb(),i.Pb()}if(2&t){const t=i.dc();i.xb(2),i.Dc(t.title),i.xb(5),i.kc("formGroup",t.formGroup),i.xb(30),i.yb("value",(null==t.attachment?null:t.attachment.name)||"Not selected"),i.xb(2),i.kc("limit",1)("attachments",t.attachment?i.oc(6,A,t.attachment):i.nc(8,U)),i.xb(3),i.kc("disabled",t.uploading||!t.formGroup.dirty||!t.formGroup.valid)}}let E=(()=>{class t extends Q.b{constructor(t,e,n,a){super(t,e,n,a),this.formGroup=new w.e({en_name:new w.c(null,w.r.required),ar_name:new w.c(null,w.r.required),en_description:new w.c(null,w.r.required),ar_description:new w.c(null,w.r.required),attachment_id:new w.c(null,w.r.required)})}ngOnInit(){var t,e;const n=history.state.resource;n&&(this.attachment=new p.a(null===(t=n.attachment)||void 0===t?void 0:t.id,null===(e=n.attachment)||void 0===e?void 0:e.type,null==n?void 0:n.attachment.url,null==n?void 0:n.attachment.name))}openModal(){return this.service.open(this.content,{backdrop:"static"})}get postUrl(){return"brandsCreateUrl"}get putUrl(){return"brandsUpdateUrl"}get parentUrl(){return"/brands"}setSelectedAttachment(t){if(!t||!t.ids||!t.entities||t.ids.length!==t.entities.length||1!==t.ids.length)return this.attachment=null,void this.formGroup.patchValue({attachment_id:null});this.attachment=t.entities[0],this.formGroup.patchValue({attachment_id:t.ids[0]})}}return t.\u0275fac=function(e){return new(e||t)(i.Kb(m.b),i.Kb(r.a),i.Kb(r.f),i.Kb(k.h))},t.\u0275cmp=i.Eb({type:t,selectors:[["app-brand-form"]],viewQuery:function(t,e){var n;1&t&&i.Hc(C,!0),2&t&&i.rc(n=i.cc())&&(e.content=n.first)},features:[i.ub],decls:4,vars:1,consts:[["type","info",3,"close"],["content",""],[1,"modal-header"],[1,"modal-title","pt-1","mt-1"],["type","button",1,"close",2,"border","none","outline","none",3,"click"],["aria-hidden","true"],[1,"modal-body"],[3,"formGroup","submit"],[1,"row"],[1,"col-12","px-3"],[1,"form-group"],["type","text","placeholder","English Name","formControlName","en_name","autocomplete","off",1,"form-control"],["dir","rtl",1,"row"],["type","text","placeholder","\u0627\u0644\u0627\u0633\u0645 \u0628\u0627\u0644\u0644\u063a\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629","formControlName","ar_name","autocomplete","off",1,"form-control"],["type","text","placeholder","English Description","formControlName","en_description","autocomplete","off",1,"form-control"],["type","text","placeholder","\u0627\u0644\u0648\u0635\u0641 \u0628\u0627\u0644\u0644\u063a\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629","formControlName","ar_description","autocomplete","off",1,"form-control"],[1,"col-md-12","px-3"],["type","text","disabled","",1,"form-control"],["type","hidden","formControlName","attachment_id"],[1,"form-control","mt-2",3,"limit","attachments","valueChange"],[1,"update","ml-auto","mr-auto"],["type","submit",1,"btn","btn-primary","btn-round",3,"disabled"]],template:function(t,e){1&t&&(i.Qb(0,"ngb-alert",0),i.bc("close",(function(){return e.ok()})),i.Cc(1),i.Pb(),i.Ac(2,N,44,9,"ng-template",null,1,i.Bc)),2&t&&(i.xb(1),i.Dc(e.message))},directives:[k.b,w.t,w.l,w.f,w.b,w.k,w.d,g.a],styles:[""]}),t})();const D=[{path:"",component:l,runGuardsAndResolvers:"always",resolve:{brands:h},children:[{path:"create",component:E},{path:":id/edit",component:E},{path:":id/details",pathMatch:"full",component:P},{path:":id/delete",pathMatch:"full",component:v}]}];let G=(()=>{class t{}return t.\u0275mod=i.Ib({type:t}),t.\u0275inj=i.Hb({factory:function(e){return new(e||t)},imports:[[r.i.forChild(D)],r.i]}),t})();var L=n("uP1v"),B=n("RDNO"),J=n("nHkx");let M=(()=>{class t{}return t.\u0275mod=i.Ib({type:t}),t.\u0275inj=i.Hb({factory:function(e){return new(e||t)},providers:[h,{provide:m.a,useClass:B.a,multi:!0}],imports:[[a.c,G,k.i,r.i,w.p,L.a,J.a]]}),t})()}}]);