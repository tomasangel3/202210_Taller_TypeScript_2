import { series } from './data.js';
//console.log(series);
var serieTable = document.getElementById("series");
var temporadasPromedioTable = document.getElementById("promedio-temporadas");
var detalleSerieTable = document.getElementById("informacion-serie");
mostrarSeries(series);
mostrarPromedioTemporadas(series);
document.addEventListener("DOMContentLoaded", function () {
    var rows = document.querySelectorAll("tr");
    console.log(rows);
});
function mostrarSeries(series) {
    var tbodySeries = document.createElement("tbody");
    var _loop_1 = function (serie) {
        var trElement = document.createElement("tr");
        trElement.onclick = function () { return serieSelccionada(serie); };
        trElement.innerHTML = "<th scope=\"row\">".concat(serie.numero, "</th>\n        <td class=\"name\">").concat(serie.nombre, "</td>\n        <td>").concat(serie.canal, "</td>\n        <td>").concat(serie.temporadas, "</td>");
        tbodySeries.appendChild(trElement);
    };
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var serie = series_1[_i];
        _loop_1(serie);
    }
    serieTable.appendChild(tbodySeries);
}
function mostrarPromedioTemporadas(series) {
    var totalSeries = 0;
    var totalTemporadas = 0;
    for (var _i = 0, series_2 = series; _i < series_2.length; _i++) {
        var serie = series_2[_i];
        totalSeries++;
        totalTemporadas += serie.temporadas;
    }
    var numPromedio = totalTemporadas / totalSeries;
    var trElement = document.createElement("tr");
    trElement.innerHTML = "<td><b>Promedio de las temporadas</b></td><td>".concat(numPromedio, "</td>");
    temporadasPromedioTable.appendChild(trElement);
}
function serieSelccionada(serie) {
    // if (detalleSerieTable.firstChild != null){
    //     detalleSerieTable.removeChild(detalleSerieTable.firstChild);
    // }
    console.log(serie);
    var cardElement = document.createElement("div");
    cardElement.setAttribute("class", "card");
    cardElement.setAttribute("style", "width: 18rem;");
    cardElement.innerHTML = "<img src=\"".concat(serie.imagen, "\" class=\"card-img-top\" alt=\"imagen\">\n                            <div class=\"card-body\">\n                            <h5>").concat(serie.nombre, "</h5>\n                            <p class=\"card-text\">").concat(serie.descripcion, "</p>\n                            <a href=\"url\">").concat(serie.direccion, "</a>\n                            </div>");
    detalleSerieTable.appendChild(cardElement);
}
