var express = require('express');
var ejsLayouts = require('express-ejs-layouts');
var app = express();
/* adding multer configs here:   */
var multer = require('multer');
//multer will create a new folder
var upload = multer({ dest: './uploads/' });

//load cloudinary module
var cloudinary = require('cloudinary');


app.set('view engine', 'ejs');
app.use(ejsLayouts);

app.get('/', function(req, res) {
  res.render('index');
});

/* setting the route for multer uploads here...  */
//in the new folder, the file name wil be what you specified...
app.post('/', upload.single('myFileFromMulter'), function (req, res) {
    res.send(req.file);
});

//post route of uploaded cloudinary file
//post route

/* Uploading images to cloudinary can be done by requiring the cloudinary module and
calling the upload function within cloudinary's uploader. Pass the path of the file that
 needs to be uploaded, then print the results in the callback. The result will have
 information regarding the cloudinary upload.   */

app.post('/', upload.single('myFile'), function (req, res) {
    cloudinary.uploader.upload(req.file.path, function (result) {
        res.send(result);
    });
});

app.listen(3000);
