import express from 'express';
import { addUser } from './controllers/users-controller';

export const router = express.Router();

router.post('/users', addUser);

