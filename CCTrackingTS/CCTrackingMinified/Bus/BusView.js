var __extends=this.__extends||function(t,e){function n(){this.constructor=t}for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);n.prototype=e.prototype,t.prototype=new n};define(["require","exports","../Helper","knockout","datatablesBootstrap","text!CCTracking.WebClient/Bus/Bus.html","text!CCTracking.WebClient/Bus/BusGrid.html"],function(t,e,n){var i=t("text!CCTracking.WebClient/Bus/Bus.html"),r=(t("text!CCTracking.WebClient/Bus/BusGrid.html"),function(t){function e(e,n){t.call(this,e,n)}return __extends(e,t),e}(n.ViewModel));e.BusViewModel=r;var s=function(t){function e(e){this.template=i.getOuterHTML("#BusTemplate"),t.call(this,e)}return __extends(e,t),e}(n.Views.MvvmView);e.BusView=s});