window.addEventListener('scroll', onScroll);

onScroll();
function onScroll(){
    showNavOnScroll()
    showBackToTopButtonOnSccroll()
}


function showNavOnScroll(){
    const navegacao_fixed = document.querySelector('#navigation');
    if(scrollY > 0){
        navegacao_fixed.classList.add('scroll');
    }

    else{
        navegacao_fixed.classList.remove('scroll');
    }
}

function showBackToTopButtonOnSccroll(){
    if(scrollY > 500){
        backToTopButton.classList.add('show');
    }

    else{
        backToTopButton.classList.remove('show');
    }
}

function open_menu(){
    document.body.classList.add('menu-expanded');
}

function close_menu(){
    document.body.classList.remove('menu-expanded');
}

ScrollReveal({
    origin: 'top',
    distance :'30px',
    duration:700,
}).reveal('#home, #home img, #home .stats');