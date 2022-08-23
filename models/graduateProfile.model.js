import mongoose from 'mongoose';
import graduateProfileSchema from './graduateProfile.schema.js';


const GraduateProfile = mongoose.model(`Graduate`, graduateProfileSchema);
export default GraduateProfile;