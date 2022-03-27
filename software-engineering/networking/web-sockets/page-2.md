# Page 2

### SOCKET.IO SERVER TESTING <a href="#418c" id="418c"></a>

## How to test your Socket.IO server using Postman <a href="#60be" id="60be"></a>

### Has the thought of using postman to test your socket.io server ever crossed your mind? The latest version of postman supports socket.io testing with some limitations which are listed below. Moreover, I have also demonstrated an example of how message passing works between the socket.io server and postman (client). <a href="#f97e" id="f97e"></a>

![](https://miro.medium.com/max/942/1\*SD2DJOX\_RgOZk9y1fJL\_Zg.png)

### Currently supported features on Postman ✅ <a href="#0b21" id="0b21"></a>

* Creating Socket.IO requests
* Passing in the socket.io address and request body/payload
* Supports text , json and binary formats for request body

### Currently unavailable features on Postman ❌ <a href="#44a4" id="44a4"></a>

* **API testing** not supported
* On socket.io server reconnection, **message history is lost**
* **Web socket traffic is not tracked** in postman console
* Unable to **save socket.io request** in postman collection

### Connecting to a socket.io server <a href="#bdc8" id="bdc8"></a>

Below is a code snippet of how to initialise/init the server by attaching it to an existing http server in nodejs.

```
var server = http.createServer(app);const socketio = require('socket.io');var io = socketio(server);
```

### Socket.io server events <a href="#e401" id="e401"></a>

Currently we have an event **joinRoom** which will take in input from the client and emit an event **roomUsers and roomSettings** to the socket.io server.

```
io.on('connection',(socket)=>{    console.log('socket is ready for connection');    socket.on('joinRoom', ({ ...roomObject }) => {        const user = userJoin(socket.id, roomObject.user.name, roomObject.room_uuid,roomObject.user.user_uuid);        socket.join(user.room);        socket.emit('message', 'Welcome to application'+user.username);        socket.broadcast            .to(user.room)            .emit(                'message',               `${user.username} has joined the call`            );        io.to(user.room).emit('roomUsers', {            room: user.room,            users: getRoomUsers(user.room)        });        io.to(user.room).emit('roomSettings', {            ...roomObject        });    })
```

### Socket.IO requests in Postman <a href="#3a80" id="3a80"></a>

A new Socket.IO request cannot be created by opening a new tab hence we need to go to `New > WebSocket Request.`

![](https://miro.medium.com/max/1400/1\*shWJeSU1S9C88Wvw9Vl62w.png)

Select Socket.IO from the dropdown and key in the HTTP server url in the address bar.

![](https://miro.medium.com/max/1400/1\*q2vOolOKaNIbN4ZcrkDNMg.png)

We can start sending and receiving message once the connection is established.

![](https://miro.medium.com/max/1400/1\*pvOpxB3u5upPaN9vIIoEsw.png)2.0 Messages, Listeners and input view![](https://miro.medium.com/max/496/1\*Cx38V6kj8hS2LkZ4rtAC6Q.png)2.1 Add in your server listeners

In the screenshot 2.1 above you can see that I have added the **joinRoom** and **roomUsers** events which I have defined in my socket.io server code. I have used postman as a socket.io client to send an event joinRoom with a **JSON** input to the server.

![](https://miro.medium.com/max/1400/1\*1fmRHjr2ATtpyhjXvL9Hkw.png)2.2 Overview of messages

In the messages section (refer to image 2.2), postman logs the joinRoom event along with the roomUsers event which the server should receive. The **roomUsers** event returns to us the **number of users connected to that socket**. Postman also supports searching and deletion of message logs.

### Finally <a href="#2a19" id="2a19"></a>

Hope the above mentioned instructions will help you to send socket.io requests with Postman and provide a beginners insight to this new feature of Postman which is still in beta stage. Would love your feedback!
