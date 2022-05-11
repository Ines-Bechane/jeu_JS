alert("vous etes bien sur notre site")

//LA PARTIE DU DOM: POUR MODIFIER LA PARTIE HTML LORS D EVENEMENTS
//on a appris a modifier une div
// document.getElementById'"madiv") : qui va recuperer l'emplacement de la div
//innertHTML="le nouveau text"; qui modifier le HTML de la div
document.getElementById("madiv").innerHTML="le nouveau text"

/* ALGORITHMIQUE

   1 VARIABLE
   Lorsque on va stocke
   ou manipulé on va avoir besoin de données on va mettre dans une variable 

   2 CONDITIONS

   3 BOUCLE

   4 FONCTION

*/

//VARIABLE NUMERIQUE SANS GUILLEMENT
//CREATION DE LA VARIABLE NUMERIQUE AGE CONTENANT 30        
age=30;
alert(age);

//VARIABLE CHAINE DE CARACTERE
// CREATION DE LA VARIABLE CHAINE DE CARACTERE NOM CONTENANT MELKI
nom="melki";
alert(nom)


/* 2 LES CONDITIONS */
if (age > 17){
    alert("vous etes majeur ! ");
}
if (age < 18 ){
    alert("vous etes mineur ! ")
}

/* 3 LES BOUCLES */
// objectif : affiche 10 fois l'alerte : je suis heureux x fois !
// ON DEMMARE LA VARIABLE I A 0;ON S ARRETTE A 10.A CHAQUE FOIS ONINCREMENT DE 1
for (i=0;i<3;i++){
    alert ("je suis heureux !")
}

/* 4 LES FONCTIONS */
//SEGMENTER SON CODE 
//ON VA AVOIR DU CODE QUI VA ETRE DANS UNE FONCTION

//CREATION DU CORP DE LA FONCTION
function afficher_alert(){
    //DEBUT DE CODE
    alert("je suis dans la fonction VOILA CE QU IL SE PASSE !")
}

//2.1 l'appel de la fonction
afficher_alert()