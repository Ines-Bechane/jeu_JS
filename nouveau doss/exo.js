//appel de la fonction debut lors du click sur le bouton"deb""
document.getElementById("deb").addEventListener("click",debut)

//appel de la fonction debut lors du load de la page
window.addEventListener("load",debut)

document.getElementById("deb").addEventListener("click",ftest)

document.getElementById("btest").addEventListener("click",ftest2)

document.getElementById("btest3").addEventListener("click",ftest3)

document.getElementById("btest4").addEventListener("click",ftest4)

document.getElementById("btest4").addEventListener("click",fdiv)

document.getElementById("btest4").addEventListener("click",fdiv2)

document.getElementById("btest4").addEventListener("click",fdiv3)

document.getElementById("btest4").addEventListener("click",fdiv4)

document.getElementById("b10").addEventListener("click",fb10)

document.getElementById("prenom").addEventListener("keyup",fprenom)

document.getElementById("nom").addEventListener("keyup",fnom)

document.getElementById("age").addEventListener("keyup",fage)

document.getElementById("pwd1").addEventListener("keyup",fpdw)
document.getElementById("pwd2").addEventListener("keyup",fpdw)

document.getElementById("mult").addEventListener("keyup",fmult)

function fmult(){
    val_num=document.getElementById("mult").value
    for(i=0;i<val_num;i++){
    document.getElementById("dmult").innerHTML=document.getElementById("dmult").innerHTML + " " + i
    }
}

function fpdw(){
    mdp1=document.getElementById("pwd1").value
    mdp2=document.getElementById("pwd2").value
    if (mdp1==mdp2){
        document.getElementById("dpwd").innerHTML="les mots de passe sont identique"
    }
    else{
        document.getElementById("dpwd").innerHTML="les mots de passe ne sont pas identique"
    }
}

function fage(){
    //1stocker l'age dans une variable
    v_age=document.getElementById("age").value

    //2 utiliser cette variable avec le systeme decondition 
    if(v_age>0 && v_age<120){
        document.getElementById("dage").innerHTML="l'age est conforme"
    }
    else {
        document.getElementById("dage").innerHTML="l'age doit etre compris entre 0 et 120"

    }
}

function fnom(){
    //document.getElementById("dnom").innerHTML=document.getElementById("nom").value
    taille_nom=document.getElementById("nom").value.length
    if(taille_nom<3) {
        document.getElementById("dnom").innerHTML="Attention votre nom doit faire plus de 3 caractères"
    }
    if(taille_nom>10) {
        document.getElementById("dnom").innerHTML="Attention votre nom doit faire moins de 10 caractères"
    }
    if ( taille_nom>3  &&   taille_nom<10       ) {
        document.getElementById("dnom").innerHTML="Votre nom est conforme"
    }
}


function fprenom() {
    // document.getElementById("dprenom").innerHTML=document.getElementById("prenom").value
    // on stocke dans une variable le nombre de caractere
    taille_prenom=document.getElementById("prenom").value.length
    // cas 1 on est a moins de 3 caractere
    if(taille_prenom<3) {
        document.getElementById("dprenom").innerHTML="Attention votre prenom doit faire plus de 3 caractères"
    }
    // cas 2 on est a plus de 10 caractere
    if(taille_prenom>10) {
        document.getElementById("dprenom").innerHTML="Attention votre prenom doit faire moins de 10 caractères"
    }
    // CAS 3 : SOIT ON FAIRE UN ELSE SOIT ON LE DIT PLUS CLAIREMENT
    // > 3 et <10 
    if ( taille_prenom>3  &&   taille_prenom<10       ) {
        document.getElementById("dprenom").innerHTML="Votre prénom est conforme"
    }
}


function fb10(){
    console.log ("test")

    // faut modifier la valeur du champ number = la valeur + 1
    document.getElementById("textid1").value=parseInt(document.getElementById("textid1").value)+parseInt(document.getElementById("textid2").value)
}

function fdiv4(){
    console.log("vous avez bien cliqué sur le bouton")
    //document.getElementById("madiv4").innerHTML="vous avez cliqué sur le bouton"
    //document.getElementById("madiv4").innerHTML="Vous avez bien cliqué sur le bouton  " + document.getElementById("test").value
    document.getElementById("madiv4").innerHTML=document.getElementById("madiv4").innerHTML + " " + document.getElementById("test").value
}

function fdiv3(){
    console.log ("vous avez cliqué sur le bouton")
    document.getElementById("madiv3").innerHTML="vous avez cliqué sur le bouton"
    document.getElementById("madiv3").innerHTML=document.getElementById("test").value
}

function fdiv2(){
    console.log ("vous avez cliqué sur le bouton")
    document.getElementById("madiv2").innerHTML="vous avez cliqué sur le bouton"
    document.getElementById("madiv2").innerHTML=document.getElementById("test").value
}

function fdiv(){
    console.log ("vous avez bien cliqué sur le bouton")
    document.getElementById("madiv").innerHTML="vous avez bien cliqué sur le bouton"
    document.getElementById("madiv").innerHTML=document.getElementById("test").value
}

function ftest4(){
    document.getElementById("test").value="le dernier nouveau texte !"
}

function ftest3(){
    document.getElementById("test").value="le texte nouveau !"
}

function ftest2(){
    document.getElementById("test").value="nouveau texte !"
}

function ftest(){
    document.getElementById("test").value="ce que je veux"
}

function debut(){
 nom = "Bechane"
    prenom  = "Ines"
    age = "30"
    console.log("Bienvenue je m'apelle " + nom + prenom + age)
    
    prix_article1 = 50
    prix_article2 = 80
    prix_article3 = prix_article1 + prix_article2
    
    console.log("le prix de larticle 1 est " + prix_article1)
    console.log("le prix de larticle 2 est " + prix_article2)
    console.log("la somme des articles sera de " + prix_article3)
}





