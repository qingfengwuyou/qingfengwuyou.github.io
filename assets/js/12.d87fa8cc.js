(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{218:function(t,a,s){"use strict";s.r(a);var n=s(2),r=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"padding"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#padding","aria-hidden":"true"}},[t._v("#")]),t._v(" padding")]),t._v(" "),s("h2",{attrs:{id:"说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#说明","aria-hidden":"true"}},[t._v("#")]),t._v(" 说明")]),t._v(" "),s("p",[t._v("本文大部分说明参考自 "),s("a",{attrs:{href:"https://demo.cssworld.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("《CSS世界》"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"padding-的特点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#padding-的特点","aria-hidden":"true"}},[t._v("#")]),t._v(" padding 的特点")]),t._v(" "),s("ul",[s("li",[t._v("不支持负值")]),t._v(" "),s("li",[t._v("百分比值无论是水平方向还是垂直方向，都是相对于宽度计算的")])]),t._v(" "),s("h2",{attrs:{id:"box-sizing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#box-sizing","aria-hidden":"true"}},[t._v("#")]),t._v(" box-sizing")]),t._v(" "),s("p",[t._v("见 "),s("router-link",{attrs:{to:"/css/basic/2019-05-08-width.html#box-sizing"}},[t._v("width 一文 box-sizing 小节")])],1),t._v(" "),s("p",[t._v("注意：即使设置了 "),s("code",[t._v("box-sizing: border-box")]),t._v("， 在特定情况下，比如 padding 足够大，width 也会改变。")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".box")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 80px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 20px 60px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("box-sizing")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" border-box"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("宽度表现为“首选最小宽度”，= 120px = 60px x 2")]),t._v(" "),s("h2",{attrs:{id:"内联元素垂直方向的-padding"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内联元素垂直方向的-padding","aria-hidden":"true"}},[t._v("#")]),t._v(" 内联元素垂直方向的 padding")]),t._v(" "),s("p",[s("code",[t._v("内联元素的特殊性")])]),t._v(" "),s("blockquote",[s("ul",[s("li",[t._v("没有可视宽度和可视高度的说法，即 clientWidth 和 clientHeight 永远是 0")]),t._v(" "),s("li",[t._v("垂直方向完全受 line-height 和 vertical-align 影响，padding 在视觉上没有改变间距（但实际上还是有影响，只是发生层叠，不影响布局）")]),t._v(" "),s("li",[t._v("对于非替换元素的内联元素，不仅 padding 不会加入行盒高度的计算， margin 和 border 也都是如此，都是不计算高度，但实际上在内联盒周围发生了渲染")])])]),t._v(" "),s("p",[t._v("内联元素 inline（非替换元素）垂直方向的 padding，实际上在垂直方向是发生了层叠：")]),t._v(" "),s("p",[t._v("见 "),s("a",{attrs:{href:"https://demo.cssworld.cn/4/2-1.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("《CSS世界》示例：内联元素垂直padding也有作用实例页面"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"内联元素垂直方向的-padding-应用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内联元素垂直方向的-padding-应用","aria-hidden":"true"}},[t._v("#")]),t._v(" 内联元素垂直方向的 padding 应用")]),t._v(" "),s("h3",{attrs:{id:"应用一：增加链接或按钮的点击区域大小"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#应用一：增加链接或按钮的点击区域大小","aria-hidden":"true"}},[t._v("#")]),t._v(" 应用一：增加链接或按钮的点击区域大小")]),t._v(" "),s("p",[t._v("可以在不影响当前布局的情况下，优雅地增加链接或按钮的点击区域大小")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("article a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" .25em 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"应用二：高度可控的分割线"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#应用二：高度可控的分割线","aria-hidden":"true"}},[t._v("#")]),t._v(" 应用二：高度可控的分割线")]),t._v(" "),s("p",[t._v("见 "),s("a",{attrs:{href:"https://demo.cssworld.cn/4/2-2.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("《CSS世界》示例：内联元素padding与高度可控的分隔线实例页面"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("登录"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("注册"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("a + a:before")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("content")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10px 3px 1px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin-left")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 6px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-left")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1px solid gray"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("要点：")]),t._v(" "),s("ul",[s("li",[t._v("要设置 "),s("code",[t._v("font-size: 0")]),t._v(" ，取消 font-size 对内联元素高度的影响， 完全由 padding 控制")]),t._v(" "),s("li",[t._v("padding 垂直方向的值就是分割线的高度")]),t._v(" "),s("li",[t._v("从基线往上是 padding-top, 基线往下是 padding-bottom")])]),t._v(" "),s("h2",{attrs:{id:"padding-的百分比值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#padding-的百分比值","aria-hidden":"true"}},[t._v("#")]),t._v(" padding 的百分比值")]),t._v(" "),s("p",[s("code",[t._v("padding 的百分比值无论是水平方向还是垂直方向，都是相对于宽度计算的")])]),t._v(" "),s("p",[t._v("利用 padding 的百分比值的特性，可轻松实现自适应的等比例矩形效果。")]),t._v(" "),s("p",[t._v("如正方形：")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("如宽高比为 2:1 的矩形：")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 25% 50%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("如网页常见的头图效果，在小屏下高度等比例缩小：")]),t._v(" "),s("p",[t._v("见 "),s("a",{attrs:{href:"https://demo.cssworld.cn/4/2-3.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("《CSS世界》示例：百分比padding值与等比例头图效果实例页面"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"padding-与图形绘制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#padding-与图形绘制","aria-hidden":"true"}},[t._v("#")]),t._v(" padding 与图形绘制")]),t._v(" "),s("p",[t._v("见 "),s("a",{attrs:{href:"https://demo.cssworld.cn/4/2-4.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("《CSS世界》示例：padding与图形生成实例页面"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("双层圆点效果用到")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("background-clip: content-box;\n")])])])])},[],!1,null,null,null);a.default=r.exports}}]);