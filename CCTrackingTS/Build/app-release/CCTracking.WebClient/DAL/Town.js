var __extends=this.__extends||function(e,t){function r(){this.constructor=e}for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);r.prototype=t.prototype,e.prototype=new r};define(["require","exports","CCTracking.WebClient/DAL/AjaxRequest","CCTracking.WebClient/Dtos/TownDto"],function(e,t,n,r){function s(){var e=new i;return e.doAjaxRequest(null,"GET","Town")}function o(e){var t=new i;return t.doAjaxRequest(e,"POST","Town")}function u(){var e=new i;return e.doAjaxRequest(null,"GET","Town?a=a")}function a(e){var t=new i;return t.doAjaxRequest(null,"GET","Town?id="+e)}var i=function(e){function t(){e.call(this,this)}return __extends(t,e),t.prototype.getResponse=function(){return new r.Models.TownDto},t}(n.BaseDto);t.TownDal=i,t.Load=s,t.Save=o,t.GetAll=u,t.GetById=a});