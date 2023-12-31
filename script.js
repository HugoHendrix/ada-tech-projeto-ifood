// Função para validar o campo "nome"
function validarNome() {
    const nomeInput = document.getElementById("nome");
    const nomeValue = nomeInput.value.trim();

    // Verifica se o nome possui pelo menos 3 caracteres e apenas letras e espaços
    if (/^[A-Za-zÀ-ú\sçÇ]{3,30}$/.test(nomeValue)) {
        nomeInput.setCustomValidity(""); // Campo válido
    } else {
        nomeInput.setCustomValidity("Nome inválido. Deve conter entre 3 e 30 caracteres e apenas letras e acentuação.");
    }
}

// Função para validar o campo "telefone"
function validarTelefone() {
    const telefoneInput = document.getElementById("telefone");
    const telefoneValue = telefoneInput.value.trim();

    // Verifica se o telefone está no formato 99-9999-9999
    if (/^[0-9]{2}-[0-9]{5}-[0-9]{4}$/.test(telefoneValue)) {
        telefoneInput.setCustomValidity(""); // Campo válido
    } else {
        telefoneInput.setCustomValidity("Telefone inválido. Deve estar no formato 99-9999-9999.");
    }
}

// Adicione um ouvinte de evento para o campo "nome"
document.getElementById("nome").addEventListener("input", validarNome);

// Adicione um ouvinte de evento para o campo "telefone"
document.getElementById("telefone").addEventListener("input", validarTelefone);

// Função para lidar com o envio do formulário
function onSubmit(event) {
    // Você pode adicionar aqui a lógica para enviar o formulário para o servidor
    event.preventDefault(); // Impede o envio padrão do formulário
    alert("Formulário enviado com sucesso!");
}

// Mostrar o banner de cookies após um pequeno atraso (por exemplo, 3 segundos)
setTimeout(function () {
    var cookieBanner = document.getElementById("cookieBanner");
    cookieBanner.style.display = "block";
}, 3000); // 3000 milissegundos = 3 segundos

// Ocultar o banner de cookies ao clicar no link "Aceitar"
document.getElementById("acceptCookies").addEventListener("click", function () {
    var cookieBanner = document.getElementById("cookieBanner");
    cookieBanner.style.display = "none";
});



const cupomPopup = document.getElementById("cupom-popup");

let isPopupVisible = false;

document.addEventListener("mousemove", (e) => {
    if (e.clientY < 20 && !isPopupVisible) {
        // Se o mouse estiver perto do topo da página e o pop-up não estiver visível
        cupomPopup.style.display = "block";
        isPopupVisible = true;
    }
});

// Adicione um evento para ocultar o pop-up quando o usuário clicar nele
cupomPopup.addEventListener("click", () => {
    cupomPopup.style.display = "none";
    isPopupVisible = false;
});



const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["iFood é Rápido.", "iFood é Conveniente.", "iFood é Delicioso."];
const newTextDelay = 2000; // Delay entre a troca de texto
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 50);
  }
  else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  }
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex = (textArrayIndex + 1) % textArray.length; // Ciclo pelas diferentes qualidades
    setTimeout(type, 500); // Atraso antes de começar a digitar o próximo texto
  }
}

document.addEventListener("DOMContentLoaded", function () { // Inicia o efeito no carregamento do DOM
  if (textArray.length) setTimeout(type, newTextDelay);
});
