!function(e){var n={};function t(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:i})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(i,o,function(n){return e[n]}.bind(null,o));return i},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=45)}({45:function(e,n,t){e.exports=t(46)},46:function(e,n,t){"use strict";(new function(){const e=new Map,n=new Map,t=new Map;var i;const o={hmoenmfdbkbjcpiibpfakppdpahlfnpo:!0,mmhofgmpfhjnekcfjelmdkjogjildhji:!0},r="BackgroundPage:publish";function s(e){if(e.name){var n=f.get(e.tabId);n&&(n.removePanel(e),n.hasPanels()||(f.delete(e.tabId),0===f.count()&&chrome.tabs.onUpdated.removeListener(a)))}}function a(e,n,t){const i=f.get(e);"loading"===n.status&&i&&i.hasPanels()&&chrome.tabs.executeScript(e,{file:"dist/contentScript.js",runAt:"document_start"})}function c(e,n){var t=f.get(n);t&&(t.hasSubscription(e.action)?t.sendMessage(e):t.queueMessage(e))}function u(e,n){t.has(e)&&t.get(e).forEach(function(e){try{e.apply(null,n)}catch(e){console.error(e)}})}function d(e){const n=e&&e.sender&&e.sender.tab?e.sender.tab.id:null;return null===n?e.tabId||-1:n}function f(e){const n=new Set,t=new Map;var i=[];this.addPanel=function(e){e.name&&t.set(e.name,e)},this.removePanel=function(e){t.delete(e.name),this.hasPanels()||n.clear()},this.hasPanels=function(){return!!t.size},this.sendMessage=function(n){t.forEach(function(t,i,r){t.sender&&t.sender.id!==chrome.runtime.id&&o[t.sender.id]?(n.tabId=e,chrome.runtime.sendMessage(t.sender.id,n),delete n.tabId):t.postMessage(n)})},this.queueMessage=function(e){i.push(e),i.length>1e5&&i.shift()},this.addSubscription=function(e){n.add(e)},this.hasSubscription=function(e){return n.has(e)},this.queueFilter=function(e){i=i.filter(e)}}this.init=function(){i={devtoolsNotif:chrome.i18n.getMessage("open_devtools_notif")},chrome.runtime.onConnect.addListener(function(e){var n=d(e);-1!==n?(0===f.count()&&chrome.tabs.onUpdated.addListener(a),f.create(n),e.onDisconnect.addListener(function(e){}.bind(this))):e.onDisconnect.addListener(s.bind(this)),e.onMessage.addListener(function(e,n){if(e.subscribe){var t=e.tabId,i=f.get(t);i||(0===f.count()&&chrome.tabs.onUpdated.addListener(a),i=f.create(t)),i.addPanel(n),n.tabId=t;for(var o=0;o<e.subscribe.length;o++){var s=e.subscribe[o];i.hasSubscription(s)||i.addSubscription(s)}i.queueFilter(function(e){return!i.hasSubscription(e.action)||(c(e,t),!1)})}e.action===r?u(e.key,[e.data,n.sender]):-1!==(t=d(n))?c(e,t):console.warn("unknown action or tabId",e,t)}.bind(this))}.bind(this)),chrome.runtime.onConnectExternal.addListener(function(e){var t=e.sender.id,i=e.sender.frameId;o[t]&&(n.set(i,e),e.onDisconnect.addListener(s.bind(this)))}.bind(this)),chrome.runtime.onMessageExternal.addListener(function(e,n){var t=e.tabId;delete e.tabId,e.action===r?u(e.key,[e.data,n]):c(e,t)}.bind(this)),chrome.contextMenus.create({title:"Inspect Lightning Component",contexts:["all"],onclick:function(e,n){var t=f.get(n.id),o=t&&!!t.hasPanels();c({action:"AuraInspector:publish",key:"AuraInspector:OnContextMenu"},n.id),o||alert(i.devtoolsNotif)}.bind(this)}),this.subscribe("BackgroundPage:OnExternalMapToConnection",function(e,t){const i=n.get(t.frameId);if(i){0===f.count()&&chrome.tabs.onUpdated.addListener(a),f.create(e).addPanel(i),n.delete(t.frameId),i.tabId=e}}.bind(this)),this.subscribe("BackgroundPage:OpenTab",function(e,n){chrome.tabs.create({url:e})}.bind(this)),this.subscribe("BackgroundPage:InjectContentScript",function(e,n){chrome.tabs.executeScript(e,{file:"dist/contentScript.js"})}.bind(this))},this.publish=function(e,n){e&&u(e,[n])},this.subscribe=function(e,n){t.has(e)||t.set(e,[]),t.get(e).push(n)},f.create=function(n){var t=e.get(n);return t||(t=new f(n),e.set(n,t)),t},f.get=function(n){return e.get(n)},f.delete=function(n){e.delete(n)},f.count=function(){return e.size}}).init()}});