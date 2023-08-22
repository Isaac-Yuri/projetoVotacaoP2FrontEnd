
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('votarForm');
    const candidato1 = document.getElementById("candidato_1");
    const candidato2 = document.getElementById("candidato_2");
    const confirmButton = document.querySelector('.boxBotao .botao[type="submit"]');

    candidato1.addEventListener("click", function () {
        document.querySelector('input[value="gabriel"]').checked = true;
        candidato1.classList.add("selected");
        candidato2.classList.remove("selected");
    });

    candidato2.addEventListener("click", function () {
        document.querySelector('input[value="jeander"]').checked = true;
        candidato2.classList.add("selected");
        candidato1.classList.remove("selected");
    });

    form.addEventListener('submit', async function (event) {
        if (event.submitter === confirmButton && !isRadioButtonSelected('candidato')) {
            event.preventDefault();
            alert('Por favor, selecione um candidato antes de votar.');
        } else if (event.submitter === confirmButton) {
            event.preventDefault();

            const formData = new FormData(form);
            const candidatoVotado = formData.get('candidato');

            const data = {
                candidato_votado: candidatoVotado
            };

            const response = await fetch('https://projetovotacaop2-nz5qyix2da-tl.a.run.app/votar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            window.location.pathname = "/AndamentoDaVotação.html";
        }
    });

    function isRadioButtonSelected(name) {
        const radioButtons = document.getElementsByName(name);
        for (const radioButton of radioButtons) {
            if (radioButton.checked) {
                return true;
            }
        }
        return false;
    }
});

