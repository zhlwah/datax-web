(window["webpackJsonp_Data Link"]=window["webpackJsonp_Data Link"]||[]).push([["chunk-434632c4"],{"461f":function(t,e,n){"use strict";n("b1cb")},ab3b:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("split-pane",{attrs:{split:"vertical"},on:{resize:t.resize}},[n("template",{slot:"paneL"},[n("el-input",{attrs:{type:"textarea",rows:36,placeholder:"请输入内容",clearable:""},on:{change:t.originChange},model:{value:t.originText,callback:function(e){t.originText=e},expression:"originText"}})],1),t._v(" "),n("template",{slot:"paneR"},[n("div",{staticClass:"editor-container"},[n("JSONEditor",{attrs:{json:t.formatedValue}})],1)])],2)],1)},i=[],o=n("19ab"),r=n.n(o),s=n("33c3"),c={name:"JsonFormat",components:{splitPane:r.a,JSONEditor:s["a"]},data:function(){return{originText:"",formatedValue:""}},watch:{originText:function(t){try{this.formatedValue=JSON.parse(t)}catch(e){}}},methods:{resize:function(){},originChange:function(t){}}},l=c,u=(n("461f"),n("2877")),p=Object(u["a"])(l,a,i,!1,null,"7505e034",null);e["default"]=p.exports},b1cb:function(t,e,n){}}]);