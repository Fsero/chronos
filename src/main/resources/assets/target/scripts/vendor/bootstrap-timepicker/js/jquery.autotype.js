/**
 * jQuery.autotype - Simple, accurate, typing simulation for jQuery
 *
 * version 0.5.0
 * 
 * http://michaelmonteleone.net/projects/autotype
 * http://github.com/mmonteleone/jquery.autotype
 *
 * Copyright (c) 2009 Michael Monteleone
 * Licensed under terms of the MIT License (README.markdown)
 */

(function(e){var t=1,n=2,r=3,i=4,s=function(e){return e===null||e.length===0},o=function(e){return e.toUpperCase()===e},u=function(e){return e.toLowerCase()===e},a=function(e,t){return o(e)&&u(t)||u(e)&&o(t)},f=function(e){return o(e)?e.toLowerCase():e.toUpperCase()},l=function(l,c){var h=[],p=!1,d={alt:!1,meta:!1,shift:!1,ctrl:!1},v=e.extend({},d),m="",g="",y=function(t){h.push(e.extend({},t,d))},b=function(e){d[e]=!0,y({keyCode:c[e],charCode:0,"char":"",type:r})},w=function(e){d[e]=!1,y({keyCode:c[e],charCode:0,"char":"",type:i})};for(var E=0;E<l.length;E++)if(!p&&E<=l.length-5&&l.charAt(E)==="{"&&l.charAt(E+1)==="{")E++,p=!0;else if(p&&E<=l.length-2&&l.charAt(E)==="}"&&l.charAt(E+1)==="}")E++,d[m]!==undefined?(v[m]=!0,b(m)):d[m.substring(1)]!==undefined?(v[m]=!1,w(m.substring(1))):y({keyCode:c[m],charCode:0,"char":"",type:n,controlKeyName:m}),p=!1,m="";else if(p)m+=l.charAt(E);else{var S=l.charAt(E);if(!s(g)&&a(g,S)||s(g)&&o(S))o(S)&&!d.shift?b("shift"):u(S)&&d.shift&&!v.shift&&w("shift");if(d.shift&&u(S)||!d.shift&&o(S))S=f(S);var x={keyCode:c[S]||S.charCodeAt(0),charCode:S.charCodeAt(0),"char":S,type:t};if(d.alt||d.ctrl||d.meta)x.char="";y(x),x.char!==""&&(g=x.char)}return h},c=function(t,s){var o={altKey:t.alt,metaKey:t.meta,shiftKey:t.shift,ctrlKey:t.ctrl},u=e.extend(e.Event(),o,{type:"keydown",keyCode:t.keyCode,charCode:0,which:t.keyCode}),a=e.extend(e.Event(),o,{type:"keypress",keyCode:0,charCode:t.charCode,which:t.charCode||t.keyCode}),f=e.extend(e.Event(),o,{type:"keyup",keyCode:t.keyCode,charCode:0,which:t.keyCode});t.type!==i&&s.trigger(u),t.type!==r&&t.type!==i&&s.trigger(a);if(!u.isPropagationStopped()&&!a.isPropagationStopped())if(t.type===n)switch(t.controlKeyName){case"enter":s.val(s.val()+"\n");break;case"back":s.val(s.val().substring(0,s.val().length-1))}else s.val(s.val()+t.char);t.type!==r&&s.trigger(f)},h=function(t,n,r,i){if(r>0){t=t.reverse();var s=i.setInterval(function(){var e=t.pop();c(e,n),t.length===0&&(i.clearInterval(s),n.trigger("autotyped"))},r)}else e.each(t,function(){c(this,n)}),n.trigger("autotyped")};e.fn.autotype=function(t,n){if(t===undefined||t===null)throw"Value is required by jQuery.autotype plugin";var r=e.extend({},e.fn.autotype.defaults,n),i=l(t,r.keyCodes[r.keyBoard]);return this.each(function(){h(i,e(this),r.delay,r.global)})},e.fn.autotype.defaults={version:"0.5.0",keyBoard:"enUs",delay:0,global:window,keyCodes:{enUs:{back:8,ins:45,del:46,enter:13,shift:16,ctrl:17,meta:224,alt:18,pause:19,caps:20,esc:27,pgup:33,pgdn:34,end:35,home:36,left:37,up:38,right:39,down:40,printscr:44,num0:96,num1:97,num2:98,num3:99,num4:100,num5:101,num6:102,num7:103,num8:104,num9:105,multiply:106,add:107,subtract:109,decimal:110,divide:111,f1:112,f2:113,f3:114,f4:115,f5:116,f6:117,f7:118,f8:119,f9:120,f10:121,f11:122,f12:123,numlock:144,scrolllock:145,"   ":9," ":32,tab:9,space:32,0:48,1:49,2:50,3:51,4:52,5:53,6:54,7:55,8:56,9:57,")":48,"!":49,"@":50,"#":51,$:52,"%":53,"^":54,"&":55,"*":56,"(":57,";":186,"=":187,",":188,"-":189,".":190,"/":191,"[":219,"\\":220,"]":221,"'":222,":":186,"+":187,"<":188,_:189,">":190,"?":191,"{":219,"|":220,"}":221,'"':222,a:65,b:66,c:67,d:68,e:69,f:70,g:71,h:72,i:73,j:74,k:75,l:76,m:77,n:78,o:79,p:80,q:81,r:82,s:83,t:84,u:85,v:86,w:87,x:88,y:89,z:90,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90}}}})(jQuery);