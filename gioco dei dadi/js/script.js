// inizio con l'individuare le variabili che mi saranno d'aiuto
const userNumber = Math.floor( Math.random() * 6);
const cpuNumber = Math.floor( Math.random() * 6);

// stabilisco il vincitore in base al numero più alto
if( userNumber < cpuNumber){
    console.log('Hai perso!')
} else if( userNumber > cpuNumber){
    console.log('Hai vinto!')
} else if( userNumber === cpuNumber){
    console.log('Avete lo stesso numero')
}
console.log(userNumber, cpuNumber)