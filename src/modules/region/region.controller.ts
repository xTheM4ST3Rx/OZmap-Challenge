import { Request, Response } from 'express'
import regionService from './region.service'

export class RegionController {
    async findAll(req: Request, res: Response) {
        const users = await regionService.findAll()
        res.json(users)
    }
    async findOne(req: Request, res: Response) {
        const users = await regionService.findOne(req.params.id)
        res.json(users)
    }
}
