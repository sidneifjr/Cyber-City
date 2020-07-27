// Loading
let loading = (): void => {
    let loader = document.querySelector('.loader');

    setTimeout((): void => {
        if(loader){
            loader.className += ' hidden';
        }
    }, 1500);
}

export default loading();
