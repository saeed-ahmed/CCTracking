define(["jquery","knockout","Scripts/KnockoutJqueryUI/bindingHandler","Scripts/KnockoutJqueryUI/utils","Scripts/jqueryUI/datepicker"],function(e,t,n,r){var i=function(){n.call(this,"datepicker"),this.options=["altField","altFormat","appendText","autoSize","buttonImage","buttonImageOnly","buttonText","calculateWeek","changeMonth","changeYear","closeText","constrainInput","currentText","dateFormat","dayNames","dayNamesMin","dayNamesShort","defaultDate","duration","firstDay","gotoCurrent","hideIfNoPrevNext","isRTL","maxDate","minDate","monthNames","monthNamesShort","navigationAsDateFormat","nextText","numberOfMonths","prevText","selectOtherMonths","shortYearCutoff","showAnim","showButtonPanel","showCurrentAtPos","showMonthAfterYear","showOn","showOptions","showOtherMonths","showWeek","stepMonths","weekHeader","yearRange","yearSuffix","beforeShow","beforeShowDay","onChangeMonthYear","onClose","onSelect"],this.hasRefresh=!0};return i.prototype=r.createObject(n.prototype),i.prototype.constructor=i,i.prototype.init=function(r,i){var s,o,u,a,f;return n.prototype.init.apply(this,arguments),s=this.widgetName,o=i(),u=t.utils.unwrapObservable(o.value),u&&e(r)[s]("setDate",u),t.isObservable(o.value)&&(a=o.value.subscribe(function(t){e(r)[s]("setDate",t)}),t.utils.domNodeDisposal.addDisposeCallback(r,function(){a.dispose()})),t.isWriteableObservable(o.value)&&(f=e(r)[s]("option","onSelect"),e(r)[s]("option","onSelect",function(t){var n,i;n=e(r)[s]("option","dateFormat"),i=e.datepicker.parseDate(n,t),o.value(i),typeof f=="function"&&f.apply(this,Array.prototype.slice.call(arguments))})),{controlsDescendantBindings:!0}},r.register(i),i});