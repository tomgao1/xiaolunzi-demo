(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{158:function(t,e,n){},159:function(t,e,n){},160:function(t,e,n){},161:function(t,e,n){},162:function(t,e,n){},174:function(t,e,n){"use strict";var a=n(158);n.n(a).a},175:function(t,e,n){"use strict";var a=n(159);n.n(a).a},176:function(t,e,n){"use strict";var a=n(160);n.n(a).a},177:function(t,e,n){"use strict";var a=n(161);n.n(a).a},178:function(t,e,n){"use strict";var a=n(162);n.n(a).a},181:function(t,e,n){"use strict";var a={name:"GuluSider",data:function(){return{visible:!0}},methods:{}},i=(n(178),n(1)),s=Object(i.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"slide"}},[t.visible?n("div",{staticClass:"sider"},[t._t("default"),t._v(" "),n("button",{on:{click:function(e){t.visible=!1}}},[t._v("close")])],2):t._e()])}),[],!1,null,"5b94c20c",null);e.a=s.exports},182:function(t,e,n){"use strict";var a={name:"GuluContent"},i=(n(177),n(1)),s=Object(i.a)(a,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"gulu-content"},[this._t("default")],2)}),[],!1,null,"1f7629b6",null);e.a=s.exports},183:function(t,e,n){"use strict";var a={name:"GuluFooter"},i=(n(176),n(1)),s=Object(i.a)(a,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"footer"},[this._t("default")],2)}),[],!1,null,"52bfc5f9",null);e.a=s.exports},184:function(t,e,n){"use strict";var a={name:"GuluHeader"},i=(n(175),n(1)),s=Object(i.a)(a,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"header"},[this._t("default")],2)}),[],!1,null,"42b50dec",null);e.a=s.exports},185:function(t,e,n){"use strict";n(55),n(14),n(26);var a={name:"GuluLayout",data:function(){return{layoutClass:{hasSider:!1}}},mounted:function(){var t=this;this.$children.forEach((function(e){"GuluSider"===e.$options.name&&(t.layoutClass.hasSider=!0)}))}},i=(n(174),n(1)),s=Object(i.a)(a,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"layout",class:this.layoutClass},[this._t("default")],2)}),[],!1,null,"7c3b9420",null);e.a=s.exports},195:function(t,e,n){},218:function(t,e,n){"use strict";var a=n(195);n.n(a).a},243:function(t,e,n){"use strict";n.r(e);n(25),n(96);var a=n(185),i=n(184),s=n(183),r=n(182),u=n(181),c={components:{GLayout:a.a,GHeader:i.a,GFooter:s.a,GContent:r.a,GSider:u.a},data:function(){return{content:'\n        <g-layout style="color: white; margin-bottom:50px;">\n          <g-header style="height: 50px; background:lightskyblue;">\n            header\n          </g-header>\n          <g-content style="height: 100px; background:deepskyblue;">\n            content\n          </g-content>\n          <g-footer style="height: 50px; background:lightskyblue;">\n            footer\n          </g-footer>\n        </g-layout>\n    '.replace(/^ {8}/gm,"").trim()}}},o=(n(218),n(1)),l=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"padding-top":"16px"}},[t._m(0),t._v(" "),n("g-layout",{staticStyle:{color:"white","margin-bottom":"50px"}},[n("g-header",{staticStyle:{height:"50px",background:"lightskyblue"}},[t._v("\n      header\n    ")]),t._v(" "),n("g-content",{staticStyle:{height:"100px",background:"deepskyblue"}},[t._v("\n      content\n    ")]),t._v(" "),n("g-footer",{staticStyle:{height:"50px",background:"lightskyblue"}},[t._v("\n      footer\n    ")])],1),t._v(" "),t._m(1),t._v(" "),n("pre",[n("code",[t._v(t._s(t.content))])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("预览")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("代码")])])}],!1,null,"338ea3bb",null);e.default=l.exports}}]);