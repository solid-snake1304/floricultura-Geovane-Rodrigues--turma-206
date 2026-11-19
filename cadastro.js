
document.addEventListener("DOMContentLoaded", () => {
    const formCadastro = document.getElementById("formCadastro");

    if (formCadastro) {
        formCadastro.addEventListener("submit", function(event) {
 
            event.preventDefault();

            const nome = document.getElementById("nome").value.trim();
            const email = document.getElementById("email").value.trim();
            const senha = document.getElementById("senha").value;
            const planta = document.getElementById("plantaFavorita").value;
            const feedback = document.getElementById("mensagemFeedback");

            if (nome === "") {
                exibirErro("Por favor, preencha o seu nome completo.");
                return;
            }

            if (email === "" || !email.includes("@") || !email.includes(".")) {
                exibirErro("Por favor, insira um e-mail válido.");
                return;
            }

            if (senha.length < 6) {
                exibirErro("A senha precisa ter no mínimo 6 caracteres.");
                return;
            }

            if (planta === "") {
                exibirErro("Por favor, selecione a sua planta favorita.");
                return;
            }

            feedback.style.color = "green";
            feedback.textContent = "Cadastro realizado com sucesso! Bem-vindo(a) à floricultura.";

            formCadastro.reset();
        });
    }

    function exibirErro(mensagem) {
        const feedback = document.getElementById("mensagemFeedback");
        feedback.style.color = "red";
        feedback.textContent = mensagem;
    }
});