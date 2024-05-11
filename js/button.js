window.onload = function(){
    document.querySelector(".menuMobile").addEventListener("click", function(){
        if(document.querySelector(".main ul").style.display == 'flex'){
            document.querySelector(".main ul").style.display = 'none';
        }else {
            document.querySelector(".main ul").style.display = 'flex';
        }
    })
}