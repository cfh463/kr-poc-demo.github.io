(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[5],{134:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=function(e){var t=e.children,n=e.className,a=e.alignItems,c=e.justifyContent,o=e.mobileFlex,l=e.flexDirection;return r.a.createElement("div",{className:"".concat(o?"d-flex":"d-md-flex"," ").concat(n," ").concat(l?"flex-"+l:""," ").concat(a?"align-items-"+a:""," ").concat(c?"justify-content-"+c:"")},t)};c.defaultProps={mobileFlex:!0,flexDirection:"row",className:""},t.a=c},192:function(e){e.exports=JSON.parse('{"home":"Home"}')},20:function(e,t,n){"use strict";n.d(t,"f",(function(){return a})),n.d(t,"a",(function(){return r})),n.d(t,"k",(function(){return c})),n.d(t,"l",(function(){return o})),n.d(t,"m",(function(){return l})),n.d(t,"n",(function(){return u})),n.d(t,"d",(function(){return i})),n.d(t,"c",(function(){return s})),n.d(t,"e",(function(){return m})),n.d(t,"b",(function(){return p})),n.d(t,"i",(function(){return d})),n.d(t,"j",(function(){return b})),n.d(t,"g",(function(){return f})),n.d(t,"h",(function(){return v}));var a="SIGNIN",r="AUTHENTICATED",c="SIGNOUT",o="SIGNOUT_SUCCESS",l="SIGNUP",u="SIGNUP_SUCCESS",i="SHOW_AUTH_MESSAGE",s="HIDE_AUTH_MESSAGE",m="SHOW_LOADING",p="auth_token",d="SIGNIN_WITH_GOOGLE",b="SIGNIN_WITH_GOOGLE_AUTHENTICATED",f="SIGNIN_WITH_FACEBOOK",v="SIGNIN_WITH_FACEBOOK_AUTHENTICATED"},210:function(e,t,n){e.exports=n(294)},215:function(e,t,n){},294:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(12),o=n.n(c),l=(n(215),n(37)),u=n(68),i=n(18),s=n(20),m={loading:!1,message:"",showMessage:!1,redirect:"",token:localStorage.getItem(s.b)},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s.a:return Object(i.a)(Object(i.a)({},e),{},{loading:!1,redirect:"/",token:t.token});case s.d:return Object(i.a)(Object(i.a)({},e),{},{message:t.message,showMessage:!0,loading:!1});case s.c:return Object(i.a)(Object(i.a)({},e),{},{message:"",showMessage:!1});case s.l:return Object(i.a)(Object(i.a)({},e),{},{token:null,redirect:"/",loading:!1});case s.n:return Object(i.a)(Object(i.a)({},e),{},{loading:!1,token:t.token});case s.e:return Object(i.a)(Object(i.a)({},e),{},{loading:!0});case s.j:case s.h:return Object(i.a)(Object(i.a)({},e),{},{loading:!1,token:t.token});default:return e}},d=n(94),b=Object(i.a)({},d.c),f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_COLLAPSED_NAV":return Object(i.a)(Object(i.a)({},e),{},{navCollapsed:t.navCollapsed});case"SIDE_NAV_STYLE_CHANGE":return Object(i.a)(Object(i.a)({},e),{},{sideNavTheme:t.sideNavTheme});case"CHANGE_LOCALE":return Object(i.a)(Object(i.a)({},e),{},{locale:t.locale});case"NAV_TYPE_CHANGE":return Object(i.a)(Object(i.a)({},e),{},{navType:t.navType});case"TOP_NAV_COLOR_CHANGE":return Object(i.a)(Object(i.a)({},e),{},{topNavColor:t.topNavColor});case"HEADER_NAV_COLOR_CHANGE":return Object(i.a)(Object(i.a)({},e),{},{headerNavColor:t.headerNavColor});case"TOGGLE_MOBILE_NAV":return Object(i.a)(Object(i.a)({},e),{},{mobileNav:t.mobileNav});default:return e}},v=Object(u.c)({theme:f,auth:p}),h=n(195),E=n(13),g=n.n(E),O=n(22),y=n(49),j=n(85),N=n(72),k={};k.signInEmailRequest=function(){var e=Object(j.a)(g.a.mark((function e(t,n){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.signInWithEmailAndPassword(t,n).then((function(e){return e})).catch((function(e){return e}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),k.signInEmailRequest=function(){var e=Object(j.a)(g.a.mark((function e(t,n){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.signInWithEmailAndPassword(t,n).then((function(e){return e})).catch((function(e){return e}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),k.signOutRequest=Object(j.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.signOut().then((function(e){return e})).catch((function(e){return e}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),k.signInGoogleRequest=Object(j.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.signInWithPopup(N.d).then((function(e){return e})).catch((function(e){return e}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),k.signInFacebookRequest=Object(j.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.signInWithPopup(N.c).then((function(e){return e})).catch((function(e){return e}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),k.signUpEmailRequest=function(){var e=Object(j.a)(g.a.mark((function e(t,n){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.createUserWithEmailAndPassword(t,n).then((function(e){return e})).catch((function(e){return e}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();var C=k,w=g.a.mark(A),x=g.a.mark(P),I=g.a.mark(G),S=g.a.mark(z),T=g.a.mark(D),_=g.a.mark(L);function A(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.e)(s.f,g.a.mark((function e(t){var n,a,r,c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.payload,a=n.email,r=n.password,e.prev=2,e.next=5,Object(O.b)(C.signInEmailRequest,a,r);case 5:if(!(c=e.sent).message){e.next=11;break}return e.next=9,Object(O.d)(Object(y.c)(c.message));case 9:e.next=14;break;case 11:return localStorage.setItem(s.b,c.user.uid),e.next=14,Object(O.d)(Object(y.a)(c.user.uid));case 14:e.next=20;break;case 16:return e.prev=16,e.t0=e.catch(2),e.next=20,Object(O.d)(Object(y.c)(e.t0));case 20:case"end":return e.stop()}}),e,null,[[2,16]])})));case 2:case"end":return e.stop()}}),w)}function P(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.e)(s.k,g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(O.b)(C.signOutRequest);case 3:if(void 0!==(t=e.sent)){e.next=10;break}return localStorage.removeItem(s.b),e.next=8,Object(O.d)(Object(y.j)(t));case 8:e.next=12;break;case 10:return e.next=12,Object(O.d)(Object(y.c)(t.message));case 12:e.next=18;break;case 14:return e.prev=14,e.t0=e.catch(0),e.next=18,Object(O.d)(Object(y.c)(e.t0));case 18:case"end":return e.stop()}}),e,null,[[0,14]])})));case 2:case"end":return e.stop()}}),x)}function G(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.e)(s.m,g.a.mark((function e(t){var n,a,r,c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.payload,a=n.email,r=n.password,e.prev=2,e.next=5,Object(O.b)(C.signUpEmailRequest,a,r);case 5:if(!(c=e.sent).message){e.next=11;break}return e.next=9,Object(O.d)(Object(y.c)(c.message));case 9:e.next=14;break;case 11:return localStorage.setItem(s.b,c.user.uid),e.next=14,Object(O.d)(Object(y.k)(c.user.uid));case 14:e.next=20;break;case 16:return e.prev=16,e.t0=e.catch(2),e.next=20,Object(O.d)(Object(y.c)(e.t0));case 20:case"end":return e.stop()}}),e,null,[[2,16]])})));case 2:case"end":return e.stop()}}),I)}function z(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.e)(s.i,g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(O.b)(C.signInGoogleRequest);case 3:if(!(t=e.sent).message){e.next=9;break}return e.next=7,Object(O.d)(Object(y.c)(t.message));case 7:e.next=12;break;case 9:return localStorage.setItem(s.b,t.user.uid),e.next=12,Object(O.d)(Object(y.i)(t.user.uid));case 12:e.next=18;break;case 14:return e.prev=14,e.t0=e.catch(0),e.next=18,Object(O.d)(Object(y.c)(e.t0));case 18:case"end":return e.stop()}}),e,null,[[0,14]])})));case 2:case"end":return e.stop()}}),S)}function D(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.e)(s.g,g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(O.b)(C.signInFacebookRequest);case 3:if(!(t=e.sent).message){e.next=9;break}return e.next=7,Object(O.d)(Object(y.c)(t.message));case 7:e.next=12;break;case 9:return localStorage.setItem(s.b,t.user.uid),e.next=12,Object(O.d)(Object(y.g)(t.user.uid));case 12:e.next=18;break;case 14:return e.prev=14,e.t0=e.catch(0),e.next=18,Object(O.d)(Object(y.c)(e.t0));case 18:case"end":return e.stop()}}),e,null,[[0,14]])})));case 2:case"end":return e.stop()}}),T)}function L(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.a)([Object(O.c)(A),Object(O.c)(P),Object(O.c)(G),Object(O.c)(z),Object(O.c)(D)]);case 2:case"end":return e.stop()}}),_)}var R=g.a.mark(U);function U(e){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.a)([L()]);case 2:case"end":return e.stop()}}),R)}var H=Object(h.a)(),M=[H];var B=function(e){var t=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.d,n=Object(u.e)(v,e,t(u.a.apply(void 0,M)));return H.run(U),n}(),V=n(43),W=n(40),q=n(301),F=n(297),K=n(32),Y=n(123),J=n(137),X=n(300),Z=n(124),$=Object(Z.c)((function(e){return r.a.createElement(X.a,e)}),{withRef:!1}),Q=n(69),ee=n(306),te=n(307),ne=n(308),ae=n(309),re=n(310),ce=n(311),oe=n(312),le=[{key:"home",path:"/app/home",title:"MDNA Cloud",icon:ee.a,breadcrumb:!1,submenu:[{key:"dashboard",path:"/app/home",title:"Dashboard",icon:te.a,breadcrumb:!1,submenu:[]},{key:"enrollment",path:"/app/enrollment",title:"Enrollment Profiles",icon:ne.a,breadcrumb:!1,submenu:[]},{key:"devices",path:"/app/devices",title:"Devices",icon:ae.a,breadcrumb:!1,submenu:[]},{key:"configprofiles",path:"/app/configprofiles",title:"Configuration profiles",icon:re.a,breadcrumb:!1,submenu:[{key:"apps-project-list",path:"/app/configprofiles",title:"OEMConfig",icon:"",breadcrumb:!1,submenu:[]},{key:"apps-eb-profile",path:"/app/ebprofiles",title:"Enterprise Browser",icon:"",breadcrumb:!1,submenu:[]}]},{key:"deployment",path:"/app/deployments",title:"Deployments",icon:ce.a,breadcrumb:!1,submenu:[]},{key:"updates",path:"/app/updates",title:"Lifeguard updates",icon:oe.a,breadcrumb:!1,submenu:[]}]}],ue=[].concat(le),ie=n(73),se=n(74),me=function(){function e(){Object(ie.a)(this,e)}return Object(se.a)(e,null,[{key:"getNameInitial",value:function(e){var t=e.match(/\b\w/g)||[];return((t.shift()||"")+(t.pop()||"")).toUpperCase()}},{key:"getRouteInfo",value:function(e,t){if(e.path===t)return e;var n;for(var a in e)if(e.hasOwnProperty(a)&&"object"===typeof e[a]&&(n=this.getRouteInfo(e[a],t)))return n;return n}},{key:"getColorContrast",value:function(e){function t(e){return"#"===e.charAt(0)?e.substring(1,7):e}return(299*parseInt(t(e).substring(0,2),16)+587*function(e){return parseInt(t(e).substring(2,4),16)}(e)+114*function(e){return parseInt(t(e).substring(4,6),16)}(e))/1e3>130?"dark":"light"}},{key:"shadeColor",value:function(e,t){var n=parseInt(e.substring(1,3),16),a=parseInt(e.substring(3,5),16),r=parseInt(e.substring(5,7),16);n=parseInt(n*(100+t)/100),a=(a=parseInt(a*(100+t)/100))<255?a:255,r=(r=parseInt(r*(100+t)/100))<255?r:255;var c=1===(n=n<255?n:255).toString(16).length?"0".concat(n.toString(16)):n.toString(16),o=1===a.toString(16).length?"0".concat(a.toString(16)):a.toString(16),l=1===r.toString(16).length?"0".concat(r.toString(16)):r.toString(16);return"#".concat(c).concat(o).concat(l)}},{key:"getSignNum",value:function(e,t,n){return e>0?t:e<0?n:null}},{key:"antdTableSorter",value:function(e,t,n){return"number"===typeof e[n]&&"number"===typeof t[n]?e[n]-t[n]:"string"===typeof e[n]&&"string"===typeof t[n]?(e=e[n].toLowerCase())>(t=t[n].toLowerCase())?-1:t>e?1:0:void 0}},{key:"filterArray",value:function(e,t,n){var a=e;return e&&(a=e.filter((function(e){return e[t]===n}))),a}},{key:"deleteArrayRow",value:function(e,t,n){var a=e;return e&&(a=e.filter((function(e){return e[t]!==n}))),a}},{key:"wildCardSearch",value:function(e,t){return e=e.filter((function(e){return function(e){for(var n in e)if(null!=e[n]&&-1!==e[n].toString().toUpperCase().indexOf(t.toString().toUpperCase()))return!0}(e)}))}},{key:"getBreakPoint",value:function(e){var t=[];for(var n in e){if(e.hasOwnProperty(n))e[n]&&t.push(n)}return t}}]),e}();function pe(e){return{type:"TOGGLE_MOBILE_NAV",mobileNav:e}}var de=J.a.SubMenu,be=F.a.useBreakpoint,fe=function(e,t){return e?r.a.createElement($,{id:t}):t.toString()},ve=function(e){var t=[],n="";if(e)for(var a=e.split("-"),r=0;r<a.length;r++){var c=a[r];n=0===r?c:"".concat(n,"-").concat(c),t.push(n)}return t},he=function(e){var t=e.sideNavTheme,n=e.routeInfo,a=e.hideGroupTitle,c=e.localization,o=e.onMobileNavToggle,l=!me.getBreakPoint(be()).includes("lg"),u=function(){l&&o(!1)};return r.a.createElement(J.a,{theme:t===K.e?"light":"dark",mode:"inline",style:{height:"100%",borderRight:0},defaultSelectedKeys:[null===n||void 0===n?void 0:n.key],defaultOpenKeys:ve(null===n||void 0===n?void 0:n.key),className:a?"hide-group-title":""},ue.map((function(e){return e.submenu.length>0?r.a.createElement(J.a.ItemGroup,{key:e.key,title:fe(c,e.title)},e.submenu.map((function(e){return e.submenu.length>0?r.a.createElement(de,{icon:e.icon?r.a.createElement(Q.b,{type:null===e||void 0===e?void 0:e.icon}):null,key:e.key,title:fe(c,e.title)},e.submenu.map((function(e){return r.a.createElement(J.a.Item,{key:e.key},e.icon?r.a.createElement(Q.b,{type:null===e||void 0===e?void 0:e.icon}):null,r.a.createElement("span",null,fe(c,e.title)),r.a.createElement(V.b,{onClick:function(){return u()},to:e.path}))}))):r.a.createElement(J.a.Item,{key:e.key},e.icon?r.a.createElement(Q.b,{type:e.icon}):null,r.a.createElement("span",null,fe(c,e.title)),r.a.createElement(V.b,{onClick:function(){return u()},to:e.path}))}))):r.a.createElement(J.a.Item,{key:e.key},e.icon?r.a.createElement(Q.b,{type:null===e||void 0===e?void 0:e.icon}):null,r.a.createElement("span",null,fe(c,null===e||void 0===e?void 0:e.title)),e.path?r.a.createElement(V.b,{onClick:function(){return u()},to:e.path}):null)})))},Ee=function(e){var t=e.topNavColor,n=e.localization;return r.a.createElement(J.a,{mode:"horizontal",style:{backgroundColor:t}},ue.map((function(e){return e.submenu.length>0?r.a.createElement(de,{key:e.key,popupClassName:"top-nav-menu",title:r.a.createElement("span",null,e.icon?r.a.createElement(Q.b,{type:null===e||void 0===e?void 0:e.icon}):null,r.a.createElement("span",null,fe(n,e.title)))},e.submenu.map((function(e){return e.submenu.length>0?r.a.createElement(de,{key:e.key,icon:e.icon?r.a.createElement(Q.b,{type:null===e||void 0===e?void 0:e.icon}):null,title:fe(n,e.title)},e.submenu.map((function(e){return r.a.createElement(J.a.Item,{key:e.key},r.a.createElement("span",null,fe(n,e.title)),r.a.createElement(V.b,{to:e.path}))}))):r.a.createElement(J.a.Item,{key:e.key},e.icon?r.a.createElement(Q.b,{type:null===e||void 0===e?void 0:e.icon}):null,r.a.createElement("span",null,fe(n,e.title)),r.a.createElement(V.b,{to:e.path}))}))):r.a.createElement(J.a.Item,{key:e.key},e.icon?r.a.createElement(Q.b,{type:null===e||void 0===e?void 0:e.icon}):null,r.a.createElement("span",null,fe(n,null===e||void 0===e?void 0:e.title)),e.path?r.a.createElement(V.b,{to:e.path}):null)})))},ge=Object(l.b)((function(e){var t=e.theme;return{sideNavTheme:t.sideNavTheme,topNavColor:t.topNavColor}}),{onMobileNavToggle:pe})((function(e){return e.type===K.a?r.a.createElement(he,e):r.a.createElement(Ee,e)})),Oe=q.a.Sider,ye=Object(l.b)((function(e){var t=e.theme;return{navCollapsed:t.navCollapsed,sideNavTheme:t.sideNavTheme}}))((function(e){var t=e.navCollapsed,n=e.sideNavTheme,a=e.routeInfo,c=e.hideGroupTitle,o=e.localization,l={sideNavTheme:n,routeInfo:a,hideGroupTitle:c,localization:void 0===o||o};return r.a.createElement(Oe,{className:"side-nav ".concat(n===K.d?"side-nav-dark":""),width:K.f,collapsed:t},r.a.createElement(Y.Scrollbars,{autoHide:!0},r.a.createElement(ge,Object.assign({type:K.a},l))))})),je=Object(l.b)((function(e){return{topNavColor:e.theme.topNavColor}}))((function(e){var t=e.topNavColor,n=e.localization,a={topNavColor:t,localization:void 0===n||n};return r.a.createElement("div",{className:"top-nav ".concat(me.getColorContrast(t)),style:{backgroundColor:t}},r.a.createElement("div",{className:"top-nav-wrapper"},r.a.createElement(ge,Object.assign({type:K.b},a))))})),Ne=n(303),ke=F.a.useBreakpoint,Ce=function(e,t){var n=e.navCollapsed,a=e.navType===K.b;return t&&!e.mobileLogo?0:a?"auto":"".concat(n?K.c:K.f,"px")},we=function(e){var t=e.navCollapsed;return"light"===e.logoType?t?"/img/logo-sm-white.png":"/img/logo-white.png":t?"/img/logo-sm.png":"/img/logo.png"},xe=function(e,t){return e&&!t?"d-none":"logo"},Ie=Object(l.b)((function(e){var t=e.theme;return{navCollapsed:t.navCollapsed,navType:t.navType}}))((function(e){var t=!me.getBreakPoint(ke()).includes("lg");return r.a.createElement("div",{className:xe(t,e.mobileLogo),style:{width:"".concat(Ce(e,t))}},r.a.createElement("img",{src:we(e),alt:"".concat(d.b," logo")}))})),Se=n(134),Te=n(313),_e=Object(l.b)((function(e){var t=e.theme;return{navCollapsed:t.navCollapsed,sideNavTheme:t.sideNavTheme,mobileNav:t.mobileNav}}),{onMobileNavToggle:pe})((function(e){var t=e.sideNavTheme,n=e.mobileNav,a=e.onMobileNavToggle,c=e.routeInfo,o=e.hideGroupTitle,l=e.localization,u={sideNavTheme:t,routeInfo:c,hideGroupTitle:o,localization:void 0===l||l},i=function(){a(!1)};return r.a.createElement(Ne.a,{placement:"left",closable:!1,onClose:i,visible:n,bodyStyle:{padding:5}},r.a.createElement(Se.a,{flexDirection:"column",className:"h-100"},r.a.createElement(Se.a,{justifyContent:"between",alignItems:"center"},r.a.createElement(Ie,{mobileLogo:!0}),r.a.createElement("div",{className:"nav-close",onClick:function(){return i()}},r.a.createElement(Te.a,null))),r.a.createElement("div",{className:"mobile-nav-menu"},r.a.createElement(Y.Scrollbars,{autoHide:!0},r.a.createElement(ge,Object.assign({type:K.a},u))))))})),Ae=n(105),Pe=n(320),Ge=n(321),ze=n(87),De=n(86),Le=n(314),Re=function(e){Object(ze.a)(n,e);var t=Object(De.a)(n);function n(){var e;Object(ie.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={visible:!1},e.showDrawer=function(){e.setState({visible:!0})},e.onClose=function(){e.setState({visible:!1})},e}return Object(se.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(J.a,{mode:"horizontal"},r.a.createElement(J.a.Item,{onClick:this.showDrawer},r.a.createElement(Le.a,{className:"nav-icon mr-0"}))),r.a.createElement(Ne.a,{title:"Theme Config",placement:"right",width:350,onClose:this.onClose,visible:this.state.visible},"NavPanel Contents here!"))}}]),n}(a.Component),Ue=Object(l.b)((function(e){return{locale:e.theme.locale}}))(Re),He=n(319),Me=n(189),Be=n(315),Ve=n(316),We=n(317),qe=n(318),Fe=n(302),Ke=n(299);var Ye=function e(t,n){n=n||[];var a,r=Object(Me.a)(t);try{for(r.s();!(a=r.n()).done;){var c=a.value;0===c.submenu.length&&n.push(c),c.submenu.length>0&&e(c.submenu,n)}}catch(o){r.e(o)}finally{r.f()}return n}(ue),Je=function(e){switch(e){case"dashboards":return r.a.createElement(te.a,{className:"text-success"});case"apps":return r.a.createElement(Be.a,{className:"text-danger"});case"components":return r.a.createElement(Ve.a,{className:"text-primary"});case"extra":return r.a.createElement(We.a,{className:"text-warning"});default:return null}},Xe=function(e){var t=e.active,n=e.close,c=e.isMobile,o=e.mode,l=Object(a.useState)(""),u=Object(Ae.a)(l,2),i=u[0],s=u[1],m=Object(a.useState)([]),p=Object(Ae.a)(m,2),d=p[0],b=p[1],f=Object(a.useRef)(null);return t&&f.current.focus(),r.a.createElement(Fe.a,{ref:f,className:"nav-search-input ".concat(c?"is-mobile":""," ").concat("light"===o?"light":""),dropdownClassName:"nav-search-dropdown",options:d,onSelect:function(){s(""),b([]),n&&n()},onSearch:function(e){s(e),b(e?Ye.map((function(e){var t=e.key.split("-")[0];return{value:e.path,label:r.a.createElement(V.b,{to:e.path},r.a.createElement("div",{className:"search-list-item"},r.a.createElement("div",{className:"icon"},Je(t)),r.a.createElement("div",null,r.a.createElement("div",{className:"font-weight-semibold"},r.a.createElement($,{id:e.title})),r.a.createElement("div",{className:"font-size-sm text-muted"},t," "))))}})):[])},value:i,filterOption:function(e,t){return-1!==t.value.toUpperCase().indexOf(e.toUpperCase())}},r.a.createElement(Ke.a,{placeholder:"Search...",prefix:r.a.createElement(qe.a,{className:"mr-0"})}))},Ze=Object(l.b)((function(e){return{headerNavColor:e.theme.headerNavColor}}),{})((function(e){var t=e.active,n=e.close,a=e.headerNavColor,c=me.getColorContrast(a);return r.a.createElement("div",{className:"nav-search ".concat(t?"nav-search-active":""," ").concat(c),style:{backgroundColor:a}},r.a.createElement("div",{className:"d-flex align-items-center w-100"},r.a.createElement(Xe,{close:n,active:t})),r.a.createElement("div",{className:"nav-close",onClick:n},r.a.createElement(He.a,null)))})),$e=q.a.Header,Qe=Object(l.b)((function(e){var t=e.theme;return{navCollapsed:t.navCollapsed,navType:t.navType,headerNavColor:t.headerNavColor,mobileNav:t.mobileNav}}),{toggleCollapsedNav:function(e){return{type:"TOGGLE_COLLAPSED_NAV",navCollapsed:e}},onMobileNavToggle:pe})((function(e){var t=e.navCollapsed,n=e.mobileNav,c=e.navType,o=e.headerNavColor,l=e.toggleCollapsedNav,u=e.onMobileNavToggle,i=e.isMobile,s=Object(a.useState)(!1),m=Object(Ae.a)(s,2),p=m[0],d=m[1],b=c===K.b,f=me.getColorContrast(o);return r.a.createElement($e,{className:"app-header ".concat(f),style:{backgroundColor:o}},r.a.createElement("div",{className:"app-header-wrapper ".concat(b?"layout-top-nav":"")},r.a.createElement(Ie,{logoType:f}),r.a.createElement("div",{className:"nav",style:{width:"calc(100% - ".concat(b||i?"0px":"".concat(t?K.c:K.f,"px"),")")}},r.a.createElement("div",{className:"nav-left"},r.a.createElement(J.a,{mode:"horizontal"},b&&!i?null:r.a.createElement(J.a.Item,{key:"0",onClick:function(){i?u(!n):l(!t)}},t||i?r.a.createElement(Pe.a,{className:"nav-icon"}):r.a.createElement(Ge.a,{className:"nav-icon"})))),r.a.createElement("div",{className:"nav-right"},r.a.createElement(Ue,null)),r.a.createElement(Ze,{active:p,close:function(){d(!1)}}))))})),et=n(305),tt={"/app":r.a.createElement($,{id:"home"})};ue.forEach((function(e,t){var n=function(e){return tt[e.path]=r.a.createElement($,{id:e.title})};n(e),e.submenu&&e.submenu.forEach((function(e){n(e),e.submenu&&e.submenu.forEach((function(e){n(e)}))}))}));var nt=Object(W.h)((function(e){var t=e.location.pathname.split("/").filter((function(e){return e})),n=t.map((function(e,n){var a="/".concat(t.slice(0,n+1).join("/"));return r.a.createElement(et.a.Item,{key:a},r.a.createElement(V.b,{to:a},tt[a]))}));return r.a.createElement(et.a,null,n)})),at=function(e){Object(ze.a)(n,e);var t=Object(De.a)(n);function n(){return Object(ie.a)(this,n),t.apply(this,arguments)}return Object(se.a)(n,[{key:"render",value:function(){return r.a.createElement(nt,null)}}]),n}(a.Component),rt=function(e){var t=e.title;return e.display?r.a.createElement("div",{className:"app-page-header"},r.a.createElement("h3",{className:"mb-0 mr-3 font-weight-semibold"},r.a.createElement($,{id:t||"home"})),r.a.createElement(at,null)):null};function ct(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("span",null,"Copyright  \xa9  ","".concat((new Date).getFullYear())," ",r.a.createElement("span",{className:"font-weight-semibold"},"".concat(d.b))," All rights reserved."),r.a.createElement("div",null,r.a.createElement("a",{className:"text-gray",href:"/#",onClick:function(e){return e.preventDefault()}},"Term & Conditions"),r.a.createElement("span",{className:"mx-2 text-muted"}," | "),r.a.createElement("a",{className:"text-gray",href:"/#",onClick:function(e){return e.preventDefault()}},"Privacy & Policy")))}var ot=n(298),lt=n(322),ut=r.a.createElement(lt.a,{style:{fontSize:35},spin:!0}),it=function(e){var t=e.align,n=e.cover;return r.a.createElement("div",{className:"loading text-".concat(t," cover-").concat(n)},r.a.createElement(ot.a,{indicator:ut}))};it.defaultProps={align:"center",cover:"inline"};var st=it,mt=function(e){var t=e.match;return r.a.createElement(a.Suspense,{fallback:r.a.createElement(st,{cover:"content"})},r.a.createElement(W.d,null,r.a.createElement(W.b,{path:"".concat(t.url,"/login"),component:Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(2),n.e(4),n.e(22)]).then(n.bind(null,562))}))}),r.a.createElement(W.b,{path:"".concat(t.url,"/home"),component:Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(12)]).then(n.bind(null,557))}))}),r.a.createElement(W.b,{path:"".concat(t.url,"/enrollment"),component:Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(13)]).then(n.bind(null,556))}))}),r.a.createElement(W.b,{path:"".concat(t.url,"/configprofiles"),component:Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(8)]).then(n.bind(null,553))}))}),r.a.createElement(W.b,{path:"".concat(t.url,"/ebprofiles"),component:Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(9)]).then(n.bind(null,555))}))}),r.a.createElement(W.b,{path:"".concat(t.url,"/deployments"),component:Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(15)]).then(n.bind(null,564))}))}),r.a.createElement(W.b,{path:"".concat(t.url,"/devices"),component:Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(3),n.e(23)]).then(n.bind(null,558))}))}),r.a.createElement(W.b,{path:"".concat(t.url,"/updates"),component:Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(3),n.e(21)]).then(n.bind(null,543))}))}),r.a.createElement(W.b,{path:"".concat(t.url,"/deploymentstatus"),component:Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(3),n.e(14),n.e(20)]).then(n.bind(null,560))}))}),r.a.createElement(W.a,{from:"".concat(t.url),to:"".concat(t.url,"/home")})))},pt=q.a.Content,dt=F.a.useBreakpoint,bt=Object(W.h)(Object(l.b)((function(e){var t=e.theme;return{navCollapsed:t.navCollapsed,navType:t.navType,locale:t.locale}}))((function(e){var t=e.navCollapsed,n=e.navType,a=e.location,c=me.getRouteInfo(ue,a.pathname),o=!me.getBreakPoint(dt()).includes("lg"),l=n===K.a,u=n===K.b;return r.a.createElement(q.a,null,r.a.createElement(Qe,{isMobile:o}),u&&!o?r.a.createElement(je,{routeInfo:c}):null,r.a.createElement(q.a,{className:"app-container"},l&&!o?r.a.createElement(ye,{routeInfo:c}):null,r.a.createElement(q.a,{className:"app-layout",style:{paddingLeft:u||o?0:t?K.c:K.f}},r.a.createElement("div",{className:"app-content ".concat(u?"layout-top-nav":"")},r.a.createElement(rt,{display:null===c||void 0===c?void 0:c.breadcrumb,title:null===c||void 0===c?void 0:c.title}),r.a.createElement(pt,null,r.a.createElement(W.d,null,r.a.createElement(W.b,{path:"",component:mt})))),r.a.createElement(ct,null))),o&&r.a.createElement(_e,null))}))),ft=function(e){var t=e.match;return r.a.createElement(a.Suspense,{fallback:r.a.createElement(st,{cover:"page"})},r.a.createElement(W.d,null,r.a.createElement(W.b,{path:"".concat(t.url,"/login"),component:Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(16)]).then(n.bind(null,544))}))}),r.a.createElement(W.b,{path:"".concat(t.url,"/login-1"),component:Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(18)]).then(n.bind(null,435))}))}),r.a.createElement(W.b,{path:"".concat(t.url,"/login-2"),component:Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(2),n.e(4),n.e(19)]).then(n.bind(null,545))}))}),r.a.createElement(W.b,{path:"".concat(t.url,"/register-1"),component:Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(10)]).then(n.bind(null,546))}))}),r.a.createElement(W.b,{path:"".concat(t.url,"/register-2"),component:Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(2),n.e(4),n.e(11),n.e(25)]).then(n.bind(null,547))}))}),r.a.createElement(W.b,{path:"".concat(t.url,"/forgot-password"),component:Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(24)]).then(n.bind(null,548))}))}),r.a.createElement(W.b,{path:"".concat(t.url,"/error-1"),component:Object(a.lazy)((function(){return n.e(17).then(n.bind(null,549))}))}),r.a.createElement(W.b,{path:"".concat(t.url,"/error-2"),component:Object(a.lazy)((function(){return n.e(26).then(n.bind(null,550))}))}),r.a.createElement(W.a,{from:"".concat(t.url),to:"".concat(t.url,"/login")})))},vt=function(){return r.a.createElement("div",{className:"auth-container"},r.a.createElement(W.d,null,r.a.createElement(W.b,{path:"",component:ft})))},ht=n(178),Et=n(192),gt={en:{antd:ht.a,locale:"en-US",messages:Object(i.a)({},Et)}},Ot=n(304),yt=n(34),jt=Object(W.h)(Object(l.b)((function(e){var t=e.theme,n=e.auth;return{locale:t.locale,token:n.token}}))((function(e){var t=e.locale,n=gt[t];return r.a.createElement(Ot.a,{locale:n.locale,messages:n.messages},r.a.createElement(yt.a,{locale:n.antd},r.a.createElement(W.d,null,r.a.createElement(W.b,{exact:!0,path:"/"},r.a.createElement(W.a,{to:"/app"})),r.a.createElement(W.b,{path:"/auth"},r.a.createElement(vt,null)),r.a.createElement(W.b,{path:"/app"},r.a.createElement(bt,null)))))})));var Nt=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(l.a,{store:B},r.a.createElement(V.a,null,r.a.createElement(W.d,null,r.a.createElement(W.b,{path:"/",component:jt})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(Nt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},32:function(e,t,n){"use strict";n.d(t,"f",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"e",(function(){return c})),n.d(t,"d",(function(){return o})),n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return u}));var a=250,r=80,c="SIDE_NAV_LIGHT",o="SIDE_NAV_DARK",l="SIDE",u="TOP"},49:function(e,t,n){"use strict";n.d(t,"e",(function(){return r})),n.d(t,"a",(function(){return c})),n.d(t,"j",(function(){return o})),n.d(t,"k",(function(){return l})),n.d(t,"h",(function(){return u})),n.d(t,"i",(function(){return i})),n.d(t,"f",(function(){return s})),n.d(t,"g",(function(){return m})),n.d(t,"c",(function(){return p})),n.d(t,"b",(function(){return d})),n.d(t,"d",(function(){return b}));var a=n(20),r=function(e){return{type:a.f,payload:e}},c=function(e){return{type:a.a,token:e}},o=function(){return{type:a.l}},l=function(e){return{type:a.n,token:e}},u=function(){return{type:a.i}},i=function(e){return{type:a.j,token:e}},s=function(){return{type:a.g}},m=function(e){return{type:a.h,token:e}},p=function(e){return{type:a.d,message:e}},d=function(){return{type:a.c}},b=function(){return{type:a.e}}},69:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(73),r=n(74),c=n(87),o=n(86),l=n(0),u=n.n(l),i=function(e){Object(c.a)(n,e);var t=Object(o.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var e=this.props,t=e.type,n=e.className;return u.a.createElement(u.a.Fragment,null,u.a.createElement(t,{className:n}))}}]),n}(l.Component);t.b=i},72:function(e,t,n){"use strict";var a=n(79),r=n.n(a);n(220),n(222);n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return o})),n.d(t,"d",(function(){return l})),n.d(t,"c",(function(){return u})),r.a.initializeApp({apiKey:"AIzaSyCRztlVVFeXNCegc1YK7EEhpjqnlB_zcl0",authDomain:"emc-kr-dev-d.firebaseapp.com",databaseURL:"https://emc-kr-dev-d.firebaseio.com",projectId:"emc-kr-dev-d",storageBucket:"emc-kr-dev-d.appspot.com",messagingSenderId:"359668273288",appId:"1:359668273288:web:1adaefc2d8b64c8ad68f3d",measurementId:"G-YYKCJJRF05"});var c=r.a.firestore(),o=r.a.auth(),l=(o.currentUser,new r.a.auth.GoogleAuthProvider),u=new r.a.auth.FacebookAuthProvider;new r.a.auth.TwitterAuthProvider,new r.a.auth.GithubAuthProvider},94:function(e,t,n){"use strict";var a=n(32),r={API_ENDPOINT_URL:"https://api.prod.com"};n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return l}));var c="Zebra MDNA Cloud",o=r.API_ENDPOINT_URL,l={navCollapsed:!1,sideNavTheme:a.d,locale:"en",navType:a.a,topNavColor:"#3e82f7",headerNavColor:"#ffffff",mobileNav:!1}}},[[210,6,7]]]);
//# sourceMappingURL=main.f8bd5918.chunk.js.map