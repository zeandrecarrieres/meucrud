const connection = require('../database/connection')

module.exports = {
    async index(request, response){
    const { page = 1 } = request.query

    // cria totalizador de itens para passar para o frontEnd
    const [count] = await connection('products').count()

    //cria paginação com limite de 5 itens p/ página.
    const products = await connection('products')
        .join('users', 'users.id', '=', 'products.user_id') // conceito de integração entre duas tabelas do banco
        .limit(5)
        .offset((page -1)* 5)
        .select([
            'products.*', 
            'user.name', 
            'user.email', 
            'user.whatsapp'])

    //retorna o número total de itens pelo cabeçalho da response(header)    
    response.header('X-Total-Count', count['count(*)'])
    
        return response.json(products)
    },

    async create(request, response){
        //desestrutura os dados da requisição
    const { productor, wine, harvest, type, obs } = request.body
        // enviar o ID do usuário pelo Header
    const user_id = request.headers.authorization   
        // insert que vai gerar um array de único registro, pega-se o id do primeiro (e único elemento)
        // que seria a partir de const result = result[0] ou da forma abaixo:
    const [id] = await connection('products').insert({
        productor,
        wine,
        harvest,
        type,
        obs,
        user_id,
    })

    return response.json({ id })
    },

    async delete(request, response) {
        const { id } = request.params
        // busca o id do usuário para verificar se o usuário foi o mesmo que criou o produto.
        const user_id = request.headers.authorization
    
        const product = await connection('products')
            .where('id', id)
            .select('user_id')
            .first()

        if (product.user_id != user_id) {
            return response.status(401).json({ error: 'Operation not permitted' })
        }

        await connection('products').where('id', id).delete()

        return response.status(204).send()
    }
}