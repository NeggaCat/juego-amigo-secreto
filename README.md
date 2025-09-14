README

Éste juego es solo una práctica para probar y mejorar la lógica de programación.

Intenté comentar lo máximo posible de manera ordenada todas las funciones de una manera simple para que todos puedan entender, 
aunque realmente no es muy conplejo el código.

Éste proyecto trata sobre una lista donde puedes agregar nombres de amigos o cualquier texto, los cuales podrás sortearlos.
Los nombres apareceran en una lista html para que el usuario pueda verlos, puedes agregar nombres repetidos, se puede mejorar para
que no haya repetidos. Entre más veces pongas un nombre más posibilidades tendrá de aparecer en el sorteo.

FUNCIONAMIENTO:
-Toma un string del usuario y pasa por un método para agregarlo a una lista / si el texto está vacío lanzará una alerta (if)
-A su vez  se ejecuta un método que agrega los elementos de la lista original, a otra lista para usar en html y el usuario lo pueda ver.

  Explicación:
  -Asigna una variable de un elemento del html donde irá el texto/lista
  -Limpia el contenido del elemento por si llegara a tener algo
  -usa un for para recorrer cada uno de los elementos de la lista original de nombres, para que por cada elemento de la lista, cree
  un elemento tipo "li", y el contenido de ese elemento se le asigne el mismo nombre del amigo que está iterando. Y así pueda aparecer
  cada nombre en la página

-El método para sortear solo se puede usar si la lista tiene 2 elementos o más (if). Se genera un número aleatoreo entre 0 y 1, ese
número se multiplica por la longitud de elementos de la lista. Se usa una variable para guardar ese indice aleatoreo

-Se asigna una variable la cual será el nombre sorteado, solo se coloca la lista y se usa la varible donde se guardó el indice
aleatoreo

-Al final en el mismo método que el anterior se toma el elemento del html donde irá el texto del nombre sorteado y se
coloca un texto junto a la variable del nombre sorteado.
