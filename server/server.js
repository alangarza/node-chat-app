const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;


var app = express();

app.get('/',(req, res) => {
    res.sendFile(publicPath + '/index.html')
})


app.listen(port, () => {
    console.log(`Started up at port ${port}`);
  });
  


// console.log(__dirname + '/../public');
// console.log(publicPath);