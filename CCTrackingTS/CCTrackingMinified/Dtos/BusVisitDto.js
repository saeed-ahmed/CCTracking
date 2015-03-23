var __extends=this.__extends||function(e,t){function i(){this.constructor=e}for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);i.prototype=t.prototype,e.prototype=new i};define(["require","exports","jquery","backbone"],function(e,t){!function(e){var t=function(e){function t(){e.apply(this,arguments)}return __extends(t,e),t.prototype["default"]=function(){return{idAttribute:"busVisitId",id:"",centreId:"",busId:"",driverId:"",visitTypeId:"",bookingId:"",inchargeName:"",visitDate:"",outTime:"",returnTime:"",readingWhenFilling:"",pumpLocation:"",fuelRate:"",fuelAmount:"",fuelQuantity:"",fuelingReceipt:"",isBookingCompleted:"",description:"",busChangeReason:"",initialReading:"",finalReading:"",isActive:"",busDesc:"",centreDesc:"",driverDesc:"",visitTypeDesc:"",createdBy:"",createdDate:"",modifiedBy:"",modifiedDate:""}},t}(Backbone.Model);e.BusVisitDto=t;var i=function(e){function i(i){this.model=t,e.call(this,i)}return __extends(i,e),i}(Backbone.Collection);e.BusVisitCollection=i;var n=function(e){function t(){e.apply(this,arguments)}return __extends(t,e),t.prototype["default"]=function(){return{busId:"",busDesc:"",driverDesc:"",centreDesc:"",milage:"",visitCount:"",vehicleNo:"",visitDate:"",visitInterval:"",bookingId:"",isActive:"",createdBy:"",createdDate:"",modifiedBy:"",modifiedDate:""}},t}(Backbone.Model);e.BusVisitSummaryDto=n;var o=function(e){function t(t){this.model=n,e.call(this,t)}return __extends(t,e),t}(Backbone.Collection);e.BusVisitSummaryCollection=o;var r=function(e){function t(){e.apply(this,arguments)}return __extends(t,e),t.prototype["default"]=function(){return{id:"",bookingId:"",propertyName:"",oldValue:"",newValue:"",modifiedDate:"",createdDate:"",actualModifiedDate:"",userName:""}},t}(Backbone.Model);e.AuditBusVisit=r;var s=function(e){function t(t){this.model=r,e.call(this,t)}return __extends(t,e),t}(Backbone.Collection);e.AuditBusVisitResponseCollection=s}(t.Models||(t.Models={}));t.Models});