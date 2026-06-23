//importando calculos
import { calculoFinal, calculoIdade, calculoIpva, calculoSeg } from './script_calculo.js'

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
        divLista.innerHTML += `<div class="div-lista-carros"> Veículo ${i + 1} <br> Modelo: ${elem.modelo} <br> Marca: ${elem.marca} <br> Placa: ${elem.placa} <br> Idade do Veículo: ${calculoIdade(elem)} <br> Valor do Seguro: ${calculoSeg(elem)} <br> Valor do IPVA: ${calculoIpva(elem)} <br> Valor Final: ${calculoFinal(elem)}. <p> </div>`
    })
}
