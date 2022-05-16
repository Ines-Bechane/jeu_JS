//appel de la fonction debut lors du click sur le bouton"deb""
document.getElementById("deb").addEventListener("click",debut)

//appel de la fonction debut lors du load de la page
window.addEventListener("load",debut)

document.getElementById("deb").addEventListener("click",ftest)

function ftest(){
    document.getElementById("test").value="ce que je veux"
}

function debut(){
    nom = "Bechane"
    prenom  ="Ines"
    age = "30"
    console.log("Bienvenue je m'apelle " + nom + prenom + age)
    
    prix_article1 = 50
    prix_article2 = 80
    prix_article3 = prix_article1 + prix_article2
    
    console.log("le prix de larticle 1 est " + prix_article1)
    console.log("le prix de larticle 2 est " + prix_article2)
    console.log("la somme des articles sera de " + prix_article3)
}

