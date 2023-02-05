
function clickMenu(){
  
  var divMenuMobile = document.getElementById('menu-mobile-container');
  var imgMenuMobile = document.getElementById('img-menu-barras');

  if(divMenuMobile.style.display == 'flex'){
    divMenuMobile.style.display = 'none';
    imgMenuMobile.src='imgs/menu-bars-ico.webp';
  } else {
    divMenuMobile.style.display = 'flex';
    imgMenuMobile.src='imgs/cancelar-ico.webp';
  }
  
}

function mudaCorBorda(){

    var corSelecionada = document.getElementById("seletor-cor").value;
    var divFundo = document.querySelector(".bg-editor-codigo");
    
    divFundo.style.borderColor = corSelecionada;
}
