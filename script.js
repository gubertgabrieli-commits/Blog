document.addEventListener("DOMContentLoaded", function () {

    /* ==============================
       MODO ESCURO
    ================================= */

    const btnTema = document.querySelector("#btn-tema");

    btnTema.addEventListener("click", function () {

        document.body.classList.toggle("modo-escuro");

        if (document.body.classList.contains("modo-escuro")) {
            btnTema.textContent = "☀️ Modo claro";
        } else {
            btnTema.textContent = "🌙 Modo escuro";
        }

    });


    /* ==============================
       BOTÃO VOLTAR AO TOPO
    ================================= */

    const btnVoltarTopo = document.querySelector(".btn-voltar-topo");

    btnVoltarTopo.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });


    /* ==============================
       REAÇÕES
    ================================= */

    const areasReacao = document.querySelectorAll(".reacoes-post");

    areasReacao.forEach(function (area) {

        const botoes = area.querySelectorAll(".reacao");
        const quantidade = area.querySelector(".quantidade");
        const quemReagiu = area.querySelector(".quem-reagiu");

        let totalReacoes = 0;
        let reacaoSelecionada = null;

        botoes.forEach(function (botao) {

            botao.addEventListener("click", function () {

                const novaReacao = botao.dataset.reacao;

                /* Se clicar na mesma reação, remove */
                if (reacaoSelecionada === novaReacao) {

                    totalReacoes--;

                    botao.classList.remove("ativa");

                    reacaoSelecionada = null;

                    quantidade.textContent = totalReacoes;

                    if (totalReacoes === 0) {
                        quemReagiu.textContent = "Ninguém reagiu ainda.";
                    } else {
                        quemReagiu.textContent =
                            "Você removeu sua reação desta postagem.";
                    }

                    return;
                }


                /* Se já havia outra reação, troca */
                if (reacaoSelecionada !== null) {

                    botoes.forEach(function (outroBotao) {
                        outroBotao.classList.remove("ativa");
                    });

                    botao.classList.add("ativa");

                    reacaoSelecionada = novaReacao;

                    quemReagiu.textContent =
                        `Você reagiu com "${novaReacao}" a esta postagem.`;

                    return;
                }


                /* Primeira reação */
                totalReacoes++;

                botao.classList.add("ativa");

                reacaoSelecionada = novaReacao;

                quantidade.textContent = totalReacoes;

                quemReagiu.textContent =
                    `Você reagiu com "${novaReacao}" a esta postagem.`;

            });

        });

    });

});
