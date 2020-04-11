const connection = require('../database/connection')
const crypto = require('crypto')

module.exports = {
    async index(request, response){
        const users = await connection('users').select('*')
    
        return response.json(users)
    },

    async create(request, response){
        //desestrutura os dados da requisição
    const { name, email, whatsapp } = request.body
    //gera o id 
    const id = crypto.randomBytes(4).toString('HEX') 

    await connection('users').insert({
        id,
        name,
        email,
        whatsapp
    })

    return response.json({ id })
    }
}