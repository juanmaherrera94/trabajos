let campo = [
    [0, 0, -1, 0],
    [0, -1, -1, 0],
  ];
  let localizacionMinas = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];
const buscaMinas=(campo)=>{
    for(let i=0;i<campo.length;i++){
        for(let j=0;j<campo[i].length;j++){
            if(campo[i][j]==-1){
                localizacionMinas[i][j]=-1;
            }else{
                if(campo[i-1][j] == -1){
                    localizacionMinas[i][j]++;
                }
                if(campo[i+1][j] == -1){
                    localizacionMinas[i][j]++;
                }
            }
            
        }
    }
        return localizacionMinas;
}