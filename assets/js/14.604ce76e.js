(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{221:function(t,a,s){"use strict";s.r(a);var e=s(2),n=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"media-objects-媒体对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#media-objects-媒体对象","aria-hidden":"true"}},[t._v("#")]),t._v(" Media objects - 媒体对象")]),t._v(" "),s("h2",{attrs:{id:"说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#说明","aria-hidden":"true"}},[t._v("#")]),t._v(" 说明")]),t._v(" "),s("p",[t._v("本文为 "),s("code",[t._v("[MDN]CSS layout cookbook - Recipe: Media objects")]),t._v(" 的笔记.")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Layout_cookbook/Media_objects",target:"_blank",rel:"noopener noreferrer"}},[t._v("英文原文"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("通过本案例:")]),t._v(" "),s("ul",[s("li",[t._v("能初步了解 grid 布局特性")]),t._v(" "),s("li",[t._v("了解 Grid Cell , 如何组成 Grid Area")]),t._v(" "),s("li",[t._v("了解 grid-template-columns grid-template-rows grid-template-areas grid-area")])]),t._v(" "),s("h2",{attrs:{id:"codepen-示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#codepen-示例","aria-hidden":"true"}},[t._v("#")]),t._v(" codepen 示例")]),t._v(" "),s("p",[s("code",[t._v("建议使用 0.5x 查看效果")])]),t._v(" "),s("p",{staticClass:"codepen",staticStyle:{height:"400px","box-sizing":"border-box",display:"flex","align-items":"center","justify-content":"center",border:"2px solid",margin:"1em 0",padding:"1em"},attrs:{"data-height":"400","data-theme-id":"0","data-default-tab":"result","data-user":"qingfengwuyou","data-slug-hash":"NVqrMP","data-pen-title":"Media objects - css-cookbook"}},[s("span",[t._v("See the Pen "),s("a",{attrs:{href:"https://codepen.io/qingfengwuyou/pen/NVqrMP/"}},[t._v("\n  Media objects - css-cookbook")]),t._v(" by qingfengwuyou ("),s("a",{attrs:{href:"https://codepen.io/qingfengwuyou"}},[t._v("@qingfengwuyou")]),t._v(")\n  on "),s("a",{attrs:{href:"https://codepen.io"}},[t._v("CodePen")]),t._v(".")])]),t._v(" "),s("script",{attrs:{async:"",src:"https://static.codepen.io/assets/embed/ei.js"}}),t._v(" "),s("p",[s("a",{attrs:{href:"https://codepen.io/qingfengwuyou/pen/NVqrMP",target:"_blank",rel:"noopener noreferrer"}},[t._v("codepen"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"案例需求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#案例需求","aria-hidden":"true"}},[t._v("#")]),t._v(" 案例需求")]),t._v(" "),s("h3",{attrs:{id:"定义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#定义","aria-hidden":"true"}},[t._v("#")]),t._v(" 定义")]),t._v(" "),s("p",[s("code",[t._v("Media objects")]),t._v(": 媒体对象，是一种图文混排模式，用于构建复杂、重复的内容列表，由两栏构成。一边有图片，另一边有描述性文字。如贴子或微博")]),t._v(" "),s("h3",{attrs:{id:"需求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#需求","aria-hidden":"true"}},[t._v("#")]),t._v(" 需求")]),t._v(" "),s("ul",[s("li",[t._v("在小屏时，堆叠排列；在大屏时，左右两栏式布局")]),t._v(" "),s("li",[t._v("图像可以在左侧或右侧")]),t._v(" "),s("li",[t._v("列表中的图像大小不一")]),t._v(" "),s("li",[t._v("媒体对象可以嵌套")]),t._v(" "),s("li",[t._v("媒体对象应清除内容，无论哪一侧最高。")]),t._v(" "),s("li",[t._v("正文下方有可选的按钮操作区 (原文无,补充)")])]),t._v(" "),s("h2",{attrs:{id:"解析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解析","aria-hidden":"true"}},[t._v("#")]),t._v(" 解析")]),t._v(" "),s("h3",{attrs:{id:"左图右文布局"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#左图右文布局","aria-hidden":"true"}},[t._v("#")]),t._v(" 左图右文布局")]),t._v(" "),s("p",[s("code",[t._v("html 结构")])]),t._v(" "),s("div",{staticClass:"language-pug extra-class"},[s("pre",{pre:!0,attrs:{class:"language-pug"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[t._v(".media")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[t._v(".img")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[t._v("img"),s("span",{pre:!0,attrs:{class:"token attributes"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"balloon-sq2.jpg"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[t._v(".content")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[t._v("p")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[t._v(".footer")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("An optional footer goes here.")]),t._v("\n")])])]),s("p",[s("code",[t._v("css")])]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("img")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("max-width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".media")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" grid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-template-columns")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fit-content")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("200px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 1fr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-template-rows")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1fr auto"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-template-areas")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"image content"')]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"image footer"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-gap")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 20px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin-bottom")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 4em"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".img")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-area")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" image"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".content")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-area")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" content"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".footer")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-area")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" footer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分析","aria-hidden":"true"}},[t._v("#")]),t._v(" 分析")]),t._v(" "),s("p",[t._v("布局思路为将 media 分成两行两列,如下:")]),t._v(" "),s("table",[s("tbody",[s("tr",[s("td",[s("br"),s("br"),s("br"),t._v("图片区"),s("br"),s("br"),s("br"),s("br")]),t._v(" "),s("td",[t._v("　　　　正文区　　　")])]),t._v(" "),s("tr",[s("td",[t._v("图片区")]),t._v(" "),s("td",[t._v("　　　　页脚区　　　")])])])]),t._v(" "),s("p",[t._v("并将左侧上下两格, 合并为 "),s("code",[t._v("图片区 image")]),t._v("　，即四个格子分成三块区域")]),t._v(" "),s("h4",{attrs:{id:"注释"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注释","aria-hidden":"true"}},[t._v("#")]),t._v(" 注释")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("fit-content(200px)")]),t._v(": 表示如果内容超过 200px, 则最大为 200px , 如果不足 200px, 则为内容实际大小")]),t._v(" "),s("li",[s("code",[t._v("fr")]),t._v(": 等分剩余空间")])]),t._v(" "),s("h4",{attrs:{id:"样式解析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#样式解析","aria-hidden":"true"}},[t._v("#")]),t._v(" 样式解析")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("grid-template-columns: fit-content(200px) 1fr;\n")])])]),s("blockquote",[s("p",[t._v("分为两列, 第一列自适应不超过 200px , 第二列自动充满")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("grid-template-rows: 1fr auto;\n")])])]),s("blockquote",[s("p",[t._v("分为两行, 第一行自动充满, 第二行为内容实际高度")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('grid-template-areas:\n    "image content"\n    "image footer";\n')])])]),s("blockquote",[s("p",[t._v("将两行两列形成的四个格子, 分成三块区域: "),s("code",[t._v("image content footer")])]),t._v(" "),s("ul",[s("li",[t._v("区域支持中文")]),t._v(" "),s("li",[t._v("一对双引号指定的一行的单元格")]),t._v(" "),s("li",[t._v("重复网格区域的名称导致内容扩展到这些单元格, 如 image")]),t._v(" "),s("li",[t._v("可用 . – 点号代表一个空网格单元")]),t._v(" "),s("li",[t._v("网格区域一定要形成规整的矩形区域，什么L形，凹的或凸的形状都是不支持的，会认为是无效的属性值。")])])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("grid-gap: 20px;\n")])])]),s("blockquote",[s("p",[t._v("grid-gap 为 grid-row-gap 和 grid-column-gap 的缩写, 即行列间距为 20px")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("grid-area: image;\n")])])]),s("blockquote",[s("p",[t._v("grid子项只要使用grid-area属性指定其隶属于那个区域就可以了")])]),t._v(" "),s("h3",{attrs:{id:"左文右图布局"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#左文右图布局","aria-hidden":"true"}},[t._v("#")]),t._v(" 左文右图布局")]),t._v(" "),s("p",[s("code",[t._v("html 结构")])]),t._v(" "),s("div",{staticClass:"language-pug extra-class"},[s("pre",{pre:!0,attrs:{class:"language-pug"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[t._v(".media.media-flip")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[t._v(".img")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[t._v("img"),s("span",{pre:!0,attrs:{class:"token attributes"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"balloon-sq2.jpg"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[t._v(".content")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[t._v("p")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[t._v(".footer")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("An optional footer goes here.")]),t._v("\n")])])]),s("p",[s("code",[t._v("css")])]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".media-flip")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-template-columns")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1fr "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fit-content")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("250px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-template-areas")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"content image"')]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"footer image"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"分析-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分析-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 分析")]),t._v(" "),s("p",[s("code",[t._v(".media-flip")]),t._v(" 覆盖 image 的布局位置")]),t._v(" "),s("h3",{attrs:{id:"嵌套布局"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#嵌套布局","aria-hidden":"true"}},[t._v("#")]),t._v(" 嵌套布局")]),t._v(" "),s("p",[s("code",[t._v("html 结构")])]),t._v(" "),s("div",{staticClass:"language-pug extra-class"},[s("pre",{pre:!0,attrs:{class:"language-pug"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[t._v(".media")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[t._v(".img")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[t._v("img"),s("span",{pre:!0,attrs:{class:"token attributes"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"balloon-sq2.jpg"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[t._v(".content")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[t._v("p")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[t._v(".footer")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("An optional footer goes here.")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[t._v(".media")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[t._v(".img")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[t._v("img"),s("span",{pre:!0,attrs:{class:"token attributes"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"balloon-sq2.jpg"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[t._v(".content")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[t._v("p")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[t._v(".footer")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("An optional footer goes here.")]),t._v("\n")])])]),s("p",[t._v("如果不设置样式, 则效果如下:")]),t._v(" "),s("p",[s("code",[t._v("codepen 错误示例")])]),t._v(" "),s("p",[s("code",[t._v("建议使用 0.5x 查看效果")])]),t._v(" "),s("p",{staticClass:"codepen",staticStyle:{height:"265px","box-sizing":"border-box",display:"flex","align-items":"center","justify-content":"center",border:"2px solid",margin:"1em 0",padding:"1em"},attrs:{"data-height":"265","data-theme-id":"0","data-default-tab":"result","data-user":"qingfengwuyou","data-slug-hash":"joPOPN","data-pen-title":"Media objects (wrong) - CSS layout cookbook"}},[s("span",[t._v("See the Pen "),s("a",{attrs:{href:"https://codepen.io/qingfengwuyou/pen/joPOPN/"}},[t._v("\n  Media objects (wrong) - CSS layout cookbook")]),t._v(" by qingfengwuyou ("),s("a",{attrs:{href:"https://codepen.io/qingfengwuyou"}},[t._v("@qingfengwuyou")]),t._v(")\n  on "),s("a",{attrs:{href:"https://codepen.io"}},[t._v("CodePen")]),t._v(".")])]),t._v(" "),s("script",{attrs:{async:"",src:"https://static.codepen.io/assets/embed/ei.js"}}),t._v(" "),s("p",[s("a",{attrs:{href:"https://codepen.io/qingfengwuyou/pen/joPOPN",target:"_blank",rel:"noopener noreferrer"}},[t._v("codepen"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("因 "),s("code",[t._v("嵌套 media")]),t._v(" 并没有定义 "),s("code",[t._v("grid-area")]),t._v(", 则按规则, 当原有单元格,都已经有内容时,将新增一行,\n新增行也有两列, 因此 "),s("code",[t._v("嵌套 media")]),t._v(" 将自动排在新增行的第一列")]),t._v(" "),s("p",[t._v("要解决这个问题, 增加样式:")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".media > .media")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-column-start")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("code",[t._v("grid-column-start")]),t._v(" 是 "),s("code",[t._v("grid item")]),t._v(" 的属性, "),s("code",[t._v("2")]),t._v(" 表示从第2条线开始")]),t._v(" "),s("blockquote",[s("p",[t._v("使用特定的网格线确定 grid item 在网格内的位置。grid-column-start/grid-row-start 属性表示grid item的网格线的起始位置，grid-column-end/grid-row-end属性表示网格项的网格线的终止位置。\n用一个数字来指代相应编号的网格线\n如果没有声明 grid-column-end / grid-row-end，默认情况下，该网格项将跨越1个轨道。")])]),t._v(" "),s("p",[t._v("同时为了适应左文右图布局的嵌套, 要增加样式覆盖上面的样式:")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".media-flip > .media")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-column-start")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"特点分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#特点分析","aria-hidden":"true"}},[t._v("#")]),t._v(" 特点分析")]),t._v(" "),s("p",[t._v("使用 grid 布局实现是考虑:")]),t._v(" "),s("ul",[s("li",[t._v("页脚区实现比较方便, 可以保证页脚总是在整体的最下方, 即使图片与正文的高度不一")]),t._v(" "),s("li",[t._v("对同一列表,图片大小不一的情况适应更强, 通过 "),s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/fit-content",target:"_blank",rel:"noopener noreferrer"}},[t._v("fit-content()"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("通过 "),s("code",[t._v("grid-template-areas")]),t._v(" 很容易实现常规布局和镜像布局")])]),t._v(" "),s("h2",{attrs:{id:"降级处理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#降级处理","aria-hidden":"true"}},[t._v("#")]),t._v(" 降级处理")]),t._v(" "),s("p",[t._v("如果浏览器不支持 grid 布局时:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v(".img")]),t._v(" 增加左浮动")]),t._v(" "),s("li",[s("code",[t._v(".media")]),t._v(" 盒子清除浮动")])]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/mdn/css-examples/blob/master/css-cookbook/media-objects-fallback--download.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("降级原文示例"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"使用-flex-实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-flex-实现","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用 Flex 实现")]),t._v(" "),s("p",[s("code",[t._v("Bootstrap 4")]),t._v(" 是使用 Flex 实现")]),t._v(" "),s("p",[s("a",{attrs:{href:"http://code.z01.com/v4/components/media-object.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Bootstrap4 - Media object"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".media")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" -ms-flexbox"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("-ms-flex-align")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" start"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("align-items")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flex-start"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".media-body")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("-ms-flex")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("media"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("mr-3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("..."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("alt")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Generic placeholder image"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("media-body"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h5")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("mt-0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Media heading"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("样式很简洁,也支持嵌套,左右布局需要调整 "),s("code",[t._v("img")]),t._v(" 与 "),s("code",[t._v(".media-body")]),t._v(" 的 html 结构顺序, 不过没有页脚设置")])])},[],!1,null,null,null);a.default=n.exports}}]);