function addTarefa() {
    let input = document.getElementById("tarefa");
    let tarefa = input.value.trim();
    if (tarefa !== "") {
        let ul = document.getElementById("lista");
        let li = document.createElement("li");
        li.innerHTML = tarefa + " <button onclick='concluirTarefa(this)'>Concluir</button> <button onclick='removerTarefa(this)'>Remover</button>";
        ul.appendChild(li);
        input.value = "";
    }
}


function concluirTarefa(button) {
    let li = button.parentNode;
    li.classList.toggle("completo");
}


function removerTarefa(button) {
    var li = button.parentNode;
    li.parentNode.removeChild(li);
}
