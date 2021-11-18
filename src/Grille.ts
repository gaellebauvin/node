export interface IGrilleConfig {
    readonly canvas: HTMLCanvasElement
    readonly data: Array<Array<number>>
    readonly blockStyles: { [ blockValue: number]: string }
    readonly couleurFond: string
    readonly couleurGrille: string
    readonly nbRayons: number
    readonly angleRayons: number
    readonly vue: IView3D
}

export interface IGrille {
    data: Array<Array<number>>
    readonly nbColonnes: number
    readonly nbLignes: number
    blockStyles: { [ blockValue: number]: string }
    couleurFond: string
    couleurGrille: string
    readonly blockHeight: number
    readonly blockWidth: number
    //rayons: Array<{x1: number, y1: number, x2: number, y2: number}>
    //intersections: Array<IIntersection>
    dessineGrille (): void
    dessineBlocks (): void
    //dessineRayons (): void
    dessine (): void
    //lanceRayons (x: number, y: number, angle: number): void
}

export class Grille implements IGrille {
    private readonly _canvas : HTMLCanvasElement
    private _ctx : CanvasRenderingContext2D
    private _data : Array<Array<number>>
    private  _nbColonnes : number
    private  _nbLignes : number
    blockStyles:{[ blockValue: number] :string}
    couleurFond: string
    private _blockHeight: number
    private _blockWidth: number
    angleRayons:number

    constructor(config:IGrilleConfig) {
        this._canvas = config.canvas
        this._ctx = config.canvas.getContext("2d") as CanvasRenderingContext2D
        this._data = config.data
        this._nbColonnes = config.data[0].length
        this._nbLignes =  config.data[0].length
        this.blockStyles = {[0]:""}
        this.couleurFond = "with"
        this._blockHeight = 0
        this._blockWidth = 0
        this.angleRayons = 0
    }

    dessineGrille() {
    }

    dessineBlocks() {
    }

    dessine() {
        this.dessineGrille();
        this.dessineBlocks();
    }

}