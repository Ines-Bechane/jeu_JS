/*console.log("Bienvenue sur la page html")

//function java(){
    alert("Bonjour")
    alert("click !")
    
}*/

//code qui fait lequivalent de onclick="java()" en HTML en JS
//en HTML on a onclick situe l'emplacmeent du bouton
//documeent le code HTML l'idendifiant du composant HTML ici : bouton
//element.addEventlistener("click",myfunction)
//mouseover


for(i=0; i<100;i++){
    console.log("le nombre de ma boucle est " + i)
}

for(i=0; i<9;i++){
    document.getElementById("text").innerHTML= document.getElementById("text").innerHTML + "<br /> le nombre de ma boucle est" + i
}


document.getElementById("bouton").addEventListener("click",java)

document.getElementById("bouton").addEventListener("mouseover",java)




function java(){
    /*Methode 1*/
    var_texte=document.getElementById("name").value;
    //document.getElementById("text").innerHTML="le texte contient : "+var_texte;

   
    console.log(var_texte)
    console.log(typeof(var_texte))
    var_texte_tva=var_texte*1.2
    console.log(isNaN(var_texte))
    if ( isNaN(var_texte)== false)

    document.getElementById("text").innerHTML="le prix TTC est : " +var_texte_tva


else{
    document.getElementById("text").innerHTML="veuillez entré un nombre"
}
    

    /*Methode 2*/
    //document.getElementById("text").innerHTML=document.getElementById("name").value
}


//1 CREER UN NOUVEAU DOSSIER 
//2 CREEZ UNE PAGE page.html
//3 METTRE SUR GIT
//4 CREEZ LE LIEN AVEC LE CSS 
//5 CREEZ LE LIEN AVEC LE JS
//6 AU CHARGEMENT DE LA PAGE : Dans la console on affiche bienvenue sur la page html
//7 CREEZ UN BOUTTON DANS LA PAGE
//8 LORSQU ON CLIQUE SUR LE BOUTON IL Y A UNE ALERT AFFICHANT BIENVENUE SUR LE BOUTTON
//9 LORSQU ON CLIQUE SUR LE BOUTON IL Y A UNE ALERT AFFICHANT CE QUI ECRIT SUR LE BOUTON