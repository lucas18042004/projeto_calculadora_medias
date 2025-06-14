const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./Imagens/images/aprovado.png" alt="festejando" />';
const imgReprovado = '<img src="./Imagens/images/reprovado.png" alt="decepcionado" />';
const arrayAtividades = [];
const arrayNotas = [];
const spanAprovado = `<span class="resultado aprovado">Aprovado</span>`;
const spanReprovado = `<span class="resultado reprovado">reprovado</span>`;
const notaMinima = parseFloat(prompt("Digite a nota minima:"));
let linhas = '';

form.addEventListener('submit', function(event){
    event.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
})

        function adicionaLinha (){
            const inputNomeAtividade = document.getElementById('nome-atividade');
            const inputNotaAtividade = document.getElementById('nota-atividade');

            if (arrayAtividades.includes(inputNomeAtividade.value)){
                alert(`A atividade: ${inputNomeAtividade.value} já foi inserida.`)
            } else {
            arrayAtividades.push(inputNomeAtividade.value);
            arrayNotas.push(parseFloat(inputNotaAtividade.value));
            let linha = '<tr>' ;
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado} </td>`;
    linha += '</tr>';

    linhas += linha;
            }

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
        }

        function atualizaTabela(){
            const corpoTabela = document.querySelector('tbody');
            corpoTabela.innerHTML = linhas;
        }

        function atualizaMediaFinal (){
            const mediaFinal = calculaMediaFinal();

            document.getElementById('media-final-valor').innerHTML = mediaFinal;
            document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado ;
        }

        function calculaMediaFinal(){
            let somaDasNotas = 0;

            for(let i = 0; i<arrayNotas.length ; i++){
                somaDasNotas += arrayNotas[i];
            }
            
            return somaDasNotas / arrayNotas.length;
        }