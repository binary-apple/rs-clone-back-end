const pngToMatrix = require('png-to-matrix');
const fs = require('fs');
const path = require('path');


function getHintsFromLine(line) {
    // line = [0,0,0,1,1,1,0,0,1,1]
    // line = [1,0,0,0,1,1,1,0,0,1,0,1]
    // hints = [{   "hint": 9, "color": 1  }]
    const hints = line.reduce((accum, cell, index) => {
        const previousCell = line[index - 1];
        // console.warn(accum);
        if (cell && index === 0) {
            accum[0] = {hint: 1, color: 1};
        }
        if (cell && index !== 0) {
            if (cell === previousCell) {
                accum[accum.length - 1].hint += 1;
            }
            if (cell !== previousCell) {
                accum.push({ hint: 1, color: 1});
            }
        }
        return accum;
    }, []);
    return hints;
}

function transpose(matrix) {
    const transposed = Array.from({ length: matrix[0].length })
    .map(cell => []);
    for (let y = 0; y < matrix[0].length; y +=1) {
        for (let x = 0; x < matrix.length; x += 1) {
            transposed[y][x] = matrix[x][y];
        }
    }
    return transposed;
}

function getGoal(matrix) {
    const goal = matrix.map((row) => {
        return row.map((cell) => {
            const isBlack = cell.r === 0;
            return isBlack ? 1 : 0;
        });
    })
        .filter(row => row.length !== 0);
    return goal;
}

async function writeNonoToBd() {
    const filesToCopy = fs.readdirSync(path.resolve(__dirname, 'src'), { withFileTypes: true });
    for (const file of filesToCopy) {
        if (file.isFile()) {
            if (path.extname(file.name) !== '.png') continue;
            pngToMatrix(path.resolve(__dirname, 'src', file.name), async (matrix) => {
                const goal = getGoal(matrix);
                const nonogram = {
                    height: matrix.length,
                    width: matrix[0].length,
                    title: {
                        en: file.name,
                        ru: '',
                        de: ''
                    },
                    colorMapping: {"1": "#000000"},
                    goal: getGoal(matrix),
                    rows: goal.map((row) => getHintsFromLine(row)),
                    columns: transpose(goal).map((row) => getHintsFromLine(row)),
                    difficulty: 0
                };
                const response = await fetch('http://localhost:3000/nonograms', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(nonogram),
                });
                console.log(`File ${file.name} is processed with status ${response.status}`);
                // console.log(path.resolve(__dirname, 'src', file.name), nonogram);
            })
        }
    }
}

writeNonoToBd();