const input_adicionar = document.querySelector("#adicionar input");
const btn_adicionar = document.querySelector("#adicionar button");
const input_pesquisar = document.querySelector("#pesquisar input");
const btn_pesquisar = document.querySelector("#pesquisar button");
const editar = document.querySelector("#editar");
const input_editar = document.querySelector("#editar input");
const btn_editar = document.querySelector("#editar input");
const lista = document.querySelector("#lista");

const botoes = document.querySelectorAll("#item button")

btn_adicionar.addEventListener('click', (event) => {
    event.preventDefault();
    const novoitem = document.createElement("div");
    novoitem.classList.add("item");
    novoitem.innerHTML += `<div class="titulo">${input_adicionar.value}</div>`;
    lista.appendChild(novoitem);

    const controle = document.createElement("div");
    controle.classList.add("controle");
    novoitem.appendChild(controle);

    controle.innerHTML += '<button class="btn-confirmar"><i class="fa-solid fa-check"></i></button>';
    controle.innerHTML += '<button class="btn-deletar"><i class="fa-regular fa-trash-can"></i></button>';
    input_adicionar.value = '';
    input_adicionar.focus();
})


document.addEventListener("click", (event) => {
    const targetEl = event.target;
    const divitem = targetEl.closest(".item");
    const titulo = targetEl.closest(".item");
    var indice = '<div>errado</div>';

    if(targetEl.classList.contains("btn-confirmar")){
        divitem.style.background = "grey";
    };
    if(targetEl.classList.contains("btn-editar")){
        editar.style.display = "flex";
        input_editar.value = titulo.innerText;
        indice = titulo;
    };
    if(targetEl.classList.contains("btn-deletar")){
        divitem.remove();
    };

})