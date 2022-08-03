
export interface IScreen {
    screen : string,
    titulo :string,
    route : string,
    cards : ICard[]
}

export interface ICard {
    titulo : string,
    info : string,
    images : string[]
}