(()=>{"use strict";var e,t={7294:(e,t,n)=>{e.exports=n(2408)},6549:(e,t,n)=>{var r={};n.r(r),n.d(r,{Calculator:()=>y,CaptureButton:()=>h,HeaderArrowDown:()=>u,HeaderArrowUp:()=>g,HeaderRedirectionArrow:()=>f,MarginCalculatorArrowDown:()=>v,MarginCalculatorArrowRight:()=>E,MarginCalculatorQuestionMark:()=>w,QuestionMark:()=>p});var i=n(3528),a=function(e,t,n,r){return new(n||(n=Promise))((function(i,a){function o(e){try{c(r.next(e))}catch(e){a(e)}}function l(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,l)}c((r=r.apply(e,t||[])).next())}))};class o{static getLastQuery(){return new Promise(((e,t)=>{let n=null;chrome.tabs.query({active:!0,currentWindow:!0},(r=>{for(let e=0;e<r.length;e+=1){const{url:t}=r[e];if("string"==typeof t&&(t.startsWith("https://search.shopping.naver.com/search/all?")||t.startsWith("https://search.naver.com/search.naver?"))){n=t;break}}if(n)try{const t=n.split("query=")[1].split("&")[0];e(t.replace(/\+/g,"%20"))}catch(e){t(new Error("err_url_parsing"))}else t(new Error("err_not_found"))}))}))}static getCurrentHost(){return new Promise(((e,t)=>{chrome.tabs.query({active:!0,currentWindow:!0},(t=>{const n=document.createElement("a");n.href=t[0].url,e(n.hostname)}))}))}static getCurrentUrl(){return new Promise(((e,t)=>{chrome.tabs.query({active:!0,currentWindow:!0},(t=>{const n=document.createElement("a");n.href=t[0].url,e(n.href)}))}))}static getUserIdFromCookie(){return a(this,void 0,void 0,(function*(){return new Promise(((e,t)=>{chrome.cookies.getAll({domain:"itemscout.io",name:"u_id"},(t=>{var n;e(null===(n=t[0])||void 0===n?void 0:n.value)}))}))}))}static getCurrentTabId(){var e;return a(this,void 0,void 0,(function*(){const[t]=yield chrome.tabs.query({active:!0,currentWindow:!0});return null!==(e=t.id)&&void 0!==e?e:-1}))}static parseDom(e,t,n){return o.doDomJob("parseDomById",{html:e,id:t},n)}static doDomJob(e,t,n){return a(this,void 0,void 0,(function*(){return new Promise(((r,i)=>a(this,void 0,void 0,(function*(){try{yield chrome.scripting.executeScript({target:{tabId:n},files:["parser/parser.js"]}),chrome.tabs.sendMessage(n,{message:e,args:t},(e=>{r(e.data)}))}catch(e){i(e)}}))))}))}}class l{static init(){var e,t,n,r;return e=this,t=void 0,r=function*(){(0,i.S1)(null!=="752e71639715f4295e1f7309316e0d23"?"752e71639715f4295e1f7309316e0d23":"");const e=yield o.getUserIdFromCookie();e&&(0,i.Iv)(e)},new((n=void 0)||(n=Promise))((function(i,a){function o(e){try{c(r.next(e))}catch(e){a(e)}}function l(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,l)}c((r=r.apply(e,t||[])).next())}))}}l.logEvent=i.Kz;const c=l;var s=n(7294),m=n(745),d=n(1893);const u=n.p+"static/images/526430be38a391d2fc31.png",g=n.p+"static/images/d9da22b6665f725dc93d.png",f=n.p+"static/images/35a4645a7cc20d32f4e2.png",p=n.p+"static/images/42dba86168cdb1b6b183.png",h=n.p+"static/images/7a62128a77252d7efd34.png",y=n.p+"static/images/e584f04644a2016c82b1.png",v=n.p+"static/images/2b0d155c149b99a3aba0.png",E=n.p+"static/images/661459b27602f611b32e.png",w=n.p+"static/images/b674c727e04a504f6a3a.png",x=function({iconName:e,width:t,height:n,style:i,onClick:a,wrapperStyle:o}){const l=r[e];return s.createElement("div",{style:o},s.createElement("img",{src:l,alt:e,width:t,height:n,style:i,onClick:a}))};function b(){return s.createElement(P,{className:"container"},s.createElement(N,{className:"header-icon-wrapper"},s.createElement(x,{iconName:"Calculator",width:16,height:20})),s.createElement(C,{className:"header-title"},"아이템스카우트 마진계산기"))}const P=d.ZP.div`
  display: flex;
  align-items: center;
  padding: 22px 0 22px 40px;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: #e7e8ef;
`,N=d.ZP.div`
  margin-right: 12px;
`,C=d.ZP.div`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
`;function S(){return s.createElement(R,{className:"calculator-first-line"},s.createElement(Z,{className:"tag-wrapper-1"},s.createElement(me,{style:{marginRight:16}},"판매처"),s.createElement(z,{className:"smart-store-charge-wrapper"},s.createElement(T,{className:"smart-store-charge-left"},s.createElement(me,null,"네이버 스마트스토어 -"),s.createElement(me,{fontWeight:700},"수수료 5.85%")),s.createElement(j,{className:"smart-store-charge-right"},s.createElement(x,{width:12,height:8,iconName:"MarginCalculatorArrowDown"})))),s.createElement(Z,{className:"tag-wrapper-2",style:{marginRight:40}},s.createElement(me,{style:{marginRight:12}},"수량"),s.createElement(de,{width:120,height:100,count:1,fontWeight:700,style:{paddingRight:10}},"100")),s.createElement(Z,{className:"tag-wrapper-3"},s.createElement(me,{style:{marginRight:12}},"마진률(%)"),s.createElement(de,{width:80,height:100,count:1,fontWeight:700,style:{paddingRight:10}},"9")))}const R=d.ZP.div`
  display: flex;
`,Z=d.ZP.div`
  display: flex;
  align-items: center;
`,z=d.ZP.div`
  width: 300px;
  height: 20px;
  border: 1px solid #c7c7cf;
  padding: 12px 16px 10px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 40px;
`,T=d.ZP.div`
  display: flex;
  align-items: center;
  height: 100%;
`,j=d.ZP.div``,W=[{title:"사입 의뢰",desc:"최대 30% 저렴하게 공장과 단가 협의를 도와드립니다."},{title:"결제 대행",desc:"국내카드로 간편하게 결제하고 세금계산서 받기"},{title:"샘플 체크",desc:"현지 전문가가 1주일이내에 샘플 체크를 도와드립니다."}],k=[{unit:"₩",category:"배대지 수수료",value:1e3},{unit:"¥",category:"원가(¥)",value:45},{unit:"₩",category:"원가(₩)",value:7698},{unit:"₩",category:"판매 수수료(5.85%)",value:1150},{unit:"₩",category:"판매 부가세(10%)",value:2930},{unit:"₩",category:"관부가세(18%)",value:4550},{unit:"₩",category:"해외결제 수수료(3%)",value:398},{unit:"₩",category:"매입세액(10%)",value:2877}];class _{static _callProc(e,t,n,r){return e().then((e=>e)).catch((i=>{if(console.error(i),i&&"no retry"===i.message)throw new Error("no retry");if(t<r){const i=t+1;return console.error("request failed, retry("+i+")"),n<=0?_._callProc(e,i,n,r):new Promise((e=>{setTimeout((()=>{e(null)}),n)})).then((()=>_._callProc(e,i,n,r)))}throw i}))}static call(e,t=1500,n=5){return _._callProc(e,0,t,n)}static parseQuery(e){const t={},n=e.split("?"),r=(1===n.length?n[0]:n[1]).split("&");for(let e=0;e<r.length;e++){const n=r[e].split("=");t[decodeURIComponent(n[0])]=decodeURIComponent(n[1]||"")}return t}static wait(e){return new Promise((t=>{setTimeout((()=>{t()}),e)}))}}const M=_;var O=function(e,t,n,r){return new(n||(n=Promise))((function(i,a){function o(e){try{c(r.next(e))}catch(e){a(e)}}function l(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,l)}c((r=r.apply(e,t||[])).next())}))};class I{static addCommaToNumber(e){return I.isNumber(e)?e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","):e}static isNumber(e){return!!e&&!isNaN(e)}static smallNumber(e){return"number"==typeof e?e<0?"∞":e>.1?e.toFixed(2):e.toFixed(3):"-"}static discardRegExp(e){const t=/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi;return t.test(e)?e.replace(t,""):e}static getGradeString(e){switch(e){case"FIRST":return"프리미엄";case"SECOND":return"빅파워";case"THIRD":return"파워";case"FOURTH":return"새싹";case"FIFTH":return"씨앗";default:return"플래티넘"}}static downloadImage(e,t,n,r){return O(this,void 0,void 0,(function*(){e=e.split("?")[0];const i=document.createElement("a");i.href=yield I.toDataURL(e),i.setAttribute("download",`${r}_${n}_${t}`),document.body.appendChild(i),i.click(),yield M.wait(200),document.body.removeChild(i)}))}static toDataURL(e){return O(this,void 0,void 0,(function*(){return yield fetch(e).then((e=>e.blob())).then((e=>URL.createObjectURL(e)))}))}}function L(){return s.createElement($,{className:"calculator-fourth-line"},s.createElement(me,{style:{marginBottom:17}},"개당 총비용 상세"),s.createElement(D,null,s.createElement(A,{className:"first-item-container"},s.createElement(F,{style:{marginRight:10},className:"first-item-box-wrapper"},s.createElement(de,{width:103,height:100,count:2},s.createElement(me,{fontSize:12,style:{paddingLeft:16,opacity:"25%"}},"₩"),s.createElement(me,{fontSize:12,style:{paddingRight:16,fontWeight:700}},I.addCommaToNumber(2e3))),s.createElement(de,{width:63,height:100,count:2,style:{borderLeft:0}},s.createElement(me,{fontSize:12,style:{paddingLeft:16,fontWeight:700}},"15"),s.createElement(me,{fontSize:12,style:{paddingRight:16,opacity:"25%"}},"%"))),s.createElement(me,{fontSize:11,style:{display:"flex",justifyContent:"center",alignItems:"center",marginTop:8}},s.createElement(x,{wrapperStyle:{marginRight:2,display:"flex",justifyContent:"center",alignItems:"center"},width:15,height:15,iconName:"MarginCalculatorQuestionMark"}),s.createElement("div",null,"광고/홍보비"))),s.createElement(U,{className:"rest-item-wrapper"},k.map(((e,t)=>s.createElement(H,{key:e.category},s.createElement(de,{style:{marginRight:10},width:108,height:100,count:2},s.createElement(me,{fontSize:12,style:{paddingLeft:16,opacity:"25%"}},e.unit),s.createElement(me,{fontSize:12,style:{paddingRight:16,fontWeight:700}},I.addCommaToNumber(e.value))),s.createElement(me,{fontSize:11,style:{display:"flex",justifyContent:"center",alignItems:"center",marginTop:8}},0===t&&s.createElement(x,{wrapperStyle:{marginRight:2,display:"flex",justifyContent:"center",alignItems:"center"},width:15,height:15,iconName:"MarginCalculatorQuestionMark"}),s.createElement("div",null,e.category))))))))}const $=d.ZP.div`
  margin-top: 48px;
`,D=d.ZP.div`
  display: flex;
`,A=d.ZP.div`
  height: 35px;
`,U=d.ZP.div`
  height: 100%;
  display: flex;
  align-items: center;
`,F=d.ZP.div`
  display: flex;
  width: 166px;
  height: 35px;
`,H=d.ZP.div`
  width: 118px;
  height: 35px;
`;function q(){return s.createElement(B,{className:"calculator-last-line"},W.map((e=>s.createElement(Q,{key:e.desc},s.createElement(me,{fontWeight:700},e.title),s.createElement(me,{fontSize:12,style:{marginTop:7}},e.desc)))))}const B=d.ZP.div`
  display: flex;
  margin-top: 42px;
  align-items: center;
  justify-content: space-between;
`,Q=d.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 360px;
  height: 100px;
  background: #f0f7ff;
