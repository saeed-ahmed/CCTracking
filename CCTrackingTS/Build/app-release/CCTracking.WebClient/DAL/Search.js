var __extends=this.__extends||function(e,t){function r(){this.constructor=e}for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);r.prototype=t.prototype,e.prototype=new r};define(["require","exports","CCTracking.WebClient/DAL/AjaxRequest","CCTracking.WebClient/Dtos/SearchDto","jquery"],function(e,t,n,r){function o(){var e=new s;return e.doAjaxRequest(null,"GET","Search")}function u(e){var t=new s;return t.doAjaxRequest(e,"POST","Search")}function a(){var e=new s;return e.doAjaxRequest(null,"GET","Search?a=a")}function f(e){var t=new s;return t.doAjaxRequest(null,"GET","Search?id="+e)}function l(e){var t=new s;return t.doAjaxRequest(e,"POST","Search")}var i=e("jquery"),s=function(e){function t(){e.call(this,this)}return __extends(t,e),t.prototype.getResponse=function(){return new r.Models.SearchDto},t}(n.BaseDto);t.SearchDal=s,t.Load=o,t.Save=u,t.GetAll=a,t.GetById=f,t.GetByCriteria=l});