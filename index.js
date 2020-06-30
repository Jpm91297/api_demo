const fetch = require('node-fetch')

fetch('ENTER URL HERE')
.then(res => res.json())
.then(data => console.log(data))