/**
 * Criando um novo item para a grid, com classes.
 * 1 - Pegando os valores dos inputs para criar o novo item.
 * 2 - Usando os valores para criar uma classe.
 **/
let addGridItem = (): void => {
    let gridWrapper = document.querySelector('.photo-grid-wrapper') as HTMLElement;
    let modalForm = document.querySelector('.modal form') as HTMLElement;

    if(modalForm){
        let modalFormInputs = Array.from(modalForm.querySelectorAll('input'));

        modalForm.addEventListener("submit", (e): void => {
            e.preventDefault();

            function inputValues(inputs: any){
                let nameValue = "name" as any;
                let developerValue = "developer" as any;
                let genreValue = "genre" as any;
                let releaseDateValue = "releaseDate" as any;
                let imageURL = "image" as any;

                Array.from(inputs).forEach((item: any) => {
                    let inputName = item.getAttribute("name");

                    if(inputName === nameValue){
                        nameValue = item.value;
                    }

                    if(inputName === developerValue){
                        developerValue = item.value;
                    }

                    if(inputName === genreValue){
                        genreValue = item.value;
                    }

                    if(inputName === releaseDateValue){
                        releaseDateValue = item.value;
                    }

                    if(inputName === imageURL){
                        imageURL = item.value;
                    }
                });

                return [nameValue, developerValue, genreValue, releaseDateValue, imageURL];
            }

            let returnedValues = inputValues(modalFormInputs);

            class NewGameInfo {
                name: string;
                developer: string;
                genre: string;
                releaseDate: number;
                imageURL: string;

                constructor(name: string, developer: string, genre: string, releaseDate: number, imageURL: string){
                    this.name = name;
                    this.developer = developer;
                    this.genre = genre;
                    this.releaseDate = releaseDate;
                    this.imageURL = imageURL;
                }

                // Criando o HTML do item
                createGameItem(): void {
                    console.log(`${this.name}, developed by ${this.developer} as an ${this.genre} title, was released in ${this.releaseDate}`);

                    let grid = gridWrapper.querySelector('.photo-grid') as HTMLElement;
                    let gameItem = document.createElement("DIV");
                    let gameItemImage = document.createElement("img");
                    let gameItemText = document.createElement("DIV");
                    let gameItemTextTitle = document.createElement("h4") as any;
                    let gameItemTextDescription = document.createElement("p") as any;

                    gameItem.setAttribute("class", "photo-grid-item");
                    gameItemImage.setAttribute("src", `${this.imageURL}`);
                    gameItemText.setAttribute("class", "photo-grid-item-info");
                    gameItemTextTitle.innerText = `${this.name}`;
                    gameItemTextDescription.innerText = `${this.developer}`;

                    gameItem.appendChild(gameItemImage);
                    gameItemText.appendChild(gameItemTextTitle);
                    gameItemText.appendChild(gameItemTextDescription);
                    gameItem.appendChild(gameItemText);
                    grid.appendChild(gameItem);
                }
            }

            // Processando os dados retornados da função
            function processedSubmitData() {
                let newGame = new NewGameInfo(returnedValues[0], returnedValues[1], returnedValues[2], returnedValues[3], returnedValues[4]);
                newGame.createGameItem();

                returnedValues.forEach((item, index): void => {
                    localStorage.setItem(`${"item " + index++}`, returnedValues[index]);
                });

                console.log(localStorage);
            }

            requestAnimationFrame(processedSubmitData);
        });
    }
}

export default addGridItem();
