
var boxies = document.querySelectorAll('[id*=c]')

var Qpontos = document.getElementById("Qpontos")
var Qjogadores = document.getElementById("jogadores")
var whoplays = document.getElementById("whoplays")

var nameX = document.getElementById("nameX")
var nameO = document.getElementById("nameO")
var ptjogX = document.getElementById("ptjogX")
var ptjogO = document.getElementById("ptjogO")

var submit = document.getElementById("submit")
var reset = document.getElementById('reset')
var emJogo = false
var JogAtual = ''
var Jogadas = 0

var JogX = {
    Nome: "",
    Valor: "X",
    pontos: 0
}
var JogO = {
    Nome: "",
    Valor: "O",
    pontos: 0
}
    submit.addEventListener('click', ()=>{
        JogX.Nome = document.getElementById("jogX").value
        JogO.Nome = document.getElementById("jogO").value
        
    if(!JogO.Nome || !JogX.Nome){
        alert("Preencha todos os nomes!")
    }else{
        JogAtual = JogX
        emJogo = true
        Qjogadores.classList.add('hidden')
        Qpontos.classList.remove('hidden')
        AtualizaQD()
    }
})
    reset.addEventListener('click', ()=> {
        limpatabuleiro()
    })
function limpatabuleiro(){
    boxies.forEach(box=>{
        box.value = ''
        box.innerHTML = ''
        Jogadas = 0
    })
}
function AtualizaQD(){
    nameX.innerHTML = JogX.Nome
    nameO.innerHTML = JogO.Nome
    ptjogX.innerHTML = JogX.pontos
    ptjogO.innerHTML = JogO.pontos
    whoplays.innerHTML = `Quem joga é: ${JogAtual.Nome}`
}
function setValor(box){
    box.value = JogAtual.Valor
    box.innerHTML = JogAtual.Valor
    AtualizaQD()
    Jogadas++
}
function vencedor(box, nome){
    if(box == JogO.Valor){
        JogO.pontos ++
    }
    if(box == JogX.Valor){
        JogX.pontos ++
    }
    AtualizaQD()
    alert(`Ponto para ${nome.Nome}`)
    limpatabuleiro()
}
function testWin(box){
    if((boxies[0].value == box && boxies[1].value == box && boxies[2].value == box) ||
       (boxies[0].value == box && boxies[3].value == box && boxies[6].value == box) ||
       (boxies[1].value == box && boxies[4].value == box && boxies[7].value == box) ||
       (boxies[2].value == box && boxies[5].value == box && boxies[8].value == box) ||
       (boxies[3].value == box && boxies[4].value == box && boxies[5].value == box) ||
       (boxies[6].value == box && boxies[7].value == box && boxies[8].value == box) || 
       (boxies[4].value == box && boxies[2].value == box && boxies[6].value == box || 
        boxies[4].value == box && boxies[0].value == box && boxies[8].value == box ))
        {
         vencedor(box, JogAtual)
       }
    return false
}
function testvelha(){
    if(Jogadas == 9 && testWin() == false){
        alert("Deu velha!")
        Jogadas = 0
        limpatabuleiro()
    }
}
boxies.forEach(box => {
    box.addEventListener('click', ()=>{
        if(emJogo && !box.value){
        setValor(box)
        
        // Testar vitoria
        testWin(JogAtual.Valor)

        testvelha(box)
        
        JogAtual = (JogAtual == JogX)?JogO:JogX
        AtualizaQD()
        }
    })
})