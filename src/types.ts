export interface User {
  email: string,
  phoneNumber: string,
  password: string,
  firstName: string,
  lastName: string
}

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
  columns: Array<Array<NonogramHint>>
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
  };
};