`;function J(){return s.createElement(G,{className:"second-line-box"},s.createElement(K,null,s.createElement(V,null,s.createElement(me,{fontWeight:700,style:{color:"#0465D4",marginRight:13}},"최대 순이익"),s.createElement(me,{fontWeight:700,style:{color:"#0465D4"}},I.addCommaToNumber(44e5))),s.createElement(X,null,"최대 30% 저렴하게 공장과 단가 협의를 도와드립니다.")),s.createElement(Y,null,"사입 의뢰하기"))}const G=d.ZP.div`
  width: 476px;
  height: 55px;
  display: flex;
  align-items: center;
  border: 1px solid #268dff;
  box-shadow: 0px 0px 8px rgba(38, 141, 255, 0.2);
  border-radius: 4px;
  padding: 12px;
`,K=d.ZP.div`
  display: flex;
  flex-direction: column;
  margin-right: 40px;
`,V=d.ZP.div`
  display: flex;
  margin-bottom: 4px;
`,X=d.ZP.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #0465d4;
`,Y=d.ZP.div`
  width: 136px;
  height: 40px;
  background: #268dff;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  color: #ffffff;
`;function ee(){return s.createElement(re,{className:"calculator-second-line"},s.createElement(te,{className:"margin-calculator-arrow-right"},s.createElement(x,{iconName:"MarginCalculatorArrowRight",width:22,height:21})),s.createElement(ne,{className:"investment-amount"},s.createElement(me,{style:{marginRight:12}},"투자금액"),s.createElement(me,{fontWeight:700,style:{marginRight:40}},I.addCommaToNumber(7e6))),s.createElement(ne,{className:"net-profit"},s.createElement(me,{style:{marginRight:12}},"순이익"),s.createElement(me,{fontWeight:700,style:{marginRight:37}},I.addCommaToNumber(25e5))),s.createElement(J,null))}const te=d.ZP.div`
  margin-right: 13px;
  margin-left: 20px;
`,ne=d.ZP.div`
  display: flex;
`,re=d.ZP.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
`;function ie(){return s.createElement(ae,{className:"calculator-third-line"},s.createElement(me,{style:{marginBottom:12}},"개당 가격 상세"),s.createElement(le,null,s.createElement(oe,null,s.createElement(de,{width:155,height:100,count:2},s.createElement(me,{fontSize:12,style:{paddingLeft:16,opacity:"25%"}},"₩"),s.createElement(me,{fontSize:12,style:{paddingRight:16,fontWeight:700}},I.addCommaToNumber(29900))),s.createElement(me,{fontSize:11,style:{display:"flex",justifyContent:"center",marginTop:8}},"소비자 가격")),s.createElement(oe,null,s.createElement(de,{width:155,height:100,count:2},s.createElement(me,{fontSize:12,style:{paddingLeft:16,opacity:"25%"}},"₩"),s.createElement(me,{fontSize:12,style:{paddingRight:16,fontWeight:700}},I.addCommaToNumber(20250))),s.createElement(me,{fontSize:11,style:{display:"flex",justifyContent:"center",marginTop:8}},"총 비용")),s.createElement(oe,null,s.createElement(de,{width:155,height:100,count:2},s.createElement(me,{fontSize:12,style:{paddingLeft:16,opacity:"25%"}},"₩"),s.createElement(me,{fontSize:12,style:{paddingRight:16,fontWeight:700}},I.addCommaToNumber(8750))),s.createElement(me,{fontSize:11,style:{display:"flex",justifyContent:"center",marginTop:8}},"마진"))))}const ae=d.ZP.div`
  display: flex;
  flex-direction: column;
  margin-top: 48px;
