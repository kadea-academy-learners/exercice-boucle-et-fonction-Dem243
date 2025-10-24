/*
  Énoncé :
  Écris une fonction `factorielle(n)` qui retourne la factorielle de `n`.
  - Si n est négatif ou invalide, retourner 0
  - Exemple : factorielle(5) => 120

  Signature attendue :
    function factorielle(n) -> number

  Placeholder : levée d'erreur pour indiquer que l'exercice doit être implémenté.
*/
function factorielle(n) {
  // Vérifie si n est un nombre entier positif
  if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) {
    return 0;
  }

  let resultat = 1;
  for (let i = 2; i <= n; i++) {
    resultat *= i;
  }

  return resultat;
}

console.log( factorielle(6));
// Ne pas modifier la ligne ci-dessous
module.exports = {
  factorielle
}