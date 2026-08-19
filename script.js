const botoes = document.querySelectorAll(".reacao");
const mensagem = document.getElementById("mensagem");

botoes.forEach(botao => {

    botao.addEventListener("click", () => {

        mensagem.innerHTML = "🎉 Obrigado pela sua reação! Você escolheu: <strong>" + botao.textContent + "</strong>";

        botoes.forEach(b => {
            b.disabled = true;
        });

        botao.style.backgroundColor = "#90EE90";
        botao.style.color = "#000";
    });

});
<script src="JavaScript/script.js"></script>
