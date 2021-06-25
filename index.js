const express = require('express');
const bodyParser = require('body-parser');

const app = express();
require('dotenv').config()

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get('/', (req, res) => {
	return res.render('index', {});
})

app.listen(process.env.PORT);