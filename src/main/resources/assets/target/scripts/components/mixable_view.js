define(["jquery","underscore","backbone"],function(e,t,n){function a(e,t){return!e[r]||!e[r][t]?null:e[r][t]}function f(e,n,i){e[r]||(e[r]={}),t.isObject(n)?t.merge(e[r],n):e[r][n]=i}function l(e){return e=t.defaults(e||{},{methodChains:!0}),function(){var n=o.call(arguments),r=n.shift(),i;while(!!(i=n.shift()))(t.isObject(i)||t.isArray(i))&&t.each(i,function(n,i){if(t.isFunction(r[i])&&t.isFunction(n)&&e.methodChains){var s=r[i];s.isMethodChain||(r[i]=function(){var e=o.call(arguments)},r[i].isMethodChain=!0)}else{var u={};u[i]=n,t.merge(r,u)}});return r}}var r="_mixable_view",i=n.View.extend,s=n.View.prototype.constructor,o=Array.prototype.slice,u;return u=n.View.extend({constructor:function(){s.apply(this,Array.prototype.slice.call(arguments)),f(this,"methodChains",{})}},{extend:function(e,n){var r,s,o,u,a;return o=t.map([e,n],function(e,n){return r=t.omit(e,"mixins"),s=t.result(e,"mixins"),s&&t.isObject(s)?(u=l({methodChains:n===0}),a=[{}].concat(t.values(s)).concat(r),t.merge.apply(null,a)):r}),i.apply(this,o)}}),u});