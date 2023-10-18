const itens = document.querySelectorAll('.resumo__itens');
const resultado = document.querySelector('#valor');

let total = 0;

fetch('../data.json')
    .then(resposta => resposta.json())
    .then(dados => {
        for (let i = 0; i < dados.length; i++) {
            const categoria = dados[i].category;
            const icone = dados[i].icon;
            const score = dados[i].score;

            const imagem = document.createElement('img');
            imagem.src = icone;

            const h3 = document.createElement('h3');
            h3.innerHTML = categoria;

            const span = document.createElement('span');
            const strong = document.createElement('strong');

            strong.innerHTML = score;
            span.appendChild(strong);
            
            const textoAdicional = document.createTextNode(' / 100');
            span.appendChild(textoAdicional);            
    
            itens[i].appendChild(imagem);
            itens[i].appendChild(h3);
            itens[i].appendChild(span);

            total += score;
        }

        resultado.innerHTML = Math.round(total / 4);
    });
