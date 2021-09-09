document.addEventListener('DOMContentLoaded',function(){
    //Stopwatch
//Definisi untuk waktu
let sec = 0;    //detik
let min = 0;    //menit
let hr = 0;    //jam

//Definiskan tampilan waktu
let disSec = 0;
let disMin = 0;
let disHr = 0;

//Definisikan fungsi interval
let interval = null;

//Definisikan variabel untuk mempertahankan status stopwatch
let stat = "stopped";

//Definisi
const buttons = document.querySelectorAll(".finish"); 
const userTimer=document.querySelectorAll(".user-timer")
const disTimer = document.querySelector("#displaytimer")

 //function 2 Digit
 function twoDigit (s,m,h){
    if(s < 10){
        disSec = "0"+s.toString();  
    } else{ disSec = s; }

    if(m < 10){
        disMin = "0"+m.toString();
    } else { disMin = m; }

    if(h < 10){
        disHr = "0"+h.toString();
    } else { disHr=h; }
    }

//Stopwatch jalan
function stopwatch(){
    sec++;
    if(sec == 60){
        sec = 0;
        min++;
        if(min == 60) {
            min=0;
            hr++;
        }
    }
    //untuk menampilkan
    twoDigit(sec, min, hr);
    document.getElementById("displaytimer").innerHTML = `${disHr} : ${disMin} : ${disSec}`;
}



//Jam
function currentTime() {
    let today = new Date();
    let scd = today.getSeconds();
    let mnt = today.getMinutes();
    let hrs = today.getHours();
    twoDigit(scd,mnt,hrs);
    document.getElementById("time").innerHTML = `${disHr} : ${disMin} : ${disSec}`;

}
window.setInterval(currentTime, 1000);

//Button
//Finish
for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function(){
     userTimer[i].innerHTML = document.getElementById("displaytimer").innerText;
     if(disTimer.innerText=="00:00:00"){
         buttons[i].disabled=false
     }else{
         buttons[i].disabled=true
     }
    });
 }

//Startstop
function startStop(){
    if (stat === "stopped"){
        //Mulai stopwatch
        interval = window.setInterval(stopwatch, 100);
        document.getElementById("startStop").innerHTML = "Stop";
        stat = "started";
    } else {
        window.clearInterval(interval);
        document.getElementById("startStop").innerHTML = "Start";
        stat = "stopped";
    }
}

function reset(){
    stat = "started";
    window.clearInterval(interval);
    
    sec = 0;
    min = 0;
    hr = 0;

    disHr =0;
    disMin = 0;
    disScd = 0;
    
    
    document.getElementById("displaytimer").innerHTML = "00:00:00";


    // userTimer.forEach(element => {
    //     element.innerHTML="00:00:00"
    // });
  
    window.clearInterval(interval);
    
    document.getElementById("startStop").innerHTML = "Start";
    stat = "stopped";

    
    for(let i = 0; i < buttons.length; i++){
        userTimer[i].innerHTML="00:00:00"
         buttons[i].disabled = false;
     }
    

}
document.querySelector("#startStop").addEventListener("click",startStop)
document.querySelector("#reset").addEventListener("click",reset)

})
