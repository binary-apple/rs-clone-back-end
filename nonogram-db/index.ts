import * as fs from 'fs';
import * as path from 'path';

function copyFiles(dirFrom: string, fileTo: string) {
  try {
    const filesToCopy = fs.readdirSync(dirFrom, { withFileTypes: true });

    for (const file of filesToCopy) {

      if (file.isFile()) {
        //TODO: write data from file to database
      } else {
        copyFiles(path.resolve(__dirname, dirFrom, file.name), fileTo);
      }
    }
  } catch (err) {
    if (err instanceof Error) console.error(err.message);
  }
}

const dirFrom = path.resolve(__dirname, 'db');
const fileTo = path.resolve(__dirname, 'all-nonograms.txt');
copyFiles(dirFrom, fileTo);