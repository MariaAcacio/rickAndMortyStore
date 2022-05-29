import { useState } from 'react';

export const useRedFlag = () => {
  const [redFlag, setRedFlag] = useState(false);
  const activateRedFlag = () => {
    setRedFlag(true);
    setTimeout(() => {
      setRedFlag(false);
    }, 800);
  };
  const hookExports: [boolean, () => void] = [redFlag, activateRedFlag];
  return hookExports;
};
