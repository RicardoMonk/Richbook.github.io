/*Efecto para menu*/
var burgerMenu = document.getElementById('burger-menu');
var show = document.getElementById('menu');

burgerMenu.addEventListener('click', function(){
    this.classList.toggle("close");
    show.classList.toggle("show");
})

/*btn cambio de idioma*/

var check=document.querySelector(".check");
check.addEventListener('click',idioma);

function idioma(){
    let id=check.checked;
    if(id==false){
        location.href="../Esp/ameripol.html";
    }
    else{
        location.href="../ameripol.html";
    }

}