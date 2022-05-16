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





