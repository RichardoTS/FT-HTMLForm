let crdNumbers = /^[0-9]{16}$/
let cvcNumbers = /^[0-9]{3}$/
let amtNumbers = /^[0-9]{1,}$/
let FstName = /^[a-zA-Z]{3,}$/
let LstoName = /^[a-zA-Z]{3,}$/
let cityNames = /^[a-zA-Z]{3,}$/
let zipCodes = /^[0-9]{4,7}$/



let form = document.querySelector('form');

form.addEventListener('submit', (evento) => {
    evento.preventDefault();
    let enviar = true;

    let crdNumber = document.querySelector('#cardNumber');
    let errCrdNumber = document.querySelector('.error-cardnumber');

    let crdCvc = document.querySelector('#cardCVC');
    let errCrdCvc = document.querySelector('.error-cvc');

    let crdAmount = document.querySelector('#cardAmount');
    let errCrdAmount = document.querySelector('.error-amount');

    let frstName = document.querySelector('#inputFirstName');
    let errFrstName = document.querySelector('.error-firstname');

    let lstName = document.querySelector('#inputLastName');
    let errLstName = document.querySelector('.error-lastname');

    let daCity = document.querySelector('#cityName');
    let errDaCity = document.querySelector('.error-city');

    let daZip = document.querySelector('#zipCode');
    let errdaZip = document.querySelector('.error-zip');

    let daState = document.querySelector('#selectForm');
    let errState = document.querySelector('.error-state');

    //Validación número tarjeta
    if (crdNumber.value === '') {
        enviar = false;
        crdNumber.classList.add('is-invalid')
        errCrdNumber.innerHTML = "El campo no puede estar vacío";
    } else if (!crdNumbers.test(crdNumber.value)) {
        enviar = false;
        crdNumber.classList.add('is-invalid')
        errCrdNumber.innerHTML = "El campo debe ser de 16 dígitos";
    } else {
        crdNumber.classList.remove('is-invalid')
    }

    //Validación CVC
    if (crdCvc.value === '') {
        enviar = false;
        crdCvc.classList.add('is-invalid')
        errCrdCvc.innerHTML = "El campo no puede estar vacío";
    } else if (!cvcNumbers.test(crdCvc.value)) {
        enviar = false;
        crdCvc.classList.add('is-invalid')
        errCrdCvc.innerHTML = "El campo debe ser de 3 dígitos";
    } else {
        crdCvc.classList.remove('is-invalid')
    }

    //Validación Monto 
    if (crdAmount.value === '') {
        enviar = false;
        crdAmount.classList.add('is-invalid')
        errCrdAmount.innerHTML = "El campo no puede estar vacío";
    } else if (!amtNumbers.test(crdAmount.value)) {
        enviar = false;
        crdAmount.classList.add('is-invalid')
        errCrdAmount.innerHTML = "El monto mínimo es de 1";
    } else {
        crdAmount.classList.remove('is-invalid')
    }

    //Validación Primer Nombre
    if (frstName.value === '') {
        enviar = false;
        frstName.classList.add('is-invalid')
        errFrstName.innerHTML = "El campo no puede estar vacío";
    } else if (!FstName.test(frstName.value)) {
        enviar = false;
        frstName.classList.add('is-invalid')
        errFrstName.innerHTML = "Los caracteres mínimos son 3";
    } else {
        frstName.classList.remove('is-invalid')
    }

    //Validación Apellido
    if (lstName.value === '') {
        enviar = false;
        lstName.classList.add('is-invalid')
        errLstName.innerHTML = "El campo no puede estar vacío";
    } else if (!LstoName.test(lstName.value)) {
        enviar = false;
        lstName.classList.add('is-invalid')
        errLstName.innerHTML = "Los caracteres mínimos son 3";
    } else {
        lstName.classList.remove('is-invalid')
    }

    //Validación Ciudad
    if (daCity.value === '') {
        enviar = false;
        daCity.classList.add('is-invalid')
        errDaCity.innerHTML = "El campo no puede estar vacío";
    } else if (!cityNames.test(daCity.value)) {
        enviar = false;
        daCity.classList.add('is-invalid')
        errDaCity.innerHTML = "Los caracteres mínimos son 3";
    } else {
        daCity.classList.remove('is-invalid')
    }

    //Validación Código Postal
    if (daZip.value === '') {
        enviar = false;
        daZip.classList.add('is-invalid')
        errdaZip.innerHTML = "El campo no puede estar vacío";
    } else if (!zipCodes.test(daZip.value)) {
        enviar = false;
        daZip.classList.add('is-invalid')
        errdaZip.innerHTML = "El campo debe tener mínimo 4 dígitos";
    } else {
        daZip.classList.remove('is-invalid')
    }
    
    // Seleccionar Estado
    if (daState.value === ''){
        enviar = false;   
        daState.classList.add('is-invalid')     
        errState.innerHTML = "Debes seleccionar un estado";        
    }
    


    if (enviar) {
        form.submit();
    }

});








