import express from 'express';
import { addUserGame, getAllUserGames, getUserGame } from './controllers/users-games-controller';

export const router = express.Router();

router.get('/users-games', getAllUserGames);
router.get('/users-games/:id', getUserGame);
router.post('/users-games/:id', addUserGame);