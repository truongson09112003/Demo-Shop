const login = document.querySelector('.js-log-in')
const modal = document.querySelector('.js-modal')
const comeback = document.querySelector('.js-come-back')
const registration = document.querySelector('.js-registration')
const overlay = document.querySelector('.js-overlay')
const bodymodal = document.querySelector('.js-body-modal')




function Showmodal() {
    modal.classList.add('open')

}

function Removemodal() {
    modal.classList.remove('open')
}


login.addEventListener('click', Showmodal)
comeback.addEventListener('click', Removemodal)
overlay.addEventListener('clicl', Removemodal)
bodymodal.addEventListener('click', function(envent) {
    envent.stopImmediatePropagation()
})