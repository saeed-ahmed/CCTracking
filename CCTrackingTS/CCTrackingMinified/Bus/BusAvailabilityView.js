var __extends=this.__extends||function(t,e){function i(){this.constructor=t}for(var s in e)e.hasOwnProperty(s)&&(t[s]=e[s]);i.prototype=e.prototype,t.prototype=new i};define(["require","exports","../Helper","marionette","jquery","knockout","text!./BusAvailability.html","text!./BusAvailabilityGrid.html"],function(t,e,i){var s=(t("underscore"),t("text!./BusAvailability.html")),n=t("text!./BusAvailabilityGrid.html"),o=function(t){function e(e,i){t.call(this,e,i)}return __extends(e,t),e}(i.ViewModel);e.BusAvailabilityViewModel=o;var a=function(t){function e(e){this.template=s,this.events={submit:"Save","click .jsAvailability":"Availability"},t.call(this,e)}return __extends(e,t),e.prototype.close=function(){this.off("Event:SaveForm"),this.off("Event:BusAvailability"),this.off("Event:BusBookingDetail")},e.prototype.Availability=function(){this.trigger("Event:BusAvailability",this.model.get("alkhidmatCentreSelected").id)},e.prototype.Save=function(t){t.preventDefault(),this.trigger("Event:SaveForm")},e}(i.Views.MvvmView);e.BusAvailabilityView=a;var l=function(t){function e(e){e.itemView=r,e.template=n.getOuterHTML("#gridTemplate"),e.itemViewContainer="tbody",e.events={"click .jsSearchVisit":"SearchVisit"},t.call(this,e)}return __extends(e,t),e.prototype.SearchVisit=function(t){t.preventDefault(),this.trigger("Event:SearchVisit",this.model.get("busSelected").id)},e.prototype.setOptionDisable=function(){alert("dddddd")},e}(i.Views.CompositeView);e.BusAvailabilityCollectionView=l;var r=function(t){function e(e){var i=this;e||(e={}),e.template=n.getOuterHTML("#rowTemplate"),e.tagName="tr",e.className="jsRowClick",e.events={"click .jsShowBusDetail":"ShowBusDetail"},t.call(this,e),this.templateHelpers={showBuses:function(){if(void 0!=i.model){var t=null===i.model.get("busList")?"":i.model.get("busList"),e="";if(""!=t){for(var s=t.split("|"),n=0;n<s.length;n++)e=s[n].trim().indexOf("0 ")>=0?e+" <a href='javasript:void(0);?id="+s[n].trim().split(" ")[1]+"' class='jsShowBusDetail btn-danger'>"+s[n]+"</a> &nbsp; | ":e+" <span class='btn-success'>"+s[n]+"</span> &nbsp; | ";""!=e&&(e=e.substring(0,e.length-2))}return e}return""},showMessage1:function(){return"this is the coolest!SSS"}}}return __extends(e,t),e.prototype.ShowBusDetail=function(t){var e=t.target.href.split("=")[1];this.trigger("Event:BusBookingDetail",e)},e.prototype.ShowDetail=function(){this.trigger("ShowDetail")},e}(i.Views.ItemView);e.BusAvailabilityItemView=r});