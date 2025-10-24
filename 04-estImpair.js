/*
  Énoncé :
  Écris une fonction `estImpair(n)` qui retourne :
    - true si `n` est un entier impair
    - false si `n` est un entier pair
    - null pour les entrées non numériques ou invalides

  Signature attendue :
    function estImpair(n) -> boolean | null

  Placeholder : levée d'erreur pour indiquer que l'exercice doit être implémenté.
*/
function estImpair(n) {
  // Exercice non implémenté : vérifier si n est impair
  // Placeholder neutre : retourne null pour indiquer non-implémentation
  if (typeof n !== "number" || !Number.isInteger(n)) {
    return null;
  }
  if (!Number.isInteger(n)) {
    return null;
  }


  if (n % 2 !== 0) {
    return true;
  } else {
    return false
  }
}
console.log(estImpair(10));
// Ne pas modifier la ligne ci-dessous
module.exports = {
  estImpair
};