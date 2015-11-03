var __extends=this.__extends||function(e,t){function r(){this.constructor=e}for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);r.prototype=t.prototype,e.prototype=new r};define(["require","exports","../../App","../../Helper","./BookingLeftView","../../Dtos/BookingLeftDto","../../DAL/BookingLeft","../../DAL/ReceiptContent","../BookingCtrl","marionette","jquery","knockout","text!./BookingLeftTmpl.html","printArea"],function(e,t,n,r,i,s,o,u,a){var f=e("underscore"),l=e("knockout"),c=e("knockback"),h=e("printArea"),p=function(e){function t(){e.call(this),this.app=n.Application.getInstance(),this.backboneModel=new s.Models.BookingLeftDto,this.bookingLeftViewModel=new i.BookingLeftViewModel(this.backboneModel,this),this.bookingLeftView=new i.BookingLeftView({viewModel:this.bookingLeftViewModel})}return __extends(t,e),t.prototype.Show=function(){var e=this,t=this.app.request("AppGlobalSetting"),n=new s.Models.BookingLeftDto;n.set("officerId",t.get("Id"));var r=o.GetByCriteria(n);r.done(function(t){return e.GetByCriteriaCompleted(t)})},t.prototype.GetByCriteriaCompleted=function(e){var t=this;this.backboneModel=new Backbone.Model(e.bookingLeftModel);var n=this.backboneModel;this.UIBinding(n),this.bookingLeftView=new i.BookingLeftView({viewModel:this.bookingLeftViewModel}),this.bookingLeftView.on("ShowTotalBooking",function(){return t.ShowTotalBooking()}),this.bookingLeftView.on("ShowPaidBooking",function(){return t.ShowPaidBooking()}),this.bookingLeftView.on("ShowUnpaidBooking",function(){return t.ShowUnpaidBooking()}),this.bookingLeftView.on("ShowTodayBooking",function(){return t.ShowTodayBooking()}),this.app.LeftRegion.show(this.bookingLeftView)},t.prototype.ShowTotalBooking=function(){(new a.BookingCtrl).GetAll(1)},t.prototype.ShowPaidBooking=function(){(new a.BookingCtrl).GetAll(2)},t.prototype.ShowUnpaidBooking=function(){(new a.BookingCtrl).GetAll(3)},t.prototype.ShowTodayBooking=function(){(new a.BookingCtrl).GetAll(4)},t.prototype.UIBinding=function(e){this.bookingLeftViewModel.bbModel=e,this.bookingLeftViewModel.model=c.viewModel(e),l.cleanNode($(this.bookingLeftView.el)[0]),l.applyBindings(this.bookingLeftViewModel,this.bookingLeftView.el)},t.prototype.ShowProgressbar=function(){var e=this.app.ModalRegion.currentView,t=new Backbone.Model({type:"btn-",title:"title",message:"message"}),n=new i.ProgressbarView({model:t});this.app.ModalRegion.currentView==undefined&&this.app.ModalRegion.show(n)},t.prototype.HideProgressbar=function(){var e=this.app.ModalRegion.currentView;this.app.ModalRegion.close(),$(".modal-backdrop").remove()},t.prototype.ShowModalPopup=function(e,t,n){var r=new Backbone.Model({type:"btn-"+e,title:t,message:n}),s=new i.ModalPopupView({model:r});this.app.ModalAlertRegion.show(s)},t.prototype.PrintReceipt=function(e){var t=this,n=u.GetById(e);n.done(function(e){return t.GetReceiptContentCompleted(e)})},t.prototype.GetReceiptContentCompleted=function(e){var t=this,n=f.map(e.receiptContentList,function(e){var n=new Date(e.printDateTime),i=t.app.request("AppGlobalSetting");return e.bookingDate=r.FormatDateString(e.bookingDate),e.printDateTime=r.FormatDateString(e.printDateTime)+"    "+n.getHours()+":"+n.getMinutes(),e.bookingAmount=r.FormatMoney(e.bookingAmount),e.userName=i.get("FirstName")+","+i.get("LastName"),e}),s=new Backbone.Collection(n),o=new i.ReceiptLayoutCollectionView({collection:s});this.app.ModalAlertRegion.show(o),this.app.ModalAlertRegion.show(o),o.on("Event-PrintPDFReceipt",function(){t.ExportToPdf(o.$el.find("#ReceiptLayout")[0]),t.app.ModalAlertRegion.close()})},t}(r.Controller);t.BookingLeftCtrl=p});