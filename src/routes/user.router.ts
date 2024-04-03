import { Router } from 'express'
import { UserController } from '../modules/users/user.controller'
const router = Router()

const userController = new UserController()

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Lista todos os usuários
 *     tags:
 *      - Users
 *     responses:
 *       200:
 *         description: Retorna um objeto JSON com a mensagem "Hello World"
 */
router.get('/', userController.findAll)

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Busca um usuário pelo ID
 *     tags:
 *      - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do usuário
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Retorna um objeto JSON com a mensagem "ID"
 */
router.get('/:id', userController.findOne)

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Atualiza um usuário pelo ID
 *     tags:
 *      - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do usuário
 *         schema:
 *           type: string
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       200:
 *         description: Retorna um objeto JSON com a mensagem "ID"
 */
router.put('/:id', userController.update)

export default router
