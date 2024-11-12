import { getCSS, tickConfig } from "./common"

async function quantidadeUsuarios() {
    const url = https//raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDasRedes = Object.keys(dados)
    const quantidadeUsuarios = Objectvalues(dados)

    const data = {
        {
            x: nomeDasRedes
            y: quantidadeUsuarios
            type: 'bar'
            marker: {
                color: getCSS('--primary-color')
            }
        }
    }

    const layout = {
        plot_bgcolor: getCSS('--bg-color'),
        paper_bgcolor: getCSS('--bg-color')
        title:{
            text: 'Redes sociais com mais usuários no mundo',
            font: {
                color: getCSS('--primary-color'),
                family: getCSS('--font'),
                size: 30
            } 
        },
        xaxis: {
            tickfont: tickConfig,
            }
title: 'Nome das redes sociais',
font: {
    color: getCSS('--secondary-color')
}
        },
        yaxis; {
        title: text: 'bilhões de usuários ativos',
        color; getCSS('--secondary-color')
}
        
    

    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementsById('graficos-container').appendChild(grafico)
    Plotly.newPlot(grafico, data, layout)
}
