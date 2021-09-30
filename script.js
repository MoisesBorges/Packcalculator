let dom_qtd_caixas = document.querySelector("#qtd_caixas")
let dom_altura = document.querySelector("#altura")
let dom_largura = document.querySelector("#largura")
let dom_comprimento = document.querySelector("#comprimento")
let dom_frete_aereo = document.querySelector("#frete_aereo")
let dom_frete_rodoviario = document.querySelector("#frete_rodoviario")

window.onload = () => {
    let qtd_caixas=0
    let altura=0
    let largura=0
    let comprimento=0
    let frete=0
    let resultado=0

    dom_qtd_caixas.addEventListener('change', (e) => {
        qtd_caixas=Number(dom_qtd_caixas.value)
        console.log(qtd_caixas)

    })

    dom_altura.addEventListener('change', (e) => {
        altura=Number(dom_altura.value)
        console.log(altura)

    })

    dom_largura.addEventListener('change', (e) => {
        largura=Number(dom_largura.value)
        console.log(largura)

    })

    dom_comprimento.addEventListener('change', (e) => {
        comprimento=Number(dom_comprimento.value)
        console.log(comprimento)

    })

    dom_frete_rodoviario.addEventListener('change', (e) => {
        frete=Number(dom_frete_rodoviario.value)
        console.log(frete)

    })

    dom_frete_aereo.addEventListener('change', (e) => {
        frete=Number(dom_frete_aereo.value)
        console.log(calcula(qtd_caixas, altura, largura, comprimento, frete))

    })

    function calcula(qtd_caixas, altura, largura, comprimento, frete) {
        return qtd_caixas * (altura*largura*comprimento)*frete
    }
}