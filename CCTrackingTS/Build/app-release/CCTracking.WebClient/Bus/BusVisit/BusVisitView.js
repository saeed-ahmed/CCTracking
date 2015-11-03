var __extends=this.__extends||function(e,t){function r(){this.constructor=e}for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);r.prototype=t.prototype,e.prototype=new r};define(["require","exports","../../Helper","marionette","jquery","knockout","text!./BusVisit.html","text!./BusVisitGrid.html"],function(e,t,n){var r=e("underscore"),i=e("knockout"),s=e("text!./BusVisit.html"),o=e("text!./BusVisitGrid.html"),u=function(e){function t(t){this.template=o.getOuterHTML("#BusVisitLayout"),this.regions={SearchRegion:{selector:".rgnSearch"},ContentRegion:{selector:".rgnContent"}},e.call(this,t)}return __extends(t,e),t}(Marionette.Layout);t.SearchBusVisitLayoutView=u;var a=function(e){function t(t){this.itemView=f,this.template=o.getOuterHTML("#gridTemplate"),this.itemViewContainer="tbody",e.call(this,t)}return __extends(t,e),t.prototype.onShow=function(){this.dataTable=this.$el.find("#tblStation").dataTable({autoWidth:!1,info:!0,processing:!0,lengthMenu:[[10,25,50,-1],[10,25,50,"All"]],language:{paginate:{next:"Next",previous:"Prev"},emptyTable:"",infoEmpty:"",zeroRecords:"No record found!"},pageLength:n.GetPageSize()})},t}(n.Views.CompositeView);t.BusVisitCollectionView=a;var f=function(e){function t(t){t||(t={}),t.template=o.getOuterHTML("#rowTemplate"),t.tagName="tr",t.className="jsRowClick",t.events={"click .jsShowDetail":"EditBusVisit"},e.call(this,t)}return __extends(t,e),t.prototype.EditBusVisit=function(){window.location.href="#editBusVisit",this.trigger("Event:EditForm",this.model.get("id"))},t}(n.Views.ItemView);t.BusVisitItemView=f;var l=function(e){function t(t){this.template=o.getOuterHTML("#SearchPanel"),this.events={"click .jsSearchVisit":"SearchVisit"},e.call(this,t)}return __extends(t,e),t.prototype.SearchVisit=function(e){e.preventDefault(),this.trigger("Event:SearchVisit",this.model.get("busSelected").id)},t}(n.Views.ItemView);t.BusVisitSearchItemView=l;var c=function(e){function t(t){this.template=s,this.viewModel=new h(t),this.bbModel=new Backbone.Model,this.events={submit:"Save","click .jsCancel":"Cancel"},e.call(this,t)}return __extends(t,e),t.prototype.close=function(){},t.prototype.Cancel=function(){this.trigger("Event:CancelForm")},t.prototype.Save=function(e){e.preventDefault();if(!this.viewModel.isValidReading())return n.ShowModalPopup("danger","Bus Visit","Please enter valid reading! Final reading should be greather than the Initial reading!"),!1;if(this.viewModel.isBookingCompleted()=="1"){if(this.viewModel.returnDate()==undefined||this.viewModel.returnDate()=="")return n.ShowModalPopup("danger","Bus Visit","Please enter valid return date to complete the booking."),!1;if(this.viewModel.finalReading()==undefined||this.viewModel.finalReading()==""||this.viewModel.finalReading()==0)return n.ShowModalPopup("danger","Bus Visit","Please enter valid final reading to complete the booking."),!1}this.bbModel.set("id",this.viewModel.id()),this.bbModel.set("isActive",this.viewModel.isActive()=="1"?!0:!1),this.bbModel.set("bookingId",this.viewModel.bookingId()),this.bbModel.set("inchargeName",this.viewModel.inchargeName()),this.bbModel.set("visitDate",this.viewModel.visitDate()),this.bbModel.set("returnDate",this.viewModel.returnDate()),this.bbModel.set("readingWhenFilling",this.viewModel.readingWhenFilling()),this.bbModel.set("pumpLocation",this.viewModel.pumpLocation()),this.bbModel.set("fuelRate",this.viewModel.fuelRate()),this.bbModel.set("fuelQuantity",this.viewModel.fuelQuantity()),this.bbModel.set("fuelAmount",this.viewModel.fuelAmount()),this.bbModel.set("fuelingReceipt",this.viewModel.fuelingReceipt()),this.bbModel.set("isBookingCompleted",this.viewModel.isBookingCompleted()),this.bbModel.set("description",this.viewModel.description()),this.bbModel.set("initialReading",this.viewModel.initialReading()),this.bbModel.set("finalReading",this.viewModel.finalReading()),this.bbModel.set("busDesc",this.viewModel.busDesc()),this.bbModel.set("centreDesc",this.viewModel.centreDesc()),this.bbModel.set("driverDesc",this.viewModel.driverDesc()),this.bbModel.set("visitTypeDesc",this.viewModel.visitTypeDesc()),this.bbModel.set("centreId",this.viewModel.alkhidmatCentreSelected().id),this.bbModel.set("driverId",this.viewModel.driverSelected().id),this.bbModel.set("busId",this.viewModel.busSelected().id),this.bbModel.set("outTime",this.viewModel.outTimeSlotSelected().id),this.bbModel.set("returnTime",this.viewModel.returnTimeSlotSelected().id),this.bbModel.set("visitTypeId",this.viewModel.visitTypeSelected().id),this.trigger("Event:SaveForm",this.bbModel)},t.prototype.onShow=function(){i.applyBindings(this.viewModel,this.el)},t}(n.Views.ItemView);t.BusVisitView=c;var h=function(){function e(e){var t=this,s=JSON.parse(localStorage.getItem("lookupResponse"));this.outTimeSlotList=i.observableArray(s.timeSlot),this.reutrnTimeSlotList=i.observableArray(s.timeSlot),this.busList=i.observableArray(s.bus),this.driverList=i.observableArray(s.driver),this.alkhidmatCentreList=i.observableArray(s.alkhidmatCentre),this.visitTypeList=i.observableArray(s.visitType);if(e==undefined)this.id=i.observable(),this.isEdit=i.observable(!1),this.isActive=i.observable("1"),this.centreId=i.observable(),this.busId=i.observable(),this.driverId=i.observable(),this.visitTypeId=i.observable(),this.bookingId=i.observable(),this.inchargeName=i.observable(),this.visitDate=i.observable(),this.outTime=i.observable(),this.returnTime=i.observable(),this.returnDate=i.observable(),this.readingWhenFilling=i.observable(),this.pumpLocation=i.observable(),this.fuelRate=i.observable(),this.fuelAmount=i.observable(),this.fuelQuantity=i.observable(),this.fuelingReceipt=i.observable(),this.isBookingCompleted=i.observable(),this.description=i.observable(),this.initialReading=i.observable(),this.finalReading=i.observable(),this.busDesc=i.observable(),this.centreDesc=i.observable(),this.driverDesc=i.observable(),this.visitTypeDesc=i.observable(),this.outTimeSlotSelected=i.observable(),this.returnTimeSlotSelected=i.observable(),this.busSelected=i.observable(),this.driverSelected=i.observable(),this.alkhidmatCentreSelected=i.observable(),this.visitTypeSelected=i.observable(),this.isPatrolPump=i.computed({owner:this,read:function(){return t.visitTypeSelected()!=undefined&&n.VisitTypes[t.visitTypeSelected().id]==n.VisitTypes[1]?!0:!1}}),this.isMaintenance=i.computed({owner:this,read:function(){return t.visitTypeSelected()!=undefined&&n.VisitTypes[t.visitTypeSelected().id]==n.VisitTypes[3]?!0:!1}}),this.isBooking=i.computed({owner:this,read:function(){return t.visitTypeSelected()!=undefined&&n.VisitTypes[t.visitTypeSelected().id]==n.VisitTypes[2]?!0:!1}});else{this.id=i.observable(e.get("id")),this.isEdit=i.observable(!0),this.isActive=i.observable(e.get("isActive")),this.centreId=i.observable(e.get("centreId")),this.busId=i.observable(e.get("busId")),this.driverId=i.observable(e.get("drvierId")),this.visitTypeId=i.observable(e.get("visitTypeId")),this.bookingId=i.observable(e.get("bookingId")),this.inchargeName=i.observable(e.get("inchargeName")),this.visitDate=i.observable(e.get("visitDate")),this.outTime=i.observable(e.get("outTime")),this.returnTime=i.observable(e.get("returnTime")),this.returnDate=i.observable(e.get("returnDate")),this.readingWhenFilling=i.observable(e.get("readingWhenFilling")),e.get("pumpLocation")!=undefined&&e.get("pumpLocation").trim()==""?this.pumpLocation=i.observable():this.pumpLocation=i.observable(e.get("pumpLocation")),e.get("fuelRate")!=undefined&&e.get("fuelRate")=="0"?this.fuelRate=i.observable():this.fuelRate=i.observable(e.get("fuelRate")),e.get("fuelAmount")!=undefined&&e.get("fuelAmount")=="0"?this.fuelAmount=i.observable():this.fuelAmount=i.observable(e.get("fuelAmount")),e.get("fuelQuantity")!=undefined&&e.get("fuelQuantity")=="0"?this.fuelQuantity=i.observable():this.fuelQuantity=i.observable(e.get("fuelQuantity")),e.get("fuelingReceipt")!=undefined&&e.get("fuelingReceipt")==""?this.fuelingReceipt=i.observable():this.fuelingReceipt=i.observable(e.get("fuelingReceipt"));var o=e.get("isBookingCompleted")==1?"1":"0";this.isBookingCompleted=i.observable(o),this.description=i.observable(e.get("description")),this.initialReading=i.observable(e.get("initialReading")),this.finalReading=i.observable(e.get("finalReading")),this.busDesc=i.observable(e.get("busDesc")),this.centreDesc=i.observable(e.get("centreDesc")),this.driverDesc=i.observable(e.get("driverDesc")),this.visitTypeDesc=i.observable(e.get("visitTypeDesc"));var u=r.filter(s.timeSlot,function(t){return t.id==e.get("outTime")}),a=r.filter(s.timeSlot,function(t){return t.id==e.get("returnTime")}),f=r.filter(s.bus,function(t){return t.id==e.get("busId")}),l=r.filter(s.driver,function(t){return t.id==e.get("driverId")}),c=r.filter(s.alkhidmatCentre,function(t){return t.id==e.get("centreId")}),h=r.filter(s.visitType,function(t){return t.id==e.get("visitTypeId")});this.outTimeSlotSelected=i.observable(u[0]),this.returnTimeSlotSelected=i.observable(a[0]),this.busSelected=i.observable(f[0]),this.driverSelected=i.observable(l[0]),this.alkhidmatCentreSelected=i.observable(c[0]),this.visitTypeSelected=i.observable(h[0]),this.isPatrolPump=i.computed({owner:this,read:function(){return t.visitTypeSelected()!=undefined&&n.VisitTypes[t.visitTypeSelected().id]==n.VisitTypes[1]?!0:!1}}),this.isMaintenance=i.computed({owner:this,read:function(){return t.visitTypeSelected()!=undefined&&n.VisitTypes[t.visitTypeSelected().id]==n.VisitTypes[3]?!0:!1}}),this.isBooking=i.computed({owner:this,read:function(){return t.visitTypeSelected()!=undefined&&n.VisitTypes[t.visitTypeSelected().id]==n.VisitTypes[2]?!0:!1}})}this.isValidReading=i.computed({owner:this,read:function(){return t.finalReading()!=undefined&&t.finalReading()==0?!0:t.initialReading()!=undefined&&t.finalReading()!=undefined?parseInt(t.initialReading())>parseInt(t.finalReading())?!1:!0:!0}})}return e}();t.ViewModel=h});