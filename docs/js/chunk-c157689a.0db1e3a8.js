(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c157689a"],{"0366":function(e,t,n){var o=n("1c0b");e.exports=function(e,t,n){if(o(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,o){return e.call(t,n,o)};case 3:return function(n,o,r){return e.call(t,n,o,r)}}return function(){return e.apply(t,arguments)}}},"159b":function(e,t,n){var o=n("da84"),r=n("fdbc"),s=n("17c2"),i=n("9112");for(var a in r){var c=o[a],l=c&&c.prototype;if(l&&l.forEach!==s)try{i(l,"forEach",s)}catch(u){l.forEach=s}}},"17c2":function(e,t,n){"use strict";var o=n("b727").forEach,r=n("a640"),s=n("ae40"),i=r("forEach"),a=s("forEach");e.exports=i&&a?[].forEach:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}},4160:function(e,t,n){"use strict";var o=n("23e7"),r=n("17c2");o({target:"Array",proto:!0,forced:[].forEach!=r},{forEach:r})},"692a":function(e,t,n){},"70e9":function(e,t,n){"use strict";n("692a")},8719:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:e.fullscreenLoading,expression:"fullscreenLoading",modifiers:{fullscreen:!0,lock:!0}}],attrs:{id:"user"}},[n("el-row",[n("el-col",{attrs:{span:24}},[n("el-input",{attrs:{placeholder:"请输入TOKEN进行初始化"},model:{value:e.token,callback:function(t){e.token=t},expression:"token"}},[n("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.searchUser},slot:"append"},[e._v("查询")])],1)],1),n("el-col",{staticStyle:{"padding-top":"30px"}},[n("div",{staticClass:"select"},[n("el-form",{ref:"form",attrs:{"label-width":"100px"}},[n("el-form-item",{attrs:{label:"头像"}},[n("el-avatar",{attrs:{size:50,src:e.userInfo.avatar_url}})],1),n("el-form-item",{attrs:{label:"用户名"}},[n("el-input",{attrs:{disabled:!0},model:{value:e.userInfo.login,callback:function(t){e.$set(e.userInfo,"login",t)},expression:"userInfo.login"}})],1),n("el-form-item",{attrs:{label:"地址"}},[n("el-input",{attrs:{disabled:!0},model:{value:e.userInfo.location,callback:function(t){e.$set(e.userInfo,"location",t)},expression:"userInfo.location"}})],1),n("el-form-item",{attrs:{label:"选择仓库"}},[n("el-select",{attrs:{placeholder:"请选择"},on:{change:e.selectRepos},model:{value:e.upForm.repos,callback:function(t){e.$set(e.upForm,"repos",t)},expression:"upForm.repos"}},e._l(e.reposList,(function(e,t){return n("el-option",{key:t,attrs:{label:e.name,value:e.name}})})),1)],1),n("el-form-item",{attrs:{label:"选择目录"}},[n("el-select",{attrs:{placeholder:"请选择"},model:{value:e.upForm.content,callback:function(t){e.$set(e.upForm,"content",t)},expression:"upForm.content"}},e._l(e.reposContents,(function(e,t){return n("el-option",{key:t,attrs:{label:e.name,value:e.val}})})),1)],1),n("el-form-item",{attrs:{label:"自定义目录"}},[n("el-checkbox",{model:{value:e.upForm.iscant,callback:function(t){e.$set(e.upForm,"iscant",t)},expression:"upForm.iscant"}},[e._v("点击使用自定义目录 -- 功能未完善，谨慎使用！")]),n("el-input",{attrs:{disabled:!e.upForm.iscant},model:{value:e.upForm.delimit,callback:function(t){e.$set(e.upForm,"delimit",t)},expression:"upForm.delimit"}})],1),n("el-form-item",{attrs:{label:"当前目录"}},[e.upForm.iscant?n("span",[e._v(" "+e._s("/repos/"+e.userInfo.login+"/"+e.upForm.repos+"/contents"+e.upForm.delimit)+" ")]):n("span",[e._v(" "+e._s("/repos/"+e.userInfo.login+"/"+e.upForm.repos+"/contents"+e.upForm.content)+" ")])]),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:e.setUploadInfo}},[e._v("确认设置")])],1)],1)],1)])],1)],1)},r=[],s=(n("4160"),n("b0c0"),n("159b"),n("c24f")),i={data:function(){return{fullscreenLoading:!1,token:"",userInfo:{},reposList:[],reposContents:[],upForm:{iscant:!1,repos:"",content:"",delimit:""}}},created:function(){this.upForm=this.$store.state.uploadInfo,this.token=this.$store.state.token,this.userInfo=this.$store.state.userInfo,localStorage.setItem("token",this.$store.state.token),this.userInfo.login&&this.getRepos(this.userInfo.login),""!=this.upForm.repos&&this.selectRepos(this.upForm.repos)},methods:{setUploadInfo:function(){this.$store.commit("setUploadInfo",this.upForm),this.$message.success("设置成功")},searchUser:function(){var e=this;this.fullscreenLoading=!0,localStorage.setItem("token",this.token),Object(s["b"])().then((function(t){e.fullscreenLoading=!1,e.userInfo=t,e.$store.commit("setToken",e.token),e.$store.commit("setUserInfo",t),e.getRepos(t.login)})).catch((function(t){e.fullscreenLoading=!1,console.log(t)}))},getRepos:function(e){var t=this;Object(s["c"])(e).then((function(e){t.reposList=e})).catch((function(e){console.log(e)}))},selectRepos:function(e){var t=this;Object(s["a"])(this.userInfo.login,e).then((function(e){var n=[{name:"/",val:"/"}];e.forEach((function(e){"dir"==e.type&&n.push({name:e.name,val:"/"+e.path})})),t.reposContents=n})).catch((function(e){console.log(e)}))}}},a=i,c=(n("70e9"),n("2877")),l=Object(c["a"])(a,o,r,!1,null,null,null);t["default"]=l.exports},a640:function(e,t,n){"use strict";var o=n("d039");e.exports=function(e,t){var n=[][e];return!!n&&o((function(){n.call(null,t||function(){throw 1},1)}))}},ae40:function(e,t,n){var o=n("83ab"),r=n("d039"),s=n("5135"),i=Object.defineProperty,a={},c=function(e){throw e};e.exports=function(e,t){if(s(a,e))return a[e];t||(t={});var n=[][e],l=!!s(t,"ACCESSORS")&&t.ACCESSORS,u=s(t,0)?t[0]:c,f=s(t,1)?t[1]:void 0;return a[e]=!!n&&!r((function(){if(l&&!o)return!0;var e={length:-1};l?i(e,1,{enumerable:!0,get:c}):e[1]=1,n.call(e,u,f)}))}},b727:function(e,t,n){var o=n("0366"),r=n("44ad"),s=n("7b0b"),i=n("50c4"),a=n("65f0"),c=[].push,l=function(e){var t=1==e,n=2==e,l=3==e,u=4==e,f=6==e,p=7==e,m=5==e||f;return function(d,h,b,v){for(var g,L,k=s(d),S=r(k),F=o(h,b,3),I=i(S.length),x=0,y=v||a,E=t?y(d,I):n||p?y(d,0):void 0;I>x;x++)if((m||x in S)&&(g=S[x],L=F(g,x,k),e))if(t)E[x]=L;else if(L)switch(e){case 3:return!0;case 5:return g;case 6:return x;case 2:c.call(E,g)}else switch(e){case 4:return!1;case 7:c.call(E,g)}return f?-1:l||u?u:E}};e.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterOut:l(7)}},c24f:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return i}));n("99af");var o=n("bb36");function r(e){return Object(o["a"])({url:"/user",method:"get",headers:{Authorization:"token ".concat(e)}})}function s(e){return Object(o["a"])({url:"/users/".concat(e,"/repos"),method:"get"})}function i(e,t){return Object(o["a"])({url:"/repos/".concat(e,"/").concat(t,"/contents"),method:"get"})}},fdbc:function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-c157689a.0db1e3a8.js.map