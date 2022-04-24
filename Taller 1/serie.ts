export class Serie{ 
    constructor(public numero: number, public nombre:string, public canal: string, public temporadas: number, public descripcion: string, public direccion: string, public imagen: string)
    {
        
    }

    public darPromedioTemporadas(): number {
        let totalTemporadas: number = 0;
        let totalSeries: number = 0;

        totalSeries++;
        totalTemporadas = this.temporadas;

        let promedio: number = totalTemporadas/totalSeries;
        return promedio;
    }

}