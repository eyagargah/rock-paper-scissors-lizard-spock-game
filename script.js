const Close_Modal_Btn = document.querySelector('.closeBtn')
const Rules_Modal = document.querySelector('.modal')
const Open_Rules_Btn = document.querySelector('.openModalBtn')

Open_Rules_Btn.addEventListener('click',()=>{
    Rules_Modal.classList.remove('close')
    Rules_Modal.classList.add('open')
})

Close_Modal_Btn.addEventListener('click',()=>{
    Rules_Modal.classList.remove('open')
    Rules_Modal.classList.add('close')
})