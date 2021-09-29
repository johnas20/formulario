function validar_fomulario() {
    // 1. Acceder a los elementos (Se puede acceder a todos o solo los validables)
    // Recordar : que nos estamos aprovechando de las ventajs de HTML y se 
    // impusieron restricciones a los campos
    var usr = document.getElementById('usrtxt')  // Guardo el objeto
    var ema = document.getElementById('ematxt')  // Guardo el objeto
    var pwd = document.getElementById('pwdtxt')  // Guardo el objeto
    var msg = '';
    // 2. Aplicar validaciones 
    if (!usr.checkValidity())
        msg += 'Usuario es requerido y con longitud mínima de 8 caracteres \n'
    if (!ema.checkValidity())
        msg += 'E-mail es requerido y con formato xxxx@xxxx.xxx \n'
    if (!pwd.checkValidity())
        msg += 'Contraseña es requerida y con longitud mínima de 8 caracteres \n'
    if (msg == '')
        msg = 'Todos los campos del formulario son válidos'
    // 3. Notificar el resultado.
    alert(msg)
}

function mostrarPwd() {
    var pwd2 = document.getElementById('pwdtxt')
    pwd2.type = "text";
}

function ocultarPwd() {
    var pwd2 = document.getElementById('pwdtxt')
    pwd2.type = "password";
}