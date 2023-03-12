"use strict";(self.webpackChunkdemo1=self.webpackChunkdemo1||[]).push([[998],{65:(l,i,n)=>{n.r(i),n.d(i,{data:()=>t});const t={key:"v-6836bbec",path:"/edu%E6%8C%96%E6%8E%98%E6%80%9D%E8%B7%AF/%E7%AC%AC%E5%85%AD%E6%9B%B4%E2%80%94%E2%80%94%E6%9F%A5%E6%89%BE%E7%9B%AE%E6%A0%87%E4%B8%8E%E9%80%BB%E8%BE%91%E6%BC%8F%E6%B4%9E.html",title:"第六更--查找目标与逻辑漏洞",lang:"zh-CN",frontmatter:{date:"2022/08/20 21:06",coverUrl:"image/1.png",stick:!1,keyword:"渗透测试,EDU,web安全",description:"第六更--查找目标与逻辑漏洞",title:"第六更--查找目标与逻辑漏洞",tag:["edu挖掘思路"],categories:["edu挖掘思路"]},excerpt:"",headers:[{level:2,title:"查找目标",slug:"查找目标",children:[]}],git:{updatedTime:null,contributors:[]}}},7124:(l,i,n)=>{n.r(i),n.d(i,{default:()=>A});var t=n(6252);const c=(0,t._)("h2",{id:"查找目标",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#查找目标","aria-hidden":"true"},"#"),(0,t.Uk)(),(0,t._)("strong",null,"查找目标")],-1),o=(0,t._)("p",null,[(0,t._)("strong",null,"1. 从已知文库寻找目标："),(0,t.Uk)(" 目前常见文库： peiqi文库（不需要邀请码），零组文库和白泽文库（需要邀请码） 此次选择peiqi文库：http://wiki.peiqi.tech/ 由于我之前是挖edusrc,所以我在打击目标的时候，都是找关于学校的web系统于是开始寻找目标：")],-1),e=(0,t._)("ol",null,[(0,t._)("li",null,[(0,t.Uk)("找web应用，然后查看关于学校应用的系统漏洞，并获取fofa关键词，自己再去进行漏洞挖掘（ 一般出现过的漏洞系统，肯定不止一个存在漏洞，每个人的思路不一样，所挖掘到的漏洞就不一样） "),(0,t._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/91b6125db6714139914da2852df78eac.png",data:"aurora"})])],-1),a=(0,t._)("p",null,[(0,t._)("strong",null,"2. 对fofa关键词查看"),(0,t.Uk)('，自己通过已知漏洞去获取对自己有用的资源（比如任意漏洞下载我们就可以通过这个获取web系统的源码，下一步进行白盒审计，或者能前台getshell 的，我们就可以通过命令执行或者写马去获取资源 body="DC_Login/QYSignUp" '),(0,t._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/cb7f366cfcbd4195884e0218f15a1ed6.png",data:"aurora"})],-1),g=(0,t._)("p",null,[(0,t._)("strong",null,"3. 历史漏洞复现"),(0,t.Uk)("（找到能还原复现的站点，如果全部修复，就自己新挖掘该系统） 由于漏洞详细可以知道，在前台企业注册点可以得知，存在文件上传点： http://x.xx.xxx.xxx:3306/DC_Login/QYSignUp 然后开始文件上传获取webshell（通过插件（wappalyzer）得知是asp马子）： "),(0,t._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/fd5331b8ea8b478294c7ccfe51fdf25e.png",data:"aurora"})],-1),r=(0,t._)("p",null,[(0,t.Uk)("此漏洞已被修复（后面的就用peiqi的图片表示）： "),(0,t._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/af58a009898942a0a1eec1705b72cd5b.png",data:"aurora"})],-1),p=(0,t._)("p",null,"当你通过此漏洞获取到webshell时候，你就可以打包源码，进行代码审计，如果审计成功，通杀就获取了，轻松愉快 上分。 当然，如果你不会代码审计，那就只有玩黑盒： 一. 通过文库获取到脆弱系统，一般看见登录框常见两个操作：",-1),s=(0,t._)("ol",null,[(0,t._)("li",null,"弱口令 admin/admin admin/123456 或者收集一个小字典（常见管理员账号和密码大约1w就行）"),(0,t._)("li",null,"万能密码 根据语言来选择 比如asp: ‘or 1 = 1 -- 具体绕过的自己分析 这是常见的两种方法：（弱口令yyds） 案例：")],-1),d=(0,t._)("blockquote",null,[(0,t._)("p",null,"http://xxx.xx.xxx.xxx:8001/DC_Login/Index admin\\admin"),(0,t._)("p",null,"http://xxx.xxx.xxx.xxx:8989/DC_Login/Index admin\\admin")],-1),u=(0,t._)("p",null,"当时测出大约有15个系统系统存在，然后提交edu吃了点烂rank。",-1),b=(0,t._)("ol",{start:"3"},[(0,t._)("li",null,[(0,t.Uk)("当进入系统后台后重点关注的功能点："),(0,t._)("strong",null,"用户管理功能"),(0,t.Uk)("（这个功能点几乎所有后台都会有的，测试方法是添加管理员的时候删除cookie，如果成功，则可能通杀该系统所有站点） "),(0,t._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/dc86ed5e0d1a44c8a8091fec09c7576b.png",data:"aurora"})])],-1),x=(0,t._)("p",null,"漏洞复现：",-1),m=(0,t._)("blockquote",null,[(0,t._)("p",null,"http://xxx.xxx.xx.xx:8989/能弱口令进入的系统： admin\\admin")],-1),_=(0,t._)("ol",null,[(0,t._)("li",null,"添加管理员处抓包，然后发送包添加成功：")],-1),h=(0,t._)("p",null,[(0,t._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/b5c7df126ae248fc95c68cfa86ba67e0.png",data:"aurora"})],-1),f=(0,t._)("ol",{start:"2"},[(0,t._)("li",null,[(0,t.Uk)("删除cookie后尝试能否添加成功，发现也可以添加成功： "),(0,t._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/c146f068a5244ecf84b122b14c157d9a.png",data:"aurora"})])],-1),k=(0,t._)("p",null,[(0,t.Uk)("返回查看： "),(0,t._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/7b1147b3408945029fc814382d8cecc9.png",data:"aurora"})],-1),E=(0,t._)("p",null,"退出使用删除cookie后添加的账户，看看能否正常登录：（成功登录）",-1),z=(0,t._)("p",null,[(0,t._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/bebe6941f00446da8120c1b118925567.png",data:"aurora"})],-1),U=(0,t._)("p",null,"发现删除cookie后都可以，这样将不可以登录的站点，看看使用此数据包，是否可以成功登录： 案例站点：http://xxx.xxx.xx.xx:8001/# 将数据包中的host换为目标站点的ip",-1),w=(0,t._)("blockquote",null,[(0,t._)("p",null,[(0,t.Uk)("POST /DC_BASE_QXGL_User/SaveData HTTP/1.1 Host: xxx.xx.xx.xx:8989 Content-Length: 151 Accept: "),(0,t._)("em",null,"/"),(0,t.Uk)(" X-Requested-With: XMLHttpRequest User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Content-Type: application/x-www-form-urlencoded Origin: Referer: /DC_BASE_QXGL_User/UserEdit?eid=add Accept-Encoding: gzip, deflate Accept-Language: zh-CN,zh;q=0.9 Connection: close")]),(0,t._)("p",null,'eid=add&fmDataStr={"uid":"-1","utype":"0","ghxh":"200","uname":"test2","psw":"admin123","psw2":"admin123","roleid":"2","rolename":"ç®¡çå"}')],-1),y=(0,t._)("p",null,[(0,t.Uk)("将目标站点的ip写在数据包中的host，然后burp修改目标，进行放包： "),(0,t._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/ef6340924d7b4e69b25fcc83113ae3f3.png",data:"aurora"})],-1),S=(0,t._)("p",null,[(0,t.Uk)("可以看见处理，在尝试登录： "),(0,t._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"在这里插入图片描述",originSrc:"https://img-blog.csdnimg.cn/e9d09f9ea9fb45a2869c87966c74548e.png",data:"aurora"})],-1),C=(0,t._)("p",null,"Ok 通杀到手，补天通用给了100元，然后edu刷了30rank 。",-1),v={},A=(0,n(3744).Z)(v,[["render",function(l,i){return(0,t.wg)(),(0,t.iD)(t.HY,null,[c,o,e,a,g,r,p,s,d,u,b,x,m,_,h,f,k,E,z,U,w,y,S,C],64)}]])}}]);