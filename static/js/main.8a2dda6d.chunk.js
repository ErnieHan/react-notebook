(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{392:function(e){e.exports=JSON.parse('{"app":{"hello":"Hello World!","home":"Home","about":"About","users":"Users"}}')},393:function(e){e.exports=JSON.parse('{"app":{"hello":"\u54c8\u56c9\uff01","home":"\u9996\u9801","about":"\u95dc\u65bc\u6211","users":"\u6703\u54e1\u8cc7\u8a0a"}}')},396:function(e,t,n){e.exports=n(861)},442:function(e,t,n){},861:function(e,t,n){"use strict";n.r(t);n(397),n(402),n(420),n(421),n(429),n(430),n(432),n(433),n(434);var a=n(0),r=n.n(a),o=n(192),c=n.n(o),l=(n(442),n(83)),u=n(84),i=n(86),p=n(85),s=n(87),h=n(195),m=n(194),b=(n(154),n(263),function(e){var t=("; "+document.cookie).split("; "+e+"=");if(2===t.length)return t.pop().split(";").shift()}),g=function(e,t){document.cookie=e.toString()+"="+t+";path=/"},f={background:"#FFFFFF",textColor:"#000000",button:"red"},d={background:"#2F2F2F",textColor:"#CCCCCC",button:"darkred"},O=function(e,t){return{type:"UPDATE_THEME",themeName:e,themeColors:t}},y=n(112),v=n(111),E=n(156),j=n(88),k=n(196),T=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Home Page"))}}]),t}(a.Component),w=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"About Page"))}}]),t}(a.Component),x=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Page404"))}}]),t}(a.Component);function C(){var e=Object(h.a)(['\n  position: relative;\n  width: 70px;\n  height: 35px;\n  display: block;\n  cursor: pointer;\n  div {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    border: 1px solid #ccc;\n    background: #e9e9e9;\n    border-radius: 50px;\n    transition: all 300ms;\n  }\n  div::after {\n    content: "";\n    display: block;\n    position: absolute;\n    width: 30px;\n    height: 30px;\n    background: white;\n    border-radius: 50%;\n    border: 1px solid #ccc;\n    top: 50%;\n    transform: translateY(-50%);\n    transition: all 300ms;\n    left: 0;\n  }\n  input[type="checkbox"] {\n    display: none;\n  }\n  input[type="checkbox"]:checked ~ div {\n    background: #4bd162;\n  }\n  input[type="checkbox"]:checked ~ div::after {\n    left: 100%;\n    transform: translateY(-50%) translateX(-100%);\n  }\n']);return C=function(){return e},e}function P(){var e=Object(h.a)(["\n  min-width: 250px;\n  padding: 12px;\n  background: #111111;\n  color: #ffffff;\n  font-size: 14px;\n  border: 0;\n  margin-bottom: 0.5rem;\n"]);return P=function(){return e},e}function S(){var e=Object(h.a)(["\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 35px 15px;\n  background: ",";\n"]);return S=function(){return e},e}var W=k.a.div(S(),(function(e){return e.theme.background})),D=k.a.button(P()),F=k.a.label(C()),N=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(i.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={language:"zhTW"},n.changeLanguage=function(){"zhTW"===n.state.language?(n.setState({language:"en"}),v.a.changeLanguage("en"),g("language","en")):(n.setState({language:"zhTW"}),v.a.changeLanguage("zhTW"),g("language","zhTW"))},n.handleChangeTheme=function(){var e=n.props,t=e.changeTheme;t("primary"===e.themeName?"dark":"primary")},n}return Object(s.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.readThemeCookie;if(b("language")){var t=b("language");this.setState({language:t}),v.a.changeLanguage(t)}else g("language","zhTW");e()}},{key:"render",value:function(){var e=this.props,t=e.getThemeSuccessfully,n=e.themeName,a=e.themeColors;return t&&r.a.createElement(W,{className:"transition"},console.log(a),r.a.createElement("style",null,"\n          body{\n            background: ".concat(a.background,";\n            color: ").concat(a.textColor,";\n          }\n          ")),r.a.createElement(y.a,null,(function(e){return r.a.createElement("h1",null,e("app.hello"))})),r.a.createElement(D,{onClick:this.changeLanguage},"\u9ede\u64ca\u5207\u63db\u8a9e\u8a00\uff0c\u76ee\u524d\u8a9e\u8a00\u70ba\uff1a",this.state.language),r.a.createElement(F,null,r.a.createElement("input",{type:"checkbox",onChange:this.handleChangeTheme,checked:"dark"===n}),r.a.createElement("div",null)),r.a.createElement(E.a,null,r.a.createElement("div",null,r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(E.b,{to:"/"},"-",r.a.createElement(y.a,null,(function(e){return r.a.createElement(r.a.Fragment,null,e("app.home"))})))),r.a.createElement("li",null,r.a.createElement(E.b,{to:"/about"},"-",r.a.createElement(y.a,null,(function(e){return r.a.createElement(r.a.Fragment,null,e("app.about"))})))),r.a.createElement("li",null,r.a.createElement(E.b,{to:"/users"},"-",r.a.createElement(y.a,null,(function(e){return r.a.createElement(r.a.Fragment,null,e("app.users"))})))))),r.a.createElement(j.c,null,r.a.createElement(j.a,{exact:!0,path:"/"},r.a.createElement(T,null)),r.a.createElement(j.a,{path:"/about"},r.a.createElement(w,null)),r.a.createElement(j.a,{path:"*"},r.a.createElement(x,null))))))}}]),t}(r.a.Component),z=Object(m.b)((function(e){return{setAppActive:e.app.active,themeName:e.app.updateTheme.themeName,themeColors:e.app.updateTheme.themeColors,getThemeSuccessfully:e.app.updateTheme.getThemeSuccessfully}}),(function(e){return{setApp:function(){return e({type:"SET_APP"})},readThemeCookie:function(){return e((function(e){if(b("theme")){var t=b("theme");e(O(t,"primary"===t?f:d))}else g("theme","primary"),e(O("primary",f))}))},changeTheme:function(t){return e(function(e){return function(t){if("primary"===e){var n=f;g("theme",e),t(O(e,n))}else{var a=d;g("theme",e),t(O(e,a))}}}(t))}}}))(N);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var A=n(63),L=n(390),H=n(391),J=n(193);function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(n,!0).forEach((function(t){Object(J.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var U={getThemeSuccessfully:!1,themeName:"primary"};function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(n,!0).forEach((function(t){Object(J.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Y={active:!0},I=Object(A.combineReducers)({index:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_APP":return R({},e,{active:!1});default:return e}},updateTheme:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_THEME":return _({},e,{getThemeSuccessfully:!0,themeName:t.themeName,themeColors:t.themeColors});default:return e}}}),V=Object(A.combineReducers)({app:I}),X=Object(A.createStore)(V,Object(H.composeWithDevTools)(Object(A.applyMiddleware)(L.a))),$={en:{translation:n(392)},zhTW:{translation:n(393)}};v.a.use(y.b).init({resources:$,lng:"zhTW",fallbackLng:"zhTW",interpolation:{escapeValue:!1}});v.a,n(459),n(661),n(662),n(670);c.a.render(r.a.createElement(m.a,{store:X},r.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[396,1,2]]]);
//# sourceMappingURL=main.8a2dda6d.chunk.js.map