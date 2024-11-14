const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function vizualizarInformaçoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json
    const pessoasConectadas = (dado.total_pessoas_conectadas / 1e9) 
    const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9)
    const horas = parseInt(dados.tempo_medio)
    const minutos = Math.round(dados.tempo_medio - horas) * 100
    const porcentagemConectada = ((pessoasConectadas / pessoasNoMundo) * 100).toFixed(2)


    
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `Você sabia que o mundo tem <span>${pessoasNoMundo} bilhões</span> de pessoas e que aproximadamente <span>${pessoasConectadas} bilhões</span> estão conectadas em alguma rede social e passam em média <span>${horas} horas</span> e <span>${minutos} minutos</span> conectadas.<br> Ou seja, aproximadamente <span>${porcentagemConectada}%</span> de pessoas estão conectadas a uma rede social, significando que mais de <span>50%</span> do mundos esta conectado.`
 
    
    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
}

vizualizarInformaçoesGlobais()