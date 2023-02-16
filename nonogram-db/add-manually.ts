import { Nonogram } from "../src/types";

const cat: Nonogram = {
    height: 3,
    width: 5,
    title: {
        en: 'Cat',
        ru: 'Кошка',
        de: 'Katze'
    },
    colorMapping: { 1: '#000000' },
    goal: [
        [1, 0, 1, 0, 0],
        [0, 1, 0, 1, 1],
        [0, 1, 0, 0, 0],
    ],
    rows: [
        [
            { hint: 1, color: 1 },
            { hint: 1, color: 1 },
        ],
        [
            { hint: 1, color: 1 },
            { hint: 2, color: 1 },
        ],
        [{ hint: 1, color: 1 }],
    ],
    columns: [
        [{ hint: 1, color: 1 }],
        [{ hint: 2, color: 1 }],
        [{ hint: 1, color: 1 }],
        [{ hint: 1, color: 1 }],
        [{ hint: 1, color: 1 }],
    ]
}

async function addNonogramManually(nonogram: Nonogram) {
    try {
        const response = await fetch('http://localhost:3000/nonograms', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(nonogram),
        });
        console.log(`Nonogram is processed with status ${response.status}`);
    } catch (err) {
        if (err instanceof Error) console.log(err.message);
        console.log('Error');
    }
}

addNonogramManually(cat);