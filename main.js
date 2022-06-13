const userName = prompt('Inserisci il tuo nome')

const userSurname = prompt('Inserisci il tuo cognome')

const favColor = prompt('Inserisci il tuo colore preferito')



console.log(userName, userSurname, favColor);




document.getElementById('user-name').innerHTML = userName

document.getElementById('user-surname').innerHTML = userSurname

document.getElementById('user-favourite-color').innerHTML = favColor
