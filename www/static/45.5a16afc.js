(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{289:function(t,e,i){var n=i(539);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,i(2).default)("87c9fb2a",n,!1,{})},538:function(t,e,i){"use strict";var n=i(289);i.n(n).a},539:function(t,e,i){(t.exports=i(1)()).push([t.i,"\ninput[data-v-3bd9da6b] {\n  width: 5.33333rem;\n}\n._mr-36[data-v-3bd9da6b] {\n  margin-right: 0.48rem;\n}\n.item[data-v-3bd9da6b] {\n  height: 1.17333rem;\n  line-height: 1.17333rem;\n}\n.item input[data-v-3bd9da6b] {\n    height: 1.06667rem;\n    line-height: 1.06667rem;\n}\n",""])},550:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page v-resume-intention"},[i("fp-title",{attrs:{title:"求职意向",back:""}},[i("span",{staticClass:"g-c-blue",attrs:{slot:"right"},slot:"right"},[t._v("保存")])]),t._v(" "),i("div",{staticClass:"g-bg-white g-pd-lr-20"},[i("div",{staticClass:"item g-flex-ac g-jc-sb g-fs-26 g-bb"},[i("span",[t._v("求职状态")]),t._v(" "),i("div",{on:{click:t.handleCurrent}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.current_cn,expression:"current_cn"}],staticClass:"g-tr",attrs:{disabled:"",placeholder:"请选择"},domProps:{value:t.current_cn},on:{input:function(e){e.target.composing||(t.current_cn=e.target.value)}}}),t._v(" "),i("i",{staticClass:"iconfont icon-right g-c-999"})])]),t._v(" "),i("div",{staticClass:"item g-flex-ac g-jc-sb g-fs-26 g-bb"},[i("span",[t._v("工作性质")]),t._v(" "),i("div",{on:{click:t.handleJobNature}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.nature_cn,expression:"nature_cn"}],staticClass:"g-tr",attrs:{disabled:"",placeholder:"请选择"},domProps:{value:t.nature_cn},on:{input:function(e){e.target.composing||(t.nature_cn=e.target.value)}}}),t._v(" "),i("i",{staticClass:"iconfont icon-right g-c-999"})])]),t._v(" "),i("div",{staticClass:"item g-flex-ac g-jc-sb g-fs-26 g-bb"},[i("span",[t._v("期望职位")]),t._v(" "),i("div",{on:{click:t.handleJobs}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.intention_jobs,expression:"intention_jobs"}],staticClass:"g-tr",attrs:{disabled:"",placeholder:"请选择"},domProps:{value:t.intention_jobs},on:{input:function(e){e.target.composing||(t.intention_jobs=e.target.value)}}}),t._v(" "),i("i",{staticClass:"iconfont icon-right g-c-999"})])]),t._v(" "),i("div",{staticClass:"item g-flex-ac g-jc-sb g-fs-26 g-bb"},[i("span",[t._v("期望行业")]),t._v(" "),i("div",{on:{click:t.handleTrade}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.trade_cn,expression:"trade_cn"}],staticClass:"g-tr",attrs:{disabled:"",placeholder:"请选择"},domProps:{value:t.trade_cn},on:{input:function(e){e.target.composing||(t.trade_cn=e.target.value)}}}),t._v(" "),i("i",{staticClass:"iconfont icon-right g-c-999"})])]),t._v(" "),i("div",{staticClass:"item g-flex-ac g-jc-sb g-fs-26 g-bb"},[i("span",[t._v("工作城市")]),t._v(" "),i("div",{on:{click:t.handleAddr}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.district_cn,expression:"district_cn"}],staticClass:"g-tr",attrs:{disabled:"",placeholder:"请选择"},domProps:{value:t.district_cn},on:{input:function(e){e.target.composing||(t.district_cn=e.target.value)}}}),t._v(" "),i("i",{staticClass:"iconfont icon-right g-c-999"})])]),t._v(" "),i("div",{staticClass:"item g-flex-ac g-jc-sb g-fs-26 g-bb"},[i("span",[t._v("薪资要求")]),t._v(" "),i("div",{on:{click:t.handleWage}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.wage_cn,expression:"wage_cn"}],staticClass:"g-tr",attrs:{disabled:"",placeholder:"请选择"},domProps:{value:t.wage_cn},on:{input:function(e){e.target.composing||(t.wage_cn=e.target.value)}}}),t._v(" "),i("i",{staticClass:"iconfont icon-right g-c-999"})])])])],1)};n._withStripped=!0;var a={components:{"fp-title":i(8).a},data:function(){return{current_cn:"",nature_cn:"",trade_cn:"",wage_cn:"",intention_jobs:"",district:"",sdistrict:"",district_cn:""}},computed:{addrData:function(){return this.$store.getters["local/address"]}},created:function(){this.$store.dispatch("local/address",{})},methods:{handleCurrent:function(){this.currentPicker||(this.currentPicker=this.$createPicker({title:"",data:this.addrData,onSelect:function(t,e,i){}})),this.currentPicker.show()},handleJobNature:function(){this.jobNaturePicker||(this.jobNaturePicker=this.$createPicker({title:"",data:this.addrData,onSelect:function(t,e,i){}})),this.jobNaturePicker.show()},handleAddr:function(){var t=this;this.addrPicker||(this.addrPicker=this.$createCascadePicker({title:"",data:this.addrData,onSelect:function(e,i,n){t.district_cn=n.join("/"),t.district=e[0],t.sdistrict=e[0]}})),this.addrPicker.show()},handleJobs:function(){},handleTrade:function(){},handleWage:function(){},handleSubmit:function(){var t=this;this.$fv.checkAll("intention",function(e){0==e||t.$Toast({message:e[0].checker.message,duration:1500})})}}},s=(i(538),i(0)),c=Object(s.a)(a,n,[],!1,null,"3bd9da6b",null);c.options.__file="views/resume/children/detail/intention.vue";e.default=c.exports}}]);