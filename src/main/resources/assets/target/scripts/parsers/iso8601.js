define(["underscore","components/date_node","components/parser_utils"],function(e,t,n){return function(){function e(e){return'"'+e.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\x08/g,"\\b").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\f/g,"\\f").replace(/\r/g,"\\r").replace(/[\x00-\x07\x0B\x0E-\x1F\x80-\uFFFF]/g,escape)+'"'}var r={parse:function(r,i){function c(e,t,n){var r=e,i=n-e.length;for(var s=0;s<i;s++)r=t+r;return r}function h(e){var t=e.charCodeAt(0),n,r;return t<=255?(n="x",r=2):(n="u",r=4),"\\"+n+c(t.toString(16).toUpperCase(),"0",r)}function p(e){if(o<a)return;o>a&&(a=o,f=[]),f.push(e)}function d(){var e="RepeatingInterval@"+o,t=l[e];if(t)return o=t.nextPos,t.result;var n,i,s,a,f,c;u++,f=o,c=o,r.charCodeAt(o)===82?(n="R",o++):(n=null,u===0&&p('"R"'));if(n!==null){i=[],s=m();while(s!==null)i.push(s),s=m();i!==null?(r.charCodeAt(o)===47?(s="/",o++):(s=null,u===0&&p('"/"')),s!==null?(a=v(),a!==null?n=[n,i,s,a]:(n=null,o=c)):(n=null,o=c)):(n=null,o=c)}else n=null,o=c;return n!==null&&(n=function(e,t,n){return G("RepeatingInterval",{repetitions:Y(t,Infinity)||Infinity,interval:n})}(f,n[1],n[3])),n===null&&(o=f),u--,u===0&&n===null&&p("repeating-interval"),l[e]={nextPos:o,result:n},n}function v(){var e="Interval@"+o,t=l[e];if(t)return o=t.nextPos,t.result;var n,i,s,a,f,c;return u++,a=o,f=o,n=$(),n!==null?(r.charCodeAt(o)===47?(i="/",o++):(i=null,u===0&&p('"/"')),i!==null?(s=$(),s===null&&(s=V()),s!==null?n=[n,i,s]:(n=null,o=f)):(n=null,o=f)):(n=null,o=f),n!==null&&(n=function(e,t,n){return G("Interval",{start:t,rest:n})}(a,n[0],n[2])),n===null&&(o=a),n===null&&(a=o,f=o,n=V(),n!==null?(c=o,r.charCodeAt(o)===47?(i="/",o++):(i=null,u===0&&p('"/"')),i!==null?(s=$(),s!==null?i=[i,s]:(i=null,o=c)):(i=null,o=c),i=i!==null?i:"",i!==null?n=[n,i]:(n=null,o=f)):(n=null,o=f),n!==null&&(n=function(e,t,n){return G("Interval",{duration:t,rest:n})}(a,n[0],n[1])),n===null&&(o=a)),u--,u===0&&n===null&&p("interval"),l[e]={nextPos:o,result:n},n}function m(){var e="Int@"+o,t=l[e];if(t)return o=t.nextPos,t.result;var n;return u++,/^[0-9]/.test(r.charAt(o))?(n=r.charAt(o),o++):(n=null,u===0&&p("[0-9]")),u--,u===0&&n===null&&p("int"),l[e]={nextPos:o,result:n},n}function g(){var e="UnsafeIntegers@"+o,t=l[e];if(t)return o=t.nextPos,t.result;var n,r,i;u++,i=o,r=m();if(r!==null){n=[];while(r!==null)n.push(r),r=m()}else n=null;return n!==null&&(n=function(e,t){return Y(t.join(""))}(i,n)),n===null&&(o=i),u--,u===0&&n===null&&p("plain-integers"),l[e]={nextPos:o,result:n},n}function y(){var e="Integers@"+o,t=l[e];if(t)return o=t.nextPos,t.result;var n,r;return u++,r=o,n=g(),n!==null&&(n=function(e,t){return Y(t,0)}(r,n)),n===null&&(o=r),u--,u===0&&n===null&&p("[Integers]"),l[e]={nextPos:o,result:n},n}function b(){var e="Y@"+o,t=l[e];if(t)return o=t.nextPos,t.result;var n,i,s,a;return u++,s=o,a=o,n=y(),n!==null?(r.charCodeAt(o)===89?(i="Y",o++):(i=null,u===0&&p('"Y"')),i!==null?n=[n,i]:(n=null,o=a)):(n=null,o=a),n!==null&&(n=function(e,t){return t}(s,n[0])),n===null&&(o=s),u--,u===0&&n===null&&p("Years"),l[e]={nextPos:o,result:n},n}function w(){var e="M@"+o,t=l[e];if(t)return o=t.nextPos,t.result;var n,i,s,a;return u++,s=o,a=o,n=y(),n!==null?(r.charCodeAt(o)===77?(i="M",o++):(i=null,u===0&&p('"M"')),i!==null?n=[n,i]:(n=null,o=a)):(n=null,o=a),n!==null&&(n=function(e,t){return t}(s,n[0])),n===null&&(o=s),u--,u===0&&n===null&&p("Months"),l[e]={nextPos:o,result:n},n}function E(){var e="W@"+o,t=l[e];if(t)return o=t.nextPos,t.result;var n,i,s,a;return u++,s=o,a=o,n=y(),n!==null?(r.charCodeAt(o)===87?(i="W",o++):(i=null,u===0&&p('"W"')),i!==null?n=[n,i]:(n=null,o=a)):(n=null,o=a),n!==null&&(n=function(e,t){return t}(s,n[0])),n===null&&(o=s),u--,u===0&&n===null&&p("Weeks"),l[e]={nextPos:o,result:n},n}function S(){var e="D@"+o,t=l[e];if(t)return o=t.nextPos,t.result;var n,i,s,a;return u++,s=o,a=o,n=y(),n!==null?(r.charCodeAt(o)===68?(i="D",o++):(i=null,u===0&&p('"D"')),i!==null?n=[n,i]:(n=null,o=a)):(n=null,o=a),n!==null&&(n=function(e,t){return t}(s,n[0])),n===null&&(o=s),u--,u===0&&n===null&&p("Days"),l[e]={nextPos:o,result:n},n}function x(){var e="H@"+o,t=l[e];if(t)return o=t.nextPos,t.result;var n,i,s,a;return u++,s=o,a=o,n=y(),n!==null?(r.charCodeAt(o)===72?(i="H",o++):(i=null,u===0&&p('"H"')),i!==null?n=[n,i]:(n=null,o=a)):(n=null,o=a),n!==null&&(n=function(e,t){return t}(s,n[0])),n===null&&(o=s),u--,u===0&&n===null&&p("Hours"),l[e]={nextPos:o,result:n},n}function T(){var e="Mi@"+o,t=l[e];if(t)return o=t.nextPos,t.result;var n,i,s,a;return u++,s=o,a=o,n=y(),n!==null?(r.charCodeAt(o)===77?(i="M",o++):(i=null,u===0&&p('"M"')),i!==null?n=[n,i]:(n=null,o=a)):(n=null,o=a),n!==null&&(n=function(e,t){return t}(s,n[0])),n===null&&(o=s),u--,u===0&&n===null&&p("Minutes"),l[e]={nextPos:o,result:n},n}function N(){var e="S@"+o,t=l[e];if(t)return o=t.nextPos,t.result;var n,i,s,a;return u++,s=o,a=o,n=y(),n!==null?(r.charCodeAt(o)===83?(i="S",o++):(i=null,u===0&&p('"S"')),i!==null?n=[n,i]:(n=null,o=a)):(n=null,o=a),n!==null&&(n=function(e,t){return t}(s,n[0])),n===null&&(o=s),u--,u===0&&n===null&&p("Seconds"),l[e]={nextPos:o,result:n},n}function C(){var e="YYYY@"+o,t=l[e];if(t)return o=t.nextPos,t.result;var n,i,s,a,f,c,h,d,v;return u++,h=o,d=o,/^[+\-]/.test(r.charAt(o))?(n=r.charAt(o),o++):(n=null,u===0&&p("[+\\-]")),n!==null?(v=o,i=m(),i!==null?(s=m(),s!==null?(a=m(),a!==null?(f=m(),f!==null?(c=m(),c!==null?i=[i,s,a,f,c]:(i=null,o=v)):(i=null,o=v)):(i=null,o=v)):(i=null,o=v)):(i=null,o=v),i!==null?n=[n,i]:(n=null,o=d)):(n=null,o=d),n!==null&&(n=function(e,t,n){return G("Date:Year",{year:n,sign:t})}(h,n[0],n[1])),n===null&&(o=h),n===null&&(h=o,d=o,n=m(),n!==null?(i=m(),i!==null?(s=m(),s!==null?(a=m(),a!==null?n=[n,i,s,a]:(n=null,o=d)):(n=null,o=d)):(n=null,o=d)):(n=null,o=d),n!==null&&(n=function(e,t){return G("Date:Year",{year:t})}(h,n)),n===null&&(o=h)),u--,u===0&&n===null&&p("[Date::Year]"),l[e]={nextPos:o,result:n},n}function k(){var e="MM@"+o,t=l[e];if(t)return o=t.nextPos,t.result;var n,i,s,a;return u++,s=o,n=A(),n===null&&(a=o,r.charCodeAt(o)===49?(n="1",o++):(n=null,u===0&&p('"1"')),n!==null?(/^[0-2]/.test(r.charAt(o))?(i=r.charAt(o),o++):(i=null,u===0&&p("[0-2]")),i!==null?n=[n,i]:(n=null,o=a)):(n=null,o=a)),n!==null&&(n=function(e,t){return G("Date:Month",{month:t})}(s,n)),n===null&&(o=s),u--,u===0&&n===null&&p("[Date::Month]"),l[e]={nextPos:o,result:n},n}function L(){var e="DD@"+o,t=l[e];if(t)return o=t.nextPos,t.result;var n,i,s,a;return u++,s=o,n=A(),n===null&&(a=o,/^[1-2]/.test(r.charAt(o))?(n=r.charAt(o),o++):(n=null,u===0&&p("[1-2]")),n!==null?(/^[0-9]/.test(r.charAt(o))?(i=r.charAt(o),o++):(i=null,u===0&&p("[0-9]")),i!==null?n=[n,i]:(n=null,o=a)):(n=null,o=a),n===null&&(a=o,r.charCodeAt(o)===51?(n="3",o++):(n=null,u===0&&p('"3"')),n!==null?(/^[0-1]/.test(r.charAt(o))?(i=r.charAt(o),o++):(i=null,u===0&&p("[0-1]")),i!==null?n=[n,i]:(n=null,o=a)):(n=null,o=a))),n!==null&&(n=function(e,t){return G("Date:Day",{day:t})}(s,n)),n===null&&(o=s),u--,u===0&&n===null&&p("[Date::Day]"),l[e]={nextPos:o,result:n},n}function A(){var e="ot9@"+o,t=l[e];if(t)return o=t.nextPos,t.result;var n,i,s;return s=o,r.charCodeAt(o)===48?(n="0",o++):(n=null,u===0&&p('"0"')),n!==null?(/^[1-9]/.test(r.charAt(o))?(i=r.charAt(o),o++):(i=null,u===0&&p("[1-9]")),i!==null?n=[n,i]:(n=null,o=s)):(n=null,o=s),l[e]={nextPos:o,result:n},n}function O(){var e="zt9@"+o,t=l[e];if(t)return o=t.nextPos,t.result;var n;return r.substr(o,2)==="00"?(n="00",o+=2):(n=null,u===0&&p('"00"')),n===null&&(n=A()),l[e]={nextPos:o,result:n},n}function M(){var e="Www@"+o,t=l[e];if(t)return o=t.nextPos,t.result;var n,i,s,a,f,c;return u++,a=o,f=o,r.charCodeAt(o)===87?(n="W",o++):(n=null,u===0&&p('"W"')),n!==null?(i=A(),i===null&&(c=o,/^[1-4]/.test(r.charAt(o))?(i=r.charAt(o),o++):(i=null,u===0&&p("[1-4]")),i!==null?(/^[0-9]/.test(r.charAt(o))?(s=r.charAt(o),o++):(s=null,u===0&&p("[0-9]")),s!==null?i=[i,s]:(i=null,o=c)):(i=null,o=c),i===null&&(c=o,r.charCodeAt(o)===53?(i="5",o++):(i=null,u===0&&p('"5"')),i!==null?(/^[0-3]/.test(r.charAt(o))?(s=r.charAt(o),o++):(s=null,u===0&&p("[0-3]")),s!==null?i=[i,s]:(i=null,o=c)):(i=null,o=c))),i!==null?n=[n,i]:(n=null,o=f)):(n=null,o=f),n!==null&&(n=function(e,t){return t}(a,n[1])),n===null&&(o=a),u--,u===0&&n===null&&p("[Date:::Week]"),l[e]={nextPos:o,result:n},n}function _(){var e="DoW@"+o,t=l[e];if(t)return o=t.nextPos,t.result;var n,i;return u++,i=o,/^[1-7]/.test(r.charAt(o))?(n=r.charAt(o),o++):(n=null,u===0&&p("[1-7]")),n!==null&&(n=function(e,t){return t}(i,n)),n===null&&(o=i),u--,u===0&&n===null&&p("[Date::DayOfWeek]"),l[e]={nextPos:o,result:n},n}function D(){var e="DDD@"+o,t=l[e];if(t)return o=t.nextPos,t.result;var n,i,s,a,f,c;return u++,a=o,f=o,r.substr(o,2)==="00"?(n="00",o+=2):(n=null,u===0&&p('"00"')),n!==null?(/^[1-9]/.test(r.charAt(o))?(i=r.charAt(o),o++):(i=null,u===0&&p("[1-9]")),i!==null?n=[n,i]:(n=null,o=f)):(n=null,o=f),n!==null&&(n=function(e,t){return t}(a,n[1])),n===null&&(o=a),n===null&&(a=o,f=o,r.charCodeAt(o)===48?(n="0",o++):(n=null,u===0&&p('"0"')),n!==null?(c=o,/^[1-9]/.test(r.charAt(o))?(i=r.charAt(o),o++):(i=null,u===0&&p("[1-9]")),i!==null?(/^[0-9]/.test(r.charAt(o))?(s=r.charAt(o),o++):(s=null,u===0&&p("[0-9]")),s!==null?i=[i,s]:(i=null,o=c)):(i=null,o=c),i!==null?n=[n,i]:(n=null,o=f)):(n=null,o=f),n!==null&&(n=function(e,t){return t}(a,n[1])),n===null&&(o=a),n===null&&(a=o,f=o,/^[1-3]/.test(r.charAt(o))?(n=r.charAt(o),o++):(n=null,u===0&&p("[1-3]")),n!==null?(/^[0-9]/.test(r.charAt(o))?(i=r.charAt(o),o++):(i=null,u===0&&p("[0-9]")),i!==null?(/^[0-9]/.test(r.charAt(o))?(s=r.charAt(o),o++):(s=null,u===0&&p("[0-9]")),s!==null?n=[n,i,s]:(n=null,o=f)):(n=null,o=f)):(n=null,o=f),n!==null&&(n=function(e,t){return t}(a,n)),n===null&&(o=a))),u--,u===0&&n===null&&p("[Date::DayOfYear]"),l[e]={nextPos:o,result:n},n}function P(){var e="hh@"+o,t=l[e];if(t)return o=t.nextPos,t.result;var n,i,s;return u++,n=O(),n===null&&(s=o,r.charCodeAt(o)===49?(n="1",o++):(n=null,u===0&&p('"1"')),n!==null?(/^[0-9]/.test(r.charAt(o))?(i=r.charAt(o),o++):(i=null,u===0&&p("[0-9]")),i!==null?n=[n,i]:(n=null,o=s)):(n=null,o=s),n===null&&(s=o,r.charCodeAt(o)===50?(n="2",o++):(n=null,u===0&&p('"2"')),n!==null?(/^[0-4]/.test(r.charAt(o))?(i=r.charAt(o),o++):(i=null,u===0&&p("[0-4]")),i!==null?n=[n,i]:(n=null,o=s)):(n=null,o=s))),u--,u===0&&n===null&&p("[Time::Hour]"),l[e]={nextPos:o,result:n},n}function H(){var e="mm@"+o,t=l[e];if(t)return o=t.nextPos,t.result;var n,i,s;return u++,n=O(),n===null&&(s=o,/^[1-5]/.test(r.charAt(o))?(n=r.charAt(o),o++):(n=null,u===0&&p("[1-5]")),n!==null?(/^[0-9]/.test(r.charAt(o))?(i=r.charAt(o),o++):(i=null,u===0&&p("[0-9]")),i!==null?n=[n,i]:(n=null,o=s)):(n=null,o=s)),u--,u===0&&n===null&&p("[Time::Minute]"),l[e]={nextPos:o,result:n},n}function B(){var e="ss@"+o,t=l[e];if(t)return o=t.nextPos,t.result;var n,i,s,a,f,c,h;return u++,c=o,n=O(),n===null&&(h=o,/^[1-5]/.test(r.charAt(o))?(n=r.charAt(o),o++):(n=null,u===0&&p("[1-5]")),n!==null?(/^[0-9]/.test(r.charAt(o))?(i=r.charAt(o),o++):(i=null,u===0&&p("[0-9]")),i!==null?n=[n,i]:(n=null,o=h)):(n=null,o=h),n===null&&(r.substr(o,2)==="60"?(n="60",o+=2):(n=null,u===0&&p('"60"')))),n!==null?(h=o,r.charCodeAt(o)===46?(i=".",o++):(i=null,u===0&&p('"."')),i!==null?(/^[0-9]/.test(r.charAt(o))?(s=r.charAt(o),o++):(s=null,u===0&&p("[0-9]")),s!==null?(/^[0-9]/.test(r.charAt(o))?(a=r.charAt(o),o++):(a=null,u===0&&p("[0-9]")),a!==null?(/^[0-9]/.test(r.charAt(o))?(f=r.charAt(o),o++):(f=null,u===0&&p("[0-9]")),f!==null?i=[i,s,a,f]:(i=null,o=h)):(i=null,o=h)):(i=null,o=h)):(i=null,o=h),i=i!==null?i:"",i!==null?n=[n,i]:(n=null,o=c)):(n=null,o=c),u--,u===0&&n===null&&p("[Time::Second]"),l[e]={nextPos:o,result:n},n}function j(){var e="CalendarDate@"+o,n=l[e];if(n)return o=n.nextPos,n.result;var i,s,a,f,c,h;return u++,f=o,c=o,i=k(),i!==null?(h=o,r.charCodeAt(o)===45?(s="-",o++):(s=null,u===0&&p('"-"')),s=s!==null?s:"",s!==null?(a=L(),a=a!==null?a:"",a!==null?s=[s,a]:(s=null,o=h)):(s=null,o=h),s=s!==null?s:"",s!==null?(a=function(e,n,r){var i=Q.hasBalance("Date","-"),s=Q.getBalance("Date","-",r[0]);return!s||!i&&!t.isValid(r[0])&&!t.isValid(r[1])}(o,i,s)?null:"",a!==null?i=[i,s,a]:(i=null,o=c)):(i=null,o=c)):(i=null,o=c),i!==null&&(i=function(e,t,n){return G("Date:CalendarDate",{month:t,rest:n})}(f,i[0],i[1])),i===null&&(o=f),u--,u===0&&i===null&&p("[Date::CalendarDate]"),l[e]={nextPos:o,result:i},i}function F(){var e="WeekDate@"+o,t=l[e];if(t)return o=t.nextPos,t.result;var n,i,s,a,f,c;return u++,a=o,f=o,n=M(),n!==null?(c=o,r.charCodeAt(o)===45?(i="-",o++):(i=null,u===0&&p('"-"')),i=i!==null?i:"",i!==null?(s=_(),s!==null?i=[i,s]:(i=null,o=c)):(i=null,o=c),i=i!==null?i:"",i!==null?(s=function(e,t,n){var r=Q.getBalance("Date","-",n[0]);return!r}(o,n,i)?null:"",s!==null?n=[n,i,s]:(n=null,o=f)):(n=null,o=f)):(n=null,o=f),n!==null&&(n=function(e,t,n){return G("Date:WeekDate",{week:t,dayOfWeek:n})}(a,n[0],n[1])),n===null&&(o=a),u--,u===0&&n===null&&p("[Date::WeekDate]"),l[e]={nextPos:o,result:n},n}function I(){var e="OrdinalDate@"+o,t=l[e];if(t)return o=t.nextPos,t.result;var n,r;return u++,r=o,n=D(),n!==null&&(n=function(e,t){return Q.forceBalance("Date","-"),G("Date:OrdinalDate",{dayOfYear:t})}(r,n)),n===null&&(o=r),u--,u===0&&n===null&&p("[Date::OrdinalDate]"),l[e]={nextPos:o,result:n},n}function q(){var e="Date@"+o,t=l[e];if(t)return o=t.nextPos,t.result;var n,i,s,a,f,c;return u++,a=o,f=o,n=C(),n!==null?(c=o,r.charCodeAt(o)===45?(i="-",o++):(i=null,u===0&&p('"-"')),i=i!==null?i:"",i!==null?(s=function(e,t,n){return Q.startBalance("Date","-",n)}(o,n,i)?null:"",s!==null?i=[i,s]:(i=null,o=c)):(i=null,o=c),i!==null?(s=j(),s===null&&(s=F(),s===null&&(s=I())),s!==null?n=[n,i,s]:(n=null,o=f)):(n=null,o=f)):(n=null,o=f),n!==null&&(n=function(e,t,n,r){return G("Date",{year:t,rest:r})}(a,n[0],n[1][0],n[2])),n===null&&(o=a),u--,u===0&&n===null&&p("[Date]"),l[e]={nextPos:o,result:n},n}function R(){var e="Time@"+o,t=l[e];if(t)return o=t.nextPos,t.result;var n,r,i,s;return u++,i=o,s=o,n=W(),n!==null?(r=U(),r=r!==null?r:"",r!==null?n=[n,r]:(n=null,o=s)):(n=null,o=s),n!==null&&(n=function(e,t,n){return G("Time",{time:t,timeZone:n})}(i,n[0],n[1])),n===null&&(o=i),u--,u===0&&n===null&&p("[Time]"),l[e]={nextPos:o,result:n},n}function U(){var e="TimeZone@"+o,n=l[e];if(n)return o=n.nextPos,n.result;var i,s,a,f,c;return u++,f=o,r.charCodeAt(o)===90?(i="Z",o++):(i=null,u===0&&p('"Z"')),i!==null&&(i=function(e){return{offset:0,sign:"Z"}}(f)),i===null&&(o=f),i===null&&(f=o,c=o,/^[+\-]/.test(r.charAt(o))?(i=r.charAt(o),o++):(i=null,u===0&&p("[+\\-]")),i!==null?(s=function(e,n){return t.isValid(n)}(o,i)?"":null,s!==null?(a=z(),a!==null?i=[i,s,a]:(i=null,o=c)):(i=null,o=c)):(i=null,o=c),i!==null&&(i=function(e,t,n){return{offset:n,sign:t}}(f,i[0],i[2])),i===null&&(o=f)),u--,u===0&&i===null&&p("[Time::TimeZone]"),l[e]={nextPos:o,result:i},i}function z(){var e="TimeZoneOffset@"+o,t=l[e];if(t)return o=t.nextPos,t.result;var n,i,s,a,f,c;return u++,a=o,f=o,n=P(),n!==null?(c=o,r.charCodeAt(o)===58?(i=":",o++):(i=null,u===0&&p('":"')),i=i!==null?i:"",i!==null?(s=function(e,t,n){return Q.startBalance("TimeZoneOffset",":",n)}(o,n,i)?null:"",s!==null?i=[i,s]:(i=null,o=c)):(i=null,o=c),i!==null?(s=H(),s=s!==null?s:"",s!==null?n=[n,i,s]:(n=null,o=f)):(n=null,o=f)):(n=null,o=f),n!==null&&(n=function(e,t,n,r){return{hours:t,minutes:r}}(a,n[0],n[1][0],n[2])),n===null&&(o=a),u--,u===0&&n===null&&p("[Time::TimeZoneOffset]"),l[e]={nextPos:o,result:n},n}function W(){var e="LocalTime@"+o,t=l[e];if(t)return o=t.nextPos,t.result;var n,i,s,a,f,c,h,d,v;return u++,h=o,d=o,n=P(),n!==null?(v=o,r.charCodeAt(o)===58?(i=":",o++):(i=null,u===0&&p('":"')),i=i!==null?i:"",i!==null?(s=function(e,t){return Q.startBalance("LocalTime",":",t)}(o,i)?null:"",s!==null?i=[i,s]:(i=null,o=v)):(i=null,o=v),i!==null?(s=H(),s=s!==null?s:"",s!==null?(r.charCodeAt(o)===58?(a=":",o++):(a=null,u===0&&p('":"')),a=a!==null?a:"",a!==null?(f=B(),f=f!==null?f:"",f!==null?(c=function(e,t,n,r,i,s){return!!i&&!!s&&!Q.getBalance("LocalTime",":",i&&i[0])}(o,n,i,s,a,f)?null:"",c!==null?n=[n,i,s,a,f,c]:(n=null,o=d)):(n=null,o=d)):(n=null,o=d)):(n=null,o=d)):(n=null,o=d)):(n=null,o=d),n!==null&&(n=function(e,t,n,r,i,s){return G("Time",{hour:t,minute:r,second:s})}(h,n[0],n[1],n[2],n[3],n[4])),n===null&&(o=h),u--,u===0&&n===null&&p("[Time::LocalTime]"),l[e]={nextPos:o,result:n},n}function X(){var e="DurationParts@"+o,t=l[e];if(t)return o=t.nextPos,t.result;var n,i,s,a,f,c,h,d,v,m,g;return u++,d=o,v=o,n=b(),n=n!==null?n:"",n!==null?(i=w(),i=i!==null?i:"",i!==null?(s=S(),s=s!==null?s:"",s!==null?(m=o,g=o,r.charCodeAt(o)===84?(a="T",o++):(a=null,u===0&&p('"T"')),a!==null?(f=x(),f=f!==null?f:"",f!==null?(c=T(),c=c!==null?c:"",c!==null?(h=N(),h=h!==null?h:"",h!==null?a=[a,f,c,h]:(a=null,o=g)):(a=null,o=g)):(a=null,o=g)):(a=null,o=g),a!==null&&(a=function(e,t,n,r){return G("DurationParts",{hours:t,minutes:n,seconds:r})}(m,a[1],a[2],a[3])),a===null&&(o=m),a=a!==null?a:"",a!==null?n=[n,i,s,a]:(n=null,o=v)):(n=null,o=v)):(n=null,o=v)):(n=null,o=v),n!==null&&(n=function(e,t,n,r,i){return Z(t)||Z(n)||Z(r)||Z(i)?G("DurationParts",{years:t,months:n,days:r,rest:i}):null}(d,n[0],n[1],n[2],n[3])),n===null&&(o=d),n===null&&(d=o,n=E(),n!==null&&(n=function(e,t){return G("DurationParts",{weeks:t})}(d,n)),n===null&&(o=d)),u--,u===0&&n===null&&p("[Duration::Parts]"),l[e]={nextPos:o,result:n},n}function V(){var e="Duration@"+o,t=l[e];if(t)return o=t.nextPos,t.result;var n,i,s,a;return u++,s=o,a=o,r.charCodeAt(o)===80?(n="P",o++):(n=null,u===0&&p('"P"')),n!==null?(i=X(),i===null&&(i=$()),i!==null?n=[n,i]:(n=null,o=a)):(n=null,o=a),n!==null&&(n=function(e,t){return G("Duration",{rest:t})}(s,n[1])),n===null&&(o=s),u--,u===0&&n===null&&p("[Duration]"),l[e]={nextPos:o,result:n},n}function $(){var e="DateTime@"+o,t=l[e];if(t)return o=t.nextPos,t.result;var n,i,s,a,f;return u++,a=o,f=o,n=q(),n!==null?(r.charCodeAt(o)===84?(i="T",o++):(i=null,u===0&&p('"T"')),i!==null?(s=R(),s!==null?n=[n,i,s]:(n=null,o=f)):(n=null,o=f)):(n=null,o=f),n!==null&&(n=function(e,t,n){return G("DateTime",{date:t,time:n})}(a,n[0],n[2])),n===null&&(o=a),u--,u===0&&n===null&&p("[Date Time]"),l[e]={nextPos:o,result:n},n}function J(e){e.sort();var t=null,n=[];for(var r=0;r<e.length;r++)e[r]!==t&&(n.push(e[r]),t=e[r]);return n}function K(){var e=1,t=1,n=!1;for(var i=0;i<Math.max(o,a);i++){var s=r.charAt(i);s==="\n"?(n||e++,t=1,n=!1):s==="\r"||s==="\u2028"||s==="\u2029"?(e++,t=1,n=!0):(t++,n=!1)}return{line:e,column:t}}var s={RepeatingInterval:d,Interval:v,Int:m,UnsafeIntegers:g,Integers:y,Y:b,M:w,W:E,D:S,H:x,Mi:T,S:N,YYYY:C,MM:k,DD:L,ot9:A,zt9:O,Www:M,DoW:_,DDD:D,hh:P,mm:H,ss:B,CalendarDate:j,WeekDate:F,OrdinalDate:I,Date:q,Time:R,TimeZone:U,TimeZoneOffset:z,LocalTime:W,DurationParts:X,Duration:V,DateTime:$};if(i!==undefined){if(s[i]===undefined)throw new Error("Invalid rule name: "+e(i)+".")}else i="RepeatingInterval";var o=0,u=0,a=0,f=[],l={},Q,G,Y,Z;Q=new n,G=function(){return t.create}(),Y=function(){return t.intWrap}(),Z=function(){return t.isValid}();var et=s[i]();if(et===null||o!==r.length){var tt=Math.max(o,a),nt=tt<r.length?r.charAt(tt):null,rt=K();throw new this.SyntaxError(J(f),nt,tt,rt.line,rt.column)}return et},toSource:function(){return this._source}};return r.SyntaxError=function(t,n,r,i,s){function o(t,n){var r,i;switch(t.length){case 0:r="end of input";break;case 1:r=t[0];break;default:r=t.slice(0,t.length-1).join(", ")+" or "+t[t.length-1]}return i=n?e(n):"end of input","Expected "+r+" but "+i+" found."}this.name="SyntaxError",this.expected=t,this.found=n,this.message=o(t,n),this.offset=r,this.line=i,this.column=s},r.SyntaxError.prototype=Error.prototype,r}()});