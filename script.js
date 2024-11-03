
// Objeto contendo as taxas de câmbio entre diferentes moedas
const cotacao = {
    'BRL': { 'USD': 0.18, 'GBP': 0.13, 'CLP': 166.6, 'EUR': 0.16 },
    'USD': { 'BRL': 5.63, 'GBP': 0.76, 'CLP': 939.55, 'EUR': 0.9 },
    'GBP': { 'BRL': 7.37, 'USD': 1.30, 'CLP': 1229.11, 'EUR': 1.20 },
    'CLP': { 'BRL': 0.006, 'USD': 0.0011, 'GBP': 0.0008, 'EUR': 0.001 },
    'EUR': { 'BRL': 6.14, 'USD': 1.08, 'GBP': 0.83, 'CLP': 1023.92 }
};

// Adicionando um evento de clique ao botão de conversão
document.getElementById('botao-converter').addEventListener('click', function () {
    // Obter o valor do input e as moedas selecionadas
    const valor = parseFloat(document.getElementById('valor').value);
    const moedaOrigem = document.getElementById('moedaorigem').value;
    const moedaDestino = document.getElementById('moedadestino').value;

   // Verificação se o valor é válido
    if (isNaN(valor) || valor <= 0) {
        alert("Por favor, insira um valor válido para conversão.");
        return;
    }

     // Verifica se as moedas selecionadas são diferentes
    if (moedaOrigem === moedaDestino) {
        alert("Selecione moedas diferentes para conversão.");
        return;
    }

    // Conversão
    const taxaConversao = cotacao[moedaOrigem][moedaDestino];
    const valorConvertido = valor * taxaConversao;

    // Exibiçao resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `${valor.toFixed(2)} ${moedaOrigem} = ${valorConvertido.toFixed(2)} ${moedaDestino}`;

    // Exibição da Taxa da cotação entre moedas
    const tax = document.getElementById('taxa');
    tax.innerHTML =`<h5>Taxa de Câmbio:</h5> <br> 1 ${moedaOrigem} = ${taxaConversao.toFixed(4)} ${moedaDestino}`;
});

