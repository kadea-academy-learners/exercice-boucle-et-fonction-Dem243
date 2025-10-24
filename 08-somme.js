/*
  Énoncé :
  Écrire une fonction `somme(n)` qui retourne la somme des entiers de 1 à n inclus.
  - Exemple : somme(4) => 10
  - Si n est négatif ou invalide, la fonction doit retourner 0

  Signature attendue :
    function somme(n) -> number

  Placeholder : levée d'erreur pour indiquer que l'exercice doit être implémenté.
*/
function somme(n) {
  // Exercice non implémenté : retourner la somme de 1 à n
  // Placeholder neutre : retourne 0 pour indiquer non-implémentation
  if (n < 0 || typeof n !== "number") {
    return 0;
  }
  let resultat = 0;
  for (let i = 1; i <= n; i++) {
    resultat += i

  }
return resultat;
}
console.log(somme(4));

// Ne pas modifier la ligne ci-dessous
module.exports = {
  somme
}