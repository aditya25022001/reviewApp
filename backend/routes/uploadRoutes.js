import express from 'express'
import multer from 'multer'
import path from 'path'
import fs from 'fs'
import { authenticate } from '../middlewares/authMiddleware.js'
import { uploadProfilePic } from '../controllers/uploadController.js'

const router = express.Router()

const storage = multer.diskStorage({
    destination(req,file,callBack){
        const __dirname = path.resolve()
        let folderName = 'profilePics'
        const relativePath = path.join(__dirname,`/frontend/public/uploads/${folderName}`)
        if(!fs.existsSync(relativePath)){
            fs.mkdirSync(relativePath)
        }
        callBack(null, `frontend/public/uploads/${folderName}/`)
    },
    filename(req,file,callBack){
        const __dirname = path.resolve()
        let folderName = 'profilePics'
        const fileName = `${req.user.email.split(".")[0]}_${req.user.number}${path.extname(file.originalname)}`
        if(fs.existsSync(path.join(__dirname,`/frontend/public/uploads/${folderName}/${fileName}`))){
            fs.unlinkSync(path.join(__dirname,`/frontend/public/uploads/${folderName}/${fileName}`))
        }
        callBack(null, fileName)
    }
})

function checkFileType(file, callBack){
    const fileTypes = /jpg|jpeg|png/
    const extName = fileTypes.test(path.extname(file.originalname).toLowerCase())
    const mimeType = fileTypes.test(file.mimetype)
    if(extName && mimeType){
        return callBack(null,true)
    }
    else{
        return callBack(Error('Images only!'))
    }
}

const upload = multer({
    storage,
    fileFilter: function(req,file,callBack){
        checkFileType(file, callBack)
    }
})

router.route('/').post(authenticate,upload.single('application'),uploadProfilePic)

export default router