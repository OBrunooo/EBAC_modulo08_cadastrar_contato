const form = document.getElementById('formulario');
const contatos = document.getElementById('contatos');
const nomes = [];
const numeros= [];

form.addEventListener('submit', function(e){
e.preventDefault();

ehvalido()
}) 



function adicionarlinha(){
    const nome = document.getElementById('nome'); 
    const numero = document.getElementById('numero');

    nomes.push(nome.value)
    numeros.push(numero.value)
    let novocontato =`<tr>`;
    novocontato +=`<th>${nome.value}</th>`;
    novocontato +=`<th>${numero.value}</th>`;
    novocontato +=`</tr>`;

    contatos.innerHTML += novocontato
    novocontato = ''
};

function ehvalido(){
    const nome = document.getElementById('nome'); 
    const numero = document.getElementById('numero');
    
    if ((nomes.includes(nome.value)) && (numeros.includes(numero.value))){
        alert(`O nome ${nome.value} e o número ${numero.value} já foram cadastrados`)
    }

    else if (nomes.includes(nome.value)){
        alert(`O nome ${nome.value} já foi cadastrado`)
    }

    else if (numeros.includes(numero.value)){
        alert(`O número ${numero.value} já foi cadastrado`)
    }

    else{
        return adicionarlinha()
    }
}

