import { createContext, useContext, useState } from 'react';

export const ContextData = createContext();

export default function ContextProvider({ children }) {
  const [count, setCount] = useState(0);
  return (
    <ContextData.Provider value={{ count, setCount }}>
      {children}
    </ContextData.Provider>
  );
}

export const useContextData = () => useContext(ContextData);
