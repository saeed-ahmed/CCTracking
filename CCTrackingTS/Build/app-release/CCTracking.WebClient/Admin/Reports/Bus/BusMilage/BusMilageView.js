var __extends=this.__extends||function(e,t){function r(){this.constructor=e}for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);r.prototype=t.prototype,e.prototype=new r};define(["require","exports","../../../../Helper","marionette","jquery","jqueryUI","knockout","text!./BusMilageTmpl.html"],function(e,t,n){var r=e("underscore"),i=e("text!./BusMilageTmpl.html"),s,o=function(e){function t(t,n){e.call(this,t,n)}return __extends(t,e),t}(n.ViewModel);t.BusMilageViewModel=o;var u=function(e){function t(t){this.template=i,e.call(this,t)}return __extends(t,e),t.prototype.onDomRefresh=function(){},t}(n.Views.MvvmView);t.BusMilageView=u;var a=function(e){function t(t){var n=this;t.itemView=f,t.template=i.getOuterHTML("#gridTemplate"),t.itemViewContainer="#tblSearch tbody",this.events={"click .jsSearch":"Search","click .jsPrintDocument":function(){n.trigger("Event:PrintReport")},"click .jsCancel":"Cancel"},e.call(this,t)}return __extends(t,e),t.prototype.Search=function(e){e.preventDefault(),this.trigger("BusMilage")},t}(n.Views.CompositeView);t.BusMilageCollectionView=a;var f=function(e){function t(t){t||(t={}),t.template=i.getOuterHTML("#rowTemplate"),t.tagName="tr",t.className="jsRowClick",t.events={},e.call(this,t)}return __extends(t,e),t.prototype.ShowDetail=function(){},t}(n.Views.ItemView);t.BusMilageItemView=f});