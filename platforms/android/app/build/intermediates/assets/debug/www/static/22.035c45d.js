(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{387:function(t,n,i){var e=i(493);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);(0,i(2).default)("87482432",e,!1,{})},492:function(t,n,i){"use strict";var e=i(387);i.n(e).a},493:function(t,n,i){(t.exports=i(1)()).push([t.i,"\n._img[data-v-541cd1ac] {\n  width: 1.06667rem;\n  height: 1.06667rem;\n  border-radius: 50%;\n  margin-right: 0.26667rem;\n}\n._type[data-v-541cd1ac] {\n  display: inline-block;\n  border: 1px solid #ff9d00;\n  color: #ff9d00;\n  font-size: 0.13333rem;\n  background: #fff5e2;\n  text-align: center;\n  padding: 0.02667rem;\n  border-radius: 0.05333rem;\n}\n._vertical[data-v-541cd1ac] {\n  height: 0.10667rem;\n  border-right: 1px solid #999;\n  margin-right: 0.13333rem;\n}\n",""])},593:function(t,n,i){"use strict";i.r(n);var e=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"page g-flex g-fd-c"},[i("fp-title",{attrs:{title:"系统消息"}}),t._v(" "),i("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.loadMore,expression:"loadMore"}],staticClass:"g-col-1",attrs:{"infinite-scroll-disabled":"loading","infinite-scroll-distance":"15"}},t._l(t.info.data,function(n){return i("router-link",{key:n.id,staticClass:"g-flex g-bb g-pd-30",attrs:{to:t.getUrl(n)}},[i("i",{staticClass:"iconfont icon-xitongxiaoxi g-fs-80 g-m-r-20 g-c-"}),t._v(" "),i("div",{staticClass:"g-flex g-fd-c g-jc-sb"},[i("div",{staticClass:"g-tl g-fs-28 g-c-333"},[1==n.type?i("p",[t._v("系统消息")]):t._e()]),t._v(" "),i("p",{staticClass:"g-fs-24 g-c-999 g-oneline"},[t._v("\n          "+t._s(n.content)+"\n        ")])])])}))],1)};e._withStripped=!0;var s=i(8),o=i(5),r={components:{"fp-title":s.a,"fp-badge":o.Badge},computed:{info:function(){return this.$store.getters["notifincation/system/listInfo"]},type:function(){return this.$store.getters["login/userInfo"].utype}},created:function(){},data:function(){return{loading:!1}},methods:{getUrl:function(t){},loadMore:function(){this.info.current+1==this.info.count&&0!=this.info.current&&(this.loading=!0),this.$store.dispatch("notifincation/system/getInfo",{page:this.info.current+1,utype:this.type})}}},a=(i(492),i(0)),c=Object(a.a)(r,e,[],!1,null,"541cd1ac",null);c.options.__file="views/notification/children/system.vue";n.default=c.exports}}]);