function validar(){
    var nome = formProdutoCadastro.nome.value;
    var ID = formProdutoCadastro.ID.value;
    var desc = formProdutoCadastro.desc.value;
    var nomeA = formProdutoCadastro.nomeA.value;
    var tipo = formProdutoCadastro.tipo.value;
    var grupo = formProdutoCadastro.grupo.value;
    var subgrupo = formProdutoCadastro.subgrupo.value;
    var quantidade = formProdutoCadastro.quantidade.value;
    var preço = formProdutoCadastro.preço.value;
    var preçovenda = formProdutoCadastro.preçovenda.value;
      
    if(nome ==""){
        alert ('Preencha o campo Nome !!')
        formProdutoCadastro.nome.focus();
        return false;
    }
    if(ID == ""){
        alert('Preencha o campo do ID !!')
        formProdutoCadastro.ID.focus();
        return false;
    }
    if(desc == ""){
        alert('Preencha o campo do Descrição !!')
        formProdutoCadastro.desc.focus();
        return false;
    }
    if(nomeA == ""){
        alert('Preencha o campo do Nome do Artista !!')
        formProdutoCadastro.nomeA.focus();
        return false;
    }
    if(tipo == ""){
        alert('Preencha o campo do Tipo !!')
        formProdutoCadastro.tipo.focus();
        return false;
    }
    if(grupo == ""){
        alert('Preencha o campo do Grupo !!')
        formProdutoCadastro.grupo.focus();
        return false;
    }
    if(subgrupo == ""){
        alert('Preencha o campo do Sub-Grupo !!')
        formProdutoCadastro.subgrupo.focus();
        return false;
    }
    if(quantidade == ""){
        alert('Preencha o campo do Quantidade de Produtos !!')
        formProdutoCadastro.quantidade.focus();
        return false;
    }
    if(preço == "" || preço <= 0){
        alert('Verifique o campo de Preço ele pode estar vazio ou com valor indevido !!')
        formProdutoCadastro.preço.focus();
        return false;
    }
    if(preçovenda == "" || preçovenda <= preço){
        alert('Seu campo de Preço de Venda está ERRADO! ELE PODE ESTAR VAZIO OU COM O VALOR MENOR OU IGUAL AO DO PREÇO BASE !!!')
        formProdutoCadastro.preçovenda.focus();
        return false;
    }
}