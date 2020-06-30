const express = require('express');
const bp = require('body-parser');

//const fs = require('fs');
const app = express()


app.use(bp())
// const configs = JSON.parse(fs.readFileSync('./config.json', 'utf-8'))
const PORT = 9000;

app.get('/api/demo', function(request, response)
{
    response.status(200).send({message: 'Hello World'})
})

app.post('/api/sendstuff/:id', (req, res) => {
    console.log(req)
    if  (req.params.id)
    {
        console.log('request received, printing params now...')
        console.log(req.params.id)
        req.status(200).send({message: 'request received'});
    }
    else
        res.status(500).send({message: 'error, was expecting message body'})
})

app.listen(PORT, () => console.log('server is up at port ${PORT}'))