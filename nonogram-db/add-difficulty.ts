import { setDoc, query, collection, getDocs } from 'firebase/firestore'; 
import { db } from '../src/db';
import { DbNonogram } from '../src/types';

async function addDifficulty() {
    try {
        const q = query(collection(db, 'nonograms'));
        const querySnapshot = await getDocs(q);
    
        let maxSize = 0;
        let minSize = Infinity;
        
        querySnapshot.forEach((document) => {
            const nonogram = document.data() as DbNonogram
            const curSize = nonogram.height * nonogram.width;
            if (curSize > maxSize) maxSize = curSize;
            if (curSize < minSize) minSize = curSize;
        })

        querySnapshot.forEach((document) => {
            const nonogram = document.data() as DbNonogram
            const curSize = nonogram.height * nonogram.width;

            const difficulty = Math.min(Math.round((curSize - minSize) / (maxSize - minSize) * 5) + 1, 5);

            setDoc(document.ref, { difficulty: difficulty }, { merge: true });
        })
    
    } catch (err) {
        if (err instanceof Error) console.log(err.message);
    }
}

addDifficulty();