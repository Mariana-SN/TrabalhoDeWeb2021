function validar(){
    var nome = formCadastro.nome.value;
    var email = formCadastro.email.value;
    var senha = formCadastro.senha.value;
    var repSenha = formCadastro.repSenha.value;
    var cpf = formCadastro.cpf.value;
 
    if(nome ==""){
        alert ('Preencha o campo Nome !!')
        formCadastro.nome.focus();
        return false;
    }
    if(email ==""){
     alert ('Preencha o campo E-mail !!')
     formCadastro.email.focus();
     return false;
     }
     if(senha =="" || senha.length <= 7){
     alert ('Preencha o campo Senha com no mínimo 8 caracteres !!')
     formCadastro.senha.focus();
     return false;
     }
     if (senha != repSenha){
         alert ('Senhas diferentes !!');
         formCadastro.repSenha.focus();
         return false;
     }
     if(cpf.length != 11){
         alert ('Preencha o campo CPF com 11 carateres !!')
         formCadastro.cpf.focus();
         return false;
         }

         alert('Cadastro realizado com sucesso')
         
 }