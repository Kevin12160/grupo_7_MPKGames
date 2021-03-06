const path = require('path');
const multer = require('multer');

let storage = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,'public/images/Avatares')
    },
    filename:(req,file,callback)=>{
        callback(null,req.body.email + path.extname(file.originalname))
        // callback(null,file.fieldname + Date.now() + path.extname(file.originalname))
    }
});

let upload = multer({storage:storage});

module.exports = upload;