var express = require('express')
var app = express()

//Hello World
/*
app.get('/home', function(req, res) {
	res.end('Hello World!')
})
*/

//Static
//app.use(express.static(process.argv[3] || path.join(_dirname, 'public')));

//Jade
/*
app.set('view engine', 'jade')
app.set('views', process.argv[3])
app.get('/home', function(req, res) {
	res.render('index', {date: new Date().toDateString()})
})*/

//Form
/*
var bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({extended: false}))
app.post('/form', function(req, res) {
	res.end(req.body.str.split('').reverse().join(''))
})*/

//Style
/*
app.use(require('stylus').middleware(process.argv[3]))
app.use(express.static(process.argv[3]))
*/

//Param
/*
app.put('/message/:id', function(req, res) {
	res.end(require('crypto').createHash('sha1').update(new Date().toDateString() + req.params.id).digest('hex'))
})
*/

//Query
/*
app.get('/search', function(req, res) {
	res.send(req.query)
})*/

//JSON
var fs = require('fs')
app.get('/books', function(req, res) {
	fs.readFile(process.argv[3], function(err, data) {
		object = JSON.parse(data)
		res.json(object)
	})
})

/*JSON Official
    var express = require('express')
    var app = express()
    var fs = require('fs')
    
    app.get('/books', function(req, res){
      var filename = process.argv[3]
      fs.readFile(filename, function(e, data) {
        if (e) return res.sendStatus(500)
        try {
          books = JSON.parse(data)
        } catch (e) {
          res.sendStatus(500)
        }
        res.json(books)
      })
    })
    
    app.listen(process.argv[2])*/

app.listen(process.argv[2])

