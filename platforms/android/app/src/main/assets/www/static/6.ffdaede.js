(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{227:function(t,e,n){var i=n(229);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(2).default)("b91191a8",i,!1,{})},228:function(t,e,n){"use strict";var i=n(227);n.n(i).a},229:function(t,e,n){(t.exports=n(1)()).push([t.i,"\n.fp-input-contaienr[data-v-c4810c7c] {\n  width: 100%;\n  height: 1.33333rem;\n  border-bottom: 1px solid #e4e4e4;\n  font-size: 0.34667rem;\n}\n.fp-input-contaienr i[data-v-c4810c7c] {\n    color: #0085ff;\n}\n.fp-input-contaienr input[data-v-c4810c7c] {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n}\n",""])},230:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cp fp-input-contaienr g-flex-ac"},[t.icon?n("i",{staticClass:"iconfont g-m-r-20",class:"icon-"+t.icon}):t._t("left"),t._v(" "),n("input",{attrs:{placeholder:t.placeholder,type:t.type},domProps:{value:t.value},on:{input:t.handleInput}}),t._v(" "),t._t("right")],2)};i._withStripped=!0;var a={name:"Input",props:{icon:{type:String,default:""},placeholder:{type:String,default:"请输入"},type:{type:String,default:"text"},value:{type:String,default:""}},data:function(){return{}},methods:{handleInput:function(t){this.$emit("input",t.target.value)}}},s=(n(228),n(0)),o=Object(s.a)(a,i,[],!1,null,"c4810c7c",null);o.options.__file="components/Input/index.vue";e.a=o.exports},234:function(t,e,n){var i=n(428);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(2).default)("4a120048",i,!1,{})},427:function(t,e,n){"use strict";var i=n(234);n.n(i).a},428:function(t,e,n){(t.exports=n(1)()).push([t.i,"\n._mt-75[data-v-7caeb596] {\n  margin-top: 1rem;\n}\n.login-title[data-v-7caeb596] {\n  width: 80%;\n  font-weight: 6.66667rem;\n  margin-top: 1.53333rem;\n  margin-bottom: 1.33333rem;\n}\n",""])},575:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page g-bg-white"},[n("fp-title",{attrs:{title:"注册"}}),t._v(" "),n("div",{staticClass:"g-flex-cc g-fd-c"},[n("p",{staticClass:"g-fs-42 g-tl g-c-333 login-title"},[t._v("账号注册")]),t._v(" "),n("fp-input",{staticStyle:{width:"80%"},attrs:{placeholder:"请输入手机号/邮箱号",icon:"email"},model:{value:t.account,callback:function(e){t.account=e},expression:"account"}}),t._v(" "),n("fp-input",{staticStyle:{width:"80%"},attrs:{placeholder:"请输入密码",icon:"password",type:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),n("fp-input",{staticStyle:{width:"80%"},attrs:{placeholder:"请输入昵称",icon:"password"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),t._v(" "),n("button",{staticClass:"g-btn-blue _mt-75",on:{click:t.handleRegister}},[t._v("\n      立即注册\n    ")]),t._v(" "),n("router-link",{staticClass:"g-btn-blue-light g-m-t-40",attrs:{to:"login"}},[t._v("\n      已有账号立即登录\n    ")])],1)],1)};i._withStripped=!0;var a=n(8),s=n(230),o=n(66),c={components:{"fp-title":a.a,"fp-input":s.a},data:function(){return{account:"",username:"",password:""}},methods:{handleRegister:function(){var t=this,e=(this.$route.query||{}).utype;if(this.account.trim())if(this.password.trim())if(this.username.trim()){var n={password:this.password,username:this.username,utype:e};if(o.b.test(this.account))n=Object.assign({},n,{email:this.account});else{if(!o.c.test(this.account))return void this.$Toast({message:"请输入手机号或邮箱号",duration:1500});n=Object.assign({},n,{mobile:this.account})}this.$Indicator.open(),this.$store.dispatch("register/register",Object.assign({},n)).then(function(e){t.$store.dispatch("login/login",{username:t.username,password:t.password}).then(function(e){t.$Indicator.close(),t.$router.replace({path:"/register/complete"})}).catch(function(e){t.$Indicator.close()})}).catch(function(e){t.$Indicator.close()})}else this.$Toast({message:"请输入昵称",duration:1500});else this.$Toast({message:"请输入密码",duration:1500});else this.$Toast({message:"请输入手机号/邮箱号",duration:1500})}}},r=(n(427),n(0)),l=Object(r.a)(c,i,[],!1,null,"7caeb596",null);l.options.__file="views/register/index.vue";e.default=l.exports}}]);