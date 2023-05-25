console.log('JS OK')

//Recupero il placeholder dove verrà indicata la psw

const pswPlaceholder = document.getElementById('psw');
console.log(pswPlaceholder);

const fnamePlaceholder = document.getElementById('fname')

const lnamePlaceholder = document.getElementById('lname')

const colorPlaceholder = document.getElementById('pref-color')

//Dichiaro la variabile assoluta che verrà appostat alla fine della password uguale per tutti
const defaultNumber = 21

//Interrogo nome utente
const fName = prompt('Come ti chiami?');
console.log(fName)


//Interrogo Cognome utente
const lName = prompt('Qual è il tuo cognome?');
console.log(lName)

//Interrogo qual è il suo colore preferito
const userColor = prompt('Qual è il tuo colore prederito?');
console.log(userColor)

//Scrivo sul form i dati

fnamePlaceholder.innerText += ' ' + fName

lnamePlaceholder.innerText += ' ' + lName

colorPlaceholder.innerText += ' ' + userColor

//Genero la password

pswPlaceholder.innerText += ' ' + fName + lName + userColor + defaultNumber
