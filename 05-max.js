/*
  Énoncé :
  Crée une fonction `max(a, b)` qui retourne :
    - le plus grand des deux nombres
    - la chaîne "Les deux nombres sont égaux" si les deux sont identiques
    - null si un argument n'est pas un nombre valide

  Signature attendue :
    function max(a, b) -> number | string | null

  Placeholder : levée d'erreur pour indiquer que l'exercice doit être implémenté.
*/
function max(a, b) {
  // Exercice non implémenté : retourner le plus grand ou un message si égaux
  // Placeholder neutre : retourne null pour indiquer non-implémentation

  // Vérifie que les deux arguments sont des entiers
  if (typeof a !== "number" || typeof b !== "number" || !Number.isInteger(a) || !Number.isInteger(b)) {
    return null;
  }

  // Compare les deux nombres
  if (a > b) {
    return a;
  } else if (b > a) {
    return b;
  } else {
    return "Les deux nombres sont égaux";

  }

}

console.log(max(65, "65"));

// Ne pas modifier la ligne ci-dessous
module.exports = {
  max
}