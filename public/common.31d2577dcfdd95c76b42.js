(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"/7FJ":function(t,e,a){"use strict";a.d(e,"a",(function(){return o}));var r=a("tk/3"),s=a("AytR"),n=a("9xMI");class i extends n.a{constructor(t,e,a,r,s,n,i,p,c){super(t),this.id=t,this.en_name=e,this.ar_name=a,this.en_description=r,this.ar_description=s,this.created_at=n,this.updated_at=i,this.attachment_id=p,this.attachment=c}}var p=a("lJxs"),c=a("PS3Z"),_=a("fXoL");let o=(()=>{class t{constructor(t){this.http=t}static json2Brand(t){var e,a;if(!t)return null;let r=null;return t.attachment&&(r=new c.a(null===(e=t.attachment)||void 0===e?void 0:e.id,null===(a=t.attachment)||void 0===a?void 0:a.type,null==t?void 0:t.attachment.url,null==t?void 0:t.attachment.name)),new i(t.id,t.en_name,t.ar_name,t.en_description,t.ar_description,t.created_at,t.updated_at,t.attachment_id,r)}resolve(e,a){let n=new r.f;return Object.keys(e.queryParams).forEach(t=>n=n.set(t,e.queryParams[t])),this.http.get(s.a.prepareUrl("brandsFetchUrl"),{params:n}).pipe(Object(p.a)(e=>({data:e.data.map(e=>t.json2Brand(e)),total:e.total,per_page:e.per_page,current_page:e.current_page,from:e.from,to:e.to,path:e.path,first_page_url:e.first_page_url,prev_page_url:e.prev_page_url,next_page_url:e.next_page_url,last_page_url:e.last_page_url,last_page:e.last_page,filter:new Map})))}}return t.\u0275fac=function(e){return new(e||t)(_.Zb(r.b))},t.\u0275prov=_.Hb({token:t,factory:t.\u0275fac}),t})()},"3hzH":function(t,e,a){"use strict";a.d(e,"a",(function(){return s})),a.d(e,"b",(function(){return n}));var r=a("9xMI");class s{constructor(t,e,a,r){this.id=t,this.value=e,this.is_discount=r}}class n extends r.a{constructor(t,e,a,r,s,n,i,p,c,_,o,u,l,h,d,g){super(t),this.id=t,this.en_name=e,this.ar_name=a,this.en_description=r,this.ar_description=s,this.available=n,this.is_main=i,this.price_id=p,this.price=c,this.brand_id=_,this.brand=o,this.category_id=u,this.category=l,this.created_at=h,this.updated_at=d,this.attachments=g}}},"WWF+":function(t,e,a){"use strict";a.d(e,"a",(function(){return o}));var r=a("tk/3"),s=a("AytR"),n=a("9xMI"),i=a("PS3Z");class p extends n.a{constructor(t,e,a,r,s,n,p,c){super(t),this.id=t,this.en_name=e,this.ar_name=a,this.en_description=r,this.ar_description=s,this.icon=n,this.created_at=p,this.updated_at=c;const _=this.icon.toString();this.attachment=new i.a("cat_code_"+this.id,0,_,_.substr(_.lastIndexOf("/")+1))}}var c=a("lJxs"),_=a("fXoL");let o=(()=>{class t{constructor(t){this.http=t}static json2Category(t){return t?new p(t.id,t.en_name,t.ar_name,t.en_description,t.ar_description,t.icon,t.created_at,t.updated_at):null}resolve(e,a){let n=new r.f;return Object.keys(e.queryParams).forEach(t=>n=n.set(t,e.queryParams[t])),this.http.get(s.a.prepareUrl("categoriesFetchUrl"),{params:n}).pipe(Object(c.a)(e=>({data:e.data.map(e=>t.json2Category(e)),total:e.total,per_page:e.per_page,current_page:e.current_page,from:e.from,to:e.to,path:e.path,first_page_url:e.first_page_url,prev_page_url:e.prev_page_url,next_page_url:e.next_page_url,last_page_url:e.last_page_url,last_page:e.last_page,filter:new Map})))}}return t.\u0275fac=function(e){return new(e||t)(_.Zb(r.b))},t.\u0275prov=_.Hb({token:t,factory:t.\u0275fac}),t})()},mFXk:function(t,e,a){"use strict";a.d(e,"a",(function(){return _}));var r=a("tk/3"),s=a("AytR"),n=a("lJxs"),i=a("9xMI");class p extends i.a{constructor(t,e,a,r){super(t),this.id=t,this.en_name=e,this.ar_name=a,this.fees=r}}var c=a("fXoL");let _=(()=>{class t{constructor(t){this.http=t}static json2Province(t){return t?new p(t.id,t.en_name,t.ar_name,t.fees):null}resolve(e,a){let i=new r.f;return Object.keys(e.queryParams).forEach(t=>i=i.set(t,e.queryParams[t])),this.http.get(s.a.prepareUrl("provincesFetchUrl"),{params:i}).pipe(Object(n.a)(e=>({data:e.data.map(e=>t.json2Province(e)),total:e.total,per_page:e.per_page,current_page:e.current_page,from:e.from,to:e.to,path:e.path,first_page_url:e.first_page_url,prev_page_url:e.prev_page_url,next_page_url:e.next_page_url,last_page_url:e.last_page_url,last_page:e.last_page,filter:new Map})))}}return t.\u0275fac=function(e){return new(e||t)(c.Zb(r.b))},t.\u0275prov=c.Hb({token:t,factory:t.\u0275fac}),t})()},pMMm:function(t,e,a){"use strict";a.d(e,"a",(function(){return _}));var r=a("tk/3"),s=a("AytR"),n=a("9xMI");class i extends n.a{constructor(t,e,a,r,s){super(a),this.name=t,this.description=e,this.id=a,this.created_at=r,this.updated_at=s}}var p=a("lJxs"),c=a("fXoL");let _=(()=>{class t{constructor(t){this.http=t}static json2Role(t){return t?new i(t.name,t.description,t.id,t.created_at,t.updated_at):null}resolve(e,a){let n=new r.f;return Object.keys(e.queryParams).forEach(t=>n=n.set(t,e.queryParams[t])),this.http.get(s.a.prepareUrl("rolesFetchUrl"),{params:n}).pipe(Object(p.a)(e=>({data:e.data.map(e=>t.json2Role(e)),total:e.total,per_page:e.per_page,current_page:e.current_page,from:e.from,to:e.to,path:e.path,first_page_url:e.first_page_url,prev_page_url:e.prev_page_url,next_page_url:e.next_page_url,last_page_url:e.last_page_url,last_page:e.last_page,filter:new Map})))}}return t.\u0275fac=function(e){return new(e||t)(c.Zb(r.b))},t.\u0275prov=c.Hb({token:t,factory:t.\u0275fac}),t})()}}]);