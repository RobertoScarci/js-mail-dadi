// individuo una lista di mail che possono accedere
const listaMail = [
    'pierino@gmail.com',
    'matilde6mitica@gmail.com',
    'franceschino@gmail.com',
    'oronzocanà@gmail.com',
    'lebronthegoat@gmail.com',
    'chefcurry@gmail.com',
    'maninblack@gmail.com',
    'imyourfather@gmail.com',
    'youwerethechoosenone@gmail.com'
]

// chiedo all'utente la sua mail personale per poterla verificare
const userMail = document.querySelector('input')
const button = document.querySelector('button')
const final = document.querySelector('h2.word')

button.addEventListener('click', function(){
    const mail = (userMail.value)

    if( listaMail.includes(mail)){
        final.innerHTML = ('Puoi entrare!')
    } else {
        final.innerHTML = ('Non puoi entrare!')
    }
})





