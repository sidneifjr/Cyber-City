import { format } from "path";

// Modal
let modal = (): void => {
    let modalWrapper = document.querySelector('.modal-wrapper') as HTMLElement;
    let modalOpenBtn = document.querySelector('.modalBtn') as HTMLElement;
    let modalCloseBtn = modalWrapper.querySelector('.sub') as HTMLElement;
    let modalForm = modalWrapper.querySelector('form') as HTMLElement;

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

    modalForm.addEventListener('submit', (e): void => {
        let modalFormInputs = modalForm.querySelectorAll('input');

        modalFormInputs.forEach((item) => {
            if(!item.value){
                console.log('submit cancelled!');
                e.preventDefault();
                // return false;
            }

            else {
                modalWrapper.classList.remove('active');
            }
        });
    });
}

export default modal();

