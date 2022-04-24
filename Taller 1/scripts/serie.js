var Serie = /** @class */ (function () {
    function Serie(numero, nombre, canal, temporadas, descripcion, direccion, imagen) {
        this.numero = numero;
        this.nombre = nombre;
        this.canal = canal;
        this.temporadas = temporadas;
        this.descripcion = descripcion;
        this.direccion = direccion;
        this.imagen = imagen;
    }
    Serie.prototype.darPromedioTemporadas = function () {
        var totalTemporadas = 0;
        var totalSeries = 0;
        totalSeries++;
        totalTemporadas = this.temporadas;
        var promedio = totalTemporadas / totalSeries;
        return promedio;
    };
    return Serie;
}());
export { Serie };
