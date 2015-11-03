var __extends=this.__extends||function(e,t){function r(){this.constructor=e}for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);r.prototype=t.prototype,e.prototype=new r};define(["require","exports","../App","../Helper","./RefundBookingView","../Dtos/RefundBookingDto","../DAL/RefundBooking","marionette","jquery","knockout"],function(e,t,n,r,i,s,o){var u=e("underscore"),a=e("knockout"),f=e("knockback"),l=function(e){function t(){e.call(this),this.app=n.Application.getInstance(),this.backboneModel=new s.Models.RefundBookingDto}return __extends(t,e),t.prototype.EditRefund=function(e){var t=this,n=o.GetById(e);n.done(function(e){return t.GetByIdCompleted(e)})},t.prototype.Load=function(){var e=this,t=JSON.parse(localStorage.getItem("lookupResponse")),n=this.backboneModel;this.viewModel.bbModel=n,this.viewModel.model=f.viewModel(n),n.set("name",""),n.set("address",""),n.set("landmarkIdSelected",""),n.set("landmarkList",t.landmark),n.set("contactNo1",""),n.set("contactNo2",""),n.set("isCoPartner",""),n.set("isActive",""),this.viewModel=new i.RefundBookingViewModel(n,this),this.view=new i.RefundBookingView({viewModel:this.viewModel}),this.view.on("Event:SaveForm",function(){return e.Save(e.view.model)}),this.view.on("Event:CancelForm",function(){return e.Cancel()}),this.app.MainRegion.show(this.view)},t.prototype.GetByIdCompleted=function(e){var t=this;this.collection=e.refundBookingList,this.backboneModel=new Backbone.Model(e.refundBookingList[0]);var n=this.backboneModel;this.UIBinding(n),this.view=new i.RefundBookingView({viewModel:this.viewModel}),this.view.on("Event:SaveForm",function(){return t.Save(t.viewModel.bbModel)}),this.view.on("Event:CancelForm",function(){return t.Cancel()}),this.app.MainRegion.show(this.view)},t.prototype.Save=function(e){var t=this,n=this.app.request("AppGlobalSetting");e.set("modifiedBy",n.get("Id")),e.get("refundTypeSelected")==undefined?e.set("refundTypeId",e.get("refundTypeId")):e.set("refundTypeId",e.get("refundTypeSelected").id),e.get("alkhidmatCentreSelected")==undefined?e.set("refundOfficeLocation",e.get("refundOfficeLocation")):e.set("refundOfficeLocation",e.get("alkhidmatCentreSelected").id),e.get("busSelected")==undefined?e.set("busId",e.get("busId")):e.set("busId",e.get("busSelected").id),e.get("cashierSelected")==undefined?e.set("refundOfficer",e.get("refundOfficer")):e.set("refundOfficer",e.get("cashierSelected").id),e.set("isActive",e.get("isActive")=="1"?!0:!1),e.set("id",$("#hdnRefundId").val());var r=o.Save(e);r.done(function(e){return t.SaveCompleted(e)})},t.prototype.SaveCompleted=function(e){var t=new Backbone.Model(e);t.get("errorMessage")!=undefined&&t.get("errorMessage").trim()!=""?r.ShowModalPopup("danger","Booking","Due to some technical reason booking payment have not been saved successfully!<br> Pelase try later"):(r.ShowModalPopup("success","Booking","Record has been saved successfully with ID : "+e.id),this.Cancel())},t.prototype.Cancel=function(){window.location.href="#viewBooking"},t.prototype.UIBinding=function(e){var t=JSON.parse(localStorage.getItem("lookupResponse"));e.set("busList",e.get("busList")),e.set("busSelected",""),e.set("alkhidmatCentreList",t.alkhidmatCentre),e.set("cashierList",t.cashier),e.set("refundTypeList",t.refundType);var n=u.filter(t.alkhidmatCentre,function(t){return t.id==e.get("refundOfficeLocation")});e.set("alkhidmatCentreSelected",n[0]);var r=u.filter(t.cashier,function(t){return t.id==e.get("refundOfficer")});e.set("cashierSelected",r[0]);var s=u.filter(t.refundType,function(t){return t.id==e.get("refundTypeId")});e.set("refundTypeSelected",s[0]),s.length>0?e.set("refundTypeSelectedDesc",s[0].description):e.set("refundTypeSelectedDesc",""),n.length>0?e.set("refundFromOfficeDesc",n[0].description):e.set("refundFromOfficeDesc",""),r.length>0?e.set("refundCashierDesc",r[0].description):e.set("refundCashierDesc",""),e.set("refundBookings",this.collection),this.viewModel=new i.RefundBookingViewModel(e,this),this.viewModel.bbModel=e},t}(r.Controller);t.RefundBookingCtrl=l});