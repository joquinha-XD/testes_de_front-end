function modoEscuro ()  {
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");
    const main = document.querySelector("main");
    const botao = document.querySelector("button");

    if (botao.classList.contains("modo-claro")) {
        header.classList.add("modo-escuro")
        main.classList.add("modo-escuro")
        footer.classList.add("modo-escuro")
        botao.classList.add("modo-escuro")
        botao.classList.remove("modo-claro")

        botao.textContent = "Desativar Modo Escuro"
    } else {
        header.classList.remove("modo-escuro")
        main.classList.remove("modo-escuro")
        footer.classList.remove("modo-escuro")
        botao.classList.remove("modo-escuro")
        botao.classList.add("modo-claro")

        botao.textContent = "Ativar Modo Escuro"
    }
}