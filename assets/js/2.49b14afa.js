(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{158:function(t,e,n){},159:function(t,e,n){},160:function(t,e,n){},161:function(t,e,n){},162:function(t,e,n){},174:function(t,e,n){"use strict";var i=n(158);n.n(i).a},175:function(t,e,n){"use strict";var i=n(159);n.n(i).a},176:function(t,e,n){"use strict";var i=n(160);n.n(i).a},177:function(t,e,n){"use strict";var i=n(161);n.n(i).a},178:function(t,e,n){"use strict";var i=n(162);n.n(i).a},181:function(t,e,n){"use strict";var i={name:"GuluSider",data:function(){return{visible:!0}},methods:{}},a=(n(178),n(1)),s=Object(a.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"slide"}},[t.visible?n("div",{staticClass:"sider"},[t._t("default"),t._v(" "),n("button",{on:{click:function(e){t.visible=!1}}},[t._v("close")])],2):t._e()])}),[],!1,null,"5b94c20c",null);e.a=s.exports},182:function(t,e,n){"use strict";var i={name:"GuluContent"},a=(n(177),n(1)),s=Object(a.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"gulu-content"},[this._t("default")],2)}),[],!1,null,"1f7629b6",null);e.a=s.exports},183:function(t,e,n){"use strict";var i={name:"GuluFooter"},a=(n(176),n(1)),s=Object(a.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"footer"},[this._t("default")],2)}),[],!1,null,"52bfc5f9",null);e.a=s.exports},184:function(t,e,n){"use strict";var i={name:"GuluHeader"},a=(n(175),n(1)),s=Object(a.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"header"},[this._t("default")],2)}),[],!1,null,"42b50dec",null);e.a=s.exports},185:function(t,e,n){"use strict";n(55),n(14),n(26);var i={name:"GuluLayout",data:function(){return{layoutClass:{hasSider:!1}}},mounted:function(){var t=this;this.$children.forEach((function(e){"GuluSider"===e.$options.name&&(t.layoutClass.hasSider=!0)}))}},a=(n(174),n(1)),s=Object(a.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"layout",class:this.layoutClass},[this._t("default")],2)}),[],!1,null,"7c3b9420",null);e.a=s.exports},196:function(t,e,n){},219:function(t,e,n){"use strict";var i=n(196);n.n(i).a},242:function(t,e,n){"use strict";n.r(e);n(25),n(96);var i=n(185),a=n(184),s=n(183),r=n(182),o=n(181),c={components:{GLayout:i.a,GHeader:a.a,GFooter:s.a,GContent:r.a,GSider:o.a},data:function(){return{content:'\n        <g-layout style="color: white; overflow:hidden; margin-bottom:50px;">\n          <g-header style="height: 50px; background:lightskyblue;">\n            header\n          </g-header>\n          <g-layout>\n            <g-sider style="height: 100px; background:#ddd; width:200px; color: black;">\n              sider\n            </g-sider>\n            <g-content style="height: 100px; background:deepskyblue;">\n              content\n            </g-content>\n          </g-layout>\n          <g-footer style="height: 50px; background:lightskyblue;">\n            footer\n          </g-footer>\n        </g-layout>\n    '.replace(/^ {8}/gm,"").trim()}}},u=(n(219),n(1)),l=Object(u.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"padding-top":"16px"}},[n("h2",[t._v("布局")]),t._v(" "),t._m(0),t._v(" "),n("g-layout",{staticStyle:{color:"white",overflow:"hidden","margin-bottom":"50px"}},[n("g-header",{staticStyle:{height:"50px",background:"lightskyblue"}},[t._v("\n      header\n    ")]),t._v(" "),n("g-layout",[n("g-sider",{staticStyle:{height:"100px",background:"#ddd",width:"200px",color:"black"}},[t._v("\n        sider\n      ")]),t._v(" "),n("g-content",{staticStyle:{height:"100px",width:"100%",background:"deepskyblue"}},[t._v("\n        content\n      ")])],1),t._v(" "),n("g-footer",{staticStyle:{height:"50px",background:"lightskyblue"}},[t._v("\n      footer\n    ")])],1),t._v(" "),t._m(1),t._v(" "),n("pre",[n("code",[t._v(t._s(t.content))])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("预览")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("代码")])])}],!1,null,"71e19c5c",null);e.default=l.exports}}]);