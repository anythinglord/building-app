import { BlockInterface, FloorInterface } from "./interfaces";

export const defaultBlocks: BlockInterface[] = [
    { 
        name: 'Block 1',
        index: 1,
        buildings: [
            { name: 'Building 1' },
            { name: 'Building 2' }
        ] 
    },
    { 
        name: 'Block 2',
        index: 2,
        buildings: [
            { name: 'Building 1' },
            { name: 'Building 2' }
        ] 
    },
    { 
        name: 'Block 3',
        index: 3,
        buildings: [
            { name: 'Building 1' },
            { name: 'Building 2' }
        ] 
    }
]

export const defaultFloors: FloorInterface[] = [
    {
        name: 'Floor 1',
        spaces: [
            { name: 'Space 1A' },
            { name: 'Space 1B' }
        ]
    },
    {
        name: 'Floor 2',
        spaces: [
            { name: 'Space 2A'},
            { name: 'Space 2B' }
        ]
    }
]

export const defaultSpaces = [
    { name: 'Space A' },
    { name: 'Space B' },
    { name: 'Space C' },
    { name: 'Space D' },
]