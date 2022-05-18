const Websocket = require('ws')

const wss = new Websocket.Server({ port: 8081 })

const group = {}
wss.on('connection', function (ws) {
  ws.isAlive = true

  ws.on('message', function (message) {
    console.log('服务器收到消息: ', message.toString())
    const data = JSON.parse(message.toString())
    if (data.event === 'login') {
      ws.enterInfo = data
    }

    if (typeof ws.roomId === 'undefined' && data.roomId) {
      ws.roomId = data.roomId
      if (typeof group[ws.roomId] === 'undefined') {
        group[ws.roomId] = 1
      } else {
        group[ws.roomId]++
      }
    }
    data.num = group[ws.roomId]
    wss.clients.forEach(client => {
      if (client.readyState === Websocket.OPEN && client.roomId === ws.roomId) {
        client.send(JSON.stringify(data))
      }
    })
  })

  ws.on('close', function () {
    group[ws.roomId]--

    wss.clients.forEach(function each (client) {
      if (client !== ws && client.readyState === Websocket.OPEN && client.roomId === ws.roomId) {
        client.send(JSON.stringify({
          ...ws.enterInfo,
          event: 'logout',
          num: group[ws.roomId],
        }))
      }
    })
  })
})
