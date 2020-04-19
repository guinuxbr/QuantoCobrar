// Limpa os valores preenchidos ao final da execução.
function limpar() {
    let $ = document.querySelector.bind(document);
    $("#pesoNovelo").value = "";
    $("#valorNovelo").value = "";
    $("#pesoFio").value = "";
    $("#valorHora").value = "";
    $("#horasTrabalhadas").value = "";
    $("#margemLucro").value = "";
    $("#descricao").value = "";
    $("#resultado").innerHTML = "";
  }