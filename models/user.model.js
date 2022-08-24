import mongoose from "mongoose";
import validator from 'validator';

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

// static login method
userSchema.statics.login = async function(email, password){
    if (!email || !password){
        throw Error('All fields must be filled')
    }

    const user = await this.findOne({email})

    if (!user){
        throw Error('Incorrect email')
    }

    if (password !== user.password){
        throw Error('Incorrect password')
    }

    return user
}

const User = mongoose.model(`User`, userSchema);
export default User;
