//loading
let loading=document.getElementsByClassName("loading")[0];
let home=document.getElementsByClassName("home")[0];
setTimeout(function(){
    loading.style.display="none";
    home.style.display="block";
},3000)

//sound
let ele=new Audio("./assets/tune.mpeg");
let sound_btn=document.getElementById("sound_btn");
let sound_icon=document.getElementById("sound_icon");
ele.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
})
sound_btn.addEventListener("click",()=>{
    if(sound_btn.innerHTML=="OFF")
    {
        sound_btn.innerHTML="ON";
        ele.play();
        sound_icon.classList.remove("fa-volume-xmark");
        sound_icon.classList.add("fa-volume-high");
        sound_icon.style.color="#0AFFF7";
        sound_btn.style.color="#0AFFF7";
    }
    else
    {
        sound_btn.innerHTML="OFF";
        ele.pause();
        sound_icon.classList.remove("fa-volume-high");
        sound_icon.classList.add("fa-volume-xmark");
        sound_icon.style.color="#fd1056";
        sound_btn.style.color="#fd1056";
    }
})

//bulb
let btn=document.querySelector(".btn");
let header=document.querySelector("header");
let audio=document.getElementById("audio");
let text1=document.getElementById("text1");
btn.onclick=function(){
    header.classList.toggle('on');
    text1.classList.toggle('onn');
    audio.play();
}

//text
let entry=document.getElementsByClassName("entry");
let str="Hey,I'mKUMARSHANU";
for(let i=16;i>=0;i--)
{
    setTimeout(function(){entry[i].innerHTML+=str[i];
    entry[i].classList.add("glideInLeft");
    },4000+100*i);
}

let short_desc=document.getElementById("short_desc");
setTimeout(function(){setTimeout(() => {
    short_desc.innerHTML+="<div class='hoverJiggle'>Student | Web Developer | Sketch artist</div>"
},6000);})

let contact_btn=document.getElementById("contact_btn");
setTimeout(function(){setTimeout(() => {
    contact_btn.innerHTML+="<button href='#' class='btn-1'>Contact me!</button>";
},6000);})