function calcular() {
    let pesoNovelo = document.getElementById('pesoNovelo').value
    let valorNovelo = document.getElementById("valorNovelo").value;
    let pesoFio = document.getElementById("pesoFio").value;
    let valorHora = document.getElementById("valorHora").value;
    let horasTrabalhadas = document.getElementById("horasTrabalhadas").value;
    let resultado = document.getElementById('resultado');
    
    if (pesoNovelo < 1 || valorNovelo < 1 || pesoFio < 1 || valorHora < 1 || horasTrabalhadas < 1) {
        resultado.innerHTML = `<font color="red">Os campos devem ter o valor de, no mínimo 1(um)!!!</font>`
        window.alert(`Os campos devem ter o valor de, no mínimo 1(um)!!!`)

    } else if (pesoNovelo == "" || valorNovelo == "" || pesoFio == "" || valorHora == "" || horasTrabalhadas == "") {
        resultado.innerHTML = `<font color="red">Você deve preencher todos os campos!!!</font>`
        window.alert(`Você deve preencher todos os campos!!!`)

    } else {
        let valorGrama = valorNovelo / pesoNovelo;
        let valorLinha = valorGrama * pesoFio;
        let totalTrabalhado = valorHora * horasTrabalhadas;
        let valorDaPeca = valorLinha + totalTrabalhado

        resultado.innerHTML = `O valor do fio utilizado foi ${valorLinha.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.<br>`
        resultado.innerHTML += `O valor das horas trabalhadas foi ${totalTrabalhado.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.<br>`
        resultado.innerHTML += `Você deve cobrar aproximadamente ${valorDaPeca.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}!`
    }
}

function limpar() {
    document.getElementById('pesoNovelo').value = ""
    document.getElementById("valorNovelo").value = ""
    document.getElementById("pesoFio").value = ""
    document.getElementById("valorHora").value = ""
    document.getElementById("horasTrabalhadas").value = ""
    resultado.innerHTML = `Preencha os dados acima para ver o resultado!`
}