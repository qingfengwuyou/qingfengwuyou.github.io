(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{218:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"travis-ci-部署博客到-github-page"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#travis-ci-部署博客到-github-page","aria-hidden":"true"}},[t._v("#")]),t._v(" Travis CI 部署博客到 github page")]),t._v(" "),s("h2",{attrs:{id:"说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#说明","aria-hidden":"true"}},[t._v("#")]),t._v(" 说明")]),t._v(" "),s("p",[t._v("本博客是用 "),s("a",{attrs:{href:"https://v1.vuepress.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"}},[t._v("VuePress 1.x"),s("OutboundLink")],1),t._v(" 构建.")]),t._v(" "),s("p",[t._v("利用 Travis CI 自动部署时, 踩了一些坑, 先简单记录一下")]),t._v(" "),s("h2",{attrs:{id:"特殊要求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#特殊要求","aria-hidden":"true"}},[t._v("#")]),t._v(" 特殊要求")]),t._v(" "),s("p",[t._v("与一般的 github page 博客不同, 本博客的源码和静态页面是分别存放在不同的仓库,而网上的教程一般都是在同一仓库")]),t._v(" "),s("h2",{attrs:{id:"踩过的坑"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#踩过的坑","aria-hidden":"true"}},[t._v("#")]),t._v(" 踩过的坑")]),t._v(" "),s("h3",{attrs:{id:"登录-travis-ci-的-github-帐号"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#登录-travis-ci-的-github-帐号","aria-hidden":"true"}},[t._v("#")]),t._v(" 登录 Travis CI 的 github 帐号")]),t._v(" "),s("p",[t._v("由于本博客的源码和静态页面不但存放在不同的仓库,且仓库的帐号也是不同的.")]),t._v(" "),s("p",[t._v("因此在登录 Travis CI , 应使用源码项目的 github 帐号")]),t._v(" "),s("h3",{attrs:{id:"travis-ci-如何访问-推送静态页面至-静态页面仓库-博客站点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#travis-ci-如何访问-推送静态页面至-静态页面仓库-博客站点","aria-hidden":"true"}},[t._v("#")]),t._v(" Travis CI 如何访问(推送静态页面至)静态页面仓库(博客站点)")]),t._v(" "),s("p",[t._v("由于静态页面仓库也在 github, 还是比较方便, 分两步处理即可")]),t._v(" "),s("p",[s("code",[t._v("获取 token")])]),t._v(" "),s("ul",[s("li",[t._v("先登录 github , 用 静态页面仓库 帐号")]),t._v(" "),s("li",[t._v("在帐号头像, 找到 "),s("code",[t._v("Settings-Developer settings")])]),t._v(" "),s("li",[t._v("找到 "),s("code",[t._v("Personal access tokens")]),t._v(" 生成 "),s("code",[t._v("token")]),t._v(" , (选项 将 "),s("code",[t._v("repo")]),t._v(" 勾上)")]),t._v(" "),s("li",[t._v("复制 "),s("code",[t._v("token")]),t._v(" 备用")])]),t._v(" "),s("p",[s("code",[t._v("在 Travis CI 设置环境变量")])]),t._v(" "),s("ul",[s("li",[t._v("首先你已经在 Travis CI 激活了仓库, 这里为博客源码仓库")]),t._v(" "),s("li",[t._v("在仓库找到 "),s("code",[t._v("Settings")]),t._v(" 页")]),t._v(" "),s("li",[t._v("设置 "),s("code",[t._v("Environment Variables")])]),t._v(" "),s("li",[t._v("变量名可为 "),s("code",[t._v("GITHUB_TOKEN")]),t._v(" ,变量名可以自已取,  值为前面复制的 "),s("code",[t._v("token")])])]),t._v(" "),s("h3",{attrs:{id:"在源码项目的根目录添加-travis-yml-文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在源码项目的根目录添加-travis-yml-文件","aria-hidden":"true"}},[t._v("#")]),t._v(" 在源码项目的根目录添加 "),s("code",[t._v(".travis.yml")]),t._v(" 文件")]),t._v(" "),s("p",[t._v("文件内容 "),s("code",[t._v("VuePress 1.x")]),t._v(" 的示例是这样:")]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("language")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" node_js\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("node_js")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" lts/*\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" npm run docs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("build\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("deploy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("provider")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pages\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("skip-cleanup")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("local_dir")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" docs/.vuepress/dist\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("github-token")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $GITHUB_TOKEN "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# a token generated on github allowing travis to push code on you repository")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("keep-history")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" master\n")])])]),s("p",[t._v("这个示例只适用于源码与博客站点都在同一仓库,本文的情况应用下面的样例:")]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("language")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" node_js\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("node_js")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" lts/*\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" npm run docs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("build\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("deploy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("provider")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pages\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("repo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" qingfengwuyou/qingfengwuyou.github.io\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("target_branch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" master\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("skip-cleanup")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("local_dir")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" docs/.vuepress/dist\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("github-token")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $GITHUB_TOKEN\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("keep-history")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" master\n\n")])])]),s("p",[t._v("即增加:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("  repo: qingfengwuyou/qingfengwuyou.github.io\n  target_branch: master\n")])])]),s("ul",[s("li",[t._v("repo :　指明不同的仓库")]),t._v(" "),s("li",[t._v("target_branch: 目标仓库的目标分支, 如果不设,默认为 "),s("code",[t._v("gh_page")]),t._v(" 分支")])])])},[],!1,null,null,null);a.default=n.exports}}]);