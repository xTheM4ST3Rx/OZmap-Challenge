import { Request, Response } from 'express'
import regionService from './region.service'

export class RegionController {
    async create(req: Request, res: Response) {
        const users = await regionService.create(req.body)
        res.json(users)
    }
    async findAll(req: Request, res: Response) {
        const users = await regionService.findAll()
        res.json(users)
    }
    async findOne(req: Request, res: Response) {
        const users = await regionService.findOne(req.params.id)
        res.json(users)
    }
    async update(req: Request, res: Response) {
        const users = await regionService.update(req.params.id, req.body)
        res.json(users)
    }
}
