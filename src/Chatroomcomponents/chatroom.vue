<template>
  <div class="container">
    <div class="navbar">
      <div v-if="roomOpen" class="back" @click="back">返回</div>
      <div class="title">{{ title }}</div>
    </div>
    <div v-if="!roomOpen"  class="openBg">
      <div class="userInfo">
        <div v-if="!nickname">
        <img src="https://joeschmoe.io/api/v1/1000" width="250" height="250" style="margin: auto"/>
        <div class="nameInputBox">
            <input type="text" class="nameInput" v-model="inputname" placeholder="请输入昵称" @keydown="nameKeydown" />
          <div class="nameConfirmBtn" @click="randomName">随机</div>
          <div class="nameConfirmBtn" @click="certainName">确认</div>
        </div>
        
          
        </div>
        <div v-else>
        <img :src="'https://joeschmoe.io/api/v1/'+nickname" width="250" height="250" style="margin: auto" />
        <div  class="nickname">当前昵称：{{ nickname }}</div>
        <div  class="nickname">点击左侧房间加入聊天</div>
          <div class="nameInputBox">
            <input type="text" class="nameInput" v-model="inputname" placeholder="请输入自定义昵称" @keydown="nameKeydown" />
          <div class="nameConfirmBtn" @click="certainName">保存</div>
          <div class="nameConfirmBtn" @click="randomName">随机</div>
          
        </div>
        </div>
       
      </div>
        <div class="niceButton2" @click="enterRoom(item)" v-for="(item, i) in roomList" :key="i">
          <span class="text">{{ item.name }}</span>
        </div>
    </div>
    <div v-else class="bgImage" >
      <div class="roomInfo">
        <div class="onLineBox">
          您的昵称：<span class="roomNickname">{{ this.nickname }}</span>
          当前房间在线人数：{{ this.onlineNum }}
        </div>
      </div>
      <div class="msgBox" ref="msg" @scroll="listScroll">
        <div class="msgPanel" ref="msgList">
          <div :class="['msgItem', item.self && 'selfItem']" v-for="(item, i) in msgList" :key="i">
            <span v-if="!item.self && item.name" style="font-weight: 500; font-size: 10px;color: black;top:50px">
            <span class="img fl"><img :src="'https://joeschmoe.io/api/v1/'+item.name" width=40px height=40px loading="lazy"></span>{{ item.name }} :
            <span class="leftmessage">{{ item.content }}</span>
             </span>
            
            <span v-if="item.self" style="font-size:12px;right:10px; top:0;color: black">
            <span class="rightmessage">{{ item.content }}</span>
             : 我
            <span class="img fr"><img :src="'https://joeschmoe.io/api/v1/'+item.name" width=40px height=40px loading="lazy"></span></span>
            <span v-if="!item.name"><span class="p">{{ item.content }}</span></span>
          </div>
        </div>
      </div>
      
      <div class="msgFooter">
        <input class="msgInput" type="text" v-model="inputMsg" placeholder="请输入发言内容" @keydown="sendInput" />
        <div class="btn" @click="sendMsg">SEND</div>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
import smoothscroll from 'smoothscroll-polyfill'
import { debounce } from 'lodash'
import { roomList } from './roomlist.js'
import { isScrollBottom } from '@/common/util.js'
import RandomClass from './RandomInitial.js'
smoothscroll.polyfill()

