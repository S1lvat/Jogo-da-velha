var jogX = document.getElementById('jogX')
var jogO = document.getElementById('jogO')
const submit = document.getElementById('submit')

var box1 = document.getElementById('c1')
var box2 = document.getElementById('c2')
var box3 = document.getElementById('c3')
var box4 = document.getElementById('c4')
var box5 = document.getElementById('c5')
var box6 = document.getElementById('c6')
var box7 = document.getElementById('c7')
var box8 = document.getElementById('c8')
var box9 = document.getElementById('c9')

var boxies = [box1, box2, box3, box4, box5, box6, box7, box8, box9]
var jogadas = 0
var ptJogX = 0
var ptJogO = 0

 submit.addEventListener('click', ()=> {
     var JogXName = jogX.value
     var JogOName = jogO.value

    function limpaJog(){
        boxies.map(limpa=>{
            limpa.value = ""
            limpa.innerText = ""
           })
        
    }
        var AtualJog = "X"
     if(!JogOName || !JogXName){
         alert("Preencha todos os nomes! ")
     }
     function SetVencedor(Atual){
         alert(`Parabens ${Atual}`)
         limpaJog()
           jogadas = 0
           var AtualJog = "X"
     }
     
     boxies.forEach(element => {
         element.addEventListener('click',()=>{
             if(!element.value){
                 element.value = AtualJog
                 element.innerText = AtualJog
                 jogadas ++
                 
                 //  Testando vitoria
                //  Vertical 1
                 if(box1.value == box2.value && box1.value == box3.value && box2.value == AtualJog){
                     SetVencedor(AtualJog)
                 }
                 //  Vertical 2
                  if(box4.value == box5.value && box5.value == box6.value && box4.value == AtualJog){
                     SetVencedor(AtualJog)
                  }
                 //  Vertical 3
                  if(box7.value == box8.value && box8.value == box9.value && box7.value == AtualJog){
                     SetVencedor(AtualJog)
                  }
                 //  Horizontal 1 
                  if(box1.value == box4.value && box4.value == box7.value && box1.value == AtualJog){
                     SetVencedor(AtualJog)
                  }
                 //  Horizontal 2
                  if(box2.value == box5.value && box5.value == box8.value && box2.value == AtualJog){
                     SetVencedor(AtualJog)
                  }
                 //  Horizontal 3
                  if(box3.value == box6.value && box6.value == box9.value && box3.value == AtualJog){
                     SetVencedor(AtualJog)
                  }
                 
                //  Diagonal 01
                if(box5.value && box3.value && box5.value == box7.value && box5.value == AtualJog){
                    SetVencedor(AtualJog)
                }
                // Diagonal 02
                if(box5.value == box1.value && box5.value == box9.value && box5.value == AtualJog){
                    SetVencedor(AtualJog)
                }

                if(jogadas == 9){
                    limpaJog()
                    console.log("Deu velha!")
                    jogadas = 0
                }
             
             if(AtualJog == "X"){
                     AtualJog = "O"
                 }
            
             }

        })
     });
    
})
 

 
