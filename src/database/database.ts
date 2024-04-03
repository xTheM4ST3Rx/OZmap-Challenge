import mongoose from 'mongoose'

const initDataBase = async function () {
    await mongoose
        .connect(process.env.MONGO_URL, {
            connectTimeoutMS: 60000,
        })
        .then(() => {
            console.log('\x1b[35m%s\x1b[0m', '🎲 - Database Online !')
        })
        .catch((error) => {
            console.log('\x1b[31m%s\x1b[0m', '🔴 - Database Offline !')
            console.log(error)
        })
}

export default initDataBase
