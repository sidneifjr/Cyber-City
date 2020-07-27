import modal from './components/Modal/modal.component';
import addGridItem from './components/AddGridItem/addGridItem.component';
import loader from './components/Loader/loader.component';
import glitch from './components/Glitch/glitch.component';
import goTopBtn from './components/GoTopBtn/goTopBtn.component';
import showMoreBtn from './components/ShowMoreBtn/showMoreBtn.component';
import menuHamburger from './components/MenuHamburger/menuHamburger.component';

modal;
addGridItem;
loader;
glitch;
goTopBtn;
showMoreBtn;
menuHamburger;

// Minimize sidemenu
// let fullSize = (): void => {
//     let sideMenu = document.getElementById('header') as HTMLElement;
// }
// fullSize();

// Mutation Observer
// var postLikesParent = document.querySelector('.lista--elogios');
// console.log(postLikesParent);

// var observer = new MutationObserver(function(mutations){
//   mutations.forEach(function(mutation){
//     if(mutation.addedNodes.length){
//       console.log('Added', mutation.addedNodes[0]);
//       console.log(mutation.addedNodes[1]);

//       var postLikes = Array.from(postLikesParent.querySelectorAll('.post .likes'));
//       console.log(postLikes);

//       $(postLikes).click(function(){
//         $(this).toggleClass('active');
//       });
//     }

//     if(mutation.removedNodes.length){
//       console.log('Removed', mutation.removedNodes[0]);
//     }
//   });
// });

// observer.observe(postLikesParent, {
//   childList: true,
// });
