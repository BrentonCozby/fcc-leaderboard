const express = require('express');
const path = require('path');
const app = express();
require('dotenv').config()

const PORT = process.env.PORT || 3000

app.use(express.static('./build'));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, './build', 'index.html'));
});

app.listen(PORT, function() {
    console.log(`Listening on port ${PORT}...`);
});
