// Função para salvar o usuário no LocalStorage
function saveUserToLocalStorage(username, password) {
    const user = {
        username: username,
        password: password
    };
    localStorage.setItem("user", JSON.stringify(user)); // Salva o usuário no LocalStorage
}

// Função para verificar o login do usuário
function checkUserInLocalStorage(username, password) {
    const storedUser = JSON.parse(localStorage.getItem("user")); // Recupera os dados do usuário no LocalStorage
    
    if (storedUser) {
        // Verifica se o usuário e a senha estão corretos
        if (storedUser.username === username && storedUser.password === password) {
            alert("Login bem-sucedido! Bem-vindo de volta.");
            window.location.href = "dashboard.html"; // Redireciona para a página do dashboard
            return true;
        } else {
            alert("Usuário ou senha incorretos.");
            return false;
        }
    } else {
        alert("Usuário não encontrado. Por favor, registre-se primeiro.");
        return false;
    }
}

// Função para registrar um novo usuário
function registerUser(username, password) {
    saveUserToLocalStorage(username, password); // Salva o novo usuário no LocalStorage
    alert("Cadastro bem-sucedido! Agora faça login.");
}

// Evento de submit do formulário de login
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio tradicional do formulário
    
    const username = document.getElementById("username").value; // Pega o valor do campo "Usuário"
    const password = document.getElementById("password").value; // Pega o valor do campo "Senha"
    
    checkUserInLocalStorage(username, password); // Chama a função de verificação do login
});

// Evento de cadastro
document.getElementById("registerLink").addEventListener("click", function() {
    const username = prompt("Digite seu nome de usuário para o cadastro:"); // Solicita o nome de usuário
    const password = prompt("Digite sua senha:"); // Solicita a senha

    if (username && password) {
        registerUser(username, password); // Chama a função para registrar o novo usuário
    } else {
        alert("Nome de usuário e senha são obrigatórios.");
    }
});

// Script da página de Dashboard (para exibir o nome do usuário e a funcionalidade de logout)
if (window.location.href.indexOf("dashboard.html") > -1) {
    const user = JSON.parse(localStorage.getItem("user")); // Recupera os dados do usuário do LocalStorage
    
    if (user) {
        document.getElementById("usernameDisplay").textContent = user.username; // Exibe o nome do usuário na página
    } else {
        alert("Você não está logado. Por favor, faça login.");
        window.location.href = "index.html"; // Redireciona para a página de login se o usuário não estiver logado
    }

    // Função de logout
    document.querySelector(".logout-button").addEventListener("click", function() {
        localStorage.removeItem("user"); // Remove os dados do usuário do LocalStorage
        alert("Você saiu com sucesso.");
        window.location.href = "index.html"; // Redireciona para a página de login após o logout
    });
}
