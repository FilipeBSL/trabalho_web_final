import mongoose from 'mongoose'

const URI = 'mongodb+srv://filipelima33:filipe123456@bancodedados.rc6xc9e.mongodb.net/?retryWrites=true&w=majority&appName=BancoDeDados'

const databaseConnection = async () => {
if (!global.mongoose){
    mongoose.set('strictQuery',false)
    global.mongoose = await mongoose.connect(URI)
    }
}
export default databaseConnection