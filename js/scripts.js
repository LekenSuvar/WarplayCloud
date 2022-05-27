// Custom Scripts
// Custom scripts

const body = document.querySelector('body')
const hero = document.querySelector('.hero')
const heroBody = document.querySelector('.hero__body')
const logo = document.querySelector('.header__logo')
const navigation = document.querySelector('.header__navigation')
const nav = document.querySelector('.header__nav')
const header = document.querySelector('.header__body')
const burger = document.querySelector('.burger')
const dec3 = document.querySelector('.decoration-3')
const hList = document.querySelector('.header__list')

window.addEventListener('scroll', () =>{
    if(window.scrollY > 1){
        logo.classList.add('change')
        navigation.classList.add('change')
        nav.classList.add('change')
        header.classList.add('change')
        burger.classList.remove('change')
        dec3.style.display = 'none'
    }
    else{
        logo.classList.remove('change')
        navigation.classList.remove('change')
        nav.classList.remove('change')
        header.classList.remove('change')
        if(window.innerWidth > 767) dec3.style.display = 'flex'
    }
})

burger.addEventListener('click', () =>{
    body.classList.toggle('locked')
    burger.classList.toggle('change')
    nav.classList.toggle('change')
    navigation.classList.toggle('column')
    hero.classList.toggle('change')
    heroBody.classList.toggle('change')
    hList.classList.toggle('column')
})
