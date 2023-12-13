(()=>{"use strict";var e,t={2153:(e,t,n)=>{var a=n(7294),l=n(745),r=n(1893),i=n(2697),o=n(5737),s=n(5855),d=n(9475);const c=r.ZP.div`
  width: 1280px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f2f8ff;
  border: 1px solid rgba(0, 28, 52, 0.16);
  border-radius: 8px 8px 0px 0px;
`,u=r.ZP.div`
  display: flex;
  align-items: center;
  justify-content: right;
  margin-right: 16px;
`,p=r.ZP.div`
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 16px;
  color: #001c34;
`,m=r.ZP.div`
  cursor: ${e=>e.isHovering?"pointer":"none"};
`;function g({children:e,isClosed:t,setIsClosed:n}){const[l,r]=(0,a.useState)(!1);return a.createElement(c,{style:t?{borderBottomLeftRadius:8,borderBottomRightRadius:8}:{}},e,a.createElement(u,null,l?a.createElement(m,{isHovering:l,style:{paddingRight:6,width:90,height:16},onMouseLeave:()=>r(!1),onClick:()=>{window.open("https://itemscout.io")}},a.createElement("img",{src:o,alt:"아이템스카우트 로고",width:"90",height:"16"})):a.createElement(m,{isHovering:l,style:{paddingRight:6,width:90,height:16},onMouseOver:()=>r(!0)},a.createElement("img",{src:i,alt:"아이템스카우트 로고",width:"90",height:"16"})),a.createElement("div",{style:{marginLeft:4,marginRight:4,height:16}},a.createElement(p,null,"확장 프로그램")),t?a.createElement("div",{style:{width:24,height:24,paddingTop:2}},a.createElement("img",{src:d,alt:"열기 버튼",onClick:()=>{localStorage.setItem("its-keyword-analysis-closed","0"),n(!1)},style:{cursor:"pointer"}})):a.createElement("div",{style:{width:24,height:24,paddingRight:20,paddingTop:2}},a.createElement("img",{src:s,alt:"닫기 버튼",onClick:()=>{localStorage.setItem("its-keyword-analysis-closed","1"),n(!0)},style:{cursor:"pointer"}}))))}var h=n(1760),f=n(438);function y({keywordStatMain:e}){const{totalProductCount:t,totalSearchCount:n,searchCountMobile:l,searchCountPC:r}=e;console.log(t,n,l,r);const i=(()=>{const e=Math.max(r,10),t=Math.max(l,10);return Math.round(t/(e+t)*100)})(),o=100-i;return a.createElement(x,null,a.createElement(v,null,a.createElement(b,null,"등록 상품수"),a.createElement("div",null,a.createElement(E,null,f.Z.addCommaToNumber(t)),a.createElement(w,null,"개"))),a.createElement(v,null,a.createElement(b,null,"월간 검색수"),a.createElement("div",null,a.createElement(E,null,f.Z.addCommaToNumber(n)),a.createElement(w,null,"개"))),a.createElement(v,null,a.createElement(b,null,"검색 비율"),o>=i?a.createElement(D,{style:{display:"grid",gridTemplateColumns:`${o/100}fr ${i/100}fr`,position:"relative"}},a.createElement(k,null),a.createElement(S,null),a.createElement("div",{style:{position:"absolute",top:0,left:5,lineHeight:"16px"}},"PC ",o,"%"),a.createElement("div",{style:{position:"absolute",top:0,right:5,lineHeight:"16px"}},i,"% 모바일")):a.createElement(D,{style:{display:"grid",gridTemplateColumns:`${i/100}fr ${o/100}fr`,position:"relative"}},a.createElement(k,null),a.createElement(S,null),a.createElement("div",{style:{position:"absolute",top:0,left:5,lineHeight:"16px"}},i,"% 모바일"),a.createElement("div",{style:{position:"absolute",top:0,right:5,lineHeight:"16px"}},"PC ",o,"%"))))}const x=r.ZP.div`
  width: 220px;
  border: 1px solid #e7e8ef;
  border-radius: 8px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 12px;
  padding-bottom: 12px;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`,v=r.ZP.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`,b=r.ZP.div`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #001c34;
  flex-grow: 0.3;
`,E=r.ZP.span`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  color: #001c34;
  padding-right: 2px;
`,w=r.ZP.span`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #001c34;
`,D=r.ZP.div`
  color: #fff;
  font-size: 10px;
  flex-grow: 1;
`,k=r.ZP.span`
  padding-left: 4px;
  background: #0465d4;
  white-space: nowrap;
  padding: 1px 5px 1px 3px;
  height: 16px;
`,S=r.ZP.span`
  padding-right: 4px;
  text-align: right;
  background-color: #011b34;
  padding: 1px 3px 1px 5px;
  height: 16px;
`;var Z=n(4640);const C=function({url:e,width:t=16,height:n=16}){return a.createElement(a.Fragment,null,a.createElement(Z.Z,{iconName:"QuestionMark",width:t,height:n,style:{cursor:"pointer"},onClick:()=>{if(console.log("hi"),e){const t=window.open(e,"_blank");null==t||t.focus()}}}))};function P({keywordStatMain:e}){const{statsFromNPay:{averagePrice:t,averagePriceFrom80:n,saleCount:l,saleCountFrom80:r,sales:i,salesFrom80:o}}=e,s=e=>e>=1e9?{price:f.Z.addCommaToNumber(Math.round(e/1e8)),unit:"억원"}:e>=1e6?{price:f.Z.addCommaToNumber(Math.round(e/1e4)),unit:"만원"}:{price:f.Z.addCommaToNumber(e),unit:"원"},d=e=>f.Z.isNumber(e)&&e>1e3?e<1e6?100*Math.round(e/100):e<1e7?1e3*Math.round(e/1e3):1e4*Math.round(e/1e4):e,c=s(i),u=s(o),p=s(d(t)),m=s(d(n));return a.createElement(T,null,a.createElement(N,{className:"grid-item-1"}),a.createElement(N,{className:"grid-item-2"},a.createElement("div",null,"6개월 매출액")),a.createElement(N,{className:"grid-item-3"},a.createElement("div",null,"6개월 판매량")),a.createElement(N,{className:"grid-item-4"},a.createElement("div",null,"평균 판매가")),a.createElement(N,{className:"grid-item-5"},a.createElement("div",{style:{marginRight:6}},a.createElement(C,{url:"https://school.itemscout.io/wiki/keyword/tab0#0a525dbda45e4732b664d4939f163ff9"})),a.createElement(M,null,"Top 40")),a.createElement(N,{className:"grid-item-6"},a.createElement(I,null,c.price),a.createElement(F,null,c.unit)),a.createElement(N,{className:"grid-item-7"},a.createElement("div",null,a.createElement(I,null,f.Z.addCommaToNumber(l)),a.createElement(F,null,"개"))),a.createElement(N,{className:"grid-item-8"},a.createElement("div",null,a.createElement(I,null,p.price),a.createElement(F,null,p.unit))),a.createElement(N,{className:"grid-item-9"},a.createElement(M,null,"Top 80")),a.createElement(N,{className:"grid-item-10"},a.createElement("div",null,a.createElement(I,null,u.price),a.createElement(F,null,u.unit))),a.createElement(N,{className:"grid-item-11"},a.createElement("div",null,a.createElement(I,null,f.Z.addCommaToNumber(r)),a.createElement(F,null,"개"))),a.createElement(N,{className:"grid-item-12"},a.createElement("div",null,a.createElement(I,null,m.price),a.createElement(F,null,m.unit))))}const T=r.ZP.div`
  width: 410px;
  display: grid;
  grid-template-columns: 90px 1fr 1fr 1fr;
  grid-template-rows: 40fr 35fr 35fr;
  justify-items: stretch;
  align-items: stretch;
  border: 1px solid #e7e8ef;
  border-radius: 8px;
`,N=r.ZP.div``,M=r.ZP.div`
  font-style: normal;
  font-weight: 700;
  font-size: 11px;
  line-height: 14px;
  color: #001c34;
`,I=r.ZP.span`
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  text-align: right;
  color: #001c34;
  padding-right: 1px;
`,F=r.ZP.span`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #001c34;
`,R=[["아주좋음","#268dff"],["좋음","#18c71a"],["보통","#ffc41f"],["나쁨","#ff8026"],["아주나쁨","#c11a00"],["-","#ffc41f"]],$=["쇼핑성","#18c71a"],A=["쇼핑성&정보성","#ffc41f"],z=["정보성","#ff8026"],O=["-","#ffc41f"],j=[{section:"상품 지표",count:5,part:["경쟁강도","실거래상품 비율","묶음상품 비율","해외상품 비율","1년 내 게시 비율"]},{section:"광고 지표",count:4,part:["광고클릭률","클릭경쟁률","가격대비 광고비","클릭대비 광고비"]},{section:"컨텐츠 종합지표",count:4,part:["블로그 경쟁강도","카페 경쟁강도","View 경쟁강도","1개월 내 게시 비율"]}];function H({enabled:e,setSelectedTab:t,indexNum:n,degree:l,section:r,helpUrl:i}){const o=R.filter((e=>e[0]===l))[0][1];return a.createElement(G,{enabled:e,indexNum:n,onClick:()=>t(n),style:{cursor:"pointer"}},a.createElement(U,{style:{paddingBottom:4,color:o}},l),a.createElement(K,{style:{paddingBottom:7}},r),a.createElement(C,{url:i}))}function _({tabInfo:e,keywordStatMain:t,keywordContentsCompetitionStat:n,selectedTab:l}){const r=[];switch(l){case 0:r.push({title:"상품 경쟁강도",value:f.Z.addCommaToNumber(null==t?void 0:t.competitionIntensity).toString(),grade:null==t?void 0:t.competitionIntensityDesc}),r.push({title:"실거래상품 비율",value:`${null==t?void 0:t.soldProductPercent.toFixed(0).toString()}%`,grade:null==t?void 0:t.soldProductPercentDesc}),r.push({title:"묶음상품 비율",value:`${null==t?void 0:t.tieProductPercent.toFixed(0).toString()}%`,grade:null==t?void 0:t.tieProductPercentDesc}),r.push({title:"해외상품 비율",value:`${null==t?void 0:t.overseaProductPercent.toFixed(0).toString()}%`,grade:null==t?void 0:t.overseaProductPercentDesc}),r.push({title:"1년 내 게시 비율",value:`${null==t?void 0:t.openProductPercentResult[0].percent.toString()}%`,grade:null==t?void 0:t.openProdPercentScoreDesc});break;case 1:r.push({title:"광고 클릭률",value:`${f.Z.addCommaToNumber(null==t?void 0:t.adClickRateStats.adClickRateTotal).toString()}%`,grade:null==t?void 0:t.adClickRateStats.adClickRateTotalDesc}),r.push({title:"클릭 경쟁률",value:`${null==t?void 0:t.clickCompetitionRate.toString()}`,grade:null==t?void 0:t.clickCompetitionRateDesc}),r.push({title:"가격 대비 광고비",value:f.Z.smallNumber(null==t?void 0:t.productAdPriceRate),grade:null==t?void 0:t.productAdPriceRateDesc}),r.push({title:"클릭 대비 광고비",value:f.Z.addCommaToNumber(null==t?void 0:t.adPriceClickRate),grade:null==t?void 0:t.adPriceClickRateDesc});break;default:r.push({title:"블로그 경쟁강도",value:f.Z.addCommaToNumber(null==n?void 0:n.blogCompetitionRatio).toString(),grade:null==n?void 0:n.blogCompetitionDesc}),r.push({title:"카페 경쟁강도",value:f.Z.addCommaToNumber(null==n?void 0:n.cafeCompetitionRatio).toString(),grade:null==n?void 0:n.cafeCompetitionDesc}),r.push({title:"View 경쟁강도",value:f.Z.addCommaToNumber(null==n?void 0:n.viewCompetitionRatio).toString(),grade:null==n?void 0:n.viewCompetitionDesc}),r.push({title:"1개월 내 게시 비율",value:`${f.Z.addCommaToNumber(null==n?void 0:n.month1Ratio).toString()}%`,grade:null==n?void 0:n.monthRatioDesc})}return a.createElement(Q,null,r.map((e=>{const t=R.filter((t=>t[0]===e.grade))[0][1];return a.createElement(q,{key:e.title},a.createElement(J,null,e.title),a.createElement(X,null,a.createElement(ee,null,e.value),a.createElement(te,{style:{backgroundColor:t}},e.grade)))})))}function L({shoppingIndex:e}){console.log("shoppingIndex",e);const t=null==e?void 0:e.pcSection.order,n=null==e?void 0:e.pcSection.names.map(((e,n)=>a.createElement(ne,{tabIndex:n,rank:t,style:{marginRight:7},key:e},e))),l=null==e?void 0:e.pcTab.order,r=null==e?void 0:e.pcTab.names.filter(((e,t)=>t<=7)).map(((e,t)=>a.createElement(ne,{tabIndex:t,rank:l,style:{marginRight:7},key:e},e)));return a.createElement(V,null,a.createElement("div",{className:"shoppingIndex-item-1"},"섹션"),a.createElement("div",{className:"shoppingIndex-item-2"},a.createElement("span",{className:"shopping-index-rank"},t),a.createElement("span",{className:"shopping-index-unit"},"위")),a.createElement("div",{className:"shoppingIndex-item-3"},n),a.createElement("div",{className:"shoppingIndex-item-4"},"탭"),a.createElement("div",{className:"shoppingIndex-item-5"},a.createElement("span",{className:"shopping-index-rank"},l),a.createElement("span",{className:"shopping-index-unit"},"위")),a.createElement("div",{className:"shoppingIndex-item-6"},r))}function B({keywordStatMain:e,keywordContentsCompetitionStat:t,shoppingIndex:n}){const[l,r]=(0,a.useState)(0);let i="";return n&&(i="-"!==n.score&&f.Z.isNumber(n.score)?n.score>=60?$[0]:n.score<=40?z[0]:A[0]:O[0]),a.createElement(Y,null,a.createElement(W,null,e&&t&&n&&a.createElement(a.Fragment,null,a.createElement(H,{enabled:0===l,setSelectedTab:e=>r(e),indexNum:0,degree:e.competitionTotalScoreDesc,section:"상품 지표",helpUrl:"https://school.itemscout.io/wiki/keyword/tab0#c93b6c4f3f2b42beb43e07416da922e5"}),a.createElement(H,{enabled:1===l,setSelectedTab:e=>r(e),indexNum:1,degree:e.adEfficiencyScoreDesc,section:"광고 지표",helpUrl:"https://school.itemscout.io/wiki/keyword/tab0#c93b6c4f3f2b42beb43e07416da922e5"}),a.createElement(H,{enabled:2===l,setSelectedTab:e=>r(e),indexNum:2,degree:t.desc,section:"콘텐츠 지표",helpUrl:"https://school.itemscout.io/wiki/keyword/tab0#c93b6c4f3f2b42beb43e07416da922e5"}),a.createElement(G,{enabled:3===l,indexNum:3,onClick:()=>r(3),style:{cursor:"pointer"}},"쇼핑성"===i||"정보성"===i?a.createElement(U,{shoppingIndexDegree:i,style:{paddingBottom:4}},i):a.createElement("div",{style:{display:"flex",alignItems:"flex-end"}},a.createElement(U,{style:{paddingBottom:4,color:"#ff8026"}},i.split("&")[0]),a.createElement("span",{style:{fontSize:12,color:"rgb(165, 169, 181)",paddingBottom:5}},"&"),a.createElement(U,{style:{paddingBottom:4,color:"#18c71a"}},i.split("&")[1])),a.createElement(K,{style:{paddingBottom:7}},"키워드 분류"),a.createElement("div",null,a.createElement(C,{url:"https://school.itemscout.io/wiki/keyword/tab0#c93b6c4f3f2b42beb43e07416da922e5"}))))),3!==l?a.createElement(_,{tabInfo:j[l],keywordStatMain:e,keywordContentsCompetitionStat:t,selectedTab:l}):a.createElement(L,{shoppingIndex:n}))}const Y=r.ZP.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  height: 170px;
`,W=r.ZP.div`
  display: flex;
  border: 1px solid #e7e8ef;
  border-radius: 8px 8px 0 0;
  height: 90px;
`,G=r.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  padding: 16px;
  ${e=>3!==e.indexNum&&r.iv`
      border-right: 1px solid #e7e8ef;
    `};

  background-color: ${e=>e.enabled?"#FFFFFF":"rgba(0, 28, 52, 0.02)"};
`,U=r.ZP.div`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  ${e=>"쇼핑성"===e.shoppingIndexDegree&&r.iv`
      color: #18c71a;
    `}
  ${e=>"정보성"===e.shoppingIndexDegree&&r.iv`
      color: #ff8026;
    `}
`,K=r.ZP.div`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #001c34;
`,Q=r.ZP.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px 0 20px 0;
  border-right: 1px solid #e7e8ef;
  border-left: 1px solid #e7e8ef;
  border-bottom: 1px solid #e7e8ef;
  border-radius: 0 0 8px 8px;
  height: 80px;
`,V=r.ZP.div`
  display: grid;
  grid-template-columns: 0.2fr 0.2fr 1fr;
  align-content: space-evenly;
  justify-items: start;
  padding-left: 30px;
  justify-content: center;
  align-items: center;

  border-right: 1px solid #e7e8ef;
  border-left: 1px solid #e7e8ef;
  border-bottom: 1px solid #e7e8ef;
  border-radius: 0 0 8px 8px;
  height: 80px;
`,q=r.ZP.div`
  display: flex;
  flex-direction: column;
`,J=r.ZP.div`
  padding-bottom: 8px;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #001c34;
`,X=r.ZP.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,ee=r.ZP.div`
  padding-right: 4px;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
  color: #001c34;
`,te=r.ZP.div`
  font-style: normal;
  font-weight: 700;
  font-size: 11px;
  line-height: 14px;
  color: #ffffff;
  padding: 4px 3px 4px 3px;
  border-radius: 2px;
`,ne=r.ZP.div`
  border-radius: 2px;
  border: 1px solid #e7e8ef;
  font-size: 11px;
  color: #001c34;
  padding: 3px 7px 3px 7px;
  ${e=>e.tabIndex+1===e.rank&&r.iv`
      border: 1px solid #268dff;
      color: #268dff;
    `}
`;var ae=n(2212),le=n(7122),re=n(2735),ie=n(5512),oe=n(5376),se=n(1280);class de{static getOldDate(e,t){return e?t&&e>t?t:e:t}static addDays(e,t=new Date){const n=new Date(t.getTime()),a=n.getDate()+e;return new Date(n.setDate(a))}static getTimestamp(e){return e?new Date(e).getTime():0}static getMonthDayString(e){const t=`${e}`;return`${t.slice(5,7)}.${t.slice(8)}`}static daysInMonth(e,t){switch(t){case 2:return e%4==0?29:28;case 1:case 3:case 5:case 7:case 8:case 10:case 12:return 31}return 30}static getFullDateString(e){return e?(0,se.ZP)(e,"yyyy-mm-dd"):null}static dateWithDateStr(e){const t=new Date,n=new Date(e);return n.setHours(t.getHours()),n.setMinutes(t.getMinutes()),n.setSeconds(t.getSeconds()),n.setMilliseconds(t.getMilliseconds()),n}static getDateTimeString(e){return(0,se.ZP)(e,"yyyy-mm-dd HH:MM:ss")}static getDateString(e){return e?(0,se.ZP)(e,"yyyy-mm-dd"):null}static getDateStringOnlyNumber(e){return e?(0,se.ZP)(e,"yyyymmdd"):null}static getWeekNum(){const e=((new Date).getTime()/1e3-1585537200)/604800;return Math.floor(e)}static getWeekFirstDate(e){const t=new Date(15855372e5);return t.setDate(t.getDate()+7*e),t}static addDashToDate(e){return e.replace(/(\d{4})(\d{2})(\d{2})/,"$1-$2-$3")}static addMonths(e,t=new Date){const n=new Date(t.getTime()),a=n.getMonth()+e;return new Date(n.setMonth(a))}static getDataDate(e){let t;return t=e?new Date(e):new Date,t.getHours()<11&&t.setDate(t.getDate()-1),t}static getStartAndEndOfMonth(e){const t=new Date(e);t.setDate(1);const n=de.getDateString(t);return t.setMonth(t.getMonth()+1),t.setDate(t.getDate()-1),[n,de.getDateString(t)]}static getMonthesOfYear(e){const t=e,n=[(0,se.ZP)(t,"yy-mm")];for(let e=0;e<11;e++){const e=new Date(t.setMonth(t.getMonth()-1));n.push((0,se.ZP)(e,"yy-mm"))}return n}static getPreviousYear(e){const t=e.getFullYear(),n=e.getMonth(),a=e.getDate();return new Date(t-1,n,a)}}const ce=de,ue=class{static createGraphData1Day(e,t,n,a){var l;const r=ce.dateWithDateStr(e).getTime(),i=ce.dateWithDateStr(t).getTime(),o={labels:[],datasets:[{data:[]}]},s={searchTrend:n},d=["searchTrend"];o.datasets.push({data:[]}),s.clickTrend=a,d.push("clickTrend");const c=[],u=new Date(r);u.setHours(1);const p=new Date(i);for(p.setHours(23);u<p;u.setDate(u.getDate()+1))c.push(ce.getFullDateString(u));for(const e of c){o.labels.push(e.replace(/-/gi,"."));for(let t=0;t<d.length;t+=1){const n=d[t];"searchTrend"===n||"clickTrend"===n?o.datasets[t].data.push(null!==(l=s[d[t]][e])&&void 0!==l?l:0):o.datasets[t].data.push(s[d[t]][e])}}return o}static createGraphData1Month(e,t,n,a){var l,r,i,o,s,d;const c=ce.dateWithDateStr(e).getTime(),u=ce.dateWithDateStr(t).getTime(),p={labels:[],datasets:[{data:[]}]},m={searchTrend:n},g=["searchTrend"];p.datasets.push({data:[]}),m.clickTrend=a,g.push("clickTrend");const h=[],f=new Date(c);f.setHours(1);const y=new Date(u);for(y.setHours(23);f<y;f.setDate(f.getDate()+1))h.push(ce.getFullDateString(f));let x=!1,v={},b={},E=100;for(const e of h)if(x||1===new Date(e).getDate()&&(x=!0),x){for(let t=0;t<g.length;t+=1){const n=g[t],a=m[g[t]][e];"searchTrend"!==n&&"clickTrend"!==n&&null==a||(v[t]=(null!==(l=v[t])&&void 0!==l?l:0)+(null!=a?a:0),b[t]=(null!==(r=b[t])&&void 0!==r?r:0)+1)}const t=new Date(e);if(t.getDate()===ce.daysInMonth(t.getFullYear(),t.getMonth()+1)){for(let e=0;e<g.length;e+=1)if(null!==(i=b[e])&&void 0!==i&&i)if("searchTrend"===g[e]){const t=v[e];E=Math.max(E,t),p.datasets[e].data.push(t)}else{const t=v[e]/b[e];p.datasets[e].data.push(t)}const e=null===(o=ce.getFullDateString(new Date(t.getFullYear(),t.getMonth(),1)))||void 0===o?void 0:o.slice(0,7).replace(/-/gi,".");p.labels.push(e),v={},b={}}}if(x&&0!==Object.keys(b).length){for(let e=0;e<g.length;e+=1)if("searchTrend"===g[e]){let t=0,n=0;const a=b[e];let l=v[e];const r=new Date(h[h.length-1]),i=ce.daysInMonth(r.getFullYear(),r.getMonth()+1),o=new Date(r);o.setDate(i);const d=o.getDay(),c=r.getDate();for(let a=h.length-1;a>=0;a-=1)if(new Date(h[a]).getDay()===d){for(let l=a;l>a-i;l-=1){const r=null!==(s=m[g[e]][h[l]])&&void 0!==s?s:0;t+=r,a-i+c>=l&&(n+=r)}break}l=0===n?l*i/a:l*t/n,p.datasets[e].data.push(l,null)}else{const t=b[e]?v[e]/b[e]:null;p.datasets[e].data.push(t,null)}const e=new Date;e.setDate(1),p.labels.push(`${null===(d=ce.getFullDateString(e))||void 0===d?void 0:d.slice(0,7).replace(/-/gi,".")}`)}return p}};var pe=n(6486);const me=ce.getFullDateString(ce.addMonths(-13,ce.getDataDate())),ge=ce.getFullDateString(ce.addDays(-1,ce.getDataDate()));var he;!function(e){e.MONTH_1="최근 한 달",e.YEAR_1="1년",e.YEAR_3="3년"}(he||(he={}));const fe=he.YEAR_1,ye=me;function xe({selectedIcon:e,keyword:t,keywordStatMain:n}){ie.kL.register(ie.uw,ie.f$,ie.od,ie.jn,ie.Dx,ie.u,ie.De);const[l,r]=(0,a.useState)(null),[i,o]=(0,a.useState)(null),[s,d]=(0,a.useState)(ye),[c,u]=(0,a.useState)(ge),[p,m]=(0,a.useState)([]),[g,h]=(0,a.useState)([]),[f,y]=(0,a.useState)(fe),x=n.categoryResult[0].categoryInfoList[0].id,v=(e,t)=>{if(!e||!t)return 0;let n=100;(null==t?void 0:t.value)&&(null==t?void 0:t.rate)&&(n=100*t.value/t.rate);let a=e*t.value/t.rate/10;return a=n<100?Math.floor(10*a):10*Math.floor(a),a};return(0,a.useEffect)((()=>{const e=new Date,a=ce.getPreviousYear(e),l=new Date(a.getFullYear(),a.getMonth(),1);le.Z.getGraphData(x,t,e.getTime(),l.getTime()).then((e=>{const[t,a]=[e[0],e[1]],l=(e=>{var t,a,l;let r=null,i=0;const{totalSearchCount:o=0}=n;for(let n=0;n<30;n+=1)i+=null!==(a=null===(t=e[n])||void 0===t?void 0:t.value)&&void 0!==a?a:0;if(i>0)for(let t=0;t<30;t+=1){const n=null!==(l=e[t].value)&&void 0!==l?l:0;if(n>0){r={rate:n,value:o*n/i};break}}return r})((e=>{var t;const n=[...e],a=new Date(ge),l=n.slice(-30,n.length),r=[];for(let e=0;e<30;e+=1){const e=ce.getFullDateString(a),n=l.find((t=>t.period===(null==e?void 0:e.replace(/-/g,"")))),i=null!==(t=null==n?void 0:n.value)&&void 0!==t?t:0;r.push({value:i,period:e}),a.setDate(a.getDate()-1)}return r})(t)),i=(e=>{const{mappedSearchTrend:t,mappedClickTrend:n}=e;let a={};return a=f===he.MONTH_1?ue.createGraphData1Day(s,c,t,n):ue.createGraphData1Month(s,c,t,n),a})(((e,t)=>{const n={};if(Array.isArray(e))for(const t of e){const e=ce.addDashToDate(t.period);if(n[e]||(n[e]={}),n[e]=t.value,e===c)break}const a={};if(Array.isArray(t))for(const e of t){const t=ce.addDashToDate(e.period);if(a[t]||(a[t]={}),a[t]=e.value,t===c)break}return{mappedSearchTrend:n,mappedClickTrend:a}})(t,a)),o=((e,t)=>{try{const n=e.datasets[0].data,{labels:a}=e,l=[];for(let e=0;e<a.length;e+=1)t&&l.push({x:e,y:v(n[e],t),date:he.MONTH_1===f?ce.getMonthDayString(a[e]):a[e].slice(2)});return l}catch(e){return[]}})(i,l),d=(e=>{var t;try{const n=e.datasets[1].data,{labels:a}=e,l=[];for(let e=0;e<a.length;e+=1)l.push({x:e,y:null!==(t=n[e])&&void 0!==t?t:0,date:he.MONTH_1===f?ce.getMonthDayString(a[e]):a[e].slice(2)});return l}catch(e){return[]}})(i),u={labels:o.map((e=>e.date)),datasets:[{data:o.map((e=>e.y)),borderColor:"#739AF6",backgroundColor:"#739AF6",yAxisID:"y0"}]};r(u),m(o),h(d)}))}),[]),(0,a.useEffect)((()=>{const t=(0,pe.cloneDeep)(l);t&&e.forEach(((e,n)=>{if(0!==n&&1===n){const e=t.datasets.filter((e=>"y1"===e.yAxisID));if(0===e.length&&g.length>0){const e=Math.max(...g.map((e=>e.y)));t.datasets.push({data:g.map((t=>Number((t.y/e*100).toFixed(2)))),borderColor:"#18C71A",backgroundColor:"#18C71A",yAxisID:"y1"})}else if(e.length>0){const e=t.datasets.filter((e=>"y1"!==e.yAxisID));t.datasets=e}r(t)}}))}),[e]),a.createElement(ve,null,l&&p.length>0&&a.createElement(oe.x1,{options:{responsive:!1,interaction:{mode:"index",intersect:!1},animation:{duration:0},clip:!1,stacked:!1,plugins:{legend:{display:!1,labels:{font:{size:11}}}},scales:{x:{grid:{display:!1}},y0:{display:!0,position:"left",min:0,ticks:{color:"#739AF6",maxTicksLimit:6}},y1:{display:"auto",position:"right",min:0,max:100,grid:{display:!1},ticks:{color:"#18C71A",maxTicksLimit:6}}},maintainAspectRatio:!1},data:l,height:"210px",width:"540px"}))}const ve=r.ZP.div`
  padding-top: 12px;
  padding-left: 21px;
`,be=r.ZP.div`
  font-style: normal;
  font-size: 12px;
  line-height: 15px;
  color: #001c34;
  padding: 0 16px 0 6.5px;
  font-weight: ${e=>!0===e.selectedIcon[e.tabNumber]?700:400};
  ${e=>e.selectedIcon[e.tabNumber]&&r.iv`
      opacity: 0.9;
    `};
`;function Ee({keyword:e,keywordStatMain:t}){const[n,l]=(0,a.useState)([!0,!1,!1,!1]),r=e=>{if(!0===n[e]){const t=[...n];return t[e]=!1,void l(t)}const t=[...n];t[e]=!0,l(t)};return a.createElement(we,null,a.createElement(De,null,a.createElement(Ze,null,a.createElement(ke,{tabNumber:0,selectedIcon:n}),a.createElement(Se,{tabNumber:0,style:{backgroundColor:"#739af6"}}),a.createElement(be,{tabNumber:0,selectedIcon:n},"검색수")),a.createElement(Ze,null,a.createElement(ke,{tabNumber:1,selectedIcon:n,onClick:()=>r(1)}),n[1]&&a.createElement(Se,{onClick:()=>r(1),tabNumber:1,style:{backgroundColor:"#45d292"}}),a.createElement(be,{tabNumber:1,selectedIcon:n},"클릭 트렌드"))),a.createElement(xe,{selectedIcon:n,keyword:e,keywordStatMain:t}))}const we=r.ZP.div`
  width: 590px;
  height: 290px;
  border: 1px solid #e7e8ef;
  border-radius: 8px;
`,De=r.ZP.div`
  display: flex;
  height: 45px;
  align-items: center;
  padding: 24px 0 0 24px;
`,ke=r.ZP.div`
  width: 15px;
  height: 15px;
  border: 1px solid #e7e8ef;
  border-radius: 2px;
  background-color: ${e=>0===e.tabNumber?"#ECECF2":"#FFFFFF"};
  ${e=>0!==e.tabNumber&&r.iv`
      cursor: pointer;
    `};
`,Se=r.ZP.div`
  width: 8px;
  height: 8px;
  position: absolute;
  top: 4px;
  left: 4px;
  border-radius: 2px;
  ${e=>0!==e.tabNumber&&r.iv`
      cursor: pointer;
    `}
`,Ze=r.ZP.div`
  display: flex;
  position: relative;
`;var Ce=n(6444),Pe=n(1467);function Te(){const[e,t]=(0,a.useState)("1"===localStorage.getItem("its-keyword-analysis-closed")),[n,l]=(0,a.useState)(""),[r,i]=(0,a.useState)(0),[o,s]=(0,a.useState)(!1),[d,c]=(0,a.useState)(),[u,p]=(0,a.useState)(),[m,f]=(0,a.useState)(),[x,v]=(0,a.useState)(0),b=e=>{r&&window.open(`https://itemscout.io/keyword?id=${r}&tab=${e}&from=extension&fromSub=extension_button_${e}`,"_blank")},E=()=>{return e=this,t=void 0,a=function*(){const e=document.body.clientWidth;e!==x&&v(e)},new((n=void 0)||(n=Promise))((function(l,r){function i(e){try{s(a.next(e))}catch(e){r(e)}}function o(e){try{s(a.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?l(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,o)}s((a=a.apply(e,t||[])).next())}));var e,t,n,a};return(0,a.useEffect)((()=>{re.Z.getCurrentHost().then((t=>{var n;null===(n=document.getElementById("keyword-analysis-container"))||void 0===n||n.setAttribute("style",`\n            transform: scale(${x/1280});\n            transform-origin: top left;\n          `),window.parent.postMessage({m:"itemscoutKeywordAnalysisResize",w:x,o:!e},"https://"+t)}))}),[e,x]),(0,a.useEffect)((()=>{!r||o||e||(s(!0),ae.Z.get(ae.Z.urls.keyword.statMain(r)).then((e=>{var t,a,l,i,o,s,d,u,p,m,g,h;c(e.data),Ce.Z.logEvent("seller_searched_keywords",{from:"extension",from_sub:"naver_shopping_keyword_analysis",keyword:n,keyword_id:r,category1:null!==(l=null===(a=null===(t=e.data.categoryResult[0])||void 0===t?void 0:t.categoryInfoList[0])||void 0===a?void 0:a.name)&&void 0!==l?l:"N/A",category2:null!==(s=null===(o=null===(i=e.data.categoryResult[0])||void 0===i?void 0:i.categoryInfoList[1])||void 0===o?void 0:o.name)&&void 0!==s?s:"N/A",category3:null!==(p=null===(u=null===(d=e.data.categoryResult[0])||void 0===d?void 0:d.categoryInfoList[2])||void 0===u?void 0:u.name)&&void 0!==p?p:"N/A",category4:null!==(h=null===(g=null===(m=e.data.categoryResult[0])||void 0===m?void 0:m.categoryInfoList[3])||void 0===g?void 0:g.name)&&void 0!==h?h:"N/A"})})),ae.Z.get(ae.Z.urls.keyword.contentsCompetitionStats(r)).then((e=>{p(e.data)})),ae.Z.get(ae.Z.urls.keyword.shoppingIndex(n)).then((e=>{const{data:t}=e,n={order:t.pc.shoppingSectionOrder,names:t.pc.sectionNames},a={order:t.pc.shoppingTabOrder,names:t.pc.tabNames},l={adult:t.adult,score:t.shoppingKeywordQuotient,desc:t.shoppingKeywordQuotientDesc,pcSection:n,pcTab:a};f(l)})))}),[e,o,r]),(0,a.useEffect)((()=>(window.addEventListener("resize",E),re.Z.getLastQuery().then((e=>{const t=decodeURIComponent(e);l(t),le.Z.getId(t).then((e=>{i(e),Ce.Z.init().then((()=>{Ce.Z.logEvent("show_extension",{page:"keyword-analysis"})}))}))})),()=>{window.removeEventListener("resize",E)})),[]),a.createElement(a.Fragment,null,le.Z&&a.createElement(g,{isClosed:e,setIsClosed:t},a.createElement(Me,null,a.createElement(Ne,null,a.createElement(Ie,null,"네이버 쇼핑 분석"),a.createElement(Fe,null," '",n,"'")),a.createElement("div",{style:{marginRight:10}},a.createElement(h.Z,{onClick:b,tabIndex:1,text:"상품 목록",iconName:"HeaderRedirectionArrow",direction:"right",addtionalStyle:{justifyContent:"center"}})),a.createElement("div",null,a.createElement(h.Z,{onClick:b,tabIndex:2,text:"연관 키워드",iconName:"HeaderRedirectionArrow",direction:"right",addtionalStyle:{justifyContent:"center"}})))),!e&&a.createElement(Re,null,a.createElement($e,null,a.createElement(Ae,null,a.createElement(ze,null,d?a.createElement(y,{keywordStatMain:d}):a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:220,height:110,borderRadius:8,marginRight:8,border:"1px solid #e7e8ef"}},a.createElement(Pe.Z,{color:"#739AF6",loading:!0,size:20})),d?a.createElement(P,{keywordStatMain:d}):a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:410,height:110,borderRadius:8,border:"1px solid #e7e8ef"}},a.createElement(Pe.Z,{color:"#739AF6",loading:!0,size:50}))),d&&u&&m?a.createElement(B,{keywordStatMain:d,keywordContentsCompetitionStat:u,shoppingIndex:m}):a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:640,height:170,borderRadius:8,marginTop:10,border:"1px solid #e7e8ef"}},a.createElement(Pe.Z,{color:"#739AF6",loading:!0,size:50}))),n&&d?a.createElement(Ee,{keyword:n,keywordStatMain:d}):a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:590,height:290,borderRadius:8,border:"1px solid #e7e8ef"}},a.createElement(Pe.Z,{color:"#739AF6",loading:!0,size:50})))))}const Ne=r.ZP.span`
  padding: 0 20px 0 20px;
`,Me=r.ZP.div`
  display: flex;
  align-items: center;
`,Ie=r.ZP.span`
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 19px;
`,Fe=r.ZP.span`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 19px;
  color: rgba(98, 102, 113, 0.5);
`,Re=r.ZP.div`
  width: 1280px;
  padding: 20px;
  border-width: 0 1px 1px 1px;
  border-color: #e7e8ef;
  border-style: solid;
  border-radius: 0px 0px 8px 8px;
`,$e=r.ZP.div`
  display: flex;
  width: 1280px;
`,Ae=(r.ZP.div`
  text-decoration-line: underline;
  padding-top: 30px;
  height: 55px;
`,r.ZP.div`
  width: 640px;
  height: 290px;
  margin-right: 10px;
`),ze=r.ZP.div`
  display: flex;
  height: 110px;
`,Oe=document.createElement("div");Oe.id="keyword-analysis-container",document.body.appendChild(Oe),(0,l.s)(Oe).render(a.createElement((function(){const[e,t]=(0,a.useState)("1"===localStorage.getItem("its-keyword-analysis-hidden"));return(0,a.useEffect)((()=>{const e=()=>{"0"===localStorage.getItem("its-keyword-analysis-hidden")&&re.Z.getCurrentHost().then((e=>{window.parent.postMessage({m:"itemscoutKeywordAnalysisResize",w:0,o:!1,mar:!0},"https://"+e)})),t("1"===localStorage.getItem("its-keyword-analysis-hidden"))};return window.addEventListener("storage",e),null===localStorage.getItem("its-keyword-analysis-hidden")&&localStorage.setItem("its-keyword-analysis-hidden","1"),()=>{window.removeEventListener("storage",e)}}),[]),a.createElement(a.Fragment,null,e?a.createElement(Te,null):a.createElement(a.Fragment,null))}),null))}},n={};function a(e){var l=n[e];if(void 0!==l)return l.exports;var r=n[e]={id:e,loaded:!1,exports:{}};return t[e].call(r.exports,r,r.exports,a),r.loaded=!0,r.exports}a.m=t,a.amdO={},e=[],a.O=(t,n,l,r)=>{if(!n){var i=1/0;for(c=0;c<e.length;c++){for(var[n,l,r]=e[c],o=!0,s=0;s<n.length;s++)(!1&r||i>=r)&&Object.keys(a.O).every((e=>a.O[e](n[s])))?n.splice(s--,1):(o=!1,r<i&&(i=r));if(o){e.splice(c--,1);var d=l();void 0!==d&&(t=d)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[n,l,r]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e+"../"})(),(()=>{var e={824:0};a.O.j=t=>0===e[t];var t=(t,n)=>{var l,r,[i,o,s]=n,d=0;if(i.some((t=>0!==e[t]))){for(l in o)a.o(o,l)&&(a.m[l]=o[l]);if(s)var c=s(a)}for(t&&t(n);d<i.length;d++)r=i[d],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(c)},n=self.webpackChunkitemscout=self.webpackChunkitemscout||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var l=a.O(void 0,[348,528,981,893,292,132],(()=>a(2153)));l=a.O(l)})();