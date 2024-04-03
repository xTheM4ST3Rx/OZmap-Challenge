import { Router } from 'express'
import { RegionController } from '../modules/region/region.controller'
const router = Router()

const regionController = new RegionController()

/**
 * @swagger
 * /regions:
 *   get:
 *     summary: Lista todos as regiões
 *     tags:
 *      - Regions
 *     responses:
 *       200:
 *         description: Retorna um objeto JSON com a mensagem "Hello World"
 */
router.get('/', regionController.findAll)

/**
 * @swagger
 * /regions/{id}:
 *   get:
 *     summary: Busca uma região pelo ID
 *     tags:
 *      - Regions
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da região
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Retorna um objeto JSON com a mensagem "ID"
 */
router.get('/:id', regionController.findOne)

/**
 * @swagger
 * /regions/{id}:
 *   put:
 *     summary: Atualiza uma região pelo ID
 *     tags:
 *      - Regions
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da região
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
router.put('/:id', regionController.update)

/**
 * @swagger
 * /regions:
 *   post:
 *     summary: Cria uma nova região
 *     tags:
 *      - Regions
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
router.post('/', regionController.create)

/**
 * @swagger
 * /regions/{id}:
 *   delete:
 *     summary: Deleta uma região pelo ID
 *     tags:
 *      - Regions
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da região
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Retorna um objeto JSON com a mensagem "ID"
 */
//router.delete('/:id', regionController.delete)

export default router
