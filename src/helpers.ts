import { Card, GameTheme } from './types'
import { v4 as uuidv4 } from 'uuid'

export const createBoard = (numberOfCards: number, gameTheme: GameTheme): Array<Card> | [] => {
  if (!gameTheme) {
    return []
  }

  const cards: Card[] = []
  let imageSuffix = 1

  do {
    if (imageSuffix > 8) {
      imageSuffix = 1
    }

    const card: Card = {
      id: uuidv4(),
      front: `${gameTheme}/front`,
      back: `${gameTheme}/${gameTheme}${imageSuffix}`,
      flipped: false
    }

    cards.push(card)

    imageSuffix++
  } while (cards.length !== numberOfCards)

  return cards.sort(() => 0.5 - Math.random())
}

export const isMatch = (flippedCards: Card[]) => {
  if (flippedCards.length) {
    return flippedCards[0]?.back === flippedCards[1]?.back
  }

  return false
}
