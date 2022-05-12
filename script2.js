
/* Les evenements */
/*function toto(){
    alert("Vous avez cliqué sur le bouton")
 }*/

 function toto(){
    // le prompt permet de demander à l'utilisateur via une boite de dialogue d'entrer un nombre
    // on stocke l'information dans la variable nb_user
   nb_user=prompt("devinez un nombre entre 1 et 100");
   // On l'affiche
   /*alert(nb_user);*/
   console.log(nb_user);
   location.assign("http://google.com")
}