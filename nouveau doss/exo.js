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

// lorsque je vais ecrire un nombre dans le champ tva 
document.getElementById("tva").addEventListener("keyup", ftva)
function ftva(){
    // val_tva=document.getElementById("tva").value1.2
    val_tva=calcul_TTC(document.getElementById("tva").value)
    // dans la div dtva j'écris la valeur du PRIX TTC : Valeur ecrite 1.2
    document.getElementById("dtva").innerHTML=val_tva
}

// fonction calcul_TTC qui va renvoyé le prix * 1.2 pour renvoye le Prix TTC
// fonction calcul_TVA qui va renvoyé le prix * 0.2 pour renvoye le Prix de la taxe
// fonction calcul_reduc qui va renvoyé le prix * 0.9 pour renvoye le Prix reduit de 10%


// declarer un prix à 100

function calcul_TTC(param_prix){
    // elle créé une variable prix_ttc qui contient le param_prix(100) * 1.2 et elle le renvoie (120)
    prix_ttc= param_prix*1.2   ;
    return prix_ttc
}
// la fonction calcul_ttc est appellé 
le_prix=calcul_TTC(300)
console.log(le_prix)
// la fonction calcul_ttc est appellé 
le_prix=calcul_TTC(200)
console.log(le_prix)
// la fonction calcul_ttc est appellé 
le_prix=calcul_TTC(50)
console.log(le_prix)
// la fonction calcul_ttc est appellé 
le_prix=calcul_TTC(500)
console.log(le_prix) 

function calcul_tva(param_prix){
    montant_tva=param_prix*0.2
    return montant_tva
}
la_tva=calcul_tva(300)
console.log(la_tva)


function calcul_reduc_10(param_prix){
    reduc_10=param_prix*0.9
    return reduc_10
}
reduc=calcul_reduc_10(200)
console.log(reduc)

function calcul_reduc( param_prix , param_reduc){
    result=param_prix*param_reduc
    return result
}
le_prix=calcul_reduc(300,1.50)
console.log("300*1.50=" + le_prix)

function addition( param_n1 , param_n2){
    result=param_n1+param_n2
    return result
}
resultat=addition(25,25)
console.log("25+25="+resultat)

function test2(){
    console.log ("Bonjour")
}
test2()

function test(){
    return "Salut ca va?"
}
a=test();
console.log(a)

function check_age( age ){
    if (age>17){
        return true
    }
    else{
        return false
    }
}
a=check_age(19)
console.log("check_age " + a)

function  verif(nb){
    if(nb>0){
        return true
    }
    else{
        return false
    }
}
b=verif(-5)
console.log(b)

function check_pair(nb){
    if(nb%2==0){
        return true
    }
    else{
        return false
    }
}
c=check_pair(2)
console.log(c)

//portée des variables
//const (constante ca empeche toute modification possible) : a utiliser en priorité 1
// let : A utiliser mais on protege nos bloc de fonction, de if , de boucle 2
//portée (scope) => limité a un bloc
//var : priorité 3
const mavariable="ce que je veux" //variable qui ne peut plus etre modifié
//erreur : mavariable="autre chose"
console.log(mavariable)

//age a 35ans
// avec let on ne peut pas redclarer une variable
let age=35;
console.log(age);

function test20(){
    let age=14
    let var_temp="ce que je veux"
    console.log(var_temp)
    console.log("l'age dans la focntion est : " + age)
}
test20()
console.log(age)

{
    var tr2="test" // liberte : erreurs potentiels avec les autres blocs
    const tre2="test"
    // tre2="je modifier"
    let  tre="test"
    tre="je peux le modifier"
}
console.log(tr2)



let tab=["Ines","Bechane",30,]
console.table(tab)

console.log(tab[2])

for( const element of tab){
    console.log(element)
}

let tab1=[10,20,30,40,50]
console.table(tab1)
console.log(tab1[3])
console.log(tab1[4])

for(const element of tab1){
    console.log(element)
}

