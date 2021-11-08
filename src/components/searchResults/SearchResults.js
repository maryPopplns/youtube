import {
  getDocs,
  collection,
  query,
  where,
  getFirestore,
} from 'firebase/firestore';
import { useState, useEffect } from 'react';
import './searchResults.css';

export default function SearchResults(props) {
  const [input] = useState(props.inputValue);

  useEffect(() => {
    const DOCS = collection(getFirestore(), 'youtube');
    const QUERY = query(DOCS, where('title', '==', input));
    (async () => {
      const querySnapshot = await getDocs(QUERY);
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
      });
    })();
  }, [input, props]);

  return <main id='searchResultsContainer'>{input}</main>;
}
