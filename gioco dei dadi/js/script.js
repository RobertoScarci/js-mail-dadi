// inizio con l'individuare le variabili che mi saranno d'aiuto
const userNumber = Math.floor( Math.random() * 6) + 1;
const cpuNumber = Math.floor( Math.random() * 6) + 1;
const number = document.querySelector('div.number')
const select = document.querySelector('div.select')
const otherSelect = document.querySelector('div.other-select')


// stabilisco il vincitore in base al numero più alto
if( userNumber < cpuNumber){
    number.innerHTML = ('Hai perso!')
} else if( userNumber > cpuNumber){
    number.innerHTML = ('Hai vinto!')
} else if( userNumber === cpuNumber){
    number.innerHTML = ('Avete Pareggiato!')
}

select.innerHTML = (userNumber)
otherSelect.innerHTML = (cpuNumber)
