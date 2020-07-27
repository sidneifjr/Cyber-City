// Glitch on item hover
let glitch = (): void => {
    let glitchContainer = document.querySelector('.glitch') as HTMLElement;

    if(glitchContainer){
        let count = 10; // degree of corruption
        let parentContainer = glitchContainer.parentElement as HTMLElement;
        let ranOnce = false;

        parentContainer.addEventListener('mouseenter', (): void => {
            console.log("event fired!");

            if(!ranOnce){
                for (let index = 0; index < count; index++){
                    let glitchBox = document.createElement('div');
                    glitchBox.setAttribute('class', 'box');
                    glitchContainer.appendChild(glitchBox);
                }

                let glitch = document.getElementsByClassName('box');

                // Object.assign?
                setInterval((): void => {
                    for (let index = 0; index < glitch.length; index++){
                        let item = glitch[index] as HTMLElement;
                        item.style.height = Math.floor(Math.random() * 100) + 'px';
                        item.style.backgroundPosition = Math.floor(Math.random() * 50) + 'px';
                        item.style.left = Math.floor(Math.random() * 100) + 'vw';
                        item.style.top = Math.floor(Math.random() * 100) + 'vh';
                        item.style.width = Math.floor(Math.random() * 400) + 'px';
                    }
                }, 600);
            }

            ranOnce = true;
        });
    }
}

export default glitch();
