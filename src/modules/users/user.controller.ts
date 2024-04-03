import { Request, Response } from 'express'
import userService from './user.service'

export class UserController {
    async findAll(req: Request, res: Response) {
        const users = await userService.findAll(
            Number(req.query.page),
            Number(req.query.limit)
        )
        res.json(users)
    }
    async findOne(req: Request, res: Response) {
        const users = await userService.findOne(req.params.id)
        res.json(users)
    }
    async update(req: Request, res: Response) {
        const users = await userService.update(req.params.id, req.body)
        res.json(users)
    }
}
