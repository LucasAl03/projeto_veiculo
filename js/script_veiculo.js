//importando calculos
import { calculoFinal } from './script_calculo'
import { calculoIdade } from './script_calculo'
import { calculoIpva } from './script_calculo'
import { calculoSeg } from './script_calculo'

//array para veiculos
const veiculos = []

//pegando elementos do DOM
const formVeiculo = document.querySelector('#form-veiculo')
const divLista = document.querySelector('#div-lista')

//capturando o evento submit do form
formVeiculo.addEventListener('submit', (evt)=>{
    //interrompendo o evento padrão do form
    evt.preventDefault()

    //criando o objeto dataform
    const dadosForm = new FormData(formVeiculo)

    //criando e preenchendo o objeto literal
    const veiculo = {
        modelo: dadosForm.get('modelo'),
        marca: dadosForm.get('marca'),
        placa: dadosForm.get('placa'),
        anofab: dadosForm.get('ano-fab'),
        valmerc: dadosForm.get('val-merc'),
        comb: dadosForm.get('comb'),
    }


    //chamando a funçaõ addVeiculo e passando o objeto literal veiculo
    addVeiculo(veiculo)

    //limpando o form
    formVeiculo.reset()
})

//função para adicionar veiculos
const addVeiculo = (objVeiculo)=>{
    //adicionando o objeto no array pessoas vindo da funcao
    veiculos.push(objVeiculo)

    listVeiculo()
}

//funcao listar veiculos
const listVeiculo = () => {
    //limpando a div-lista
    divLista.innerHTML = ''

    veiculos.forEach((elem, i)=>{
        divLista.innerHTML += `${i + 1} - Modelo: ${elem.modelo}, Marca: ${elem.marca}, Placa: ${elem.placa}, Idade do Veículo: ${calculoIdade(elem)}, Valor do Seguro: ${calculoSeg(elem)}, Valor do IPVA: ${calculoIpva(elem)}, Valor Final: ${calculoFinal(elem)}`
    })
}
