import express from 'express';
import { addNonogram, getAllNonograms, getNonogram } from './controllers/nonograms-controller';

export const router = express.Router();

router.get('/nonograms', getAllNonograms);
router.get('/nonograms/:id', getNonogram);
router.post('/nonograms', addNonogram);

