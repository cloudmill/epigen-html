(()=>{"use strict";var e,t={168:(e,t,a)=>{var r=a(638);r((function(){r(".nav-page-d").each((function(){var e=r(this),t={activeItem:e.find(".nav-page-d__item--active"),setActiveItem:function(e){t.activeItem.removeClass("nav-page-d__item--active"),t.activeItem=e,t.activeItem.addClass("nav-page-d__item--active")}};e.find(".nav-page-d__link").on("click",(function(e){e.preventDefault();var a=r(this).closest(".nav-page-d__item");t.setActiveItem(a)}))}))}))}},a={};function r(e){var n=a[e];if(void 0!==n)return n.exports;var i=a[e]={exports:{}};return t[e].call(i.exports,i,i.exports,r),i.exports}r.m=t,e=[],r.O=(t,a,n,i)=>{if(!a){var v=1/0;for(s=0;s<e.length;s++){for(var[a,n,i]=e[s],c=!0,o=0;o<a.length;o++)(!1&i||v>=i)&&Object.keys(r.O).every((e=>r.O[e](a[o])))?a.splice(o--,1):(c=!1,i<v&&(v=i));c&&(e.splice(s--,1),t=n())}return t}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[a,n,i]},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={143:0,532:0};r.O.j=t=>0===e[t];var t=(t,a)=>{var n,i,[v,c,o]=a,s=0;for(n in c)r.o(c,n)&&(r.m[n]=c[n]);if(o)var l=o(r);for(t&&t(a);s<v.length;s++)i=v[s],r.o(e,i)&&e[i]&&e[i][0](),e[v[s]]=0;return r.O(l)},a=self.webpackChunk=self.webpackChunk||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var n=r.O(void 0,[638,532],(()=>r(168)));n=r.O(n)})();