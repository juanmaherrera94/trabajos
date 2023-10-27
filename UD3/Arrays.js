class Arrays{
    constructor(){
        this.arraySandkills=[];
    }
    inserAlPrincipio(sandkill){
        this.arraySandkills.unshift(sandkill);
    }
    inserAlFinal(sandkill){
        this.arraySandkills.push(sandkill);
    }
    borrarPrimero(){
        this.arraySandkills.shift();
    }
    borrarUltimo(){
        this.arraySandkills.pop();
    }
    mostrarLista(){
    return this.arraySandkills;
    }
    mostrarListaOrdenada(){
        this.arraySandkills.sort((a,b)=>a.getEdad()-b.getEdad());
        this.mostrarLista();
    }
    buscarPorNombre(nombre) {
        return this.arraySandkills.find(sandkill=> sandkill.getNombre() === nombre);
    }
    buscarPorPosicion(posicion) {
        this.arraySandkills.slice(posicion, posicion + 1);
    }
}
module.exports=Arrays;