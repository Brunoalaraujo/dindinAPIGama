const express = require("express")
const cursosController = require("../controllers/cursosController")
const routes = express.Router()

routes.get("/cursos", cursosController.listarCursos)
routes.post("/cursos/:id", cursosController.atualizarCursos)
routes.delete("/cursos/:id", cursosController.deletarCursos)

module.exports = routes