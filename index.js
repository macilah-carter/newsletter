const sub = document.querySelector(".subscribe")
const message = document.querySelector(".final")
const section1 = document.querySelector(".section1")
const dismissbtn = document.querySelector('.btn-dismiss')
function mysub(){
    // message.style.display = ""
    section1.style.display = "none"
    message.style.display = "block"
}
sub.addEventListener('click',mysub)

function dismiss(){
    message.style.display = "none"
    section1.style.display = "block"
    
}
dismissbtn.addEventListener('click',dismiss)
