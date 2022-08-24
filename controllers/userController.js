import User from '../models/user.model.js';
import jwt from 'jsonwebtoken';

const createToken = (_id) => {
    jwt.sign({_id: _id}, process.env.SECRET, { expiresIn: '3d'} )
}

const loginUser = async(req,res) => {
    const {email, password} = req.body;
    try{
        const user = await User.login(email, password)

        const token = createToken(user._id)

        res.status(200).json({email, token})
    } catch(error){
        res.status(400).json({error: error.message})
    }

    res.json({message: 'login user'})
}

const userControls = {loginUser};

export default userControls;