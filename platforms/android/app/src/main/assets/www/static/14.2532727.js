(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{250:function(e,n,o){var t=o(458);"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);(0,o(2).default)("72922748",t,!1,{})},457:function(e,n,o){"use strict";var t=o(250);o.n(t).a},458:function(e,n,o){(e.exports=o(1)()).push([e.i,"\n.course-page[data-v-75beb4f7] {\n  height: 100%;\n}\n",""])},584:function(e,n,o){"use strict";o.r(n);var t=function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"page course-page"},[this._v("course"+this._s(this.RYToken))])};t._withStripped=!0;var s={name:"Course",computed:{RYToken:function(){return"QZDzdFiPV/vtb08cEzXHZCThw3GOx2PnWrpUXw2WwPAx/LTd7ezYJfeOgRjtYsdcR/IP83HHbQii5JeQ5juTGw=="},appKey:function(){return this.$store.getters["college/course/appKey"]}},mounted:function(){var e=this;this.$store.dispatch("college/course/getRYToken").then(function(){RongIMLib.RongIMClient.init(e.appKey),RongIMClient.setConnectionStatusListener({onChanged:e.connectHandle}),RongIMClient.setOnReceiveMessageListener({onReceived:e.receiveHandle}),RongIMClient.connect(e.RYToken,{onSuccess:e.connectSuccess,onTokenIncorrect:function(){},onError:function(e){switch(e){case RongIMLib.ErrorCode.TIMEOUT:"超时";break;case RongIMLib.ConnectionState.UNACCEPTABLE_PAROTOCOL_VERSION:"不可接受的协议版本";break;case RongIMLib.ConnectionState.IDENTIFIER_REJECTED:"appkey不正确";break;case RongIMLib.ConnectionState.SERVER_UNAVAILABLE:"服务器不可用"}}})})},methods:{receiveHandle:function(e){switch(e.messageType){case RongIMClient.MessageType.TextMessage:case RongIMClient.MessageType.VoiceMessage:case RongIMClient.MessageType.ImageMessage:case RongIMClient.MessageType.DiscussionNotificationMessage:case RongIMClient.MessageType.LocationMessage:case RongIMClient.MessageType.RichContentMessage:case RongIMClient.MessageType.InformationNotificationMessage:case RongIMClient.MessageType.ContactNotificationMessage:case RongIMClient.MessageType.ProfileNotificationMessage:case RongIMClient.MessageType.CommandNotificationMessage:case RongIMClient.MessageType.CommandMessage:case RongIMClient.MessageType.UnknownMessage:}},connectHandle:function(e){switch(e){case RongIMLib.ConnectionStatus.CONNECTED:case RongIMLib.ConnectionStatus.CONNECTING:case RongIMLib.ConnectionStatus.DISCONNECTED:case RongIMLib.ConnectionStatus.KICKED_OFFLINE_BY_OTHER_CLIENT:case RongIMLib.ConnectionStatus.DOMAIN_INCORRECT:case RongIMLib.ConnectionStatus.NETWORK_UNAVAILABLE:}},reconnect:function(){var e={onSuccess:this.connectSuccess,onTokenIncorrect:function(){},onError:function(e){}};RongIMClient.reconnect(e,{auto:!0,url:"cdn.ronghub.com/RongIMLib-2.2.6.min.js",rate:[100,1e3,3e3,6e3,1e4]})},connectSuccess:function(e){}}},c=(o(457),o(0)),i=Object(c.a)(s,t,[],!1,null,"75beb4f7",null);i.options.__file="views/college/children/course/index.vue";n.default=i.exports}}]);