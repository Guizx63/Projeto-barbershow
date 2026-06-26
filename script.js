const formulario = document.querySelector(".formulario-contato");
const mensagemSucesso = document.querySelector("#mensagem-sucesso");
const linksMenu = document.querySelectorAll(".nav-link");
const menu = document.querySelector("#menu");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const nome = document.querySelector("#nome").value.trim();
  const telefone = document.querySelector("#telefone").value.trim();
  const servico = document.querySelector("#servico").value;
  const data = document.querySelector("#data").value;

  if (nome === "" || telefone === "" || servico === "Escolha um serviço" || data === "") {
    mensagemSucesso.textContent = "Preencha todos os campos obrigatórios antes de enviar.";
    mensagemSucesso.style.color = "#b00000";
    return;
  }

  mensagemSucesso.textContent =
    "Solicitação enviada com sucesso! A BarbeShow entrará em contato em breve.";
  mensagemSucesso.style.color = "#000";

  formulario.reset();
});

linksMenu.forEach(function (link) {
  link.addEventListener("click", function () {
    if (menu.classList.contains("show")) {
      const menuBootstrap = bootstrap.Collapse.getInstance(menu);
      menuBootstrap.hide();
    }
  });
});

window.addEventListener("scroll", function () {
  const cabecalho = document.querySelector(".cabecalho");

  if (window.scrollY > 80) {
    cabecalho.style.boxShadow = "0 4px 18px rgba(255, 255, 255, 0.08)";
  } else {
    cabecalho.style.boxShadow = "none";
  }
});