var __extends=this.__extends||function(t,e){function o(){this.constructor=t}for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);o.prototype=e.prototype,t.prototype=new o};define(["require","exports","jquery","backbone"],function(t,e){!function(t){var e=function(t){function e(){t.apply(this,arguments)}return __extends(e,t),e.prototype["default"]=function(){return{id:"",name:"",landmarkId:"",address:"",contactNo1:"",contactNo2:"",isCoPartner:"",isActive:"",createdBy:"",createdDate:"",modifiedBy:"",modifiedDate:""}},e}(Backbone.Model);t.StationDto=e;var o=function(t){function o(o){this.model=e,t.call(this,o)}return __extends(o,t),o}(Backbone.Collection);t.StationCollection=o}(e.Models||(e.Models={}));e.Models});