webpackJsonp([7],{130:function(t,e,n){"use strict";var i=n(70);e.a=new i.a},190:function(t,e,n){"use strict";var i=n(184),a=n.n(i);e.a={dateFormat:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Date.now(),e=arguments[1];t=new Date(t);var n={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds(),"q+":Math.floor((t.getMonth()+3)/3),S:t.getMilliseconds()};return/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length))),a()(n).forEach(function(t){new RegExp("("+t+")").test(e)&&(e=e.replace(RegExp.$1,1===RegExp.$1.length?n[t]:("00"+n[t]).substr((""+n[t]).length)))}),e}}},193:function(t,e,n){n(131),t.exports=n(395)},395:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(62),a=n.n(i),s=n(131),o=(n.n(s),n(70)),r=n(424),c=n(505),l=n.n(c),u=o.a.prototype.$loading=new o.a(l.a).$mount(),h=Object(r.a)(),d=h.app,p=h.router,f=h.store;document.body.appendChild(u.$el);var v=!0;"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual"),o.a.mixin({beforeRouteUpdate:function(t,e,n){var i=this.$options.asyncData;i?(u.start(),i.call(this,{store:this.$store,route:t}).then(function(){u.finish(),n()}).catch(n)):n()},beforeRouteEnter:function(t,e,n){n(function(e){if(v)return void(v=!1);var n=e.$el,i=e.$store.state.appShell.historyPageScrollTop[t.path]||0;n.classList.add("enable-scroll"),n.scrollTop=i,e.$store.dispatch("appShell/"+(t.meta.swipeBack?"enable":"disable")+"SwipeBack")})},beforeRouteLeave:function(t,e,n){var i=this.$el,a=window.innerHeight,s=window.pageYOffset||0;this.$root.$refs.appView.$el.style.height=a-52+"px",i.classList.add("enable-scroll"),i.scrollTop=s,this.$store.dispatch("appShell/saveScrollTop",{path:e.path,scrollTop:s}),n()}}),p.beforeResolve(function(t,e,n){var i=p.getMatchedComponents(t),s=p.getMatchedComponents(e),o=!1,r=i.filter(function(t,e){return o||(o=s[e]!==t)});if(!r.length)return n();u.start(),a.a.all(r.map(function(e){if(e.asyncData&&(!e.asyncDataFetched||t.meta.notKeepAlive))return e.asyncData({store:f,route:t}).then(function(){e.asyncDataFetched=!0})})).then(function(){u.finish(),n()}).catch(n)}),p.onReady(function(){return d.$mount("#app")})},424:function(t,e,n){"use strict";function i(){var t=Object(h.a)(),e=new c.a(s()({router:t,store:d.a,filters:g.a},f.a));return Object(w.sync)(d.a,t),{app:e,router:t,store:d.a}}e.a=i;var a=n(50),s=n.n(a),o=n(184),r=n.n(o),c=n(70),l=n(433),u=n.n(l),h=n(434),d=n(458),p=n(474),f=n.n(p),v=n(500),m=n.n(v),g=n(190),w=n(504);n.n(w);c.a.use(u.a),c.a.component("icon",m.a),c.a.config.productionTip=!1,r()(g.a).forEach(function(t){c.a.filter(t,g.a[t])}),m.a.register({"svg-sentiment-very-satisfied":{width:48,height:48,d:"M23.99 4C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16zm2-20.12L28.12 22l2.12-2.12L32.36 22l2.13-2.12-4.25-4.24zm-8.24 0L19.88 22 22 19.88l-4.24-4.24-4.25 4.24L15.64 22zM24 35c4.66 0 8.62-2.92 10.22-7H13.78c1.6 4.08 5.56 7 10.22 7z"}})},434:function(t,e,n){"use strict";function i(){var t=new o.a({mode:"hash",base:n.p,routes:[{path:"/",name:"home",component:c},{path:"/detail/:nid",name:"detail",component:l,meta:{swipeBack:!0}},{path:"/user",name:"user",component:h},{path:"/search",name:"search",component:d,meta:{swipeBack:!0}},{path:"/favor",name:"favor",component:p,meta:{swipeBack:!0}},{path:"*",name:"notFound",component:u}]});return t.beforeEach(function(e,n,i){if(t.app.$store&&t.app.$store.state.appShell.needPageTransition){var s=a(e,n)?"slide-left":"slide-right";t.app.$store.commit("appShell/"+r.p,{pageTransitionName:s})}i()}),t}function a(t,e){if(t.name&&-1!==f.indexOf(t.name))return m.length=0,!1;if(e.name&&-1!==f.indexOf(e.name))return m.push(t.fullPath),!0;if(t.name&&-1!==v.indexOf(t.name))return m.push(t.fullPath),!0;var n=m.indexOf(t.fullPath);return-1!==n?(m.length=n+1,!1):(m.push(t.fullPath),!0)}e.a=i;var s=n(70),o=n(435),r=n(49),c=function(){return n.e(1).then(n.bind(null,511))},l=function(){return n.e(0).then(n.bind(null,512))},u=function(){return n.e(5).then(n.bind(null,513))},h=function(){return n.e(4).then(n.bind(null,514))},d=function(){return n.e(2).then(n.bind(null,515))},p=function(){return n.e(3).then(n.bind(null,516))};s.a.use(o.a);var f=["home"],v=[],m=[]},458:function(t,e,n){"use strict";var i=n(70),a=n(51),s=n(459),o=n(463),r=n(469),c=n(470),l=n(472),u=n(473);i.a.use(a.a),e.a=new a.a.Store({modules:{appShell:s.a,news:o.a,search:r.a,favor:c.a,detail:l.a,category:u.a}})},459:function(t,e,n){"use strict";var i,a,s,o=n(62),r=n.n(o),c=n(90),l=n.n(c),u=n(59),h=n.n(u),d=n(49),p={needPageTransition:!0,isPageSwitching:!1,pageTransitionName:"",overflowScrollingTouch:!1,enableSwipeBack:!1,historyPageScrollTop:{}},f={enablePageTransition:function(t){(0,t.commit)(d.h,!0)},disablePageTransition:function(t){(0,t.commit)(d.g,!1)},setPageSwitching:function(t,e){(0,t.commit)(d.o,e)},saveScrollTop:function(t,e){var n=t.commit,i=e.path,a=e.scrollTop;n(d.j,{path:i,scrollTop:a})},disableOverflowScrollingTouch:function(t){(0,t.commit)(d.u,!1)},enableOverflowScrollingTouch:function(t){(0,t.commit)(d.u,!0)},enableSwipeBack:function(t){(0,t.commit)(d.w,!0)},disableSwipeBack:function(t){(0,t.commit)(d.w,!1)}},v=(i={},h()(i,d.o,function(t,e){t.isPageSwitching=e}),h()(i,d.p,function(t,e){var n=e.pageTransitionName;t.pageTransitionName=n}),h()(i,d.j,function(t,e){var n=e.path,i=e.scrollTop;t.historyPageScrollTop[n]=i}),h()(i,d.u,function(t,e){t.overflowScrollingTouch=e}),h()(i,d.w,function(t,e){t.enableSwipeBack=e}),i);e.a={namespaced:!0,actions:f,mutations:v,state:p,modules:{appHeader:{namespaced:!0,state:{show:!0,title:"Lavas",logoIcon:"",showMenu:!1,showFavor:!1,showBack:!1,showLogo:!0,actions:[]},actions:{setAppHeader:function(t,e){(0,t.commit)(d.l,e)}},mutations:h()({},d.l,function(t,e){t.appHeader=l()(t,e)})},appSidebar:{namespaced:!0,state:{show:!1,slideFrom:"left",title:{imageLeft:"",altLeft:"",svgLeft:"",iconLeft:"home",text:"个人中心",imageRight:"",altRight:"",svgRight:"",iconRight:""},width:.75,showWidthThreshold:.25,enableSwipeOut:!1,user:null,blocks:[{list:[{text:"收藏",icon:"star",route:"/favor"}]},{list:[{text:"消息通知",icon:"message"},{text:"用户反馈",icon:"feedback"},{text:"系统设置",icon:"settings"}]}]},actions:{showSidebar:function(t){(0,t.commit)(d.q,!0)},hideSidebar:function(t){(0,t.commit)(d.q,!1)},enableSwipeOut:function(t){(0,t.commit)(d.r,!0)},disableSwipeOut:function(t){(0,t.commit)(d.r,!1)},accountLogin:function(t,e){var n=t.commit;return new r.a(function(t,i){setTimeout(function(){n(d.s,{name:e.name,location:"中国北京",email:"example@baidu.com"}),n(d.d,{name:"logout",list:[{text:"退出账户",icon:"exit_to_app",action:"logout"}]}),t()},1e3)})},accountLogout:function(t){var e=t.commit;return new r.a(function(t,n){setTimeout(function(){e(d.s,null),e(d.i,"logout"),t()},1e3)})}},mutations:(a={},h()(a,d.q,function(t,e){t.show=e}),h()(a,d.r,function(t,e){t.enableSwipeOut=e}),h()(a,d.s,function(t,e){t.user=e}),h()(a,d.d,function(t,e){t.blocks.push(e)}),h()(a,d.i,function(t,e){for(var n=0;n<t.blocks.length;n++)t.blocks[n].name===e&&t.blocks.splice(n,1)}),a)},appBottomNavigator:{namespaced:!0,state:{show:!0,navs:[{name:"home",icon:"home",text:"主页",active:!0,route:{name:"home",path:"/"}},{name:"user",icon:"person",text:"个人中心",route:"/user"}]},actions:{hideBottomNav:function(t){(0,t.commit)(d.k,{show:!1})},showBottomNav:function(t){(0,t.commit)(d.k,{show:!0})},activateBottomNav:function(t,e){(0,t.commit)(d.a,e)}},mutations:(s={},h()(s,d.a,function(t,e){t.navs=t.navs.map(function(t){return t.active=t.name===e,t})}),h()(s,d.k,function(t,e){t=l()(t,e)}),s)}}}},463:function(t,e,n){"use strict";function i(t){return t.show=m.a.dateFormat(+t.ts,"yyyy-MM-dd hh:mm:ss"),t}var a=n(59),s=n.n(a),o=n(90),r=n.n(o),c=n(464),l=n.n(c),u=n(60),h=n.n(u),d=n(61),p=n.n(d),f=n(91),v=n(49),m=n(190);e.a={state:{data:{}},actions:{getNewsList:function(t,e){var n=this,i=t.commit;t.state;return p()(h.a.mark(function t(){var a;return h.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,f.a.getNewsData({category:e});case 3:a=t.sent,i(v.n,{category:e,data:a}),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}},t,n,[[0,7]])}))()},selectTab:function(t,e){var n=this,i=t.commit,a=t.state;return p()(h.a.mark(function t(){var s;return h.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!a.data[e]){t.next=2;break}return t.abrupt("return");case 2:return t.prev=2,t.next=5,f.a.getNewsData({category:e});case 5:s=t.sent,i(v.n,{category:e,change:!0,data:s}),t.next=11;break;case 9:t.prev=9,t.t0=t.catch(2);case 11:case"end":return t.stop()}},t,n,[[2,9]])}))()}},mutations:s()({},v.n,function(t,e){var n=e.data,a=e.category,s=e.change;n.news=n&&n.news&&n.news.filter(function(t){return t.sourcets}).map(i),n.banner&&(n.banner=n.banner.map(i)),n.news&&n.news.length?(s?(t.data[a]=n,t.lastListLen=0):(t.data[a]&&t.data[a].news&&(t.lastListLen=t.data[a].news.length,t.data[a].news=[].concat(l()(t.data[a].news),l()(n.news))),t.loaded="loaded"),t.data=r()({},t.data)):t.loaded="complete"})}},469:function(t,e,n){"use strict";var i=n(59),a=n.n(i),s=n(60),o=n.n(s),r=n(61),c=n.n(r),l=n(91),u=n(49);e.a={state:{result:[]},actions:{query:function(t,e){var n=this,i=t.commit;return c()(o.a.mark(function t(){var a;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return i(u.v,[]),t.next=3,l.a.getSearchResult({query:e});case 3:a=t.sent,i(u.v,a);case 5:case"end":return t.stop()}},t,n)}))()}},mutations:a()({},u.v,function(t,e){t.result=e})}},470:function(t,e,n){"use strict";var i,a=n(59),s=n.n(a),o=n(191),r=n.n(o),c=n(49),l=window.localStorage,u=void 0;try{u=JSON.parse(l.getItem("FAVORITE_NEWS"))||[]}catch(t){u=[]}e.a={state:{newsFavorList:u},actions:{addFavorItem:function(t,e){var n=t.commit;t.state.newsFavorList.filter(function(t){return t.nid===e.nid}).length||n(c.c,{title:e.title,nid:e.nid,time:Date.now()})},removeFavorItem:function(t,e){var n=t.commit;t.state;n(c.e,e)}},mutations:(i={},s()(i,c.c,function(t,e){t.newsFavorList.push(e),l.setItem("FAVORITE_NEWS",r()(t.newsFavorList))}),s()(i,c.e,function(t,e){t.newsFavorList=t.newsFavorList.filter(function(t){return t.nid!==e.nid}),l.setItem("FAVORITE_NEWS",r()(t.newsFavorList))}),i)}},472:function(t,e,n){"use strict";var i=n(59),a=n.n(i),s=n(60),o=n.n(s),r=n(61),c=n.n(r),l=n(91),u=n(49);e.a={state:{detail:{}},actions:{getDetail:function(t,e){var n=this,i=t.commit;return c()(o.a.mark(function t(){var a;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return i(u.t,{}),t.next=3,l.a.getNewsData({nids:e.nid});case 3:a=t.sent,i(u.t,a&&a.news&&a.news[0]||{});case 5:case"end":return t.stop()}},t,n)}))()}},mutations:a()({},u.t,function(t,e){t.detail=e})}},473:function(t,e,n){"use strict";function i(t){return t.split("|").map(function(t){return{text:t}})}function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,e=arguments[1];localStorage.setItem(t,u()(e))}function s(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d;try{JSON.parse(localStorage.getItem(t)).forEach(function(t){delete t.active})}catch(t){}}var o,r=n(59),c=n.n(r),l=n(191),u=n.n(l),h=n(49),d="menuTabsLocalDataKey",p="推荐|本地|娱乐|社会|军事|女人|互联网|科技|生活|国际|国内|体育|汽车";p=s(d)||i(p);var f=0,v=localStorage.getItem("activeTab");v&&(f=parseInt(v.split("|")[0],10)),p[f].active=!0;var m="房产|财经|时尚|教育|游戏|旅游|人文|创意";m=s("otherMenuTabsLocalDataKey")||i(m),e.a={state:{menuTabs:p,otherMenuTabs:m,category:"abcd"},getters:{menuTabs:function(t){return t.menuTabs},otherMenuTabs:function(t){return t.otherMenuTabs},category:function(t){var e=t.menuTabs.find(function(t){return t.active});return e?e.text:"推荐"}},actions:{setActiveTab:function(t,e){(0,t.commit)(h.m,e)},addCategory:function(t,e){var n=t.commit,i=e.text;n(h.b,i)},delCategory:function(t,e){(0,t.commit)(h.f,e.text)}},mutations:(o={},c()(o,h.m,function(t,e){t.menuTabs=t.menuTabs.map(function(t){return t.active=e===t.text,t})}),c()(o,h.f,function(t,e){t.menuTabs.forEach(function(n,i){if(e===n.text){var s=t.menuTabs.splice(i,1)[0];t.otherMenuTabs.unshift(s),a("otherMenuTabsLocalDataKey",t.otherMenuTabs)}}),a(d,t.menuTabs)}),c()(o,h.b,function(t,e){t.otherMenuTabs.forEach(function(n,i){if(e===n.text){var s=t.otherMenuTabs.splice(i,1)[0];t.menuTabs.push(s),a(d,t.menuTabs)}}),a("otherMenuTabsLocalDataKey",t.otherMenuTabs)}),o)}},474:function(t,e,n){function i(t){n(475),n(476)}var a=n(33)(n(477),n(499),i,"data-v-4e64dc28",null);t.exports=a.exports},475:function(t,e){},476:function(t,e){},477:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(50),a=n.n(i),s=n(51),o=n(478),r=n.n(o),c=n(482),l=n.n(c),u=n(130),h=n(495),d=n.n(h);e.default={name:"app",components:{AppHeader:r.a,AppSidebar:l.a,MenuTabs:d.a},computed:a()({},Object(s.d)("appShell",["appHeader","appSidebar","pageTransitionName","overflowScrollingTouch","enableSwipeBack","historyPageScrollTop"]),Object(s.d)(["route"])),methods:a()({},Object(s.b)("appShell",["setPageSwitching"]),Object(s.b)("appShell/appSidebar",["showSidebar","hideSidebar"]),{handleBeforeEnter:function(t){this.setPageSwitching(!0),u.a.$emit("app-page:before-enter")},handleAfterEnter:function(t){t.classList.remove("enable-scroll");var e=this.historyPageScrollTop[this.route.path];window.scrollTo(0,e),this.setPageSwitching(!1)},handleAfterLeave:function(t){t.classList.remove("enable-scroll"),this.setPageSwitching(!1),u.a.$emit("app-page:after-leave")},handleClickHeaderBack:function(){this.$router.go(-1)},handleClickHeaderMenu:function(){this.showSidebar()}}),mounted:function(){var t=this,e=this.$el.querySelector(".app-view-wrapper"),n=void 0,i=void 0,a=void 0,s=void 0,o=function(t){n=t.touches[0].pageX,a=t.touches[0].pageY},r=function(t){i=t.touches[0].pageX-n,s=t.touches[0].pageY-a},c=function(e){i>60&&Math.abs(s)<60&&t.enableSwipeBack&&t.$router.go(-1),i=0,s=0};e.addEventListener("touchstart",o),e.addEventListener("touchmove",r),e.addEventListener("touchend",c)}}},478:function(t,e,n){function i(t){n(479)}var a=n(33)(n(480),n(481),i,"data-v-ad8f8a4c",null);t.exports=a.exports},479:function(t,e){},480:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(50),a=n.n(i),s=n(51),o=n(130);e.default={name:"appHeader",computed:a()({},Object(s.d)("appShell/appHeader",["show","showMenu","showFavor","showBack","showLogo","logoIcon","title","actions"]),Object(s.d)("appShell",["isPageSwitching"])),methods:{handleClick:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.handler,i=e.actionIdx,a=e.route;if(!this.isPageSwitching){var s={};"action"===t&&(s.actionIdx=i),"toggle"===t&&(s.handler=n),this.$emit("click-"+t,s),o.a.$emit("app-header:click-"+t,s),a&&this.$router.push(a)}}}}},481:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"slide-down"}},[n("header",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"app-header-wrapper"},[n("div",{staticClass:"app-header-left"},[t.showMenu?n("v-btn",{attrs:{icon:""},nativeOn:{click:function(e){t.handleClick("menu")}}},[n("v-icon",{staticClass:"app-header-icon"},[t._v("menu")])],1):t._e(),t._v(" "),t.showFavor?n("v-btn",{attrs:{icon:""},nativeOn:{click:function(e){t.handleClick("favor")}}},[n("v-icon",{staticClass:"app-header-icon"},[t._v("folder")])],1):t._e(),t._v(" "),t.showBack?n("v-btn",{attrs:{icon:""},nativeOn:{click:function(e){t.handleClick("back")}}},[n("v-icon",{staticClass:"app-header-icon"},[t._v("arrow_back")])],1):t._e(),t._v(" "),t.showLogo?n("div",{on:{click:function(e){t.handleClick("logo")}}},[t._t("logo",[n("icon",{staticClass:"app-header-icon",attrs:{name:t.logoIcon}})])],2):t._e()],1),t._v(" "),n("div",{staticClass:"app-header-middle"},[t._t("title",[t._v("\n                "+t._s(t.title)+"\n            ")])],2),t._v(" "),n("div",{staticClass:"app-header-right"},[t._l(t.actions,function(e,i){return t._t("actions",[e.toggle?n("v-btn",{class:e.toggleClassObj,attrs:{icon:"icon"},nativeOn:{click:function(n){t.handleClick("toggle",{actionIdx:i,handler:e.toggleHandler})}}},[n("v-icon",{staticClass:"app-header-icon"},[t._v(t._s(e.toggleIcon))])],1):n("v-btn",{attrs:{icon:"icon"},nativeOn:{click:function(n){t.handleClick("action",{actionIdx:i,route:e.route})}}},[e.svg?n("icon",{staticClass:"app-header-icon",attrs:{name:e.svg}}):e.icon?n("v-icon",{staticClass:"app-header-icon"},[t._v(t._s(e.icon))]):t._e()],1)],{icon:e.icon,route:e.route})})],2)])])},staticRenderFns:[]}},482:function(t,e,n){function i(t){n(483)}var a=n(33)(n(484),n(494),i,"data-v-215f825f",null);t.exports=a.exports},483:function(t,e){},484:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(50),a=n.n(i),s=n(51),o=n(485),r=n.n(o),c=n(490),l=n.n(c);e.default={data:function(){return{toast:!1,showLogin:!1,aclogout:!1}},components:{Sidebar:r.a,Login:l.a},computed:a()({},Object(s.d)("appShell/appSidebar",["show","title","user","blocks","enableSwipeOut"]),{sidebarStatus:{get:function(){return this.show},set:function(t){t?this.$emit("show-sidebar"):this.$emit("hide-sidebar")}}}),methods:{close:function(){this.sidebarStatus=!1},closeAndGo:function(t,e){var n=this;return e?void(this[e]&&this[e]()):t?(this.$router.push(t),void this.close()):(clearTimeout(this.timer),this.toast=!0,void(this.timer=setTimeout(function(){n.toast=!1},2500)))},login:function(){this.showLogin=!0},logout:function(){var t=this;this.aclogout=!0,setTimeout(function(){t.aclogout=!1},100)},closeLogin:function(){this.showLogin=!1}}}},485:function(t,e,n){function i(t){n(486)}var a=n(33)(n(487),n(489),i,"data-v-83387fb0",null);t.exports=a.exports},486:function(t,e){},487:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(488),a=n.n(i),s=window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)};e.default={props:{value:{type:Boolean,default:!1},width:{type:Number,default:.75},enableSwipeOut:{type:Boolean,default:!1}},data:function(){return{showStatus:this.value,startX:0,startY:0,wrapperClass:{expand:!1,collapse:!0,"w-left":!0},opacity:0,iscroll:null}},computed:{itsWidth:function(){return this.width<1?Math.round(this.width*document.documentElement.clientWidth):this.width},widthProp:function(){return this.itsWidth+"px"}},watch:{value:function(){this.showStatus=this.value},showStatus:function(t){this.toggleScroll(t),this.$emit("input",t)}},methods:{toggleTouchStart:function(t){if(this.enableSwipeOut&&!this.wrapperClass.expand){var e=t.touches[0],n=e.clientX,i=e.clientY;this.startX=n,this.startY=i}},toggleTouchMove:function(t){var e=this;if(this.enableSwipeOut&&!this.wrapperClass.expand){var n=t.touches[0],i=n.clientX,a=n.clientY,s=i-this.startX;s>5&&Math.abs(a-this.startY)/s<.577&&(this.wrapperClass.expand=!0,this.wrapperClass.collapse=!1,this.$nextTick(function(){e.bindScroll(t)}))}},toggleClick:function(t){this.iscroll&&this.forceToggleScroll(!1)},bindScroll:function(t){var e=this;this.iscroll||(this.iscroll=new a.a(this.$refs.sidebarWrapper,{eventPassthrough:!0,scrollY:!1,scrollX:!0,bounce:!1,startX:-this.itsWidth}),this.changeOpacity(),this.iscroll.on("scrollEnd",function(){var t=e.iscroll,n=t.directionX,i=t.x;return 0===i?void(e.showStatus=!0):i===-e.itsWidth?(e.unbindScroll(),void(e.showStatus=!1)):void(n>0?e.forceToggleScroll(!1):n<0?e.forceToggleScroll(!0):e.showStatus=!e.showStatus)}),t&&this.iscroll._start(t))},unbindScroll:function(){this.iscroll&&(this.iscroll.destroy(),this.iscroll=null,this.wrapperClass.expand=!1,this.wrapperClass.collapse=!0,this.opacity=0,this.$refs.sidebarScroller.setAttribute("style","padding-left:"+this.widthProp))},toggleScroll:function(t){var e=this;t?(this.wrapperClass.expand=!0,this.wrapperClass.collapse=!1,this.$nextTick(function(){e.iscroll||e.bindScroll(),e.iscroll.x<0&&setTimeout(function(){e.iscroll&&e.iscroll.scrollTo(0,0,200)},10)})):this.iscroll&&this.iscroll.x>-this.itsWidth&&setTimeout(function(){e.iscroll.scrollTo(-e.itsWidth,0,200)})},forceToggleScroll:function(t){this.showStatus===t?this.toggleScroll(t):this.showStatus=t},changeOpacity:function(){var t=this;this.wrapperClass.expand&&this.iscroll&&(setTimeout(function(){t.iscroll&&(t.opacity=(t.iscroll.x+t.itsWidth)/t.itsWidth*.5)},80),s(this.changeOpacity.bind(this)))}}}},489:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.enableSwipeOut,expression:"enableSwipeOut"}],ref:"sidebarWrapper",staticClass:"sidebar-wrapper",class:t.wrapperClass},[n("div",{ref:"sidebarScroller",staticClass:"sidebar-scroller",style:{"padding-left":t.widthProp}},[n("div",{staticClass:"sidebar-main",style:{width:t.widthProp},on:{scroll:function(t){t.stopPropagation()}}},[t._t("default")],2),t._v(" "),n("div",{ref:"sidebarToggle",staticClass:"touch-toggle",style:{opacity:t.opacity,"padding-left":t.widthProp},on:{touchstart:t.toggleTouchStart,touchmove:t.toggleTouchMove,click:function(e){return e.stopPropagation(),e.preventDefault(),t.toggleClick(e)}}})])])},staticRenderFns:[]}},49:function(t,e,n){"use strict";n.d(e,"h",function(){return i}),n.d(e,"g",function(){return a}),n.d(e,"o",function(){return s}),n.d(e,"p",function(){return o}),n.d(e,"l",function(){return r}),n.d(e,"k",function(){return c}),n.d(e,"a",function(){return l}),n.d(e,"q",function(){return u}),n.d(e,"j",function(){return h}),n.d(e,"r",function(){return d}),n.d(e,"u",function(){return p}),n.d(e,"s",function(){return f}),n.d(e,"d",function(){return v}),n.d(e,"i",function(){return m}),n.d(e,"w",function(){return g}),n.d(e,"n",function(){return w}),n.d(e,"m",function(){return b}),n.d(e,"f",function(){return _}),n.d(e,"b",function(){return S}),n.d(e,"v",function(){return T}),n.d(e,"c",function(){return x}),n.d(e,"e",function(){return y}),n.d(e,"t",function(){return C});var i="ENABLE_PAGE_TRANSITION",a="DISABLE_PAGE_TRANSITION",s="SET_PAGE_SWITCHING",o="SET_PAGE_TRANSITION_NAME",r="SET_APP_HEADER",c="SET_APP_BOTTOM_NAV",l="ACTIVATE_APP_BOTTOM_NAV",u="SET_SIDEBAR_VISIBILITY",h="SAVE_SCROLLTOP",d="SET_SWIPE_OUT",p="UPDATE_OVERFLOW_SCROLLING_TOUCH",f="SET_USER_INFO",v="ADD_SIDEBAR_BLOCKs",m="RM_SIDEBAR_BLOCKS",g="UPDATE_SWIPE_BACK",w="SET_NEWS_DATA",b="SET_NEWS_ACTIVE_TAB",_="DEL_CATEGORY",S="ADD_CATEGORY",T="UPDATE_RESULT",x="ADD_FAVOR_ITEM",y="DELETE_FAVOR_ITEM",C="UPDATE_DETAIL"},490:function(t,e,n){function i(t){n(491)}var a=n(33)(n(492),n(493),i,"data-v-0dd352b5",null);t.exports=a.exports},491:function(t,e){},492:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(62),a=n.n(i),s=n(50),o=n.n(s),r=n(51);e.default={name:"login",props:["show","logout"],data:function(){return{username:"",password:"",wrapperWidth:document.body.clientWidth,processing:!1,useDefaultAccount:!1}},computed:{},methods:o()({},Object(r.b)("appShell/appSidebar",["accountLogin","accountLogout"]),{close:function(){this.$emit("close-login")},validate:function(){return!!this.username.length&&!!this.password.length},submit:function(){var t=this;this.validate()&&(this.showLoginLoading(),this.accountLogin({name:this.username,pwd:this.password}).then(function(){t.storeCred()}).then(function(){t.hideLoginLoading(),t.close(),t.useDefaultAccount=!0}))},changeAccount:function(){this.username="",this.password="",this.useDefaultAccount=!1},storeCred:function(){if(navigator.credentials){var t=new PasswordCredential({id:this.username,password:this.password,name:this.username,iconURL:"https://gss0.bdstatic.com/9rkZbzqaKgQUohGko9WTAnF6hhy/movie/edison/assets/android-chrome-192x192_1501062228038.png"});return navigator.credentials.store(t)}return a.a.resolve()},toLogout:function(){var t=this;if(navigator.credentials)return void navigator.credentials.requireUserMediation().then(function(){t.accountLogout()});this.accountLogout()},showLoginLoading:function(){this.processing=!0},hideLoginLoading:function(){this.processing=!1}}),created:function(){var t=this;navigator.credentials&&navigator.credentials.get({password:!0}).then(function(e){if(e)switch(e.type){case"password":if(void 0===e.password)break;t.username=e.id,t.password=e.password,t.useDefaultAccount=!0}})},watch:{logout:function(t,e){t&&this.toLogout()}}}},493:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("transition",{attrs:{name:"login"}},[n("div",{staticClass:"login-wrapper",style:{width:t.wrapperWidth+"px"}},[n("header",[n("v-btn",{attrs:{light:"",icon:""},nativeOn:{click:function(e){return t.close(e)}}},[n("v-icon",[t._v("close")])],1),t._v(" "),n("span",[t._v("登录")])],1),t._v(" "),t.useDefaultAccount?n("div",{staticClass:"login-content"},[n("p",{staticClass:"sign-in-already-tip"},[t._v("您已经登录过您的账户，可以直接访问")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"hidden-filed",attrs:{type:"text"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"hidden-filed",attrs:{type:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),n("v-radio",{staticClass:"sign-in-checkbox",attrs:{label:t.username,value:t.username,color:"primary","hide-details":""},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),t._v(" "),n("div",{staticClass:"sign-in-btn",on:{click:t.submit}},[n("v-btn",[t._v("现在访问")])],1),t._v(" "),n("p",{staticClass:"sign-in-change",on:{click:t.changeAccount}},[t._v("换个账户登录")])],1):n("div",{staticClass:"login-content"},[n("v-text-field",{attrs:{name:"username","single-line":"","prepend-icon":"email",placeholder:"用户名",type:"text",autocomplete:"name"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),t._v(" "),n("v-text-field",{attrs:{name:"password","single-line":"","prepend-icon":"lock",placeholder:"密码",type:"password",autocomplete:"new-password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),n("div",{staticClass:"sign-in-btn",on:{click:t.submit}},[n("v-btn",[t._v("登录")])],1)],1),t._v(" "),t.processing?n("v-progress-circular",{staticClass:"primary--text login-progress",attrs:{indeterminate:""}}):t._e()],1)]):t._e()},staticRenderFns:[]}},494:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("sidebar",{attrs:{enableSwipeOut:t.enableSwipeOut},model:{value:t.sidebarStatus,callback:function(e){t.sidebarStatus=e},expression:"sidebarStatus"}},[n("div",{staticClass:"app-sidebar-content"},[n("div",{staticClass:"app-sidebar-header"},[n("div",{staticClass:"user-avatar"},[n("v-icon",{staticClass:"user-avatar-icon",attrs:{light:""}},[t._v("face")])],1),t._v(" "),t.user?n("div",{staticClass:"user-info"},[n("div",{staticClass:"user-name"},[n("v-icon",[t._v("person")]),t._v(t._s(t.user.name))],1),t._v(" "),n("div",{staticClass:"user-location"},[n("v-icon",[t._v("room")]),t._v(t._s(t.user.location))],1),t._v(" "),n("div",{staticClass:"user-email"},[n("v-icon",[t._v("email")]),t._v(t._s(t.user.email))],1)]):n("p",{staticClass:"user-login",on:{click:t.login}},[t._v("登录")])]),t._v(" "),t.blocks?n("div",{staticClass:"app-sidebar-blocks"},[n("ul",t._l(t.blocks,function(e,i){return n("li",{key:i,staticClass:"app-sidebar-block"},[e.sublistTitle?n("div",{staticClass:"sub-list-title"},[t._v(t._s(e.sublistTitle))]):t._e(),t._v(" "),e.list?n("ul",t._l(e.list,function(e){return n("li",{directives:[{name:"ripple",rawName:"v-ripple",value:{class:"grey--text"},expression:"{class: 'grey--text'}"}],key:e.text,on:{click:function(n){n.stopPropagation(),t.closeAndGo(e.route,e.action)}}},[e.icon||e.image||e.svg?n("span",{staticClass:"app-sidebar-block-left-icon"},[e.image?n("img",{attrs:{src:e.image,alt:e.alt}}):e.svg?n("icon",{attrs:{name:e.svg}}):e.icon?n("v-icon",{staticClass:"grey--text text--lighten-1"},[t._v(t._s(e.icon))]):t._e()],1):t._e(),t._v(" "),e.text?n("span",{staticClass:"app-sidebar-block-text"},[t._v(t._s(e.text))]):t._e()])})):t._e()])}))]):t._e(),t._v(" "),n("transition",{attrs:{name:"toast"}},[t.toast?n("p",{staticClass:"app-sidebar-toast"},[t._v("Only a demo")]):t._e()])],1),t._v(" "),n("login",{attrs:{show:t.showLogin,logout:t.aclogout},on:{"close-login":t.closeLogin}})],1)},staticRenderFns:[]}},495:function(t,e,n){function i(t){n(496)}var a=n(33)(n(497),n(498),i,"data-v-d4ead03e",null);t.exports=a.exports},496:function(t,e){},497:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(60),a=n.n(i),s=n(61),o=n.n(s),r=n(50),c=n.n(r),l=n(51),u=n(192),h=n.n(u);e.default={name:"menu-tabs",data:function(){return{opend:!1,tabWidth:72,extraWidth:40,clientWidth:document.documentElement.clientWidth}},created:function(){},computed:c()({},Object(l.c)(["menuTabs","otherMenuTabs"]),{len:function(){return this.menuTabs.length}}),methods:c()({},Object(l.b)(["addCategory","setActiveTab","delCategory"]),{selectItem:function(t,e){e||(this.opend=!1),this.setActiveTab(t.text),this.$store.dispatch("selectTab",t.text),this.setMenuTabsPos()},toggleEditWrapper:function(){this.opend=!this.opend},addItemToSelected:function(t){this.addCategory(t),this.refreshScroll()},delSelectedItem:function(t){t.active&&this.selectItem(this.menuTabs[0],!0),this.delCategory(t),this.refreshScroll()},setMenuTabsPos:function(){var t=0;this.menuTabs.forEach(function(e,n){e.active&&(t=n,localStorage.setItem("activeTab",n+"|"+e.text))});var e=this.menuTabsScroll,n=this.tabWidth*(t-2),i=Math.abs(e.maxScrollX);n<=0&&(n=0),n>i&&(n=i),n!==Math.abs(e.x)&&e.scrollTo(-n,0,300)},leave:function(t){t.style.display="none"},enter:function(t){t.style.opacity=0,setTimeout(function(){return t.style.opacity=1},200)},refreshScroll:function(){var t=this;setTimeout(function(){t.menuTabsScroll.refresh()})}}),activated:function(){var t=this;return o()(a.a.mark(function e(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.setMenuTabsPos();case 1:case"end":return e.stop()}},e,t)}))()},mounted:function(){this.menuTabsScroll=new h.a(this.$refs.menuTabsWrap,{momentum:!0,scrollX:!0,scrollY:!1,click:!0,tap:!0})}}},498:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"slide-left"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:"/"===t.$route.path,expression:"$route.path === '/'"}],class:{"menu-tabs":!0,opend:t.opend},style:{width:t.clientWidth+"px"}},[n("div",{ref:"menuTabsWrap",staticClass:"menu-tabs-wrap"},[n("div",{staticClass:"menu-tabs-wrap-inner",style:{width:t.len*t.tabWidth+t.extraWidth+"px"}},t._l(t.menuTabs,function(e,i){return n("div",{key:i,staticClass:"menu-tabs-item",on:{click:function(n){t.selectItem(e)}}},[n("span",{class:{active:e.active}},[t._v(t._s(e.text))])])}))]),t._v(" "),n("div",{staticClass:"edit",on:{click:t.toggleEditWrapper}},[n("span",[t._v("+")])]),t._v(" "),n("div",{staticClass:"edit-wrapper"},[n("div",{staticClass:"edit-wrapper-inner"},[n("p",{staticClass:"menu-title"},[t._v("我的栏目"),n("span",[t._v("点击删除")])]),t._v(" "),n("transition-group",{staticClass:"edit-menu-tabs-wrapper",on:{leave:t.leave,enter:t.enter}},t._l(t.menuTabs,function(e,i){return 0!==i?n("div",{key:e.text,staticClass:"edit-menu-tabs-item",on:{click:function(n){t.delSelectedItem(e)}}},[n("span",{class:{active:e.active}},[t._v("- "+t._s(e.text))])]):t._e()})),t._v(" "),n("p",{staticClass:"menu-title"},[t._v("推荐栏目"),n("span",[t._v("点击添加")])]),t._v(" "),n("transition-group",{staticClass:"edit-menu-tabs-wrapper",on:{leave:t.leave,enter:t.enter}},t._l(t.otherMenuTabs,function(e,i){return n("div",{key:e.text,staticClass:"edit-menu-tabs-item",on:{click:function(n){t.addItemToSelected(e)}}},[n("span",[t._v("+ "+t._s(e.text))])])}))],1)]),t._v(" "),n("div",{staticClass:"menu-tab-mask",on:{click:t.toggleEditWrapper}})])])},staticRenderFns:[]}},499:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"app-shell"},[n("app-header",{staticClass:"app-shell-header",on:{"click-menu":t.handleClickHeaderMenu,"click-back":t.handleClickHeaderBack}},[n("template",{slot:"logo"})],2),t._v(" "),n("menu-tabs",{staticClass:"menu-tabs"}),t._v(" "),n("app-sidebar",{on:{"hide-sidebar":t.hideSidebar,"show-sidebar":t.showSidebar}}),t._v(" "),n("div",{ref:"appViewWrapper",staticClass:"app-view-wrapper",class:{"app-view-with-header":t.appHeader.show}},[n("transition",{attrs:{name:t.pageTransitionName},on:{"before-enter":t.handleBeforeEnter,"after-enter":t.handleAfterEnter,"after-leave":t.handleAfterLeave}},[n("keep-alive",[t.$route.meta.notKeepAlive?t._e():n("router-view",{key:t.$route.fullPath,ref:"appView",staticClass:"app-view",class:{"overflow-scrolling-touch":t.overflowScrollingTouch}})],1)],1),t._v(" "),n("transition",{attrs:{name:t.pageTransitionName},on:{"before-enter":t.handleBeforeEnter,"after-enter":t.handleAfterEnter,"after-leave":t.handleAfterLeave}},[t.$route.meta.notKeepAlive?n("router-view",{key:t.$route.fullPath,ref:"appView",staticClass:"app-view",class:{"overflow-scrolling-touch":t.overflowScrollingTouch}}):t._e()],1)],1)],1)])},staticRenderFns:[]}},500:function(t,e,n){function i(t){n(501)}var a=n(33)(n(502),n(503),i,null,null);t.exports=a.exports},501:function(t,e){},502:function(t,e,n){"use strict";function i(){return"fa-"+(s++).toString(16)}Object.defineProperty(e,"__esModule",{value:!0});var a={};e.default={name:"icon",props:{name:{type:String,validator:function(t){return t?t in a||(console.warn('Invalid prop: prop "name" is referring to an unregistered icon "'+t+'".\nPlease make sure you have imported this icon before using it.'),!1):(console.warn('Invalid prop: prop "name" is required.'),!1)}},scale:[Number,String],spin:Boolean,inverse:Boolean,pulse:Boolean,flip:{validator:function(t){return"horizontal"===t||"vertical"===t}},label:String},data:function(){return{x:!1,y:!1,childrenWidth:0,childrenHeight:0,outerScale:1}},computed:{normalizedScale:function(){var t=this.scale;return t=void 0===t?1:Number(t),isNaN(t)||t<=0?(console.warn('Invalid prop: prop "scale" should be a number over 0.',this),this.outerScale):t*this.outerScale},klass:function(){return{"fa-icon":!0,"fa-spin":this.spin,"fa-flip-horizontal":"horizontal"===this.flip,"fa-flip-vertical":"vertical"===this.flip,"fa-inverse":this.inverse,"fa-pulse":this.pulse}},icon:function(){return this.name?a[this.name]:null},box:function(){return this.icon?"0 0 "+this.icon.width+" "+this.icon.height:"0 0 "+this.width+" "+this.height},ratio:function(){if(!this.icon)return 1;var t=this.icon,e=t.width,n=t.height;return Math.max(e,n)/16},width:function(){return this.childrenWidth||this.icon&&this.icon.width/this.ratio*this.normalizedScale||0},height:function(){return this.childrenHeight||this.icon&&this.icon.height/this.ratio*this.normalizedScale||0},style:function(){return 1!==this.normalizedScale&&{fontSize:this.normalizedScale+"em"}},raw:function(){if(!this.icon||!this.icon.raw)return null;var t=this.icon.raw,e={};return t=t.replace(/\s(?:xml:)?id=(["']?)([^"')\s]+)\1/g,function(t,n,a){var s=i();return e[a]=s,' id="'+s+'"'}),t=t.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,function(t,n,i,a){var s=n||a;return s&&e[s]?"#"+e[s]:t}),t}},mounted:function(){var t=this;if(!this.icon){this.$children.forEach(function(e){e.outerScale=t.normalizedScale});var e=0,n=0;this.$children.forEach(function(t){e=Math.max(e,t.width),n=Math.max(n,t.height)}),this.childrenWidth=e,this.childrenHeight=n,this.$children.forEach(function(t){t.x=(e-t.width)/2,t.y=(n-t.height)/2})}},register:function(t){for(var e in t){var n=t[e];n.paths||(n.paths=[]),n.d&&n.paths.push({d:n.d}),n.polygons||(n.polygons=[]),n.points&&n.polygons.push({points:n.points}),a[e]=n}},icons:a};var s=870711},503:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{class:t.klass,style:t.style,attrs:{version:"1.1",role:t.label?"img":"presentation","aria-label":t.label,x:t.x,y:t.y,width:t.width,height:t.height,viewBox:t.box}},[t._t("default",[t.icon&&t.icon.paths?t._l(t.icon.paths,function(e,i){return n("path",t._b({key:"path-"+i},"path",e,!1))}):t._e(),t._v(" "),t.icon&&t.icon.polygons?t._l(t.icon.polygons,function(e,i){return n("polygon",t._b({key:"polygon-"+i},"polygon",e,!1))}):t._e(),t._v(" "),t.icon&&t.icon.raw?[n("g",{domProps:{innerHTML:t._s(t.raw)}})]:t._e()])],2)},staticRenderFns:[]}},505:function(t,e,n){function i(t){n(506)}var a=n(33)(n(507),n(508),i,"data-v-6e453c72",null);t.exports=a.exports},506:function(t,e){},507:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{percent:0,show:!1,canSuccess:!0,duration:3e3,height:"2px",color:"#ffca2b",failedColor:"#ff0000"}},methods:{start:function(){var t=this;return this.show=!0,this.canSuccess=!0,this._timer&&(clearInterval(this._timer),this.percent=0),this._cut=1e4/Math.floor(this.duration),this._timer=setInterval(function(){t.increase(t._cut*Math.random()),t.percent>95&&t.finish()},100),this},set:function(t){return this.show=!0,this.canSuccess=!0,this.percent=Math.floor(t),this},get:function(){return Math.floor(this.percent)},increase:function(t){return this.percent=this.percent+Math.floor(t),this},decrease:function(t){return this.percent=this.percent-Math.floor(t),this},finish:function(){return this.percent=100,this.hide(),this},pause:function(){return clearInterval(this._timer),this},hide:function(){var t=this;return clearInterval(this._timer),this._timer=null,setTimeout(function(){t.show=!1,t.$nextTick(function(){setTimeout(function(){t.percent=0},200)})},500),this},fail:function(){return this.canSuccess=!1,this}}}},508:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"progress",style:{width:t.percent+"%",height:t.height,"background-color":t.canSuccess?t.color:t.failedColor,opacity:t.show?1:0}})},staticRenderFns:[]}},91:function(t,e,n){"use strict";function i(t){var e=t.category;return t.nids?"recommendinfo":"getbodyinfo"===e?"getbodyinfo":"推荐"===e?"newchosenlist":"本地"===e?"localnewslist":"recommendlist"}var a=n(62),s=n.n(a),o=n(60),r=n.n(o),c=n(61),l=n.n(c),u=n(439),h=n.n(u),d=screen,p=d.width,f=d.height;e.a={getNewsData:function(t){var e=this;return l()(r.a.mark(function n(){var a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h()("https://newspwa.baidu.com/api/mockup/realNews/news",{params:{tn:"bdapibaiyue",t:i(t),mid:"03c7a16f2e8028127e42c5f7ca9e210b",ts:0,topic:t.category,type:"info",token:"info",ln:20,an:20,withtopic:0,wf:1,ver:t.ver||4,pd:"webapp",nids:t.nids,nid:t.nid,remote_device_type:1,os_type:1,screen_size_width:p,screen_size_height:f,action:1},withCredentials:!0});case 2:return a=e.sent,e.abrupt("return",a.data.data);case 4:case"end":return e.stop()}},n,e)}))()},getSearchResult:function(t){var e=this;return l()(r.a.mark(function t(){var n,i;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getNewsData({category:"推荐"});case 2:return n=t.sent,i=n&&n.news||[],t.abrupt("return",i);case 5:case"end":return t.stop()}},t,e)}))()},getUserInfo:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];return new s.a(function(t){t({userName:"Baidu",messageCount:10})})}}}},[193]);
//# sourceMappingURL=app.9f21a93537d7b66ce93f.js.map