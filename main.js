(()=>{"use strict";var n={208:(n,e,t)=>{t.d(e,{A:()=>c});var r=t(601),a=t.n(r),o=t(314),i=t.n(o)()(a());i.push([n.id,"html {\n    box-sizing: border-box;\n    font-size: 16px;\n  }\n  \n  *, *:before, *:after {\n    box-sizing: inherit;\n  }\n  \n  body, h1, h2, h3, h4, h5, h6, p, ol, ul {\n    margin: 0;\n    padding: 0;\n    font-weight: normal;\n  }\n  \n  ol, ul {\n    list-style: none;\n  }\n  \n  img {\n    max-width: 100%;\n    height: auto;\n  }\n\n\n  :root {\n    /* color palette */\n\n    --color-white: #F2EFE7;\n    --color-lightblue: #9ACBD0;\n    --color-turquoise: #48A6A7;\n    --color-clearblue: #91C0F8;\n    --color-darkblue: #2973B2;\n    --color-darkerblue: #16468E;\n    --color-transparent-darkblue: rgba(14, 47, 132, 0.5);\n\n    /* padding size  */\n\n    --pd-small: 8px;\n    --pd-medium: 16px;\n    --pd-large: 32px;\n    --pd-extra-large: 56px;\n  }\n\n  body {\n    background-color: var(--color-darkblue);\n    color: var(--color-white);\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    display: flex;\n    justify-content: center;\n    align-items: center;  \n  }\n\n  .weather_app_container {\n    padding-top: var(--pd-medium);\n    display: grid;\n    grid-template-columns: repeat(3,1fr);\n    grid-auto-rows: auto;\n    gap: var(--pd-medium);\n    max-width: 1200px;\n    padding: var(--pd-medium) 0;\n  }\n\n  .search_container {\n    grid-column: 1 / 4;\n    background-color: var(--color-transparent-darkblue);\n    border-radius: var(--pd-small);\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    gap: var(--pd-large);\n    padding: var(--pd-large) var(--pd-large);\n    \n\n    input {\n      flex: 1;\n      width: 100%;\n      height: 40px;\n      border-radius: var(--pd-small);\n      padding-left: var(--pd-small);\n      font-weight: bold;\n    }\n\n    button {\n      flex: 0;\n      width: 100%;\n      height: 40px;\n      border-radius: var(--pd-small);\n      background-color: var(--color-clearblue);\n      color: white;\n      font-weight: bold;\n      border: none;\n      padding: var(--pd-small) var(--pd-large);\n      transition: .3s;\n    }\n\n    button:hover {\n      color: var(--color-white);\n      background-color: var(--color-turquoise);\n      font-size: var(--pd-medium);\n      border: white solid 3px;\n      font-weight: bold;\n      \n      cursor: pointer;\n    }\n\n  }\n\n  .weather_container {\n    grid-column: 1 / 4;\n    grid-row: 2;\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    \n\n    .temperature_details {\n\n      padding-right: var(--pd-extra-large);\n\n      h1 {\n        font-size: 48px;\n        font-weight: bold;\n      }\n      h2 {\n        font-weight: bold;\n        font-size: 36px;\n        margin-bottom: var(--pd-medium);\n      }\n\n      p {\n        font-weight: bold; \n        color: #91C0F8;\n      }\n\n    }\n\n    img {\n      max-width: 400px;\n      width: 300px;\n      min-width: 150px;\n      height: auto;\n    }\n\n  }\n\n  .weather_trend_container {\n    border-radius: var(--pd-small);\n    grid-column: 1 / 4;\n    grid-row: 3;\n    padding: var(--pd-medium);\n    background-color: var(--color-transparent-darkblue);\n\n\n    .time_container {\n      display: flex;\n      justify-content: space-between;\n      min-width: 1000px;\n\n      div {\n        display: flex;\n        align-items: center;\n        flex-direction: column;\n\n        img {\n          width: 100%;\n          height: auto;\n          margin: var(--pd-small) 0;\n        }\n\n        h4:last-of-type {\n          font-weight: bold;\n        }\n      }\n    }\n\n    canvas {\n      width: 100%;\n      min-width: 1000px;\n      padding: var(--pd-small) 0;\n      \n    }\n\n    .percentage_container {\n      display: flex;  \n      justify-content: space-between;\n      min-width: 1000px;\n      .percentage_holder {\n        \n        display: flex;\n        flex-direction: column-reverse;\n        gap: var(--pd-small);\n        align-items: center;\n      }\n    }\n  }\n\n\n  .weather_details_container {\n\n    grid-column: 1 / 4;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n    gap: var(--pd-medium);\n\n    .details_container {\n\n      background-color: var(--color-transparent-darkblue);\n      padding: var(--pd-medium);\n      border-radius: var(--pd-small);\n      \n      div {\n        display: flex;\n        gap: 5px;\n      }\n\n      h4 {\n        padding-top: var(--pd-medium);\n      }\n\n      img {\n        width: 24px;\n        height: auto;\n      }\n    }\n  }\n\n  .days_container {\n\n    .week_list {\n      background-color: var(--color-transparent-darkblue);\n      max-width: 400px;\n      padding: var(--pd-medium);\n      border-radius: var(--pd-medium);\n\n      li {\n\n        display: grid;\n        grid-template-columns: 1.5fr repeat(4, 1fr);\n        padding: 4px 0;\n        gap: var(--pd-small);\n      }\n\n      .percentage_holder {\n        display: flex;\n        align-items: center;\n      }\n\n      img {\n        width: 36px;\n        height: auto;\n      }\n    }\n  }\n\n  .day_cycle_container {\n    grid-column: 2 / 4;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: var(--color-transparent-darkblue);\n    border-radius: var(--pd-small);\n    padding: var(--pd-small);\n    text-align: center;\n    text-transform: uppercase;\n\n    img {\n      width: 300px;\n      height: auto;\n      object-fit: contain;\n      overflow: hidden;\n      object-fit: contain;\n    }\n\n    h2 {\n      font-weight: bold;\n      letter-spacing: 1.5px;\n    }\n\n  }\n\n  @media (max-width: 1100px){\n\n    body {\n      padding: var(--pd-small);\n    }\n\n    .weather_container {\n      grid-column: 1 / 4;\n      grid-row-start: 2;\n      justify-content: space-between;\n      padding: var(--pd-medium) var(--pd-small);\n\n      img {\n        margin-right: var(--pd-large);\n      }\n    }\n\n    .search_container {\n      grid-column: 1 / 4;\n      grid-row-start: 1;\n      gap: var(--pd-small);\n      flex-direction: row;\n\n      input, button {\n        /* hiehgto ofi nput button */\n        \n        height: 40px;\n      }\n\n      input {\n        flex: 3;\n      }\n\n      button {\n        flex: 1;\n      }\n    }\n\n    .weather_trend_container{\n      grid-column: 1 / 4;\n      overflow-x: auto;\n      grid-row-start: 3\n      ;\n    }\n\n    .weather_details_container {\n\n      grid-column: 1 / 4;\n      grid-row-start: 4;\n    }\n\n\n    .days_container {\n      grid-row-start: 5;\n      grid-column: 1 / 4;\n\n      .week_list {\n        max-width: 100%;\n        min-width: 350px;\n\n        h4 {\n          font-weight: bold;\n        }\n      }\n    }\n\n    .day_cycle_container {\n      grid-column: 1 / 4;\n    }\n  }\n\n  @media (max-width: 700px) {\n    .weather_container {\n      flex-direction: column;\n      align-items: center;\n      gap: var(--pd-medium);\n\n      img {\n        width: 100%;\n      }\n\n    }\n    .day_cycle_container {\n      padding: var(--pd-medium);\n      flex-direction: column;\n      justify-content: space-around;\n    }\n  }",""]);const c=i},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,a,o){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);r&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),e.push(l))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var o={},i=[],c=0;c<n.length;c++){var d=n[c],s=r.base?d[0]+r.base:d[0],l=o[s]||0,u="".concat(s," ").concat(l);o[s]=l+1;var p=t(u),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var f=a(m,r);r.byIndex=c,e.splice(c,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var o=r(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<o.length;i++){var c=t(o[i]);e[c].references--}for(var d=r(n,a),s=0;s<o.length;s++){var l=t(o[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}o=d}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={id:r,exports:{}};return n[r](o,o.exports,t),o.exports}function r(n,...e){e.forEach((e=>n.appendChild(e)))}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&(!n||!/^http(s?):/.test(n));)n=r[a--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0;var a=t(72),o=t.n(a),i=t(825),c=t.n(i),d=t(659),s=t.n(d),l=t(56),u=t.n(l),p=t(540),m=t.n(p),f=t(113),h=t.n(f),g=t(208),v={};v.styleTagTransform=h(),v.setAttributes=u(),v.insert=s().bind(null,"head"),v.domAPI=c(),v.insertStyleElement=m(),o()(g.A,v),g.A&&g.A.locals&&g.A.locals;const b=t.p+"c33ef66438b2725bead593a7abbe18bc.svg",y=t.p+"066dcb06109ea0272a516d4f99c36925.svg",x=t.p+"7ca354d5a3afee432588b4a001dabe2c.svg",w=t.p+"2ff38017433744fd21e48333a345038a.svg",E=t.p+"98a2e7fe2109f244ea0f85cda24a4e4d.svg",_=t.p+"52fd588445619132978dd6bca92b4059.svg",C=t.p+"2f425d4497cd707434c12c37de1d5e27.svg",k=t.p+"65cbef0d5eb60333776b1aee8d2a6646.svg",S=t.p+"7fb7ecfc8c851acab6d1ec0337162836.svg",W=t.p+"24f9a4741fe33f66bc0d9fc06706aac7.svg",L=t.p+"130d6250fca4e54ff49f051788a840ef.svg",T=t.p+"e2327d5071146989f596c4d01b269f60.svg",M=t.p+"dce3f5e7e7d2c7e342ff5e169eee4fc4.svg",A=t.p+"6cf4adcd3e5042b690483bd65694aaa6.svg";(async function(){const n=document.querySelector("body"),e=function(){const n=function(){function n(n){return new Date(n).getDay()}function e(n){let e="";switch(n){case 0:e="Monday";break;case 1:e="Tuesday";break;case 2:e="Wednesday";break;case 3:e="Thursday";break;case 4:e="Friday";break;case 5:e="Saturday";break;case 6:e="Sunday";break;default:e="Unknown"}return e}return{getWeatherData:async function(n){const e=`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${n}?key=CWZPRKA3QEL8A7U7HNW4HGMC6&elements=%2Baqius`;try{const n=await fetch(e,{mode:"cors"});if(!n.ok)throw new error(`Error Status response code ${n.status}`);return await n.json()}catch(n){console.log(n)}},getDayByDate:n,getDayOfTheWeek:e,getWeekWeatherData:function(t){const r={};for(let a=1;a<=7;a++){const o=t.days[a];r[e(n(o.datetime))]=o}return r},formatWeatherTime:function(n){const e=Number(n.split(":")[0]);return e<=12?e+":AM":e-12+":PM"}}}();return{getWeatherData:async function(e){return await n.getWeatherData(e)},formatTime:function(e){return n.formatWeatherTime(e)},getWeekWeather:n.getWeekWeatherData}}();let t="bronx";const a={snow:M,rain:L,fog:k,wind:_,cloudy:W,"partly-cloudy-day":S,"partly-cloudy-night":T,"clear-day":b,"clear-night":A},o=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];let i=await e.getWeatherData(t);function c(n){const e=n.days[0],t=document.createElement("section");t.classList.add("weather_container");const o=function(n){const e=document.createElement("div");e.classList.add("temperature_details");const t=document.createElement("h1");t.textContent=i.resolvedAddress;const a=document.createElement("h2");a.textContent=n.temp+"°";const o=document.createElement("p");return o.textContent=n.description,r(e,t,a,o),e}(e),c=function(n){const e=document.createElement("img");return e.src=a[n.icon]||b,e}(e);return r(t,o,c),t}function d(n){const t=n.days[0],o=document.createElement("section");o.classList.add("weather_trend_container");const i=function(n){const t=n.hours,o=document.createElement("div");o.classList.add("time_container");for(const n of t){const t=document.createElement("div"),i=document.createElement("h4");i.textContent=e.formatTime(n.datetime);const c=document.createElement("img");c.src=a[n.icon]||b;const d=document.createElement("h4");d.textContent=Math.floor(n.temp)+"°",r(t,i,c,d),o.appendChild(t)}return o}(t),c=function(n){const e=document.createElement("canvas");e.id="myCanvas",e.width="1100",e.height="100";const t=e.getContext("2d");let r=0;for(const e of n.hours)t.lineTo(r,Math.floor(100-e.temp)),r+=50;return t.strokeStyle="white",t.lineWidth=2,t.stroke(),e}(t),d=function(n){const e=n.hours,t=document.createElement("div");t.classList.add("percentage_container");for(const n of e){const e=s(n);t.appendChild(e)}return t}(t);return r(o,i,c,d),o}function s(n){const e=document.createElement("div");e.classList.add("percentage_holder");const t=document.createElement("p");t.textContent=Math.floor(n.precipprob)+"%";const a=document.createElement("img");return a.src=y,r(e,a,t),e}function l(n,e,t){const a=document.createElement("div");a.classList.add("details_container");const o=document.createElement("div"),i=document.createElement("img");i.src=n;const c=document.createElement("h3");c.textContent=e,r(o,i,c);const d=document.createElement("h4");switch(e.toLowerCase()){case"uv index":d.textContent=t<=2?"Low":t>=3&&t<=5?"Moderate":"High";break;case"wind speed":d.textContent=t+" Mph";break;case"humidity":d.textContent=t+"%";break;case"pressure":d.textContent=(.0295301*t).toFixed(2)+" in";break;case"visibility":d.textContent=t;break;case"air quality":d.textContent=t<50?"Good":t<100?"Moderate":"Bad"}return r(a,o,d),a}function u(n,e){const t=document.createElement("li"),o=document.createElement("h4");o.textContent=n;const i=s(e),c=a[e.icon]||b,d=document.createElement("img");d.src=c;const l=document.createElement("h4");l.textContent=e.tempmin;const u=document.createElement("h4");return u.textContent=e.tempmax,r(t,o,i,d,l,u),t}function p(n){const[e,t,r]=n.split(":").map(Number);let a=e;return Number(e)>12&&(a=e-12),{hours:a,minutes:t,seconds:r}}function m(a){const s=document.createElement("div");s.classList.add("weather_app_container");const f=c(a),h=d(a),g=function(n){const e=document.createElement("div");return e.classList.add("weather_details_container"),r(e,l(b,"Uv Index",n.uvindex),l(_,"Wind Speed",n.windspeed),l(x,"Humidity",n.humidity),l(w,"Pressure",n.pressure),l(E,"Visibility",n.visibility),l(C,"Air Quality",n.aqius)),e}(a.currentConditions),v=function(n){console.log(n);const t=document.createElement("section");t.classList.add("days_container");const r=function(n){const e=document.createElement("ul");e.classList.add("week_list");for(const t of o){const r=u(t,n[t]);e.appendChild(r)}return e}(e.getWeekWeather(n));return t.appendChild(r),t}(a),y=function(n){const e=document.createElement("section");e.classList.add("day_cycle_container");const t=p(n.sunrise),a=document.createElement("h2");a.classList.add("sunrise"),a.textContent=`Sunrise - ${t.hours}:${t.minutes} AM`;const o=p(n.sunset),i=document.createElement("h2");i.classList.add("sunset"),i.textContent=`${o.hours}:${o.minutes} PM - Sunset`;const c=document.createElement("img");return c.src=b,r(e,a,c,i),e}(a.currentConditions),k=function(){const n=document.createElement("section");n.classList.add("search_container");const a=document.createElement("input");a.type="text",a.placeholder="Location";const o=document.createElement("button");return o.type="button",o.textContent="Submit",o.addEventListener("click",(async()=>{""!=a.value.trim()&&(t=a.value.trim(),i=await e.getWeatherData(t),m(i))})),r(n,a,o),n}();r(s,f,k,h,g,v,y),n.innerHTML="",r(n,s)}return{startWeatherApp:function(){m(i)}}})().then((n=>n.startWeatherApp()))})();