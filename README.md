# 现代前端应用大作业：在线聊天平台
1.  基于Websocket和Node.js
2.  支持多人多房间聊天
3.  实现本地局域网内不同设备访问，需要修改chatroom.vue中的ip（localhost）为本地ip。
4.  实现了自定义和随机登录名称，并且每个名称会绑定一个随机头像，再次输入相同的名称头像相同。
5.  尽可能尝试了课程中学到的优化和移动端设计技术，多采用flex、百分比高宽，让页面适应ipad、手机等场景。
# 使用说明：
1. npm install 安装
2. 在根目录执行：node server.js启动服务器
3. 拆分终端，在根项目执行npm run serve
4. 也可以使用npm run build打包（build后加载路径可能都少了"./"，可以提前修改vue.config.js或手动修改打包后的html文件）
5. 目录predist下有提前打包好的文件，可以直接运行（如果已经修改了chatroom.vue中的ip此处同样需要修改ip）
# 开发过程
  虽然我的前端知识还比较少，但对聊天室比较感兴趣，就尝试了这个题目  
  开发中的整体框架学习了GitHub上的好几个开源代码，最终仿制出一个比较粗糙的版本，实现了基本聊天功能，[见](https://github.com/sjtuLLWWTT/Chatroom-vue)  
  继续开发，把一些开源代码中的功能结合到自己的代码中，成功加入了多房间选择、随机名称，聊天头像等功能。  
  在多机器问题上，开源代码中基本都只实现本地本机登录，或者ipv6协议（看不懂），因此我学习了一些vue项目部署到局域网、服务器的博客和视频，  
  尝试了将dist部署到华为云（但服务器有点贵，且弹性公网ip不太会设置），并且熟练掌握了在vue2，vue3框架下修改ip使得局域网内设备都可以访问的技术。  
  开发过程中遇到了很多奇怪的bug，修bug的同时也更加熟悉了websocket、npm各种指令的原理，一开始用socket.io库，后来学习了使用原生websocket的代码，于是借用了他的设计，50行左右实现了服务端的基本操作，但是没有成功迁移他的心跳时钟（自动断线）设计。  
  总之在开发的过程中，我从零开始探索vue框架，巩固了之前学到的前端知识，也锻炼了自己的编程能力（极大锻炼了debug能力），对于不熟悉的计网知识有了一些了解。虽然在debug和css布局上“浪费”了很多时间，但我感觉这次大作业还是让我收获很多的。  
# 页面展示：登录页面
![](https://github.com/sjtuLLWWTT/Chatroom-vue/blob/main/preview/preview%C2%B7.png)
# 移动端
![](https://github.com/sjtuLLWWTT/Chatroom-vue/blob/main/preview/preview%C2%B7.png)
# PC端
![](https://github.com/sjtuLLWWTT/Chatroom-vue/blob/main/preview/preview%C2%B7.png)