export default {
  name: 'chatroom',
  data () {
    return {
      nickname: '',
      inputname: '',
      userId: '',
      roomList,
      msgList: [],
      roomOpen: false,
      ws: null,
      onlineNum: 0,
      inputMsg: '',
      currentRoomInfo: 0,
      msgRef: null,
      scrollIsBottom: true,
      wrapperHeight: 0,
      isBindScrolled: false,
      isSending: false,
      msgListRef: null,
      scrollBottomTimeId: null,
    }
  },
  computed: {
    title() {
      return this.roomOpen ? this.currentRoomInfo.name : '聊天室首页'
    },
  },  
  watch: {
    msgList: {
      deep: true,
      handler() {
        this.msgChange()
      },
    },
    roomOpen(val) {
      if (val) {
        this.$nextTick(() => {
          this.msgRef = this.$refs.msg
          this.msgListRef = this.$refs.msgList
          this.wrapperHeight = this.msgRef.offsetHeight
        })
      }
    },
  },
  mounted() {
    
  },
  methods: {
    enterRoom (item) {
      if (!this.nickname) return Toast('请输入或随机生成您的昵称')
      this.navbarProps = { ...this.navbarProps, title: item.name }
      this.currentRoomInfo = item

      this.connect()
      console.log('before open', this.ws.readyState)

      this.ws.onopen = () => {
        console.log('onopen', this.ws.readyState)
        this.roomOpen = true
        this.ws.send(JSON.stringify({
          userId: this.userName,
          userName: this.nickname,
          roomId: item.roomId,
          roomName: item.name,
          event: 'login',
        }))
      }

      this.ws.onmessage = (message) => {
        const data = JSON.parse(message.data)
        this.onlineNum = data.num
        if (data.event === 'login') {
          this.msgList.push({
            content: `${data.userName}进入${data.roomName}`,
          })
        } else if (data.event === 'logout') {
          console.log('logout', data)
          this.msgList.push({
            content: `${data.userName}离开`,
          })
        } else {
          const self = this.userId === data.userId
          if (self) return
          this.msgList.push({
            name: data.userName,
            self: false,
            content: data.content,
          })
        }
      }

      this.ws.onclose = () => {
        Toast('您已离开房间')
        this.roomOpen = false
        this.msgList = []
        this.onlineNum = 0
      }
    },
    connect () {
      this.ws = new WebSocket('ws://47.107.111.88:8081')
    },
    sendMsg () {
      if (!this.inputMsg.trim().length) return Toast('请输入发送内容')
      this.isSending = true
    
      this.ws.send(JSON.stringify({
        userName: this.nickname,
        userId: this.userId,
        roomId: this.currentRoomInfo.roomId,
        roomName: this.currentRoomInfo.name,
        content: this.inputMsg.trim(),
      }))
      // 本地默认显示
      this.msgList.push({
        content: `${this.inputMsg}`,
        name: this.nickname,
        self: true,
      })
      this.inputMsg = ''
      setTimeout(() => {
        this.scrollBottom()
        this.isSending = false
      }, 0)
    },
    close () {
      this.ws && this.ws.close()
    },
    back () {
      if (!this.roomOpen) return
      this.roomOpen = false
      this.msgList = []
      this.onlineNum = 0
      this.close()
      Toast({
        content: '您已退出房间',
        duration: 1000,
      })
    },
    randomName(){
      var vm = this;
      vm.nickname=RandomClass.randomName();
      this.userId = `${+new Date()}`
    },
    certainName () {
      if (this.inputname.trim().length) {
        this.nickname = this.inputname.trim()
        this.userId = `${+new Date()}`
      } else {
        Toast('请输入昵称')
      }
    },
    msgChange() { // 监听消息列表变化以自动滚动到最新消息
      if (this.scrollBottomTimeId) {
        clearTimeout(this.scrollBottomTimeId)
        this.scrollBottomTimeId = null
      }
      setTimeout(() => {
        if (!this.scrollIsBottom) {
          this.scrollBottom()
          return
        }
        this.$nextTick(() => {
          const listHeight = this.msgListRef.offsetHeight
          const diff = listHeight - this.wrapperHeight 
          const top = this.msgRef.scrollTop 
          if (diff - top > 10) {
            if (this.isBindScrolled) {
              this.isBindScrolled = false
              this.msgRef.removeEventListener('scroll', this.addScroll, false)
            }
            this.msgRef.scrollTo({
              top: diff + 10,
              left: 0,
              behavior: 'smooth',
            })
          } else if (!this.isSending) {
            if (!this.isBindScrolled) {
              this.isBindScrolled = true
              this.msgRef.addEventListener('scroll', this.addScroll, false)
            }
          }
        })
      }, 500);
    },
    addScroll() {
      debounce(this.listScroll, 200)
      this.isBindScrolled = true
    },
    scrollBottom() {
      this.msgRef.scrollTo({
        top: this.msgListRef.offsetHeight,
        left: 0,
        behavior: 'smooth',
      })
    },
    listScroll() {
      const ele = this.msgRef
      const isBottom = isScrollBottom(ele, ele.clientHeight, 50)
      if (isBottom) {
        this.scrollIsBottom = true
      } else {
        this.scrollIsBottom = false
      }
    },
    sendInput(e) {
      let key = e.keyCode;  
      if (key == 13) {
        this.sendMsg()
      }
    },
    nameKeydown(e) {
      let key = e.keyCode;  
      if (key == 13) {
        this.certainName()
      }
    }
  },
  beforeDestroy() {
    this.close()
    this.msgRef && this.msgRef.removeEventListener('scroll', this.addScroll, false)
  }
}
</script>

<style scoped>
@import './chatroom.scss';
</style>

