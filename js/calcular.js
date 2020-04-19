function calcular() {
  if (validar()) {
    // Definindo o caractere $ como um bind.
    let $ = document.querySelector.bind(document);
    // Captura os valores preenchidos no form.
    let descricao = $("#descricao").value;
    let pesoNovelo = $("#pesoNovelo").value;
    let valorNovelo = $("#valorNovelo").value;
    let pesoFio = $("#pesoFio").value;
    let valorHora = $("#valorHora").value;
    let horasTrabalhadas = $("#horasTrabalhadas").value;
    let margemLucro = $("#margemLucro").value;
    let resultado = $("#resultado");
    let resultadoTabela = $("#resultadoTabela");

    // Efetua os cáculos
    let valorGrama = valorNovelo / pesoNovelo;
    let valorLinha = valorGrama * pesoFio;
    let totalTrabalhado = valorHora * horasTrabalhadas;
    let valorDaPeca = valorLinha + totalTrabalhado;
    let valorFinal = valorDaPeca + valorDaPeca * (margemLucro / 100);

    // Gera a tabela com o resultado e exibe na div
    resultadoTabela.innerHTML = `
        <table class="table is-bordered" id="resultadoTabelaCopiar">
            <tbody>
                <tr>
                <th colspan="2" style="text-align: center;">${descricao}
                <tr>
                <td>O valor do fio utilizado foi:</td>
                <td><strong>${valorLinha.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}<strong>
                </td>
                </tr>
                <tr>
                <td>O valor das horas trabalhadas foi:</td>
                <td><strong>${totalTrabalhado.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}<strong>
                </td>
                </tr>
                <tr>
                <td>O custo de produção da peça foi de:</td>
                <td><strong>${valorDaPeca.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}<strong>
                </td>
                </tr>
                <tr>
                <td>Você deve cobrar, aproximadamente:</td>
                <td><strong>${valorFinal.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}<strong>
                </td>
                </tr>
            </tbody>
        </table>
        `;
    // Exibição dos botões "Copiar" e "Salvar PDF"
    let botaoSalvarPdf = $("#ovrd-salvarPDF");
    botaoSalvarPdf.classList.remove("is-hidden");

    let botaoCopiar = $("#ovrd-copiar");
    botaoCopiar.classList.remove("is-hidden");
  }
}
  