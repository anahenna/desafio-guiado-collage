import express from 'express'
import fileUpload from 'express-fileupload'
import { unlink } from 'fs/promises'

const app = express()

const __dirname = import.meta.dirname

app.use(express.static(__dirname + '/public'))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(fileUpload({
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    abortOnLimit: true,
    responseOnLimit: "El archivo no puede exceder los 5MB"
}))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/formulario.html')
})

app.get('/collage', (req, res) => {
    res.sendFile(__dirname + '/public/collage.html')
})

app.get('/deleteImg/:imagen', async (req, res) => {
    const { imagen } = req.params
    const filePath = __dirname + `/public/imgs/${imagen}`
    try {
        await unlink(filePath)
        return res.redirect('/collage')
    } catch (error) {
        console.log(error)
        return res.status(500).send('error de servidor')
    }
})

app.post('/upload', (req, res) => {

    // console.log(req.files.imagen)
    const { posicion } = req.body
    const { imagen } = req.files
    const { mimetype } = imagen

    console.log({ mimetype })

    if (mimetype !== "image/jpeg") {
        return res.status(400).send('formato de imagen no aceptada')
    }

    const filePath = __dirname + `/public/imgs/imagen-${posicion}.jpg`

    imagen.mv(filePath, (err) => {
        if (err) {
            console.log(err)
            return res.status(500).send('Error al subir la imagen')
        }
        return res.redirect('/collage')
    })
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Example app listening on PORT ${PORT}`)
})