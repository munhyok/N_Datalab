(()=>{"use strict";console.log("inject.js loaded"),function(t){const e=document.createElement("script");e.src=t,(t=>{if(null==t)throw new Error("this is null");return t})(document.head||document.documentElement).appendChild(e)}(chrome.runtime.getURL("content_script/content_script.js"))})();