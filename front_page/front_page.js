const element = document.documentElement;
element.scrollTop=0;
let flag=0,flag1=0;
var ele = document.getElementById("box-area");

window.addEventListener("scroll", () => {
    let scrolly = this.scrollY;
    console.log(scrolly);
    if(scrolly>20)
    {
        $('#box-area').addClass('box-ar');
        
        $('#box-area').removeClass('mydiv');
        flag1=1

        if(flag==0){
            setTimeout(alertFunc, 1900);
            flag=1;
        }
    }
    else
    {
        
        if(flag1===1){
            $('#box-area').addClass('mydiv');
            setTimeout(alertFun, 800);
            flag1=0;
        }
            
        $('#box-area').removeClass('onn');
        $('#box-area').removeClass('box-ar');
        flag=0;
        // console.log("flag inside else",flag)
        
    }
});


function alertFunc() {
    element.scrollTop = 21;
    $('#box').removeClass('opa');
    $('#box-area').addClass('onn');
}

function alertFun() {
    $('#box').addClass('opa');
}
