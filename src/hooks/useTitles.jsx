import { useEffect } from 'react';

const useTitles = (title) => {
  useEffect(() => {
    document.title = `ALMS Dev ${title} `;
  });
};

export default useTitles;