console.log("-----------------------DEBUT")
function tsomme(nb){
    let somme=0
    for (let i=0;i<nb;i++){
        somme=i+somme;
       console.log(i)
       console.log(somme)
    }
    return somme
}

let compt=tsomme(15)
console.log(compt)
console.log("-------------------FIN")

function tfactorielle(nb){
    let mult=1
    for (let i=1;i<nb;i++){
        mult=i*mult;
        console.log(i)
        console.log(mult)
    }
    return mult
}
 let multi=tfactorielle(10)   


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



// 1 Creez un tableau de 5 valeurs : Creez une fonction permettant d'inverser
// les deux premieres valeurs d'un tableau
// 2 Afficher un tableau passé en parametre dans une fonction
// 3 Creez un tableau de 5 valeurs : Creez une fonction permettant de 
// trouver la valeur max du tableau
// 4 Creez un tableau de 5 valeurs : Creez une fonction permettant de 
// trouver la position correspondant à la valeur max du tableau
// 5 Creez un tableau de 5 valeurs : Creez une fonction permettant de 
// retourner le nombre de case du tableau
// 6 Creez un tableau de 5 valeurs : Creez une fonction permettant de 
// retourner le nombre de case du tableau
// 7 Creez un tableau de 5 valeurs : Creez une fonction permettant de 
// retourner le somme des cases du tableau


let tab2=[1,2,3,4,5]
console.table(tab2)

function inv_2t(table){
    console.log(table[0])
    console.log(table[1])
   save0=table[0]
   table[0]=table[1]
   table[1]=save0
    return table

}
tab3=inv_2t([1,2,3,4,5])
console.table(tab3)


for (const element of tab2 ){
    console.log(element)
} 
// M2
for (let i=0; i<tab2.length; i++){
  console.log(tab2[i])
}

tab2=[1,2,3,4,5]
console.log(tab2[0])
console.log(tab2[1])
console.log(tab2[2])
console.log(tab2[3])
console.log(tab2[4])

console.log("-------------------DEBUT")
function affiche_tab(tab2){
    for (const element of tab2){
        console.log(element)
    }
}
affiche_tab(tab2)
console.log("-------------------FIN")

for (let i=0; i<tab2.length; i++){
    console.log(tab2[i])
  }



 



  function sup(nb1,nb2){
    if (nb1<nb2){
        return nb2
    }
    else{
        return nb1
    }
  }
  superieur=sup(35,56)
  console.log(superieur)


  let tab_nb=[34,23,198,45,67,78]
  
  function sup_tab(montab){
    valeur=tab_nb[0] 
       // COMPARER(IF) tout les nombres
      // il faut PARCOURIR BOUCLER (FOR) SUR LE TABLEAU
      for (let i=0; i<montab.length; i++){
           // JE COMPARER AVEC LE NOMBRE LE PLUS GRAND TROUVE AVEC CELUI EN COURS
          if (valeur <  montab[i] ){ // 34 EST COMPARE AVEC 198 IL PASSE
              valeur=montab[i] // VALEUR = 198
          } 
      } 
          return valeur
  }
  let nbmax=sup_tab(tab_nb)
  console.log("-----NBMAX : " +  nbmax)


  
  let tab_nb2=[34,23,60,45,67,78]
  //          0   1 2   3  4  5
  // LA PREMIERE > 50
  function sup_tab2(montab){
   
     
      // COMPARER(IF) tout les nombres
      // il faut PARCOURIR BOUCLER (FOR) SUR LE TABLEAU
      for (let i=0; i<montab.length; i++){
           // JE COMPARER AVEC LE NOMBRE LE PLUS GRAND TROUVE AVEC CELUI EN COURS
          if ( montab[i] > 49  ){ // 34 EST COMPARE AVEC 198 IL PASSE 
              return  montab[i] // VALEUR = 198
          } 
      }  
  }
  let nbmax2=sup_tab2(tab_nb2)
  console.log("-----NBMAX2 : " +  nbmax2)
  
