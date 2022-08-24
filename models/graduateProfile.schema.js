import mongoose from 'mongoose';

import diligenceSchema from './diligence.schema.js';
import socialMediaSchema from './socialMedia.schema.js';
import personalityTypeSchema from './personalityType.schema.js';
import qualificationSchema from './qualification.schema.js';
import achievementSchema from './achievement.schema.js';
import technicalSkillSchema from './technicalSkill.schema.js';
import feedbackSchema from './feedback.schema.js';
import flairSchema from './flair.schema.js';
import trainingModuleSchema from './trainingModule.schema.js';
import professionalSkillSchema from './professionalSkill.schema.js';
import badgesSchema from './badges.schema.js';

const graduateProfileSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    profileImage: { type: String },
    pronouns: { type: String, required: true },
    dfSubject: { type: String, required: true },
    dfGraduationDate: { type: String, required: true },
    universityDegree: { type: String },
    university: { type: String },
    nationality: { type: String, required: true },
    headline: { type: String, required: true },
    diligence: diligenceSchema,
    socialMedia: socialMediaSchema,
    personalityType: personalityTypeSchema,
    qualifications: [qualificationSchema],
    achievements: [achievementSchema],
    technicalSkills: [technicalSkillSchema],
    professionalSkills: [professionalSkillSchema],
    badges: badgesSchema,
    feedback: [feedbackSchema],
    flair: [flairSchema],
    trainingProgress: [trainingModuleSchema]
});

export default graduateProfileSchema;