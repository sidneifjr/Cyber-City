// Smooth Scroll
// let smoothScroll = (target: any, duration: number): void => {
//     let targetedItem = document.querySelector(target); // o item a ser o "alvo", a ser subido
//     console.log(targetedItem);

//     let targetPosition = targetedItem.getBoundingClientRect().top; // a posição do mesmo
//     console.log(targetPosition);

//     let startPosition: number = window.pageYOffset;
//     console.log(startPosition);

//     let distance: number = targetPosition - startPosition;
//     console.log(distance);

//     let startTime: number = 0;
//     console.log(startTime);

//     // Responsável pela animação
//     function animation(currentTime: number) {
//         let timeElapsed = currentTime - startTime;
//         console.log(timeElapsed);

//         let run = ease(timeElapsed, startPosition, distance, duration);
//         console.log(run);

//         window.scrollTo(0, run); // Eixos X e Y.

//         if(timeElapsed < duration) {
//             console.log('run animation!');
//             requestAnimationFrame(animation);
//         }

//         if(startTime === null){
//             console.log('no animation!');
//             startTime = currentTime;
//         }
//     }

//     // Estilo de transição
//     function ease(t,b,c,d){
//         t /= d / 2;

//         if(t < 1) return c / 2 * t * t + b;
//         t--;
//         return -c / 2 * (t * (t - 2) - 1) + b;
//     }

//     // Suavizar a execução da animação, rodando a 60 FPS.
//     requestAnimationFrame(animation);
// }

// let section1 = document.querySelector('.goTop') as HTMLElement;

// section1.addEventListener('click', function(e){
//     e.preventDefault();
//     smoothScroll('.photo-grid', 1000);
// });
