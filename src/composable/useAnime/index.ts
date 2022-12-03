import { inject } from 'vue'
import { ANIME_CONSTANT } from '@plugins/animejs'
import anime from 'animejs'

export type AnimeInstance = (params: anime.AnimeParams) => anime.AnimeInstance

export const useAnime = (): AnimeInstance => {
  // @ts-ignore
  return inject(ANIME_CONSTANT)!
}
