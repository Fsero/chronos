define(["require","css-builder","./lessc-server"],function(e,t,n){var r,i,s,o,u,a=require;return r={},i=a.toUrl("base_url").split("/"),i.pop(),s=i.join("/"),o=n&&n.Parser?new n.Parser({paths:[s+"/"]}):null,u=function(e){var t;return o.parse(e,function(e,n){if(e)throw e;t=n.toCSS()}),t},r.normalize=function(e,t){return e.substr(e.length-1,1)=="!"&&(e=e.substr(0,e.length-1)),e.substr(e.length-5,5)==".less"&&(e=e.substr(0,e.length-5)),t(e)},r.load=function(e,n,r,i){t.load(e+".less",n,r,i)},r.write=function(e,n,r){t.write(e,n,r,"less",u)},r.onLayerEnd=function(e,n){t.onLayerEnd(e,n,!0)},r});