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

        const maxSizeSqrt = Math.sqrt(maxSize);
        const minSizeSqrt = Math.sqrt(minSize);

        querySnapshot.forEach((document) => {
            const nonogram = document.data() as DbNonogram
            const curSizeSqrt = Math.sqrt(nonogram.height * nonogram.width);

            const difficulty = Math.min(Math.round((curSizeSqrt - minSizeSqrt) / (maxSizeSqrt - minSizeSqrt) * 5) + 1, 5);

            setDoc(document.ref, { difficulty: difficulty }, { merge: true });
        })
    
    } catch (err) {
        if (err instanceof Error) console.log(err.message);
    }
}

addDifficulty();