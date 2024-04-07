let removerid = document.querySelector(".remover");

if (removerid.hasAttribute("id")) {
    removerid.removeAttribute("id");
    console.log("Atributo 'id' removido com sucesso :)");
} else {
    console.log("O elemento não possui atributo 'id'.");
}