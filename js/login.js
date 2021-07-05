function validar(){
    var email = formLogin.email.value;
    var password = formLogin.password.value;
 
    if(email == "" || email.indexOf('@')== -1){
        alert('Preencha o campo de e-mail corretamente!!')
        formLogin.email.focus();
        return false;
    }
    if(email != "artpointdigital@gmail.com"){
        alert('O e-mail digitado não está registrado!!')
        formLogin.email.focus();
        return false;
    }
    if(password == "" || password.length < 8 ){
        alert('Preencha o campo de senha corretamente !!')
        formLogin.password.focus();
        return false;
    }

    if(password != "87654321"){
        alert('A senha digitada não está correta')
        formLogin.password.focus();
        return false;
    }

 }