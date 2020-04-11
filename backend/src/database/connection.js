const knex = require('knex')
const configuration = require('../../knexfile')

const connection = knex(configuration.development)// utilizando a conexão development

module.exports = connection