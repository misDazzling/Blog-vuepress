"use strict";(self.webpackChunkdemo1=self.webpackChunkdemo1||[]).push([[22],{2176:(n,e,a)=>{a.r(e),a.d(e,{data:()=>r});const r={key:"v-1356360e",path:"/vuepress+github+versel%E9%83%A8%E7%BD%B2%E5%8D%9A%E5%AE%A2.html",title:"vuepress+GitHub+verce,搭建个人博客",lang:"zh-CN",frontmatter:{date:"2022/08/16 18:00",coverUrl:"image/1.png",stick:!0,keyword:"vuepress,GitHub,verce,搭建个人博客",description:"vuepress+GitHub+verce,搭建个人博客",title:"vuepress+GitHub+verce,搭建个人博客",tag:["网站美化"],categories:["网站美化"]},excerpt:"",headers:[{level:2,title:"vercel",slug:"vercel",children:[{level:3,title:"🐳使用到的命令",slug:"🐳使用到的命令",children:[]}]},{level:2,title:"🌸Quick start",slug:"🌸quick-start",children:[]},{level:2,title:"🌸部署",slug:"🌸部署",children:[]},{level:2,title:"🌸Vercle",slug:"🌸vercle",children:[{level:3,title:"🐳使用",slug:"🐳使用",children:[]},{level:3,title:"🐳修改config.js",slug:"🐳修改config-js",children:[]},{level:3,title:"🐳push到github",slug:"🐳push到github",children:[]},{level:3,title:"vercel",slug:"vercel-1",children:[]},{level:3,title:"🐳部署成功",slug:"🐳部署成功",children:[]},{level:3,title:"🐳测试",slug:"🐳测试",children:[]}]}],git:{updatedTime:null,contributors:[]}}},2468:(n,e,a)=>{a.r(e),a.d(e,{default:()=>hr});var r=a(6252);const l=(0,r.uE)('<p>给大家推荐一个免费部署个人博客的方案。</p><p>使用vuepress+github托管+vercel。</p><h2 id="vercel" tabindex="-1"><a class="header-anchor" href="#vercel" aria-hidden="true">#</a> vercel</h2><p>我们可以使用<code>vercel</code>进行部署，vercel和<code>github actions</code>很相似，都是通过将博客的所有必须文件（包括<code>package.json,docs</code>等）push到github的某个仓库仓库中，然后在vercel中创建一个项目，导入此仓库，之后的一切就交给<code>vercel</code>去做了</p><p>并且vercel还能够自动部署，如果你commit了新的内容，vercel监测到有新的<code>commit</code>之后，便会重新运行<code>npm run build</code>命令进行部署，你只需要将新的修改，从本地<code>push</code>到github便可以了（比如新增一篇文章），而不需要像<code>github pages</code>，<code>服务器部署</code>那样，每次新增文章，都需要在本地运行<code>npm run build</code>，然后再将<code>docs/.vuepress/dist</code>目录中的所有文件，上传到github或者服务器中才能完成博客新内容的改变</p><p>而且vercel还自带<code>cdn</code>加速，在速度上比使用通过<code>github pages</code>托管，通过<code>xxx.github.io/xxx</code>访问的速度快，除此以外，还可以自定义域名，可以使用我们自己的域名。</p>',6),s={id:"🐳使用到的命令",tabindex:"-1"},i=(0,r._)("a",{class:"header-anchor",href:"#🐳使用到的命令","aria-hidden":"true"},"#",-1),c=(0,r.Uk)(),t={href:"https://aurora.xcye.xyz/home/deploy.html#%E4%BD%BF%E7%94%A8",target:"_blank",rel:"noopener noreferrer"},o=(0,r.Uk)("🐳"),g=(0,r.Uk)("使用到的命令"),p=(0,r.uE)('<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> yarn global add vue-cli\nyarn global add vuepress-theme-cli\naurora demo-blog\n\n \n[1]  yarn config set registry=http://registry.npm.taobao.org/\n[2]  cd blog-demo\n[3]  yarn install\n[4]  yarn run dev\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git  clone\n\ngit add.\n\ngit commit -m &#39;第一次上传&#39;\n\n\n\ngit push \n\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>先忽略上面的命令。</p><p>首先推荐一款vuepress主题------Aurora。</p>',4),u={href:"https://www.npmjs.com/package/vuepress-theme-aurora",target:"_blank",rel:"noopener noreferrer"},d=(0,r.Uk)("Aurora"),b=(0,r.uE)("是一款基于<strong>Vuepress2</strong>的博客主题，将本地<strong>Markdown</strong>文件解析成静态html页面，作为博客文章。搭配<strong>说说</strong>，<strong>时间轴</strong>，<strong>文章分类</strong>，<strong>评论</strong>，<strong>友情链接</strong>，<strong>相册</strong>，<strong>音乐播放器</strong>等特色功能，给您不一样的使用体验。",19),m=(0,r.uE)("<ul><li>🏆<strong>100%自定义</strong></li><li>🌈<strong>简洁，漂亮</strong></li><li>🎨<strong>高扩展</strong></li><li>💫<strong>多功能</strong></li><li>📖<strong>配置文档</strong></li></ul><p>前置工作：安装node.js和git（安装一直默认狂点）。</p><p>安装地址：git:https://registry.npmmirror.com/binary.html?path=git-for-windows/ (淘宝镜像网，比官网速度下载快)</p><p>node.js:https://nodejs.org/zh-cn/download/</p>",4),h={id:"🌸quick-start",tabindex:"-1"},_=(0,r._)("a",{class:"header-anchor",href:"#🌸quick-start","aria-hidden":"true"},"#",-1),f=(0,r.Uk)(),v={href:"https://aurora.xcye.xyz/readme/#quick-start",target:"_blank",rel:"noopener noreferrer"},k=(0,r.Uk)("🌸"),z=(0,r.Uk)("Quick start"),y=(0,r._)("h4",{id:"方式一",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#方式一","aria-hidden":"true"},"#"),(0,r.Uk)(" 方式一：")],-1),x=(0,r._)("p",null,"按照主题文档下载（附带下载视频）",-1),j=(0,r._)("p",null,[(0,r._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/28cb1555dd7c4bbebde20f81ee528984.png",data:"aurora"})],-1),U=(0,r.Uk)("有个坏处按照命令操作完之后，会和主题up的网站一样你会很难初始化，我推荐你使用方式二，我更喜欢用yarn代替npm。 "),E={href:"https://aurora.xcye.xyz/readme/",target:"_blank",rel:"noopener noreferrer"},S=(0,r.Uk)("链接"),A=(0,r.Uk)("："),B={href:"https://aurora.xcye.xyz/readme/",target:"_blank",rel:"noopener noreferrer"},W=(0,r.Uk)("https://aurora.xcye.xyz/readme/"),w=(0,r._)("h4",{id:"方式二",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#方式二","aria-hidden":"true"},"#"),(0,r.Uk)(" 方式二：")],-1),q=(0,r._)("p",null,"通过github下载主题包，好处不用额外配置，而且操作方便。",-1),D=(0,r._)("p",null,"首先访问主题的GitHub下载压缩包。",-1),F=(0,r._)("p",null,[(0,r._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/85963d9cf3ab4bcd8af34a0b2f4f6f3c.png",data:"aurora"})],-1),G=(0,r.Uk)("网址："),C={href:"https://github.com/vuepress-aurora/vuepress-theme-aurora",target:"_blank",rel:"noopener noreferrer"},H=(0,r.Uk)("https://github.com/vuepress-aurora/vuepress-theme-aurora"),I=(0,r._)("p",null,"下载之后，放在想要放的路径下解压。",-1),N=(0,r._)("p",null,[(0,r.Uk)("解压之后里面是这样的。 "),(0,r._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/807f048c1d0c4a18ab4c3d3ba4414d87.png",data:"aurora"})],-1),R=(0,r._)("p",null,"只需要删除.github文件夹。",-1),V=(0,r._)("p",null,[(0,r.Uk)("我们博客内容在docs文件夹。只需修改这里面的文件。 "),(0,r._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/9132fe59187949ad87f89ef52edcd1d1.png",data:"aurora"})],-1),L=(0,r._)("p",null,"里面的文件是这样的，除了.vuepress文件夹，删除其余所有文件。",-1),M=(0,r._)("p",null,[(0,r._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/3e9eb205d6a04642a76e7b12ac2627f8.png",data:"aurora"})],-1),Q=(0,r._)("p",null,"记住.vuepress文件夹里面的文件不可以动。",-1),P=(0,r._)("p",null,"以后写文章的话，只需要把md文件放在.vuepree同一目录下，md文件内容开头固定格式即可。",-1),T=(0,r._)("p",null,"如下图所示。",-1),X=(0,r._)("p",null,[(0,r._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/3eb653c022f34241b3429e6a23a34cc1.png",data:"aurora"})],-1),Y=(0,r._)("p",null,[(0,r._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/3e6de9c870384e828744ac246244536b.png",data:"aurora"})],-1),Z=(0,r.uE)('<p>md固定格式：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># date是手动设置此篇文章编写的时间\ndate: &quot;2022/08/16 18:00&quot;\n\n# 手动设置此篇文章封面\ncoverUrl: &quot;image/1.png&quot;\n\n# 是否置顶\nsticky: true\n\n# 设置keyword 多个以,分开\nkeyword: 第一篇文章\n# 设置description\ndescription: 这是我的第一篇文章\n\n# 手动设置标题，否则使用h1标签作为标题\ntitle: 这是一篇demo文章\n\n# 这是设置标签，数组形式\ntag: [杂记]\n\n# 这里设置类别，数组形式\ncategories: [杂记]\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div>',2),J=(0,r._)("p",null,[(0,r.Uk)("然后是.vuepress文件夹的内容。 "),(0,r._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/dc9c3bff3738482a8a60ddcb1752c99c.png",data:"aurora"})],-1),K=(0,r.uE)('<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public目录下放的是公共的图片文件、mp3文件、\n背景图、二维码、赞赏码等，只需要把自己的图片命名成相同的然后替换同名问价即可。\nconfig.js是全局配置文件，可以看主题的文档\nfriendlinks.js是友联的配置文件。\nnavbar.js是导航栏，自己根据需要修改。\nsosials.js是社交配置文件，可以修改自己的社交。\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>',1),O=(0,r._)("p",null,[(0,r._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/df612004edd04e03a686ce0d9afcea32.png",data:"aurora"})],-1),$=(0,r.uE)('<p>然后如图所示，输入cmd按回车打开终端。</p><p>注意这个目录，不要输错目录。</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>##先安装脚手架\nyarn global add vuepress-theme-cli\n##在安装yarn\nyarn install\n（如果报错，先安装yarn,win+R打开cmd，输入npm install -g yarn回车，然后输入yarn -v查看是否安装好）\n##运行\nyarn run dev\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>',3),nn=(0,r._)("p",null,[(0,r._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-9PjhXoWp-1660726075579)(https://raw.githubusercontent.com/misDazzling/photobed/main/image-20220815232459520.png)]",originSrc:"https://img-blog.csdnimg.cn/5de5d4a69cea4f6eb5ad36a761d25639.png",data:"aurora"})],-1),en=(0,r._)("p",null,"访问图中的地址。",-1),an=(0,r._)("p",null,[(0,r._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/124bbb621ddf408d9c85d3b1ac73801a.png",data:"aurora"})],-1),rn=(0,r._)("p",null,[(0,r._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/f99252334aed48019b0a8e655a90e696.png",data:"aurora"})],-1),ln=(0,r._)("p",null,"文章都清零了，是不是非常简洁舒服。",-1),sn=(0,r._)("p",null,"然后修改配置文件，舒舒服服。",-1),cn=(0,r._)("p",null,"推荐下载vscode来编辑。",-1),tn=(0,r._)("p",null,"把文件夹拖入vscode。",-1),on=(0,r._)("p",null,[(0,r._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/c5561885bc24487c91d45a4260da773f.png",data:"aurora"})],-1),gn=(0,r._)("p",null,[(0,r._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/3417c578e61b475489df70c487b30930.png",data:"aurora"})],-1),pn=(0,r._)("p",null,"主要修改上面的js文件和public文件夹下的微信收款码和微信二维码和支付宝收款码。",-1),un=(0,r._)("p",null,[(0,r._)("strong",null,"首先修改config.js。")],-1),dn=(0,r._)("p",null,"修改关于页about。",-1),bn=(0,r._)("p",null,[(0,r._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/9d11212f23c4412db42a33d8c8dd4f61.png",data:"aurora"})],-1),mn=(0,r._)("p",null,[(0,r._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/e0ff6f1505964080b53285f1eb61daf4.png",data:"aurora"})],-1),hn=(0,r._)("p",null,[(0,r._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/8abb438e3f1d4ce0a5f65ffcc41e1033.png",data:"aurora"})],-1),_n=(0,r._)("p",null,"describe自己自由发挥。",-1),fn=(0,r._)("p",null,"时间轴存在非文件链接。",-1),vn=(0,r._)("p",null,[(0,r._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/338abdaab2f24e21afd6e122d7339988.png",data:"aurora"})],-1),kn=(0,r._)("p",null,"配置时间轴，还是在config.js文件夹下。",-1),zn=(0,r._)("p",null,[(0,r._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/ebbf7d1fb0ae43dd8e1bc23823fd0f4d.png",data:"aurora"})],-1),yn=(0,r._)("p",null,"点击里面的链接：如果连接是localhost:8080/archive",-1),xn=(0,r._)("p",null,"就在excludes里面添加‘/archive/’",-1),jn=(0,r._)("p",null,[(0,r._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/b4f15654845a40ae9d37930d72d7b64e.png",data:"aurora"})],-1),Un=(0,r._)("p",null,"如果是目录前后都加斜杠，如果是文件如404.html，只在前面加斜杠。",-1),En=(0,r._)("p",null,"如果是localhost:8080，添加'/'就可以了。",-1),Sn=(0,r._)("p",null,"效果如下：",-1),An=(0,r._)("p",null,[(0,r._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/652b234e2a32420cabc480d22295e59b.png",data:"aurora"})],-1),Bn=(0,r._)("p",null,"上面我新建的md文件请忽略，你只需要在下图的路径下，上传md文件，注意文件内容的格式哦。上文有提到。",-1),Wn=(0,r._)("p",null,[(0,r._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20220815234334340",originSrc:"https://img-blog.csdnimg.cn/img_convert/0a01b7b9faeef09f7d87c14d5713acdf.png",data:"aurora"})],-1),wn=(0,r._)("p",null,[(0,r._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/936fa7bbf86a40b6ae595f9ae256bb40.png",data:"aurora"})],-1),qn=(0,r._)("p",null,"然后修改导航栏。",-1),Dn=(0,r._)("p",null,"修改navbar.js。",-1),Fn=(0,r._)("p",null,[(0,r._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/16c5b50d05c34631b0b2a58c67e8d507.png",data:"aurora"})],-1),Gn=(0,r._)("p",null,[(0,r.Uk)("没用的都删除，注意花括号对应删除哦。 "),(0,r._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/a9ad880f597a4c18bb852d407f829ff3.png",data:"aurora"})],-1),Cn=(0,r._)("p",null,"保留到友情链接即可，放心食用。",-1),Hn=(0,r._)("p",null,"效果图：",-1),In=(0,r._)("p",null,[(0,r._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/58865a0504a74734b6af92df8e8b46c9.png",data:"aurora"})],-1),Nn=(0,r._)("p",null,[(0,r._)("strong",null,"然后修改社交")],-1),Rn=(0,r._)("p",null,"修改socials.js文件",-1),Vn=(0,r._)("p",null,[(0,r._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/3bd9b8a8e6b74276b71e83bedcf4823f.png",data:"aurora"})],-1),Ln=(0,r._)("p",null,"对应修改即可。",-1),Mn=(0,r._)("p",null,[(0,r._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/7098d8cd21e74d9b851cae07dd9d915f.png",data:"aurora"})],-1),Qn=(0,r._)("p",null,"上面的文件替换为自己的。",-1),Pn=(0,r._)("p",null,[(0,r._)("strong",null,"修改侧边介绍")],-1),Tn=(0,r._)("p",null,[(0,r._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20220815235114079",originSrc:"https://img-blog.csdnimg.cn/img_convert/851346d6dc91f59597c199a91c425343.png",data:"aurora"})],-1),Xn=(0,r._)("p",null,[(0,r.Uk)("config.js 856行自行修改。 "),(0,r._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/da3220c9891e44979b616c4626c7377f.png",data:"aurora"})],-1),Yn=(0,r._)("p",null,[(0,r._)("strong",null,"注意修改之后，在终端ctrl +c ，重新启动 yarn run dev ，才会生效。")],-1),Zn={id:"🌸部署",tabindex:"-1"},Jn=(0,r._)("a",{class:"header-anchor",href:"#🌸部署","aria-hidden":"true"},"#",-1),Kn=(0,r.Uk)(),On={href:"https://aurora.xcye.xyz/readme/#%E9%83%A8%E7%BD%B2%E5%88%B0%E8%87%AA%E5%B7%B1%E7%9A%84%E6%9C%8D%E5%8A%A1%E5%99%A8",target:"_blank",rel:"noopener noreferrer"},$n=(0,r.Uk)("🌸"),ne=(0,r.Uk)("部署"),ee=(0,r._)("p",null,"可以参考大佬的文档。",-1),ae={href:"https://aurora.xcye.xyz/readme/#quick-start",target:"_blank",rel:"noopener noreferrer"},re=(0,r.Uk)("https://aurora.xcye.xyz/readme/#quick-start"),le=(0,r._)("p",null,"选择vercel部署的方式。",-1),se={id:"🌸vercle",tabindex:"-1"},ie=(0,r._)("a",{class:"header-anchor",href:"#🌸vercle","aria-hidden":"true"},"#",-1),ce=(0,r.Uk)(),te={href:"https://aurora.xcye.xyz/readme/#vercle",target:"_blank",rel:"noopener noreferrer"},oe=(0,r.Uk)("🌸"),ge=(0,r.Uk)("Vercle"),pe={id:"🐳使用",tabindex:"-1"},ue=(0,r._)("a",{class:"header-anchor",href:"#🐳使用","aria-hidden":"true"},"#",-1),de=(0,r.Uk)(),be={href:"https://aurora.xcye.xyz/readme/#%E4%BD%BF%E7%94%A8",target:"_blank",rel:"noopener noreferrer"},me=(0,r.Uk)("🐳"),he=(0,r.Uk)("使用"),_e={id:"⛄需知",tabindex:"-1"},fe=(0,r._)("a",{class:"header-anchor",href:"#⛄需知","aria-hidden":"true"},"#",-1),ve=(0,r.Uk)(),ke={href:"https://aurora.xcye.xyz/readme/#%E9%9C%80%E7%9F%A5",target:"_blank",rel:"noopener noreferrer"},ze=(0,r.Uk)("⛄"),ye=(0,r.Uk)("需知"),xe=(0,r._)("p",null,"在这一步默认你已经在本地搭建好博客了，并且能够正常访问，如果本地访问出错的话，在vercel部署会失败",-1),je=(0,r._)("blockquote",null,[(0,r._)("p",null,[(0,r.Uk)("目前主题最新最新版是"),(0,r._)("code",null,"v1.13.2"),(0,r.Uk)("，我记得在"),(0,r._)("code",null,"v1.13"),(0,r.Uk)("版本以前，依赖没有锁住的时候，在vercel中部署会失败，如果你并没有使用最新版的主题或者博客目录中，不存在"),(0,r._)("code",null,"npm-shrinkwrap.json"),(0,r.Uk)("文件，那么你可以按照下面步骤锁定依赖版本号")])],-1),Ue=(0,r._)("p",null,"WARNING",-1),Ee=(0,r.Uk)("如果你博客目录中，存在"),Se=(0,r._)("code",null,"npm-shrinkwrap.json",-1),Ae=(0,r.Uk)("文件(在"),Be=(0,r._)("code",null,"package.json",-1),We=(0,r.Uk)("文件那里)，就不需要做下面这一步了，直接跳到"),we={href:"https://aurora.xcye.xyz/readme/#%E4%BF%AE%E6%94%B9config.js",target:"_blank",rel:"noopener noreferrer"},qe=(0,r.Uk)("修改config.js"),De=(0,r.Uk)("位置便可以了"),Fe=(0,r.Uk)("如果你博客目录中，存在"),Ge=(0,r._)("code",null,"npm-shrinkwrap.json",-1),Ce=(0,r.Uk)("文件(在"),He=(0,r._)("code",null,"package.json",-1),Ie=(0,r.Uk)("文件那里)，就不需要做下面这一步了，直接跳到"),Ne={href:"https://aurora.xcye.xyz/readme/#%E4%BF%AE%E6%94%B9config.js",target:"_blank",rel:"noopener noreferrer"},Re=(0,r.Uk)("修改config.js"),Ve=(0,r.Uk)("位置便可以了"),Le=(0,r._)("p",null,"如果第一步按照我下载的github的压缩包的话，直接进入修改config.js的步骤。",-1),Me={id:"🐳修改config-js",tabindex:"-1"},Qe=(0,r._)("a",{class:"header-anchor",href:"#🐳修改config-js","aria-hidden":"true"},"#",-1),Pe=(0,r.Uk)(),Te={href:"https://aurora.xcye.xyz/readme/#%E4%BF%AE%E6%94%B9config-js",target:"_blank",rel:"noopener noreferrer"},Xe=(0,r.Uk)("🐳"),Ye=(0,r.Uk)("修改config.js"),Ze=(0,r._)("p",null,[(0,r.Uk)("打开"),(0,r._)("code",null,"docs/.vuepress/config.js"),(0,r.Uk)("文件，在对应位置，添加下面内容")],-1),Je=(0,r._)("p",null,[(0,r._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/34735dcc13fb4faa882390211b021de6.png",data:"aurora"})],-1),Ke=(0,r.uE)('<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>dest: &quot;public&quot;,\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote><p>此配置的作用就是，运行<code>npm run build</code>命令后，打包后的文件，将会放在<code>public</code>目录中，默认是<code>docs/.vuepress/dist</code>目录，此<code>public</code>目录和<code>docs</code>目录同级</p></blockquote>',2),Oe={id:"🐳push到github",tabindex:"-1"},$e=(0,r._)("a",{class:"header-anchor",href:"#🐳push到github","aria-hidden":"true"},"#",-1),na=(0,r.Uk)(),ea={href:"https://aurora.xcye.xyz/readme/#push%E5%88%B0github",target:"_blank",rel:"noopener noreferrer"},aa=(0,r.Uk)("🐳"),ra=(0,r.Uk)("push到github"),la=(0,r.uE)('<ol><li><p>新建一个<code>.gitignore</code>文件，将下面内容添加到此文件总</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/node_modules\n/.idea\n**/.cache\ndocs/.vuepress/dist\n**/.temp\n/public\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></li><li><p>然后就将你博客（包含docs,pageage.json等文件）push到github某个仓库中，这一步自己解决</p></li></ol><p>上面，如果是下载的github的压缩包，可以不需要新建.gitignore文件，直接push到github仓库中。</p><p>先</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>yarn run build 打包一下\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',4),sa=(0,r._)("p",null,[(0,r._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/b90efe859afd4dbe8677a0e8a92f3229.png",data:"aurora"})],-1),ia=(0,r._)("p",null,"error忽略。",-1),ca=(0,r._)("p",null,"新建仓库，记得勾选add aREADME FILE。",-1),ta=(0,r._)("p",null,[(0,r._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/9091bc55051b49be871ab0b649e20c22.png",data:"aurora"})],-1),oa=(0,r._)("p",null,[(0,r._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/277a836337504b118d99ce900aadf629.png",data:"aurora"})],-1),ga=(0,r._)("p",null,"然后注意添加README.md文件。",-1),pa=(0,r._)("p",null,"然后找到本地的博客文件的路径。",-1),ua=(0,r._)("p",null,[(0,r._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/2d8df99a97044e6d8d05f8ef1f2bb335.png",data:"aurora"})],-1),da=(0,r.uE)('<p>右键，git bash here。</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git init ##初始化，该命令将创建一个名为 .git 的子目录，这个子目录含有你初始化的 Git 仓库中所有的必须文件，这些文件是 Git 仓库的骨干。 但是，在这个时候，我们仅仅是做了一个初始化的操作，你的项目里的文件还没有被跟踪。\n\ngit add .\ngit add LICENSE(可选)\ngit commit -m &#39;initial project version&#39; ##git commit -m &#39;第一次上传&#39;\n##稍后我们再逐一解释这些指令的行为。 现在，你已经得到了一个存在被追踪文件与初始提交的 Git 仓库。\ngit push \n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>',2),ba=(0,r._)("p",null,[(0,r._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/0052ad7020cf42bfb4a775c231c6f166.png",data:"aurora"})],-1),ma=(0,r._)("p",null,[(0,r._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/2e5be21a74ff43489d112fc79e5f6390.png",data:"aurora"})],-1),ha=(0,r._)("p",null,[(0,r._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/c7e7843c3ebf40b38ded1ea529a84d9b.png",data:"aurora"})],-1),_a=(0,r.uE)('<p>第一次git push 可能要你选择分支，注意他的提示。</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git push --set-upstream origin master##应该是这样\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="vercel-1" tabindex="-1"><a class="header-anchor" href="#vercel-1" aria-hidden="true">#</a> vercel</h3>',3),fa={id:"⛄登录",tabindex:"-1"},va=(0,r._)("a",{class:"header-anchor",href:"#⛄登录","aria-hidden":"true"},"#",-1),ka=(0,r.Uk)(),za={href:"https://aurora.xcye.xyz/readme/#%E7%99%BB%E5%BD%95",target:"_blank",rel:"noopener noreferrer"},ya=(0,r.Uk)("⛄"),xa=(0,r.Uk)("登录"),ja=(0,r.Uk)("进入"),Ua={href:"https://vercel.com/login",target:"_blank",rel:"noopener noreferrer"},Ea=(0,r.Uk)("Vercel"),Sa=(0,r.Uk)("官网，点击使用github登录。"),Aa={href:"https://vercel.com/",target:"_blank",rel:"noopener noreferrer"},Ba=(0,r.Uk)("https://vercel.com/"),Wa=(0,r._)("p",null,[(0,r._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/3225c6365e1d457984f7c034c1fe2f34.png",data:"aurora"})],-1),wa=(0,r._)("p",null,[(0,r._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"img",originSrc:"https://img-blog.csdnimg.cn/img_convert/b508ec532848ffa9fd986634495ed2c4.png",data:"aurora"})],-1),qa=(0,r._)("p",null,[(0,r._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/82e846ee118249719a7777ab940185fe.png",data:"aurora"})],-1),Da=(0,r._)("p",null,[(0,r._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"img",originSrc:"https://img-blog.csdnimg.cn/img_convert/639f65d2d8f33ee1fe2cae1bd31a6b75.png",data:"aurora"})],-1),Fa=(0,r._)("blockquote",null,[(0,r._)("p",null,"一定要设置上图这个，一定")],-1),Ga=(0,r._)("p",null,[(0,r._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/d73258d5d7564cb3845b8f25d369f3c8.png",data:"aurora"})],-1),Ca=(0,r._)("p",null,"然后就等待部署，差不多两分钟左右。",-1),Ha=(0,r._)("p",null,"对了，里面填yarn run build。",-1),Ia={id:"🐳部署成功",tabindex:"-1"},Na=(0,r._)("a",{class:"header-anchor",href:"#🐳部署成功","aria-hidden":"true"},"#",-1),Ra=(0,r.Uk)(),Va={href:"https://aurora.xcye.xyz/readme/#%E9%83%A8%E7%BD%B2%E6%88%90%E5%8A%9F",target:"_blank",rel:"noopener noreferrer"},La=(0,r.Uk)("🐳"),Ma=(0,r.Uk)("部署成功"),Qa=(0,r._)("p",null,[(0,r._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/a8716d91f863465bb2e7491eaed69bdf.png",data:"aurora"})],-1),Pa=(0,r._)("p",null,[(0,r.Uk)("出现这个画面，就表示你已经部署成功了，现在点击那个"),(0,r._)("code",null,"go to dashboard"),(0,r.Uk)("就可以进入到控制面板中")],-1),Ta=(0,r._)("p",null,[(0,r._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/0309ba8bf8d247ef95e62c1e77bdba99.png",data:"aurora"})],-1),Xa={id:"⛄简单使用",tabindex:"-1"},Ya=(0,r._)("a",{class:"header-anchor",href:"#⛄简单使用","aria-hidden":"true"},"#",-1),Za=(0,r.Uk)(),Ja={href:"https://aurora.xcye.xyz/readme/#%E7%AE%80%E5%8D%95%E4%BD%BF%E7%94%A8",target:"_blank",rel:"noopener noreferrer"},Ka=(0,r.Uk)("⛄"),Oa=(0,r.Uk)("简单使用"),$a=(0,r._)("p",null,[(0,r._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/47752777448f49b2921da633246ba1f5.png",data:"aurora"})],-1),nr=(0,r._)("p",null,"点击这里，可以重新部署",-1),er=(0,r._)("p",null,[(0,r._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/a099f86324634cbf9db92d3c536e2a13.png",data:"aurora"})],-1),ar=(0,r._)("p",null,"点击这里，可以设置自定义域名",-1),rr={id:"🐳测试",tabindex:"-1"},lr=(0,r._)("a",{class:"header-anchor",href:"#🐳测试","aria-hidden":"true"},"#",-1),sr=(0,r.Uk)(),ir={href:"https://aurora.xcye.xyz/readme/#%E6%B5%8B%E8%AF%95",target:"_blank",rel:"noopener noreferrer"},cr=(0,r.Uk)("🐳"),tr=(0,r.Uk)("测试"),or=(0,r._)("p",null,"我最开始也说了，vercel可以监测到github中的commit记录，如果有新的commit记录的话，vercel就会自动重新部署，重新部署这一步不需要我们操作",-1),gr=(0,r._)("p",null,"我们直接在github上，随便修改一下，然后点击提交",-1),pr=(0,r._)("p",null,[(0,r._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/92ed915c96dc4c52b1e9a80dddc750c2.png",data:"aurora"})],-1),ur=(0,r._)("p",null,[(0,r.Uk)("然后我们回到vercel中，便可以看到，已经有一个新的部署在执行了，等待部署成功，我们便可以在博客中刷新，看到我们刚刚修改的内容。 "),(0,r._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/e53e1cf2046e4f14a682de3cf9fe2338.png",data:"aurora"})],-1),dr=(0,r._)("p",null,"舒服地结束啦。撒花~~~",-1),br=(0,r._)("p",null,[(0,r._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/14a8d30912a64f7fa385fcec749de9e6.png",data:"aurora"})],-1),mr={},hr=(0,a(3744).Z)(mr,[["render",function(n,e){const a=(0,r.up)("ExternalLinkIcon");return(0,r.wg)(),(0,r.iD)(r.HY,null,[l,(0,r._)("h3",s,[i,c,(0,r._)("a",t,[o,(0,r.Wm)(a)]),g]),p,(0,r._)("p",null,[(0,r._)("a",u,[d,(0,r.Wm)(a)]),b]),m,(0,r._)("h2",h,[_,f,(0,r._)("a",v,[k,(0,r.Wm)(a)]),z]),y,x,j,(0,r._)("p",null,[U,(0,r._)("a",E,[S,(0,r.Wm)(a)]),A,(0,r._)("a",B,[W,(0,r.Wm)(a)])]),w,q,D,F,(0,r._)("p",null,[G,(0,r._)("a",C,[H,(0,r.Wm)(a)])]),I,N,R,V,L,M,Q,P,T,X,Y,Z,J,K,O,$,nn,en,an,rn,ln,sn,cn,tn,on,gn,pn,un,dn,bn,mn,hn,_n,fn,vn,kn,zn,yn,xn,jn,Un,En,Sn,An,Bn,Wn,wn,qn,Dn,Fn,Gn,Cn,Hn,In,Nn,Rn,Vn,Ln,Mn,Qn,Pn,Tn,Xn,Yn,(0,r._)("h2",Zn,[Jn,Kn,(0,r._)("a",On,[$n,(0,r.Wm)(a)]),ne]),ee,(0,r._)("p",null,[(0,r._)("a",ae,[re,(0,r.Wm)(a)])]),le,(0,r._)("h2",se,[ie,ce,(0,r._)("a",te,[oe,(0,r.Wm)(a)]),ge]),(0,r._)("h3",pe,[ue,de,(0,r._)("a",be,[me,(0,r.Wm)(a)]),he]),(0,r._)("h4",_e,[fe,ve,(0,r._)("a",ke,[ze,(0,r.Wm)(a)]),ye]),xe,je,Ue,(0,r._)("p",null,[Ee,Se,Ae,Be,We,(0,r._)("a",we,[qe,(0,r.Wm)(a)]),De]),(0,r._)("p",null,[Fe,Ge,Ce,He,Ie,(0,r._)("a",Ne,[Re,(0,r.Wm)(a)]),Ve]),Le,(0,r._)("h3",Me,[Qe,Pe,(0,r._)("a",Te,[Xe,(0,r.Wm)(a)]),Ye]),Ze,Je,Ke,(0,r._)("h3",Oe,[$e,na,(0,r._)("a",ea,[aa,(0,r.Wm)(a)]),ra]),la,sa,ia,ca,ta,oa,ga,pa,ua,da,ba,ma,ha,_a,(0,r._)("h4",fa,[va,ka,(0,r._)("a",za,[ya,(0,r.Wm)(a)]),xa]),(0,r._)("p",null,[ja,(0,r._)("a",Ua,[Ea,(0,r.Wm)(a)]),Sa,(0,r._)("a",Aa,[Ba,(0,r.Wm)(a)])]),Wa,wa,qa,Da,Fa,Ga,Ca,Ha,(0,r._)("h3",Ia,[Na,Ra,(0,r._)("a",Va,[La,(0,r.Wm)(a)]),Ma]),Qa,Pa,Ta,(0,r._)("h4",Xa,[Ya,Za,(0,r._)("a",Ja,[Ka,(0,r.Wm)(a)]),Oa]),$a,nr,er,ar,(0,r._)("h3",rr,[lr,sr,(0,r._)("a",ir,[cr,(0,r.Wm)(a)]),tr]),or,gr,pr,ur,dr,br],64)}]])}}]);