function carregamentoTela(){

    function scaleEfect() {
        const image = document.querySelector('.logo-image img')
        image.classList.remove('loading');
        image.classList.add('animacao');
    }

    document.addEventListener("DOMContentLoaded", ()=>{
        setTimeout(scaleEfect, 2000);
    });
}

carregamentoTela();