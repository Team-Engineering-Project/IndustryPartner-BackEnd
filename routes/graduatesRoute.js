import express from 'express';
//import GraduateProfile from '../models/graduateProfile.model.js';
import GraduateControls from '../controllers/GraduateProfileController.js';

const {getAllGraduateProfiles} = GraduateControls;
export const router = express.Router();


router.route(`/`)
    .get(getAllGraduateProfiles);


// router.route(`/`)
//     .get((req, res) => {
//         GraduateProfile.find((error, graduates) => {
//             error ? res.status(404).send(`Not found`) : res.json(graduates);
//         });
//     })
