(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{205:function(e,t,i){var a=i(245);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,i(2).default)("703503cc",a,!1,{})},244:function(e,t,i){"use strict";var a=i(205);i.n(a).a},245:function(e,t,i){(e.exports=i(1)()).push([e.i,"\ninput[data-v-b6efd87c] {\n  width: 5.33333rem;\n}\n._mr-36[data-v-b6efd87c] {\n  margin-right: 0.48rem;\n}\n._header[data-v-b6efd87c] {\n  height: 4rem;\n}\n.item[data-v-b6efd87c] {\n  height: 1.17333rem;\n  line-height: 1.17333rem;\n}\n.item input[data-v-b6efd87c] {\n    height: 1.06667rem;\n    line-height: 1.06667rem;\n}\n",""])},268:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"page"},[i("div",{staticClass:"g-bg-white g-pd-lr-20"},[i("div",{staticClass:"_header g-flex-cc"},[e._v("\n      input\n    ")]),e._v(" "),i("div",{staticClass:"item g-flex-ac g-jc-sb g-fs-26 g-bb"},[i("span",[e._v("姓名")]),e._v(" "),i("input",{directives:[{name:"fv-check",rawName:"v-fv-check",value:{rules:["required"],req_msg:"姓名不能为空"},expression:'{\n          rules: ["required"],\n          req_msg: "姓名不能为空"\n        }'},{name:"model",rawName:"v-model",value:e.fullname,expression:"fullname"}],staticClass:"g-tr _mr-36",attrs:{id:"user-fullname",placeholder:"请填写"},domProps:{value:e.fullname},on:{input:function(t){t.target.composing||(e.fullname=t.target.value)}}})]),e._v(" "),i("div",{staticClass:"item g-flex-ac g-jc-sb g-fs-26 g-bb"},[i("span",[e._v("性别")]),e._v(" "),i("div",{on:{click:e.handleSex}},[i("input",{directives:[{name:"fv-check",rawName:"v-fv-check",value:{rules:["required"],req_msg:"性别不能为空"},expression:'{\n            rules: ["required"],\n            req_msg: "性别不能为空"\n          }'},{name:"model",rawName:"v-model",value:e.sec_cn,expression:"sec_cn"}],staticClass:"g-tr",attrs:{id:"user-sec_cn",disabled:"",placeholder:"请选择"},domProps:{value:e.sec_cn},on:{input:function(t){t.target.composing||(e.sec_cn=t.target.value)}}}),e._v(" "),i("i",{staticClass:"iconfont icon-right g-c-999"})])]),e._v(" "),i("div",{staticClass:"item g-flex-ac g-jc-sb g-fs-26 g-bb"},[i("span",[e._v("参加工作时间")]),e._v(" "),i("div",{on:{click:e.handleJobTime}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.job_time_cn,expression:"job_time_cn"}],staticClass:"g-tr",attrs:{disabled:"",placeholder:"请选择"},domProps:{value:e.job_time_cn},on:{input:function(t){t.target.composing||(e.job_time_cn=t.target.value)}}}),e._v(" "),i("i",{staticClass:"iconfont icon-right g-c-999"})])]),e._v(" "),i("div",{staticClass:"item g-flex-ac g-jc-sb g-fs-26 g-bb"},[i("span",[e._v("出生年月")]),e._v(" "),i("div",{on:{click:e.handleBirth}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.birthdate_cn,expression:"birthdate_cn"}],staticClass:"g-tr",attrs:{disabled:"",placeholder:"请选择"},domProps:{value:e.birthdate_cn},on:{input:function(t){t.target.composing||(e.birthdate_cn=t.target.value)}}}),e._v(" "),i("i",{staticClass:"iconfont icon-right g-c-999"})])]),e._v(" "),i("div",{staticClass:"item g-flex-ac g-jc-sb g-fs-26 g-bb"},[i("span",[e._v("学历")]),e._v(" "),i("div",{on:{click:e.handleEdu}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.education_cn,expression:"education_cn"}],staticClass:"g-tr",attrs:{disabled:"",placeholder:"请选择"},domProps:{value:e.education_cn},on:{input:function(t){t.target.composing||(e.education_cn=t.target.value)}}}),e._v(" "),i("i",{staticClass:"iconfont icon-right g-c-999"})])]),e._v(" "),i("div",{staticClass:"item g-flex-ac g-jc-sb g-fs-26 g-bb"},[i("span",[e._v("所在城市")]),e._v(" "),i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.residence,expression:"residence"}],staticClass:"g-tr",attrs:{placeholder:"请选择"},domProps:{value:e.residence},on:{input:function(t){t.target.composing||(e.residence=t.target.value)}}}),e._v(" "),i("i",{staticClass:"iconfont icon-right g-c-999"})])]),e._v(" "),i("div",{staticClass:"item g-flex-ac g-jc-sb g-fs-26 g-bb"},[i("span",[e._v("联系电话")]),e._v(" "),i("input",{directives:[{name:"fv-check",rawName:"v-fv-check",value:{rules:["required","mobile"],req_msg:"联系电话不能为空"},expression:'{\n          rules: ["required", "mobile"],\n          req_msg: "联系电话不能为空"\n        }'},{name:"model",rawName:"v-model.number",value:e.telephone,expression:"telephone",modifiers:{number:!0}}],staticClass:"g-tr _mr-36",attrs:{id:"user-mobile",placeholder:"请填写"},domProps:{value:e.telephone},on:{input:function(t){t.target.composing||(e.telephone=e._n(t.target.value))},blur:function(t){e.$forceUpdate()}}})]),e._v(" "),i("div",{staticClass:"item g-flex-ac g-jc-sb g-fs-26"},[i("span",[e._v("联系邮箱")]),e._v(" "),i("input",{directives:[{name:"fv-check",rawName:"v-fv-check",value:{rules:["required","email"],req_msg:"联系邮箱不能为空"},expression:'{\n          rules: ["required", "email"],\n          req_msg: "联系邮箱不能为空"\n        }'},{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"g-tr _mr-36",attrs:{id:"user-email",placeholder:"请填写"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})])]),e._v(" "),i("div",{staticClass:"g-flex-cc"},[i("button",{staticClass:"g-btn-blue g-m-t-80",on:{click:e.handleSubmit}},[e._v("\n      完成\n    ")])])])};a._withStripped=!0;var n=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var i=[],a=!0,n=!1,s=void 0;try{for(var r,c=e[Symbol.iterator]();!(a=(r=c.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){n=!0,s=e}finally{try{!a&&c.return&&c.return()}finally{if(n)throw s}}return i}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),s=[{text:"初中",value:"66"},{text:"高中",value:"66"},{text:"中技",value:"67"},{text:"中专",value:"68"},{text:"大专",value:"69"},{text:"本科",value:"70"},{text:"硕士",value:"71"},{text:"博士",value:"72"}],r={components:{},data:function(){return{fullname:"",sex:"",sec_cn:"",job_time:"",job_time_cn:"",education:"",education_cn:"",telephone:"",email:"",birthdate:"",birthdate_cn:"",district:"",sdistrict:"",district_cn:""}},created:function(){this.$store.dispatch("local/address",{})},methods:{handleSex:function(){var e=this;this.picker||(this.picker=this.$createPicker({title:"",data:[[{text:"男",value:"1"},{text:"女",value:"2"}]],onSelect:function(t,i,a){var s=n(t,1)[0],r=n(a,1)[0];e.sec=s,e.sec_cn=r}})),this.picker.show()},handleJobTime:function(){var e=this;this.datePicker||(this.datePicker=this.$createDatePicker({title:"",min:new Date(1980,0,1),max:new Date(2030,11,30),value:new Date,onSelect:function(t,i,a){e.job_time=t.getTime()/1e3,e.job_time_cn=a.join("-")}})),this.datePicker.show()},handleBirth:function(){var e=this;this.birthPicker||(this.birthPicker=this.$createDatePicker({title:"",min:new Date(1990,0,1),max:new Date(2030,11,30),value:new Date,onSelect:function(t,i,a){e.birthdate=t.getTime()/1e3,e.birthdate_cn=a.join("-")}})),this.birthPicker.show()},handleEdu:function(){var e=this;this.eduPicker||(this.eduPicker=this.$createPicker({title:"",data:[s],onSelect:function(t,i,a){var s=n(t,1)[0],r=n(a,1)[0];e.education=s,e.education_cn=r}})),this.eduPicker.show()},handleSubmit:function(){var e=this;this.$fv.checkAll("user",function(t){0==t||e.$Toast({message:t[0].checker.message,duration:1500})})}}},c=(i(244),i(0)),l=Object(c.a)(r,a,[],!1,null,"b6efd87c",null);l.options.__file="views/mine/children/baseInfo.vue";t.default=l.exports}}]);