
const userName = prompt('Inserisci il tuo nome')

const userSurname = prompt('Inserisci il tuo cognome')

const favColor = prompt('Inserisci il tuo colore preferito')

const password = userName + userSurname + favColor + '22'

document.getElementById('user-name').innerHTML = userName

document.getElementById('user-surname').innerHTML = userSurname

document.getElementById('user-favourite-color').innerHTML = favColor

document.getElementById('password').innerHTML = password


console.log(userName, userSurname, favColor);
console.log(password)

