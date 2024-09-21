export interface BlockInterface {
    name: string
    index: number
    buildings: BuildingInterface[]
}

export interface BuildingInterface {
    name: string
}

export interface ActiveElement {
    block: number
    building: number
}

export interface FloorInterface {
    name: string
    spaces: SpaceInterface[]
}

export interface SpaceInterface {
    name: string,
    area?: string
}