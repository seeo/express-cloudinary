var express = require('express');
var ejsLayouts = require('express-ejs-layouts');
var app = express();
/* adding multer configs here:   */
var multer = require('multer');
//multer will create a new folder
var upload = multer({ dest: './uploads/' });


app.set('view engine', 'ejs');
app.use(ejsLayouts);

app.get('/', function(req, res) {
  res.render('index');
});

/* setting the route for multer uploads here...  */
//in the new folder, the file name wil be what you specified...
app.post('/', upload.single('aFileWithSomeName'), function (req, res) {
    res.send(req.file);
});

app.listen(3000);
