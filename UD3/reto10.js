let seconds=0;
const dosDigis=(num)=>{

    return num<10 ? "0"+num : num;
}
const timer=()=>{
    seconds++;
    let minutes=Math.floor((seconds/60)%60);
    let hours=Math.floor(seconds/3600);
    let secs=seconds%60;
    t.innerHTML=hours + minutes + secs;
}
const run = ()=>{
    t.innerHTML="00:00:000";
let interval=setInterval(timer,1000);

}
document.getElementById("inciciarCrono").addEventListener("click",run);
let t = document.getElementById("timmer");