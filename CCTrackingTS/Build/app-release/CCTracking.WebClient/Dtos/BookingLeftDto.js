var __extends=this.__extends||function(e,t){function r(){this.constructor=e}for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);r.prototype=t.prototype,e.prototype=new r};define(["require","exports","backbone"],function(e,t){(function(e){var t=function(e){function t(){e.apply(this,arguments)}return __extends(t,e),t.prototype.default=function(){return{officerId:"",todaysBooking:"",userTotalBooking:"",userPiadBooking:"",userUnpaidBooking:""}},t}(Backbone.Model);e.BookingLeftDto=t;var n=function(e){function n(n){this.model=t,e.call(this,n)}return __extends(n,e),n}(Backbone.Collection);e.DriverCollection=n})(t.Models||(t.Models={}));var n=t.Models});