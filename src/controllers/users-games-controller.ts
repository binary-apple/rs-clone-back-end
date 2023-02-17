import { Request, Response } from 'express';
import { collection, getDoc, doc, addDoc, query, getDocs, where } from 'firebase/firestore';



import { db } from '../db';
import admin from 'firebase-admin';
import { UsersGame, DbUsersGame, parseUsersGame, stringifyUsersGame } from '../types';

export const getUserGame = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    // const authHeader = req.header('Authorization');
    // const idToken = authHeader && authHeader.split(' ')[1];
    // if (! idToken) {
    //     throw new Error('User token was not sent');
    // }

    // const decodedToken = await admin.auth().verifyIdToken(idToken);
    // const uid = decodedToken.uid;
    const uid = '7ZC8MeA7LsbtfA8ogBsyqyJiRSp2';

    const q = query(collection(db, 'users-games'), 
        where('userId', '==', `${uid}`), 
        where('nonogramId', '==', `${id}`));
    const querySnapshot = await getDocs(q);
    const response: Array<UsersGame> = [];
    querySnapshot.forEach((document) => {response.push(parseUsersGame(document.data() as DbUsersGame));});

    if (response.length === 0) res.send({});
    else res.send({data: {
        bestTime: response[0].bestTime,
        currentGame: {
            state: response[0].state,
            currentUserSolution: response[0].currentUserSolution,
            currentTime: response[0].currentTime,
            currentUserRows: response[0].currentUserRows,
            currentUserColumns: response[0].currentUserColumns
        }
    }});
  } catch (err) {
    if (err instanceof Error) res.status(404).send(err.message);
  }
};

export const getAllUserGames = async (req: Request, res: Response) => {
  try {
    const uid = '7ZC8MeA7LsbtfA8ogBsyqyJiRSp2';
    const q = query(collection(db, 'users-games'), where('userId', '==', `${uid}`));
    const querySnapshot = await getDocs(q);
        
    const response: Array<UsersGame> = [];
    querySnapshot.forEach((document) => {response.push(parseUsersGame(document.data() as DbUsersGame));});

    res.send(response.map((respI) => {
        return {data: {
            bestTime: respI.bestTime,
            currentGame: {
                state: respI.state,
                currentUserSolution: respI.currentUserSolution,
                currentTime: respI.currentTime,
                currentUserRows: respI.currentUserRows,
                currentUserColumns: respI.currentUserColumns
            }
        }
    }}));
  } catch (err) {
    if (err instanceof Error) res.status(404).send(err.message);
  }
};

export const addUserGame = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const usersGame = req.body;
        
    const usersGamesCol = collection(db, 'users-games');
    await addDoc(usersGamesCol, stringifyUsersGame({
        // TODO: get uid from token
        userId: '7ZC8MeA7LsbtfA8ogBsyqyJiRSp2',
        nonogramId: id,
        bestTime: 15000,
        state: 'finished',
        currentUserSolution: [
            [null,null,null,null,null],
            [null,null,null,null,null],
            [null,null,null,null,null]
        ],
        currentTime: 0,
        currentUserRows: [
            [{isCrossedOut:false},{isCrossedOut:false}],
            [{isCrossedOut:false},{isCrossedOut:false}],
            [{isCrossedOut:false}]
        ],
        currentUserColumns: [
            [{isCrossedOut:false}],
            [{isCrossedOut:false}],
            [{isCrossedOut:false}],
            [{isCrossedOut:false}],
            [{isCrossedOut:false}]
        ],
    }));

    res.send('Nonogram saved successfully');
  } catch (err) {
    if (err instanceof Error) {
      console.log(err.message);
      res.status(400).send(err.message);
    }
  }
};