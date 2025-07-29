let amigos = []

function adicionar_na_lista(nome){
    if (amigos.includes(nome)) return
    amigos.push(nome)
}

function capturar_nome(){
    const textField = document.getElementById("amigo")
    const name = textField.value
    if (name === ""){
        throw Error("Por favor, insira um nome.")
    }
    textField.value = ""
    return name
}

function escreve_lista() {
    const listaHtml = document.getElementById('listaAmigos');
    listaHtml.innerHTML = '';

    for (const nome of amigos) {
        const item = document.createElement('li');
        item.textContent = nome;
        listaHtml.appendChild(item);
    }
}


function adicionarAmigo(){
    try {
        const nome = capturar_nome()
        adicionar_na_lista(nome)
        escreve_lista()

    } catch (error) {
        alert(error.message)
    }

}

/*__________________________SORTEIO__________________________*/

function mostra_vencedor(resultado){
    const listaResultado = document.getElementById('resultado')
    const item = document.createElement('li');
    item.textContent = resultado;
    listaResultado.appendChild(item);

}

function sortearAmigo(){
    if (amigos.length === 0){
        alert("Por favor, insira um nome.")
        return
    }
    const sorteado = Math.floor(Math.random() * amigos.length);
    mostra_vencedor(amigos[sorteado]);
}
