function calcular() {
    var pesoNovelo = document.getElementById('pesoNovelo').value
    var valorNovelo = document.getElementById("valorNovelo").value;
    var pesoFio = document.getElementById("pesoFio").value;
    var valorHora = document.getElementById("valorHora").value;
    var horasTrabalhadas = document.getElementById("horasTrabalhadas").value;
    var resultado = document.getElementById('resultado');

    if (pesoNovelo < 1 || valorNovelo < 1 || pesoFio < 1 || valorHora < 1 || horasTrabalhadas < 1) {
        resultado.innerHTML = `<font color="red">Os campos devem ter o valor de, no mínimo 1(um)!!!</font>`
        window.alert(`Os campos devem ter o valor de, no mínimo 1(um)!!!`)

    } else if (pesoNovelo == "" || valorNovelo == "" || pesoFio == "" || valorHora == "" || horasTrabalhadas == "") {
        resultado.innerHTML = `<font color="red">Você deve preencher todos os campos!!!</font>`
        window.alert(`Você deve preencher todos os campos!!!`)

    } else {
        var valorGrama = valorNovelo / pesoNovelo;
        var valorLinha = valorGrama * pesoFio;
        var totalTrabalhado = valorHora * horasTrabalhadas;
        var valorDaPeca = valorLinha + totalTrabalhado

        resultado.innerHTML = `O valor do fio utilizado foi ${valorLinha.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.<br>`
        resultado.innerHTML += `O valor das horas trabalhadas foi ${totalTrabalhado.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.<br>`
        resultado.innerHTML += `Você deve cobrar aproximadamente ${valorDaPeca.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}!`
    }

    
}
