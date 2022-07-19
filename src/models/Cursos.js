const db = require("../database")
const {DataTypes} = require("sequelize")

const Cursos = db.define("Cursos", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      AutoIncrement: true,
      allowNull: false,
    },
    titulo: {
      type: DataTypes.STRING,
    },
    professor: {
      type: DataTypes.STRING,
    },
    descricao: {
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    }
  
  }, {
      tableName: "cursos"
  });
  
  module.exports = Cursos