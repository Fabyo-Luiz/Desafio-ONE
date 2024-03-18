const textArea = document.querySelector(".conteudo__secao1__texto");
const textMensagem = document.querySelector(".conteudo__secao2");

//criando e configurando o textArea
const mensagem = document.createElement("textArea");
mensagem.style.color = "#495057"
mensagem.style.fontSize = "24px"
mensagem.style.fontWeight = "400"
mensagem.style.width = "336px"
mensagem.style.height = "781px"
mensagem.style.margin = "32px"
mensagem.style.border = "0px"

function btnEncriptar() {

    document.getElementById("imagem").style.display = "none"
    document.getElementById("mensagem").style.display = "none"
    textMensagem.appendChild(mensagem)
    
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado
    textArea.value = "";
}

function encriptar(stringEncriptada) {

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringEncriptada;
}

function btnDesencriptar() {

    document.getElementById("imagem").style.display = "none"
    document.getElementById("mensagem").style.display = "none"
    textMensagem.appendChild(mensagem)
    
    const textoDesencriptado = desencriptar(textArea.value);
    mensagem.value = textoDesencriptado
    textArea.value = "";
}

function desencriptar(stringDesencriptada) {

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return stringDesencriptada;
}