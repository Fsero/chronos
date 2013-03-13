define(["underscore","backbone","moment"],function(e,t,n){function b(t){return T(t)?t.join(""):e.isFunction(t.toString)?t.toString():""+t}function w(e){return(!!e||e===0)&&e!==""}function E(t,n){if(!w(t))return n;if(e.isArray(t)&&e.isFunction(t.join))return E(t.join(""),n);if(e.isString(t))return parseInt(t,10);if(e.isNumber(t))return t}function S(t,n,i){return e.isFunction(t)?t.apply(n,r.call(arguments,2)):i}function x(e,t,n){return w(e)?S(n,null,e):t}function T(t){return e.chain(t).toArray().every(e.isString).value()}function N(){}function C(e,t){return e instanceof t}var r=Array.prototype.slice,i,s,o,u,a,f,l,c,h,p,d,v,m,g,y;return N.prototype.getValue=function(){return null},N.prototype.toMap=function(){return{}},N.prototype.set=function(n,r){return this._attributes||(this._attributes={}),e.isObject(n)?e.merge(this._attributes,n):e.isString(n)&&(this._attributes[n]=r),this},N.prototype.get=function(t){return this._attributes||(this._attributes={}),this._attributes[t]},N.prototype.pick=function(){return this._attributes||(this._attributes={}),e.pick.apply(null,[this._attributes].concat(r.call(arguments)))},N.extend=t.Model.extend,u=N.extend({constructor:function(t){w(t.sign)&&t.sign==="-"?this.sign=-1:this.sign=1,this.baseYear=b(t.year)},getValue:function(){return E(this.baseYear)*this.sign},toString:function(){return this.getValue()+""}},{}),a=N.extend({constructor:function(t){this.set({original:t.month,month:t.month})},toString:function(){return this.get("month")}}),f=N.extend({constructor:function(t){this.set({original:t.day,day:t.day})},toString:function(){return this.get("day")}}),l=N.extend({constructor:function k(t){var n=t.start,r=t.duration,i=t.rest;if(n&&i)return k.CreateWithStart(n,i);if(r&&i)return k.CreateWithDuration(r,i);this.set({start:t.start,end:t.end,original:e.pick(t,"start","end","original")})}},{CreateWithStart:function(e,t){var n;return C(t,o)?n=t:C(t,c)&&(n=e.add(t)),new l({start:e,end:n,original:{start:e,rest:t}})},CreateWithDuration:function(t,n){var r=e.isArray(n)?e.last(n):n,i;return C(r,o)&&(i=r.subtract(t)),new l({start:i,end:r,original:{end:r,duration:t}})}}),o=N.extend({constructor:function(t){this.date=t.date,this.time=t.time},compareTo:function(e){return C(e,o)?0:null},mapParts:function(t,n){return e.map([this.date,this.time],t,n||this)},toString:function(){return this.mapParts(function(e){return e.toString()}).join("T")},toDate:function(){return Date.parse(this.toString())},toMoment:function(){var e=this.mapParts(function(e){return e.toMoment()})},add:function(t){if(C(t,o))return this.compareTo(t)>=0?this:t;if(C(t,c)){var r=this.toString(),i=new Date(r),s=n(i),u;return u=e.reduce(t.getParts(),function(e,t,n){return e.add(n,t)},s),new o({date:null,time:null})}},subtract:function(t){if(C(t,c)){var r=t.toMoment(),i=this.toString(),s=new Date(i),u=t.getParts(),a=n(s),f;return f=e.reduce(t.getParts(),function(e,t,n){return e.subtract(n,t)},a),new o({date:null,time:null})}}}),c=N.extend({constructor:function(t){!t.rest||this.setNormalized(t.rest)},setNormalized:function(e){C(e,h)&&(this.parts=e)},getParts:function(){return!this.parts||!this.parts.toMap?{}:this.parts.toMap()},toMoment:function(){return n.duration(this.getParts())}}),h=function(){var t=["years","months","days","hours","minutes","seconds"];return N.extend({constructor:function(r){var i=r.rest||{};e.each(t,function(e){r[e]?this[e]=r[e]:i[e]?this[e]=i[e]:this[e]=0},this)},toMap:function(){return e.pick.apply(null,[this].concat(t))}})}(),p=N.extend({delimeter:"",strFields:["year"],constructor:function L(t){if(!!t.rest&&C(t.rest,L))return t.rest.merge({year:t.year});this.merge(e.omit(t,"rest"))},toString:function(){var t=e.chain(this.getToStrFields()).compact().map(function(e){return e.toString()}).flatten().value();return t.join(this.delimeter)},getToStrFields:function(){return e.map(this.strFields,function(e){return this[e]},this)},merge:function(t){return e.extend(this,t)}}),d=N.extend({constructor:function(n){if(n.timeZone)this.set(e.extend({},n.time.pick("original","hour","minute","second"),{timeZone:n.timeZone}));else{var r=E(n.minute,0),i=n.second&&n.second.length,s=i&&e.map(n.second,function(t){return e.isString(t)?t.length?t:"0":t.join("").replace(/[\.\/]/,"")}).join(".");this.set({original:e.pick(n,"hour","minute","second"),hour:E(n.hour,0),minute:r?E(r,0):0,second:s?E(s,0):0})}},toString:function(){var t=this.get("timeZone"),n;return n=e.map(["hour","minute","second"],function(e){return this.get(e)||0},this).join(":"),!t||(t.offset?n+=[t.sign,t.offset].join(""):n+=t.sign),n}}),v=p.extend({type:"CalendarDate",strFields:["year","month","day"],constructor:function(n){var r=e.last(n&&n.rest);!r||(this.day=r),this.month=n.month}}),m=p.extend({type:"WeekDate",strFields:["year","week","dayOfWeek"],constructor:function(n){this.merge(e.omit(n,"rest"))}}),g=p.extend({type:"OrdinalDate",strFields:["year","day"],constructor:function(n){this.merge(e.omit(n,"rest"))}}),y=N.extend({constructor:function(n){this.set(e.pick(n,"repetitions","interval"))}}),s={DateTime:o,Duration:c,DurationParts:h,"Date:Day":f,"Date:Month":a,"Date:Year":u,Interval:l,Date:p,Time:d,"Date:CalendarDate":v,"Date:WeekDate":m,"Date:OrdinalDate":g,RepeatingInterval:y},i=N.extend({constructor:function(t,n){this.value=e.extend({},n,{type:t})},getValue:function(){return this.value}},{create:function(t,n){var r=!!s[t];return r?new s[t](n):new i(t,n)},isValid:function(e){return w(e)},intWrap:function(){return E.apply(null,r.call(arguments))}}),i});