/*O seguro será fixado em 10% do
valor do veículo para todos os casos, enquanto o IPVA será
calculado de acordo com o tipo de combustível: veículos a
gasolina pagam 20%, etanol 15%, bicombustíveis 10%, híbridos
8% e elétricos 2%. Caso o veículo tenha mais de 20 anos de
fabricação, ele será considerado isento de IPVA,*/
const calculoIpva = (objVeiculo) =>{
    let resposta = ''

    if((2026 - parseFloat(objVeiculo.anofab)) > 20){
        resposta = `Isento de IPVA`
    }else if((objVeiculo.comb) = `gas`){
        resposta = `R$ ${(parseFloat(objVeiculo.valmerc) * 0.2).toFixed(2).replace('.',',')}`
    }else if((objVeiculo.comb) = `eta`){
        resposta = `R$ ${(parseFloat(objVeiculo.valmerc) * 0.15).toFixed(2).replace('.',',')}`
    }else if((objVeiculo.comb) = `bio`){
        resposta = `R$ ${(parseFloat(objVeiculo.valmerc) * 0.1).toFixed(2).replace('.',',')}`
    }else if((objVeiculo.comb) = 'hibr'){
        resposta = `R$ ${(parseFloat(objVeiculo.valmerc) * 0.08).toFixed(2).replace('.',',')}`
    }else{
        resposta = `R$ ${(parseFloat(objVeiculo.valmerc) * 0.02).toFixed(2).replace('.',',')}`
    }

    return resposta
}

export {calculoIpva}

const calculoSeg = (objVeiculo) =>{
    let resposta = ''

    resposta = `R$ ${(parseFloat(objVeiculo.valmerc) * 0.1).toFixed(2).replace('.',',')}`

    return resposta
}

export {calculoSeg}

const calculoIdade = (objVeiculo) =>{
    let resposta = ''

    resposta = ` ${(2026 - parseFloat(objVeiculo.anofab))} `

    return resposta
}

export {calculoIdade}

const calculoFinal = (objVeiculo) =>{
    let resposta = ''

    if((2026 - (objVeiculo.anofab)) > 20){
        resposta = `R$ ${(parseFloat(objVeiculo.valmerc) * 0.1).toFixed(2).replace('.',',')}`
    }else if((objVeiculo.comb) = `gas`){
        resposta = `R$ ${((parseFloat(objVeiculo.valmerc) * 0.2) + (parseFloat(objVeiculo.valmerc) * 0.1)).toFixed(2).replace('.',',')}`
    }else if((objVeiculo.comb) = `eta`){
        resposta = `R$ ${((parseFloat(objVeiculo.valmerc) * 0.15) + (parseFloat(objVeiculo.valmerc) * 0.1)).toFixed(2).replace('.',',')}`
    }else if((objVeiculo.comb) = `bio`){
        resposta = `R$ ${((parseFloat(objVeiculo.valmerc) * 0.1) + (parseFloat(objVeiculo.valmerc) * 0.1)).toFixed(2).replace('.',',')}`
    }else if((objVeiculo.comb) = `hibr`){
        resposta = `R$ ${((parseFloat(objVeiculo.valmerc) * 0.08) + (parseFloat(objVeiculo.valmerc) * 0.1)).toFixed(2).replace('.',',')}`
    }else if((objVeiculo.comb) = `elet`){
        resposta = `R$ ${((parseFloat(objVeiculo.valmerc) * 0.02) + (parseFloat(objVeiculo.valmerc) * 0.1)).toFixed(2).replace('.',',')}`
    }

    return resposta
}

export {calculoFinal}