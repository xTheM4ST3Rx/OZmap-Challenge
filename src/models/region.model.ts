import * as mongoose from 'mongoose'
import { TimeStamps } from '@typegoose/typegoose/lib/defaultClasses'
import {
    pre,
    getModelForClass,
    Prop,
    Ref,
    modelOptions,
} from '@typegoose/typegoose'
import { User, UserModel } from './user.model'

import ObjectId = mongoose.Types.ObjectId

class Base extends TimeStamps {
    @Prop({ required: true, default: () => new ObjectId().toString() })
    _id: string
}

@pre<Region>('save', async function (next) {
    const region = this as Omit<any, keyof Region> & Region // eslint-disable-line

    if (!region._id) {
        region._id = new ObjectId().toString()
    }
    if (region.isNew) {
        const user = await UserModel.findOne({ _id: region.user })
        user.regions.push(region._id)
        await user.save({ session: region.$session() })
    }
    next(region.validateSync())
})
@modelOptions({ schemaOptions: { validateBeforeSave: false } })
export class Region extends Base {
    @Prop({ required: true, auto: true })
    _id: string

    @Prop({ required: true })
    name: string

    @Prop({ ref: () => User, required: true, type: () => String })
    user: Ref<User>
}

export const RegionModel = getModelForClass(Region)
