const Sequelize = require('sequelize')
const connection = new Sequelize('MindSupport', 'root', 'escola',{
    host: 'localhost',
    dialect: 'mysql',
    logging: false
})

module.exports = connection