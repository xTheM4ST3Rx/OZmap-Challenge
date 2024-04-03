import { Ref } from '@typegoose/typegoose'
import { Region } from '../../models/region.model'

export interface UserType {
    name: string
    email: string
    address: string
    coordinates: [number, number]
    regions: Ref<Region>[]
}
