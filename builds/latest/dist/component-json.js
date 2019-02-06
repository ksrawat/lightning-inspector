!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=72)}({0:function(t,e,n){"use strict";function r(t){this.isComponentId=function(){return r.isComponentId(t)},this.isActionId=function(){return r.isActionId(t)},this.getCleanId=function(){return r.getCleanId(t)},this.toString=function(){return this.getCleanId()},this.getRawId=function(){return t}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r,r.isComponentId=function(t){return"string"==typeof t&&t.startsWith(r.COMPONENT_CONTROL_CHAR)},r.isActionId=function(t){return"string"==typeof t&&t.startsWith(r.ACTION_CONTROL_CHAR)},r.getCleanId=function(t){return"string"==typeof t&&(t.startsWith(r.COMPONENT_CONTROL_CHAR)||t.startsWith(r.ACTION_CONTROL_CHAR))?t.substr(1):t},Object.defineProperty(r,"COMPONENT_CONTROL_CHAR",{value:"☺",configurable:!1,writable:!1}),Object.defineProperty(r,"ACTION_CONTROL_CHAR",{value:"❄",configurable:!1,writable:!1}),Object.defineProperty(r,"ESCAPE_CHAR",{value:"⍓",configurable:!1,writable:!1})},72:function(t,e,n){t.exports=n(73)},73:function(t,e,n){"use strict";var r=function(t){return t&&t.__esModule?t:{default:t}}(n(74)),o=document.currentScript.ownerDocument,u=Object.create(HTMLDivElement.prototype);u.createdCallback=function(){var t=o.querySelector("template"),e=document.importNode(t.content,!0);(this.shadowRoot||this.createShadowRoot()).appendChild(e);var n=this.textContent;new MutationObserver(function(t){t.forEach(function(t){var e=t.target,r=e.textContent;n!==r&&e.update(),n=r})}).observe(this,{attributes:!1,childList:!0,characterData:!0}),""!=n&&this.update()},u.update=function(){var t=this.shadowRoot||this.createShadowRoot(),e=t.querySelector(".renderjson");e&&t.removeChild(e),(e=t.querySelector(".returnValue"))&&t.removeChild(e);var n,o=this.textContent;if(o&&o.trim()&&{"{":!0,"[":!0,"(":!0,"/":!0}[o.charAt(0)])try{n=JSON.parse(o)}catch(t){}if(n)t.appendChild(function(t,e){var n={expandTo:0};void 0!==(e=e||n).expandTo&&null!==e.expandTo||(expandTo=n.expandTo);var o=r.default.show_to_level;r.default.set_icons("+","-"),r.default.set_show_to_level(e.expandTo);var u=(0,r.default)(t);return r.default.set_show_to_level(o),u}(n,{expandTo:this.getAttribute("expandTo")}));else if(void 0!==o&&"undefined"!==o){var u=document.createElement("span");u.className="returnValue",u.appendChild(document.createTextNode(o)),t.appendChild(u)}},document.registerElement("aurainspector-json",{prototype:u})},74:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(t){return t&&t.__esModule?t:{default:t}}(n(0));const o=function(){var t=function(){for(var t=[];arguments.length;)t.push(e(i(Array.prototype.shift.call(arguments)),u(Array.prototype.shift.call(arguments))));return t},e=function(){for(var t=Array.prototype.shift.call(arguments),n=0;n<arguments.length;n++)arguments[n].constructor==Array?e.apply(this,[t].concat(arguments[n])):t.appendChild(arguments[n]);return t},n=function(t,e){return t.insertBefore(e,t.firstChild),t},o=function(t){for(var e in t)if(t.hasOwnProperty(e))return!1;return!0},u=function(t){return"object"==typeof t&&"nodeName"in t?t:document.createTextNode(t)},i=function(t){var e=document.createElement("span");return t&&(e.className=t),e},a=function(t,e,n){var r=document.createElement("a");return e&&(r.className=e),r.appendChild(u(t)),r.href="#",r.onclick=function(){return n(),!1},r};function s(c,f,d,p,_,y){var h=d?"":f,v={$serId$:!0,$serRefId$:!0},b=function(r,o,s,c,f){var d,_=i(c),y=function(){d||e(_.parentNode,d=n(f(),a(l.hide,"disclosure",function(){d.style.display="none",_.style.display="inline"}))),d.style.display="inline",_.style.display="none"};e(_,a(l.show,"disclosure",y),t(c+" syntax",r),a(o,null,y),t(c+" syntax",s));var v=e(i(),u(h.slice(0,-1)),_);return p>0&&y(),v};if(null===c)return t(null,h,"keyword","null");if(void 0===c)return t(null,h,"keyword","undefined");if("string"==typeof c&&c.length>_)return b('"',c.substr(0,_)+" ...",'"',"string",function(){return e(i("string"),t(null,h,"string",JSON.stringify(c)))});if("object"!=typeof c){if("string"==typeof c&&r.default.isComponentId(c)){var m=document.createElement("aurainspector-auracomponent");return m.setAttribute("globalId",r.default.getCleanId(c)),t(null,h,typeof c,m)}return t(null,h,typeof c,JSON.stringify(c))}return c.constructor==Array?0==c.length?t(null,h,"array syntax","[]"):b("["," ... ","]","array",function(){for(var n=e(i("array"),t("array syntax","[",null,"\n")),r=0;r<c.length;r++)e(n,s(c[r],f+"    ",!1,p-1,_,y),r!=c.length-1?t("syntax",","):[],u("\n"));return e(n,t(null,f,"array syntax","]")),n}):o(c)?t(null,h,"object syntax","{}"):b("{","...","}","object",function(){var n=e(i("object"),t("object syntax","{",null,"\n")),r=Object.keys(c).filter(function(t){return!v.hasOwnProperty(t)}),o=r.length;y&&(r=r.sort());for(var a=r[o-1],l=0;l<o;l++){var d=r[l];e(n,t(null,f+"    ","key",'"'+d+'"',"object syntax",": "),s(c[d],f+"    ",!0,p-1,_,y),d!=a?t("syntax",","):[],u("\n"))}return e(n,t(null,f,"object syntax","}")),n})}var l=function t(n){var r=e(document.createElement("pre"),s(n,"",!1,t.show_to_level,t.max_string_length,t.sort_objects));return r.className="renderjson",r};return l.set_icons=function(t,e){return l.show=t,l.hide=e,l},l.set_show_to_level=function(t){return l.show_to_level="string"==typeof t&&"all"===t.toLowerCase()?Number.MAX_VALUE:t,l},l.set_max_string_length=function(t){return l.max_string_length="string"==typeof t&&"none"===t.toLowerCase()?Number.MAX_VALUE:t,l},l.set_sort_objects=function(t){return l.sort_objects=t,l},l.set_show_by_default=function(t){return l.show_to_level=t?Number.MAX_VALUE:0,l},l.set_resolve_component_ids=function(t){return l.resolve_component_ids=!!t,l},l.set_icons("⊕","⊖"),l.set_show_by_default(!1),l.set_sort_objects(!1),l.set_max_string_length("none"),l.set_resolve_component_ids(!0),l}();e.default=o}});