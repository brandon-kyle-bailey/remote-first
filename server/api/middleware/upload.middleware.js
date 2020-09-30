var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

exports.uploadSingleJsonFile = (req, res, next) => {
    console.log("upload.middleware.uploadSingleJsonFile");
    upload.single('uploaded_file');
    next();
}