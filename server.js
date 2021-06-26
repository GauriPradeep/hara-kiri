const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

require('dotenv').config()

io.on('connection', socket => {
	console.log("Client has connected ;)");
	
	socket.on("send-message", () => {
		console.log("Got a message!!");
		socket.broadcast.emit("response");
	});
});


app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get('/', (req, res) => {
	return res.render('index', {});
});

server.listen(process.env.PORT);