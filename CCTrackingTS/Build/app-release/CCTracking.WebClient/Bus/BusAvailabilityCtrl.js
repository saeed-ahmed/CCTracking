var __extends=this.__extends||function(e,t){function r(){this.constructor=e}for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);r.prototype=t.prototype,e.prototype=new r};define(["require","exports","../App","../Helper","./BusAvailabilityView","../Dtos/BusAvailabilityDto","../DAL/BusAvailability","marionette","jquery","knockout"],function(e,t,n,r,i,s,o){var u=e("underscore"),a=e("knockout"),f=e("knockback"),l=function(e){function t(){e.call(this),this.app=n.Application.getInstance(),this.backboneModel=new s.Models.BusAvailabilityDto,this.viewModel=new i.BusAvailabilityViewModel(this.backboneModel,this),this.view=new i.BusAvailabilityView({viewModel:this.viewModel}),this.collection=new s.Models.BusAvailabilityCollection({id:"",busList:"",centreName:""}),this.collectionView=new i.BusAvailabilityCollectionView({collection:this.collection}),this.compositeModel=new Backbone.Model}return __extends(t,e),t.prototype.Show=function(){var e=this,t=JSON.parse(localStorage.getItem("lookupResponse")),n=this.backboneModel;n.set("alkhidmatCentreList",t.alkhidmatCentre),n.set("alkhidmatCentreSelected",""),n.set("busList",t.bus),n.set("busSelected",""),this.viewModel=new i.BusAvailabilityViewModel(n,this),this.view=new i.BusAvailabilityView({viewModel:this.viewModel}),this.view.model=n,this.view.listenTo(this.view,"Event:BusAvailability",function(t){return e.BusAvailability(t)}),this.collectionView.listenTo(this.collectionView,"itemview:Event:BusBookingDetail",function(t,n){return e.ShowBusBookingDetail(n)}),this.app.RightRegion.show(this.view),this.app.BusAvailabilityRegion.show(this.collectionView)},t.prototype.ShowBusBookingDetail=function(e){var t=this,n=o.GetById(e);n.done(function(e){return t.ShowBusBookingDetailCompleted(e)})},t.prototype.ShowBusBookingDetailCompleted=function(e){var t=u.map(e.nearestCentreList,function(e){return e.pickupDate=r.FormatDateString(e.pickupDate),e}),n=new Backbone.Collection(t),i=new Backbone.Model;i.set("type","btn-primary"),i.set("message",""),r.ShowBusDetailModalPopup(i,n)},t.prototype.BusAvailability=function(e){var t=this,n=o.GetAll(e);n.done(function(e){return t.GetAllCompleted(e)})},t.prototype.GetAllCompleted=function(e){this.collection.reset(e.nearestCentreList),this.collectionView.collection=this.collection},t}(r.Controller);t.BusAvailabilityCtrl=l});