!function(){"use strict";function e(e,n,t){var i=document.querySelectorAll(e);for(var a in i)if(i.hasOwnProperty(a)){var o=i[a].className;(void 0===t||t.indexOf(o)<0)&&(i[a].className=n)}}var n=function(e,n,t){this.selector=e,this.hi=n,this.lo=t},t=[new n(".pure-menu","pure-menu pure-menu-horizontal","pure-menu"),new n(".navigation-header-subtitle","pure-menu-list navigation-header-subtitle pull-end","pure-menu-list navigation-header-subtitle"),new n(".navigation-header","navigation-header clearfix","navigation-header")];document.addEventListener("DOMContentLoaded",(function(){var n;e("img","pure-img"),e("table","pure-table",["lntable"]),function(){function n(){for(var n=document.documentElement.clientWidth>=768,i=0,a=t;i<a.length;i++){var o=a[i];e(o.selector,n?o.hi:o.lo)}}n(),window.addEventListener("resize",n)}(),null!==(n=document.getElementById("btn-gototop"))&&n.addEventListener("click",(function(){!function e(){var n=window.pageYOffset;n>0&&setTimeout(e,8),window.scroll(0,n-128)}()}))}))}();