
let listaAmigos = []

//Agrega el nombre que colocó el usuario en listaAmigos
function agregarAmigo(){
let textoAmigo = document.getElementById("amigo").value   //Obtiene variable de nombre que colocó el usuario en caja de imput

if (textoAmigo == ""){              //Manda mensaje tipo alert si la lista está vacía
alert("Por favor inserte un nombre")

}  else{
listaAmigos.push(textoAmigo)     //Agrega la variable del usuario a la lista
limpiaCuadroDeTexto()            //Limpia cuadro de texto
}

//console.log(listaAmigos);        //Visualizar cantidad de nombres de la lista en la consola
AgregaListaEnHTML()              //Agrega nombre de amigo a una lista HTML
}

//Limpia el cuadro de texto "Escribe un nombre"
 function limpiaCuadroDeTexto(){
    document.getElementById("amigo").value = ""
 }

//Agrega lista de amigos a una lista HTML para que el usuario pueda ver los nombres
function AgregaListaEnHTML(){
let ListaHTML = document.getElementById("listaAmigos") //Crea variable para la lista  HTML
ListaHTML.innerHTML = ""                               //Limpia la variable

for (amigo of listaAmigos){
    let nuevoAmigo = document.createElement("li") //Crea un elemento tipo li por cada elemento en listaAmigo
    nuevoAmigo.textContent = amigo                //Cambia el texto del elemento creado al nombre del amigo  que está iterando
    ListaHTML.append(nuevoAmigo)                  //Añade el elemnto creado a la lista HTML
}
}

//Da de manera aleatora uno de los nombres de la lista "listaAmigos"
function sortearAmigo(){
if (listaAmigos.length < 2){
    alert("Agrega un mínimo de 2 nombres para poder sortear") //Verifica si la lista está vacía o tiene menos de 2 nombres agregados

}else{
    let indiceAleatoreo = Math.floor((Math.random()*listaAmigos.length)) //Genera número aleatoreo entre 0 y el número de longitud de la lista
    let nombreSorteado = listaAmigos[indiceAleatoreo]                    //Variable que seleccionó el nombre ya sorteado

    document.getElementById("resultado").innerHTML = `El nombre sorteado fue: ${nombreSorteado}` //Toma el espacio del documento donde irá el nombre sorteado y le agrega texto
}
}