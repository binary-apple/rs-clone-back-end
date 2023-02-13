import { Request, Response } from 'express';
import { collection, getDoc, doc, addDoc, query, getDocs } from 'firebase/firestore';

import { db } from '../db';
import { Nonogram, DbNonogram, parseNonogram, stringifyNonogram } from '../types';

export const getNonogram = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const docRef = doc(db, 'nonograms', id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      res.send({id: id, nonogram: parseNonogram(docSnap.data() as DbNonogram)});
    } else {
      throw new Error('NOT FOUND');
    }
  } catch (err) {
    if (err instanceof Error) res.status(404).send(err.message);
  }
};

export const getRandomNonogram = async (req: Request, res: Response) => {
  try {
    const q = query(collection(db, 'nonograms'));
    const querySnapshot = await getDocs(q);
        
    const response: Array<{ id: string, nonogram: Nonogram }> = [];
    querySnapshot.forEach((document) => {response.push({ id: document.id, nonogram: parseNonogram(document.data() as DbNonogram) });});

    const docId = Math.floor(Math.random() * response.length);

    res.send({id: response[docId].id, nonogram: response[docId].nonogram});
  } catch (err) {
    if (err instanceof Error) res.status(404).send(err.message);
  }
};

export const getAllNonograms = async (req: Request, res: Response) => {
  try {
    const q = query(collection(db, 'nonograms'));
    const querySnapshot = await getDocs(q);
        
    const response: Array<{ id: string, nonogram: Nonogram }> = [];
    querySnapshot.forEach((document) => {response.push({ id: document.id, nonogram: parseNonogram(document.data() as DbNonogram) });});

    res.send(response);
  } catch (err) {
    if (err instanceof Error) res.status(404).send(err.message);
  }
};

export const addNonogram = async (req: Request, res: Response) => {
  try {
    const nonogram = req.body;
        
    const nonogramsCol = collection(db, 'nonograms');
    await addDoc(nonogramsCol, stringifyNonogram(nonogram));

    res.send('Nonogram saved successfully');
  } catch (err) {
    if (err instanceof Error) {
      console.log(err.message);
      res.status(400).send(err.message);
    }
  }
};