(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"8ar1":function(t,e,n){"use strict";n.r(e),n.d(e,"CategoriesModule",(function(){return G}));var o=n("ofXK"),r=n("tyNb"),c=n("fXoL"),i=n("Ubi2");const a=["table"];let s=(()=>{class t{constructor(t){this.context={urls:{createUrl:"/categories/create",detailsUrl:"/:id"},pagination:void 0,properties:[{key:"en_name",title:"En Name",type:"string"},{key:"en_description",title:"En Description",type:"string"},{key:"created_at",title:"Created At",type:"datetime"},{key:"updated_at",title:"Updated At",type:"datetime"}],title:"Categories"},t.data.subscribe(t=>this.context.pagination=t.resources)}}return t.\u0275fac=function(e){return new(e||t)(c.Lb(r.a))},t.\u0275cmp=c.Fb({type:t,selectors:[["app-index"]],viewQuery:function(t,e){var n;1&t&&c.Ic(a,!0),2&t&&c.sc(n=c.dc())&&(e.table=n.first)},decls:2,vars:1,consts:[[3,"context"],["table",""]],template:function(t,e){1&t&&c.Mb(0,"app-table-view",0,1),2&t&&c.lc("context",e.context)},directives:[i.a],styles:[""]}),t})();var l=n("WWF+"),p=n("w+MF");let u=(()=>{class t{constructor(t){t.parent.data.subscribe(e=>{t.params.subscribe(t=>{const n=Number.parseInt(t.id,10),o=e.resources.data.find(t=>t.id===n);this.context={deleteUrl:"categoriesDeleteUrl",data:o,title:"Delete Category Resource!",description:"Are you sure to delete this category?"}})})}}return t.\u0275fac=function(e){return new(e||t)(c.Lb(r.a))},t.\u0275cmp=c.Fb({type:t,selectors:[["app-category-delete"]],decls:1,vars:1,consts:[[3,"context"]],template:function(t,e){1&t&&c.Mb(0,"app-resource-delete",0),2&t&&c.lc("context",e.context)},directives:[p.a],styles:[""]}),t})();var d=n("AMeL"),b=n("bz7F");const m=function(t){return[t]};let f=(()=>{class t{constructor(t){t.parent.data.subscribe(e=>{t.params.subscribe(t=>{const n=Number.parseInt(t.id,10),o=e.resources.data.find(t=>t.id===n);this.context={urls:{tableUrl:"/categories"},data:o,properties:[{key:"en_name",title:"English Name",type:"string"},{key:"en_description",title:"English Description",type:"string"},{key:"ar_name",title:"Arabic Name",type:"string"},{key:"ar_description",title:"Arabic Description",type:"string"},{key:"created_at",title:"Created At",type:"datetime"},{key:"updated_at",title:"Updated At",type:"datetime"},{key:"icon",title:"Icon",type:"component",component:"app-attachments-viewer"}],title:"Details of category "+(null==o?void 0:o.en_name)}})})}}return t.\u0275fac=function(e){return new(e||t)(c.Lb(r.a))},t.\u0275cmp=c.Fb({type:t,selectors:[["app-category-details"]],decls:2,vars:4,consts:[[3,"context"],[3,"attachments"]],template:function(t,e){1&t&&(c.Rb(0,"app-resource-details",0),c.Mb(1,"app-attachments-viewer",1),c.Qb()),2&t&&(c.lc("context",e.context),c.yb(1),c.lc("attachments",c.pc(2,m,null==e.context||null==e.context.data?null:e.context.data.attachment)))},directives:[d.a,b.a],styles:[""]}),t})();var h=n("0PJQ"),y=n("3Pt+"),v=n("tk/3"),g=n("1kSV"),Q=n("QGA0");const R=["content"],w=function(t){return[t]},k=function(){return[]};function x(t,e){if(1&t){const t=c.Sb();c.Rb(0,"div",2),c.Rb(1,"h6",3),c.Dc(2),c.Qb(),c.Rb(3,"button",4),c.cc("click",(function(){return c.uc(t),c.ec().ok()})),c.Rb(4,"span",5),c.Dc(5,"\xd7"),c.Qb(),c.Qb(),c.Qb(),c.Rb(6,"div",6),c.Rb(7,"form",7),c.Rb(8,"div",8),c.Rb(9,"div",9),c.Rb(10,"div",10),c.Rb(11,"label"),c.Dc(12,"English Name"),c.Qb(),c.Mb(13,"input",11),c.Qb(),c.Qb(),c.Qb(),c.Rb(14,"div",12),c.Rb(15,"div",9),c.Rb(16,"div",10),c.Rb(17,"label"),c.Dc(18,"\u0627\u0644\u0627\u0633\u0645 \u0628\u0627\u0644\u0644\u063a\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629"),c.Qb(),c.Mb(19,"input",13),c.Qb(),c.Qb(),c.Qb(),c.Rb(20,"div",8),c.Rb(21,"div",9),c.Rb(22,"div",10),c.Rb(23,"label"),c.Dc(24,"English Description"),c.Qb(),c.Mb(25,"input",14),c.Qb(),c.Qb(),c.Qb(),c.Rb(26,"div",12),c.Rb(27,"div",9),c.Rb(28,"div",10),c.Rb(29,"label"),c.Dc(30,"\u0627\u0644\u0648\u0635\u0641 \u0628\u0627\u0644\u0644\u063a\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629"),c.Qb(),c.Mb(31,"input",15),c.Qb(),c.Qb(),c.Qb(),c.Rb(32,"div",8),c.Rb(33,"div",16),c.Rb(34,"div",10),c.Rb(35,"label"),c.Dc(36,"Icon"),c.Qb(),c.Mb(37,"input",17),c.Mb(38,"input",18),c.Rb(39,"app-attachments-uploader",19),c.cc("valueChange",(function(e){return c.uc(t),c.ec().onSelectItem(e)})),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Rb(40,"div",8),c.Rb(41,"div",20),c.Rb(42,"button",21),c.cc("click",(function(){return c.uc(t),c.ec().submit()})),c.Dc(43," Submit "),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Qb()}if(2&t){const t=c.ec();c.yb(2),c.Ec(t.title),c.yb(5),c.lc("formGroup",t.formGroup),c.yb(30),c.zb("value",(null==t.attachment?null:t.attachment.name)||"Not selected"),c.yb(2),c.lc("limit",1)("attachments",t.attachment?c.pc(6,w,t.attachment):c.oc(8,k)),c.yb(3),c.lc("disabled",t.uploading||!t.formGroup.dirty||!t.formGroup.valid)}}let _=(()=>{class t extends h.b{constructor(t,e,n,o){super(t,e,n,o),this.formGroup=new y.e({en_name:new y.c(null,y.r.required),ar_name:new y.c(null,y.r.required),en_description:new y.c(null,y.r.required),ar_description:new y.c(null,y.r.required),icon:new y.c(null,y.r.required)}),e.parent.data.subscribe(t=>{e.params.subscribe(e=>{const n=Number.parseInt(e.id,10),o=t.resources.data.find(t=>t.id===n);o&&(this.attachment=o.attachment)})})}openModal(){return this.service.open(this.content,{backdrop:"static",keyboard:!1})}get postUrl(){return"categoriesCreateUrl"}get putUrl(){return"categoriesUpdateUrl"}get parentUrl(){return"/categories"}onSelectItem(t){if(!t||!t.ids||!t.entities||t.ids.length!==t.entities.length||1!==t.ids.length)return console.log(t),console.log(t.ids.length),this.attachment=null,this.formGroup.controls.icon.setValue(null),this.formGroup.controls.icon.markAsTouched(),void this.formGroup.controls.icon.markAsDirty();this.attachment=t.entities[0],this.formGroup.controls.icon.setValue(t.entities[0].url),this.formGroup.controls.icon.markAsTouched(),this.formGroup.controls.icon.markAsDirty()}}return t.\u0275fac=function(e){return new(e||t)(c.Lb(v.b),c.Lb(r.a),c.Lb(r.f),c.Lb(g.d))},t.\u0275cmp=c.Fb({type:t,selectors:[["app-category-form"]],viewQuery:function(t,e){var n;1&t&&c.Ic(R,!0),2&t&&c.sc(n=c.dc())&&(e.content=n.first)},features:[c.vb],decls:4,vars:1,consts:[["type","info",3,"close"],["content",""],[1,"modal-header"],[1,"modal-title","pt-1","mt-1"],["type","button",1,"close",2,"border","none","outline","none",3,"click"],["aria-hidden","true"],[1,"modal-body"],[3,"formGroup"],[1,"row"],[1,"col-12","px-3"],[1,"form-group"],["type","text","placeholder","English Name","formControlName","en_name","autocomplete","off",1,"form-control"],["dir","rtl",1,"row"],["type","text","placeholder","\u0627\u0644\u0627\u0633\u0645 \u0628\u0627\u0644\u0644\u063a\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629","formControlName","ar_name","autocomplete","off",1,"form-control"],["type","text","placeholder","English Description","formControlName","en_description","autocomplete","off",1,"form-control"],["type","text","placeholder","\u0627\u0644\u0648\u0635\u0641 \u0628\u0627\u0644\u0644\u063a\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629","formControlName","ar_description","autocomplete","off",1,"form-control"],[1,"col-md-12","px-3"],["type","text","disabled","",1,"form-control"],["type","hidden","formControlName","icon"],[1,"form-control","mt-2",3,"limit","attachments","valueChange"],[1,"update","ml-auto","mr-auto"],["type","submit",1,"btn","btn-primary","btn-round",3,"disabled","click"]],template:function(t,e){1&t&&(c.Rb(0,"ngb-alert",0),c.cc("close",(function(){return e.ok()})),c.Dc(1),c.Qb(),c.Bc(2,x,44,9,"ng-template",null,1,c.Cc)),2&t&&(c.yb(1),c.Ec(e.message))},directives:[g.b,y.t,y.l,y.f,y.b,y.k,y.d,Q.a],styles:[".icons-list-container[_ngcontent-%COMP%]{width:150px!important;max-height:350px!important;overflow-y:auto!important;overflow-x:hidden!important}.icons-list-container[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:focus, .icons-list-container[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:focus   *[_ngcontent-%COMP%], .icons-list-container[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover, .icons-list-container[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover   *[_ngcontent-%COMP%]{background-color:var(--light);color:var(--info)}"]}),t})();const C=[{path:"",component:s,runGuardsAndResolvers:(t,e)=>{var n;return null!==(n=history.state.runResolvers)&&void 0!==n&&n},resolve:{resources:l.a},children:[{path:"create",component:_},{path:":id/edit",component:_},{path:":id/details",pathMatch:"full",component:f},{path:":id/delete",pathMatch:"full",component:u}]}];let M=(()=>{class t{}return t.\u0275mod=c.Jb({type:t}),t.\u0275inj=c.Ib({factory:function(e){return new(e||t)},imports:[[r.i.forChild(C)],r.i]}),t})();var D=n("uP1v"),N=n("RDNO"),A=n("nHkx");let G=(()=>{class t{}return t.\u0275mod=c.Jb({type:t}),t.\u0275inj=c.Ib({factory:function(e){return new(e||t)},providers:[l.a,{provide:v.a,useClass:N.a,multi:!0}],imports:[[o.c,M,g.e,r.i,y.p,D.a,A.a]]}),t})()}}]);