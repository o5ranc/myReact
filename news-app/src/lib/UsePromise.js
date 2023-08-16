import React from 'react'
import { useEffect, promi } from 'react';

const UsePromise = (promiseCreator, deps) => {
  const [loading, setLoading] = useState(false);
  const [resolved, setResolved] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const process = async() => {
      setLoading(true);
      try {
        const resolved = await promiseCreator();
        setResolved(resolved);
      } catch(e) {
        setError(e);
      }
      setLoading(false);
    }
    process();
  }, dept)

  return [loading, resolved, error];
}

export default UsePromise