`,oe=d.ZP.div`
  width: 166px;
  height: 35px;
`,le=d.ZP.div`
  display: flex;
  justify-content: flex-start;
`;function ce(){return s.createElement(se,{className:"main-calculator-container"},s.createElement(S,null),s.createElement(ee,null),s.createElement(ie,null),s.createElement(L,null),s.createElement(q,null))}const se=d.ZP.div`
  padding: 40px;
`,me=d.ZP.div`
  font-style: normal;
  font-weight: ${e=>e.fontWeight||400};
  font-size: ${e=>e.fontSize||14}px;
  color: #000000;
`,de=d.ZP.div`
  border: 1px solid #c7c7cf;
  display: flex;
  width: ${e=>e.width}px;
  height: ${e=>e.height}%;
  align-items: center;
  ${e=>1===e.count?d.iv`
          justify-content: flex-end;
        `:d.iv`
          justify-content: space-between;
        `}
  font-style: normal;
  font-weight: ${e=>e.fontWeight||400};
  font-size: ${e=>e.fontSize||14}px;
  color: #000000;
`,ue=d.ZP.div``;function ge(){const[e,t]=(0,s.useState)(0);(0,s.useEffect)((()=>{o.getCurrentHost().then((t=>{window.parent.postMessage({m:"itemscoutMarginCalculatorResize",w:e},"https://"+t)}))}),[e]);const n=()=>{const n=document.body.clientWidth;n!==e&&t(n)};return(0,s.useEffect)((()=>(window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)})),[]),s.createElement(ue,null,s.createElement(b,null),s.createElement(ce,null))}const fe=d.ZP.div``,pe=document.createElement("div");pe.id="margin-calculator-container",document.body.appendChild(pe),document.body.setAttribute("style","margin: 0px"),(0,m.s)(pe).render(s.createElement((function(){return(0,s.useEffect)((()=>{c.init().then((()=>{console.log("initiated"),c.logEvent("osee_search_check",{from:"extension",from_sub:"osee_search_check"})}))}),[]),s.createElement(fe,null,s.createElement(ge,null))}),null))}},n={};function r(e){var i=n[e];if(void 0!==i)return i.exports;var a=n[e]={exports:{}};return t[e].call(a.exports,a,a.exports,r),a.exports}r.m=t,r.amdO={},e=[],r.O=(t,n,i,a)=>{if(!n){var o=1/0;for(m=0;m<e.length;m++){for(var[n,i,a]=e[m],l=!0,c=0;c<n.length;c++)(!1&a||o>=a)&&Object.keys(r.O).every((e=>r.O[e](n[c])))?n.splice(c--,1):(l=!1,a<o&&(o=a));if(l){e.splice(m--,1);var s=i();void 0!==s&&(t=s)}}return t}a=a||0;for(var m=e.length;m>0&&e[m-1][2]>a;m--)e[m]=e[m-1];e[m]=[n,i,a]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e+"../"})(),(()=>{var e={31:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var i,a,[o,l,c]=n,s=0;if(o.some((t=>0!==e[t]))){for(i in l)r.o(l,i)&&(r.m[i]=l[i]);if(c)var m=c(r)}for(t&&t(n);s<o.length;s++)a=o[s],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(m)},n=self.webpackChunkitemscout=self.webpackChunkitemscout||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var i=r.O(void 0,[348,528,981,893],(()=>r(6549)));i=r.O(i)})();