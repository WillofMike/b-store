const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const methodOverride = require('method-override');
const index = require('./routes/index');

const app = express();

const port = process.env.PORT || 3000;





app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'))

app.use(methodOverride('_method'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static('public'));

app.use('/', index);


app.listen(port, () => {
  console.log('listening on: ',  port);
})
