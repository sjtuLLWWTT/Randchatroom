(function(t){function e(e){for(var s,a,r=e[0],c=e[1],l=e[2],u=0,d=[];u<r.length;u++)a=r[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);m&&m(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],s=!0,r=1;r<n.length;r++){var c=n[r];0!==o[c]&&(s=!1)}s&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var s={},o={app:0},i=[];function a(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=s,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)a.d(n,s,function(e){return t[e]}.bind(null,s));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var m=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("c79f")},2404:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Chatroom")],1)},i=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"navbar"},[t.roomOpen?n("div",{staticClass:"back",on:{click:t.back}},[t._v("返回")]):t._e(),n("div",{staticClass:"title"},[t._v(t._s(t.title))])]),t.roomOpen?n("div",{staticClass:"bgImage"},[n("div",{staticClass:"roomInfo"},[n("div",{staticClass:"onLineBox"},[t._v(" 您的昵称："),n("span",{staticClass:"roomNickname"},[t._v(t._s(this.nickname))]),t._v(" 当前房间在线人数："+t._s(this.onlineNum)+" ")])]),n("div",{ref:"msg",staticClass:"msgBox",on:{scroll:t.listScroll}},[n("div",{ref:"msgList",staticClass:"msgPanel"},t._l(t.msgList,(function(e,s){return n("div",{key:s,class:["msgItem",e.self&&"selfItem"]},[!e.self&&e.name?n("span",{staticStyle:{"font-weight":"500","font-size":"10px",color:"black",top:"50px"}},[n("span",{staticClass:"img fl"},[n("img",{attrs:{src:"https://joeschmoe.io/api/v1/"+e.name,width:"40px",height:"40px",loading:"lazy"}})]),t._v(t._s(e.name)+" : "),n("span",{staticClass:"leftmessage"},[t._v(t._s(e.content))])]):t._e(),e.self?n("span",{staticStyle:{"font-size":"12px",right:"10px",top:"0",color:"black"}},[n("span",{staticClass:"rightmessage"},[t._v(t._s(e.content))]),t._v(" : 我 "),n("span",{staticClass:"img fr"},[n("img",{attrs:{src:"https://joeschmoe.io/api/v1/"+e.name,width:"40px",height:"40px",loading:"lazy"}})])]):t._e(),e.name?t._e():n("span",[n("span",{staticClass:"p"},[t._v(t._s(e.content))])])])})),0)]),n("div",{staticClass:"msgFooter"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputMsg,expression:"inputMsg"}],staticClass:"msgInput",attrs:{type:"text",placeholder:"请输入发言内容"},domProps:{value:t.inputMsg},on:{keydown:t.sendInputKeydown,input:function(e){e.target.composing||(t.inputMsg=e.target.value)}}}),n("div",{staticClass:"btn",on:{click:t.sendMsg}},[t._v("SEND")])])]):n("div",{staticClass:"openBg"},[n("div",{staticClass:"userInfo"},[t.nickname?n("div",[n("img",{staticStyle:{margin:"auto"},attrs:{src:"https://joeschmoe.io/api/v1/"+t.nickname,width:"250",height:"250"}}),n("div",{staticClass:"nickname"},[t._v("当前昵称："+t._s(t.nickname))]),n("div",{staticClass:"nickname"},[t._v("点击左侧房间加入聊天")]),n("div",{staticClass:"nameInputBox"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputname,expression:"inputname"}],staticClass:"nameInput",attrs:{type:"text",placeholder:"请输入自定义昵称"},domProps:{value:t.inputname},on:{keydown:t.nameKeydown,input:function(e){e.target.composing||(t.inputname=e.target.value)}}}),n("div",{staticClass:"nameConfirmBtn",on:{click:t.certainName}},[t._v("保存")]),n("div",{staticClass:"nameConfirmBtn",on:{click:t.randomName}},[t._v("随机")])])]):n("div",[n("img",{staticStyle:{margin:"auto"},attrs:{src:"https://joeschmoe.io/api/v1/1000",width:"250",height:"250"}}),n("div",{staticClass:"nameInputBox"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputname,expression:"inputname"}],staticClass:"nameInput",attrs:{type:"text",placeholder:"请输入昵称"},domProps:{value:t.inputname},on:{keydown:t.nameKeydown,input:function(e){e.target.composing||(t.inputname=e.target.value)}}}),n("div",{staticClass:"nameConfirmBtn",on:{click:t.randomName}},[t._v("随机")]),n("div",{staticClass:"nameConfirmBtn",on:{click:t.certainName}},[t._v("确认")])])])]),t._l(t.roomList,(function(e,s){return n("div",{key:s,staticClass:"niceButton2",on:{click:function(n){return t.enterRoom(e)}}},[n("span",{staticClass:"text"},[t._v(t._s(e.name))])])}))],2)])},r=[],c=n("5530"),l=(n("b0c0"),n("e9c4"),n("99af"),n("498a"),n("76a0")),m=n("7707"),u=n.n(m),d=n("2ef0"),p=[{roomId:1,name:"房间1"},{roomId:2,name:"房间2"},{roomId:3,name:"房间3"},{roomId:4,name:"房间4"}],f=function(t,e,n){var s=t.scrollHeight-t.scrollTop,o=e+n,i=s<=o;return i},h=n("bee2"),g=n("d4ec"),v=n("ade3"),b=Object(h["a"])((function t(){Object(g["a"])(this,t)}));Object(v["a"])(b,"randomNum",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return Math.round(Math.random()*(e-t))+t})),Object(v["a"])(b,"randomName",(function(){var t=["赵","钱","孙","李","周","吴","郑","王","冯","陈","褚","卫","蒋","沈","韩","杨","苏","潘","葛","奚","范","彭","郎","鲁","韦","昌","马","苗","凤","花","方","俞","任","袁","柳","酆","鲍","史","唐","费","廉","岑","薛","雷","贺","倪","汤","滕","殷","罗","毕","郝","邬","安","常","乐","于","时","傅","皮","卞","齐","康","伍","余","元","卜","顾","孟","平","黄","和","穆","萧","尹","姚","邵","湛","汪","祁","毛","禹","狄","米","贝","明","臧","计","伏","成","戴","谈","宋","茅","庞","熊","纪","舒","屈","项","祝","董","梁","杜","阮","蓝","闵","席","季","麻","强","贾","路","娄","危","江","童","颜","郭","梅","盛","林","刁","钟","徐","邱","骆","高","夏","蔡","田","樊","胡","凌","霍","虞","万","支","柯","昝","管","卢","莫","经","房","裘","缪","干","解","应","宗","丁","宣","贲","邓","郁","单","杭","洪","包","诸","左","石","崔","吉","钮","龚","程","嵇","邢","滑","裴","陆","荣","翁","荀","羊","於","惠","甄","曲","家","封","芮","羿","储","靳","汲","邴","糜","松","井","段","富","巫","乌","焦","巴","弓","牧","隗","山","谷","车","侯","宓","蓬","全","郗","班","仰","秋","仲","伊","宫","宁","仇","栾","暴","甘","钭","厉","戎","祖","武","符","刘","景","詹","束","龙","叶","幸","司","韶","郜","黎","蓟","薄","印","宿","白","怀","蒲","邰","从","鄂","索","咸","籍","赖","卓","蔺","屠","蒙","池","乔","阴","鬱","胥","能","苍","双","闻","莘","党","翟","谭","贡","劳","逄","姬","申","扶","堵","冉","宰","郦","雍","郤","璩","桑","桂","濮","牛","寿","通","边","扈","燕","冀","郏","浦","尚","农","温","别","庄","晏","柴","瞿","阎","充","慕","连","茹","习","宦","艾","鱼","容","向","古","易","慎","戈","廖","庾","终","暨","居","衡","步","都","耿","满","弘","匡","国","文","寇","广","禄","阙","东","欧","殳","沃","利","蔚","越","夔","隆","师","巩","厍","聂","晁","勾","敖","融","冷","訾","辛","阚","那","简","饶","空","曾","毋","沙","乜","养","鞠","须","丰","巢","关","蒯","相","查","后","荆","红","游","竺","权","逯","盖","益","桓","公","万","俟","司","马","上","官","欧","阳","夏","侯","诸","葛","闻","人","东","方","赫","连","皇","甫","尉","迟","公","羊","澹","台","公","冶","宗","政","濮","阳","淳","于","单","于","太","叔","申","屠","公","孙","仲","孙","轩","辕","令","狐","钟","离","宇","文","长","孙","慕","容","鲜","于","闾","丘","司","徒","司","空","丌","官","司","寇","仉","督","子","车","颛","孙","端","木","巫","马","公","西","漆","雕","乐","正","壤","驷","公","良","拓","跋","夹","谷","宰","父","谷","梁","晋","楚","闫","法","汝","鄢","涂","钦","段","干","百","里","东","郭","南","门","呼","延","归","海","羊","舌","微","生","岳","帅","缑","亢","况","郈","有","琴","梁","丘","左","丘","东","门","西","门","商","牟","佘","佴","伯","赏","南","宫","墨","哈","谯","笪","年","爱","阳","佟","第","五","言","福","百","家","姓","终","欧阳","端木","上官","司马","东方","独孤","南宫","夏侯","诸葛","尉迟","公孙","慕容","长孙","宇文","司徒","欧阳","端木","上官","司马","东方","独孤","南宫","夏侯","诸葛","尉迟","公孙","慕容","长孙","宇文","司徒","欧阳","端木","上官","司马","东方","独孤","南宫","夏侯","诸葛","尉迟","公孙","慕容","长孙","宇文","司徒","欧阳","端木","上官","司马","东方","独孤","南宫","夏侯","诸葛","尉迟","公孙","慕容","长孙","宇文","司徒","欧阳","端木","上官","司马","东方","独孤","南宫","夏侯","诸葛","尉迟","公孙","慕容","长孙","宇文","司徒"],e=["澄邈","德泽","海超","海阳","海荣","海逸","海昌","瀚钰","瀚文","涵亮","涵煦","明宇","涵衍","浩皛","浩波","浩博","浩初","浩宕","浩歌","浩广","浩邈","浩气","浩思","浩言","鸿宝","鸿波","鸿博","鸿才","鸿畅","鸿畴","鸿达","鸿德","鸿飞","鸿风","鸿福","鸿光","鸿晖","鸿朗","鸿文","鸿轩","鸿煊","鸿骞","鸿远","鸿云","鸿哲","鸿祯","鸿志","鸿卓","嘉澍","光济","澎湃","彭泽","鹏池","鹏海","浦和","浦泽","瑞渊","越泽","博耘","德运","辰宇","辰皓","辰钊","辰铭","辰锟","辰阳","辰韦","辰良","辰沛","晨轩","晨涛","晨濡","晨潍","鸿振","吉星","铭晨","起运","运凡","运凯","运鹏","运浩","运诚","运良","运鸿","运锋","运盛","运升","运杰","运珧","运骏","运凯","运乾","维运","运晟","运莱","梦秋","梦凡","秋巧","若云","元容","怀蕾","灵寒","天薇","翠安","乐琴","宛南","怀蕊","白风","访波","亦凝","易绿","夜南","曼凡","亦巧","青易","冰真","白萱","友安","海之","小蕊","又琴","天风","若松","盼菡","秋荷","香彤","语梦","惜蕊","迎彤","沛白","雁彬","易蓉","雪晴","诗珊","春冬","晴钰","冰绿","半梅","笑容","沛凝","映秋","盼烟","晓凡","涵雁","问凝","冬萱","晓山","雁蓉","梦蕊","山菡","南莲","飞双","凝丝","思萱","怀梦","雨梅","冷霜","向松","迎丝","迎梅","雅彤","香薇","以山","碧萱","寒云","向南","书雁","怀薇","思菱","忆文","翠巧","书文","若山","向秋","凡白","绮烟","从蕾","天曼","又亦","从语","绮彤","之玉","凡梅","依琴","沛槐","又槐","元绿","安珊","夏之","易槐","宛亦","白翠","丹云","问寒","易文","傲易","青旋","思真","雨珍","幻丝","代梅","盼曼","妙之","半双","若翠","初兰","惜萍","初之","宛丝","寄南","小萍","静珊","千风","天蓉","雅青","寄文","涵菱","香波","青亦","元菱","翠彤","春海","惜珊","向薇","冬灵","惜芹","凌青","谷芹","雁桃","映雁","书兰","盼香","梅致","寄风","芳荷","绮晴","映之","醉波","幻莲","晓昕","傲柔","寄容","以珊","紫雪","芷容","书琴","美伊","涵阳","怀寒","易云","代秋","惜梦","宇涵","谷槐","怀莲","英莲","芷卉","向彤","新巧","语海","灵珊","凝丹","小蕾","迎夏","慕卉","飞珍","冰夏","亦竹","飞莲","秋月","元蝶","春蕾","怀绿","尔容","小玉","幼南","凡梦","碧菡","初晴","宛秋","傲旋","新之","凡儿","夏真","静枫","芝萱","恨蕊","乐双","念薇","靖雁","菊颂","丹蝶","元瑶","冰蝶","念波","迎翠","海瑶","乐萱","凌兰","曼岚","若枫","傲薇","雅芝","乐蕊","秋灵","凤娇","觅云","依伊","恨山","从寒","忆香","香菱","静曼","青寒","笑天","涵蕾","元柏","代萱","紫真","千青","雪珍","寄琴","绿蕊","荷柳","诗翠","念瑶","兰楠","曼彤","怀曼","香巧","采蓝","芷天","尔曼","巧蕊","八戒","悟空","金银","珠宝","伟鹏","厚渡","建国","顾家","一一","依依","不忙","萌萌","思思","萱萱","熙熙","鹤轩","伟祺","祺祺","鑫鑫","明熙","明旭","文杰","人杰","明耀","雄逸","田磊","天磊","石磊","俊哲","修杰","泽雨","逸轩","怡怿","天佑","德厚","雅畅","舒畅","皓轩","雅量","泽铭","泽民","明远","婉婷","晏颖","灵灵","玉婷","韵寒","寒冰","欣妍","心祺","佳琪","诗诗","诗涵","菲林","依娜","雪莉","茹雪","灵慧","灵芸","芳菲","澄泓","彬彬","佟伟","炵伟","彤彤","浩然","浩丽","祺祺","麒麒","祁琪","栖栖","冉冉","柒柒","博雅"],n=this.randomNum(0,t.length-1),s=this.randomNum(0,e.length-1),o="";return o=1===this.randomNum(0,1)?e[s][this.randomNum(0,e[s].length-1)]:e[s],"".concat(t[n]+o)})),Object(v["a"])(b,"randomROOM",(function(){var t=["A","B"],e=["0","1","2","3"],n=this.randomNum(0,t.length-1),s=this.randomNum(0,e.length-1),o="";return o=1===this.randomNum(0,1)?e[s][this.randomNum(0,e[s].length-1)]:e[s],"".concat(t[n]+o)}));var w=b;u.a.polyfill();var y={name:"chatroom",data:function(){return{nickname:"",inputname:"",userId:"",roomList:p,msgList:[],roomOpen:!1,ws:null,onlineNum:0,inputMsg:"",currentRoomInfo:0,msgRef:null,scrollIsBottom:!0,wrapperHeight:0,isBindScrolled:!1,isSending:!1,msgListRef:null,scrollBottomTimeId:null}},computed:{title:function(){return this.roomOpen?this.currentRoomInfo.name:"聊天室首页"}},watch:{msgList:{deep:!0,handler:function(){this.msgChange()}},roomOpen:function(t){var e=this;t&&this.$nextTick((function(){e.msgRef=e.$refs.msg,e.msgListRef=e.$refs.msgList,e.wrapperHeight=e.msgRef.offsetHeight}))}},mounted:function(){},methods:{enterRoom:function(t){var e=this;if(!this.nickname)return Object(l["Toast"])("请输入或随机生成您的昵称");this.navbarProps=Object(c["a"])(Object(c["a"])({},this.navbarProps),{},{title:t.name}),this.currentRoomInfo=t,this.connect(),console.log("before open",this.ws.readyState),this.ws.onopen=function(){console.log("onopen",e.ws.readyState),e.roomOpen=!0,e.ws.send(JSON.stringify({userId:e.userName,userName:e.nickname,roomId:t.roomId,roomName:t.name,event:"login"}))},this.ws.onmessage=function(t){var n=JSON.parse(t.data);if(e.onlineNum=n.num,"login"===n.event)e.msgList.push({content:"".concat(n.userName,"进入").concat(n.roomName)});else if("logout"===n.event)console.log("logout",n),e.msgList.push({content:"".concat(n.userName,"离开")});else{var s=e.userId===n.userId;if(s)return;e.msgList.push({name:n.userName,self:!1,content:n.content})}},this.ws.onclose=function(){Object(l["Toast"])("您已离开房间"),e.roomOpen=!1,e.msgList=[],e.onlineNum=0}},connect:function(){this.ws=new WebSocket("ws://localhost:8081")},sendMsg:function(){var t=this;if(!this.inputMsg.trim().length)return Object(l["Toast"])("请输入发送内容");this.isSending=!0,this.ws.send(JSON.stringify({userName:this.nickname,userId:this.userId,roomId:this.currentRoomInfo.roomId,roomName:this.currentRoomInfo.name,content:this.inputMsg.trim()})),this.msgList.push({content:"".concat(this.inputMsg),name:this.nickname,self:!0}),this.inputMsg="",setTimeout((function(){t.scrollBottom(),t.isSending=!1}),0)},close:function(){this.ws&&this.ws.close()},back:function(){this.roomOpen&&(this.roomOpen=!1,this.msgList=[],this.onlineNum=0,this.close(),Object(l["Toast"])({content:"您已退出房间",duration:1e3}))},randomName:function(){var t=this;t.nickname=w.randomName(),this.userId="".concat(+new Date)},certainName:function(){this.inputname.trim().length?(this.nickname=this.inputname.trim(),this.userId="".concat(+new Date)):Object(l["Toast"])("请输入昵称")},msgChange:function(){var t=this;this.scrollBottomTimeId&&(clearTimeout(this.scrollBottomTimeId),this.scrollBottomTimeId=null),setTimeout((function(){t.scrollIsBottom?t.$nextTick((function(){var e=t.msgListRef.offsetHeight,n=e-t.wrapperHeight,s=t.msgRef.scrollTop;n-s>10?(t.isBindScrolled&&(t.isBindScrolled=!1,t.msgRef.removeEventListener("scroll",t.addScroll,!1)),t.msgRef.scrollTo({top:n+10,left:0,behavior:"smooth"})):t.isSending||t.isBindScrolled||(t.isBindScrolled=!0,t.msgRef.addEventListener("scroll",t.addScroll,!1))})):t.scrollBottom()}),500)},addScroll:function(){Object(d["debounce"])(this.listScroll,200),this.isBindScrolled=!0},scrollBottom:function(){this.msgRef.scrollTo({top:this.msgListRef.offsetHeight,left:0,behavior:"smooth"})},listScroll:function(){var t=this.msgRef,e=f(t,t.clientHeight,50);this.scrollIsBottom=!!e},sendInputKeydown:function(t){var e=t.keyCode;13==e&&this.sendMsg()},nameKeydown:function(t){var e=t.keyCode;13==e&&this.certainName()}},beforeDestroy:function(){this.close(),this.msgRef&&this.msgRef.removeEventListener("scroll",this.addScroll,!1)}},_=y,C=(n("6fd2"),n("0c7c")),I=Object(C["a"])(_,a,r,!1,null,"ac6ee4b2",null),N=I.exports,O={name:"App",components:{Chatroom:N}},k=O,S=(n("034f"),Object(C["a"])(k,o,i,!1,null,null,null)),x=S.exports;n("2404"),n("aa35");s["default"].config.productionTip=!1,new s["default"]({render:function(t){return t(x)}}).$mount("#app")},"6fd2":function(t,e,n){"use strict";n("f009")},c79f:function(t,e,n){},f009:function(t,e,n){}});
//# sourceMappingURL=app.39b9e73c.js.map