const Sandkills = require("./Sandkills");

class Arrays{
    constructor(){
        this.arraySandkills=[];
    }
    inserAlPrincipio(sandkill1){
        this.arraySandkills.unshift(sandkill1);
    }
    inserAlFinal(sandkill1){
        this.arraySandkills.push(sandkill1);
    }
    borrarPrimero(sandkill1){
        this.arraySandkills.shift(sandkill1);
    }
    borrarUltimo(sandkill1){
        this.arraySandkills.pop(sandkill1);
    }
    mostrarLista(){
        
    }
}
const sandkill1 = new Sandkills("Juande","39","Informatico",null);
console.log(sandkill1);
module.exports=Arrays;