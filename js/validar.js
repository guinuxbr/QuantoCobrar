function validar() {
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
    
    // Valida os valores dos dados inseridos.
    if (
      pesoNovelo < 1 ||
      valorNovelo < 1 ||
      pesoFio < 1 ||
      valorHora < 1 ||
      horasTrabalhadas < 1 ||
      margemLucro < 1
    ) {
      resultado.innerHTML = `<div class="notification is-danger is-light">Os campos devem ter o valor de, no mínimo 1(um)!!!</div>`;
        return false
      // Verifica se os campos estão vazios.
    } else if (
      descricao == "" ||
      pesoNovelo == "" ||
      valorNovelo == "" ||
      pesoFio == "" ||
      valorHora == "" ||
      horasTrabalhadas == "" ||
      margemLucro == ""
    ) {
      resultado.innerHTML = `<div class="notification is-danger is-light">Você deve preencher todos os campos!!!</div>`;
      return false
    } else {
        return true
    }

}
