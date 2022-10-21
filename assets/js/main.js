// OBETENEMOS EL CONTENEDOR DE LAS CARDS

const contenedorCards = document.getElementById("card-container")

// OBTENEMOS EL LISTADO DE EVENTOS DE LA DATA

// OBTENEMOS EL CURRENT DAY DE LA DATA

const date = amazingevents.currentDate

const eventos = amazingevents.events

eventos.forEach(createCard)

// -------------------------------------  CHECKBOX  ----------------------------------------------

const contenedorChecks = document.getElementById('checkbox-container')

let categoriasCheckbox = new Set(eventos.map(evento => evento.category))

categoriasCheckbox.forEach(createCheckbox)

function createCheckbox(categoria){
    contenedorChecks.innerHTML += `
    <div class="input-group-text bg-transparent border-0">
        <label for="">
        <input class="form-check-input mt-0 checkBoxClass" type="checkbox" value="${categoria}" aria-label=""> ${categoria}
        </label>
    </div>
    `
}

// ----------------------------------- CHEKBOX & SEARCH Filtering ----------------------------------------------

let checkBoxClass = Array.from(document.querySelectorAll(".checkBoxClass"))

let searchId = document.getElementById('searchId')

checkBoxClass.forEach(checkbox => checkbox.addEventListener('click', filtrarCards))

searchId.addEventListener('input',filtrarCards)

function filtrarCards(){
    let checkboxFiltrados = checkboxFilters(eventos)
    let searchFiltrados = searchFilters(checkboxFiltrados,searchId.value)
    if(searchFiltrados.length !== 0 ){
        contenedorCards.innerHTML = ``
    }
    searchFiltrados.forEach(createCard)
}

function checkboxFilters(evento){
    let checkboxFiltering = checkBoxClass.filter(check => check.checked).map(check => check.value)
    if (checkboxFiltering.length !== 0){
        checkboxFiltering = evento.filter(event => checkboxFiltering.includes(event.category))
        return checkboxFiltering
    }
    return evento

}


function searchFilters(array, texto){
    let searFiltering = array.filter(event => event.name.toLowerCase().includes(texto.toLowerCase()))
    if(searFiltering.length === 0){
        contenedorCards.innerHTML = `
        <h1>No obtuvimos resultados en su busqueda</h1>
        `
        return []
    }
    return searFiltering
}

function createCard(evento){
    contenedorCards.innerHTML += `
    <div class="card" style="width: 18rem; height: 24em">
        <img src="${evento.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${evento.name}</h5>
            <p class="card-text">${evento.description}</p>
            <a href="./pages/details.html?id=${evento._id}" class="btn btn-primary">More Data</a>
        </div>
    </div>
    `
}