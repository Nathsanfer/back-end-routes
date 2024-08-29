import express from'express'
import { config } from 'dotenv'

config()

const serverPort = process.env.PORT || 3000

const app = express()
app.use(express.json())

const emocoes = [
    {
        id: 1,
        nome: "Nojinho",
        cor: "Verde"
    },
    {
        id: 2,
        nome: "Raiva",
        cor: "Vermelho"
    },
    {
        id: 3,
        nome: "Alegria",
        cor: "Amarelo"
    }
]

const personagens = [
    {
        id: 100,
        nome: "Totoro",
        studio: "Ghibli",
        vivo: true
    },
    {
        id: 101,
        nome: "Princesa Sofia",
        studio: "Disney",
        vivo: true
    },
    {
        id: 102,
        nome: "Rengoku",
        studio: "Ufotable",
        vivo: false
    }
]


app.get("/emocoes", (req, res) => {
    return res.status(200).send(emocoes)
})

app.get("/personagens", (req, res) => {
    return res.status(200).send(personagens)
})

app.get("/", (req, res) => {
    return res.status(200).send({ message: "Hello, world!"})
})

app.get("/2tds2", (req, res) => {
    return res.status(200).send({ message: "Hello, world!"})
})

app.listen(serverPort, () => {
    console.log(`🌙 Server started on http://localhost:${serverPort}`)
})