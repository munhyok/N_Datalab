(()=>{"use strict";var e,t={7294:(e,t,r)=>{e.exports=r(2408)},3955:(e,t,r)=>{var o=r(7294),n=r(745);const a={host:"https://api.itemscout.io/api/",socketHost:"https://itemscout.io",uploadedFilesHost:"https://upload.itemscout.io",auth:"auth",category:{subCategories:e=>"category/"+e+"/subcategories",data:e=>"category/"+e+"/data",renew:e=>"category/"+e+"/renew",conversionMap:"category/conversion_map",trend:"category/trend/"},keyword:{save:"keyword",stat:"keyword/stat",data:(e,t)=>"keyword/"+e+"/data/"+(t||""),graphs:"keyword/graphs",charts:"keyword/charts",fastRenew:e=>"keyword/"+e+"/renew/fast",renewData:(e,t)=>"keyword/"+e+"/renew/"+(t||""),statMain:e=>"v2/keyword/stats/"+e,contentsCompetitionStats:e=>`v2/keyword/contents_competition_stats/${e}`,shoppingIndex:e=>"v2/keyword/search_result_tab_section/"+encodeURIComponent(e)},bookmark:{toggle:"bookmark/"},user:{create:"user/create",getUserData:"user/get_user_data",logout:"user/logout",login:"user/login",autoLogin:"user/auto_login",findPassword:"user/find_password",resetPassword:"user/password_reset"},tracking:{addable:"tracking/addable",check:"tracking/check",toggle:"tracking/",list:"tracking/",get:e=>"tracking/"+e,data:e=>"tracking/data/"+e},board:{list(e,t,r,o){let n="board/"+e+"/"+t;return o&&o.trim().length>0&&(n+="?st="+r+"&q="+encodeURIComponent(o)),n},writable:e=>"board/"+e+"/writable"},post:{upload:"post/upload",write:"post/",delete:e=>"post/"+e,show:(e,t)=>"post/"+e+"/"+t},like:{toggle:e=>"like/"+e},scrap:{toggle:e=>"scrap/"+e},comment:{list:(e,t)=>"comment/"+e+"/"+t,upsert:"comment/",delete:e=>"comment/"+e},translate:{translate:(e,t)=>"translate/"+e+"/"+t},sale_count:{list(e){let t="";for(const r of e)t+=`mall_pid=${r}&`;return"sale_count/list?"+t},updateList:"sale_count/list"}};function s(e){return Object.keys(e).map((t=>t+"="+encodeURIComponent(e[t]))).join("&")}class c{static get(e,t){return c.proc("GET",e,t)}static post(e,t){return c.proc("POST",e,t)}static upload(e,t){return c.proc("POST",e,t,!0)}static delete(e,t){return c.proc("DELETE",e,t)}static proc(e,t,r,o=!1){return n=this,c=void 0,l=function*(){let n=a.host+t;const c={method:e,cache:"no-cache"};switch(e){case"GET":r&&(s(r),n=n+"?"+s(r)),c.credentials="include";break;case"POST":c.headers={"Content-Type":o?"multipart/form-data":"application/json"},c.body=o?new FormData:JSON.stringify(r)}try{return(yield fetch(n,c)).json()}catch(e){e.responseJSON?console.log(e.responseJSON):console.log(e)}},new((i=void 0)||(i=Promise))((function(e,t){function r(e){try{a(l.next(e))}catch(e){t(e)}}function o(e){try{a(l.throw(e))}catch(e){t(e)}}function a(t){var n;t.done?e(t.value):(n=t.value,n instanceof i?n:new i((function(e){e(n)}))).then(r,o)}a((l=l.apply(n,c||[])).next())}));var n,c,i,l}}c.urls=a;const i=c;var l=function(e,t,r,o){return new(r||(r=Promise))((function(n,a){function s(e){try{i(o.next(e))}catch(e){a(e)}}function c(e){try{i(o.throw(e))}catch(e){a(e)}}function i(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,c)}i((o=o.apply(e,t||[])).next())}))};class u{static getLastQuery(){return new Promise(((e,t)=>{let r=null;chrome.tabs.query({active:!0,currentWindow:!0},(o=>{for(let e=0;e<o.length;e+=1){const{url:t}=o[e];if("string"==typeof t&&(t.startsWith("https://search.shopping.naver.com/search/all?")||t.startsWith("https://search.naver.com/search.naver?"))){r=t;break}}if(r)try{const t=r.split("query=")[1].split("&")[0];e(t.replace(/\+/g,"%20"))}catch(e){t(new Error("err_url_parsing"))}else t(new Error("err_not_found"))}))}))}static getCurrentHost(){return new Promise(((e,t)=>{chrome.tabs.query({active:!0,currentWindow:!0},(t=>{const r=document.createElement("a");r.href=t[0].url,e(r.hostname)}))}))}static getCurrentUrl(){return new Promise(((e,t)=>{chrome.tabs.query({active:!0,currentWindow:!0},(t=>{const r=document.createElement("a");r.href=t[0].url,e(r.href)}))}))}static getUserIdFromCookie(){return l(this,void 0,void 0,(function*(){return new Promise(((e,t)=>{chrome.cookies.getAll({domain:"itemscout.io",name:"u_id"},(t=>{var r;e(null===(r=t[0])||void 0===r?void 0:r.value)}))}))}))}static getCurrentTabId(){var e;return l(this,void 0,void 0,(function*(){const[t]=yield chrome.tabs.query({active:!0,currentWindow:!0});return null!==(e=t.id)&&void 0!==e?e:-1}))}static parseDom(e,t,r){return u.doDomJob("parseDomById",{html:e,id:t},r)}static doDomJob(e,t,r){return l(this,void 0,void 0,(function*(){return new Promise(((o,n)=>l(this,void 0,void 0,(function*(){try{yield chrome.scripting.executeScript({target:{tabId:r},files:["parser/parser.js"]}),chrome.tabs.sendMessage(r,{message:e,args:t},(e=>{o(e.data)}))}catch(e){n(e)}}))))}))}}const d=document.createElement("div");d.className="extension-container",document.body.appendChild(d),document.body.style.margin="0px",(0,n.s)(d).render(o.createElement((()=>{const[e,t]=(0,o.useState)(!1),[r,n]=(0,o.useState)(""),a=()=>{u.getLastQuery().then((e=>{const t=decodeURIComponent(e);r!==t&&n(t)})).catch((e=>{console.log(e)}))};(0,o.useEffect)((()=>{window.addEventListener("message",(e=>{console.log(e),"updated"===e.data&&a()})),a()}),[]);const s=()=>{e||(t(!0),r&&r.trim().length>0&&i.post(i.urls.keyword.save,{keyword:r.trim()}).then((e=>{console.log(e);const t=e.data,r=window.open("https://itemscout.io/keyword?id="+t,"_blank");r&&r.focus()})).catch((e=>{console.error(e),t(!1)})),t(!1))};return o.createElement(o.Fragment,null,o.createElement("div",{className:"menu-container"},o.createElement("div",{className:"logo-container"},o.createElement("div",{className:"logo"}),o.createElement("div",{className:"title"},"키워드 분석")),o.createElement("div",{className:"close-button",onClick:()=>{return e=void 0,t=void 0,o=function*(){const e=yield u.getCurrentHost();window.parent.postMessage("itemscoutWebExtensionClose","https://"+e)},new((r=void 0)||(r=Promise))((function(n,a){function s(e){try{i(o.next(e))}catch(e){a(e)}}function c(e){try{i(o.throw(e))}catch(e){a(e)}}function i(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,c)}i((o=o.apply(e,t||[])).next())}));var e,t,r,o}})),o.createElement("div",{className:"search-container"},o.createElement("input",{type:"text",placeholder:"관심 상품을 검색해보세요.",className:"keyword-input",value:r,onChange:e=>{n(e.target.value)},onKeyDown:e=>{"Enter"!==e.key||e.nativeEvent.isComposing||s()}}),e?o.createElement("div",{className:"loader-container"},o.createElement("div",{className:"loader"})):o.createElement("div",{className:"search-button",onClick:s})))}),null))}},r={};function o(e){var n=r[e];if(void 0!==n)return n.exports;var a=r[e]={exports:{}};return t[e](a,a.exports,o),a.exports}o.m=t,e=[],o.O=(t,r,n,a)=>{if(!r){var s=1/0;for(u=0;u<e.length;u++){for(var[r,n,a]=e[u],c=!0,i=0;i<r.length;i++)(!1&a||s>=a)&&Object.keys(o.O).every((e=>o.O[e](r[i])))?r.splice(i--,1):(c=!1,a<s&&(s=a));if(c){e.splice(u--,1);var l=n();void 0!==l&&(t=l)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[r,n,a]},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={42:0};o.O.j=t=>0===e[t];var t=(t,r)=>{var n,a,[s,c,i]=r,l=0;if(s.some((t=>0!==e[t]))){for(n in c)o.o(c,n)&&(o.m[n]=c[n]);if(i)var u=i(o)}for(t&&t(r);l<s.length;l++)a=s[l],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(u)},r=self.webpackChunkitemscout=self.webpackChunkitemscout||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var n=o.O(void 0,[348],(()=>o(3955)));n=o.O(n)})();