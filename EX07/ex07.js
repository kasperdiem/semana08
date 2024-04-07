let classe = document.getElementById("removerclasse");

if (classe.classList.contains("remover")) {
    classe.classList.remove("remover");
    console.log("Classe removida com sucesso :)");
} else {
    console.log("O elemento não possui a classe 'remover'.");
}
