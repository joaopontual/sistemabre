function handleLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Verificação de credenciais com usuário 'fcapjr' e senha '12345'
    if (username === "fcapjr" && password === "12345") {
        window.location.href = "processos.html"; // Redireciona para a página de processos
    } else {
        alert("Usuário ou senha incorretos!");
    }
}
