var __extends=this.__extends||function(e,t){function r(){this.constructor=e}for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);r.prototype=t.prototype,e.prototype=new r};define(["require","exports","../App","../Helper","../Dtos/AppObjectDto","../DAL/AjaxRequest","marionette","jquery","knockout","text!./Login.html"],function(e,t,n,r,i,s){var o=e("underscore"),u=e("knockout"),a=e("knockback"),f=function(t){function s(){t.call(this),this.app=n.Application.getInstance(),this.backboneModel=new l.Models.LoginDto,this.loginViewModel=new l.Views.LoginViewModel(this.backboneModel,this),this.loginView=new l.Views.LoginView({viewModel:this.loginViewModel})}return __extends(s,t),s.prototype.Load=function(){var e=this;this.loginView=new l.Views.LoginView,this.app.LoginRegion.show(this.loginView),this.loginView.on("LoginUser",function(){return e.Login(e.loginViewModel.bbModel)})},s.prototype.Login=function(e){var t=this,n=this.app.request("AppGlobalSetting");e.set("userName",$("#txtUserName").val()),e.set("password",$("#txtPassword").val());var r=l.Dal.Login(e);r.done(function(e){return t.Authenticated(e)})},s.prototype.Authenticated=function(t){var n=this,s=$("#lblLoginMessage");if(t==undefined){r.ShowModalPopup("danger","Authentication","User name or password is wrong..!<br> Pelase try again");return}if(t.errorMessage!==null)r.ShowModalPopup("danger","Authentication",t.errorMessage);else{var o=new i.Models.AppObject;o.set("Id",t.id),o.set("FirstName",t.firstName),o.set("LastName",t.lastName),o.set("UserName",t.userName),o.set("IsAdmin",t.isAdmin),o.set("AuthenticationToken",t.authenticationToken),this.app.reqres.setHandler("AppGlobalSetting",function(){return o},this),this.app.LoginRegion.close();var u=this.app.request("AppGlobalSetting"),a=new Backbone.Model({firstName:u.get("FirstName"),lastName:u.get("LastName"),userName:u.get("UserName")});e(["../Common/Views/HeaderView"],function(e){var t=new e.HeaderItemView({model:a});n.app.HeaderRegion.show(t)}),e(["../Bus/BusAvailabilityCtrl"],function(e){(new e.BusAvailabilityCtrl).Show()}),u.get("IsAdmin")?(e(["../Home/HomeCtrl"],function(e){(new e.HomeCtrl).Show()}),this.app.applyRouting(this.app,this.app.AppLayout)):(e(["../Booking/BookingCtrl"],function(e){(new e.BookingCtrl).GetAll(1)}),this.app.applyRoutingForOperator(this.app,this.app.AppLayout))}},s.prototype.Cancel=function(){window.location.href="#viewLogin"},s}(r.Controller);t.LoginCtrl=f,function(t){(function(t){var i=e("text!./Login.html"),s=function(e){function t(t,n){e.call(this,t,n)}return __extends(t,e),t}(r.ViewModel);t.LoginViewModel=s;var o=function(e){function t(t){this.template=i,this.events={submit:"Login"},this.App=n.Application.getInstance(),e.call(this,t)}return __extends(t,e),t.prototype.Login=function(e){e.preventDefault(),this.trigger("LoginUser")},t}(r.Views.MvvmView);t.LoginView=o})(t.Views||(t.Views={}));var i=t.Views;(function(e){var t=function(e){function t(){e.apply(this,arguments)}return __extends(t,e),t.prototype.default=function(){return{id:"",firstName:"",lastName:"",email:"",mobile:"",nic:"",userName:"",password:"",resetPassword:"",isAdmin:!1,authenticationToken:"",errorMessage:""}},t}(Backbone.Model);e.LoginDto=t})(t.Models||(t.Models={}));var o=t.Models;(function(e){function r(e){var t=new n;return t.doAjaxRequest(e,"POST","Login")}function i(e){var t=new n;return t.doAjaxRequest(e,"POST","ChangePassword")}var n=function(e){function n(){e.call(this,this)}return __extends(n,e),n.prototype.getResponse=function(){return new t.Models.LoginDto},n}(s.BaseDto);e.LoginDal=n,e.Login=r,e.ChangePasswrd=i})(t.Dal||(t.Dal={}));var u=t.Dal}(t.LoginModule||(t.LoginModule={}));var l=t.LoginModule});