/**
 * @license handlebars hbs 0.4.0 - Alex Sexton, but Handlebars has it's own licensing junk
 *
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/require-cs for details on the plugin this was based off of
 */

define(["handlebars","underscore","i18nprecompile","json2"],function(e,t,n,r){var i,s,o=["Msxml2.XMLHTTP","Microsoft.XMLHTTP","Msxml2.XMLHTTP.4.0"],u=function(){throw new Error("Environment unsupported.")},a=[],f="w+",l="hbs",c="@hbs",h="/styles/",p="/demo-build/styles/",d="template/helpers/",v="template/i18n/",m="screen.build.css";typeof window!="undefined"&&window.navigator&&window.document&&!window.navigator.userAgent.match(/Node.js/)?(s=function(){var e,t,n;if(typeof XMLHttpRequest!="undefined")return new XMLHttpRequest;for(t=0;t<3;t++){n=o[t];try{e=new ActiveXObject(n)}catch(r){}if(e){o=[n];break}}if(!e)throw new Error("getXhr(): XMLHttpRequest not available");return e},u=function(e,t){var n=s();n.open("GET",e,!0),n.onreadystatechange=function(e){n.readyState===4&&t(n.responseText)},n.send(null)}):typeof process!="undefined"&&process.versions&&!!process.versions.node?(i=require.nodeRequire("fs"),u=function(e,t){var n=i.readFileSync(e,"utf8")||"";n=n.replace(/^\uFEFF/,""),t(n)}):typeof java!="undefined"&&typeof java.io!="undefined"&&(u=function(e,t){var n=new java.io.File(e),r=new java.io.FileReader(n),i=new java.io.BufferedReader(r),s,o="";while((s=i.readLine())!==null)o+=new String(s)+"\n";i.close(),t(o)});var g={},y=function(e,t){g[e]?t(g[e]):u(e,function(n){g[e]=n,t.call(this,n)})},b=[],w={};return{get:function(){return e},write:function(e,t,n){if(t+c in a){var r=a[t+c];n.asModule(e+"!"+t,r)}},version:"0.4.0",load:function(s,o,g,E){function N(e,n){return t(e).forEach(function(e){e&&e.type&&e.type==="partial"&&n.push(e.id.string),e&&e.program&&e.program.statements&&N(e.program.statements,n),e&&e.program&&e.program.inverse&&e.program.inverse.statements&&N(e.program.inverse.statements,n)}),n}function C(e){var n=[];return e&&e.statements&&(n=N(e.statements,[])),t(n).unique()}function k(e){var t,n,i;if(e&&e.statements){t=e.statements[0];if(t&&t.type==="comment")try{return n=t.comment.replace(new RegExp("^[\\s]+|[\\s]+$","g"),""),i=r.parse(n),n}catch(s){return"{}"}}return"{}"}function L(e){if(!e)return[];var t=[e[0]],n=e[0],r;for(r=1;r<e.length;++r)e.hasOwnProperty(r)&&(n+="."+e[r],t.push(n));return t}function A(e,n,r,i){r=r?r+".":"";var s="",o=!1;return t(e).forEach(function(e){var o,u,a;if(e&&e.type&&e.type==="mustache"){if(!e.params||!e.params.length){o=L(e.id.parts);for(u in o)o[u]&&(s=o[u]||s,n.push(r+o[u]));n.push(r+e.id.string)}var f=["this",".","..","./..","../..","../../.."];e.params&&t(e.params).forEach(function(u){t(f).contains(u.original)&&i.push(e.id.string),o=L(u.parts);for(var a in o)o[a]&&(s=o[a]||s,i.push(e.id.string),n.push(r+o[a]))})}e&&e.mustache&&A([e.mustache],n,r+s,i),e&&e.program&&e.program.statements&&(a=A([e.mustache],[],"",i)[0]||"",e.program.inverse&&e.program.inverse.statements&&A(e.program.inverse.statements,n,r+s+(a?r+s?"."+a:a:""),i),A(e.program.statements,n,r+s+(a?r+s?"."+a:a:""),i))}),n}function O(e){var n=[],r=[];e&&e.statements&&(n=A(e.statements,[],undefined,r));var i=["helperMissing","blockHelperMissing","each","if","unless","with"];return{vars:t(n).chain().unique().map(function(e){return e===""?".":e.length&&e[e.length-1]==="."?e.substr(0,e.length-1)+"[]":e}).value(),helpers:t(r).chain().unique().map(function(e){return t(i).contains(e)?undefined:e}).compact().value()}}function M(l){u(D,function(u){var c=e.parse(u),v=C(c),y=k(c),T=O(c),N=T.vars,L=T.helpers||[],A=v.join("', 'hbs!").replace(/_/g,"/"),M=E.hbs&&E.hbs.disableHelpers?"":function(){var e,t=[],n=E.hbs&&E.hbs.helperPathCallback?E.hbs.helperPathCallback:function(e){return(E.hbs&&E.hbs.helperDirectory?E.hbs.helperDirectory:d)+e};for(e=0;e<L.length;e++)t[e]="'"+n(L[e])+"'";return t}().join(","),P="",H="",B="",j,F,I;A&&(A=",'hbs!"+A+"'"),M&&(M=","+M);if(y!=="{}")try{j=r.parse(y),j&&j.styles&&(b=t.union(b,j.styles),require.isBrowser&&!E.isBuild?(F=document.head||document.getElementsByTagName("head")[0],t(j.styles).forEach(function(e){w[e]||(I=document.createElement("link"),I.href=E.baseUrl+h+e+".css",I.media="all",I.rel="stylesheet",I.type="text/css",F.appendChild(I),w[e]=I)})):E.isBuild&&function(){var e=require.nodeRequire("fs"),n=t(j.styles).map(function(e){return w[e]?"":(w[e]=!0,"@import url("+e+".css);\n")}).join("\n");e.open(__dirname+p+m,f,"0666",function(t,r){e.writeSync(r,n,null,encoding="utf8"),e.close(r)}),f="a"}())}catch(q){console.log("error injecting styles")}!E.isBuild&&!E.serverRender&&(P="<!-- START - "+s+" -->",H="<!-- END - "+s+" -->",B="t.meta = "+y+";\n"+"t.helpers = "+r.stringify(L)+";\n"+"t.deps = "+r.stringify(v)+";\n"+"t.vars = "+r.stringify(N)+";\n");var R=x?!1:t.extend(l,E.localeMapping),U=n(u,R,{originalKeyFallback:(E.hbs||{}).originalKeyFallback});u="/* START_TEMPLATE */\ndefine(['hbs','handlebars'"+A+M+"], function( hbs, Handlebars ){ \n"+"var t = Handlebars.template("+U+");\n"+"Handlebars.registerPartial('"+s.replace(/\//g,"_")+"', t);\n"+B+"return t;\n"+"});\n"+"/* END_TEMPLATE */\n",E.isBuild&&(a[S]=u),E.isBuild||(u+="\r\n//@ sourceURL="+D);for(var z in v)v.hasOwnProperty(z)&&(v[z]="hbs!"+v[z].replace(/_/g,"/"));E.isBuild?(g.fromText(u),o([s],function(e){g(e)})):require(v,function(){g.fromText(u),o([s],function(e){g(e)})}),E.removeCombined&&i.unlinkSync(D)})}var S=s+c,x=E.hbs&&E.hbs.disableI18n,T=[],D=o.toUrl(s+"."+(E.hbs&&E.hbs.templateExtension?E.hbs.templateExtension:l));x?M(!1):y(o.toUrl((E.hbs&&E.hbs.i18nDirectory?E.hbs.i18nDirectory:v)+(E.locale||"en_us")+".json"),function(e){M(r.parse(e))})}}});