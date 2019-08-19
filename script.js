function calcular() {
    // Captura os valores preenchidos no form.
    let pesoNovelo = document.getElementById('pesoNovelo').value
    let valorNovelo = document.getElementById("valorNovelo").value;
    let pesoFio = document.getElementById("pesoFio").value;
    let valorHora = document.getElementById("valorHora").value;
    let horasTrabalhadas = document.getElementById("horasTrabalhadas").value;
    let resultado = document.getElementById('resultado');
    
    // Valida os valores dos dados inseridos.
    if (pesoNovelo < 1 || valorNovelo < 1 || pesoFio < 1 || valorHora < 1 || horasTrabalhadas < 1) {
        resultado.innerHTML = `<font color="red">Os campos devem ter o valor de, no mínimo 1(um)!!!</font>`
        window.alert(`Os campos devem ter o valor de, no mínimo 1(um)!!!`)
    
    // Verifica se os campos estão vazios.  
    } else if (pesoNovelo == "" || valorNovelo == "" || pesoFio == "" || valorHora == "" || horasTrabalhadas == "") {
        resultado.innerHTML = `<font color="red">Você deve preencher todos os campos!!!</font>`
        window.alert(`Você deve preencher todos os campos!!!`)
    
    // Caso esteja tudo certo, realiza os cálculos.
    } else {
        let valorGrama = valorNovelo / pesoNovelo;
        let valorLinha = valorGrama * pesoFio;
        let totalTrabalhado = valorHora * horasTrabalhadas;
        let valorDaPeca = valorLinha + totalTrabalhado
        
        // Exibe o resultado dos cálculos.
        resultado.innerHTML = `O valor do fio utilizado foi ${valorLinha.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.<br>`
        resultado.innerHTML += `O valor das horas trabalhadas foi ${totalTrabalhado.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.<br>`
        resultado.innerHTML += `Você deve cobrar aproximadamente ${valorDaPeca.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}!`
    }
}

// Limpa os valores preenchidos ao final da execução.
function limpar() {
    document.getElementById('pesoNovelo').value = ""
    document.getElementById("valorNovelo").value = ""
    document.getElementById("pesoFio").value = ""
    document.getElementById("valorHora").value = ""
    document.getElementById("horasTrabalhadas").value = ""
    resultado.innerHTML = `Preencha os dados acima para ver o resultado!`
}