// Show button after scroll
let showMoreBtn = (): void => {
    let gridWrapper = document.querySelector('.photo-grid-wrapper') as HTMLElement;

    if(gridWrapper){
        let showMorebtn = document.querySelector('.show-more') as HTMLElement;

        gridWrapper.addEventListener("scroll", (): void => {
            let distanceScrolled = gridWrapper.scrollTop as Number;

            if(distanceScrolled >= 200){
                showMorebtn.classList.add("visible");
            }

            else {
                showMorebtn.classList.remove("visible");
            }
        });

        showMorebtn.addEventListener('click', (e): void => {
            e.preventDefault();
            console.log('showing more items...');
        });
    }
}

export default showMoreBtn();
