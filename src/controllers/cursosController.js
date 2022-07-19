const { Cursos } = require("../models");

const cursosController = {
  async listarCursos(req, res) {
    const listaDeCursos = await Cursos.findAll();
    res.status(200).json(listaDeCursos);
  },
  async atualizarCursos(req, res) {
    const { id } = req.params;
    const { titulo, professor, descricao } = req.body;

    const cursoAtualizado = await Cursos.update(
      { ...req.body },
      {
        where: {
          id,
        },
      }
    );

    if (!titulo || !professor || !descricao) {
        return res.status(400).json({error: "Os parâmetros não foram enviados da forma correta"})
    }

    res.status(204).json(cursoAtualizado);
  },
  async deletarCursos(req, res) {
    const { id } = req.params

    await Cursos.destroy({
        where: {
            id
        }
    })

    res.status(204).json("Curso Deletado")
}
};

module.exports = cursosController;
