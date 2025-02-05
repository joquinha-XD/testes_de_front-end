function registroInsta (){
  const email = document.querySelector("#digitar-email")
  const senha = document.querySelector("#digitar-senha")
  const nome = document.querySelector("#digitar-nome")
  const usuario = document.querySelector("#digitar-usuario")

  const emailValue = email.value
  const senhaValue = senha.value
  const nomeValue = nome.value
  const usuarioValue = usuario.value

  if(emailValue === ""){
    email.classList.add("erro")
  }
  else{
    email.classList.remove("erro")
  }
  if(senhaValue === ""){
    senha.classList.add("erro")
  }
  else{
    senha.classList.remove("erro")
  }
  if(nomeValue === ""){
    nome.classList.add("erro")
  }
  else{
    nome.classList.remove("erro")
  }
  if(usuarioValue === ""){
    usuario.classList.add("erro")
  }
  else{
    usuario.classList.remove("erro")
  }
}
