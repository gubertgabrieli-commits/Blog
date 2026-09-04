document.addEventListener("DOMContentLoaded", function () {

    /* ==============================
       MODO ESCURO
    ================================= */

    const btnTema = document.querySelector("#btn-tema");

    if (btnTema) {

        btnTema.addEventListener("click", function () {

            document.body.classList.toggle("modo-escuro");

            if (document.body.classList.contains("modo-escuro")) {
                btnTema.textContent = "☀️ Modo claro";
            } else {
                btnTema.textContent = "🌙 Modo escuro";
            }

        });

    }


    /* ==============================
       BOTÃO VOLTAR AO TOPO
    ================================= */

    const btnVoltarTopo = document.querySelector("#btn-voltar-topo");

    if (btnVoltarTopo) {

        btnVoltarTopo.addEventListener("click", function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    /* ==============================
       REAÇÕES INDIVIDUAIS
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

                /* ==============================
                   REMOVER REAÇÃO
                ================================= */

                if (reacaoSelecionada === novaReacao) {

                    totalReacoes--;

                    botao.classList.remove("ativa");

                    reacaoSelecionada = null;

                    if (quantidade) {
                        quantidade.textContent = totalReacoes;
                    }

                    if (quemReagiu) {
                        quemReagiu.textContent =
                            totalReacoes === 0
                                ? "Ninguém reagiu ainda."
                                : "Você removeu sua reação desta postagem.";
                    }

                    return;
                }


                /* ==============================
                   TROCAR REAÇÃO
                ================================= */

                if (reacaoSelecionada !== null) {

                    botoes.forEach(function (outroBotao) {
                        outroBotao.classList.remove("ativa");
                    });

                    botao.classList.add("ativa");

                    reacaoSelecionada = novaReacao;

                    if (quemReagiu) {
                        quemReagiu.textContent =
                            `Você reagiu com "${novaReacao}" a esta postagem.`;
                    }

                    return;
                }


                /* ==============================
                   PRIMEIRA REAÇÃO
                ================================= */

                totalReacoes++;

                botao.classList.add("ativa");

                reacaoSelecionada = novaReacao;

                if (quantidade) {
                    quantidade.textContent = totalReacoes;
                }

                if (quemReagiu) {
                    quemReagiu.textContent =
                        `Você reagiu com "${novaReacao}" a esta postagem.`;
                }

            });

        });

    });

});
