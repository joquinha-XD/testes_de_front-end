document.querySelector("#adicionarTarefa").addEventListener("click",
function () {
    const inputTarefa = document.querySelector("#novaTarefa");
    const tarefaTexto = inputTarefa.value;

    if(tarefaTexto === ""){
        alert("O campo não pode estar vazio!")
    }

    const listaTarefas = document.querySelector("#listaTarefas")

    //Criar um elemento LI
    const li = document.createElement("li")
    li.textContent = tarefaTexto

    listaTarefas.appendChild(li)
});

document.querySelector("#limparTarefa").addEventListener("click", function(){
    const listaTarefas = document.querySelector("#listaTarefas")
    listaTarefas.textContent = "";
})