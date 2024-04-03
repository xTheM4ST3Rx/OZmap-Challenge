import mongoose from 'mongoose'
import { Prop, getModelForClass, pre, Ref } from '@typegoose/typegoose'
import { TimeStamps } from '@typegoose/typegoose/lib/defaultClasses'

import lib from '../lib/GeoLib'

import ObjectId = mongoose.Types.ObjectId

class Base extends TimeStamps {
    @Prop({ required: true, default: () => new ObjectId().toString() })
    _id: string
}

@pre<User>('save', async function (next) {
    const region = this as Omit<any, keyof User> & User // eslint-disable-line

    if (region.isModified('coordinates')) {
        region.address = await lib.getAddressFromCoordinates(region.coordinates)
    } else if (region.isModified('address')) {
        const { lat, lng } = await lib.getCoordinatesFromAddress(region.address)

        region.coordinates = [lng, lat]
    }

    next()
})
export class User extends Base {
    @Prop({ required: true })
    name: string

    @Prop({ required: true })
    email: string

    @Prop({ required: true })
    address: string

    @Prop({ required: true, type: () => [Number] })
    coordinates: [number, number]

    @Prop({
        required: true,
        default: [],
        ref: () => User,
        type: () => String,
    })
    regions: Ref<User>[]
}

export const UserModel = getModelForClass(User)
