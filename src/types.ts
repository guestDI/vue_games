export interface Card {
    id: number,
    front: string,
    back: string,
    flipped: boolean
}

export type GameTheme = 'brave' | 'frozen' | 'tangled' | 'aladdin' | 'mermaid'
