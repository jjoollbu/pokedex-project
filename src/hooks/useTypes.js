import { useState, useEffect } from 'react';
import { getAllTypes } from '../service/api';

export const useTypes = () => {
  const [types, setTypes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTypes = async () => {
      try {
        setLoading(true);
        const typesList = await getAllTypes();

        const filteredTypes = typesList.filter(type =>
          type !== 'unknown' && type !== 'stellar'
        );

        setTypes(filteredTypes);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTypes();
  }, []);

  return { types, loading, error };
};