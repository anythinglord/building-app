import { useState } from "react";

export const useHandler = () => {
  const [activeKeys, setActiveKeys] = useState<Array<number>>([]);
  
  const showElements = (key: number): void => {
    const newActiveKeys = [...activeKeys];
    if (activeKeys.includes(key)) {
      const keyIndex = activeKeys.indexOf(key);
      newActiveKeys.splice(keyIndex, 1);
      setActiveKeys(newActiveKeys)
    } else {
      newActiveKeys.push(key);
      setActiveKeys(newActiveKeys)
    }
  }

  const isOpen = (index: number): boolean => {
    return activeKeys.includes(index)
  }

  return {
    isOpen: isOpen,
    showElements: showElements
  }
}