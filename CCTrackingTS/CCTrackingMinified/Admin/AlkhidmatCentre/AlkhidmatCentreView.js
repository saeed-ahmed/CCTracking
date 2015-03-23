var __extends=this.__extends||function(t,e){function n(){this.constructor=t}for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);n.prototype=e.prototype,t.prototype=new n};define(["require","exports","../../Helper","marionette","jquery","knockout","text!./AlkhidmatCentreTmpl.html","text!./AlkhidmatCentreGrid.html"],function(t,e,n){var i=(t("underscore"),t("text!./AlkhidmatCentreTmpl.html")),o=t("text!./AlkhidmatCentreGrid.html"),r=function(t){function e(e,n){t.call(this,e,n)}return __extends(e,t),e}(n.ViewModel);e.StationViewModel=r;var a=function(t){function e(e){this.template=i,this.events={submit:"Save","click .jsCancel":"Cancel"},t.call(this,e)}return __extends(e,t),e.prototype.close=function(){},e.prototype.Cancel=function(){this.trigger("CancelForm")},e.prototype.TestFunction=function(){alert("test function")},e.prototype.Save=function(t){t.preventDefault(),this.trigger("SaveAlkhidmatCentre")},e}(n.Views.MvvmView);e.StationView=a;var l=function(t){function e(e){e.itemView=c,e.template=o.getOuterHTML("#gridTemplate"),e.itemViewContainer="tbody",t.call(this,e)}return __extends(e,t),e.prototype.onShow=function(){this.dataTable=this.$el.find("#tblStation").dataTable({autoWidth:!1,info:!0,processing:!0,lengthMenu:[[10,25,50,-1],[10,25,50,"All"]],language:{paginate:{next:"Next",previous:"Prev"},emptyTable:"No record found!",infoEmpty:"No record found!",zeroRecords:"No record found!"},pageLength:n.GetPageSize()})},e}(n.Views.CompositeView);e.StationCollectionView=l;var c=function(t){function e(e){e||(e={}),e.template=o.getOuterHTML("#rowTemplate"),e.tagName="tr",e.className="jsRowClick",e.events={"click .jsShowDetail":"ShowDetail"},t.call(this,e)}return __extends(e,t),e.prototype.ShowDetail=function(){this.trigger("ShowDetail")},e}(n.Views.ItemView);e.StationItemView=c});