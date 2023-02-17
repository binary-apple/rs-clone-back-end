import express from 'express';
import cors from 'cors';
import * as bodyParser from 'body-parser';
import { config } from './config';
// import { db, auth } from './db';

import { router as userRouter } from './users';
import { router as nonogramRouter } from './nonograms';
import { router as usersGamesRouter } from './user-games';

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/', userRouter);
app.use('/', nonogramRouter);
app.use('/', usersGamesRouter);



app.listen(config.port, () => console.log('App is listening on url http://localhost:' + config.port));