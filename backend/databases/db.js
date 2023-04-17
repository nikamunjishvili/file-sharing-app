import mongoose from 'mongoose';


const Url = 'http://localhost:5000';
const DBConnection = async () => {
    const Db_Url = 'mongodb+srv://nikamunja31415:filefile@filesharing.wq7mkt8.mongodb.net/';
    try {
       await mongoose.connect(Db_Url, {useNewUrlParser: true});
        console.log("DB_Url is running successfull")
    } catch (error) {
        console.log("Error While connecting with databases",error.message)
    }
}

export default DBConnection;