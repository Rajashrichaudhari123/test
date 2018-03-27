/*! noUiSlider - 7.0.9 - 2014-10-08 16:49:45 */

!function(a){"use strict";function b(a,b){return Math.round(a/b)*b}function c(a){return"number"==typeof a&&!isNaN(a)&&isFinite(a)}function d(a){var b=Math.pow(10,7);return Number((Math.round(a*b)/b).toFixed(7))}function e(a,b,c){a.addClass(b),setTimeout(function(){a.removeClass(b)},c)}function f(a){return Math.max(Math.min(a,100),0)}function g(b){return a.isArray(b)?b:[b]}function h(a,b){return 100/(b-a)}function i(a,b){return 100*b/(a[1]-a[0])}function j(a,b){return i(a,a[0]<0?b+Math.abs(a[0]):b-a[0])}function k(a,b){return b*(a[1]-a[0])/100+a[0]}function l(a,b){for(var c=1;a>=b[c];)c+=1;return c}function m(a,b,c){if(c>=a.slice(-1)[0])return 100;var d,e,f,g,i=l(c,a);return d=a[i-1],e=a[i],f=b[i-1],g=b[i],f+j([d,e],c)/h(f,g)}function n(a,b,c){if(c>=100)return a.slice(-1)[0];var d,e,f,g,i=l(c,b);return d=a[i-1],e=a[i],f=b[i-1],g=b[i],k([d,e],(c-f)*h(f,g))}function o(a,c,d,e){if(100===e)return e;var f,g,h=l(e,a);return d?(f=a[h-1],g=a[h],e-f>(g-f)/2?g:f):c[h-1]?a[h-1]+b(e-a[h-1],c[h-1]):e}function p(a,b,d){var e;if("number"==typeof b&&(b=[b]),"[object Array]"!==Object.prototype.toString.call(b))throw new Error("noUiSlider: 'range' contains invalid value.");if(e="min"===a?0:"max"===a?100:parseFloat(a),!c(e)||!c(b[0]))throw new Error("noUiSlider: 'range' value isn't numeric.");d.xPct.push(e),d.xVal.push(b[0]),e?d.xSteps.push(isNaN(b[1])?!1:b[1]):isNaN(b[1])||(d.xSteps[0]=b[1])}function q(a,b,c){return b?void(c.xSteps[a]=i([c.xVal[a],c.xVal[a+1]],b)/h(c.xPct[a],c.xPct[a+1])):!0}function r(a,b,c,d){this.xPct=[],this.xVal=[],this.xSteps=[d||!1],this.xNumSteps=[!1],this.snap=b,this.direction=c;var e,f=this;for(e in a)a.hasOwnProperty(e)&&p(e,a[e],f);f.xNumSteps=f.xSteps.slice(0);for(e in f.xNumSteps)f.xNumSteps.hasOwnProperty(e)&&q(Number(e),f.xNumSteps[e],f)}function s(a,b){if(!c(b))throw new Error("noUiSlider: 'step' is not numeric.");a.singleStep=b}function t(b,c){if("object"!=typeof c||a.isArray(c))throw new Error("noUiSlider: 'range' is not an object.");if(void 0===c.min||void 0===c.max)throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");b.spectrum=new r(c,b.snap,b.dir,b.singleStep)}function u(b,c){if(c=g(c),!a.isArray(c)||!c.length||c.length>2)throw new Error("noUiSlider: 'start' option is incorrect.");b.handles=c.length,b.start=c}function v(a,b){if(a.snap=b,"boolean"!=typeof b)throw new Error("noUiSlider: 'snap' option must be a boolean.")}function w(a,b){if(a.animate=b,"boolean"!=typeof b)throw new Error("noUiSlider: 'animate' option must be a boolean.")}function x(a,b){if("lower"===b&&1===a.handles)a.connect=1;else if("upper"===b&&1===a.handles)a.connect=2;else if(b===!0&&2===a.handles)a.connect=3;else{if(b!==!1)throw new Error("noUiSlider: 'connect' option doesn't match handle count.");a.connect=0}}function y(a,b){switch(b){case"horizontal":a.ort=0;break;case"vertical":a.ort=1;break;default:throw new Error("noUiSlider: 'orientation' option is invalid.")}}function z(a,b){if(!c(b))throw new Error("noUiSlider: 'margin' option must be numeric.");if(a.margin=a.spectrum.getMargin(b),!a.margin)throw new Error("noUiSlider: 'margin' option is only supported on linear sliders.")}function A(a,b){if(!c(b))throw new Error("noUiSlider: 'limit' option must be numeric.");if(a.limit=a.spectrum.getMargin(b),!a.limit)throw new Error("noUiSlider: 'limit' option is only supported on linear sliders.")}function B(a,b){switch(b){case"ltr":a.dir=0;break;case"rtl":a.dir=1,a.connect=[0,2,1,3][a.connect];break;default:throw new Error("noUiSlider: 'direction' option was not recognized.")}}function C(a,b){if("string"!=typeof b)throw new Error("noUiSlider: 'behaviour' must be a string containing options.");var c=b.indexOf("tap")>=0,d=b.indexOf("drag")>=0,e=b.indexOf("fixed")>=0,f=b.indexOf("snap")>=0;a.events={tap:c||f,drag:d,fixed:e,snap:f}}function D(a,b){if(a.format=b,"function"==typeof b.to&&"function"==typeof b.from)return!0;throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.")}function E(b){var c,d={margin:0,limit:0,animate:!0,format:U};return c={step:{r:!1,t:s},start:{r:!0,t:u},connect:{r:!0,t:x},direction:{r:!0,t:B},snap:{r:!1,t:v},animate:{r:!1,t:w},range:{r:!0,t:t},orientation:{r:!1,t:y},margin:{r:!1,t:z},limit:{r:!1,t:A},behaviour:{r:!0,t:C},format:{r:!1,t:D}},b=a.extend({connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal"},b),a.each(c,function(a,c){if(void 0===b[a]){if(c.r)throw new Error("noUiSlider: '"+a+"' is required.");return!0}c.t(d,b[a])}),d.style=d.ort?"top":"left",d}function F(a,b,c){var d=a+b[0],e=a+b[1];return c?(0>d&&(e+=Math.abs(d)),e>100&&(d-=e-100),[f(d),f(e)]):[d,e]}function G(a){a.preventDefault();var b,c,d=0===a.type.indexOf("touch"),e=0===a.type.indexOf("mouse"),f=0===a.type.indexOf("pointer"),g=a;return 0===a.type.indexOf("MSPointer")&&(f=!0),a.originalEvent&&(a=a.originalEvent),d&&(b=a.changedTouches[0].pageX,c=a.changedTouches[0].pageY),(e||f)&&(f||void 0!==window.pageXOffset||(window.pageXOffset=document.documentElement.scrollLeft,window.pageYOffset=document.documentElement.scrollTop),b=a.clientX+window.pageXOffset,c=a.clientY+window.pageYOffset),g.points=[b,c],g.cursor=e,g}function H(b,c){var d=a("<div><div/></div>").addClass(T[2]),e=["-lower","-upper"];return b&&e.reverse(),d.children().addClass(T[3]+" "+T[3]+e[c]),d}function I(a,b,c){switch(a){case 1:b.addClass(T[7]),c[0].addClass(T[6]);break;case 3:c[1].addClass(T[6]);case 2:c[0].addClass(T[7]);case 0:b.addClass(T[6])}}function J(a,b,c){var d,e=[];for(d=0;a>d;d+=1)e.push(H(b,d).appendTo(c));return e}function K(b,c,d){return d.addClass([T[0],T[8+b],T[4+c]].join(" ")),a("<div/>").appendTo(d).addClass(T[1])}function L(b,c,d){function h(){return B[["width","height"][c.ort]]()}function i(a){var b,c=[D.val()];for(b=0;b<a.length;b+=1)D.trigger(a[b],c)}function j(a){return 1===a.length?a[0]:c.dir?a.reverse():a}function k(a){return function(b,c){D.val([a?null:c,a?c:null],!0)}}function l(b){var c=a.inArray(b,M);D[0].linkAPI&&D[0].linkAPI[b]&&D[0].linkAPI[b].change(L[c],C[c].children(),D)}function m(b,d){var e=a.inArray(b,M);return d&&d.appendTo(C[e].children()),c.dir&&c.handles>1&&(e=1===e?0:1),k(e)}function n(){var a,b;for(a=0;a<M.length;a+=1)this.linkAPI&&this.linkAPI[b=M[a]]&&this.linkAPI[b].reconfirm(b)}function o(a,b,d,e){return a=a.replace(/\s/g,R+" ")+R,b.on(a,function(a){return D.attr("disabled")?!1:D.hasClass(T[14])?!1:(a=G(a),a.calcPoint=a.points[c.ort],void d(a,e))})}function p(a,b){var c,d=b.handles||C,e=!1,f=100*(a.calcPoint-b.start)/h(),g=d[0][0]!==C[0][0]?1:0;c=F(f,b.positions,d.length>1),e=u(d[0],c[g],1===d.length),d.length>1&&(e=u(d[1],c[g?0:1],!1)||e),e&&i(["slide"])}function q(b){a("."+T[15]).removeClass(T[15]),b.cursor&&a("body").css("cursor","").off(R),P.off(R),D.removeClass(T[12]),i(["set","change"])}function r(b,c){1===c.handles.length&&c.handles[0].children().addClass(T[15]),b.stopPropagation(),o(S.move,P,p,{start:b.calcPoint,handles:c.handles,positions:[E[0],E[C.length-1]]}),o(S.end,P,q,null),b.cursor&&(a("body").css("cursor",a(b.target).css("cursor")),C.length>1&&D.addClass(T[12]),a("body").on("selectstart"+R,!1))}function s(b){var d,f=b.calcPoint,g=0;b.stopPropagation(),a.each(C,function(){g+=this.offset()[c.style]}),g=g/2>f||1===C.length?0:1,f-=B.offset()[c.style],d=100*f/h(),c.events.snap||e(D,T[14],300),u(C[g],d),i(["slide","set","change"]),c.events.snap&&r(b,{handles:[C[g]]})}function t(a){var b,c;if(!a.fixed)for(b=0;b<C.length;b+=1)o(S.start,C[b].children(),r,{handles:[C[b]]});a.tap&&o(S.start,B,s,{handles:C}),a.drag&&(c=B.find("."+T[7]).addClass(T[10]),a.fixed&&(c=c.add(B.children().not(c).children())),o(S.start,c,r,{handles:C}))}function u(a,b,d){var e=a[0]!==C[0][0]?1:0,g=E[0]+c.margin,h=E[1]-c.margin,i=E[0]+c.limit,j=E[1]-c.limit;return C.length>1&&(b=e?Math.max(b,g):Math.min(b,h)),d!==!1&&c.limit&&C.length>1&&(b=e?Math.min(b,i):Math.max(b,j)),b=H.getStep(b),b=f(parseFloat(b.toFixed(7))),b===E[e]?!1:(a.css(c.style,b+"%"),a.is(":first-child")&&a.toggleClass(T[17],b>50),E[e]=b,L[e]=H.fromStepping(b),l(M[e]),!0)}function v(a,b){var d,e,f;for(c.limit&&(a+=1),d=0;a>d;d+=1)e=d%2,f=b[e],null!==f&&f!==!1&&("number"==typeof f&&(f=String(f)),f=c.format.from(f),(f===!1||isNaN(f)||u(C[e],H.toStepping(f),d===3-c.dir)===!1)&&l(M[e]))}function w(a){if(D[0].LinkIsEmitting)return this;var b,d=g(a);return c.dir&&c.handles>1&&d.reverse(),c.animate&&-1!==E[0]&&e(D,T[14],300),b=C.length>1?3:1,1===d.length&&(b=1),v(b,d),i(["set"]),this}function x(){var a,b=[];for(a=0;a<c.handles;a+=1)b[a]=c.format.to(L[a]);return j(b)}function y(){return a(this).off(R).removeClass(T.join(" ")).empty(),delete this.LinkUpdate,delete this.LinkConfirm,delete this.LinkDefaultFormatter,delete this.LinkDefaultFlag,delete this.reappend,delete this.vGet,delete this.vSet,delete this.getCurrentStep,delete this.getInfo,delete this.destroy,d}function z(){var b=a.map(E,function(a,b){var c=H.getApplicableStep(a),d=L[b],e=c[2],f=d-c[2]>=c[1]?c[2]:c[0];return[[f,e]]});return j(b)}function A(){return d}var B,C,D=a(b),E=[-1,-1],H=c.spectrum,L=[],M=["lower","upper"].slice(0,c.handles);if(c.dir&&M.reverse(),b.LinkUpdate=l,b.LinkConfirm=m,b.LinkDefaultFormatter=c.format,b.LinkDefaultFlag="lower",b.reappend=n,D.hasClass(T[0]))throw new Error("Slider was already initialized.");B=K(c.dir,c.ort,D),C=J(c.handles,c.dir,B),I(c.connect,D,C),t(c.events),b.vSet=w,b.vGet=x,b.destroy=y,b.getCurrentStep=z,b.getOriginalOptions=A,b.getInfo=function(){return[H,c.style,c.ort]},D.val(c.start)}function M(a){if(!this.length)throw new Error("noUiSlider: Can't initialize slider on empty selection.");var b=E(a,this);return this.each(function(){L(this,b,a)})}function N(b){return this.each(function(){if(!this.destroy)return void a(this).noUiSlider(b);var c=a(this).val(),d=this.destroy(),e=a.extend({},d,b);a(this).noUiSlider(e),this.reappend(),d.start===e.start&&a(this).val(c)})}function O(){return this[0][arguments.length?"vSet":"vGet"].apply(this[0],arguments)}var P=a(document),Q=a.fn.val,R=".nui",S=window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"},T=["noUi-target","noUi-base","noUi-origin","noUi-handle","noUi-horizontal","noUi-vertical","noUi-background","noUi-connect","noUi-ltr","noUi-rtl","noUi-dragable","","noUi-state-drag","","noUi-state-tap","noUi-active","","noUi-stacking"];r.prototype.getMargin=function(a){return 2===this.xPct.length?i(this.xVal,a):!1},r.prototype.toStepping=function(a){return a=m(this.xVal,this.xPct,a),this.direction&&(a=100-a),a},r.prototype.fromStepping=function(a){return this.direction&&(a=100-a),d(n(this.xVal,this.xPct,a))},r.prototype.getStep=function(a){return this.direction&&(a=100-a),a=o(this.xPct,this.xSteps,this.snap,a),this.direction&&(a=100-a),a},r.prototype.getApplicableStep=function(a){var b=l(a,this.xPct),c=100===a?2:1;return[this.xNumSteps[b-2],this.xVal[b-c],this.xNumSteps[b-c]]},r.prototype.convert=function(a){return this.getStep(this.toStepping(a))};var U={to:function(a){return a.toFixed(2)},from:Number};a.fn.val=function(b){function c(a){return a.hasClass(T[0])?O:Q}if(void 0===b){var d=a(this[0]);return c(d).call(d)}var e=a.isFunction(b);return this.each(function(d){var f=b,g=a(this);e&&(f=b.call(this,d,g.val())),c(g).call(g,f)})},a.fn.noUiSlider=function(a,b){switch(a){case"step":return this[0].getCurrentStep();case"options":return this[0].getOriginalOptions()}return(b?N:M).call(this,a)}}(window.jQuery||window.Zepto);