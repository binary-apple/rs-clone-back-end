export interface NonogramHint {
  hint: number,
  color: number
}

export interface Nonogram {
  height: number,
  width: number,
  title: {
    en: string,
    ru: string,
    de: string
  },
  colorMapping: { [key: number]: string },
  goal: Array<Array<number>>,
  rows: Array<Array<NonogramHint>>,
  columns: Array<Array<NonogramHint>>,
  difficulty: number
}

export interface DbNonogram extends Omit<Nonogram, 'goal' | 'rows' | 'columns'> {
  goal: string,
  rows: string,
  columns: string
}

export const stringifyNonogram: (nonogram: Nonogram) => DbNonogram = 
(nonogram: Nonogram) => {
  return {
    height: nonogram.height,
    width: nonogram.width,
    title: nonogram.title,
    colorMapping: nonogram.colorMapping,
    goal: JSON.stringify(nonogram.goal),
    rows: JSON.stringify(nonogram.rows),
    columns: JSON.stringify(nonogram.columns),
    difficulty: nonogram.difficulty
  };
};

export const parseNonogram: (dbNonogram: DbNonogram) => Nonogram = 
(dbNonogram: DbNonogram) => {
  return {
    height: dbNonogram.height,
    width: dbNonogram.width,
    title: dbNonogram.title,
    colorMapping: dbNonogram.colorMapping,
    goal: JSON.parse(dbNonogram.goal),
    rows: JSON.parse(dbNonogram.rows),
    columns: JSON.parse(dbNonogram.columns),
    difficulty: dbNonogram.difficulty
  };
};

export interface UsersGame {
  userId: string,
  nonogramId: string,
  bestTime: number | null,
  state: 'started' | 'finished' | 'initial',
  currentUserSolution: Array<Array<number | null>>,
  currentTime: number,
  currentUserRows: Array<Array<{isCrossedOut: boolean}>>,
  currentUserColumns: Array<Array<{isCrossedOut: boolean}>>,
}

export interface DbUsersGame extends Omit<UsersGame, 'currentUserSolution' | 'currentUserRows' | 'currentUserColumns'> {
  currentUserSolution: string,
  currentUserRows: string,
  currentUserColumns: string
}

export const stringifyUsersGame: (usersGame: UsersGame) => DbUsersGame = 
(usersGame: UsersGame) => {
  return {
    userId: usersGame.userId,
    nonogramId: usersGame.nonogramId,
    bestTime: usersGame.bestTime,
    state: usersGame.state,
    currentUserSolution: JSON.stringify(usersGame.currentUserSolution),
    currentTime: usersGame.currentTime,
    currentUserRows: JSON.stringify(usersGame.currentUserRows),
    currentUserColumns: JSON.stringify(usersGame.currentUserColumns),
  };
};

export const parseUsersGame: (DbUsersGame: DbUsersGame) => UsersGame = 
(dbUsersGame: DbUsersGame) => {
  return {
    userId: dbUsersGame.userId,
    nonogramId: dbUsersGame.nonogramId,
    bestTime: dbUsersGame.bestTime,
    state: dbUsersGame.state,
    currentUserSolution: JSON.parse(dbUsersGame.currentUserSolution),
    currentTime: dbUsersGame.currentTime,
    currentUserRows: JSON.parse(dbUsersGame.currentUserRows),
    currentUserColumns: JSON.parse(dbUsersGame.currentUserColumns),
  };
};

export interface ClientUsersGame {
  bestTime: null,
  currentGame: {
    id: string,
    state: 'started' | 'finished' | 'initial',
    currentUserSolution: Array<Array<number | null>>,
    currentTime: number,
    currentUserRows: Array<Array<{isCrossedOut: boolean}>>,
    currentUserColumns: Array<Array<{isCrossedOut: boolean}>>
  }
}