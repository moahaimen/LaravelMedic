(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{p2q8:function(t,e,n){"use strict";n.r(e),n.d(e,"BrandsModule",(function(){return C}));var r=n("ofXK"),a=n("tyNb"),o=n("fXoL"),c=n("Ubi2");const i=["table"];let s=(()=>{class t{constructor(t){this.context={urls:{createUrl:"create",detailsUrl:":id"},pagination:void 0,properties:[{key:"en_name",title:"En Name",type:"string"},{key:"en_description",title:"En Description",type:"string"},{key:"created_at",title:"Created At",type:"datetime"},{key:"updated_at",title:"Updated At",type:"datetime"}],title:"Brands"},t.data.subscribe(t=>this.context.pagination=t.resources)}}return t.\u0275fac=function(e){return new(e||t)(o.Lb(a.a))},t.\u0275cmp=o.Fb({type:t,selectors:[["app-index"]],viewQuery:function(t,e){var n;1&t&&o.Ic(i,!0),2&t&&o.sc(n=o.dc())&&(e.table=n.first)},decls:2,vars:1,consts:[[3,"context"],["table",""]],template:function(t,e){1&t&&o.Mb(0,"app-table-view",0,1),2&t&&o.lc("context",e.context)},directives:[c.a],styles:[""]}),t})();var l=n("/7FJ"),d=n("w+MF");let u=(()=>{class t{constructor(t){t.parent.data.subscribe(e=>{t.params.subscribe(t=>{const n=Number.parseInt(t.id,10),r=e.resources.data.find(t=>t.id===n);this.context={deleteUrl:"brandsDeleteUrl",data:r,title:"Delete Brand Resource!",description:"Are you sure to delete this brand?"}})})}}return t.\u0275fac=function(e){return new(e||t)(o.Lb(a.a))},t.\u0275cmp=o.Fb({type:t,selectors:[["app-brand-delete"]],decls:1,vars:1,consts:[[3,"context"]],template:function(t,e){1&t&&o.Mb(0,"app-resource-delete",0),2&t&&o.lc("context",e.context)},directives:[d.a],styles:[""]}),t})();var b=n("AMeL"),p=n("bz7F");const m=function(t){return[t]};let f=(()=>{class t{constructor(t){t.parent.data.subscribe(e=>{t.params.subscribe(t=>{const n=Number.parseInt(t.id,10),r=e.resources.data.find(t=>t.id===n);this.context={urls:{tableUrl:"/brands"},data:r,properties:[{key:"en_name",title:"English Name",type:"string"},{key:"en_description",title:"English Description",type:"string"},{key:"ar_name",title:"Arabic Name",type:"string"},{key:"ar_description",title:"Arabic Description",type:"string"},{key:"created_at",title:"Created At",type:"datetime"},{key:"updated_at",title:"Updated At",type:"datetime"},{key:"attachment",title:"Attachment",type:"component",component:"app-attachments-viewer"}],title:"Details of brand "+(null==r?void 0:r.en_name)}})})}}return t.\u0275fac=function(e){return new(e||t)(o.Lb(a.a))},t.\u0275cmp=o.Fb({type:t,selectors:[["app-brand-details"]],decls:2,vars:4,consts:[[3,"context"],[3,"attachments"]],template:function(t,e){1&t&&(o.Rb(0,"app-resource-details",0),o.Mb(1,"app-attachments-viewer",1),o.Qb()),2&t&&(o.lc("context",e.context),o.yb(1),o.lc("attachments",o.pc(2,m,null==e.context||null==e.context.data?null:e.context.data.attachment)))},directives:[b.a,p.a],styles:[""]}),t})();var h=n("0PJQ"),y=n("3Pt+"),v=n("PS3Z"),Q=n("tk/3"),R=n("1kSV"),g=n("QGA0");const k=["content"],w=function(t){return[t]},_=function(){return[]};function x(t,e){if(1&t){const t=o.Sb();o.Rb(0,"div",2),o.Rb(1,"h6",3),o.Dc(2),o.Qb(),o.Rb(3,"button",4),o.cc("click",(function(){return o.uc(t),o.ec().ok()})),o.Rb(4,"span",5),o.Dc(5,"\xd7"),o.Qb(),o.Qb(),o.Qb(),o.Rb(6,"div",6),o.Rb(7,"form",7),o.Rb(8,"div",8),o.Rb(9,"div",9),o.Rb(10,"div",10),o.Rb(11,"label"),o.Dc(12,"English Name"),o.Qb(),o.Mb(13,"input",11),o.Qb(),o.Qb(),o.Qb(),o.Rb(14,"div",12),o.Rb(15,"div",9),o.Rb(16,"div",10),o.Rb(17,"label"),o.Dc(18,"\u0627\u0644\u0627\u0633\u0645 \u0628\u0627\u0644\u0644\u063a\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629"),o.Qb(),o.Mb(19,"input",13),o.Qb(),o.Qb(),o.Qb(),o.Rb(20,"div",12),o.Rb(21,"div",9),o.Rb(22,"div",10),o.Rb(23,"label"),o.Dc(24,"English Description"),o.Qb(),o.Mb(25,"input",14),o.Qb(),o.Qb(),o.Qb(),o.Rb(26,"div",12),o.Rb(27,"div",9),o.Rb(28,"div",10),o.Rb(29,"label"),o.Dc(30,"\u0627\u0644\u0648\u0635\u0641 \u0628\u0627\u0644\u0644\u063a\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629"),o.Qb(),o.Mb(31,"input",15),o.Qb(),o.Qb(),o.Qb(),o.Rb(32,"div",8),o.Rb(33,"div",16),o.Rb(34,"div",10),o.Rb(35,"label"),o.Dc(36,"Attachment"),o.Qb(),o.Mb(37,"input",17),o.Mb(38,"input",18),o.Rb(39,"app-attachments-uploader",19),o.cc("valueChange",(function(e){return o.uc(t),o.ec().setSelectedAttachment(e)})),o.Qb(),o.Qb(),o.Qb(),o.Qb(),o.Rb(40,"div",8),o.Rb(41,"div",20),o.Rb(42,"button",21),o.cc("click",(function(){return o.uc(t),o.ec().submit()})),o.Dc(43," Submit "),o.Qb(),o.Qb(),o.Qb(),o.Qb(),o.Qb()}if(2&t){const t=o.ec();o.yb(2),o.Ec(t.title),o.yb(5),o.lc("formGroup",t.formGroup),o.yb(30),o.zb("value",(null==t.attachment?null:t.attachment.name)||"Not selected"),o.yb(2),o.lc("limit",1)("attachments",t.attachment?o.pc(6,w,t.attachment):o.oc(8,_)),o.yb(3),o.lc("disabled",t.uploading||!t.formGroup.dirty||!t.formGroup.valid)}}let D=(()=>{class t extends h.b{constructor(t,e,n,r){super(t,e,n,r),this.formGroup=new y.e({en_name:new y.c(null,y.r.required),ar_name:new y.c(null,y.r.required),en_description:new y.c(null,y.r.required),ar_description:new y.c(null,y.r.required),attachment_id:new y.c(null,y.r.required)}),e.parent.data.subscribe(t=>{e.params.subscribe(e=>{const n=Number.parseInt(e.id,10),r=t.resources.data.find(t=>t.id===n);if(!r)return;const a=r.attachment;this.attachment=new v.a(null==a?void 0:a.id,null==a?void 0:a.type,null==a?void 0:a.url,null==a?void 0:a.name)})})}openModal(){return this.service.open(this.content,{backdrop:"static",keyboard:!1})}get postUrl(){return"brandsCreateUrl"}get putUrl(){return"brandsUpdateUrl"}get parentUrl(){return"/brands"}setSelectedAttachment(t){if(!t||!t.ids||!t.entities||t.ids.length!==t.entities.length||1!==t.ids.length)return console.log(t),console.log(t.ids.length),this.attachment=null,this.formGroup.controls.attachment_id.setValue(null),this.formGroup.controls.attachment_id.markAsTouched(),void this.formGroup.controls.attachment_id.markAsDirty();this.attachment=t.entities[0],this.formGroup.controls.attachment_id.setValue(t.ids[0]),this.formGroup.controls.attachment_id.markAsTouched(),this.formGroup.controls.attachment_id.markAsDirty()}}return t.\u0275fac=function(e){return new(e||t)(o.Lb(Q.b),o.Lb(a.a),o.Lb(a.f),o.Lb(R.d))},t.\u0275cmp=o.Fb({type:t,selectors:[["app-brand-form"]],viewQuery:function(t,e){var n;1&t&&o.Ic(k,!0),2&t&&o.sc(n=o.dc())&&(e.content=n.first)},features:[o.vb],decls:4,vars:1,consts:[["type","info",3,"close"],["content",""],[1,"modal-header"],[1,"modal-title","pt-1","mt-1"],["type","button",1,"close",2,"border","none","outline","none",3,"click"],["aria-hidden","true"],[1,"modal-body"],[3,"formGroup"],[1,"row"],[1,"col-12","px-3"],[1,"form-group"],["type","text","placeholder","English Name","formControlName","en_name","autocomplete","off",1,"form-control"],["dir","rtl",1,"row"],["type","text","placeholder","\u0627\u0644\u0627\u0633\u0645 \u0628\u0627\u0644\u0644\u063a\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629","formControlName","ar_name","autocomplete","off",1,"form-control"],["type","text","placeholder","English Description","formControlName","en_description","autocomplete","off",1,"form-control"],["type","text","placeholder","\u0627\u0644\u0648\u0635\u0641 \u0628\u0627\u0644\u0644\u063a\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629","formControlName","ar_description","autocomplete","off",1,"form-control"],[1,"col-md-12","px-3"],["type","text","disabled","",1,"form-control"],["type","hidden","formControlName","attachment_id"],[1,"form-control","mt-2",3,"limit","attachments","valueChange"],[1,"update","ml-auto","mr-auto"],["type","submit",1,"btn","btn-primary","btn-round",3,"disabled","click"]],template:function(t,e){1&t&&(o.Rb(0,"ngb-alert",0),o.cc("close",(function(){return e.ok()})),o.Dc(1),o.Qb(),o.Bc(2,x,44,9,"ng-template",null,1,o.Cc)),2&t&&(o.yb(1),o.Ec(e.message))},directives:[R.b,y.t,y.l,y.f,y.b,y.k,y.d,g.a],styles:[""]}),t})();const A=[{path:"",component:s,runGuardsAndResolvers:(t,e)=>{var n;return null!==(n=history.state.runResolvers)&&void 0!==n&&n},resolve:{resources:l.a},children:[{path:"create",component:D},{path:":id/edit",component:D},{path:":id/details",pathMatch:"full",component:f},{path:":id/delete",pathMatch:"full",component:u}]}];let N=(()=>{class t{}return t.\u0275mod=o.Jb({type:t}),t.\u0275inj=o.Ib({factory:function(e){return new(e||t)},imports:[[a.i.forChild(A)],a.i]}),t})();var M=n("uP1v"),G=n("RDNO"),U=n("nHkx");let C=(()=>{class t{}return t.\u0275mod=o.Jb({type:t}),t.\u0275inj=o.Ib({factory:function(e){return new(e||t)},providers:[l.a,{provide:Q.a,useClass:G.a,multi:!0}],imports:[[r.c,N,R.e,a.i,y.p,M.a,U.a]]}),t})()}}]);