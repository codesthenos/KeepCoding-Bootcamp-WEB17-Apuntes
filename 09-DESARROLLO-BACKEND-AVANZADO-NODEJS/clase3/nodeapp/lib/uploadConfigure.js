import path from 'node:path'
import multer from 'multer'
import { __dirname } from '../lib/utils.js'

// declaro una configuracion de almacenamiento de los ficheros subidos a traves del input
const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    const route = path.join(__dirname, '..', 'public', 'avatars')
    callback(null, route)
  },
  filename: function (req, file, callback) {
    const fileName = `${file.fieldname}-${Date.now()}-${file.originalname}`
    callback(null, fileName)
  }
})

// declarouna configuracion de upload
const upload = multer({ storage })

export default upload