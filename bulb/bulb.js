let btn=document.querySelector(".btn");
let body=document.querySelector("header");
let audio=document.getElementById("audio");
btn.onclick=function(){
    body.classList.toggle('on');
    audio.play();
}