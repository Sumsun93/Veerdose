/*
 * Require
 */
const express = require('express');
const { Server } = require('http');
const mongoose = require('mongoose');
const socket = require('socket.io');
const MessageModel = require('./models/Messages');
// const serveStatic = require('serve-static');


/*
 * Vars
 */
const app = express();
const server = Server(app);
const io = socket(server);

/*
. Routes pour axios
*/

// app.use(serveStatic('public/', { index: ['index.html'] }));

// const indexPath = `${__dirname}/public/index.html`;
// app.get('*', (req, res) => {
//   res.sendFile(indexPath);
// });

/**
 * MongoDB
 */

// Connexion a MongoDB sur la DB "matefinder"
mongoose.connect('mongodb://localhost/veerdose', (err) => {
  if (err) {
    throw err;
  }
});

/**
 * Socket.io
 */
io.on('connection', (socket) => {
  console.log(socket.id);

  socket.on('send_message', (data) => {
    const msg = new MessageModel();
    // On défini ces propriétés
    msg.username = data.username;
    msg.message = data.inputMessage;
    msg.userSocketID = socket.id;

    // On le sauvegarde dans MongoDB !
    msg.save((err, msgData) => {
      if (err) {
        throw err;
      }
      io.emit('receive_message', msgData);
    });
  });

  socket.on('get_messages', () => {
    MessageModel.find()
      .exec((err, msgs) => {
        if (err) {
          throw err;
        }
        else {
          socket.emit('update_all_messages', msgs);
        }
      });
  });

  // quand l'user quitte le site
  socket.on('disconnect', () => {
    console.log(`${socket.id} disconnected`);
  });
});

/*
 * Server
 */
server.listen(3000, () => {
  console.log('listening on *:3000');
});
