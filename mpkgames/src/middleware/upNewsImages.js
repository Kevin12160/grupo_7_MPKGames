const multer = require('multer');
const path = require('path');

let storage = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,'public/images/newsImages')
    },
    filename:(req,file,callback)=>{
        callback(null,file.fieldname + Date.now() + path.extname(file.originalname))
    }
})

let upNewsImages = multer({storage:storage})
module.exports=upNewsImages.any();