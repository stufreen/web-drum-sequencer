var serviceWorkerOption = {
  "assets": [
    "./iconstats-2c838462c9f528410281.json",
    "./assets/fonts/33a7a7c3caf1424a788ad1a74046845f.woff2",
    "./assets/fonts/86cade2f761700598f5f2c260193cb09.woff",
    "./assets/fonts/8612f086e8406b4b304caa7cac52a0a7.woff2",
    "./assets/fonts/21e11f3e402000cc47311642b081a30a.woff",
    "./assets/fonts/c7262c85fc05c9177075e237c23372fe.woff2",
    "./assets/fonts/bb67ace0f25b28040a393a79d2eacf49.woff",
    "./assets/audio/kick-1-r1.wav",
    "./assets/audio/snare-1-r1.wav",
    "./assets/audio/hat-closed-r1.wav",
    "./assets/audio/rim-r1.wav",
    "./assets/audio/Tambourine-R4.wav",
    "./assets/audio/808BD_Short2-R8_C2A.wav",
    "./assets/audio/808BD_Long-R8_C2A.wav",
    "./assets/audio/808CowLong-R8_C2A.wav",
    "./assets/audio/808SD_Med-R8_C2A.wav",
    "./assets/audio/808Clap-R8_01.wav",
    "./assets/audio/808HH-JD800.wav",
    "./assets/audio/808HHo-JD800.wav",
    "./assets/audio/low.wav",
    "./assets/audio/high.wav",
    "./assets/audio/snare.wav",
    "./assets/images/simplegray.png",
    "./assets/images/github.svg",
    "./assets/js/bundle.js"
  ]
};
        
        !function(e){var t={};function n(r){if(t[r])return t[r].exports;var u=t[r]={i:r,l:!1,exports:{}};return e[r].call(u.exports,u,u.exports,n),u.l=!0,u.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var u in e)n.d(r,u,function(t){return e[t]}.bind(null,u));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";self.addEventListener("fetch",function(e){e.respondWith(caches.match(e.request).then(function(t){if(t)return t;var n=e.request.clone();return fetch(n).then(function(t){if(!t||200!==t.status||"basic"!==t.type)return t;var n=t.clone();return caches.open("wdsCache").then(function(t){t.put(e.request,n)}),t})}))})}]);