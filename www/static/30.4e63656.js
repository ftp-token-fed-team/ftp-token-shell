(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{268:function(e,a,t){var s=t(496);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);(0,t(2).default)("5830d621",s,!1,{})},495:function(e,a,t){"use strict";var s=t(268);t.n(s).a},496:function(e,a,t){(e.exports=t(1)()).push([e.i,"\n.v-mine-add-address ._mr-36[data-v-650227f6] {\n  margin-right: 0.48rem;\n}\n.v-mine-add-address .item[data-v-650227f6] {\n  height: 1.17333rem;\n  line-height: 1.17333rem;\n}\n.v-mine-add-address .item input[data-v-650227f6] {\n    height: 1.06667rem;\n    line-height: 1.06667rem;\n}\n",""])},561:function(e,a,t){"use strict";t.r(a);var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"page v-mine-add-address"},[t("fp-title",{attrs:{title:e.data,back:""}}),e._v(" "),t("div",{staticClass:"g-pd-l-20 g-bg-white"},[t("div",{staticClass:"item g-flex-ac g-jc-sb g-fs-26 g-bb"},[t("span",[e._v("地址备注")]),e._v(" "),t("input",{directives:[{name:"fv-check",rawName:"v-fv-check",value:{rules:["required"],req_msg:"地址备注不能为空"},expression:'{\n          rules: ["required"],\n          req_msg: "地址备注不能为空"\n        }'},{name:"model",rawName:"v-model",value:e.remark,expression:"remark"}],staticClass:"g-tr _mr-36",attrs:{id:"addr-remark",placeholder:"请输入地址备注"},domProps:{value:e.remark},on:{input:function(a){a.target.composing||(e.remark=a.target.value)}}})]),e._v(" "),t("div",{staticClass:"item g-flex-ac g-jc-sb g-fs-26"},[t("span",[e._v("地址")]),e._v(" "),t("input",{directives:[{name:"fv-check",rawName:"v-fv-check",value:{rules:["required"],req_msg:"地址不能为空"},expression:'{\n          rules: ["required"],\n          req_msg: "地址不能为空"\n        }'},{name:"model",rawName:"v-model",value:e.address,expression:"address"}],staticClass:"g-tr _mr-36",attrs:{id:"addr-address",placeholder:"请输入地址"},domProps:{value:e.address},on:{input:function(a){a.target.composing||(e.address=a.target.value)}}})])]),e._v(" "),t("div",{staticClass:"g-flex-cc"},[t("button",{staticClass:"g-btn-blue g-m-t-80",on:{click:e.handleSubmit}},[e._v("\n      确定\n    ")])])],1)};s._withStripped=!0;var r={name:"MineAddress",components:{"fp-title":t(8).a},data:function(){return{title:"添加地址",remark:"",address:""}},created:function(){var e=this.$route.params.type;this.data="etc"===e?"添加ETC地址":"添加EOS地址"},methods:{handleSubmit:function(){var e=this;this.$fv.checkAll("addr",function(a){0==a?(e.$Indicator.open(),e.$store.dispatch("mine/address/add",{address:e.address,remark:e.remark}).then(function(a){e.$Indicator.close(),e.$router.back()}).catch(function(a){e.$Indicator.close()})):e.$Toast({message:a[0].checker.message,duration:1500})})}}},n=(t(495),t(0)),i=Object(n.a)(r,s,[],!1,null,"650227f6",null);i.options.__file="views/mine/children/addAddress.vue";a.default=i.exports}}]);