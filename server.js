let express = require('express');
let cors = require('cors');
let multer = require('multer');
require('dotenv').config()

let app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});

app.post('/api/fileanalyse', multer().single('upfile'), (request, response) => {
  let responseObject = {}
  responseObject['name'] = request.file.originalname
  responseObject['type'] = request.file.mimetype
  responseObject['size'] = request.file.size
  response.json(responseObject)
})