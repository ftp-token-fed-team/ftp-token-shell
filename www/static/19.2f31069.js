(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{386:function(t,i,n){var s=n(502);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,n(2).default)("00ad3062",s,!1,{})},501:function(t,i,n){"use strict";var s=n(386);n.n(s).a},502:function(t,i,n){(t.exports=n(1)()).push([t.i,"\n.position-item[data-v-e4cfbf8a] {\n  padding: 0.4rem;\n  background-color: white;\n}\n.position-item ._postion[data-v-e4cfbf8a] {\n    font-size: 0.42667rem;\n    color: #333;\n    margin-right: 0.26667rem;\n}\n.position-item ._type[data-v-e4cfbf8a] {\n    display: inline-block;\n    width: 0.8rem;\n    height: 0.4rem;\n    border: 1px solid #ff9d00;\n    color: #ff9d00;\n    background: #fff5e2;\n    line-height: 0.4rem;\n    width: 0.8rem;\n    text-align: center;\n    font-size: 0.24rem;\n    border-radius: 0.05333rem;\n}\n.position-item ._company[data-v-e4cfbf8a], .position-item ._fund[data-v-e4cfbf8a] {\n    font-size: 0.32rem;\n    color: #666;\n    margin-right: 0.4rem;\n}\n.position-item ._avator[data-v-e4cfbf8a] {\n    display: inline-block;\n    width: 0.64rem;\n    height: 0.64rem;\n    margin-right: 0.26667rem;\n}\n.position-item ._money[data-v-e4cfbf8a] {\n    font-size: 0.32rem;\n    color: #0085FF;\n}\n",""])},651:function(t,i,n){"use strict";n.r(i);var s=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"page g-flex g-fd-c"},[n("fp-title",{attrs:{title:"职位"}}),t._v(" "),n("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.loadMore,expression:"loadMore"}],staticClass:"g-col-1",attrs:{"infinite-scroll-disabled":"loading","infinite-scroll-distance":"15"}},t._l(t.info.data,function(i){return n("router-link",{key:i.id,staticClass:"position-item g-flex g-bb",attrs:{to:t.getUrl(i)}},[n("div",{staticClass:"g-col-1 g-tl"},[n("div",{staticClass:"g-ai-c g-flex g-m-b-20"},[n("span",{staticClass:"g-fl _postion"},[t._v(t._s(i.jobs_name))]),t._v(" "),n("span",{staticClass:"g-fl _type"},[t._v(t._s(i.jobs_nature_cn))])]),t._v(" "),n("div",{staticClass:"g-m-b-20"},[n("span",{staticClass:"_company"},[t._v(t._s(i.companyname))]),t._v(" "),n("span",{staticClass:"_fund"},[t._v(t._s(i.company_nature_cn))])]),t._v(" "),n("div",{staticClass:"g-m-b-20"},[n("mt-badge",{attrs:{size:"small",color:"#f6f7f8"}},[n("span",{staticClass:"g-c-999"},[t._v(t._s(i.district_cn))])]),t._v(" "),n("mt-badge",{attrs:{size:"small",color:"#f6f7f8"}},[n("span",{staticClass:"g-c-999"},[t._v(t._s(i.experience_cn||"经验不限"))])]),t._v(" "),n("mt-badge",{attrs:{size:"small",color:"#f6f7f8"}},[n("span",{staticClass:"g-c-999"},[t._v(t._s(i.education_cn||"学历不限"))])])],1),t._v(" "),n("div",{staticClass:"g-flex g-ai-c"},[n("img",{staticClass:"_avator",attrs:{src:i.avatars,alt:""}}),t._v(" "),n("span",[t._v(t._s(i.contact)+"  ·  "+t._s(i.contact_pos))])])]),t._v(" "),n("div",{staticClass:"_money"},[t._v(t._s(i.wage_cn))])])}))],1)};s._withStripped=!0;var a=n(8),e=n(5),o={components:{"fp-title":a.a,"fp-badge":e.Badge},computed:{info:function(){return this.$store.getters["position/position/listInfo"]}},created:function(){},data:function(){return{loading:!1}},methods:{getUrl:function(t){return"/position/"+t.id},loadMore:function(){this.info.current+1==this.info.count&&0!=this.info.current&&(this.loading=!0),this.$store.dispatch("position/position/position",{page:this.info.current+1})}}},r=(n(501),n(0)),c=Object(r.a)(o,s,[],!1,null,"e4cfbf8a",null);c.options.__file="views/position/index.vue";i.default=c.exports}}]);