import mongoose from 'mongoose';

const graduateProfileSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    profileImage: { type: String },
    pronouns: { type: String, required: true },
    dfSubject: { type: String, required: true },
    dfGraduationDate: { type: String, required: true },
    universityDegree: { type: String },
    university: { type: String }, 
    nationality: { type: String, required: true }
});

const GraduateProfile = mongoose.model(`Graduate`, graduateProfileSchema);
export default GraduateProfile;