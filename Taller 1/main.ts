import {Serie} from './serie.js';
import {series} from './data.js';

//console.log(series);

let serieTable: HTMLElement = document.getElementById("series")!;
let temporadasPromedioTable: HTMLElement = document.getElementById("promedio-temporadas")!;
let detalleSerieTable: HTMLElement = document.getElementById("informacion-serie")!;

mostrarSeries(series);
mostrarPromedioTemporadas(series);

document.addEventListener("DOMContentLoaded", () => {
    const rows: NodeListOf<HTMLElement> = document.querySelectorAll("tr");
    console.log(rows);
});

function mostrarSeries(series: Serie[]):void {

    let tbodySeries: HTMLElement = document.createElement("tbody");
    for (let serie of series) 
    {
        let trElement:HTMLElement = document.createElement("tr");
        trElement.onclick = () => serieSelccionada(serie);
        trElement.innerHTML = `<th scope="row">${serie.numero}</th>
        <td class="name">${serie.nombre}</td>
        <td>${serie.canal}</td>
        <td>${serie.temporadas}</td>`;
        tbodySeries.appendChild(trElement);
    }
    serieTable.appendChild(tbodySeries);
}

function mostrarPromedioTemporadas(series: Serie[]):void {

    let totalSeries:number = 0;
    let totalTemporadas:number = 0;

    for (let serie of series) {
        totalSeries++;
        totalTemporadas += serie.temporadas;
    }
    let numPromedio = totalTemporadas/totalSeries;
    
    let trElement:HTMLElement = document.createElement("tr");
    trElement.innerHTML = `<td><b>Promedio de las temporadas</b></td><td>${numPromedio}</td>`;
    temporadasPromedioTable.appendChild(trElement);

}

function serieSelccionada(serie: Serie): void{
    if (detalleSerieTable.firstChild != null){
        detalleSerieTable.removeChild(detalleSerieTable.firstChild);
    }
    console.log(serie);
    let cardElement = document.createElement("div");
    cardElement.setAttribute("class","card");
    cardElement.setAttribute("style","width: 18rem;");
    cardElement.innerHTML = `<img src="${serie.imagen}" class="card-img-top" alt="imagen">
                            <div class="card-body">
                            <h5>${serie.nombre}</h5>
                            <p class="card-text">${serie.descripcion}</p>
                            <a href="url">${serie.direccion}</a>
                            </div>`;
    detalleSerieTable.appendChild(cardElement);
}
