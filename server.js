var app = require('express')()
  , server = require('http').createServer(app)
  , io = require('socket.io').listen(server);

server.listen(3000);

var chat = io
  .of('/chat')
  .on('connection', function (socket) {
    socket.emit('a message', {
        that: 'only'
      , '/chat': 'will get'
    });
    chat.emit('a message', {
        everyone: 'in'
      , '/chat': 'will get'
    });
  });

var news = io
  .of('/news')
  .on('connection', function (socket) {
    socket.emit('item', { news: 'item' });
  });

//   var express = require('express')
//   , app = express()
//   , http = require('http')
//   , server = http.createServer(app)
//   , routes = require('./routes')
//   , socket = require('./routes/socket.js')
//   , io = require('socket.io').listen(server);



// // Heroku config only
// if(process.env.PORT) {
//   io.configure(function () { 
//     io.set("transports", ["xhr-polling"]); 
//     io.set("polling duration", 10); 
//   });  
// }


// // Configuration
// var config = require('./config')(app, express);


// // Routes
// app.get('/', routes.index);
// app.get('/partials/:name', routes.partials);

// // redirect all others to the index (HTML5 history)
// app.get('*', routes.index);

// // Socket.io Communication

// io.sockets.on('connection', socket);

// // Start server
// var port = process.env.PORT || 5000;

// server.listen(port);