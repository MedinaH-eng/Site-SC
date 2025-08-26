
// script.js - SC Segurança e Energia (moderno ES6+)

// 🔹 Rolagem suave ao clicar nos links do menu
document.querySelectorAll("nav a[href^='#']").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const destino = document.querySelector(link.getAttribute("href"));
    if (destino) {
      destino.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// 🔹 Efeito no cabeçalho ao rolar
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 50);
});

// 🔹 Validação básica do formulário de contato
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();

    const nome = form.querySelector("input[name='nome']");
    const email = form.querySelector("input[name='email']");
    const mensagem = form.querySelector("textarea[name='mensagem']");
    let valido = true;

    // Resetar estados
    [nome, email, mensagem].forEach(campo => campo.classList.remove("erro"));

    // Verificar campos
    if (!nome.value.trim()) {
      nome.classList.add("erro");
      valido = false;
    }

    if (!email.value.trim() || !/\S+@\S+\.\S+/.test(email.value)) {
      email.classList.add("erro");
      valido = false;
    }

    if (!mensagem.value.trim()) {
      mensagem.classList.add("erro");
      valido = false;
    }

    if (valido) {
      alert("Mensagem enviada com sucesso!");
      form.reset();
    } else {
      alert("Por favor, preencha todos os campos corretamente.");
    }
  });
}
