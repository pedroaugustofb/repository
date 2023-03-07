/* Similar ao useState porém com uma diferença: persiste
 o state no localSotrage e também atualiza o mesmo sempre
  que o valor do state for alterado! */

import { useCallback, useState } from "react";

export const useLocalStorage = (key: any, initialValue: any) => {
  const [state, setState] = useState(() => {
    try {
      const storedValue = localStorage.getItem(key);

      return storedValue ? JSON.parse(storedValue) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setValue = useCallback(
    (value: string) => {
      try {
        setState(value);
        localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.log(error);
      }
    },
    [key]
  );

  return [state, setValue];
};
