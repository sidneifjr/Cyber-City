// Go To Top Button
let goTopBtn = (): void => {
    let gridWrapper = document.querySelector('.photo-grid-wrapper') as HTMLElement;
    let goTop = document.querySelector('.goTop') as HTMLElement;

    if(goTop){
        goTop.addEventListener("click", (e): void => {
            e.preventDefault();
            gridWrapper.scrollTop = 0;
        });
    }
}

export default goTopBtn();
