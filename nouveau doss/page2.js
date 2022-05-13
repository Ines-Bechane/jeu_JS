/*1 REFAIRE L EXEMPLE DU COURS AFFICHER DANS UNE DIV LES CHIFFRE DE 0 A 9
2 UN CHAMPS (INPUT) EN HTML QUI CONTIENT UN PASSWORD
3 LE JAVASCRIPT IL VA AFFICHE DANS UNE DIV LE TEXTE QUE VOUS AVEZ ECRIT DANS LE INPUT LORSQUE VOUS ECRIVEZ
3.1 LE JAVASCRIPT IL VA AFFICHE DANS LA MEME DIV LE NOMBRE DE CARACTERE / x CARACTERES
3.2 LE JAVASCRIPT IL VA AFFICHE DANS LA MEME DIV SI VOUS AVEZ MOINS QUE 3 CARACTERES OU PLUS 10 CARACTERES CA 
// AFFICHE MOT DE PASSE NON CONFORME 
4 AU DEMARAGE DU SITE DEPUIS JAVASCRIPT VOUS ALLEZ AFFICHEZ 10 BOUTONS
5 LORSQU ON CLIQUE SUR UN DES 10 BOUTON ON AFFICHE DANS UNE DIV EXTERIEUR LA TABLE DE MULTIPLICATION DE LA DIV*/



    document.getElementById("name").addEventListener("keyup",fpwd)
    function fpwd(){
    document.getElementById("pwd").innerHTML=document.getElementById("name").value
}

let text = "hello world"
let length= text.length

console.log(length)


 document.getElementById("name").addEventListener("keyup",fctr_pwd)
 function fctr_pwd(){
     document.getElementById("ctrl_pwd").innerHTML=document.getElementById("name").value.length;
    console.log("test")
 }