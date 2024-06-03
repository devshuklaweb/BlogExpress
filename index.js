const express = require('express')
const exphbs = require('express-handlebars');
const path = require("path");
const app = express()
const port = 3000

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('home');
});

//app.use(express.static(path.join(__dirname,"static")))
//app.use('/',require(path.join(__dirname,'routes/blog.js')))


app.listen(port, () => {
    console.log(`Blogs app listening on port http://localhost:${port}`)
})