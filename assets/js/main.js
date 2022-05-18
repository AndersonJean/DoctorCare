function onScroll(){
    const navegacao_fixed = document.querySelector('#navigation');
    if(scrollY > 0){
        navegacao_fixed.classList.add('scroll');
    }

    else{
        navegacao_fixed.classList.remove('scroll');
    }
}