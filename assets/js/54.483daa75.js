(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{633:function(t,s,a){"use strict";a.r(s);var r=a(3),e=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"_1-搭建项目并在本地运行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-搭建项目并在本地运行"}},[t._v("#")]),t._v(" 1.搭建项目并在本地运行")]),t._v(" "),a("p",[t._v("基于vuepress搭建一个项目，具体操作见vuepress官网教程。")]),t._v(" "),a("h3",{attrs:{id:"_2-部署上线"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-部署上线"}},[t._v("#")]),t._v(" 2.部署上线")]),t._v(" "),a("p",[a("strong",[t._v("方式一")]),t._v("：自己买一个服务器，阿里云，腾讯云等，这种方式的好处就是可靠、速度有保障，可以被搜索引擎收录。坏处就是要花钱啊。")]),t._v(" "),a("p",[a("strong",[t._v("方式二")]),t._v("：使用github pages。什么是github pages呢？它是github提供的、用于搭建个人网站的静态站点托管服务。这种方式的好处是免费、方便，坏处是速度可能有点慢，不能被国内搜索引擎收录。")]),t._v(" "),a("p",[t._v("下面主要介绍方式二。\n打开github，"),a("strong",[t._v("新建两个仓库")]),t._v("，一个仓库用来托管项目的打包好后的静态文件，显示网站内容；一个负责日常的开发的修改代码。")]),t._v(" "),a("h4",{attrs:{id:"新建仓库一-username-github-io-不用克隆到本地"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#新建仓库一-username-github-io-不用克隆到本地"}},[t._v("#")]),t._v(" "),a("strong",[t._v("新建仓库一：USERNAME.github.io(不用克隆到本地)")])]),t._v(" "),a("p",[t._v("注意："),a("strong",[t._v("USERNAME必须是你自己github账号的名称，而不是其他！！！")]),a("br"),t._v("\n例如：我的github账号名称是zhaoshier，那么新建仓库的名称就为zhaoshier.github.io"),a("br"),t._v(" "),a("img",{attrs:{src:"http://note.youdao.com/yws/public/resource/2a7f5948a1875f91a869a910a9a07230/xmlnote/A78A7C6BFC534EB887E37070940494AC/2554",alt:"github用户名"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"http://note.youdao.com/yws/public/resource/2a7f5948a1875f91a869a910a9a07230/xmlnote/8A5B4E7D948A4E80AAB77BC0458B7BCF/2556",alt:"仓库一名称"}}),a("br"),t._v("\n这个仓库建好后不用克隆到本地，内容的修改都在第二个仓库中进行。")]),t._v(" "),a("h4",{attrs:{id:"新建仓库二-随便起一个名字-如vuepressblog-克隆到本地"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#新建仓库二-随便起一个名字-如vuepressblog-克隆到本地"}},[t._v("#")]),t._v(" "),a("strong",[t._v("新建仓库二：随便起一个名字，如vuepressBLog(克隆到本地)")])]),t._v(" "),a("p",[t._v("这个仓库是用来开发博客的，以后只需修改这个项目就行。"),a("br"),t._v("\n通过git pull将仓库二的内容拷贝到本地vueperessBlog文件夹中。"),a("br"),t._v("\n然后将新搭建的项目拷贝到本地的vuepressBlog文件中。并在根目录下创建deploy.sh文件，内容如下：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("#"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("usr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("bin"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("env sh\n\n# 确保脚本抛出遇到的错误\nset "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("e\n\n# 生成静态文件\nnpm run build\n\n# 进入生成的文件夹\ncd "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v("\n\n# 如果是发布到自定义域名\n# echo "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'zhaoshier.top'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CNAME")]),t._v("\n\ngit init\ngit add "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),t._v("\ngit commit "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'deploy'")]),t._v("\n\n# 如果你想要部署到 https"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("USERNAME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("github"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("io\ngit push "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("f git@github"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("zhaoshier"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("zhaoshier"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("github"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("io"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("git master\n# git push "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("f git@github"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("zhaoshier"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("zhaoshier"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("github"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("io"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("git\n\n# 如果发布到 https"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("USERNAME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("github"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("io"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("REPO")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("REPO")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("github上的项目\n# git push "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("f git@github"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("zhaoshier"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("vuepress"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("git master"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("gh"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("pages\n\ncd "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br")])]),a("p",[t._v("通过")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("git push "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("f git@github"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("zhaoshier"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("zhaoshier"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("github"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("io"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("git master\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("仓库一和仓库二就建立了联系。\n再在package.json文件中添加发布命令")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"deploy"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bash deploy.sh"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("最后运行发布命令")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("npm run deploy\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("再(git add .)-(git commit)-(git push)\n打开github Settings下面的链接"),a("a",{attrs:{href:"https://zhaoshier.github.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://zhaoshier.github.io"),a("OutboundLink")],1),t._v("即可看到自己的主页。\n"),a("img",{attrs:{src:"http://note.youdao.com/yws/public/resource/2a7f5948a1875f91a869a910a9a07230/xmlnote/19E8C4B0248C45C0822A5939C2D7F518/2558",alt:"githubPages的链接"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"http://note.youdao.com/yws/public/resource/2a7f5948a1875f91a869a910a9a07230/xmlnote/A70FC3FD583E4FB588A47EDA73DF3FBA/2560",alt:"博客首页"}})]),t._v(" "),a("h3",{attrs:{id:"_3-将博客发布到自己的个人域名上"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-将博客发布到自己的个人域名上"}},[t._v("#")]),t._v(" 3.将博客发布到自己的个人域名上")]),t._v(" "),a("p",[t._v("若不满足于"),a("a",{attrs:{href:"https://zhaoshier.github.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://zhaoshier.github.io"),a("OutboundLink")],1),t._v("这样的域名，想要一个专属域名，如"),a("a",{attrs:{href:"https://zhaoshier.top",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://zhaoshier.top"),a("OutboundLink")],1),t._v("，可进行如下操作：")]),t._v(" "),a("h4",{attrs:{id:"_1-购买并解析域名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-购买并解析域名"}},[t._v("#")]),t._v(" "),a("strong",[t._v("(1)购买并解析域名")])]),t._v(" "),a("p",[t._v("我是在腾讯云上买的域名，下面以腾讯云为例：\n购买成功后，进入我的域名页面，点击[解析]")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://note.youdao.com/yws/public/resource/2a7f5948a1875f91a869a910a9a07230/xmlnote/D51209DCBBAE4BD8B95BD168B19AE996/2605",alt:"腾讯云页面"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"http://note.youdao.com/yws/public/resource/2a7f5948a1875f91a869a910a9a07230/xmlnote/D3025AE18BE6451B9DDFAE2ED73E519C/2657",alt:"域名解析"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"http://note.youdao.com/yws/public/resource/2a7f5948a1875f91a869a910a9a07230/xmlnote/43750456F87D44C780C3CB48D772E3B9/2646",alt:"域名解析"}})]),t._v(" "),a("h4",{attrs:{id:"方式一-点击-快速添加网址邮箱解析-按钮-具体如下"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方式一-点击-快速添加网址邮箱解析-按钮-具体如下"}},[t._v("#")]),t._v(" 方式一：点击[快速添加网址邮箱解析]按钮，具体如下：")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://note.youdao.com/yws/public/resource/2a7f5948a1875f91a869a910a9a07230/xmlnote/656E6B1F020B4745991DD072B8989F5B/2649",alt:"快速解析"}})]),t._v(" "),a("p",[t._v("然后再点击“网站解析”右侧的[立即设置]按钮。"),a("br"),t._v(" "),a("img",{attrs:{src:"http://note.youdao.com/yws/public/resource/2a7f5948a1875f91a869a910a9a07230/xmlnote/1F0E54B59F4E4A90B6E9C44E214A2D6B/2653",alt:"立即设置"}})]),t._v(" "),a("p",[t._v("在填写想要将域名解析到目的主机的IP地址，填写完毕后点击[确定]按钮。"),a("br"),t._v(" "),a("img",{attrs:{src:"http://note.youdao.com/yws/public/resource/2a7f5948a1875f91a869a910a9a07230/xmlnote/232131D91F6B44F5B5ECE6E11D982C77/2655",alt:"确定button"}})]),t._v(" "),a("p",[t._v("就会自动添加@和www两条消息记录，说明已成功将该域名解析到相应的主机空间中。")]),t._v(" "),a("h4",{attrs:{id:"方式二-直接点击-添加记录-按钮-然后填写相应信息点击-保存-按钮即可。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方式二-直接点击-添加记录-按钮-然后填写相应信息点击-保存-按钮即可。"}},[t._v("#")]),t._v(" 方式二：直接点击[添加记录]按钮，然后填写相应信息点击[保存]按钮即可。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://note.youdao.com/yws/public/resource/2a7f5948a1875f91a869a910a9a07230/xmlnote/556C8C69A5E8442D92F33387146818F1/2651",alt:"方式二解析"}})]),t._v(" "),a("h4",{attrs:{id:"_2-注册vercel-并与github绑定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-注册vercel-并与github绑定"}},[t._v("#")]),t._v(" "),a("strong",[t._v("(2)注册vercel，并与github绑定")])]),t._v(" "),a("p",[t._v("首先，注册vercel账号，并关联你自己的github账号")]),t._v(" "),a("p",[t._v("然后，在vercel中引入你的远程仓库一，让两个关联起来。\n在vercel网站首页，点击[Import Project]"),a("br"),t._v(" "),a("img",{attrs:{src:"http://note.youdao.com/yws/public/resource/2a7f5948a1875f91a869a910a9a07230/xmlnote/F489BF9BD75044A0A98F3B3841D2AD96/2660",alt:"importProjects"}})]),t._v(" "),a("p",[t._v("然后，点击import Git Repository的[continue]\n"),a("img",{attrs:{src:"http://note.youdao.com/yws/public/resource/2a7f5948a1875f91a869a910a9a07230/xmlnote/D7F30A62BC5A4526AC3336FE5C3997D0/2663",alt:"import Res"}})]),t._v(" "),a("p",[t._v("选择该仓库下的你想绑定的项目，点击[continue]按钮\n"),a("img",{attrs:{src:"http://note.youdao.com/yws/public/resource/2a7f5948a1875f91a869a910a9a07230/xmlnote/2C71AB1A9DA94F73B39E036C61EF5E93/2667",alt:"importProject"}})]),t._v(" "),a("p",[t._v("添加你自己的项目名称，点击[deploy]"),a("br"),t._v(" "),a("img",{attrs:{src:"http://note.youdao.com/yws/public/resource/2a7f5948a1875f91a869a910a9a07230/xmlnote/1F0D30E891CF45668D43AB05806B7EC7/2669",alt:"deploy"}})]),t._v(" "),a("p",[t._v("现在就创建成功啦，点击vist就可以直接访问")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://note.youdao.com/yws/public/resource/2a7f5948a1875f91a869a910a9a07230/xmlnote/3A8DEE462D114E0E873A0A3197B55594/2671",alt:"sucessPage"}})]),t._v(" "),a("p",[t._v("现在，你在本地的vuepressBlog文件夹下修改的内容，当你把内容push到仓库二上时，在这边会自动更新你所修改的内容。")]),t._v(" "),a("h4",{attrs:{id:"_3-绑定域名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-绑定域名"}},[t._v("#")]),t._v(" "),a("strong",[t._v("(3)绑定域名")])]),t._v(" "),a("p",[t._v("在vercel的控制面板里打开你的项目(此处我的是zzzzzsssseee) => Settings => Domains"),a("br"),t._v(" "),a("img",{attrs:{src:"https://gitee.com/zhaoshier/blogimage/raw/master/images/%5BvuepressBlog%5D-2.png",alt:"vercel"}})]),t._v(" "),a("p",[t._v("在输入框中输入你在第二部所解析的域名(此处我的是zhaoshier.top),点击添加，就可成功绑定了。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/zhaoshier/blogimage/raw/master/images/%5BvuepressBlog%5D-1.png",alt:"last"}})])])}),[],!1,null,null,null);s.default=e.exports}}]);