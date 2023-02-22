const pngToMatrix = require('png-to-matrix');

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

pngToMatrix("./src/doggy.png", (matrix) => {
    const height = matrix.length;
    const width = matrix[0].length;
    const colorMapping = {
        "1": "#000000",
    };
    console.log(matrix.length, matrix[0].length);
    const goal = getGoal(matrix);
    const rows = goal.map((row) => getHintsFromLine(row));
    const columns = transpose(goal).map((row) => getHintsFromLine(row));
    // console.log(goal);
});

