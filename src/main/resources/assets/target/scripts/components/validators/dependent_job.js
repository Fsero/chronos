define(["backbone","underscore","models/base_job","models/dependent_job","components/validator"],function(e,t,n,r){return{parents:function(e){this.should("have parents",function(){return e&&e.length>0}),this.should("have valid parents",function(){return this.withCollection(function(n){return t.every(e,function(e){return n.where({name:e}).length>0})})})}}});