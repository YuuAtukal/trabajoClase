
//Playlist
var playlist = [];
var contador = 0;
var canciones = [""];
var i = 0;
var x = 0;
var cont_playlist = 0;
do {
    var opcion = parseInt(prompt("Que desea hacer? " + "\n" + "1) Crear playlist" + "\n" + "2) Abrir playlist" + "\n" + "3) Mostrar todas las playlist"+ "\n" +"4) Salir"));
    if (opcion == 1) {
        //var numero = parseInt(prompt("Ingrese el numero de la playlist"));
        playlist[cont_playlist] = prompt("Ingrese el nombre de la playlist");
        var dec = parseInt(prompt("Que desea hacer?" + "\n" + "1) Agregar temas" + "\n" + "2) Salir"));
        if (dec == 1) {
            var cantidad = parseInt(prompt("Cuantas canciones quiere agregar?"));
            i = 0;
            while (i < cantidad) {
                canciones[cont_playlist] += prompt("Ingrese cancion ")+"\n";
                i = i + 1;
            }
        }
        else if (dec == 2) {
            break;
        }
        cont_playlist++
    }
    else if (opcion == 2) {
        var nomplay = prompt("Ingrese el nombre de la playlist que desea abrir");
        while (x <= playlist.length+1) {
            if (playlist[x] == nomplay) {
                console.log("Playlist: " + playlist[x]);
                console.log("Canciones de la playlist: "+"\n"+canciones[x]);
                break;
            }
                if(x == playlist.length){
                    alert("Playlist inexistente");
                }
            x = x + 1;
        }
        i = 1;
        var dec2 = parseInt(prompt("Que desea hacer?"+ "\n" +"1) Agregar temas"+ "\n" +"2) Salir"+ "\n" +"3) Volver"));
        if(dec2 == 1){
            var cantidad2 = parseInt(prompt("Cuantas canciones quiere agregar?"));
            while (i <= cantidad2) {
                canciones[x] += prompt("Ingrese cancion: ")+"\n";
                i = i + 1;

            }
        }
        else if (dec2 == 2){
            break;
        }
        else if(dec2 == 3){

        }
    }
    else if (opcion == 3){
        console.log(playlist);
    }

} while (opcion != 4 || opcion > 0 && opcion < 4);

/*
//juego del ahorcado

var palabra = ["e","l","e","c","t","r","o","e","n","c","e","f","a","l","o","g","r","a","f","i","s","t","a"];
var letra;
var i = 0;
var error = 0;

var letra = prompt("Hay una palabra misteriosa que debes adivinar ingresando letras, tienes un maximo de 6 fallos. La palabra tiene "+palabra.length+" letras. Ingresa una para empezar");
*/


