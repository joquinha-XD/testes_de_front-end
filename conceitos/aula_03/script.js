document.getElementById("btn").addEventListener("click",
  function(){
    event.preventDefault()
    // Capturei os elementos HTML
    const email = document.querySelector("#email")
    const senha = document.querySelector("#senha")
    const nome = document.querySelector("#nome")
    const usuario = document.querySelector("#usuario")
    const erroEmail = document.querySelector("#erro-email")
    const erroSenha = document.querySelector("#erro-senha")
    const erroNome = document.querySelector("#erro-nome")
    const erroUsuario = document.querySelector("#erro-usuario")

    // Extrair valor digitado pelo usuário no campo input
    const emailValue = email.value;
    const senhaValue = senha.value;
    const nomeValue = nome.value;
    const usuarioValue = usuario.value;

    const todosCampos = false;

    // Verificar se o campo do input está vazio
    if(emailValue === ""){
      email.classList.add("erro")
      erroEmail.textContent = "O campo de email não pode estar vazio"
      todosCampos = true;
    } else {
      email.classList.remove("erro")
      erroEmail.textContent = ""
    }
    if(senhaValue === ""){
      senha.classList.add("erro")
      erroSenha.textContent = "O campo de senha não pode estar vazio"
      todosCampos = true;
    } else {
      senha.classList.remove("erro")
      erroSenha.textContent =""
    }
    if(nomeValue === ""){
      nome.classList.add("erro")
      erroNome.textContent = "O campo de nome não pode estar vazio"
      todosCampos = true;
    } else {
      nome.classList.remove("erro")
      erroNome.textContent =""
    }
    if(usuarioValue === ""){
      usuario.classList.add("erro")
      erroUsuario.textContent = "O campo de usuário não pode estar vazio"
      todosCampos = true;
    } else {
      usuario.classList.remove("erro")
      erroUsuario.textContent =""
    }

    if(!todosCampos){
      window.location.href = "pagina-BV.html"
    }
})
