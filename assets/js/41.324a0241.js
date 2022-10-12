(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{616:function(s,e,t){"use strict";t.r(e);var n=t(3),a=Object(n.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("最近看element ui官方文档，发现el-input有个属性：autofocus，它的属性介绍如下：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/zhaoshier/blogimage/raw/master/images/autofocus.png",alt:"autofocus属性介绍"}})]),s._v(" "),t("p",[s._v("但是element中的el-input组件外面还有其他组件, 导致autofocus失效, 只能手动调用focus方法来聚集。")]),s._v(" "),t("p",[s._v("根据这个问题，可通过以下方式来解决。")]),s._v(" "),t("h3",{attrs:{id:"_1-vue指令方式-directives"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-vue指令方式-directives"}},[s._v("#")]),s._v(" 1.vue指令方式（directives）")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("<el-input v-focus></el-input>\n\ndirectives: {\n  // 注册一个局部的自定义指令 v-focus\n  focus: {\n    // 指令的定义\n    inserted: function (el) {\n      // 聚焦元素\n      el.querySelector('input').focus()\n    }\n  }\n},\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("h3",{attrs:{id:"_2-vue的ref属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-vue的ref属性"}},[s._v("#")]),s._v(" 2.vue的ref属性")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('<el-input v-model="input" placeholder="请输入内容" ref="input"></el-input>\n1\nthis.$nextTick(() => {\n     this.$refs.input.focus()\n})\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])])])}),[],!1,null,null,null);e.default=a.exports}}]);