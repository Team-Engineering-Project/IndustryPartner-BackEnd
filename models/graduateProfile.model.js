import mongoose from 'mongoose';

const graduateProfileSchema = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    profileImage: { type: String },
    pronouns: { type: String, required: true },
    dfSubject: { type: String, required: true },
    dfGraduationDate: { type: String, required: true },
    UniversityDegree: { type: String },
    University: { type: String },
    Nationality: { type: String, required: true }
});

const GraduateProfile = mongoose.model(`Graduate`, graduateProfileSchema);
export default GraduateProfile;