(()=>{"use strict";window.addEventListener&&window.addEventListener("message",(function(t){var n,e,i;"itemscoutWebExtensionClose"===t.data?function(){const t=document.getElementById("itemscoutWebExtension");t&&t.remove()}():"itemscoutKeywordAnalysisResize"===(null===(n=t.data)||void 0===n?void 0:n.m)?function(t,n,e){const i=document.getElementById("its-keyword-analysis");let d=400;940===t?d=n?293:45:n||(d=60),e&&(d=0),null==i||i.setAttribute("style",`\n\t\t\twidth: 100%; \n\t\t\theight: ${d}px;\n\t\t\tz-index: 100000; margin: ${e?"0px;":"0 0 30px 0;"}\n\t\t\tborder: none;\n\t\t`)}(t.data.w,t.data.o,t.data.mar):"itemscoutProductAnalysisResize"===(null===(e=t.data)||void 0===e?void 0:e.m)?(t.data.w,function(t,n,e){const i=document.getElementById("its-product-analysis");let d=n?450:62;e&&(d=0),null==i||i.setAttribute("style",`\n\t\t\twidth: 100%; \n\t\t\theight: ${d}px;\n\t\t\tz-index: 100000; margin: '30px 0 30px 0px';\n\t\t\tborder: none;\n\t\t`)}(0,t.data.o,t.data.mar)):"itemscoutMarginCalculatorResize"===(null===(i=t.data)||void 0===i?void 0:i.m)&&(t.data.w,function(t){const n=document.getElementById("its-margin-calculator");null==n||n.setAttribute("style","\n\t\t\twidth: 1200px;\n\t\t\theight: 690px;\n\t\t\tdisplay: block;\n\t\t\tmargin: 0 auto;\n\t\t\tz-index: 100000;\n\t\t\tborder: 1px solid #e7e8ef;\n\t\t\tbox-shadow: 0px 4px 20px rgba(0, 0, 0, 0.06);\n\t\t\tborder-radius: 20px;\t\t\t\n\t\t")}())}))})();