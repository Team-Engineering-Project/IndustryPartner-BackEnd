import express from 'express';
//import GraduateProfile from '../models/graduateProfile.model.js';
import userControls from '../controllers/userController.js';

const {loginUser} = userControls;
export const router = express.Router();


router.route(`/`)
    .post(loginUser);


