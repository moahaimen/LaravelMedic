(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"7pIB":function(e,t,i){"use strict";i.d(t,"a",(function(){return p})),i.d(t,"b",(function(){return c})),i.d(t,"c",(function(){return l}));var s=i("fXoL"),n=i("ofXK");class o{constructor(e){var t;this.rawFile=e;let i=(t=e)&&(t.nodeName||t.prop&&t.attr&&t.find)?e.value:e;this["_createFrom"+("string"==typeof i?"FakePath":"Object")](i)}_createFromFakePath(e){this.lastModifiedDate=void 0,this.size=void 0,this.type="like/"+e.slice(e.lastIndexOf(".")+1).toLowerCase(),this.name=e.slice(e.lastIndexOf("/")+e.lastIndexOf("\\")+2)}_createFromObject(e){this.size=e.size,this.type=e.type,this.name=e.name}}class r{constructor(e,t,i){this.url="/",this.headers=[],this.withCredentials=!0,this.formData=[],this.isReady=!1,this.isUploading=!1,this.isUploaded=!1,this.isSuccess=!1,this.isCancel=!1,this.isError=!1,this.progress=0,this.index=void 0,this.uploader=e,this.some=t,this.options=i,this.file=new o(t),this._file=t,e.options&&(this.method=e.options.method||"POST",this.alias=e.options.itemAlias||"file"),this.url=e.options.url}upload(){try{this.uploader.uploadItem(this)}catch(e){this.uploader._onCompleteItem(this,"",0,{}),this.uploader._onErrorItem(this,"",0,{})}}cancel(){this.uploader.cancelItem(this)}remove(){this.uploader.removeFromQueue(this)}onBeforeUpload(){}onBuildForm(e){return{form:e}}onProgress(e){return{progress:e}}onSuccess(e,t,i){return{response:e,status:t,headers:i}}onError(e,t,i){return{response:e,status:t,headers:i}}onCancel(e,t,i){return{response:e,status:t,headers:i}}onComplete(e,t,i){return{response:e,status:t,headers:i}}_onBeforeUpload(){this.isReady=!0,this.isUploading=!0,this.isUploaded=!1,this.isSuccess=!1,this.isCancel=!1,this.isError=!1,this.progress=0,this.onBeforeUpload()}_onBuildForm(e){this.onBuildForm(e)}_onProgress(e){this.progress=e,this.onProgress(e)}_onSuccess(e,t,i){this.isReady=!1,this.isUploading=!1,this.isUploaded=!0,this.isSuccess=!0,this.isCancel=!1,this.isError=!1,this.progress=100,this.index=void 0,this.onSuccess(e,t,i)}_onError(e,t,i){this.isReady=!1,this.isUploading=!1,this.isUploaded=!0,this.isSuccess=!1,this.isCancel=!1,this.isError=!0,this.progress=0,this.index=void 0,this.onError(e,t,i)}_onCancel(e,t,i){this.isReady=!1,this.isUploading=!1,this.isUploaded=!1,this.isSuccess=!1,this.isCancel=!0,this.isError=!1,this.progress=0,this.index=void 0,this.onCancel(e,t,i)}_onComplete(e,t,i){this.onComplete(e,t,i),this.uploader.options.removeAfterUpload&&this.remove()}_prepareToUploading(){this.index=this.index||++this.uploader._nextIndex,this.isReady=!0}}let a=(()=>{class e{static getMimeClass(e){let t="application";return-1!==this.mime_psd.indexOf(e.type)||e.type.match("image.*")?t="image":e.type.match("video.*")?t="video":e.type.match("audio.*")?t="audio":"application/pdf"===e.type?t="pdf":-1!==this.mime_compress.indexOf(e.type)?t="compress":-1!==this.mime_doc.indexOf(e.type)?t="doc":-1!==this.mime_xsl.indexOf(e.type)?t="xls":-1!==this.mime_ppt.indexOf(e.type)&&(t="ppt"),"application"===t&&(t=this.fileTypeDetection(e.name)),t}static fileTypeDetection(e){let t={jpg:"image",jpeg:"image",tif:"image",psd:"image",bmp:"image",png:"image",nef:"image",tiff:"image",cr2:"image",dwg:"image",cdr:"image",ai:"image",indd:"image",pin:"image",cdp:"image",skp:"image",stp:"image","3dm":"image",mp3:"audio",wav:"audio",wma:"audio",mod:"audio",m4a:"audio",compress:"compress",zip:"compress",rar:"compress","7z":"compress",lz:"compress",z01:"compress",bz2:"compress",gz:"compress",pdf:"pdf",xls:"xls",xlsx:"xls",ods:"xls",mp4:"video",avi:"video",wmv:"video",mpg:"video",mts:"video",flv:"video","3gp":"video",vob:"video",m4v:"video",mpeg:"video",m2ts:"video",mov:"video",doc:"doc",docx:"doc",eps:"doc",txt:"doc",odt:"doc",rtf:"doc",ppt:"ppt",pptx:"ppt",pps:"ppt",ppsx:"ppt",odp:"ppt"},i=e.split(".");if(i.length<2)return"application";let s=i[i.length-1].toLowerCase();return void 0===t[s]?"application":t[s]}}return e.mime_doc=["application/msword","application/msword","application/vnd.openxmlformats-officedocument.wordprocessingml.document","application/vnd.openxmlformats-officedocument.wordprocessingml.template","application/vnd.ms-word.document.macroEnabled.12","application/vnd.ms-word.template.macroEnabled.12"],e.mime_xsl=["application/vnd.ms-excel","application/vnd.ms-excel","application/vnd.ms-excel","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.spreadsheetml.template","application/vnd.ms-excel.sheet.macroEnabled.12","application/vnd.ms-excel.template.macroEnabled.12","application/vnd.ms-excel.addin.macroEnabled.12","application/vnd.ms-excel.sheet.binary.macroEnabled.12"],e.mime_ppt=["application/vnd.ms-powerpoint","application/vnd.ms-powerpoint","application/vnd.ms-powerpoint","application/vnd.ms-powerpoint","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.presentationml.template","application/vnd.openxmlformats-officedocument.presentationml.slideshow","application/vnd.ms-powerpoint.addin.macroEnabled.12","application/vnd.ms-powerpoint.presentation.macroEnabled.12","application/vnd.ms-powerpoint.presentation.macroEnabled.12","application/vnd.ms-powerpoint.slideshow.macroEnabled.12"],e.mime_psd=["image/photoshop","image/x-photoshop","image/psd","application/photoshop","application/psd","zz-application/zz-winassoc-psd"],e.mime_compress=["application/x-gtar","application/x-gcompress","application/compress","application/x-tar","application/x-rar-compressed","application/octet-stream","application/x-zip-compressed","application/zip-compressed","application/x-7z-compressed","application/gzip","application/x-bzip2"],e})();class l{constructor(e){this.isUploading=!1,this.queue=[],this.progress=0,this._nextIndex=0,this.options={autoUpload:!1,isHTML5:!0,filters:[],removeAfterUpload:!1,disableMultipart:!1,formatDataFunction:e=>e._file,formatDataFunctionIsAsync:!1},this.setOptions(e),this.response=new s.n}setOptions(e){this.options=Object.assign(this.options,e),this.authToken=this.options.authToken,this.authTokenHeader=this.options.authTokenHeader||"Authorization",this.autoUpload=this.options.autoUpload,this.options.filters.unshift({name:"queueLimit",fn:this._queueLimitFilter}),this.options.maxFileSize&&this.options.filters.unshift({name:"fileSize",fn:this._fileSizeFilter}),this.options.allowedFileType&&this.options.filters.unshift({name:"fileType",fn:this._fileTypeFilter}),this.options.allowedMimeType&&this.options.filters.unshift({name:"mimeType",fn:this._mimeTypeFilter});for(let t=0;t<this.queue.length;t++)this.queue[t].url=this.options.url}addToQueue(e,t,i){let s=[];for(let o of e)s.push(o);let n=this._getFilters(i),a=this.queue.length,l=[];s.map(e=>{t||(t=this.options);let i=new o(e);if(this._isValidFile(i,n,t)){let i=new r(this,e,t);l.push(i),this.queue.push(i),this._onAfterAddingFile(i)}else this._onWhenAddingFileFailed(i,n[this._failFilterIndex],t)}),this.queue.length!==a&&(this._onAfterAddingAll(l),this.progress=this._getTotalProgress()),this._render(),this.options.autoUpload&&this.uploadAll()}removeFromQueue(e){let t=this.getIndexOfItem(e),i=this.queue[t];i.isUploading&&i.cancel(),this.queue.splice(t,1),this.progress=this._getTotalProgress()}clearQueue(){for(;this.queue.length;)this.queue[0].remove();this.progress=0}uploadItem(e){let t=this.getIndexOfItem(e),i=this.queue[t],s=this.options.isHTML5?"_xhrTransport":"_iframeTransport";i._prepareToUploading(),this.isUploading||(this.isUploading=!0,this[s](i))}cancelItem(e){let t=this.getIndexOfItem(e),i=this.queue[t];i&&i.isUploading&&(this.options.isHTML5?i._xhr:i._form).abort()}uploadAll(){let e=this.getNotUploadedItems().filter(e=>!e.isUploading);e.length&&(e.map(e=>e._prepareToUploading()),e[0].upload())}cancelAll(){this.getNotUploadedItems().map(e=>e.cancel())}isFile(e){return function(e){return File&&e instanceof File}(e)}isFileLikeObject(e){return e instanceof o}getIndexOfItem(e){return"number"==typeof e?e:this.queue.indexOf(e)}getNotUploadedItems(){return this.queue.filter(e=>!e.isUploaded)}getReadyItems(){return this.queue.filter(e=>e.isReady&&!e.isUploading).sort((e,t)=>e.index-t.index)}destroy(){}onAfterAddingAll(e){return{fileItems:e}}onBuildItemForm(e,t){return{fileItem:e,form:t}}onAfterAddingFile(e){return{fileItem:e}}onWhenAddingFileFailed(e,t,i){return{item:e,filter:t,options:i}}onBeforeUploadItem(e){return{fileItem:e}}onProgressItem(e,t){return{fileItem:e,progress:t}}onProgressAll(e){return{progress:e}}onSuccessItem(e,t,i,s){return{item:e,response:t,status:i,headers:s}}onErrorItem(e,t,i,s){return{item:e,response:t,status:i,headers:s}}onCancelItem(e,t,i,s){return{item:e,response:t,status:i,headers:s}}onCompleteItem(e,t,i,s){return{item:e,response:t,status:i,headers:s}}onCompleteAll(){}_mimeTypeFilter(e){return!(this.options.allowedMimeType&&-1===this.options.allowedMimeType.indexOf(e.type))}_fileSizeFilter(e){return!(this.options.maxFileSize&&e.size>this.options.maxFileSize)}_fileTypeFilter(e){return!(this.options.allowedFileType&&-1===this.options.allowedFileType.indexOf(a.getMimeClass(e)))}_onErrorItem(e,t,i,s){e._onError(t,i,s),this.onErrorItem(e,t,i,s)}_onCompleteItem(e,t,i,s){e._onComplete(t,i,s),this.onCompleteItem(e,t,i,s);let n=this.getReadyItems()[0];this.isUploading=!1,n?n.upload():(this.onCompleteAll(),this.progress=this._getTotalProgress(),this._render())}_headersGetter(e){return t=>t?e[t.toLowerCase()]||void 0:e}_xhrTransport(e){let t,i=this,s=e._xhr=new XMLHttpRequest;if(this._onBeforeUploadItem(e),"number"!=typeof e._file.size)throw new TypeError("The file specified is no longer valid");if(this.options.disableMultipart)t=this.options.formatDataFunction(e);else{t=new FormData,this._onBuildItemForm(e,t);const i=()=>t.append(e.alias,e._file,e.file.name);this.options.parametersBeforeFiles||i(),void 0!==this.options.additionalParameter&&Object.keys(this.options.additionalParameter).forEach(i=>{let s=this.options.additionalParameter[i];"string"==typeof s&&s.indexOf("{{file_name}}")>=0&&(s=s.replace("{{file_name}}",e.file.name)),t.append(i,s)}),this.options.parametersBeforeFiles&&i()}if(s.upload.onprogress=t=>{let i=Math.round(t.lengthComputable?100*t.loaded/t.total:0);this._onProgressItem(e,i)},s.onload=()=>{let t=this._parseHeaders(s.getAllResponseHeaders()),i=this._transformResponse(s.response,t);this["_on"+(this._isSuccessCode(s.status)?"Success":"Error")+"Item"](e,i,s.status,t),this._onCompleteItem(e,i,s.status,t)},s.onerror=()=>{let t=this._parseHeaders(s.getAllResponseHeaders()),i=this._transformResponse(s.response,t);this._onErrorItem(e,i,s.status,t),this._onCompleteItem(e,i,s.status,t)},s.onabort=()=>{let t=this._parseHeaders(s.getAllResponseHeaders()),i=this._transformResponse(s.response,t);this._onCancelItem(e,i,s.status,t),this._onCompleteItem(e,i,s.status,t)},s.open(e.method,e.url,!0),s.withCredentials=e.withCredentials,this.options.headers)for(let n of this.options.headers)s.setRequestHeader(n.name,n.value);if(e.headers.length)for(let n of e.headers)s.setRequestHeader(n.name,n.value);this.authToken&&s.setRequestHeader(this.authTokenHeader,this.authToken),s.onreadystatechange=function(){s.readyState==XMLHttpRequest.DONE&&i.response.emit(s.responseText)},this.options.formatDataFunctionIsAsync?t.then(e=>s.send(JSON.stringify(e))):s.send(t),this._render()}_getTotalProgress(e=0){if(this.options.removeAfterUpload)return e;let t=this.getNotUploadedItems().length,i=100/this.queue.length;return Math.round((t?this.queue.length-t:this.queue.length)*i+e*i/100)}_getFilters(e){if(!e)return this.options.filters;if(Array.isArray(e))return e;if("string"==typeof e){let t=e.match(/[^\s,]+/g);return this.options.filters.filter(e=>-1!==t.indexOf(e.name))}return this.options.filters}_render(){}_queueLimitFilter(){return void 0===this.options.queueLimit||this.queue.length<this.options.queueLimit}_isValidFile(e,t,i){return this._failFilterIndex=-1,!t.length||t.every(t=>(this._failFilterIndex++,t.fn.call(this,e,i)))}_isSuccessCode(e){return e>=200&&e<300||304===e}_transformResponse(e,t){return e}_parseHeaders(e){let t,i,s,n={};return e?(e.split("\n").map(e=>{s=e.indexOf(":"),t=e.slice(0,s).trim().toLowerCase(),i=e.slice(s+1).trim(),t&&(n[t]=n[t]?n[t]+", "+i:i)}),n):n}_onWhenAddingFileFailed(e,t,i){this.onWhenAddingFileFailed(e,t,i)}_onAfterAddingFile(e){this.onAfterAddingFile(e)}_onAfterAddingAll(e){this.onAfterAddingAll(e)}_onBeforeUploadItem(e){e._onBeforeUpload(),this.onBeforeUploadItem(e)}_onBuildItemForm(e,t){e._onBuildForm(t),this.onBuildItemForm(e,t)}_onProgressItem(e,t){let i=this._getTotalProgress(t);this.progress=i,e._onProgress(t),this.onProgressItem(e,t),this.onProgressAll(i),this._render()}_onSuccessItem(e,t,i,s){e._onSuccess(t,i,s),this.onSuccessItem(e,t,i,s)}_onCancelItem(e,t,i,s){e._onCancel(t,i,s),this.onCancelItem(e,t,i,s)}}let p=(()=>{class e{constructor(e){this.onFileSelected=new s.n,this.element=e}getOptions(){return this.uploader.options}getFilters(){return{}}isEmptyAfterSelection(){return!!this.element.nativeElement.attributes.multiple}onChange(){let e=this.element.nativeElement.files,t=this.getOptions(),i=this.getFilters();this.uploader.addToQueue(e,t,i),this.onFileSelected.emit(e),this.isEmptyAfterSelection()&&(this.element.nativeElement.value="")}}return e.\u0275fac=function(t){return new(t||e)(s.Kb(s.l))},e.\u0275dir=s.Fb({type:e,selectors:[["","ng2FileSelect",""]],hostBindings:function(e,t){1&e&&s.bc("change",(function(){return t.onChange()}))},inputs:{uploader:"uploader"},outputs:{onFileSelected:"onFileSelected"}}),e})(),c=(()=>{class e{}return e.\u0275mod=s.Ib({type:e}),e.\u0275inj=s.Hb({factory:function(t){return new(t||e)},imports:[[n.b]]}),e})()},PS3Z:function(e,t,i){"use strict";i.d(t,"a",(function(){return s}));class s{constructor(e,t,i,s,n){this.id=e,this.type=t,this.url=i,this.name=s}}},QGA0:function(e,t,i){"use strict";i.d(t,"a",(function(){return g}));var s=i("fXoL"),n=i("PS3Z"),o=i("AytR"),r=i("7pIB"),a=i("lGQG"),l=i("OC8m"),p=i("ofXK"),c=i("1kSV");function d(e,t){if(1&e){const e=s.Rb();s.Qb(0,"tr"),s.Qb(1,"td",18),s.Qb(2,"strong"),s.Cc(3),s.Pb(),s.Pb(),s.Qb(4,"td"),s.Cc(5),s.Pb(),s.Qb(6,"td",19),s.Qb(7,"i",20),s.bc("click",(function(){s.tc(e);const i=t.$implicit;return s.dc(2).delete(i)})),s.Pb(),s.Pb(),s.Pb()}if(2&e){const e=t.$implicit;s.xb(3),s.Dc(null==e?null:e.name),s.xb(2),s.Dc(0==(null==e?null:e.type)?"Image":"Video")}}function h(e,t){if(1&e&&(s.Qb(0,"div",0),s.Qb(1,"div",7),s.Qb(2,"div",8),s.Qb(3,"label",9),s.Cc(4,"Current attachments"),s.Pb(),s.Qb(5,"div",10),s.Qb(6,"div",11),s.Qb(7,"table",12),s.Qb(8,"thead"),s.Qb(9,"tr"),s.Qb(10,"th",13),s.Cc(11),s.Pb(),s.Pb(),s.Qb(12,"tr"),s.Qb(13,"th",14),s.Cc(14,"Name"),s.Pb(),s.Qb(15,"th",15),s.Cc(16,"Type"),s.Pb(),s.Qb(17,"th",16),s.Cc(18,"\xa0"),s.Pb(),s.Pb(),s.Pb(),s.Qb(19,"tbody"),s.Ac(20,d,8,2,"tr",17),s.Pb(),s.Pb(),s.Pb(),s.Pb(),s.Pb(),s.Pb(),s.Pb()),2&e){const e=s.dc();s.xb(11),s.Ec(" Selected: ",null==e.attachments?null:e.attachments.length," "),s.xb(9),s.kc("ngForOf",e.attachments)}}function u(e,t){if(1&e&&(s.Qb(0,"td"),s.Cc(1),s.ec(2,"number"),s.Pb()),2&e){const e=s.dc().$implicit;s.xb(1),s.Ec(" ",s.gc(2,1,(null==e||null==e.file?null:e.file.size)/1024/1024,".2")," MB ")}}function m(e,t){if(1&e&&(s.Qb(0,"tr"),s.Qb(1,"td"),s.Qb(2,"strong"),s.Cc(3),s.Pb(),s.Pb(),s.Ac(4,u,3,4,"td",28),s.Pb()),2&e){const e=t.$implicit,i=s.dc(2);s.xb(3),s.Dc(null==e||null==e.file?null:e.file.name),s.xb(1),s.kc("ngIf",i.uploader.options.isHTML5)}}function f(e,t){if(1&e){const e=s.Rb();s.Qb(0,"div",0),s.Qb(1,"div",7),s.Qb(2,"div",8),s.Qb(3,"label",21),s.Cc(4,"Upload queue"),s.Pb(),s.Qb(5,"div",10),s.Qb(6,"div",11),s.Qb(7,"table",12),s.Qb(8,"thead"),s.Qb(9,"tr"),s.Qb(10,"th",22),s.Cc(11),s.Pb(),s.Pb(),s.Qb(12,"tr"),s.Qb(13,"th"),s.Cc(14,"Name"),s.Pb(),s.Qb(15,"th"),s.Cc(16,"Size"),s.Pb(),s.Pb(),s.Pb(),s.Qb(17,"tbody"),s.Ac(18,m,5,2,"tr",17),s.Pb(),s.Pb(),s.Pb(),s.Pb(),s.Pb(),s.Qb(19,"div",8),s.Qb(20,"label",23),s.Cc(21," Queue progress "),s.Pb(),s.Qb(22,"div",10),s.Lb(23,"ngb-progressbar",24),s.Pb(),s.Pb(),s.Qb(24,"div",8),s.Qb(25,"button",25),s.bc("click",(function(){return s.tc(e),s.dc().uploader.uploadAll()})),s.Cc(26," Upload "),s.Pb(),s.Qb(27,"button",26),s.bc("click",(function(){return s.tc(e),s.dc().uploader.cancelAll()})),s.Cc(28," Cancel "),s.Pb(),s.Qb(29,"button",27),s.bc("click",(function(){return s.tc(e),s.dc().uploader.clearQueue()})),s.Cc(30," Remove "),s.Pb(),s.Pb(),s.Pb(),s.Pb()}if(2&e){const e=s.dc();s.xb(11),s.Ec("Queue length: ",null==e.uploader||null==e.uploader.queue?null:e.uploader.queue.length,""),s.xb(7),s.kc("ngForOf",e.uploader.queue),s.xb(5),s.kc("value",e.uploader.progress),s.xb(2),s.kc("disabled",!e.uploader.getNotUploadedItems().length),s.xb(2),s.kc("disabled",!e.uploader.isUploading),s.xb(2),s.kc("disabled",!e.uploader.queue.length)}}let g=(()=>{class e{constructor(e,t){this.auth=e,this.notifier=t,this.valueChange=new s.n}get value(){var e;return null===(e=this.attachments)||void 0===e?void 0:e.map(e=>Number.parseInt(e.id.toString(),10))}ngOnInit(){this.attachments&&Array.isArray(this.attachments)||(this.attachments=[]),this.initializeUploader()}initializeUploader(){this.uploader=new r.c({url:o.a.prepareUrl("attachmentUploadUrl"),authToken:"Bearer "+this.auth.appUser.token,allowedFileType:["image","video"],autoUpload:!1,removeAfterUpload:!0,maxFileSize:10485760}),this.hasBaseDropZoneOver=!1,this.hasAnotherDropZoneOver=!1,this.uploader.onAfterAddingFile=e=>{this.attachments.length+this.uploader.queue.length>this.limit&&(this.uploader.removeFromQueue(e),this.notifier.warning("You cannot add more than "+this.limit+" attachments"))},this.uploader.onBuildItemForm=(e,t)=>{e.withCredentials=!1,t.append("type",e.file.type.split("/")[0])},this.uploader.onSuccessItem=(e,t,i,s)=>{const o=JSON.parse(t),r=new n.a(o.id,o.type,o.url,o.name);this.attachments.push(r),this.notifier.success("Attachment uploaded successfully!","Uploader"),this.valueChange.next({ids:this.value,entities:this.attachments})},this.uploader.onErrorItem=(e,t)=>{this.notifier.error("Failed to upload attachment","Uploader")}}fileOverBase(e){this.hasBaseDropZoneOver=e}fileOverAnother(e){this.hasAnotherDropZoneOver=e}delete(e){console.log(this.attachments),this.attachments.splice(this.attachments.indexOf(e),1),this.valueChange.next({ids:this.value,entities:this.attachments})}}return e.\u0275fac=function(t){return new(t||e)(s.Kb(a.a),s.Kb(l.a))},e.\u0275cmp=s.Eb({type:e,selectors:[["app-attachments-uploader"]],inputs:{attachments:"attachments",limit:"limit"},outputs:{valueChange:"valueChange"},decls:11,vars:4,consts:[[1,"row"],[1,"col-md-12","mb-0"],[1,"btn","btn-md","btn-pill","btn-secondary","px-3",3,"disabled","click"],[1,"folder","outline","icon"],["hidden","","type","file","ng2FileSelect","","multiple","",3,"uploader"],["fileChoser",""],["class","row",4,"ngIf"],[1,"col-12"],[1,"form-group"],[1,"font-bold"],[1,"form-control"],[1,"table-responsive","overflow-hidden"],[1,"table","table-stripped"],["colspan","5",1,"text-danger"],["colspan","3",1,"text-info"],[1,"text-info"],[1,"text-info","text-right"],[4,"ngFor","ngForOf"],["colspan","3"],[1,"text-right","actions"],[1,"nc-icon","nc-simple-remove",3,"click"],[1,"h5"],["colspan","5"],[1,"h6"],[3,"value"],[1,"btn","btn-sm","btn-success",3,"disabled","click"],[1,"btn","btn-sm","btn-warning",3,"disabled","click"],[1,"btn","btn-sm","btn-danger",3,"disabled","click"],[4,"ngIf"]],template:function(e,t){if(1&e){const e=s.Rb();s.Qb(0,"div",0),s.Qb(1,"div",1),s.Qb(2,"button",2),s.bc("click",(function(){return s.tc(e),s.sc(8).click()})),s.Lb(3,"i",3),s.Cc(4," Pick Files "),s.Pb(),s.Qb(5,"div"),s.Cc(6,"\xa0"),s.Pb(),s.Lb(7,"input",4,5),s.Pb(),s.Pb(),s.Ac(9,h,21,2,"div",6),s.Ac(10,f,31,6,"div",6)}2&e&&(s.xb(2),s.kc("disabled",(null==t.attachments?null:t.attachments.length)===t.limit),s.xb(5),s.kc("uploader",t.uploader),s.xb(2),s.kc("ngIf",(null==t.attachments?null:t.attachments.length)>0),s.xb(1),s.kc("ngIf",(null==t.uploader||null==t.uploader.queue?null:t.uploader.queue.length)>0))},directives:[r.a,p.l,p.k,c.l],pipes:[p.d],styles:["[_nghost-%COMP%]   .actions[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:20px;margin-right:0;line-height:20px;width:25px;text-align:center;opacity:.8;cursor:pointer}[_nghost-%COMP%]   .actions[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover{opacity:1}"]}),e})()},bz7F:function(e,t,i){"use strict";i.d(t,"a",(function(){return h}));var s=i("fXoL"),n=i("ofXK"),o=i("1kSV");function r(e,t){if(1&e&&s.Lb(0,"img",7),2&e){const e=s.dc(2).$implicit;s.kc("src",e.url,s.vc)("alt",e.name)}}function a(e,t){if(1&e&&(s.Qb(0,"video",8),s.Lb(1,"source",9),s.Pb()),2&e){const e=s.dc(2).$implicit;s.xb(1),s.kc("src",e.url,s.vc)}}function l(e,t){if(1&e&&(s.Qb(0,"div",4),s.Ac(1,r,1,2,"img",5),s.Ac(2,a,2,1,"video",6),s.Pb()),2&e){const e=s.dc().$implicit;s.xb(1),s.kc("ngIf",0===e.type),s.xb(1),s.kc("ngIf",1===e.type)}}function p(e,t){1&e&&s.Ac(0,l,3,2,"ng-template",3)}function c(e,t){if(1&e&&(s.Qb(0,"ngb-carousel"),s.Ac(1,p,1,0,void 0,2),s.Pb()),2&e){const e=s.dc();s.xb(1),s.kc("ngForOf",e.attachments)}}function d(e,t){1&e&&(s.Qb(0,"ngb-alert",10),s.Qb(1,"h6"),s.Cc(2,"Problem!"),s.Pb(),s.Qb(3,"ul"),s.Qb(4,"li"),s.Cc(5,"Your attachments list is empty"),s.Pb(),s.Qb(6,"li"),s.Cc(7,"Something went wrong while initializing."),s.Pb(),s.Pb(),s.Pb()),2&e&&s.kc("dismissible",!1)}let h=(()=>{class e{constructor(){}ngOnInit(){this.attachments=Array.isArray(this.attachments)?this.attachments.filter(e=>null!=e&&void 0!==e):[]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Eb({type:e,selectors:[["app-attachments-viewer"]],inputs:{attachments:"attachments"},decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["message",""],[4,"ngFor","ngForOf"],["ngbSlide",""],[1,"picsum-img-wrapper"],[3,"src","alt",4,"ngIf"],["controls","",4,"ngIf"],[3,"src","alt"],["controls",""],[3,"src"],["type","danger",3,"dismissible"]],template:function(e,t){if(1&e&&(s.Ac(0,c,2,1,"ngb-carousel",0),s.Ac(1,d,8,1,"ng-template",null,1,s.Bc)),2&e){const e=s.sc(2);s.kc("ngIf",t.attachments&&t.attachments.length>0)("ngIfElse",e)}},directives:[n.l,o.c,n.k,o.m,o.b],styles:["[_nghost-%COMP%]   ngb-carousel[_ngcontent-%COMP%]{outline:none}[_nghost-%COMP%]   .picsum-img-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], [_nghost-%COMP%]   .picsum-img-wrapper[_ngcontent-%COMP%]   video[_ngcontent-%COMP%], [_nghost-%COMP%]   ngb-carousel[_ngcontent-%COMP%]{width:100%;height:400px}"]}),e})()},nHkx:function(e,t,i){"use strict";i.d(t,"a",(function(){return l}));var s=i("ofXK"),n=i("1kSV"),o=i("3Pt+"),r=i("7pIB"),a=i("fXoL");let l=(()=>{class e{}return e.\u0275mod=a.Ib({type:e}),e.\u0275inj=a.Hb({factory:function(t){return new(t||e)},imports:[[s.b,n.i,o.o,r.b]]}),e})()}}]);