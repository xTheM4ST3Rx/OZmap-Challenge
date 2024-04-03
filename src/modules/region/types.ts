import { Ref } from '@typegoose/typegoose'
import { User } from '../../models/user.model'

export interface RegionType {
    _id: string
    name: string
    user: Ref<User>
}
