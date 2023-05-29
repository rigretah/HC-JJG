/**handles:swv,contact-form-7,pum-admin-bar**/
(()=>{"use strict";var s={d:(t,e)=>{for(var i in e)s.o(e,i)&&!s.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},a={},t;function e(t){if(this.formData={},this.tree={},!(t instanceof FormData))return this;this.formData=t;const s=()=>{const i=new Map;return i.largestIndex=0,i.set=function(t,e){""===t?t=i.largestIndex++:/^[0-9]+$/.test(t)&&(t=parseInt(t),i.largestIndex<=t&&(i.largestIndex=t+1)),Map.prototype.set.call(i,t,e)},i};this.tree=s();const e=/^(?<name>[a-z][-a-z0-9_:]*)(?<array>(?:\[(?:[a-z][-a-z0-9_:]*|[0-9]*)\])*)/i;for(const[t,i]of this.formData){const o=t.match(e);if(o)if(""===o.groups.array)this.tree.set(o.groups.name,i);else{const t=[...o.groups.array.matchAll(/\[([a-z][-a-z0-9_:]*|[0-9]*)\]/gi)].map(([t,e])=>e);t.unshift(o.groups.name);const e=t.pop();t.reduce((t,e)=>{if(/^[0-9]+$/.test(e)&&(e=parseInt(e)),t.get(e)instanceof Map)return t.get(e);var i=s();return t.set(e,i),i},this.tree).set(e,i)}}}s.r(a),s.d(a,{date:()=>m,email:()=>n,enum:()=>h,file:()=>f,maxdate:()=>A,maxfilesize:()=>$,maxitems:()=>v,maxlength:()=>w,maxnumber:()=>y,mindate:()=>b,minfilesize:()=>z,minitems:()=>u,minlength:()=>g,minnumber:()=>x,number:()=>d,required:()=>i,requiredfile:()=>o,tel:()=>c,url:()=>l}),e.prototype.entries=function(){return this.tree.entries()},e.prototype.get=function(t){return this.tree.get(t)},e.prototype.getAll=function(t){if(!this.has(t))return[];const o=t=>{const e=[];if(t instanceof Map)for(var[i,s]of t)e.push(...o(s));else""!==t&&e.push(t);return e};return o(this.get(t))},e.prototype.has=function(t){return this.tree.has(t)},e.prototype.keys=function(){return this.tree.keys()},e.prototype.values=function(){return this.tree.values()};const r=e;function p({rule:t,field:e,error:i,...s}){this.rule=t,this.field=e,this.error=i,this.properties=s}const i=function(t){if(0===t.getAll(this.field).length)throw new p(this)},o=function(t){if(0===t.getAll(this.field).length)throw new p(this)},n=function(t){if(!t.getAll(this.field).every(t=>{if((t=t.trim()).length<6)return!1;if(-1===t.indexOf("@",1))return!1;if(t.indexOf("@")!==t.lastIndexOf("@"))return!1;const[e,i]=t.split("@",2);if(!/^[a-zA-Z0-9!#$%&\'*+\/=?^_`{|}~\.-]+$/.test(e))return!1;if(/\.{2,}/.test(i))return!1;if(/(?:^[ \t\n\r\0\x0B.]|[ \t\n\r\0\x0B.]$)/.test(i))return!1;var t=i.split(".");if(t.length<2)return!1;for(const s of t){if(/(?:^[ \t\n\r\0\x0B-]|[ \t\n\r\0\x0B-]$)/.test(s))return!1;if(!/^[a-z0-9-]+$/i.test(s))return!1}return!0}))throw new p(this)},l=function(t){const e=t.getAll(this.field);if(!e.every(t=>{if(""===(t=t.trim()))return!1;try{return-1!==["http","https","ftp","ftps","mailto","news","irc","irc6","ircs","gopher","nntp","feed","telnet","mms","rtsp","sms","svn","tel","fax","xmpp","webcal","urn"].indexOf(new URL(t).protocol.replace(/:$/,""))}catch{return!1}}))throw new p(this)},c=function(t){if(!t.getAll(this.field).every(t=>(t=(t=t.trim()).replaceAll(/[()/.*#\s-]+/g,""),/^[+]?[0-9]+$/.test(t))))throw new p(this)},d=function(t){if(!t.getAll(this.field).every(t=>(t=t.trim(),!!/^[-]?[0-9]+(?:[eE][+-]?[0-9]+)?$/.test(t)||!!/^[-]?(?:[0-9]+)?[.][0-9]+(?:[eE][+-]?[0-9]+)?$/.test(t))))throw new p(this)},m=function(t){if(!t.getAll(this.field).every(t=>/^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(t.trim())))throw new p(this)},f=function(t){if(!t.getAll(this.field).every(e=>e instanceof File&&this.accept?.some(t=>/^\.[a-z0-9]+$/i.test(t)?e.name.toLowerCase().endsWith(t.toLowerCase()):(t=>{const e=[],i=t.match(/^(?<toplevel>[a-z]+)\/(?<sub>[*]|[a-z0-9.+-]+)$/i);if(i){const t=i.groups.toplevel.toLowerCase(),n=i.groups.sub.toLowerCase();for(var[s,o]of(()=>{const t=new Map;return t.set("jpg|jpeg|jpe","image/jpeg"),t.set("gif","image/gif"),t.set("png","image/png"),t.set("bmp","image/bmp"),t.set("tiff|tif","image/tiff"),t.set("webp","image/webp"),t.set("ico","image/x-icon"),t.set("heic","image/heic"),t.set("asf|asx","video/x-ms-asf"),t.set("wmv","video/x-ms-wmv"),t.set("wmx","video/x-ms-wmx"),t.set("wm","video/x-ms-wm"),t.set("avi","video/avi"),t.set("divx","video/divx"),t.set("flv","video/x-flv"),t.set("mov|qt","video/quicktime"),t.set("mpeg|mpg|mpe","video/mpeg"),t.set("mp4|m4v","video/mp4"),t.set("ogv","video/ogg"),t.set("webm","video/webm"),t.set("mkv","video/x-matroska"),t.set("3gp|3gpp","video/3gpp"),t.set("3g2|3gp2","video/3gpp2"),t.set("txt|asc|c|cc|h|srt","text/plain"),t.set("csv","text/csv"),t.set("tsv","text/tab-separated-values"),t.set("ics","text/calendar"),t.set("rtx","text/richtext"),t.set("css","text/css"),t.set("htm|html","text/html"),t.set("vtt","text/vtt"),t.set("dfxp","application/ttaf+xml"),t.set("mp3|m4a|m4b","audio/mpeg"),t.set("aac","audio/aac"),t.set("ra|ram","audio/x-realaudio"),t.set("wav","audio/wav"),t.set("ogg|oga","audio/ogg"),t.set("flac","audio/flac"),t.set("mid|midi","audio/midi"),t.set("wma","audio/x-ms-wma"),t.set("wax","audio/x-ms-wax"),t.set("mka","audio/x-matroska"),t.set("rtf","application/rtf"),t.set("js","application/javascript"),t.set("pdf","application/pdf"),t.set("swf","application/x-shockwave-flash"),t.set("class","application/java"),t.set("tar","application/x-tar"),t.set("zip","application/zip"),t.set("gz|gzip","application/x-gzip"),t.set("rar","application/rar"),t.set("7z","application/x-7z-compressed"),t.set("exe","application/x-msdownload"),t.set("psd","application/octet-stream"),t.set("xcf","application/octet-stream"),t.set("doc","application/msword"),t.set("pot|pps|ppt","application/vnd.ms-powerpoint"),t.set("wri","application/vnd.ms-write"),t.set("xla|xls|xlt|xlw","application/vnd.ms-excel"),t.set("mdb","application/vnd.ms-access"),t.set("mpp","application/vnd.ms-project"),t.set("docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"),t.set("docm","application/vnd.ms-word.document.macroEnabled.12"),t.set("dotx","application/vnd.openxmlformats-officedocument.wordprocessingml.template"),t.set("dotm","application/vnd.ms-word.template.macroEnabled.12"),t.set("xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"),t.set("xlsm","application/vnd.ms-excel.sheet.macroEnabled.12"),t.set("xlsb","application/vnd.ms-excel.sheet.binary.macroEnabled.12"),t.set("xltx","application/vnd.openxmlformats-officedocument.spreadsheetml.template"),t.set("xltm","application/vnd.ms-excel.template.macroEnabled.12"),t.set("xlam","application/vnd.ms-excel.addin.macroEnabled.12"),t.set("pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"),t.set("pptm","application/vnd.ms-powerpoint.presentation.macroEnabled.12"),t.set("ppsx","application/vnd.openxmlformats-officedocument.presentationml.slideshow"),t.set("ppsm","application/vnd.ms-powerpoint.slideshow.macroEnabled.12"),t.set("potx","application/vnd.openxmlformats-officedocument.presentationml.template"),t.set("potm","application/vnd.ms-powerpoint.template.macroEnabled.12"),t.set("ppam","application/vnd.ms-powerpoint.addin.macroEnabled.12"),t.set("sldx","application/vnd.openxmlformats-officedocument.presentationml.slide"),t.set("sldm","application/vnd.ms-powerpoint.slide.macroEnabled.12"),t.set("onetoc|onetoc2|onetmp|onepkg","application/onenote"),t.set("oxps","application/oxps"),t.set("xps","application/vnd.ms-xpsdocument"),t.set("odt","application/vnd.oasis.opendocument.text"),t.set("odp","application/vnd.oasis.opendocument.presentation"),t.set("ods","application/vnd.oasis.opendocument.spreadsheet"),t.set("odg","application/vnd.oasis.opendocument.graphics"),t.set("odc","application/vnd.oasis.opendocument.chart"),t.set("odb","application/vnd.oasis.opendocument.database"),t.set("odf","application/vnd.oasis.opendocument.formula"),t.set("wp|wpd","application/wordperfect"),t.set("key","application/vnd.apple.keynote"),t.set("numbers","application/vnd.apple.numbers"),t.set("pages","application/vnd.apple.pages"),t})())("*"===n&&o.startsWith(t+"/")||o===i[0])&&e.push(...s.split("|"))}return e})(t).some(t=>(t="."+t.trim(),e.name.toLowerCase().endsWith(t.toLowerCase()))))))throw new p(this)},h=function(t){if(!t.getAll(this.field).every(e=>this.accept?.some(t=>e===String(t))))throw new p(this)},u=function(t){if(t.getAll(this.field).length<parseInt(this.threshold))throw new p(this)},v=function(t){var t=t.getAll(this.field);if(parseInt(this.threshold)<t.length)throw new p(this)},g=function(t){const e=t.getAll(this.field);let i=0;if(e.forEach(t=>{"string"==typeof t&&(i+=t.length)}),0!==i&&i<parseInt(this.threshold))throw new p(this)},w=function(t){const e=t.getAll(this.field);let i=0;if(e.forEach(t=>{"string"==typeof t&&(i+=t.length)}),parseInt(this.threshold)<i)throw new p(this)},x=function(t){if(!t.getAll(this.field).every(t=>!(parseFloat(t)<parseFloat(this.threshold))))throw new p(this)},y=function(t){if(!t.getAll(this.field).every(t=>!(parseFloat(this.threshold)<parseFloat(t))))throw new p(this)},b=function(t){if(!t.getAll(this.field).every(t=>(t=t.trim(),!(/^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(t)&&/^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(this.threshold)&&t<this.threshold))))throw new p(this)},A=function(t){if(!t.getAll(this.field).every(t=>(t=t.trim(),!(/^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(t)&&/^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(this.threshold)&&this.threshold<t))))throw new p(this)},z=function(t){const e=t.getAll(this.field);let i=0;if(e.forEach(t=>{t instanceof File&&(i+=t.size)}),i<parseInt(this.threshold))throw new p(this)},$=function(t){const e=t.getAll(this.field);let i=0;if(e.forEach(t=>{t instanceof File&&(i+=t.size)}),parseInt(this.threshold)<i)throw new p(this)};window.swv={validators:a,validate:(t,e,i={})=>{const s=(t.rules??[]).filter(({rule:t,...e})=>"function"==typeof a[t]&&("function"!=typeof a[t].matches||a[t].matches(e,i)));if(!s.length)return new Map;const o=new r(e),n=s.reduce((e,t)=>{const{rule:i,...s}=t;if(e.get(s.field)?.error)return e;try{a[i].call({rule:i,...s},o)}catch(t){if(t instanceof p)return e.set(s.field,t)}return e},new Map);for(const t of o.keys())n.has(t)||n.set(t,{validInputs:o.getAll(t)});return n},...null!==(t=window.swv)&&void 0!==t?t:{}}})();
(()=>{"use strict";const c=e=>Math.abs(parseInt(e,10)),d=(e,t)=>{const a=new Map([["init","init"],["validation_failed","invalid"],["acceptance_missing","unaccepted"],["spam","spam"],["aborted","aborted"],["mail_sent","sent"],["mail_failed","failed"],["submitting","submitting"],["resetting","resetting"],["validating","validating"],["payment_required","payment-required"]]);a.has(t)&&(t=a.get(t)),Array.from(a.values()).includes(t)||(t=`custom-${t=(t=t.replace(/[^0-9a-z]+/i," ").trim()).replace(/\s+/,"-")}`);var r=e.getAttribute("data-status");return e.wpcf7.status=t,e.setAttribute("data-status",t),e.classList.add(t),r&&r!==t&&e.classList.remove(r),t},n=(e,t,a)=>{var a=new CustomEvent(`wpcf7${t}`,{bubbles:!0,detail:a});(e="string"==typeof e?document.querySelector(e):e).dispatchEvent(a)},o=e=>{const{root:u,namespace:f="contact-form-7/v1"}=wpcf7.api;return t.reduceRight((t,a)=>e=>a(e,t),e=>{let t,a,{url:r,path:n,endpoint:o,headers:c,body:s,data:i,...l}=e;"string"==typeof o&&(t=f.replace(/^\/|\/$/g,""),a=o.replace(/^\//,""),n=a?t+"/"+a:t),"string"==typeof n&&(-1!==u.indexOf("?")&&(n=n.replace("?","&")),n=n.replace(/^\//,""),r=u+n),c={Accept:"application/json, */*;q=0.1",...c},delete c["X-WP-Nonce"],i&&(s=JSON.stringify(i),c["Content-Type"]="application/json");const d={code:"fetch_error",message:"You are probably offline."},p={code:"invalid_json",message:"The response is not a valid JSON response."};return window.fetch(r||n||window.location.href,{...l,headers:c,body:s}).then(e=>Promise.resolve(e).then(e=>{if(200<=e.status&&e.status<300)return e;throw e}).then(e=>{if(204===e.status)return null;if(e&&e.json)return e.json().catch(()=>{throw p});throw p}),()=>{throw d})})(e)},t=[];function a(r){var e,e;let n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};const{target:t,scope:o=r,...a}=n;if(void 0!==(null===(e=r.wpcf7)||void 0===e?void 0:e.schema)){const c={...r.wpcf7.schema};if(void 0!==t){if(!r.contains(t))return;if(!t.closest(".wpcf7-form-control-wrap[data-name]"))return;if(t.closest(".novalidate"))return}const s=new FormData,i=[];for(const r of o.querySelectorAll(".wpcf7-form-control-wrap"))if(!r.closest(".novalidate")&&(r.querySelectorAll(":where( input, textarea, select ):enabled").forEach(e=>{if(e.name)switch(e.type){case"button":case"image":case"reset":case"submit":break;case"checkbox":case"radio":e.checked&&s.append(e.name,e.value);break;case"select-multiple":for(const t of e.selectedOptions)s.append(e.name,t.value);break;case"file":for(const a of e.files)s.append(e.name,a);break;default:s.append(e.name,e.value)}}),r.dataset.name&&(i.push(r.dataset.name),r.setAttribute("data-under-validation","1"),r.contains(t))))break;c.rules=(null!==(e=c.rules)&&void 0!==e?e:[]).filter(e=>{var{field:e}=e;return i.includes(e)});const l=r.getAttribute("data-status");Promise.resolve(d(r,"validating")).then(e=>{if(void 0!==swv){const e=swv.validate(c,s,n);for(const[t,{error:a,validInputs:n}]of e)u(r,t),void 0!==a&&p(r,t,a,{scope:o}),f(r,t,null!=n?n:[])}}).finally(()=>{d(r,l),r.querySelectorAll(".wpcf7-form-control-wrap[data-under-validation]").forEach(e=>{e.removeAttribute("data-under-validation")})})}}o.use=e=>{t.unshift(e)};const p=(a,e,r,t)=>{var t;const{scope:n=a,...o}=null!=t?t:{},c=`${null===(t=a.wpcf7)||void 0===t?void 0:t.unitTag}-ve-${e}`.replaceAll(/[^0-9a-z_-]+/gi,""),s=a.querySelector(`.wpcf7-form-control-wrap[data-name="${e}"] .wpcf7-form-control`);(()=>{const e=document.createElement("li");e.setAttribute("id",c),s&&s.id?e.insertAdjacentHTML("beforeend",`<a href="#${s.id}">${r}</a>`):e.insertAdjacentText("beforeend",r),a.wpcf7.parent.querySelector(".screen-reader-response ul").appendChild(e)})(),n.querySelectorAll(`.wpcf7-form-control-wrap[data-name="${e}"]`).forEach(e=>{if("validating"!==a.getAttribute("data-status")||e.dataset.underValidation){const t=document.createElement("span");t.classList.add("wpcf7-not-valid-tip"),t.setAttribute("aria-hidden","true"),t.insertAdjacentText("beforeend",r),e.appendChild(t),e.querySelectorAll("[aria-invalid]").forEach(e=>{e.setAttribute("aria-invalid","true")}),e.querySelectorAll(".wpcf7-form-control").forEach(e=>{e.classList.add("wpcf7-not-valid"),e.setAttribute("aria-describedby",c),"function"==typeof e.setCustomValidity&&e.setCustomValidity(r),e.closest(".use-floating-validation-tip")&&(e.addEventListener("focus",e=>{t.setAttribute("style","display: none")}),t.addEventListener("click",e=>{t.setAttribute("style","display: none")}))})}})},u=(e,t)=>{var a,a,a=`${null===(a=e.wpcf7)||void 0===a?void 0:a.unitTag}-ve-${t}`.replaceAll(/[^0-9a-z_-]+/gi,"");null===(a=e.wpcf7.parent.querySelector(`.screen-reader-response ul li#${a}`))||void 0===a||a.remove(),e.querySelectorAll(`.wpcf7-form-control-wrap[data-name="${t}"]`).forEach(e=>{var t;null===(t=e.querySelector(".wpcf7-not-valid-tip"))||void 0===t||t.remove(),e.querySelectorAll("[aria-invalid]").forEach(e=>{e.setAttribute("aria-invalid","false")}),e.querySelectorAll(".wpcf7-form-control").forEach(e=>{e.removeAttribute("aria-describedby"),e.classList.remove("wpcf7-not-valid"),"function"==typeof e.setCustomValidity&&e.setCustomValidity("")})})},f=(e,r,t)=>{e.querySelectorAll(`[data-reflection-of="${r}"]`).forEach(a=>{if("output"===a.tagName.toLowerCase()){const r=a;0===t.length&&t.push(r.dataset.default),t.slice(0,1).forEach(e=>{e instanceof File&&(e=e.name),r.textContent=e})}else a.querySelectorAll("output").forEach(e=>{e.hasAttribute("data-default")?0===t.length?e.removeAttribute("hidden"):e.setAttribute("hidden","hidden"):e.remove()}),t.forEach(e=>{e instanceof File&&(e=e.name);const t=document.createElement("output");t.setAttribute("name",r),t.textContent=e,a.appendChild(t)})})};function r(a){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};if(wpcf7.blocked)return s(a),void d(a,"submitting");const t=new FormData(a);e.submitter&&e.submitter.name&&t.append(e.submitter.name,e.submitter.value);const r={contactFormId:a.wpcf7.id,pluginVersion:a.wpcf7.pluginVersion,contactFormLocale:a.wpcf7.locale,unitTag:a.wpcf7.unitTag,containerPostId:a.wpcf7.containerPost,status:a.wpcf7.status,inputs:Array.from(t,e=>{const t=e[0],a=e[1];return!t.match(/^_/)&&{name:t,value:a}}).filter(e=>!1!==e),formData:t};o({endpoint:`contact-forms/${a.wpcf7.id}/feedback`,method:"POST",body:t,wpcf7:{endpoint:"feedback",form:a,detail:r}}).then(e=>{var t=d(a,e.status);return r.status=e.status,r.apiResponse=e,["invalid","unaccepted","spam","aborted"].includes(t)?n(a,t,r):["sent","failed"].includes(t)&&n(a,`mail${t}`,r),n(a,"submit",r),e}).then(t=>{t.posted_data_hash&&(a.querySelector('input[name="_wpcf7_posted_data_hash"]').value=t.posted_data_hash),"mail_sent"===t.status&&(a.reset(),a.wpcf7.resetOnMailSent=!0),t.invalid_fields&&t.invalid_fields.forEach(e=>{p(a,e.field,e.message)}),a.wpcf7.parent.querySelector('.screen-reader-response [role="status"]').insertAdjacentText("beforeend",t.message),a.querySelectorAll(".wpcf7-response-output").forEach(e=>{e.innerText=t.message})}).catch(e=>console.error(e))}o.use((e,t)=>{if(e.wpcf7&&"feedback"===e.wpcf7.endpoint){const{form:t,detail:a}=e.wpcf7;s(t),n(t,"beforesubmit",a),d(t,"submitting")}return t(e)});const s=t=>{t.querySelectorAll(".wpcf7-form-control-wrap").forEach(e=>{e.dataset.name&&u(t,e.dataset.name)}),t.wpcf7.parent.querySelector('.screen-reader-response [role="status"]').innerText="",t.querySelectorAll(".wpcf7-response-output").forEach(e=>{e.innerText=""})};function i(t){const e=new FormData(t),a={contactFormId:t.wpcf7.id,pluginVersion:t.wpcf7.pluginVersion,contactFormLocale:t.wpcf7.locale,unitTag:t.wpcf7.unitTag,containerPostId:t.wpcf7.containerPost,status:t.wpcf7.status,inputs:Array.from(e,e=>{const t=e[0],a=e[1];return!t.match(/^_/)&&{name:t,value:a}}).filter(e=>!1!==e),formData:e};o({endpoint:`contact-forms/${t.wpcf7.id}/refill`,method:"GET",wpcf7:{endpoint:"refill",form:t,detail:a}}).then(e=>{t.wpcf7.resetOnMailSent?(delete t.wpcf7.resetOnMailSent,d(t,"mail_sent")):d(t,"init"),a.apiResponse=e,n(t,"reset",a)}).catch(e=>console.error(e))}o.use((e,t)=>{if(e.wpcf7&&"refill"===e.wpcf7.endpoint){const{form:t,detail:a}=e.wpcf7;s(t),d(t,"resetting")}return t(e)});const l=(e,t)=>{for(const a in t){const r=t[a];e.querySelectorAll(`input[name="${a}"]`).forEach(e=>{e.value=""}),e.querySelectorAll(`img.wpcf7-captcha-${a.replaceAll(":","")}`).forEach(e=>{e.setAttribute("src",r)});const n=/([0-9]+)\.(png|gif|jpeg)$/.exec(r);n&&e.querySelectorAll(`input[name="_wpcf7_captcha_challenge_${a}"]`).forEach(e=>{e.value=n[1]})}},m=(e,t)=>{for(const a in t){const r=t[a][0],n=t[a][1];e.querySelectorAll(`.wpcf7-form-control-wrap[data-name="${a}"]`).forEach(e=>{e.querySelector(`input[name="${a}"]`).value="",e.querySelector(".wpcf7-quiz-label").textContent=r,e.querySelector(`input[name="_wpcf7_quiz_answer_${a}"]`).value=n})}};function w(t){const e=new FormData(t);var a,r,n;t.wpcf7={id:c(e.get("_wpcf7")),status:t.getAttribute("data-status"),pluginVersion:e.get("_wpcf7_version"),locale:e.get("_wpcf7_locale"),unitTag:e.get("_wpcf7_unit_tag"),containerPost:c(e.get("_wpcf7_container_post")),parent:t.closest(".wpcf7"),schema:void 0},t.querySelectorAll(".has-spinner").forEach(e=>{e.insertAdjacentHTML("afterend",'<span class="wpcf7-spinner"></span>')}),(n=t).querySelectorAll(".wpcf7-exclusive-checkbox").forEach(e=>{e.addEventListener("change",t=>{var e=t.target.getAttribute("name");n.querySelectorAll(`input[type="checkbox"][name="${e}"]`).forEach(e=>{e!==t.target&&(e.checked=!1)})})}),(r=t).querySelectorAll(".has-free-text").forEach(e=>{const t=e.querySelector("input.wpcf7-free-text"),a=e.querySelector('input[type="checkbox"], input[type="radio"]');t.disabled=!a.checked,r.addEventListener("change",e=>{t.disabled=!a.checked,e.target===a&&a.checked&&t.focus()})}),t.querySelectorAll(".wpcf7-validates-as-url").forEach(a=>{a.addEventListener("change",e=>{let t=a.value.trim();t&&!t.match(/^[a-z][a-z0-9.+-]*:/i)&&-1!==t.indexOf(".")&&(t=t.replace(/^\/+/,""),t="http://"+t),a.value=t})}),(e=>{if(e.querySelector(".wpcf7-acceptance")&&!e.classList.contains("wpcf7-acceptance-as-validation")){const t=()=>{let a=!0;e.querySelectorAll(".wpcf7-acceptance").forEach(e=>{var t;a&&!e.classList.contains("optional")&&(t=e.querySelector('input[type="checkbox"]'),(e.classList.contains("invert")&&t.checked||!e.classList.contains("invert")&&!t.checked)&&(a=!1))}),e.querySelectorAll(".wpcf7-submit").forEach(e=>{e.disabled=!a})};t(),e.addEventListener("change",e=>{t()}),e.addEventListener("wpcf7reset",e=>{t()})}})(t),(n=>{const o=(e,t)=>{var a=c(e.getAttribute("data-starting-value")),r=c(e.getAttribute("data-maximum-value")),n=c(e.getAttribute("data-minimum-value")),a=e.classList.contains("down")?a-t.value.length:t.value.length;e.setAttribute("data-current-value",a),e.innerText=a,r&&r<t.value.length?e.classList.add("too-long"):e.classList.remove("too-long"),n&&t.value.length<n?e.classList.add("too-short"):e.classList.remove("too-short")},t=r=>{r={init:!1,...r},n.querySelectorAll(".wpcf7-character-count").forEach(t=>{const e=t.getAttribute("data-target-name"),a=n.querySelector(`[name="${e}"]`);a&&(a.value=a.defaultValue,o(t,a),r.init&&a.addEventListener("keyup",e=>{o(t,a)}))})};t({init:!0}),n.addEventListener("wpcf7reset",e=>{t()})})(t),window.addEventListener("load",e=>{wpcf7.cached&&t.reset()}),t.addEventListener("reset",e=>{wpcf7.reset(t)}),t.addEventListener("submit",e=>{wpcf7.submit(t,{submitter:e.submitter}),e.preventDefault()}),t.addEventListener("wpcf7submit",e=>{e.detail.apiResponse.captcha&&l(t,e.detail.apiResponse.captcha),e.detail.apiResponse.quiz&&m(t,e.detail.apiResponse.quiz)}),t.addEventListener("wpcf7reset",e=>{e.detail.apiResponse.captcha&&l(t,e.detail.apiResponse.captcha),e.detail.apiResponse.quiz&&m(t,e.detail.apiResponse.quiz)}),o({endpoint:`contact-forms/${t.wpcf7.id}/feedback/schema`,method:"GET"}).then(e=>{t.wpcf7.schema=e}),t.addEventListener("change",e=>{e.target.closest(".wpcf7-form-control")&&wpcf7.validate(t,{target:e.target})})}document.addEventListener("DOMContentLoaded",e=>{var t;"undefined"!=typeof wpcf7?void 0!==wpcf7.api?"function"==typeof window.fetch?"function"==typeof window.FormData?"function"==typeof NodeList.prototype.forEach?"function"==typeof String.prototype.replaceAll?(wpcf7={init:w,submit:r,reset:i,validate:a,...null!==(t=wpcf7)&&void 0!==t?t:{}},document.querySelectorAll(".wpcf7 > form").forEach(e=>{wpcf7.init(e),e.closest(".wpcf7").classList.replace("no-js","js")})):console.error("Your browser does not support String.replaceAll()."):console.error("Your browser does not support NodeList.forEach()."):console.error("Your browser does not support window.FormData()."):console.error("Your browser does not support window.fetch()."):console.error("wpcf7.api is not defined."):console.error("wpcf7 is not defined.")})})();
!function(){var t,u=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++)if(e in this&&this[e]===t)return e;return-1};function e(t){null==t&&(t={}),this.options={},this.setOptions(this.default_options),this.setOptions(t)}e.prototype.default_options={selectors:["id","class","tag","nthchild"]},e.prototype.setOptions=function(t){var e,n,r=[];for(e in t=null==t?{}:t)n=t[e],this.default_options.hasOwnProperty(e)?r.push(this.options[e]=n):r.push(void 0);return r},e.prototype.isElement=function(t){return!(1!==(null!=t?t.nodeType:void 0))},e.prototype.getParents=function(t){var e,n=[];if(this.isElement(t))for(e=t;this.isElement(e);)n.push(e),e=e.parentNode;return n},e.prototype.getTagSelector=function(t){return this.sanitizeItem(t.tagName.toLowerCase())},e.prototype.sanitizeItem=function(t){return t.split("").map(function(t){return":"===t?"\\"+":".charCodeAt(0).toString(16).toUpperCase()+" ":/[ !"#$%&'()*+,.\/;<=>?@\[\\\]^`{|}~]/.test(t)?"\\"+t:escape(t).replace(/\%/g,"\\")}).join("")},e.prototype.getIdSelector=function(t){var e,n=t.getAttribute("id");return null==n||""===n||/\s/.exec(n)||/^\d/.exec(n)||(e="#"+this.sanitizeItem(n),1!==t.ownerDocument.querySelectorAll(e).length)?null:e},e.prototype.getClassSelectors=function(t){var o,e=[],i=t.getAttribute("class");return e=null!=i&&""!==(i=(i=i.replace(/\s+/g," ")).replace(/^\s|\s$/g,""))?function(){for(var t=i.split(/\s+/),e=[],n=0,r=t.length;n<r;n++)o=t[n],e.push("."+this.sanitizeItem(o));return e}.call(this):e},e.prototype.getAttributeSelectors=function(t){for(var e,n,r=[],o=["id","class"],i=t.attributes,s=0,l=i.length;s<l;s++)n=(e=i[s]).nodeName,u.call(o,n)<0&&r.push("["+e.nodeName+"="+e.nodeValue+"]");return r},e.prototype.getNthChildSelector=function(t){var e,n,r,o,i,s=t.parentNode;if(null!=s)for(n=e=0,r=(i=s.childNodes).length;n<r;n++)if(o=i[n],this.isElement(o)&&(e++,o===t))return":nth-child("+e+")";return null},e.prototype.testSelector=function(t,e){var n,r=!1;return r=null!=e&&""!==e&&1===(n=t.ownerDocument.querySelectorAll(e)).length&&n[0]===t?!0:r},e.prototype.getAllSelectors=function(t){var e={t:null,i:null,c:null,a:null,n:null};return 0<=u.call(this.options.selectors,"tag")&&(e.t=this.getTagSelector(t)),0<=u.call(this.options.selectors,"id")&&(e.i=this.getIdSelector(t)),0<=u.call(this.options.selectors,"class")&&(e.c=this.getClassSelectors(t)),0<=u.call(this.options.selectors,"attribute")&&(e.a=this.getAttributeSelectors(t)),0<=u.call(this.options.selectors,"nthchild")&&(e.n=this.getNthChildSelector(t)),e},e.prototype.testUniqueness=function(t,e){e=t.parentNode.querySelectorAll(e);return 1===e.length&&e[0]===t},e.prototype.testCombinations=function(t,e,n){for(var r,o,i,s,l=this.getCombinations(e),u=0,c=l.length;u<c;u++)if(r=l[u],this.testUniqueness(t,r))return r;if(null!=n)for(o=0,i=(s=e.map(function(t){return n+t})).length;o<i;o++)if(r=s[o],this.testUniqueness(t,r))return r;return null},e.prototype.getUniqueSelector=function(t){for(var e,n=this.getAllSelectors(t),r=this.options.selectors,o=0,i=r.length;o<i;o++)switch(r[o]){case"id":if(null!=n.i)return n.i;break;case"tag":if(null!=n.t&&this.testUniqueness(t,n.t))return n.t;break;case"class":if(null!=n.c&&0!==n.c.length&&(e=this.testCombinations(t,n.c,n.t)))return e;break;case"attribute":if(null!=n.a&&0!==n.a.length&&(e=this.testCombinations(t,n.a,n.t)))return e;break;case"nthchild":if(null!=n.n)return n.n}return"*"},e.prototype.getSelector=function(t){for(var e,n,r,o,i,s,l=[],u=this.getParents(t),c=0,a=u.length;c<a;c++)e=u[c],null!=(i=this.getUniqueSelector(e))&&l.push(i);for(s=[],n=0,r=l.length;n<r;n++)if(e=l[n],s.unshift(e),o=s.join(" > "),this.testSelector(t,o))return o;return null},e.prototype.getCombinations=function(t){for(var e,n,r,o,i=[[]],s=n=0,l=(t=null==t?[]:t).length-1;0<=l?n<=l:l<=n;s=0<=l?++n:--n)for(e=r=0,o=i.length-1;0<=o?r<=o:o<=r;e=0<=o?++r:--r)i.push(i[e].concat(t[s]));return i.shift(),i=(i=i.sort(function(t,e){return t.length-e.length})).map(function(t){return t.join("")})},t=e,"undefined"!=typeof define&&null!==define&&define.amd?define([],function(){return t}):("undefined"!=typeof exports&&null!==exports?exports:this).CssSelectorGenerator=t}.call(this),function(e){var n=new CssSelectorGenerator,r={instructions:"After clicking ok, click the element you want a selector for.",results:"Selector"};e(document).on("click","#wp-admin-bar-pum-get-selector",function(t){alert(r.instructions),t.preventDefault(),t.stopPropagation(),e(document).one("click",function(t){var e=t.target,e=n.getSelector(e);alert(r.results+": "+e),t.preventDefault(),t.stopPropagation()})})}(jQuery);