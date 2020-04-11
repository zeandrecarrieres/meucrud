const express = require('express')
const UserController = require('./controllers/UserController')
const ProductController = require('./controllers/ProductController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router()

routes.post('/sessions', SessionController.create)

routes.get('/users', UserController.index)
routes.post('/users', UserController.create)

routes.get('/profile', ProfileController.index)

routes.get('/products', ProductController.index)
routes.post('/products', ProductController.create)
routes.delete('/products/:id', ProductController.delete)


module.exports = routes 