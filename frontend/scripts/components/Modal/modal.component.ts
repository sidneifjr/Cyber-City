// Modal
let modal = (): void => {
    let modalWrapper = document.querySelector('.modal-wrapper') as HTMLElement;
    let modalOpenBtn = document.querySelector('.modalBtn') as HTMLElement;
    let modalCloseBtn = modalWrapper.querySelector('.sub') as HTMLElement;

    if(modalOpenBtn){
        modalOpenBtn.addEventListener("click", (e): void => {
            e.preventDefault();

            if(modalWrapper){
                modalWrapper.classList.add('active');
            }
        });
    }

    if(modalCloseBtn){
        modalCloseBtn.addEventListener("click", (e): void => {
            e.preventDefault();

            if(modalWrapper){
                modalWrapper.classList.remove('active');
            }
        });
    }
}

export default modal();

