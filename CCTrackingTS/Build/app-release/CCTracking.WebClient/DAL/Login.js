var __extends=this.__extends||function(e,t){function r(){this.constructor=e}for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);r.prototype=t.prototype,e.prototype=new r};define(["require","exports","CCTracking.WebClient/DAL/AjaxRequest","CCTracking.WebClient/Dtos/LoginDto"],function(e,t,n,r){function s(e){var t=new i;return t.doAjaxRequest(e,"POST","Login")}function o(e){var t=new i;return t.doAjaxRequest(e,"POST","ChangePassword")}var i=function(e){function t(){e.call(this,this)}return __extends(t,e),t.prototype.getResponse=function(){return new r.Models.LoginDto},t}(n.BaseDto);t.LoginDal=i,t.Login=s,t.ChangePasswrd=o});