// Menu Hamburguer
let menuHamburger = (): void => {
    let hamburguerBtn = document.querySelector('.hamburger') as HTMLElement;

    hamburguerBtn.addEventListener('click', function(){
        let body = document.querySelector('body') as HTMLElement;

        if(hamburguerBtn.classList.contains('is-active')){
            hamburguerBtn.classList.remove('is-active');
            body.classList.remove('fullSize');
        }

        else {
            hamburguerBtn.classList.add('is-active');
            body.classList.add('fullSize');
        }
    });
}

export default menuHamburger();
