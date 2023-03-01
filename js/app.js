const containerHome = document.getElementById('containerHome')
const cauroselHome = document.querySelectorAll('.caurosel-home')

const homeSec = document.getElementById('home')
const exploreSec = document.getElementById('explore')

const exploreCard = document.querySelectorAll('.explore .container .card')
const lineForExplore = document.querySelector('.boxes .big')

const rightBtn = document.getElementById('rightBtn')
const leftBtn = document.getElementById('leftBtn')

const nav = document.getElementById('nav');
const navItem = document.querySelectorAll('#nav a');

let idxImg = 0

containerHome.style.width = `${100 * cauroselHome.length}vw`

rightBtn.addEventListener('click', () => {
     idxImg++
     containerHome.style.transform += 'translateX(-100vw)'
     if(idxImg > cauroselHome.length - 1){
          containerHome.style.transform = 'translateX(0px)'
          idxImg = 0
     }
})

leftBtn.addEventListener('click', () => {
     idxImg--
     containerHome.style.transform += 'translateX(100vw)'
     if(idxImg < 0){
          containerHome.style.transform = `translateX(${(-cauroselHome.length + 1) * 100}vw)`
          idxImg = cauroselHome.length - 1
     }
})

function scrollAni(){
     window.scrollTo(0,exploreSec.offsetTop)
}
function scrollTopAni() {
     window.scrollTo(exploreSec.offsetTop,0)
}

exploreCard.forEach(card => {
     card.classList.add('animate__animated')
})

lineForExplore.classList.add('animate__animated')

window.addEventListener('scroll', () => {
     if(window.scrollY > homeSec.offsetTop + 200){
          nav.style.padding = '.5rem var(--align-for-all)'
          navItem.forEach(i => {
               i.style.fontSize = '96%';
          });
     }
     if(window.scrollY < homeSec.offsetTop + 200){
          nav.style.padding = '1rem var(--align-for-all)'
          navItem.forEach(i => {
               i.style.fontSize = '100%';
          });
     }

     if(window.scrollY > homeSec.offsetTop + 200){
          exploreCard.forEach(card => {
               card.style.display = 'block'
               card.classList.add('animate__animated')
               card.classList.add('animate__fadeInUp')
          })
     }
     if(window.scrollY > homeSec.offsetTop + 210){
          lineForExplore.style.display = 'block'
          lineForExplore.classList.add('animate__fadeInUp')
     }
})