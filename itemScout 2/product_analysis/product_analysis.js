(()=>{"use strict";var e,t={2855:(e,t,n)=>{var l=n(7294),r=n(745),o=n(2735),a=n(1893),i=n(2697),d=n(5737),c=n(5855),s=n(9475),m=n(1760),u=n(4480);const p=(0,u.cn)({key:"productAnalysisData",default:{galleryImages:[]}});const g=(e,t,n,l=!0)=>{return r=void 0,o=void 0,i=function*(){try{let r=e;return t&&(r=e+function(e,t=!0){const n=t?encodeURIComponent:encodeURI;return Object.keys(e).map((t=>t+"="+n(e[t]))).join("&")}(t,l)),yield fetch(r,Object.assign(Object.assign({},n),{method:"GET"}))}catch(e){throw Error("get request failed")}},new((a=void 0)||(a=Promise))((function(e,t){function n(e){try{d(i.next(e))}catch(e){t(e)}}function l(e){try{d(i.throw(e))}catch(e){t(e)}}function d(t){var r;t.done?e(t.value):(r=t.value,r instanceof a?r:new a((function(e){e(r)}))).then(n,l)}d((i=i.apply(r,o||[])).next())}));var r,o,a,i};var f=n(6444);const h=a.ZP.div`
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 16px;
  color: #001c34;
`,y=a.ZP.div`
  cursor: ${e=>e.isHovering?"pointer":"none"};
`;function E({isClosed:e,setIsClosed:t}){const[n,r]=(0,l.useState)(!1),a=(0,u.sJ)(p),E=e=>{let t=" ";for(let n=0;n<e.length;n++)"img"!==e[n].localName?" "===e[n].textContent?t+="\n":t+=e[n].textContent+"\n":t+="[아스]"+e[n].dataset.src+"[아스]\n";a.galleryImages.length>0&&localStorage.setItem("productAnalysisExtractedImage",JSON.stringify(a.galleryImages)),t.length>0?localStorage.setItem("productAnalysisExtractedText",t):localStorage.setItem("productAnalysisExtractedText","")};return l.createElement(x,{isClosed:e},l.createElement(v,null,l.createElement(b,null,"스토어 상품 분석"),l.createElement(m.Z,{onClick:()=>{try{o.Z.getCurrentHost().then((e=>{f.Z.init().then((()=>{f.Z.logEvent("product_analysis_extracting_page_open",{from:"extension",from_sub:"naver_shopping_product_analysis_extracting_page_open",type:"product_analysis_extracting_page_open"})})),window.parent.postMessage({m:"pageExtract"},"https://"+e),window.addEventListener("message",(function(t){var n,l,r,o,a,i;return r=this,o=void 0,i=function*(){if(t.origin==="https://"+e&&"pageExtract"===t.data.m){const e=(new DOMParser).parseFromString(t.data.html,"text/html");try{const{data:t}=yield g("https://api.itemscout.io/api/extension/image_extract_selector").then((e=>e.json())),l=null===(n=e.querySelector(t))||void 0===n?void 0:n.querySelectorAll("p, img");l&&E(l)}catch(t){console.log(t);const n=null===(l=e.querySelector("._9F9CWn02VE"))||void 0===l?void 0:l.querySelectorAll("p, img");n&&E(n)}finally{chrome.runtime.sendMessage({message:"openProductAnalysisExtractPage"})}}},new((a=void 0)||(a=Promise))((function(e,t){function n(e){try{d(i.next(e))}catch(e){t(e)}}function l(e){try{d(i.throw(e))}catch(e){t(e)}}function d(t){var r;t.done?e(t.value):(r=t.value,r instanceof a?r:new a((function(e){e(r)}))).then(n,l)}d((i=i.apply(r,o||[])).next())}))}))}))}catch(e){console.log(e)}},text:"페이지 추출",iconName:"CaptureButton",direction:"left",width:22,height:17,wrapperStyle:{marginRight:6}})),l.createElement(w,null,n?l.createElement(y,{isHovering:n,style:{paddingRight:6,width:90,height:16},onMouseLeave:()=>r(!1),onClick:()=>{window.open("https://itemscout.io")}},l.createElement("img",{src:d,alt:"아이템스카우트 로고",width:"90",height:"16"})):l.createElement(y,{isHovering:n,style:{paddingRight:6,width:90,height:16},onMouseOver:()=>r(!0)},l.createElement("img",{src:i,alt:"아이템스카우트 로고",width:"90",height:"16"})),l.createElement("div",{style:{marginLeft:4,marginRight:4,height:16}},l.createElement(h,null,"확장 프로그램")),e?l.createElement("div",{style:{width:24,height:24,paddingRight:20,paddingTop:2}},l.createElement("img",{src:s,alt:"열기 버튼",onClick:()=>{localStorage.setItem("its-product-analysis-closed","0"),t(!1)},style:{cursor:"pointer"}})):l.createElement("div",{style:{width:24,height:24,paddingRight:20,paddingTop:2}},l.createElement("img",{src:c,alt:"닫기 버튼",onClick:()=>{localStorage.setItem("its-product-analysis-closed","1"),t(!0)},style:{cursor:"pointer"}}))))}const x=a.ZP.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border: 1px solid rgba(0, 28, 52, 0.16);
  ${e=>e.isClosed?a.iv`
          border-radius: 8px 8px 8px 8px;
        `:a.iv`
          border-radius: 8px 8px 0px 0px;
        `}
  background: #f2f8ff;
`,v=a.ZP.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,w=a.ZP.div`
  display: flex;
  align-items: center;
`,b=a.ZP.div`
  margin: 19.5px 16px 20.5px 20px;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #001c34;
`;function _({tabIndex:e,setSelectedTab:t}){return l.createElement(S,null,0===e?l.createElement(l.Fragment,null,l.createElement(P,{style:{width:80,height:40,borderWidth:1,borderStyle:"solid",borderColor:"#e7e8ef",borderTopLeftRadius:4,borderBottomLeftRadius:4,cursor:"pointer"},onClick:()=>t(1)},"개요"),l.createElement(C,{style:{width:148,height:40,borderRightWidth:1,borderTopWidth:1,borderBottomWidth:1,borderRightStyle:"solid",borderTopStyle:"solid",borderBottomStyle:"solid",borderTopRightRadius:4,borderBottomRightRadius:4,borderColor:"#e7e8ef",cursor:"pointer"},onClick:()=>t(0)},"상품명/태그 분석")):l.createElement(l.Fragment,null,l.createElement(C,{style:{width:80,height:40,borderWidth:1,borderTopLeftRadius:4,borderBottomLeftRadius:4,borderStyle:"solid",borderColor:"#e7e8ef",cursor:"pointer"},onClick:()=>t(1)},"개요"),l.createElement(P,{style:{width:148,height:40,borderRightWidth:1,borderTopWidth:1,borderBottomWidth:1,borderRightStyle:"solid",borderTopStyle:"solid",borderBottomStyle:"solid",borderTopRightRadius:4,borderBottomRightRadius:4,borderColor:"#e7e8ef",cursor:"pointer"},onClick:()=>t(0)},"상품명/태그 분석")))}const S=a.ZP.div`
  display: flex;
  padding: 20px 0 20px 20px;
`,P=a.ZP.div`
  width: 80px;
  height: 40px;
  background: #f7f7f9;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: rgba(0, 28, 52, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`,C=a.ZP.div`
  width: 148px;
  height: 40px;
  background: #ffffff;
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 16px;
  color: #001c34;
  display: flex;
  justify-content: center;
  align-items: center;
`;var Z=n(438);const A=n.p+"static/images/ea5dc9366bd5384065d6.png";var T=n(1280),k=n(7122);const R=n.p+"static/images/6aa735cf7a8344556f05.png",O=n.p+"static/images/2d2ae6b0234b5716aa15.png",I=n.p+"static/images/351c2876fdd1d5e080f0.png",N=n.p+"static/images/b72115a15627a2ebd9a1.png",G=Object.freeze({CURRENT_VERSION:"3.3.3",CRAWLING_PAGE_TIMES:15,PRODUCT_ANALYSIS_NAVER_LOGO_WIDTH:152,PRODUCT_ANALYSIS_NAVER_LOGO_HEIGHT:148,PRODUCT_ANALYSIS_GRADE_LOGO_WIDTH:14,PRODUCT_ANALYSIS_GRADE_LOGO_HEIGHT:16.47});var L=n(1467);function D({selectedTab:e,data:t,zzimCount:n,keywordArray:r,sellerTags:o,dataForGrade:a}){const i=e=>{return t=this,n=void 0,r=function*(){const t=yield k.Z.getId(e);window.open(`https://itemscout.io/keyword?id=${t}`,"_blank")},new((l=void 0)||(l=Promise))((function(e,o){function a(e){try{d(r.next(e))}catch(e){o(e)}}function i(e){try{d(r.throw(e))}catch(e){o(e)}}function d(t){var n;t.done?e(t.value):(n=t.value,n instanceof l?n:new l((function(e){e(n)}))).then(a,i)}d((r=r.apply(t,n||[])).next())}));var t,n,l,r};return l.createElement(pe,null,1===e?null!==t&&"string"==typeof a&&"number"==typeof n?l.createElement(ge,null,l.createElement(oe,null,l.createElement(V,null,l.createElement("img",{src:t.representImage.url,width:G.PRODUCT_ANALYSIS_NAVER_LOGO_WIDTH,height:G.PRODUCT_ANALYSIS_NAVER_LOGO_HEIGHT,alt:"default image"}))),l.createElement(U,null,l.createElement($,null,t.name),l.createElement(q,null,l.createElement(J,null,Z.Z.addCommaToNumber(t.discountedSalePrice),"원"),l.createElement(K,null,"배송비 ",Z.Z.addCommaToNumber(t.productDeliveryInfo.baseFee),"원")),l.createElement(Q,null,l.createElement(X,null,l.createElement(j,null,l.createElement("img",{src:A,alt:"naver_logo"})),l.createElement(H,null,t.channel.channelName)),l.createElement(W,null,l.createElement("div",{style:{marginRight:2}},(e=>{switch(e){case"프리미엄":return l.createElement("img",{src:R,width:G.PRODUCT_ANALYSIS_GRADE_LOGO_WIDTH,height:G.PRODUCT_ANALYSIS_GRADE_LOGO_HEIGHT,alt:"default image"});case"빅파워":return l.createElement("img",{src:N,width:G.PRODUCT_ANALYSIS_GRADE_LOGO_WIDTH,height:G.PRODUCT_ANALYSIS_GRADE_LOGO_HEIGHT,alt:"default image"});case"파워":return l.createElement("img",{src:O,width:G.PRODUCT_ANALYSIS_GRADE_LOGO_WIDTH,height:G.PRODUCT_ANALYSIS_GRADE_LOGO_HEIGHT,alt:"default image"});case"플래티넘":return l.createElement("img",{src:I,width:G.PRODUCT_ANALYSIS_GRADE_LOGO_WIDTH,height:G.PRODUCT_ANALYSIS_GRADE_LOGO_HEIGHT,alt:"default image"});default:return}})(Z.Z.getGradeString(a))),l.createElement("div",null,Z.Z.getGradeString(a)))),l.createElement(ne,null,l.createElement(Y,null,t.category.category1Name," > ",t.category.category2Name," >"," ",t.category.category3Name," > ",t.category.category4Name),l.createElement(z,{onClick:()=>i(t.category.categoryName)},"카테고리 키워드 분석하기")),l.createElement(le,null,l.createElement(ee,null,l.createElement(M,null,"리뷰"),l.createElement(B,null,Z.Z.addCommaToNumber(t.reviewAmount.totalReviewCount)),l.createElement(F,null,"·")),l.createElement(ee,null,l.createElement(M,null,"평점"),l.createElement(B,null,t.reviewAmount.averageReviewScore),l.createElement(F,null,"·")),l.createElement(ee,null,l.createElement(M,null,"찜"),l.createElement(B,null,Z.Z.addCommaToNumber(n)),l.createElement(F,null,"·")),l.createElement(te,null,l.createElement(M,null,"등록일"),l.createElement(B,null,(0,T.ZP)(t.regDate,"yy.mm.dd")))),l.createElement(re,null,l.createElement(ee,null,l.createElement(M,null,"예상판매량/매출액(6개월)"),l.createElement(B,null,Z.Z.addCommaToNumber(t.saleAmount.cumulationSaleCount),"건/",Z.Z.addCommaToNumber(Math.round(t.discountedSalePrice*t.saleAmount.cumulationSaleCount/1e4)),"만원"),l.createElement(F,null,"·")),l.createElement(te,null,l.createElement(M,null,"예상판매량/매출액(3일)"),l.createElement(B,null,Z.Z.addCommaToNumber(t.saleAmount.recentSaleCount),"건/",Z.Z.addCommaToNumber(Math.round(t.discountedSalePrice*t.saleAmount.recentSaleCount/1e4)),"만원"))))):l.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"51vh",borderRadius:8,marginRight:8,border:"1px solid #e7e8ef"}},l.createElement(L.Z,{color:"#739AF6",loading:!0,size:50})):Array.isArray(r)&&Array.isArray(o)?l.createElement(fe,null,l.createElement(he,null,l.createElement(se,null,l.createElement(ae,null,"상품명"),r.map((e=>l.createElement(de,{key:e.keyword_id},l.createElement(ie,{onClick:()=>i(e.keyword)},e.keyword))))),l.createElement(me,null,l.createElement(ae,null,"검색수"),r.map((e=>e.monthly?l.createElement(de,{key:e.keyword_id+"1"},l.createElement(ce,null,Z.Z.addCommaToNumber(e.monthly.total))):l.createElement(de,{key:e.keyword_id+"1"},l.createElement(ce,null,"-"))))),l.createElement(me,null,l.createElement(ae,null,"상품수"),r.map((e=>e.prdCnt?l.createElement(de,{key:e.keyword_id+"1"},l.createElement(ce,null,Z.Z.addCommaToNumber(e.prdCnt))):l.createElement(de,{key:e.keyword_id+"1"},l.createElement(ce,null,"-"))))),l.createElement(ue,null,l.createElement(ae,null,"경쟁강도"),r.map((e=>e.prdCnt&&e.monthly?l.createElement(de,{key:e.keyword_id+"2"},l.createElement(ce,null,(e.prdCnt/e.monthly.total).toFixed(2))):l.createElement(de,{key:e.keyword_id+"2"},l.createElement(ce,null,"-")))))),l.createElement(ye,null,l.createElement(se,null,l.createElement(ae,null,"태그"),o.map((e=>l.createElement(de,{key:e.keyword_id},l.createElement(ie,{onClick:()=>i(e.keyword)},e.keyword))))),l.createElement(me,null,l.createElement(ae,null,"검색수"),o.map((e=>e.monthly?l.createElement(de,{key:e.keyword_id+"1"},l.createElement(ce,null,Z.Z.addCommaToNumber(e.monthly.total))):l.createElement(de,{key:e.keyword_id+"1"},l.createElement(ce,null,"-"))))),l.createElement(me,null,l.createElement(ae,null,"상품수"),o.map((e=>e.prdCnt?l.createElement(de,{key:e.keyword_id+"1"},l.createElement(ce,null,Z.Z.addCommaToNumber(e.prdCnt))):l.createElement(de,{key:e.keyword_id+"1"},l.createElement(ce,null,"-"))))),l.createElement(ue,null,l.createElement(ae,null,"경쟁강도"),o.map((e=>e.prdCnt&&e.monthly?l.createElement(de,{key:e.keyword_id+"2"},l.createElement(ce,null,(e.prdCnt/e.monthly.total).toFixed(2))):l.createElement(de,{key:e.keyword_id+"2"},l.createElement(ce,null,"-"))))))):l.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"51vh",borderRadius:8,marginRight:8,border:"1px solid #e7e8ef"}},l.createElement(L.Z,{color:"#739AF6",loading:!0,size:50})))}const j=a.ZP.div`
  margin-right: 2px;
`,H=a.ZP.div``,z=a.ZP.div`
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  text-align: right;
  text-decoration-line: underline;
  color: rgba(0, 28, 52, 0.6);
  cursor: pointer;
`,W=a.ZP.div`
  display: flex;
  justify-content: flex-start;
`,U=a.ZP.div``,Y=(a.ZP.div`
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  color: #001c34;
  margin-left: 8px;
`,a.ZP.div`
  margin-right: 6px;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: rgba(0, 28, 52, 0.6);
`),F=a.ZP.div`
  margin: 0 8px 0 8px;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-bottom: 2px;
`,M=a.ZP.div`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  color: #001c34;
  margin-right: 4px;
`,B=a.ZP.div`
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  color: #268dff;
`,V=a.ZP.div`
  flex-grow: 1;
  width: 152px;
  height: 148px;
`,$=(a.ZP.div`
  width: 150px;
  height: 40px;
  background: #ffffff;
  border: 1px solid #e7e8ef;
  display: flex;
  align-items: center;
  justify-content: center;
`,a.ZP.div`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: #001c34;
`),q=a.ZP.div`
  display: flex;
  align-items: flex-end;
  margin-top: 10px;
`,J=a.ZP.div`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  color: #268dff;
  margin-right: 4px;
`,K=a.ZP.div`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  color: rgba(0, 28, 52, 0.6);
`,Q=a.ZP.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 16px;
`,X=a.ZP.div`
  margin-right: 6px;
  display: flex;
  justify-content: flex-start;
`,ee=a.ZP.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,te=a.ZP.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,ne=a.ZP.div`
  display: flex;
  margin-top: 15px;
`,le=a.ZP.div`
  margin-top: 15px;
  display: flex;
`,re=a.ZP.div`
  margin-top: 15px;
  display: flex;
`,oe=a.ZP.div`
  width: 148px;
  height: 188px;
  margin-right: 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`,ae=a.ZP.div`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  color: #001c34;
`,ie=a.ZP.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 28px;
  text-decoration-line: underline;
  color: #001c34;
  cursor: pointer;
`,de=a.ZP.div`
  margin-top: 5px;
  display: flex;
  flex-direction: column;
`,ce=a.ZP.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 28px;
  color: #001c34;
`,se=a.ZP.div`
  flex-grow: 24;
  display: flex;
  flex-direction: column;
`,me=a.ZP.div`
  flex-grow: 5;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
`,ue=a.ZP.div`
  flex-grow: 8;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
`,pe=a.ZP.div`
  margin: 0 20px 20px 20px;
`,ge=a.ZP.div`
  display: flex;
  border: 1px solid #e7e8ef;
  border-radius: 8px;
  padding: 20px;
  align-items: center;
`,fe=a.ZP.div`
  display: flex;
`,he=a.ZP.div`
  flex-grow: 1;
  display: flex;
  background: #ffffff;
  border: 1px solid #e7e8ef;
  border-radius: 8px;
  margin-right: 16px;
  padding: 20px;
`,ye=a.ZP.div`
  flex-grow: 1;
  display: flex;
  background: #ffffff;
  border: 1px solid #e7e8ef;
  border-radius: 8px;
  padding: 20px;
`;var Ee=n(2212);function xe(){const[e,t]=(0,l.useState)("1"===localStorage.getItem("its-product-analysis-closed")),[n,r]=(0,l.useState)(0),[a,i]=(0,l.useState)(1),[d,c]=(0,u.FV)(p),[s,m]=(0,l.useState)(null),[h,y]=(0,l.useState)(null),[x,v]=(0,l.useState)(null),[w,b]=(0,l.useState)(null),S=()=>{const e=document.body.clientWidth;e!==n&&r(e)};return(0,l.useEffect)((()=>{o.Z.getCurrentHost().then((t=>{window.parent.postMessage({m:"itemscoutProductAnalysisResize",w:n,o:!e},"https://"+t)}))}),[e,n]),(0,l.useEffect)((()=>{const e=setTimeout((()=>{window.addEventListener("resize",S);try{o.Z.getCurrentHost().then((e=>{window.parent.postMessage({m:"productPageCrawling"},"https://"+e),window.addEventListener("message",(function(t){var n,l,r,a,i,d;return r=this,a=void 0,d=function*(){if(console.log(t),t.origin==="https://"+e&&"productPageCrawling"===t.data.m){const e=t.data.data;if(console.log(e),null===(l=null===(n=null==e?void 0:e.product)||void 0===n?void 0:n.A)||void 0===l?void 0:l.id){const t=e.product.A;let n=null;o.Z.getCurrentUrl().then((t=>{"string"==typeof t&&(f.Z.logEvent("visit_store",{from:"extension",from_sub:"naver_shopping_product_analysis",type:"smartstore",url:t}),(null==t?void 0:t.startsWith("https://smartstore.naver.com"))?n=e.smartStoreV2.channel.actionGrade:(null==t?void 0:t.startsWith("https://brand.naver.com"))&&"products"===t.split(".com/")[1].split("/")[1].split("/")[0]&&(n=e.channel.A.actionGrade))}));const l=yield g(`https://smartstore.naver.com/i/v1/keeps/products/${t.id}`).then((e=>e.json())),r=t.id,{count:a}=l[r],i=t.name.split(" ").map((e=>Z.Z.discardRegExp(e))),{data:d}=yield Ee.Z.post("keyword/data/list",{keywords:i}),s=yield Ee.Z.post("keyword/data/list",{keywords:t.sellerTags.map((e=>e.text))});c(t),m(a),y(d.filter((e=>e.keyword.length>0)).sort(((e,t)=>t.monthly&&e.monthly?t.monthly.total-e.monthly.total:null))),v(s.data.sort(((e,t)=>t.monthly&&e.monthly?t.monthly.total-e.monthly.total:null))),b(n)}}},new((i=void 0)||(i=Promise))((function(e,t){function n(e){try{o(d.next(e))}catch(e){t(e)}}function l(e){try{o(d.throw(e))}catch(e){t(e)}}function o(t){var r;t.done?e(t.value):(r=t.value,r instanceof i?r:new i((function(e){e(r)}))).then(n,l)}o((d=d.apply(r,a||[])).next())}))}))}))}catch(e){console.log(e)}}),100);return()=>{clearTimeout(e)}}),[]),l.createElement(ve,null,l.createElement(E,{isClosed:e,setIsClosed:t}),l.createElement(we,{style:{height:"74vh",overflowY:"scroll"}},l.createElement(_,{tabIndex:a,setSelectedTab:i}),l.createElement(D,{data:d,zzimCount:s,selectedTab:a,keywordArray:h,sellerTags:x,dataForGrade:w})))}const ve=a.ZP.div``,we=a.ZP.div`
  border-width: 0 1px 1px 1px;
  border-radius: 0 0 8px 8px;
  border-style: solid;
  border-color: #e7e8ef;
`,be=document.createElement("div");be.id="product-analysis-container",document.body.appendChild(be),(0,r.s)(be).render(l.createElement((function(){const[e,t]=(0,l.useState)("1"===localStorage.getItem("its-product-analysis-hidden"));return(0,l.useEffect)((()=>{const e=()=>{"0"===localStorage.getItem("its-product-analysis-hidden")&&o.Z.getCurrentHost().then((e=>{window.parent.postMessage({m:"itemscoutProductAnalysisResize",w:0,o:!1,mar:!0},"https://"+e)})),t("1"===localStorage.getItem("its-product-analysis-hidden"))};return window.addEventListener("storage",e),null===localStorage.getItem("its-product-analysis-hidden")&&localStorage.setItem("its-product-analysis-hidden","1"),()=>{window.removeEventListener("storage",e)}}),[]),l.createElement(u.Wh,null,e?l.createElement(xe,null):l.createElement(l.Fragment,null))}),null))}},n={};function l(e){var r=n[e];if(void 0!==r)return r.exports;var o=n[e]={exports:{}};return t[e].call(o.exports,o,o.exports,l),o.exports}l.m=t,l.amdO={},e=[],l.O=(t,n,r,o)=>{if(!n){var a=1/0;for(s=0;s<e.length;s++){for(var[n,r,o]=e[s],i=!0,d=0;d<n.length;d++)(!1&o||a>=o)&&Object.keys(l.O).every((e=>l.O[e](n[d])))?n.splice(d--,1):(i=!1,o<a&&(a=o));if(i){e.splice(s--,1);var c=r();void 0!==c&&(t=c)}}return t}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[n,r,o]},l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},l.d=(e,t)=>{for(var n in t)l.o(t,n)&&!l.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},l.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;l.g.importScripts&&(e=l.g.location+"");var t=l.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),l.p=e+"../"})(),(()=>{var e={930:0};l.O.j=t=>0===e[t];var t=(t,n)=>{var r,o,[a,i,d]=n,c=0;if(a.some((t=>0!==e[t]))){for(r in i)l.o(i,r)&&(l.m[r]=i[r]);if(d)var s=d(l)}for(t&&t(n);c<a.length;c++)o=a[c],l.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return l.O(s)},n=self.webpackChunkitemscout=self.webpackChunkitemscout||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var r=l.O(void 0,[348,528,981,893,382,132],(()=>l(2855)));r=l.O(r)})();