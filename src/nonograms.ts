import express from 'express';
import { addNonogram, getAllNonograms, getNonogram, getRandomNonogram } from './controllers/nonograms-controller';

export const router = express.Router();

router.get('/nonograms', getAllNonograms);
router.get('/nonograms/random', getRandomNonogram);
router.get('/nonograms/:id', getNonogram);
router.post('/nonograms', addNonogram);

