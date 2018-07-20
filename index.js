const express = require('express'); 
const app = express();

const json = require('./events.json'); //(with path)

app.set('view engine', 'pug')


app.post('/', function (req, res){
	res.send('POST request to homepage')
})


app.listen(8000, () => console.log('Example app listening on port 8000!'))

const search = "5b1902b8352f53e06abe87d9"
const search1 = "5800e33d414fb5dfd13da446"


app.get('/', function(req, res){
	let results = [];

	json.events.forEach(function(item, index){
		if (item.data.id == search){
			results.push(item.data.title + " - /" + item.data.urlId)
		}
	})
	res.render('index', {title: 'Events LookUp', message:results})
})
