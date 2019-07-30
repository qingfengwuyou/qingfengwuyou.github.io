(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{281:function(t,e,v){"use strict";v.r(e);var _=v(38),i=Object(_.a)({},function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"width"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#width","aria-hidden":"true"}},[t._v("#")]),t._v(" width")]),t._v(" "),v("h2",{attrs:{id:"说明"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#说明","aria-hidden":"true"}},[t._v("#")]),t._v(" 说明")]),t._v(" "),v("p",[t._v("本文大部分说明参考自 "),v("a",{attrs:{href:"https://demo.cssworld.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("《CSS世界》"),v("OutboundLink")],1)]),t._v(" "),v("h2",{attrs:{id:"要点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#要点","aria-hidden":"true"}},[t._v("#")]),t._v(" 要点")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("外部尺寸")]),t._v(" 与 "),v("code",[t._v("内部尺寸")])]),t._v(" "),v("li",[t._v("width 与 "),v("code",[t._v("包含块")])]),t._v(" "),v("li",[v("code",[t._v("width: auto")]),t._v(" 与 "),v("code",[t._v("width: 100%")])]),t._v(" "),v("li",[t._v("替换元素的特殊表现")]),t._v(" "),v("li",[t._v("box-sizing 如何影响 width")]),t._v(" "),v("li",[t._v("width 的布局原则")])]),t._v(" "),v("h2",{attrs:{id:"关键名词"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#关键名词","aria-hidden":"true"}},[t._v("#")]),t._v(" 关键名词")]),t._v(" "),v("h4",{attrs:{id:"包含块-containing-block"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#包含块-containing-block","aria-hidden":"true"}},[t._v("#")]),t._v(" "),v("code",[t._v("包含块 (containing block)")])]),t._v(" "),v("blockquote",[v("p",[t._v("CSS 2.1中，很多盒的位置和大小是根据被称为包含块的矩形框的边界计算的。一般把生成的盒作为后代盒的包含块，我们说一个盒为其后代“建立”了包含块。“一个盒的包含块”表示“盒所在的包含块”，而不是它生成的（包含块）")])]),t._v(" "),v("p",[v("a",{attrs:{href:"http://www.ayqy.net/doc/css2-1/visudet.html#containing-block-details",target:"_blank",rel:"noopener noreferrer"}},[t._v("包含块的定义"),v("OutboundLink")],1)]),t._v(" "),v("p",[t._v("简单理解"),v("code",[t._v("包含块")]),t._v("的尺寸就是父级容器的内容区尺寸，而根元素的包含块就是视口")]),t._v(" "),v("p",[t._v("例外:")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("position: absolute")]),t._v(" 元素的包含块为最近的 "),v("code",[t._v("position")]),t._v(" 为 "),v("code",[t._v("absolute")]),t._v(" ，"),v("code",[t._v("relative")]),t._v(" 或者 "),v("code",[t._v("fixed")]),t._v(" 的祖先建立")]),t._v(" "),v("li",[v("code",[t._v("position: fixed")]),t._v(" 元素的包含块为视口")])]),t._v(" "),v("h4",{attrs:{id:"外部尺寸-extrinsic-size-与-内部尺寸-intrinsic-size"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#外部尺寸-extrinsic-size-与-内部尺寸-intrinsic-size","aria-hidden":"true"}},[t._v("#")]),t._v(" "),v("code",[t._v("外部尺寸 (Extrinsic Size)")]),t._v(" 与 "),v("code",[t._v("内部尺寸 (Intrinsic Size)")])]),t._v(" "),v("p",[t._v("为 css3 的新概念")]),t._v(" "),v("p",[v("a",{attrs:{href:"https://drafts.csswg.org/css-sizing/#intro",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSS Intrinsic & Extrinsic Sizing Module Level 3"),v("OutboundLink")],1)]),t._v(" "),v("p",[v("code",[t._v("外部尺寸")]),t._v(" 指尺寸由外部元素决定, 即元素所在的包含块决定")]),t._v(" "),v("p",[v("code",[t._v("内部尺寸")]),t._v(" 指尺寸由内部元素决定")]),t._v(" "),v("h2",{attrs:{id:"width-auto"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#width-auto","aria-hidden":"true"}},[t._v("#")]),t._v(" "),v("code",[t._v("width: auto")])]),t._v(" "),v("p",[t._v("width 的默认值为 auto , 当 "),v("code",[t._v("width:auto")]),t._v("时, 共有五种不同的宽度表现.")]),t._v(" "),v("p",[t._v("其中基于外部尺寸的有两种, 基于内部尺寸的有三种")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"center"}},[t._v("尺寸")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("表现")]),t._v(" "),v("th",{staticStyle:{"text-align":"left"}},[t._v("适用")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("计算")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("名词")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("外部尺寸")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("充分利用可用空间")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("块级元素(非替换元素)")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("100%铺满父级容器")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("fill-available")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("外部尺寸")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("格式化宽度")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("非替换元素 "),v("code",[t._v("position")]),t._v(" 为 "),v("code",[t._v("absolute或fixed")]),t._v(" "),v("br"),t._v(" 且 "),v("code",[t._v("left/right")]),t._v(" 或 "),v("code",[t._v("top/bottom")]),t._v(" 属性同时存在")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("普通绝对定位元素是用内部尺寸,"),v("br"),t._v("但这种情况是用外部尺寸,"),v("br"),t._v("即相对于最近的具有定位特性的祖先元素计算")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("内部尺寸")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("收缩与包裹"),v("br"),v("code",[t._v("收缩至合适")])]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("浮动、绝对定位、inline-block、table")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("元素尺寸由内部元素决定,"),v("br"),t._v("且永远小于 "),v("code",[t._v("包含块")]),t._v(" 容器的尺寸")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("shrink-to-fit")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("内部尺寸")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("收缩到最小")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("当父容器宽度非常小, "),v("br"),t._v(" 小于一个汉字或英文单元,甚至为0")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("按首选最小宽度计算,"),v("br"),t._v("一个汉字,或一个单词,"),v("br"),t._v("如果是图片,则为图片本身")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("preferred minimum width "),v("br"),t._v(" minimum content width "),v("br"),t._v(" min-content")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("内部尺寸")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("最大宽度-超过容器限制")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("内联元素设置 "),v("code",[t._v("white-space: nowrap")]),v("br"),t._v(" 或内容很长的连续的英文或数字")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("最大的连续内联盒子的宽度")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("max-content")])])])]),t._v(" "),v("p",[t._v("说明:")]),t._v(" "),v("ul",[v("li",[t._v("后两种内部尺寸都是第一种内部尺寸的例外情况")]),t._v(" "),v("li",[t._v("而第二种外部尺寸也是第一种内部尺寸的例外情况")])]),t._v(" "),v("h2",{attrs:{id:"box-sizing"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#box-sizing","aria-hidden":"true"}},[t._v("#")]),t._v(" box-sizing")]),t._v(" "),v("p",[v("code",[t._v("width")]),t._v(" 默认是作用于元素"),v("code",[t._v("内在盒子")]),t._v("的 "),v("code",[t._v("content box (content-box)")]),t._v(", 但这跟人们的直观感觉有差异， 经验世界的 "),v("code",[t._v("width")]),t._v(" 实际上是 "),v("code",[t._v("offsetWidth")])]),t._v(" "),v("p",[t._v("offsetWidth = width + border + padding")]),t._v(" "),v("p",[t._v("在一般情况下，比如元素没有设置 border 与 padding， 则无所谓")]),t._v(" "),v("p",[t._v("但如果对元素设置 "),v("code",[t._v("width: 100%")]),t._v(", 同时又设置了 border 或 padding， 则元素的 "),v("code",[t._v("offsetWidth")]),t._v(" 会超出父元素的容器宽度")]),t._v(" "),v("p",[t._v("呈现出子元素超过容器限制。")]),t._v(" "),v("p",[t._v("要解决该问题， 有两种方案：")]),t._v(" "),v("ul",[v("li",[t._v("设置 "),v("code",[t._v("box-sizing: border-box")]),t._v(" , 目的是让 "),v("code",[t._v("width")]),t._v(" 作用于元素的 "),v("code",[t._v("border box (border-box)")]),t._v(", 这样 "),v("code",[t._v("width")]),t._v(" = "),v("code",[t._v("offsetWidth")]),t._v("， 跟人们的直观经验保持一致")]),t._v(" "),v("li",[t._v("采用书写方式约束： 宽度分离原则")])]),t._v(" "),v("h2",{attrs:{id:"宽度分离原则"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#宽度分离原则","aria-hidden":"true"}},[t._v("#")]),t._v(" 宽度分离原则")]),t._v(" "),v("p",[t._v("内容来自 "),v("a",{attrs:{href:"https://demo.cssworld.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("《CSS世界》"),v("OutboundLink")],1)]),t._v(" "),v("blockquote",[v("p",[t._v("所谓 "),v("code",[t._v("宽度分离原则")]),t._v(" , 就是 CSS 中的 "),v("code",[t._v("width")]),t._v(" 属性不与影响宽度的 padding / border (有时候包括 margin)属性共存，也就是不能出现以下组合")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v(".box {width:100px; border: 1px solid;}\n")])])]),v("p",[t._v("或")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v(".box{width:100px; padding:20px;}\n")])])]),v("p",[t._v("应该将 width 独立占用一层标签， 而 padding border margin 利用流动性在内部自适应呈现")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v(".father {width: 180px;}\n.son {margin: 0 20px; padding: 20px; border: 1px solid;}\n")])])])]),t._v(" "),v("p",[v("code",[t._v("宽度分离原则")]),t._v(" 要使用多一层标签,因此要配合最佳实践: 即如果不考虑替换元素,一个网页只需要一个 width 设定即可,就是最外层限制主体内容宽度的 width, 里面所有元素都没有理由再出现 width 设置.")]),t._v(" "),v("h2",{attrs:{id:"替换元素的特殊性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#替换元素的特殊性","aria-hidden":"true"}},[t._v("#")]),t._v(" 替换元素的特殊性")]),t._v(" "),v("p",[t._v("替换元素一般默认为 "),v("code",[t._v("display: inline-block 或 inline")]),t._v(", 此时宽度(auto)默认按内部尺寸计算.")]),t._v(" "),v("p",[t._v("但是即使设置为 "),v("code",[t._v("display: block")]),t._v(", 宽度(auto)并不按外部尺寸计算充满父容器, 仍按内部尺寸计算.")]),t._v(" "),v("p",[t._v("如要自适应父容器, 要设置 "),v("code",[t._v("width: 100%")])]),t._v(" "),v("p",[t._v("最好同时设置 "),v("code",[t._v("box-sizing: border-box")]),t._v(", 适应替换元素设置 border 及 padding 的情况")]),t._v(" "),v("h2",{attrs:{id:"width-100"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#width-100","aria-hidden":"true"}},[t._v("#")]),t._v(" "),v("code",[t._v("width: 100%")])]),t._v(" "),v("ul",[v("li",[t._v("见 "),v("a",{attrs:{href:"#box-sizing"}},[t._v("box-sizing")]),t._v(" 小节内容")]),t._v(" "),v("li",[t._v("见 "),v("a",{attrs:{href:"#%E6%9B%BF%E6%8D%A2%E5%85%83%E7%B4%A0%E7%9A%84%E7%89%B9%E6%AE%8A%E6%80%A7"}},[t._v("替换元素的特殊性")]),t._v(" 小节内容")])]),t._v(" "),v("h2",{attrs:{id:"内联元素-与-white-space-nowrap-结合的场景"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#内联元素-与-white-space-nowrap-结合的场景","aria-hidden":"true"}},[t._v("#")]),t._v(" 内联元素 与 "),v("code",[t._v("white-space: nowrap")]),t._v(" 结合的场景")]),t._v(" "),v("p",[t._v("见 "),v("a",{attrs:{href:"https://demo.cssworld.cn/3/2-7.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("“最大宽度”与iScroll水平滚动实例页面"),v("OutboundLink")],1)]),t._v(" "),v("ul",[v("li",[t._v("包裹元素 "),v("code",[t._v("overflow: hidden; position: relative;")])]),t._v(" "),v("li",[t._v("内联元素的父容器设置 "),v("code",[t._v("white-space: nowrap; position: absolute;")])]),t._v(" "),v("li",[t._v("即可用于水平滚动场景")])]),t._v(" "),v("h2",{attrs:{id:"内联元素包裹性应用示例"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#内联元素包裹性应用示例","aria-hidden":"true"}},[t._v("#")]),t._v(" 内联元素包裹性应用示例")]),t._v(" "),v("p",[v("a",{attrs:{href:"https://demo.cssworld.cn/3/2-5.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("文字单行居中多行居左"),v("OutboundLink")],1)]),t._v(" "),v("p",[t._v("解析：")]),t._v(" "),v("ul",[v("li",[t._v("在父元素设置居中，居中的不是文字，而包裹文字的内联子元素")]),t._v(" "),v("li",[t._v("当文字增加时，内联子元素的宽度随内容增大，但不会超过父元素宽度，宽度不足时形成折行")])])])},[],!1,null,null,null);e.default=i.exports}}]);