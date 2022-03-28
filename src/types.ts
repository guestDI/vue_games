export interface Card {
    id: number,
    front: string,
    back: string,
    flipped: boolean
}

export type GameTheme = 'frozen' | 'tangled' | 'aladdin'
