const element = document.getElementById('username');
element.placeholder = 'username';
//element.value = 'sample test';
//element.readOnly = false; // property
//element.readOnly = true; // attribute
element.setAttribute('readonly', true);