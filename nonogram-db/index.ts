import fs from 'fs';
import path from 'path';
import { Nonogram, NonogramHint } from '../src/types';

const parse: (file: string) => Nonogram = (file: string) => {
  const allFileContents = fs.readFileSync(file, 'utf-8');
  let height = 0,
    width = 0,
    title: {
      en: string,
      ru: string,
      de: string
    } = { en: '', ru: '', de: '' },
    goal: Array<Array<number>> = [],
    rows: Array<Array<NonogramHint>> = [],
    columns: Array<Array<NonogramHint>> = [];
  const colorMapping: { [key: number]: string } = { 1: '#000000' };

  allFileContents.split('\n').forEach((line, i, arr) => {
    if (line.indexOf('height') === 0) {
      height = Number(line.slice(7));
    }
    if (line.indexOf('width') === 0) {
      width = Number(line.slice(6));
    }
    if (line.indexOf('title') === 0) {
      title = {
        en: line.slice(7, -1),
        ru: '',
        de: '',
      };
    }
    if (line.indexOf('goal') === 0) {
      const strGoal = line.slice(6, -1);
      const pattern = new RegExp('.{1,' + width + '}', 'ig');
      if (!strGoal) throw new Error('There is no goal in file');
      const goalMatch = strGoal.match(pattern);
      if (!goalMatch) throw new Error('There is wrong goal match');
      goal = goalMatch.map(item => Array.from(item).map((el) => Number(el)));
    }
    if (line.indexOf('rows') === 0) {
      const strRows = arr.slice(i + 1, i + height + 1);
      rows = strRows.map((item) => item.split(',').map((el) => {return { hint: Number(el), color: 1 };}));
    }
    if (line.indexOf('columns') === 0) {
      const strColumns = arr.slice(i + 1, i + width + 1);
      columns = strColumns.map((item) => item.split(',').map((el) => {return { hint: Number(el), color: 1 };}));
    }
    
  });
  return {
    height: height,
    width: width,
    title: title,
    colorMapping: colorMapping,
    goal: goal,
    rows: rows,
    columns: columns,
  };
};

async function copyFiles(dirFrom: string) {
  try {
    const filesToCopy = fs.readdirSync(dirFrom, { withFileTypes: true });

    for (const file of filesToCopy) {
      if (file.isFile()) {
        if (path.extname(file.name) !== '.non') continue;
        const response = await fetch('http://localhost:3000/nonograms', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(parse(path.resolve(dirFrom, file.name))),
        });
        console.log(`File ${path.resolve(dirFrom, file.name)} is processed with status ${response.status}`);
        // console.log(path.resolve(dirFrom, file.name));
      } else {
        copyFiles(path.resolve(dirFrom, file.name));
      }
    }
  } catch (err) {
    if (err instanceof Error) console.log(err.message);
    console.log('Error');
  }
}

const dirFrom = path.resolve(__dirname, 'db');
copyFiles(dirFrom);