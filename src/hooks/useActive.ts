import { useState } from "react"
import { ActiveElement } from '../interfaces';

export const useActive = () => {
    const [activeElement, setActiveElement] = useState<ActiveElement | null>({
        block: 0,
        building: 0
    })

    const changeActive = (blockIndex: number, index: number) => {
        console.log(index, blockIndex)
        setActiveElement((prevElement) => {
          if (prevElement) {
            const newElement = structuredClone(prevElement)
            newElement.block = blockIndex
            newElement.building = index
            return newElement
          }
          return { block: 0, building: 0 }
        })
    }

    return {
        activeElement: activeElement,
        changeActive: changeActive
    }
}