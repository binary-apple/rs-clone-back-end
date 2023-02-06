import { Request, Response } from 'express';

export const addUser = async (req: Request, res: Response) => {
  try {
    // const data = req.body;
    // await db.collection('users').doc().set(data);
    res.send('User record saved successfully' + JSON.stringify(req.body));
  } catch (err) {
    if (err instanceof Error) res.status(400).send(err.message);
  }
};