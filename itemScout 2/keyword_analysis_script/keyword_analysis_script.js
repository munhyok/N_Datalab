(()=>{"use strict";var e;let t=document.getElementById("its-keyword-analysis");t&&t.remove(),t=document.createElement("iframe"),t.id="its-keyword-analysis",t.src=chrome.runtime.getURL("keyword_analysis/keyword_analysis.html"),t.setAttribute("scrolling","no"),t.setAttribute("style","\n    width: 0; height: 0;\n    border: none;\n  ");const s=document.body.querySelector('[class*="style_content_wrap"]');console.log("keyword analysis script has been loaded"),null===(e=document.body.querySelector('[class*="style_inner"]'))||void 0===e||e.insertBefore(t,s)})();