(function(e){function i(e,t){var n=window,r=(e||"").split(".");while(n&&r.length)n=n[r.shift()];return typeof n=="function"?n:(t.push(e),Function.constructor.apply(null,t))}function s(e){return e==="GET"||e==="POST"}function o(e,t){s(t)||e.setRequestHeader("X-HTTP-Method-Override",t)}function u(t,n,r){var i;if(r.indexOf("application/x-javascript")!==-1)return;i=(t.getAttribute("data-ajax-mode")||"").toUpperCase(),e(t.getAttribute("data-ajax-update")).each(function(t,r){var s;switch(i){case"BEFORE":s=r.firstChild,e("<div />").html(n).contents().each(function(){r.insertBefore(this,s)});break;case"AFTER":e("<div />").html(n).contents().each(function(){r.appendChild(this)});break;case"REPLACE-WITH":e(r).replaceWith(n);break;default:e(r).html(n)}})}function a(t,n){var r,a,f,l;r=t.getAttribute("data-ajax-confirm");if(r&&!window.confirm(r))return;a=e(t.getAttribute("data-ajax-loading")),l=parseInt(t.getAttribute("data-ajax-loading-duration"),10)||0,e.extend(n,{type:t.getAttribute("data-ajax-method")||undefined,url:t.getAttribute("data-ajax-url")||undefined,cache:!!t.getAttribute("data-ajax-cache"),beforeSend:function(e){var n;return o(e,f),n=i(t.getAttribute("data-ajax-begin"),["xhr"]).apply(t,arguments),n!==!1&&a.show(l),n},complete:function(){a.hide(l),i(t.getAttribute("data-ajax-complete"),["xhr","status"]).apply(t,arguments)},success:function(e,n,r){u(t,e,r.getResponseHeader("Content-Type")||"text/html"),i(t.getAttribute("data-ajax-success"),["data","status","xhr"]).apply(t,arguments)},error:function(){i(t.getAttribute("data-ajax-failure"),["xhr","status","error"]).apply(t,arguments)}}),n.data.push({name:"X-Requested-With",value:"XMLHttpRequest"}),f=n.type.toUpperCase(),s(f)||(n.type="POST",n.data.push({name:"X-HTTP-Method-Override",value:f})),e.ajax(n)}function f(t){var n=e(t).data(r);return!n||!n.validate||n.validate()}var t="unobtrusiveAjaxClick",n="unobtrusiveAjaxClickTarget",r="unobtrusiveValidation";e(document).on("click","a[data-ajax=true]",function(e){e.preventDefault(),a(this,{url:this.href,type:"GET",data:[]})}),e(document).on("click","form[data-ajax=true] input[type=image]",function(n){var r=n.target.name,i=e(n.target),s=e(i.parents("form")[0]),o=i.offset();s.data(t,[{name:r+".x",value:Math.round(n.pageX-o.left)},{name:r+".y",value:Math.round(n.pageY-o.top)}]),setTimeout(function(){s.removeData(t)},0)}),e(document).on("click","form[data-ajax=true] :submit",function(r){var i=r.currentTarget.name,s=e(r.target),o=e(s.parents("form")[0]);o.data(t,i?[{name:i,value:r.currentTarget.value}]:[]),o.data(n,s),setTimeout(function(){o.removeData(t),o.removeData(n)},0)}),e(document).on("submit","form[data-ajax=true]",function(r){var i=e(this).data(t)||[],s=e(this).data(n),o=s&&s.hasClass("cancel");r.preventDefault();if(!o&&!f(this))return;a(this,{url:this.action,type:this.method||"GET",data:i.concat(e(this).serializeArray())})})})(jQuery);