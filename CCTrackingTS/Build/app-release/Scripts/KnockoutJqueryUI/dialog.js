define(["jquery","knockout","./bindingHandler","./utils","jquery-ui/dialog"],function(e,t,n,r){var i=function(){n.call(this,"dialog"),r.uiVersion.major===1&&r.uiVersion.minor===8?(this.options=["autoOpen","buttons","closeOnEscape","closeText","dialogClass","disabled","draggable","height","maxHeight","maxWidth","minHeight","minWidth","modal","position","resizable","show","stack","title","width","zIndex"],this.events=["beforeClose","create","open","focus","dragStart","drag","dragStop","resizeStart","resize","resizeStop","close"]):r.uiVersion.major===1&&r.uiVersion.minor===9?(this.options=["autoOpen","buttons","closeOnEscape","closeText","dialogClass","draggable","height","hide","maxHeight","maxWidth","minHeight","minWidth","modal","position","resizable","show","stack","title","width","zIndex"],this.events=["beforeClose","create","open","focus","dragStart","drag","dragStop","resizeStart","resize","resizeStop","close"]):(this.options=["appendTo","autoOpen","buttons","closeOnEscape","closeText","dialogClass","draggable","height","hide","maxHeight","maxWidth","minHeight","minWidth","modal","position","resizable","show","title","width"],this.events=["beforeClose","create","open","focus","dragStart","drag","dragStop","resizeStart","resize","resizeStop","close"])};return i.prototype=r.createObject(n.prototype),i.prototype.constructor=i,i.prototype.init=function(r,i){var s,o;return s=document.createElement("DIV"),s.style.display="none",r.parentNode.insertBefore(s,r),t.utils.domNodeDisposal.addDisposeCallback(s,function(){t.removeNode(r)}),n.prototype.init.apply(this,arguments),o=i(),o.isOpen&&t.computed({read:function(){t.utils.unwrapObservable(o.isOpen)?e(r)[this.widgetName]("open"):e(r)[this.widgetName]("close")},disposeWhenNodeIsRemoved:r,owner:this}),t.isWriteableObservable(o.isOpen)&&(this.on(r,"open",function(){o.isOpen(!0)}),this.on(r,"close",function(){o.isOpen(!1)})),t.isWriteableObservable(o.width)&&this.on(r,"resizestop",function(e,t){o.width(Math.round(t.size.width))}),t.isWriteableObservable(o.height)&&this.on(r,"resizestop",function(e,t){o.height(Math.round(t.size.height))}),{controlsDescendantBindings:!0}},r.register(i),i});