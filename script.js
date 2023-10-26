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