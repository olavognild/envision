function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var Collapse=function(t){var e="aria-expanded",i="auto",n="collapsing",s="sv-collapse--",o="collapse",r=t.fn[o],a="show",l=function(){function o(e){_classCallCheck(this,o),this.el=e,this.$el=t(e)}return o.prototype.toggle=function(){this.$el.hasClass(s+a)?this.hide():this.show()},o.prototype.show=function(){this.$el.addClass(s+n).one(Util.getTransitionEndEvent(),this._showTransitionComplete).height(this.el.scrollHeight)},o.prototype.hide=function(){this.$el.height(this.$el.height()).removeClass(s+a).addClass(s+n).one(Util.getTransitionEndEvent(),this._hideTransitionComplete).height(0)},o.prototype._showTransitionComplete=function(o){var r=t(o.currentTarget);r.removeClass(s+n).addClass(s+a).height(i).attr(e,!0)},o.prototype._hideTransitionComplete=function(i){var o=t(i.currentTarget);o.removeClass(s+n).attr(e,!1)},o._jQuery=function(t){return this.each(function(){var e=new o(this);if("string"==typeof t){if(void 0===e[t])throw new Error('No method named "'+t+'"');return void e[t]()}e.toggle()})},o}();return t.fn[o]=l._jQuery,t.fn[o].Constructor=l,t.fn[o].noConflict=function(){return t.fn[o]=r,l._jQuery},t(document).on("click","[data-sv-collapse]",function(e){e.preventDefault();var i=t(this),o=i.attr("href")||i.attr("data-target"),r=t(o);r.hasClass(s+n)||r.collapse()}),l}(jQuery),Dropdown=function(t){var e="dropdown",i=t.fn[e],n="sv-is-open",s="[data-dropdown]",o=27,r="click.sv-dropdown",a="keydown.sv-dropdown",l=function(){function e(i){_classCallCheck(this,e),this.el=i,this.$el=t(i),this._id=this.el.id}return e.prototype.toggle=function(){this.$el.hasClass(n)?this.hide():this.show()},e.prototype.show=function(){this.$el.attr("aria-expanded","true").addClass(n).focus(),this._bindEvents()},e.prototype.hide=function(){this.$el.attr("aria-expanded","false").removeClass(n).find(".sv-dropdown--toggle").blur(),this._unbindEvents()},e.prototype._bindEvents=function(){var e=this,i=r+"-"+this.el.id,n=a+"-"+this.el.id;t(document).off(i).on(i,function(i){t(i.target).hasClass("sv-dropdown__menu")||e.hide()}),this.$el.off(n).one(n,function(t){t.which===o&&e.hide()})},e.prototype._unbindEvents=function(){t(document).off(r+"-"+this.el.id),this.$el.off(a+"-"+this.el.id)},e._jQuery=function(i){return this.each(function(){var n=t(this),s=n.data("sv.dropdown");if(s||(s=new e(this),n.data("sv.dropdown",s)),"string"==typeof i){var o=s[i];if(void 0===o)throw new Error('No method named "'+i+'"');return void o.call(s)}s.toggle()})},e}();return t.fn[e]=l._jQuery,t.fn[e].Constructor=l,t.fn[e].noConflict=function(){return t.fn[e]=i,l._jQuery},t(document).on("click",s,function(e){e.preventDefault();var i=t(this),n=t(i.data("target"));n.dropdown()}),l}(jQuery),_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Imageslider=function(t){var e="sv.image-slider",i="."+e,n="imageslider",s=".data-api",o=t.fn[n],r=37,a=39,l=500,h={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,imageSlider:!1},c={ACTIVE:".sv-image-slider__item--active",ACTIVE_ITEM:".sv-image-slider__item--active.sv-image-slider__item",ITEM:".sv-image-slider__item",NEXT_PREV:".sv-image-slider--next, .sv-image-slider--prev",INDICATORS:".sv-image-slider__indicators",THUMBNAILS:".sv-image-slider__thumbnails",DATA_SLIDE:"[data-slide], [data-slide-to]",DATA_IMAGE_SLIDER:'[data-image-slider="cycle"]',ACTIVE_DOT:".sv-icon--dot-big-selected",DOT:".sv-icon--dot-big"},d={IMAGESLIDER:"sv-image-slider",ACTIVE:"sv-image-slider__item--active",NEXT:"sv-image-slider__item--next",RIGHT:"sv-image-slider__item--right",PREV:"sv-image-slider__item--prev",LEFT:"sv-image-slider__item--left",SLIDE:"sv-image-slider--slide",ACTIVE_DOT:"sv-icon--dot-big-selected",DOT:"sv-icon--dot-big"},f={NEXT:"next",PREV:"prev",LEFT:"left",RIGHT:"right"},u={SLID:"slid"+i,SLIDE:"slide"+i,LOAD_DATA_API:"load"+i+s,CLICK_DATA_API:"click"+i+s,MOUSEENTER:"mouseenter"+i,MOUSELEAVE:"mouseleave"+i,TOUCHEND:"touchend"+i,KEYDOWN:"keydown"+i},v=function(){function n(e,i){_classCallCheck(this,n),this.el=e,this.$el=t(e),this.$images=this.$el.find(c.ITEM),this._isSliding=!1,this._isPaused=!1,this._interval=null,this._activeElement=null,this._indicatorsElement=this.$el.find(c.INDICATORS)[0],this._thumbnailElements=this.$el.find(c.THUMBNAILS)[0],this.config=t.extend({},h,this.$el.data(),i),this._bindEvents()}return n.prototype.next=function(){this._isSliding||this._slide(f.NEXT)},n.prototype.prev=function(){this._isSliding||this._slide(f.PREV)},n.prototype.nextWhenVisible=function(){document.hidden||this.next()},n.prototype.pause=function(t){t||(this._isPaused=!0),clearInterval(this._interval),this._interval=null},n.prototype.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this.config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this.config.interval))},n.prototype.goTo=function(t){this._activeElement=this.$el.find(c.ACTIVE_ITEM)[0];var e=this._getItemIndex(this._activeElement);if(!(t>this.$images.length-1||t<0||this._isSliding)){if(e===t)return this.pause(),void this.cycle();var i=t>e?f.NEXT:f.PREV;this._slide(i,this.$images[t])}},n.prototype.dispose=function(){this.$el.off(i).removeData(e),this.el=null,this.$images=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null,this._thumbnailElements=null},n.prototype._getItemByDirection=function(t,e){var i=t===f.NEXT,n=this._getItemIndex(e),s=this.$images.length-1,o=!i&&0===n||i&&n===s;if(o&&!this.config.wrap)return e;var r=i?1:-1,a=(n+r)%this.$images.length;return a===-1?this.$images[s]:this.$images[a]},n.prototype._bindEvents=function(){var t=this;this.config.keyboard&&this.$el.on(u.KEYDOWN,function(e){return t._keydown(e)}),"hover"===this.config.pause&&"cycle"===this.config.imageSlider&&(this.$el.on(u.MOUSEENTER,function(e){return t.pause(e)}).on(u.MOUSELEAVE,function(e){return t.cycle(e)}),"ontouchstart"in document.documentElement&&this.$el.on(u.TOUCHEND,function(){t.pause(),t.touchTimeout&&clearTimeout(t.touchTimeout),t.touchTimeout=setTimeout(function(e){return t.cycle(e)},l,t.config.interval)}))},n.prototype._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case r:t.preventDefault(),this.prev();break;case a:t.preventDefault(),this.next();break;default:return}},n.prototype._getItemIndex=function(t){return this.$images.index(t)},n.prototype._triggerSlideEvent=function(e,i){var n=this._getItemIndex(e),s=this._getItemIndex(this.$el.find(c.ACTIVE_ITEM)[0]),o=t.Event(u.SLIDE,{targetElement:e,direction:i,from:s,to:n});return this.$el.trigger(o),o},n.prototype._setActiveIndicatorElement=function(e){if(this._indicatorsElement){t(this._indicatorsElement).find(c.ACTIVE_DOT).removeClass(d.ACTIVE_DOT).addClass(d.DOT);var i=this._indicatorsElement.children[this._getItemIndex(e)].firstElementChild;i&&t(i).addClass(d.ACTIVE_DOT)}else if(this._thumbnailElements){t(this._thumbnailElements).find(c.ACTIVE).removeClass(d.ACTIVE);var n=this._thumbnailElements.children[this._getItemIndex(e)].firstElementChild;n&&t(n).addClass(d.ACTIVE)}},n.prototype._slide=function(e,i){var n=this,s=this.$el.find(c.ACTIVE_ITEM)[0],o=this._getItemIndex(s),r=i||s&&this._getItemByDirection(e,s),a=this._getItemIndex(r),l=void 0,h=void 0,v=void 0;e===f.NEXT?(l=d.LEFT,h=d.NEXT,v=f.LEFT):(l=d.RIGHT,h=d.PREV,v=f.RIGHT);var p=t(r);if(r&&p.hasClass(d.ACTIVE))return void(this._isSliding=!1);var _=this._triggerSlideEvent(r,v);if(!_.isDefaultPrevented()&&s&&r){this._isSliding=!0,this._setActiveIndicatorElement(r);var g=t.Event(u.SLID,{relatedTarget:r,direction:v,from:o,to:a}),m=t(s);this.$el.hasClass(d.SLIDE)?(p.addClass(h),Util.reflow(r),m.addClass(l),p.addClass(l),m.one(Util.getTransitionEndEvent(),function(){p.removeClass(l+" "+h).addClass(d.ACTIVE),m.removeClass(d.ACTIVE+" "+h+" "+l),n._isSliding=!1,n.$el.trigger(g)})):(m.removeClass(d.ACTIVE),p.addClass(d.ACTIVE),this._isSliding=!1,this.$el.trigger(_))}},n._jQueryInterface=function(i){var s=this;return this.each(function(){var o=t(s),r=o.data(e),a=t.extend({},h,o.data());"object"===("undefined"==typeof i?"undefined":_typeof(i))&&t.extend(a,i);var l="string"==typeof i?i:a.slide;if(r||(r=new n(s,a),o.data(e,r)),"number"==typeof i)r.goTo(i);else if("string"==typeof l){if(void 0===r[l])throw new Error('No method named "'+l+'"');r[l]()}else a.interval&&"cycle"===a.imageSlider&&(r.pause(),r.cycle())})},n._dataApiClickHandler=function(i){var s=Util.getSelectorFromElement(this);if(s){var o=t(s).eq(0);if(o.length&&o.hasClass(d.IMAGESLIDER)){var r=t.extend({},o.data(),t(this).data()),a=this.getAttribute("data-slide-to");a&&(r.interval=!1),n._jQueryInterface.call(o,r),a&&o.data(e).goTo(a),i.preventDefault()}}},n}();return t(document).on(u.CLICK_DATA_API,c.DATA_SLIDE,v._dataApiClickHandler),t(window).on(u.LOAD_DATA_API,function(){var e=t(c.DATA_IMAGE_SLIDER);e.each(function(e,i){var n=t(i);v._jQueryInterface.call(n,n.data())})}),t.fn[n]=v._jQueryInterface,t.fn[n].Constructor=v,t.fn[n].noConflict=function(){return t.fn[n]=o,v._jQueryInterface},v}(jQuery),Modal=function(t){var e="sv-animation-in-progress",i="sv-modal__backdrop",n="sv-modal__backdrop--in",s="sv.modal",o="[data-modal-dismiss]",r=27,a="focusin.sv-modal",l="sv-modal--",h="modal",c=t.fn[h],d="[data-modal]",f="show",u=9,v='a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',p={HIDE:"hide.sv-modal",HIDDEN:"hidden.sv-modal",SHOW:"show.sv-modal",SHOWN:"shown.sv-modal"},_=function(){function h(e){_classCallCheck(this,h),this.el=e,this.$el=t(e),this._isShown=!1}return h.prototype.toggle=function(){return this._isShown?this.hide():this.show()},h.prototype.show=function(){var e=this;if(!this._isShown){Util.reflow(this.el);var i=t.Event(p.SHOW,{});this.$el.trigger(i);var n=t.Event(p.SHOWN,{});this.$el.one(Util.getTransitionEndEvent(),function(){e.$el.trigger(n)}).addClass(l+f).removeAttr("aria-hidden").css("opacity",1),this._showBackdrop(),this._isShown=!0,this.el.focus(),this._bindEvents()}},h.prototype.hide=function(){var e=this;if(this._isShown){var i=function(){e.$el.removeClass(l+f);var i=t.Event(p.HIDDEN,{});e.$el.trigger(i)},s=function(){e.$backdrop.remove()},r=t.Event(p.HIDE,{});this.$el.trigger(r),this.$el.one(Util.getTransitionEndEvent(),i).attr("aria-hidden","true").css("opacity",0).off("click",o),this.$backdrop.one(Util.getTransitionEndEvent(),s).removeClass(n),this._isShown=!1,this._unbindEvents()}},h.prototype._bindEvents=function(){var e=this;this.$el.on("click",o,function(t){return e.hide(t)}),t(document).off(a).one(a,function(t){document===t.target||e.el===t.target||e.$el.has(t.target).length||e.el.focus()});var i=this.$el.find(v),n=i[0],s=i[i.length-1];this.$el.on("keydown",function(t){t.which===u&&(t.shiftKey?t.target===n&&(t.preventDefault(),s.focus()):t.target===s&&(t.preventDefault(),n.focus())),t.which===r&&e.hide()})},h.prototype._unbindEvents=function(){this.$el.off("click keydown"),t(document).off(a)},h.prototype._showBackdrop=function(){var s=this;this.$backdrop=t("<div/>",{class:i}),this.$el.on("click",function(t){s.$backdrop.hasClass(e)||t.target===t.currentTarget&&s._isShown&&s.hide()}),this.$backdrop.appendTo(document.body),this.$backdrop.one(Util.getAnimationEndEvent(),this._removeBackdropAnimation).addClass(n+" "+e)},h.prototype._removeBackdropAnimation=function(i){t(i.currentTarget).removeClass(e)},h._jQuery=function(e){var i=this;return this.each(function(){var n=t(i),o=n.data(s);if(o||(o=new h(i),n.data(s,o)),"string"==typeof e){var r=o[e];if(void 0===r)throw new Error('No method named "'+e+'"');return void r.call(o)}o.show()})},h}();return t.fn[h]=_._jQuery,t.fn[h].Constructor=_,t.fn[h].noConflict=function(){return t.fn[h]=c,_._jQuery},t(document).on("click",d,function(e){e.preventDefault();var i=t(t(this).data("target"));i.modal()}),_}(jQuery),_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Popover=function(t){var e="popover",i="sv.popover",n="."+i,s=t.fn[e],o="sv-tether",r={top:"bottom center",bottom:"top center",left:"middle right",right:"middle left"},a={top:"10 0",bottom:"-10 0",left:"0 10",right:"0 -10"},l={constraints:[],container:"body",content:"",escapeContent:!0,customOffset:void 0,placement:"top",template:'<div class="sv-popover" role="tooltip">\n                  <div class="sv-popover__arrow"></div>\n                  <div class="sv-popover__header">\n                     <h3 class="sv-popover__header__title"></h3>\n                  </div>\n                  <div class="sv-popover__content"></div>\n               </div>',title:"",trigger:"click"},h=function(){function e(i,n){_classCallCheck(this,e),this.el=i,this.$el=t(this.el),this.config=t.extend({},l,this.$el.data(),n),this.bindEvents()}return e.prototype.bindEvents=function(){var t=this,e=this.config.trigger.split(" ");e.forEach(function(e){if("click"===e)t.$el.on(t.config.trigger+n,function(){t.isShowing?t.hide():t.show()});else{var i="hover"===e,s=i?"mouseenter":"focusin",o=i?"mouseleave":"focusout";t.$el.on(s+n,function(){t.isShowing||t.show()}).on(o+n,function(){t.isShowing&&t.hide()})}})},e.prototype.getPopoverElement=function(){return this.$popoverElement=this.$popoverElement||t(this.config.template)},e.prototype.setText=function(t,e,i){t.find(e)[this.config.escapeContent?"text":"html"](i)},e.prototype.setTitle=function(t){this.setText(t,".sv-popover__header__title",this.config.title)},e.prototype.setContent=function(t){this.setText(t,".sv-popover__content",this.config.content)},e.prototype.setArrowPosition=function(t){t.find(".sv-popover__arrow").addClass("sv-popover__arrow--"+this.config.placement)},e.prototype._getOffset=function(){return this.config.customOffset||a[this.config.placement]},e.prototype.hide=function(){var t=this.getPopoverElement();t.detach(),this.isShowing=!1},e.prototype.show=function(){var e=this.getPopoverElement();this.setTitle(e),this.setContent(e),this.setArrowPosition(e),t("body").append(e),this._tether=new Tether({attachment:r[this.config.placement],element:e,target:this.el,classes:{element:!1,enabled:!1},classPrefix:o,offset:this._getOffset(),constraints:this.config.constraints,addTargetClasses:!1}),this._tether.position(),this.isShowing=!0},e.prototype.destroy=function(){this.hide(),this.$popoverElement=void 0,this._tether=void 0,this.isShowing=!1,this.$el.removeData(i)},e._jQuery=function(n){return this.each(function(){var s=t(this),o=s.data(i);if((o||!/destroy|hide/.test(n))&&(o||(o=new e(this,"object"===("undefined"==typeof n?"undefined":_typeof(n))?n:null),s.data(i,o)),"string"==typeof n)){var r=o[n];if(!r)throw new Error('Invalid method name "'+n+'"');r.call(o)}})},e}();return t.fn[e]=h._jQuery,t.fn[e].Constructor=h,t.fn[e].noConflict=function(){return t.fn[e]=s,h._jQuery},h}(jQuery),RangeSlider=function(t){var e="range-handle-index",i=".sv-range-slider__handle",n=".sv-range-slider__value",s=".sv-range-slider__range",o="sv-range-slider--touch",r="sv.range-slider",a="rangeSlider",l=t.fn[a],h=39,c=37,d=40,f=38,u={SLIDE:"slide",STOP:"slidestop"},v={min:0,max:100,step:1,values:[0,0],visibleValues:!0},p=function(){function a(e,o){_classCallCheck(this,a),this.config=t.extend({},v,o),this.$document=t(document),this.el=e,this.$el=t(e),this.handles=this.$el.find(i),this.$range=this.$el.find(s),this.isTouch=Util.isTouch(),this.config.visibleValues&&(this.handleValueHolders=this.$el.find(n)),this.handleEvents={mousedown:this._initSlide.bind(this),touchstart:this._initSlide.bind(this),keydown:this._initKeySlide.bind(this),keyup:this._stopKeySlide.bind(this)}}return a.prototype.initialize=function(){this._setupHandles(),this._refreshRange(),this._bindEvents(),this.isTouch&&this.$el.addClass(o)},a.prototype.values=function(e){if(t.isArray(e)){for(var i=0;i<e.length;i+=1)this.config.values[i]=this._trimAlignValue(e[i]);this._refreshRange()}},a.prototype._setupHandles=function(){this.handles.each(function(i,n){t(n).data(e,i)})},a.prototype._refreshRange=function(){var e=this,i=void 0,n=void 0,s=void 0;this.handles.each(function(o,r){s=e._getValue(o),n=(s-e.config.min)/(e.config.max-e.config.min)*100,t(r).css("left",n+"%"),0===o?(e.$range.css("left",n+"%"),e.config.visibleValues&&e.handleValueHolders.eq(o).css("left",n+"%").text(s)):(e.$range.css("width",n-i+"%"),e.config.visibleValues&&e.handleValueHolders.eq(o).css("left",n+"%").text(s)),i=n})},a.prototype._bindEvents=function(){this.handles.off(),this.handles.on(this.handleEvents)},a.prototype._initSlide=function(e){var i=this,n=this._getPosition(e),s=this._normValueFromMouse(n),o=this.config.max-this.config.min+1,a=void 0,l=void 0,h=void 0,c=void 0;this.$document.on("mousemove."+r+" touchmove."+r,this._handleSlide.bind(this)),this.$document.one("mouseup."+r+" touchend."+r,this._stopSlide.bind(this)),this.handles.each(function(e,n){h=i._getValue(e),c=Math.abs(s-h),(o>c||o===c&&(e===i._lastChangedValue||h===i.config.min))&&(o=c,a=t(n),l=e)}),this._handleIndex=l,a.trigger("focus");var d=a.offset();this._clickOffset={left:n.x-d.left-a.width()/2,top:n.y-d.top-a.height()/2-(parseInt(a.css("borderTopWidth"),10)||0)-(parseInt(a.css("borderBottomWidth"),10)||0)+(parseInt(a.css("marginTop"),10)||0)},this._slide(e,l,s)},a.prototype._handleSlide=function(t){var e=this._normValueFromMouse(this._getPosition(t));return this._slide(t,this._handleIndex,e),!1},a.prototype._slide=function(t,e,i){var n=this._getValue(e?0:1),s=this._getValue(e),o=this._getValues();i=0===e?Math.min(n,i):Math.max(n,i),o[e]=i,i!==s&&(this._trigger(u.SLIDE,t,{values:o}),this._setValue(e,i))},a.prototype._stopSlide=function(t){return this.$document.off("mousemove."+r+" touchmove."+r),this._trigger(u.STOP,t,{values:this._getValues()}),this._handleIndex=null,this._clickOffset=null,!1},a.prototype._initKeySlide=function(i){switch(i.keyCode){case f:case d:case c:case h:i.preventDefault(),this._keySliding||(this._keySliding=!0);break;default:return}var n=t(i.target).data(e),s=this._getValue(n),o=void 0;switch(event.keyCode){case f:case h:if(s===this.config.max)return;o=this._trimAlignValue(s+this.config.step);break;case d:case c:if(s===this.config.min)return;o=this._trimAlignValue(s-this.config.step)}this._slide(i,n,o)},a.prototype._stopKeySlide=function(t){this._keySliding&&(this._keySliding=!1,this._trigger(u.STOP,t,{values:this._getValues()}))},a.prototype._normValueFromMouse=function(t){var e=this.el.outerWidth(),i=this.config.max-this.config.min,n=t.x-this.el.offset().left-(this._clickOffset?this._clickOffset.left:0),s=n/e;s>1&&(s=1),s<0&&(s=0);var o=this.config.min+s*i;return this._trimAlignValue(o)},a.prototype._getPosition=function(t){var e={};if(this.isTouch){var i=t.originalEvent.touches[0];e.x=i.pageX,e.y=i.pageY}else e.x=t.pageX,e.y=t.pageY;return e},a.prototype._trimAlignValue=function(t){if(t<=this.config.min)return this.config.min;if(t>=this.config.max)return this.config.max;var e=this.config.step,i=(t-this.config.min)%e,n=t-i;return 2*Math.abs(i)>=e&&(n+=i>0?e:-e),parseFloat(n.toFixed(5))},a.prototype._getValues=function(){return this.config.values.slice()},a.prototype._getValue=function(t){return this.config.values[t]},a.prototype._setValue=function(t,e){this.config.values[t]=this._trimAlignValue(e),this._refreshRange()},a.prototype._trigger=function(e,i,n){var s=this.el[0],o=this.config[e];i=t.Event(i),i.type=e,i.target=s,this.$el.trigger(i,n),o&&o.call(s,i,n)},a._jQuery=function(e){for(var i=this,n=arguments.length,s=Array(n>1?n-1:0),o=1;o<n;o++)s[o-1]=arguments[o];return this.each(function(){var n=t(i),o=n.data(r);if(o||(o=new a(i,e),n.data(r,o)),"string"==typeof e){var l=o[e];if(void 0===l)throw new Error('No method named "'+e+'"');l.call.apply(l,[o].concat(s))}o.initialize()})},a}();return t.fn[a]=p._jQuery,t.fn[a].Constructor=p,t.fn[a].noConflict=function(){return t.fn[a]=l,p._jQuery},p}(jQuery),Tabs=function(t){var e="aria-selected",i="aria-hidden",n=13,s="sv.tabs",o="sv-is-active",r="tabs",a=t.fn[r],l=".sv-tabs__nav__link",h={active:0},c=function(){function r(e,i){_classCallCheck(this,r),this.el=e,this.$el=t(e),this.$tabs=this.$el.find(l),this.config=t.extend({},h,i),this.$panels={},this.$activeTab=void 0,this._bindEvents()}return r.prototype.initialize=function(){var n=this;this.$tabs.each(function(s,r){var a=t(r),l=n.$el.find(a.attr("href"));n.$panels[a.attr("id")]=l,a.removeClass(o).attr(e,!1),l.attr(i,!0).hide()}),this._setActive(this.$tabs.eq(this.config.active))},r.prototype.activate=function(t){this._setActive(this.$tabs.eq(t))},r.prototype.destroy=function(){this.$tabs.off("click keydown"),this.$activeTab=void 0,this.$tabs=void 0,this.$panels=void 0,this.$el.removeData(s)},r.prototype._bindEvents=function(){var e=this;this.$tabs.on("click",function(i){i.preventDefault(),e._setActive(t(i.currentTarget))}),this.$tabs.on("keydown",function(i){i.which===n&&e._setActive(t(i.currentTarget))})},r.prototype._setActive=function(t){this._resetActive(),t.addClass(o).attr(e,!0).focus(),this._getPanelForTab(t).attr(i,!1).show(),this.$activeTab=t},r.prototype._getPanelForTab=function(t){return this.$panels[t.attr("id")]},r.prototype._resetActive=function(){this.$activeTab&&(this.$activeTab.removeClass(o).attr(e,!1),this._getPanelForTab(this.$activeTab).attr(i,!0).hide())},r._jQuery=function(e,i){var n=this;return this.each(function(){var o=t(n),a=o.data(s);if(a){if("string"==typeof e){var l=a[e];if(!l)throw new Error('Invalid method name "'+e+'"');l.call(a,i)}}else a=new r(n,e),o.data(s,a),a.initialize()})},r}();return t.fn[r]=c._jQuery,t.fn[r].Constructor=c,t.fn[r].noConflict=function(){return t.fn[r]=a,c._jQuery},c}(jQuery),Util=function(){function t(t){var e=void 0,i=document.createElement("fakeelement");for(e in t)if(void 0!==i.style[e])return t[e];return!1}var e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},i={OAnimation:"oAnimationEnd",MozAnimation:"animationend",WebkitAnimation:"webkitAnimationEnd",animation:"animationend"},n={getAnimationEndEvent:function(){return t(i)},getTransitionEndEvent:function(){return t(e)},reflow:function(t){return t.offsetHeight},isTouch:function(){return"ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch},getSelectorFromElement:function(t){var e=t.getAttribute("data-target");e&&"#"!==e||(e=t.getAttribute("href")||"");try{return $(e).length>0?e:null}catch(t){return null}}};return n}();
//# sourceMappingURL=../dist/map/envision.js.map
