import { Router } from "express"

const emocoesRoutes = Router()

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


app.get("/personagens", (req, res) => {
    return res.status(200).send(personagens)
})
