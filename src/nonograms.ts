import express from 'express';
import { addNonogram, getAllNonograms } from './controllers/nonograms-controller';

export const router = express.Router();

router.get('/nonograms', getAllNonograms);

router.post('/nonograms', addNonogram);

