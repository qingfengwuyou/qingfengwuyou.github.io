(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{213:function(t,e,_){"use strict";_.r(e);var v=_(2),a=Object(v.a)({},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"盒模型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#盒模型","aria-hidden":"true"}},[t._v("#")]),t._v(" 盒模型")]),t._v(" "),_("h2",{attrs:{id:"说明"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#说明","aria-hidden":"true"}},[t._v("#")]),t._v(" 说明")]),t._v(" "),_("p",[t._v("本文部分说明参考自 "),_("a",{attrs:{href:"https://demo.cssworld.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("《CSS世界》"),_("OutboundLink")],1)]),t._v(" "),_("h2",{attrs:{id:"盒子分类"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#盒子分类","aria-hidden":"true"}},[t._v("#")]),t._v(" 盒子分类")]),t._v(" "),_("p",[t._v("盒子类型分为两类: "),_("code",[t._v("块级盒子")]),t._v(" "),_("code",[t._v("内联盒子")])]),t._v(" "),_("p",[t._v("但每个元素由两种盒子组成: 外在盒子 与 容器盒子(内在盒子)")]),t._v(" "),_("p",[t._v("外在盒子与容器盒子的盒子类型均可为 "),_("code",[t._v("块级盒子")]),t._v(" "),_("code",[t._v("内联盒子")]),t._v(" 其中一种")]),t._v(" "),_("p",[t._v("因为就会有四种不同的组合")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("外在盒子")]),t._v(" "),_("th",[t._v("容器盒子")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("形式")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("块级盒子")]),t._v(" "),_("td",[t._v("块级盒子")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("display: block")])]),t._v(" "),_("tr",[_("td",[t._v("内联盒子")]),t._v(" "),_("td",[t._v("内联盒子")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("display: inline")])]),t._v(" "),_("tr",[_("td",[t._v("块级盒子")]),t._v(" "),_("td",[t._v("内联盒子")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("-")])]),t._v(" "),_("tr",[_("td",[t._v("内联盒子")]),t._v(" "),_("td",[t._v("块级盒子")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("display: inline-block")])])])]),t._v(" "),_("p",[_("code",[t._v("外在盒子")])]),t._v(" "),_("p",[t._v("用于区分盒子是与上一个盒子是同一行("),_("code",[t._v("内联盒子")]),t._v("),还是要换行("),_("code",[t._v("块级盒子")]),t._v(")")]),t._v(" "),_("p",[_("code",[t._v("容器盒子")])]),t._v(" "),_("p",[t._v("负责宽高与内容呈现, 不允许设置宽高("),_("code",[t._v("内联盒子")]),t._v("), 可设置宽高("),_("code",[t._v("块级盒子")]),t._v(")")]),t._v(" "),_("h2",{attrs:{id:"display-属性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#display-属性","aria-hidden":"true"}},[t._v("#")]),t._v(" "),_("code",[t._v("display")]),t._v(" 属性")]),t._v(" "),_("p",[_("a",{attrs:{href:"http://www.ayqy.net/doc/css2-1/visuren.html#display-prop",target:"_blank",rel:"noopener noreferrer"}},[t._v("display 属性规范"),_("OutboundLink")],1)]),t._v(" "),_("p",[_("code",[t._v("display")]),t._v(" 的初始值是 "),_("code",[t._v("inline")]),t._v("，但浏览器(用户代理默认样式表)一般会对常见的 HTML 元素设置 "),_("code",[t._v("display")])]),t._v(" "),_("p",[t._v("可参考:")]),t._v(" "),_("p",[_("a",{attrs:{href:"http://www.ayqy.net/doc/css2-1/sample.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTML 4的默认样式表"),_("OutboundLink")],1)]),t._v(" "),_("h2",{attrs:{id:"替换元素与非替换元素"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#替换元素与非替换元素","aria-hidden":"true"}},[t._v("#")]),t._v(" 替换元素与非替换元素")]),t._v(" "),_("p",[t._v("替换元素特指:")]),t._v(" "),_("ul",[_("li",[t._v("img")]),t._v(" "),_("li",[t._v("input")]),t._v(" "),_("li",[t._v("textarea")]),t._v(" "),_("li",[t._v("select")]),t._v(" "),_("li",[t._v("video")]),t._v(" "),_("li",[t._v("object")])]),t._v(" "),_("p",[t._v("因为上述元素的具体显示内容要根据元素的属性决定(如 src )，而不是元素标签的内容。例如浏览器会根据标签的 src 属性的值来读取图片信息并显示出来，而如果查看 HTML 代码，则看不到图片的实际内容；又例如根据标签的 type 属性来决定是显示输入框，还是单选按钮等。")]),t._v(" "),_("p",[t._v("替换元素的盒子一般都是内联盒子，但基本可视做 "),_("code",[t._v("display: inline-block")]),t._v(" , 与普通的行内元素不同, 均可设置宽高")])])},[],!1,null,null,null);e.default=a.exports}}]);