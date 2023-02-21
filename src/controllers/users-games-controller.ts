import { Request, Response } from 'express';
import { collection, getDoc, doc, setDoc, addDoc, query, getDocs, where } from 'firebase/firestore';



import { db } from '../db';
import admin from 'firebase-admin';
import { UsersGame, DbUsersGame, parseUsersGame, stringifyUsersGame, ClientUsersGame } from '../types';
import cookieParser from 'cookie-parser';

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

    if (response.length === 0) res.status(404).send('User has no such saved game');
    else res.send({data: {
        bestTime: response[0].bestTime,
        currentGame: {
            id: response[0].nonogramId,
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
    // console.log(/* token */ req.cookies);
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin!);
    // res.send(true);
    // return;
    const token: string = req.cookies.jwt;

    if (! token) {
        throw new Error('User token was not sent');
    }

    const decodedToken = await admin.auth().verifyIdToken(token);
    const uid = decodedToken.uid;
    
    // const uid = '7ZC8MeA7LsbtfA8ogBsyqyJiRSp2';
    const q = query(collection(db, 'users-games'), where('userId', '==', `${uid}`));
    const querySnapshot = await getDocs(q);
        
    const response: Array<UsersGame> = [];
    querySnapshot.forEach((document) => {response.push(parseUsersGame(document.data() as DbUsersGame));});

    res.send({data: response.map((respI) => {
        return {
            bestTime: respI.bestTime,
            currentGame: {
                id: respI.nonogramId,
                state: respI.state,
                currentUserSolution: respI.currentUserSolution,
                currentTime: respI.currentTime,
                currentUserRows: respI.currentUserRows,
                currentUserColumns: respI.currentUserColumns
            }
        }
    })});
  } catch (err) {
    if (err instanceof Error) res.status(404).send(err.message);
  }
};

export const addUserGame = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const usersGame = req.body as ClientUsersGame;

    const uid = '7ZC8MeA7LsbtfA8ogBsyqyJiRSp2';

    const usersGamesCol = collection(db, 'users-games');
    const q = query(usersGamesCol, 
        where('userId', '==', `${uid}`), 
        where('nonogramId', '==', `${id}`));
    const querySnapshot = await getDocs(q);
    const savedGame: Array<{usersGame: UsersGame, id: string}> = [];
    querySnapshot.forEach((document) => {savedGame.push({usersGame: parseUsersGame(document.data() as DbUsersGame), id: document.id});});

    if (savedGame.length === 0) {
      await addDoc(usersGamesCol, stringifyUsersGame({
        // TODO: get uid from token
        userId: '7ZC8MeA7LsbtfA8ogBsyqyJiRSp2',
        nonogramId: usersGame.currentGame.id,
        bestTime: usersGame.bestTime,
        state: usersGame.currentGame.state,
        currentUserSolution: usersGame.currentGame.currentUserSolution,
        currentTime: usersGame.currentGame.currentTime,
        currentUserRows: usersGame.currentGame.currentUserRows,
        currentUserColumns: usersGame.currentGame.currentUserColumns,
      }));

      res.send('Nonogram saved successfully');
      return;
    } else {
      await setDoc(doc(db, 'users-games', savedGame[0].id), stringifyUsersGame({
        // TODO: get uid from token
        userId: '7ZC8MeA7LsbtfA8ogBsyqyJiRSp2',
        nonogramId: usersGame.currentGame.id,
        bestTime: usersGame.bestTime,
        state: usersGame.currentGame.state,
        currentUserSolution: usersGame.currentGame.currentUserSolution,
        currentTime: usersGame.currentGame.currentTime,
        currentUserRows: usersGame.currentGame.currentUserRows,
        currentUserColumns: usersGame.currentGame.currentUserColumns,
      }));
    }    
  } catch (err) {
    if (err instanceof Error) {
      console.log(err.message);
      res.status(400).send(err.message);
    }
  }
};