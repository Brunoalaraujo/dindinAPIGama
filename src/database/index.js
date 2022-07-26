const Sequelize = require("sequelize")

const DB_NAME = "dindin"
const DB_USER = "root"
const DB_PASS = ""
const DB_CONFIG = {
    dialect: "mysql",
    hots: "localhost",
    port: 3306,
}

//objeto para guardar a conexão do banco de dados
let db = {}

try {
    db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG)
} catch (error) {
    console.log(error)
}

async function hasConection(){
    try {
        await db.authenticate()
        console.log("Banco de dados conectado!") 
    } catch (error) {
        console.log(error)
        console.error("Erro ao tentar uma conexão com banco de dados")
    }
}

Object.assign(db, {
    hasConection,
});

module.exports = db;