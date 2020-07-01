const express = require('express');
const app = express();
var request = require("request");


var PORT = 9000;

var options = {
    method: 'GET',
    url: 'https://mashape-community-urban-dictionary.p.rapidapi.com/define',
    qs: {term: 'car'},
    headers: {
      'x-rapidapi-host': 'mashape-community-urban-dictionary.p.rapidapi.com',
      'x-rapidapi-key': 'f8df2a770emsh8d994358338f8a7p181a4ajsn17c2ef979adc',
      useQueryString: true
    }
  };

  request(options, function (error, response, body) {
	if (error) throw new Error(error);

	console.log(body);
});

app.get('/', (req,res) => {
    res.send('Hello World');
});


app.listen(PORT, () => console.log('Server started'));