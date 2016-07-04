var express = require('express');
var router = express.Router();
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

/* GET home page. */
router.get('/', function(req, res, next) {        
    res.render('index', { title: 'File Sizing' });
});

// //post
router.post('/get-file-size/', upload.single('fileR'), function(req, res, next) {
    var sizey = req.file.size;
    var dicter = {"size": sizey};
    console.log((dicter));
    dicter = JSON.stringify(dicter,0,1);
    res.render('sizer', { title: 'And the size is...!', message: dicter});
});

module.exports = router;