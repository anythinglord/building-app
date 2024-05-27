import React, { useMemo } from 'react';
import AccordionContext from './Context';

interface Props {
  children?: React.ReactNode
  activeKeys: Array<number>
  onToggle: any
}

export const Accordion = ({ children, activeKeys, onToggle }: Props): JSX.Element => {

  const context = useMemo(()=>{
    return {
      activeKeys,
      onToggle
    }
  },[activeKeys])

  return (
    <AccordionContext.Provider value={context}>
      {children}
    </AccordionContext.Provider>
  )
}
