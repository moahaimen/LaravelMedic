(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{p2q8:function(t,e,n){"use strict";n.r(e),n.d(e,"BrandsModule",(function(){return S}));var a=n("ofXK"),c=n("tyNb"),r=n("fXoL"),i=n("Ubi2");const o=["table"];let s=(()=>{class t{constructor(t){this.context={urls:{createUrl:"create",detailsUrl:":id"},data:this.data,properties:[{key:"name",title:"Name",type:"string"},{key:"description",title:"Description",type:"string"},{key:"created_at",title:"Created At",type:"datetime"},{key:"updated_at",title:"Updated At",type:"datetime"}],title:"Brands"},t.data.subscribe(t=>{this.data=t.brands,this.context.data=this.data})}}return t.\u0275fac=function(e){return new(e||t)(r.Kb(c.a))},t.\u0275cmp=r.Eb({type:t,selectors:[["app-index"]],viewQuery:function(t,e){var n;1&t&&r.Gc(o,!0),2&t&&r.qc(n=r.cc())&&(e.table=n.first)},decls:2,vars:1,consts:[[3,"context"],["table",""]],template:function(t,e){1&t&&r.Lb(0,"app-table-view",0,1),2&t&&r.jc("context",e.context)},directives:[i.a],styles:[""]}),t})();var l=n("AytR"),d=n("9xMI");class u extends d.a{constructor(t,e,n,a,c,r,i){super(t),this.id=t,this.name=e,this.description=n,this.created_at=a,this.updated_at=c,this.attachment_id=r,this.attachment=i}}var b=n("lJxs"),p=n("PS3Z"),m=n("tk/3");let h=(()=>{class t{constructor(t){this.http=t}static Json2Brand(t){var e,n;if(!t)return null;let a=null;return t.attachment&&(a=new p.a(null===(e=t.attachment)||void 0===e?void 0:e.id,null===(n=t.attachment)||void 0===n?void 0:n.type,null==t?void 0:t.attachment.url,null==t?void 0:t.attachment.name)),new u(t.id,t.name,t.description,t.created_at,t.updated_at,t.attachment_id,a)}resolve(e,n){return this.http.get(`${l.a.apiUrl}/${l.a.brandsFetchUrl}`).pipe(Object(b.a)(e=>e.map(e=>t.Json2Brand(e))))}}return t.\u0275fac=function(e){return new(e||t)(r.Yb(m.b))},t.\u0275prov=r.Gb({token:t,factory:t.\u0275fac}),t})();var f=n("w+MF");let v=(()=>{class t{constructor(){}ngOnInit(){this.context={deleteUrl:"brandsDeleteUrl",data:history.state.resource,title:"Delete Brand Resource!",description:"Are you sure to delete this brand?"}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Eb({type:t,selectors:[["app-brand-delete"]],decls:1,vars:1,consts:[[3,"context"]],template:function(t,e){1&t&&r.Lb(0,"app-resource-delete",0),2&t&&r.jc("context",e.context)},directives:[f.a],styles:[""]}),t})();var y=n("AMeL"),g=n("1kSV");function P(t,e){if(1&t&&r.Lb(0,"img",7),2&t){const t=r.dc(2).$implicit;r.jc("src",t.url,r.uc)("alt",t.name)}}function x(t,e){if(1&t&&(r.Qb(0,"video",8),r.Lb(1,"source",9),r.Pb()),2&t){const t=r.dc(2).$implicit;r.xb(1),r.jc("src",t.url,r.uc)}}function w(t,e){if(1&t&&(r.Qb(0,"div",4),r.zc(1,P,1,2,"img",5),r.zc(2,x,2,1,"video",6),r.Pb()),2&t){const t=r.dc().$implicit;r.xb(1),r.jc("ngIf",0===t.type),r.xb(1),r.jc("ngIf",1===t.type)}}function Q(t,e){1&t&&r.zc(0,w,3,2,"ng-template",3)}function k(t,e){if(1&t&&(r.Qb(0,"ngb-carousel"),r.zc(1,Q,1,0,void 0,2),r.Pb()),2&t){const t=r.dc();r.xb(1),r.jc("ngForOf",t.attachments)}}function _(t,e){1&t&&(r.Qb(0,"ngb-alert",10),r.Qb(1,"h6"),r.Bc(2,"Problem!"),r.Pb(),r.Qb(3,"ul"),r.Qb(4,"li"),r.Bc(5,"Your attachments list is empty"),r.Pb(),r.Qb(6,"li"),r.Bc(7,"Something went wrong while initializing."),r.Pb(),r.Pb(),r.Pb()),2&t&&r.jc("dismissible",!1)}let C=(()=>{class t{constructor(){}ngOnInit(){this.attachments=Array.isArray(this.attachments)?this.attachments.filter(t=>null!=t&&void 0!==t):[]}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Eb({type:t,selectors:[["app-attachments-viewer"]],inputs:{attachments:"attachments"},decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["message",""],[4,"ngFor","ngForOf"],["ngbSlide",""],[1,"picsum-img-wrapper"],[3,"src","alt",4,"ngIf"],["controls","",4,"ngIf"],[3,"src","alt"],["controls",""],[3,"src"],["type","danger",3,"dismissible"]],template:function(t,e){if(1&t&&(r.zc(0,k,2,1,"ngb-carousel",0),r.zc(1,_,8,1,"ng-template",null,1,r.Ac)),2&t){const t=r.rc(2);r.jc("ngIf",e.attachments&&e.attachments.length>0)("ngIfElse",t)}},directives:[a.l,g.c,a.k,g.h,g.b],styles:["[_nghost-%COMP%]   ngb-carousel[_ngcontent-%COMP%]{outline:none}[_nghost-%COMP%]   .picsum-img-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], [_nghost-%COMP%]   .picsum-img-wrapper[_ngcontent-%COMP%]   video[_ngcontent-%COMP%], [_nghost-%COMP%]   ngb-carousel[_ngcontent-%COMP%]{width:100%;height:400px}"]}),t})();const j=function(t){return[t]};let O=(()=>{class t{ngOnInit(){const t=h.Json2Brand(history.state.resource);this.context={urls:{tableUrl:"/brands"},data:t,properties:[{key:"name",title:"Name",type:"string"},{key:"description",title:"Description",type:"string"},{key:"created_at",title:"Created At",type:"datetime"},{key:"updated_at",title:"Updated At",type:"datetime"},{key:"attachment",title:"Attachment",type:"component",component:"app-attachments-viewer"}],title:"Details of brand "+(null==t?void 0:t.name)}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Eb({type:t,selectors:[["app-brand-details"]],decls:2,vars:4,consts:[[3,"context"],[3,"attachments"]],template:function(t,e){1&t&&(r.Qb(0,"app-resource-details",0),r.Lb(1,"app-attachments-viewer",1),r.Pb()),2&t&&(r.jc("context",e.context),r.xb(1),r.jc("attachments",r.nc(2,j,null==e.context||null==e.context.data?null:e.context.data.attachment)))},directives:[y.a,C],styles:[""]}),t})();var A=n("0PJQ"),M=n("3Pt+"),B=n("QGA0");const I=["content"],U=function(t){return[t]},G=function(){return[]};function L(t,e){if(1&t){const t=r.Rb();r.Qb(0,"div",2),r.Qb(1,"h6",3),r.Bc(2),r.Pb(),r.Qb(3,"button",4),r.bc("click",(function(){return r.sc(t),r.dc().ok()})),r.Qb(4,"span",5),r.Bc(5,"\xd7"),r.Pb(),r.Pb(),r.Pb(),r.Qb(6,"div",6),r.Qb(7,"form",7),r.Qb(8,"div",8),r.Qb(9,"div",9),r.Qb(10,"div",10),r.Qb(11,"label"),r.Bc(12,"Name"),r.Pb(),r.Lb(13,"input",11),r.Pb(),r.Pb(),r.Pb(),r.Qb(14,"div",8),r.Qb(15,"div",9),r.Qb(16,"div",10),r.Qb(17,"label"),r.Bc(18,"Description"),r.Pb(),r.Lb(19,"input",12),r.Pb(),r.Pb(),r.Pb(),r.Qb(20,"div",8),r.Qb(21,"div",13),r.Qb(22,"div",10),r.Qb(23,"label"),r.Bc(24,"Attachment"),r.Pb(),r.Lb(25,"input",14),r.Lb(26,"input",15),r.Qb(27,"app-attachments-uploader",16),r.bc("valueChange",(function(e){return r.sc(t),r.dc().setSelectedAttachment(e)})),r.Pb(),r.Pb(),r.Pb(),r.Pb(),r.Qb(28,"div",8),r.Qb(29,"div",17),r.Qb(30,"button",18),r.bc("click",(function(){return r.sc(t),r.dc().submit()})),r.Bc(31," Submit "),r.Pb(),r.Pb(),r.Pb(),r.Pb(),r.Pb()}if(2&t){const t=r.dc();r.xb(2),r.Cc(t.title),r.xb(5),r.jc("formGroup",t.formGroup),r.xb(18),r.yb("value",(null==t.attachment?null:t.attachment.name)||"Not selected"),r.xb(2),r.jc("limit",1)("attachments",t.attachment?r.nc(6,U,t.attachment):r.mc(8,G)),r.xb(3),r.jc("disabled",!t.formGroup.dirty||!t.formGroup.valid)}}let N=(()=>{class t extends A.b{constructor(t,e,n,a){super(t,e,n,a),this.formGroup=new M.e({name:new M.c(null,M.q.required),description:new M.c(null,M.q.required),attachment_id:new M.c(null,M.q.required)})}ngOnInit(){var t,e;const n=history.state.resource;n&&(this.attachment=new p.a(null===(t=n.attachment)||void 0===t?void 0:t.id,null===(e=n.attachment)||void 0===e?void 0:e.type,null==n?void 0:n.attachment.url,null==n?void 0:n.attachment.name))}openModal(){return this.service.open(this.content,{backdrop:"static"})}postUrl(){return"brandsCreateUrl"}putUrl(){return"brandsUpdateUrl"}setSelectedAttachment(t){if(!t||!t.ids||!t.entities||t.ids.length!==t.entities.length||1!==t.ids.length)return this.attachment=null,void this.formGroup.patchValue({attachment_id:null});this.attachment=t.entities[0],this.formGroup.patchValue({attachment_id:t.ids[0]})}}return t.\u0275fac=function(e){return new(e||t)(r.Kb(m.b),r.Kb(c.a),r.Kb(c.f),r.Kb(g.d))},t.\u0275cmp=r.Eb({type:t,selectors:[["app-brand-form"]],viewQuery:function(t,e){var n;1&t&&r.Gc(I,!0),2&t&&r.qc(n=r.cc())&&(e.content=n.first)},features:[r.ub],decls:4,vars:1,consts:[["type","info",3,"close"],["content",""],[1,"modal-header"],[1,"modal-title","pt-1","mt-1"],["type","button",1,"close",2,"border","none","outline","none",3,"click"],["aria-hidden","true"],[1,"modal-body"],[3,"formGroup"],[1,"row"],[1,"col-12","px-3"],[1,"form-group"],["type","text","placeholder","Name","formControlName","name","autocomplete","off",1,"form-control"],["type","text","placeholder","Description","formControlName","description","autocomplete","off",1,"form-control"],[1,"col-md-12","px-3"],["type","text","disabled","",1,"form-control"],["type","hidden","formControlName","attachment_id"],[1,"form-control","mt-2",3,"limit","attachments","valueChange"],[1,"update","ml-auto","mr-auto"],["type","submit",1,"btn","btn-primary","btn-round",3,"disabled","click"]],template:function(t,e){1&t&&(r.Qb(0,"ngb-alert",0),r.bc("close",(function(){return e.ok()})),r.Bc(1),r.Pb(),r.zc(2,L,32,9,"ng-template",null,1,r.Ac)),2&t&&(r.xb(1),r.Cc(e.message))},directives:[g.b,M.s,M.k,M.f,M.b,M.j,M.d,B.a],styles:[""]}),t})();const q=[{path:"",component:s,runGuardsAndResolvers:"always",resolve:{brands:h},children:[{path:"create",component:N},{path:":id/edit",component:N},{path:":id/details",pathMatch:"full",component:O},{path:":id/delete",pathMatch:"full",component:v}]}];let z=(()=>{class t{}return t.\u0275mod=r.Ib({type:t}),t.\u0275inj=r.Hb({factory:function(e){return new(e||t)},imports:[[c.i.forChild(q)],c.i]}),t})();var D=n("uP1v"),E=n("RDNO"),J=n("nHkx");let S=(()=>{class t{}return t.\u0275mod=r.Ib({type:t}),t.\u0275inj=r.Hb({factory:function(e){return new(e||t)},providers:[h,{provide:m.a,useClass:E.a,multi:!0}],imports:[[a.b,z,g.e,c.i,M.o,D.a,J.a]]}),t})()}}]);