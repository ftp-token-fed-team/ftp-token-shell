(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{189:function(t,n,i){var e=i(192);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);(0,i(2).default)("db302442",e,!1,{})},190:function(t,n,i){"use strict";var e=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"cp"},[t.isImmersion?i("div",{staticClass:"fp-immersion"}):t._e(),t._v(" "),i("div",{staticClass:"fp-title-contaienr"},[i("div",{staticClass:"title_left"},[t.back?i("i",{staticClass:"iconfont icon-left g-c-333 g-fs-40",on:{click:t.handleGoBack}}):t._e()]),t._v(" "),i("div",{staticClass:"title_content g-oneline"},["标题"===t.title?t._t("title"):i("p",[t._v(t._s(t.title))])],2),t._v(" "),i("div",{staticClass:"title_right"},[t._t("right")],2)])])};e._withStripped=!0;var s={name:"Title",props:{back:{type:Boolean,default:!1},title:{type:String,default:"标题"}},computed:{isImmersion:function(){return!this.isDev&&(this.androidVersion>5||!this.androidVersion)}},methods:{handleGoBack:function(){this.$router.back()},getTitleHeight:function(){return this.$el.clientHeight}}},a=(i(191),i(0)),o=Object(a.a)(s,e,[],!1,null,"67822a60",null);o.options.__file="components/Title/index.vue";n.a=o.exports},191:function(t,n,i){"use strict";var e=i(189);i.n(e).a},192:function(t,n,i){(t.exports=i(1)()).push([t.i,"\n.fp-title-contaienr[data-v-67822a60] {\n  position: relative;\n  background-color: #ffffff;\n  line-height: 1.17333rem;\n  height: 1.17333rem;\n  border-bottom: 1px solid #e4e4e4;\n}\n.fp-title-contaienr .title_left[data-v-67822a60] {\n    position: absolute;\n    left: 0.4rem;\n    top: 0;\n}\n.fp-title-contaienr .title_right[data-v-67822a60] {\n    position: absolute;\n    right: 0.4rem;\n    top: 0;\n    font-size: 0.42667rem;\n    color: #0085ff;\n}\n.fp-title-contaienr .title_content[data-v-67822a60] {\n    position: absolute;\n    top: 0;\n    left: 2.13333rem;\n    right: 2.13333rem;\n    font-size: 0.45333rem;\n    text-align: center;\n}\n.fp-immersion[data-v-67822a60] {\n  height: 0.53333rem;\n  width: 100%;\n  background-color: #ffffff;\n}\n",""])},219:function(t,n,i){var e=i(296);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);(0,i(2).default)("73a6e8a8",e,!1,{})},295:function(t,n,i){"use strict";var e=i(219);i.n(e).a},296:function(t,n,i){(t.exports=i(1)()).push([t.i,"\n.v-mine-settings {\n  font-size: 0.37333rem;\n}\n.v-mine-settings/deep/.cube-switch .cube-switch-input:checked + .cube-switch-ui {\n    border-color: #0085ff !important;\n    background-color: #0085ff !important;\n}\n",""])},345:function(t,n,i){"use strict";i.r(n);var e=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"page v-mine-settings"},[i("fp-title",{attrs:{title:"设置",back:""}}),t._v(" "),i("router-link",{staticClass:"g-bg-white g-pd-lr-30 g-flex-ac g-jc-sb g-lh-88 g-c-333",attrs:{to:"/mine/settings/edit-pwd"}},[i("span",[t._v("修改密码")]),t._v(" "),i("i",{staticClass:"iconfont icon-right g-c-999"})]),t._v(" "),i("div",{staticClass:"g-bg-white g-pd-lr-30 g-flex-ac g-jc-sb g-m-t-20 g-lh-88"},[i("span",[t._v("隐藏简历")]),t._v(" "),i("cube-switch",{model:{value:t.anonymity,callback:function(n){t.anonymity=n},expression:"anonymity"}})],1),t._v(" "),i("div",{staticClass:"g-bg-white g-pd-lr-30 g-m-t-20"},[i("router-link",{staticClass:"g-flex-ac g-jc-sb g-lh-88 g-bb g-c-333",attrs:{to:"/mine/settings/about-us"}},[i("span",[t._v("关于我们")]),t._v(" "),i("i",{staticClass:"iconfont icon-right g-c-999"})]),t._v(" "),i("router-link",{staticClass:"g-flex-ac g-jc-sb g-lh-88 g-c-333",attrs:{to:"/mine/settings/agreement"}},[i("span",[t._v("用户协议")]),t._v(" "),i("i",{staticClass:"iconfont icon-right g-c-999"})])],1),t._v(" "),i("div",{staticClass:"g-bg-white g-c-red g-tc g-m-t-20 g-lh-88",on:{click:t.handleLoginOut}},[t._v("\n      退出当前账号\n    ")])],1)};e._withStripped=!0;var s={name:"MineSettings",components:{"fp-title":i(190).a},data:function(){return{anonymity:!1}},methods:{handleLoginOut:function(){}}},a=(i(295),i(0)),o=Object(a.a)(s,e,[],!1,null,null,null);o.options.__file="views/mine/children/settings.vue";n.default=o.exports}}]);