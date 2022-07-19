const express = require("express")
const cursosController = require("../controllers/cursosController")
const routes = express.Router()

routes.get("/cursos", cursosController.listarCursos)

module.exports = routes