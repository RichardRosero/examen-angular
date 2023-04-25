export interface IDpokemon{
  count: string
  next: string
  revious: string
  results: IdDatapokemon[]
}
export interface IdDatapokemon{
    "name": string
    "url": string
}