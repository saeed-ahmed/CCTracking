var __extends=this.__extends||function(e,t){function r(){this.constructor=e}for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);r.prototype=t.prototype,e.prototype=new r};define(["require","exports","../../App","../../Helper","./PaymentTypeView","../../Dtos/PaymentTypeDto","../../DAL/PaymentType","marionette","jquery","knockout","text!./PaymentTypeTmpl.html"],function(e,t,n,r,i,s,o){var u=e("underscore"),a=e("knockout"),f=e("knockback"),l=function(e){function t(){e.call(this),this.app=n.Application.getInstance(),this.backboneModel=new s.Models.PaymentTypeDto,this.paymentTypeViewModel=new i.PaymentTypeViewModel(this.backboneModel,this),this.paymentTypeView=new i.PaymentTypeView({viewModel:this.paymentTypeViewModel}),this.collection=new s.Models.PaymentTypeCollection({}),this.collectionView=new i.PaymentTypeCollectionView({collection:this.collection})}return __extends(t,e),t.prototype.Show=function(){var e=this,t=window.location.href;if(t.indexOf("id=")>-1){var n=t.substring(t.indexOf("id=")+3,t.length),r=o.GetById(n);r.done(function(t){return e.GetByIdCompleted(t)})}else this.Load()},t.prototype.Load=function(){var e=this,t=this.backboneModel;this.paymentTypeViewModel.bbModel=t,this.paymentTypeViewModel.model=f.viewModel(t),t.set("name",""),t.set("isActive",""),this.paymentTypeViewModel=new i.PaymentTypeViewModel(t,this),this.paymentTypeView=new i.PaymentTypeView({viewModel:this.paymentTypeViewModel}),this.paymentTypeView.on("SavePaymentType",function(){return e.Save(e.paymentTypeViewModel.bbModel)}),this.paymentTypeView.on("CancelForm",function(){return e.Cancel()}),this.app.MainRegion.show(this.paymentTypeView)},t.prototype.GetAll=function(){var e=this,t=o.GetAll();t.done(function(t){return e.GetAllCompleted(t)})},t.prototype.GetByIdCompleted=function(e){var t=this;this.backboneModel=new Backbone.Model(e.paymentTypeModel);var n=this.backboneModel;this.UIBinding(n),this.paymentTypeView=new i.PaymentTypeView({viewModel:this.paymentTypeViewModel}),this.paymentTypeView.on("SavePaymentType",function(){return t.Save(t.paymentTypeViewModel.bbModel)}),this.paymentTypeView.on("CancelForm",function(){return t.Cancel()}),this.app.MainRegion.show(this.paymentTypeView)},t.prototype.Save=function(e){var t=this,n=this.app.request("AppGlobalSetting");e.set("modifiedBy",n.get("Id")),e.set("isActive",e.get("isActive")=="1"?!0:!1);var r=o.Save(e);r.done(function(e){return t.SaveCompleted(e)})},t.prototype.GetAllCompleted=function(e){var t=this;this.collection.reset(e.paymentTypeList),this.collectionView=new i.PaymentTypeCollectionView({collection:this.collection}),this.collectionView.on("itemview:ShowDetail",function(e){return t.GetByIdCompleted(e.model)}),this.app.MainRegion.show(this.collectionView)},t.prototype.SaveCompleted=function(e){var t=new Backbone.Model(e);t.get("errorMessage")!=undefined&&t.get("errorMessage").trim()!=""?r.ShowModalPopup("danger","Booking","Due to some technical reason Payment Type have not been saved successfully!<br> Pelase try later"):(r.ShowModalPopup("success","Payment Type","Record has been saved successfully with PaymentType ID : "+e.id),this.Cancel())},t.prototype.Cancel=function(){window.location.href="#viewPaymentType"},t.prototype.UIBinding=function(e){e.set("isActive",e.get("isActive")?"1":"0"),this.paymentTypeViewModel.bbModel=e,this.paymentTypeViewModel.model=f.viewModel(e),a.cleanNode($(this.paymentTypeView.el)[0]),a.applyBindings(this.paymentTypeViewModel,this.paymentTypeView.el)},t}(r.Controller);t.PaymentTypeCtrl=l});