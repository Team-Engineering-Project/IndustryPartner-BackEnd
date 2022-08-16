import GraduateProfile from '../models/graduateProfile.model.js';
//import mongoose from 'mongoose';

const getAllGraduateProfiles = async(req,res)=>{
    const graduates = await GraduateProfile.find();

    if (!graduates){
        return res.status(404).json({error: 'No Graduates Found'})
    }

    res.status(200).json(graduates);

}

const GraduateControls = {getAllGraduateProfiles};

export default GraduateControls;