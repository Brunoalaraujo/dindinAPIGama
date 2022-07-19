const { Cursos } = require("../models");

const cursosController = {
  async listarCursos(req, res) {
    const listaDeCursos = await Cursos.findAll();
    res.status(200).json(listaDeCursos);
  },
  // async cadastrarProduto(req, res){
  //     const {nome, preco, quantidade, fabricante_id, categoria_id} = req.body

  //     const novoProduto = await Produtos.create({
  //         nome,
  //         preco,
  //         quantidade,
  //         fabricante_id
  //     })

  //     const categoria = await Categorias.findByPk(categoria_id)

  //     await novoProduto.setCategoria(categoria)

  //     res.json(novoProduto)
  // },
  // async deletarProduto(req, res) {
  //     const { id } = req.params

  //     await Produtos.destroy({
  //         where: {
  //             id
  //         }
  //     })

  //     res.json("Produto Deletado")
  // },
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
};

module.exports = cursosController;
