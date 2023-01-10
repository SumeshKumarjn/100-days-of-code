dynamicUI();
function dynamicUI(){
    const divElement = document.createElement('div');
    divElement.setAttribute('id','divElementID');
    divElement.classList.add9('div-container');

    const paraElement = document.createElement('p');
    paraElement.innerHTML = 'Login';
    paraElement.style.display = 'flex';
    paraElement.style.justifyContent = 'center';

    const inputElement = document.createElement('iput');
    inputElement.placeholder = 'Enter username';
    inputElement.id = 'Username_id';
    inputElement.type = 'text';

    const passwordElement = document.createElement('iput');
    passwordElement.placeholder = 'Enter password';
    passwordElement.id = 'password_id';
    passwordElement.type = 'password';

    const btnElement = document.createElement('button');
    btnElement.placeholder = 'Login';
    btnElement.id = 'btn_id';
    btnElement.type = 'button';

    divElement.appendChild(paraElement);
    divElement.appendChild(inputElement);
    divElement.appendChild(passwoedElement);
    divElement.appendChild(btnElement);

    document.body.appendChild(divElement);
}
