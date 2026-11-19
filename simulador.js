document.addEventListener("DOMContentLoaded", () => {

    const formCadastro = document.getElementById("formCadastro");

    if (formCadastro) {
        formCadastro.addEventListener("submit", function(event) {
            event.preventDefault();

            const nome = document.getElementById("nome").value.trim();
            const email = document.getElementById("email").value.trim();
            const telefone = document.getElementById("telefone").value.trim();
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

            if (telefone === "" || telefone.length < 8) {
                exibirErro("Por favor, insira um número de telefone válido.");
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
        if (feedback) {
            feedback.style.color = "red";
            feedback.textContent = mensagem;
        }
    }

    const btnCalcular = document.getElementById("btnCalcular");

    if (btnCalcular) {
        btnCalcular.addEventListener("click", () => {
            const selectProduto = document.getElementById("produtoSimulador");
            const qtdInput = document.getElementById("quantidadeSimulador");
            const checkEntrega = document.getElementById("entregaExpressa");
            const checkDataEspecial = document.getElementById("dataEspecial");
            const resultadoDiv = document.getElementById("resultadoSimulacao");

            const nomeProduto = selectProduto.value;
            const optionSelecionada = selectProduto.options[selectProduto.selectedIndex];
            const precoUnitario = parseFloat(optionSelecionada.getAttribute("data-preco")) || 0;
            const quantidade = parseInt(qtdInput.value) || 0;

            if (!nomeProduto || quantidade <= 0) {
                resultadoDiv.innerHTML = "<p style='color: red;'>Por favor, selecione uma planta e informe uma quantidade válida.</p>";
                return;
            }

            let subtotal = precoUnitario * quantidade;
            let taxaEntrega = 0;
            let desconto = 0;
            let detalhes = [];

            if (checkEntrega.checked) {
                taxaEntrega = 15.00;
                detalhes.push(" Entrega Expressa adicionada (+ R$ 15,00)");
            } else {
                detalhes.push(" Entrega Padrão (Sem taxa extra)");
            }

            if (checkDataEspecial.checked) {
                desconto = subtotal * 0.05;
                detalhes.push(` Desconto de Data Especial (5%): - R$ ${desconto.toFixed(2)}`);
            }

            let totalFinal = subtotal + taxaEntrega - desconto;

            resultadoDiv.innerHTML = `
                <h3>Resumo do Orçamento:</h3>
                <p><strong>Produto:</strong> ${nomeProduto} (${quantidade}x)</p>
                <p><strong>Subtotal dos itens:</strong> R$ ${subtotal.toFixed(2)}</p>
                <p>${detalhes.join("<br>")}</p>
                <h3 style="color: #2e7d32;">Total Final: R$ ${totalFinal.toFixed(2)}</h3>
            `;
        });
    }

});