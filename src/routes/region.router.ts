import { Router } from 'express'
import { RegionController } from '../modules/region/region.controller'
const router = Router()

const regionController = new RegionController()

/**
 * @swagger
 * /region/:
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
 * /region/{id}:
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

export default router
