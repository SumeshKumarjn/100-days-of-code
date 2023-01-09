const divElement = document.createElement('div');
const paraElement = document.createElement('p');
paraElement.innerText = 'Dynamic content';
divElement.appendChild(paraElement);
document.body.appendChild(divElement);
console.log(divElement);