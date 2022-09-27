const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let coOne = document.getElementById("codOne")
let coTwo = document.getElementById("codTwo")

function generatePassword(howLong){
    let para = document.getElementById("para")
    para.style.visibility = 'hidden'
    coOne.textContent="";
    coTwo.textContent="";
    for(let i=0; i<howLong; i++){
        let ranOne = Math.floor(Math.random()*characters.length)
         let ranTwo = Math.floor(Math.random()*characters.length)
       coOne.textContent += characters[ranOne]
        coTwo.textContent += characters[ranTwo]
    }
   
}
//generatePassword(8)

