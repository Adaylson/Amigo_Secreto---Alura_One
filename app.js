//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let nomes = [];
let escolhidos = [];

function adicionarAmigo(){
    let nome = document.querySelector("input");
    
    if(nome.value==""){
        alert("Digite um nome, por favor!");

    }else{
        nomes.push(nome.value);

        atualizarElements("listaAmigos", nome.value)
        nome.value = ""
    }
}

function sortearAmigo(){
    if(nomes.length==0 && escolhidos.length==0){
        alert("Digite um nome para começar");

    }else if(nomes.length==0){
        alert("Adicione mais nomes! ");

    }else{
        let alt = parseInt(Math.random()*nomes.length) 
        escolhidos[escolhidos.length] = nomes.splice(alt, 1)[0];

        alert(`Seu amigo secreto é : ${ escolhidos[escolhidos.length-1]}`)
        resetarElements("listaAmigos")
        for(let nome of nomes){
            atualizarElements("listaAmigos", nome) 
        }
    }
}

function atualizarElements(id, elemento){
    let lista = document.getElementById(id);
    lista.style.display = 'block'
    lista.innerHTML +=  `<li>${elemento}</li>`; 
}

function resetarElements(id){
    let lista = document.getElementById(id);
    lista.innerHTML = ""
}