(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"2a9f":function(t,e,i){"use strict";i("ddda")},ddda:function(t,e,i){},f820:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("el-steps",{attrs:{active:t.active,"finish-status":"success","align-center":""}},[i("el-step",{attrs:{title:"第一步：创建一个GitHub仓库",description:""}},[t._v("123")]),i("el-step",{attrs:{title:"第二步：拿到GitHub的Token"}},[t._v("33")]),i("el-step",{attrs:{title:"第三步：使用"}},[t._v("555")])],1),i("div",{staticClass:"cont"},[0==t.active?i("Step1"):t._e(),1==t.active?i("Step2"):t._e(),2==t.active?i("Step3"):t._e(),3==t.active?i("div",[i("h2",[t._v("OK！恭喜你完成使用教程！")]),i("p",[i("el-link",{attrs:{href:"https://github.com/WishMelz",type:"primary"}},[t._v(" 作者： WishMelz")])],1),i("p",[i("el-link",{attrs:{href:"https://github.com/WishMelz/imgurl",type:"primary"}},[t._v(" 仓库地址： https://github.com/WishMelz/imgurl 欢迎点赞")])],1)]):t._e()],1),i("div",{staticStyle:{"text-align":"center","padding-top":"20px"}},[i("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.next(2)}}},[t._v("上一步")]),i("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.next(1)}}},[t._v("下一步")])],1)],1)},n=[],a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h3",[t._v("创建一个图床仓库")]),i("p",[t._v("创库创建完成之后设置新建一个Releases")]),i("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://cdn.jsdelivr.net/gh/WishMelz/file/image/repo1.png",alt:"img"}}),i("br"),i("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://cdn.jsdelivr.net/gh/WishMelz/file/image/repo2.png",alt:"img"}}),i("p",[t._v("随便输入一个版本号，回车即可！！！")])])}],l={},c=l,p=i("2877"),o=Object(p["a"])(c,a,r,!1,null,null,null),h=o.exports,v=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},u=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h3",[t._v("拿到TOKEN")]),i("p",[t._v(" 1.打开链接 "),i("a",{attrs:{target:"_blank",href:"https://github.com/settings/tokens"}},[t._v("https://github.com/settings/tokens")]),t._v(" 点击 Generate new token 按钮 ")]),i("p",[t._v(" 2.在打开的 "),i("b",[t._v("New personal access token")]),t._v(' 中选中"repo"和"user",如下所示 ')]),i("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/WishMelz/file/image/getToken.png",alt:""}}),i("p",[t._v("3.然后点击 Generate token 按钮，即可生成一个token，如下：")]),i("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/WishMelz/file/image/token.png",alt:""}}),i("p",{staticStyle:{color:"red"}},[i("em",[t._v("​ 生成的TOKEN只会显示一次。记得保存！！")])])])}],m={},g=m,_=Object(p["a"])(g,v,u,!1,null,null,null),f=_.exports,d=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},b=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h3",[t._v("使用")]),i("p",[t._v("先设置用户token和仓库路劲")]),i("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://cdn.jsdelivr.net/gh/WishMelz/file/image/set.png",alt:"img"}}),i("p",[t._v("使用")]),i("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://cdn.jsdelivr.net/gh/WishMelz/file/image/0f0765da7cbf3fbd482134d06a13d822.png",alt:"img"}}),i("p",[t._v("列表")]),i("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://cdn.jsdelivr.net/gh/WishMelz/file/image/4af4a12a816480b138bbd2ea27871438.png",alt:"img"}})])}],k={},z=k,y=Object(p["a"])(z,d,b,!1,null,null,null),S=y.exports,j={components:{Step1:h,Step2:f,Step3:S},data:function(){return{active:3}},methods:{next:function(t){if(1==t){if(3==this.active)return;this.active++,3==this.active&&this.$message.success("恭喜你完成配置")}else{if(0==this.active)return;this.active--}}}},M=j,W=(i("2a9f"),Object(p["a"])(M,s,n,!1,null,"bb760a0a",null));e["default"]=W.exports}}]);
//# sourceMappingURL=about.980afd22.js.map